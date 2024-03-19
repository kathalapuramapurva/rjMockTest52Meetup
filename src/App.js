import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import NotFound from './components/NotFound'
import './App.css'
import MeetUpContext from './context/MeetUpContext'

class App extends Component {
  state = {
    registered: false,
    name: '',
    category: 'ARTS_AND_CULTURE',
    showErrorMsg: false,
  }

  onChangeCategory = givenCategory => {
    this.setState({category: givenCategory})
  }

  onChangeSearchInput = givenName => {
    this.setState({name: givenName})
  }

  onChangeShowErrorMsg = value => {
    this.setState({showErrorMsg: value})
  }

  onChangeRegistered = () => {
    this.setState({registered: true})
  }

  render() {
    const {name, category, showErrorMsg, registered} = this.state
    return (
      <MeetUpContext.Provider
        value={{
          name,
          category,
          showErrorMsg,
          registered,
          onChangeSearchInput: this.onChangeSearchInput,
          onChangeCategory: this.onChangeCategory,
          onChangeShowErrorMsg: this.onChangeShowErrorMsg,
          onChangeRegistered: this.onChangeRegistered,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetUpContext.Provider>
    )
  }
}

export default App
