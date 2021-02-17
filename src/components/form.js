import React, { useContext } from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import { Label } from "office-ui-fabric-react/lib/Label";
import Dropzone from "./dropzone";
import { Editor } from "@tinymce/tinymce-react";
import StyledForm from "./styles/form";

import { PostContext } from "../App";

const Form = ({ postForm }) => {
  // setup hooks for the image and html text
  const [context, setContext] = useContext(PostContext);

  return (
    <StyledForm>
      <Label>Attach Image</Label>
      <Dropzone />

      <Label>Post</Label>
      <Editor
        apiKey="pbnjgrsv8vjbqdq0jo73unvuc5tqbc5yvf267bupqc06cty4"
        outputFormat="text"
        init={{
          height: 300,
          menubar: false,
          toolbar:
            "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        }}
        onEditorChange={(content, editor) => {
          setContext({ ...context, htmlText: content });
        }}
      />

      <PrimaryButton
        text="Submit"
        onClick={() => {
          postForm();
        }}
        allowDisabledFocus
      />
    </StyledForm>
  );
};

export default Form;
