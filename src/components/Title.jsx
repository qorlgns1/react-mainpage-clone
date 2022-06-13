import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.svg";

const StyledLink = styled(Link)`
  display: inline-block;
  color: #54d1fa;
  font-weight: bold;
  font-size: 20px;
  margin-right: 100px;
  text-decoration: none;
  &::before {
    display: inline-block;
    width: 20px;
    height: 20px;
    content: "";
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    vertical-align: text-top;
    margin-right: 10px;
  }
`;

function Title(props) {
  return (
    <>
      <StyledLink to="/">React</StyledLink>
    </>
  );
}

export default Title;
