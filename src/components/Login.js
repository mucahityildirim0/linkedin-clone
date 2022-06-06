import styled from "styled-components";
import loginlogo from "../images/login-logo.svg";

const Login = () => {
  return (
    <div>
      <Container>
        <Nav>
          <a href="/">
            <img src={loginlogo} alt="login-logo" />
          </a>
        </Nav>
      </Container>
    </div>
  );
};

export default Login;

const Container = styled.div``;

const Nav = styled.div``;
