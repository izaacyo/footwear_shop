import React, {useState } from 'react'
import styled from 'styled-components'
import { login} from '../redux/apiCalls';
import {mobile} from "../responsive";
import { useDispatch, useSelector } from 'react-redux';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  `

  const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color:green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error=styled.span`
color:red
`

const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}



const Login = () => {
  const [user, setUser] = useState(initialState)


  const {email, password, err, success} = user


  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input type="text" id="email" name="email"
            placeholder="Email Address" value={email}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
          />
          <Button type= "submit">
            LOGIN
          </Button>
          <Link to="/forgot_password">DO NOT YOU REMEMBER THE PASSWORD?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
