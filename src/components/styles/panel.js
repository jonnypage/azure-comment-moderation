import styled from "styled-components";
import { DefaultEffects } from "@fluentui/react";

const Panel = styled.form`
  display: flex;
  min-width: 700px;
  max-width: 700px;
  flex-direction: column;
  box-shadow: ${DefaultEffects.elevation8};
  padding: 30px;
  font-size: 1rem;
  line-height: 1.5;
`;

export default Panel;
