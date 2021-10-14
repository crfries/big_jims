import { Link } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "./media/logo.jpg"
import { LandingPageTrans } from "./animations"

const Landing = () => {
  return (
    <LandingContainer>
      <LandingContent
        variants={LandingPageTrans}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <img src={logo} alt="logo" />
        <Link to="/home">
          <Button className="thick-4">Enter</Button>
        </Link>
        <Link to="/contact">
          <Button className="thick-4">Contact</Button>
        </Link>
      </LandingContent>
    </LandingContainer>
  )
}

export default Landing

const LandingContainer = styled(motion.main)`
  height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;

  img {
    width: 100%;
    width: 400px;
    margin-bottom: 20px;
  }
`

const LandingContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  width: 150px;
  height: 50px;
  display: grid;
  place-content: center;
  align-self: center;
  margin: 1rem 0;
  border: 1px solid #fff;
  outline: none;
  cursor: pointer;
  transition: all linear 0.3s;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  color: #fff;
`
