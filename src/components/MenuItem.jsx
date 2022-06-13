import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.button`
  margin-left: 20px;
  color: white;
`;

function MenuItem({ children }) {
  let link = "/";
  if (children === "문서") {
    link = "/document";
  } else if (children === "자습서") {
    link = "/tutorial";
  } else if (children === "블로그") {
    link = "/blog";
  } else if (children === "커뮤니티") {
    link = "/community";
  } else {
    link = "/";
  }

  return (
    <li>
      <Link to={link}>
        <Item>{children}</Item>
      </Link>
    </li>
  );
}

export default MenuItem;
