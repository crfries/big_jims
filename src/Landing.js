import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "./media/logo.jpg";
import { LandingPageTrans } from "./animations";

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
          <Button>Enter</Button>
        </Link>
        <Link to="/contact">
          <Button>Contact</Button>
        </Link>
      </LandingContent>
    </LandingContainer>
  );
};

export default Landing;

const LandingContainer = styled(motion.main)`
  height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;

  img {
    padding-bottom: 3rem;
    width: 100%;
    max-width: 400px;
  }
`;

const LandingContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  display: grid;
  place-content: center;
  align-self: center;
  background-color: transparent;
  margin: 1rem 0;
  border: 1px solid #fff;
  outline: none;
  cursor: pointer;
  color: white;
  transition: all linear 0.3s;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 300;

  :hover {
    background: royalblue;
    color: #fff;
  }
`;
