import React, { useContext } from "react";
import { Label } from "office-ui-fabric-react/lib/Label";
import {
  Result,
  ResultImageContainer,
  ResultScoreContainer,
  ResultImage,
  Score,
  ScoreItem,
  ResultTextContainer,
  ResultSubmittedText,
} from "./styles/result";
import { PostContext } from "../App";

function Results() {
  const [context] = useContext(PostContext);

  const imageResults = () => {
    if (Object.entries(context.imageResult).length !== 0) {
      return (
        <Result>
          <ResultImageContainer>
            <Label>Submitted Image</Label>
            <ResultImage src={context.image.preview} alt="Thumb" />
          </ResultImageContainer>
          <ResultScoreContainer>
            <Score>
              <Label>Image Score:</Label>
              <ScoreItem>
                <strong>Adult Classification Score</strong>
                <br />
                {context.imageResult.AdultClassificationScore}
              </ScoreItem>
              <ScoreItem>
                <strong>Is ImageAdult Classified</strong>
                <br />
                {context.imageResult.IsImageAdultClassified.toString()}
              </ScoreItem>
              <ScoreItem>
                <strong>Racy Classification Score</strong>
                <br />
                {context.imageResult.RacyClassificationScore}
              </ScoreItem>
              <ScoreItem>
                <strong>Is ImageRacy Classified</strong>
                <br />
                {context.imageResult.IsImageRacyClassified.toString()}
              </ScoreItem>
              <ScoreItem>
                <strong>Result</strong>
                <br />
                {context.imageResult.Result.toString()}
              </ScoreItem>
              <ScoreItem>
                <strong>Execution Time</strong>
                <br />
                {context.imageResult.totalTime + "ms"}
              </ScoreItem>
            </Score>
          </ResultScoreContainer>
        </Result>
      );
    }
  };

  const htmlTextResults = () => {
    if (Object.entries(context.htmlTextResult).length !== 0) {
      return (
        <Result>
          <ResultTextContainer>
            <Label>Submitted Text (Normalized)</Label>
            <ResultSubmittedText>
              {context.htmlTextResult.NormalizedText}
            </ResultSubmittedText>
          </ResultTextContainer>
          <ResultScoreContainer>
            <Score>
              <Label>Text Score:</Label>
              <ScoreItem>
                <strong>Category 1</strong>
                <br />
                {context.htmlTextResult.Classification.Category1.Score}
              </ScoreItem>
              <ScoreItem>
                <strong>Category 2</strong>
                <br />
                {context.htmlTextResult.Classification.Category2.Score}
              </ScoreItem>
              <ScoreItem>
                <strong>Category 3</strong>
                <br />
                {context.htmlTextResult.Classification.Category3.Score}
              </ScoreItem>
              <ScoreItem>
                <strong>Review Recommended</strong>
                <br />
                {context.htmlTextResult.Classification.ReviewRecommended.toString()}
              </ScoreItem>
              <ScoreItem>
                <strong>Execution Time</strong>
                <br />
                {context.htmlTextResult.totalTime + "ms"}
              </ScoreItem>
            </Score>
          </ResultScoreContainer>
        </Result>
      );
    }
  };
  return (
    <div>
      {imageResults()}
      {htmlTextResults()}
    </div>
  );
}

export default Results;
