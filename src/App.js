import 'dotenv/config';
import React, { useState } from 'react';
import Container from './components/styles/container';
import Form from './components/form';
import Results from './components/results';
import Panel from './components/styles/panel';

let defaultPostData = {
  image: '',
  htmlText: '',
  imageResult: {},
  htmlTextResult: {},
  errorMessage: '',
};

export const PostContext = React.createContext(defaultPostData);

function App() {
  const [context, setContext] = useState(defaultPostData);

  const postForm = () => {
    const startTime = new Date().getTime();
    let totalTime = '0ms';
    let aiImageResult = {};
    let aiHtmlTextResult = {};

    // Check for an Image
    if (Object.entries(context.image).length !== 0) {
      //There is an image, submitting to the AI
      fetch(
        'https://westus2.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessImage/Evaluate',
        {
          method: 'POST',
          headers: {
            'content-type': context.image.type,
            'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
          },
          body: context.image,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          totalTime = new Date().getTime() - startTime;

          aiImageResult = { ...data, totalTime: totalTime };
          setContext({
            ...context,
            imageResult: aiImageResult,
            htmlTextResult: aiHtmlTextResult,
          });
        });
    }
    // Check for HTML Text
    if (context.htmlText !== '') {
      //There is text, submitting to the AI
      fetch(
        'https://westus2.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen?classify=True',
        {
          method: 'POST',
          headers: {
            'content-type': 'text/html',
            'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
          },
          body: context.htmlText,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          totalTime = new Date().getTime() - startTime;
          aiHtmlTextResult = { ...data, totalTime: totalTime };
          setContext({
            ...context,
            imageResult: aiImageResult,
            htmlTextResult: aiHtmlTextResult,
          });
        });
    }
  };
  return (
    <PostContext.Provider value={[context, setContext]}>
      <Container>
        <Panel>
          {Object.entries(context.imageResult).length !== 0 ||
          Object.entries(context.htmlTextResult).length !== 0 ? (
            <Results />
          ) : (
            <Form postForm={() => postForm()} />
          )}
        </Panel>
      </Container>
    </PostContext.Provider>
  );
}

export default App;
