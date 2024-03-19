import React from 'react'

const MeetUpContext = React.createContext({
  registered: false,
  name: '',
  category: 'ARTS_AND_CULTURE',
  showErrorMsg: false,
  onChangeCategory: () => {},
  onChangeSearchInput: () => {},
  onChangeRegistered: () => {},
})

export default MeetUpContext
