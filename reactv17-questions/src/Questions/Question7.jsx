/*
Question: styled component multiple override css no effect?
Url: https://stackoverflow.com/questions/71005696/styled-component-multiple-override-css-no-effect
 */
import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  ${(props) => {
    return css`
      margin-top: 10px;
      width: 200px;
      padding: 16px 0;
      border: 1px solid;
      color: black;
      font-size: 16px;
      font-weight: 900;
      border-radius: 5px;
      ${props.newStyled}
    `;
  }}
`;

const Button = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

// OPTION 1: WRAPPER THE COMPONENT
function Question7_option1() {
  const DivStyled = styled.div`
    button {
      margin-top: 100px;
    }
`;
  return (<DivStyled>
    <Button>Button</Button>
  </DivStyled>);
}

// OPTION 2: NEW STYLES THROUGH PROPS
function Question7_option2() {
  const newStyled = css`
    margin-top: 100px;
`;
  return (<Button newStyled={newStyled}>Button</Button>);
}

export default Question7_option2;
