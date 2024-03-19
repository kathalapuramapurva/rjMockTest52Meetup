import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const HeaderContainer = styled.div`
  padding: 20px;
`

export const Logo = styled.img`
  width: 150px;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const RegisterImage = styled.img`
  width: 450px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 50px;
  font-weight: 500;
`
export const LabelElement = styled.label`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const InputElement = styled.input`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  width: 300px;
  border: 1px solid #64748b;
  padding: 15px 10px;
  border-radius: 5px;
  margin-bottom: 30px;
`

export const SelectElement = styled.select`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  width: 300px;
  border: 1px solid #64748b;
  padding: 15px 10px;
  border-radius: 5px;
  margin-bottom: 30px;
`

export const OptionElement = styled.option`
  color: #334155;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`

export const Button = styled.button`
  align-self: flex-start;
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

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`
