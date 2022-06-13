import { Route } from "react-router-dom";
import Document from "./Document";
import Tutorial from "./Tutorial";
import Blog from "./Blog";
import Community from "./Community";
import styled from "styled-components";

const MainEl = styled.main`
  text-align: center;
  background-color: #282c34;
  color: white;
  padding-bottom: 70px;
`;

const H2 = styled.h2`
  padding: 15px 0;
  color: rgb(97, 218, 251);
  font-size: 45px;
  letter-spacing: 0.01em;
`;

const P = styled.p`
  padding-top: 15px;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.01em;
  font-weight: 200;
  padding-bottom: 40px;
`;

const A = styled.a`
  display: inline-block;
  font-size: 16px;
  background-color: #61dafb;
  color: #000000;
  padding: 10px 25px;
  white-space: nowrap;
`;

const AA = styled(A)`
  color: #61dafb;
  background-color: transparent;
`;

function Main(props) {
  return (
    <>
      <Route exact path="/">
        <MainEl>
          <H2>React</H2>
          <P>사용자 인터페이스를 만들기 위한 Javascript 라이브러리</P>
          <A>시작하기</A>
          <AA href="#">자습서 읽어보기</AA>
        </MainEl>
      </Route>
      <Route path="/document" component={Document} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/blog" component={Blog} />
      <Route path="/community" component={Community} />
    </>
  );
}

export default Main;
