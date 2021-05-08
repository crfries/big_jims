import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import Contact from './Contact'
import Gallery from './Galleries'
import Home from './Home'
import Landing from './Landing'

function App() {
  return (
    <Router>
      <Container>
        <Route path='/' component={Landing} exact />
        <Route path='/Contact' component={Contact} />
        <Route path='/Gallery' component={Gallery} />
        <Route path='/Home' component={Home} />
      </Container>
    </Router>
  )
}

export default App

const Container = styled.div`
  min-height: fit-content;
  height: 100vh;
  width: 100%;
  background-color: #000000;
`
