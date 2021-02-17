import styled from "styled-components";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DropZone = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.3s ease-in-out;
`;

const ThumbContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;
const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2;
  border: 1px solid #eaeaea;
  margin-bottom: 8;
  margin-right: 8;
  width: 100px;
  height: 100px;
  padding: 4;
  box-sizing: border-box;
`;
const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export { DropzoneContainer, DropZone, ThumbContainer, Thumb, Image };
