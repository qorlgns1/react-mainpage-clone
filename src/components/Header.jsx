import Nav from "./Nav";
import Title from "./Title";
import Document from "./Document";
import Tutorial from "./Tutorial";
import Blog from "./Blog";
import Community from "./Community";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header
      style={{
        backgroundColor: "#191A1F",
        padding: "20px 30px",
      }}
    >
      <Title></Title>
      <Nav>
        <MenuItem>문서</MenuItem>
        <MenuItem>자습서</MenuItem>
        <MenuItem>블로그</MenuItem>
        <MenuItem>커뮤니티</MenuItem>
      </Nav>
    </header>
  );
}

export default Header;
