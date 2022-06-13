import styled from "styled-components";
const Ul = styled.ul`
  display: flex;
`;

function Nav(props) {
  return (
    <nav style={{ display: "inline-block", verticalAlign: "text-top" }}>
      <Ul>{props.children}</Ul>
    </nav>
  );
}

export default Nav;
