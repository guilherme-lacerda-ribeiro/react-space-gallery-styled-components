import styled from "styled-components";

const Titulo = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #7B78E6;
  text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
`

export default Titulo