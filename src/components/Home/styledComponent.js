import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Header = styled.div`
  padding: 20px;
`

export const HomeLogo = styled.img`
  width: 150px;
`

export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 1;
`

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RegisteredName = styled.h1`
  color: #3b82f6;

  font-family: 'Roboto';
  font-size: 50px;
  font-weight: 500;
`

export const RegisteredPara = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  outline: none;
  cursor: pointer;
`

export const Heading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 50px;
  font-weight: bold;
`

export const Para = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`

export const Image = styled.img`
  width: 80%;
  margin-top: 30px;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`
