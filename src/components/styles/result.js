import styled from "styled-components";

const Result = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:first-child {
    padding-bottom: 15px;
    border-bottom: 1px solid #b1adab;
    margin-bottom: 15px;
  }
  &:only-child {
    padding-bottom: none;
    border-bottom: none;
    margin-bottom: 30px;
  }
`;
const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 0;
  flex: 1;
`;
const ResultScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ResultImage = styled.img`
  object-fit: contain;
  max-height: 200px;
`;
const Score = styled.div``;

const ScoreItem = styled.div`
  font-size: 0.9rem;
  strong {
    color: #0078d4;
  }
`;

const ResultTextContainer = styled.div`
  margin: 0 30px 0 0;
  flex: 1;
`;
const ResultSubmittedText = styled.div`
  flex: 1;
`;

export {
  Result,
  ResultImageContainer,
  ResultScoreContainer,
  ResultImage,
  Score,
  ScoreItem,
  ResultTextContainer,
  ResultSubmittedText,
};
