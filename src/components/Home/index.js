import MeetUpContext from '../../context/MeetUpContext'
import {
  HomeContainer,
  Header,
  HomeLogo,
  HomeContentContainer,
  ToggleContainer,
  RegisteredName,
  RegisteredPara,
  Heading,
  Para,
  RegisterButton,
  Image,
  LinkItem,
} from './styledComponent'

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

const Home = () => (
  <MeetUpContext.Consumer>
    {value => {
      const {registered, name, category} = value
      const displayValueDict = topicsList.find(topic => topic.id === category)
      const {displayText} = displayValueDict
      return (
        <HomeContainer>
          <Header>
            <HomeLogo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </Header>
          <HomeContentContainer>
            <ToggleContainer>
              {registered ? (
                <>
                  <RegisteredName>Hello {name}</RegisteredName>
                  <RegisteredPara>Welcome to {displayText}</RegisteredPara>
                </>
              ) : (
                <>
                  <Heading>Welcome to Meetup</Heading>
                  <Para>Please register for the topic</Para>
                  <LinkItem to="/register">
                    <RegisterButton type="button">Register</RegisterButton>
                  </LinkItem>
                </>
              )}
            </ToggleContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContentContainer>
        </HomeContainer>
      )
    }}
  </MeetUpContext.Consumer>
)

export default Home
