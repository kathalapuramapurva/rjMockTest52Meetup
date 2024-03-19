import {Component} from 'react'
import {
  AppContainer,
  HeaderContainer,
  Logo,
  ContentContainer,
  RegisterImage,
  FormContainer,
  FormHeading,
  LabelElement,
  InputElement,
  SelectElement,
  OptionElement,
  Button,
  ErrorMsg,
} from './styledComponent'
import MeetUpContext from '../../context/MeetUpContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterForm extends Component {
  render() {
    return (
      <MeetUpContext.Consumer>
        {value => {
          const {
            name,
            category,
            showErrorMsg,
            onChangeCategory,
            onChangeSearchInput,
            onChangeShowErrorMsg,
            onChangeRegistered,
          } = value
          const changeName = event => {
            onChangeSearchInput(event.target.value)
          }
          const changeCategory = event => {
            onChangeCategory(event.target.value)
          }

          const onSubmitForm = event => {
            event.preventDefault()
            if (name !== '') {
              onChangeShowErrorMsg(false)
              onChangeRegistered()
              const {history} = this.props
              history.replace('/')
            } else {
              onChangeShowErrorMsg(true)
            }
          }

          return (
            <AppContainer>
              <HeaderContainer>
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </HeaderContainer>
              <ContentContainer>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <FormContainer onSubmit={onSubmitForm}>
                  <FormHeading>Let us join</FormHeading>
                  <LabelElement htmlFor="name">NAME</LabelElement>
                  <InputElement
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={changeName}
                  />
                  <LabelElement htmlFor="topics">TOPICS</LabelElement>
                  <SelectElement
                    id="topics"
                    value={category}
                    onChange={changeCategory}
                  >
                    {topicsList.map(topic => (
                      <OptionElement key={topic.id} value={topic.id}>
                        {topic.displayText}
                      </OptionElement>
                    ))}
                  </SelectElement>
                  <Button type="submit">Register Now</Button>
                  {showErrorMsg && <ErrorMsg>Please enter your name</ErrorMsg>}
                </FormContainer>
              </ContentContainer>
            </AppContainer>
          )
        }}
      </MeetUpContext.Consumer>
    )
  }
}

export default RegisterForm
