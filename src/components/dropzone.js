import React, { useContext } from "react";
import { useDropzone } from "react-dropzone";
import {
  DropzoneContainer,
  DropZone,
  ThumbContainer,
  Thumb,
  Image,
} from "./styles/dropzone";

import { PostContext } from "../App";

const Dropzone = () => {
  const [context, setContext] = useContext(PostContext);
  // Setup a state hook for attached files
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file) =>
        Object.assign(file, {
          // set a image object of the uploaded image in local memory
          preview: URL.createObjectURL(file),
        })
      );
      setContext({ ...context, image: acceptedFiles[0] });
    },
  });

  return (
    <DropzoneContainer>
      <DropZone {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <p>Drag an image here, or click to select a file</p>
      </DropZone>
      {context.image.path && (
        <ThumbContainer>
          <Thumb key={context.image.name}>
            <Image src={context.image.preview} alt="Thumb" />
          </Thumb>
        </ThumbContainer>
      )}
    </DropzoneContainer>
  );
};

export default Dropzone;
