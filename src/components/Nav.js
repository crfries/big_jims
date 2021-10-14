import styled from "styled-components"
import logo from "../media/logo.jpg"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <Navigation>
      <Links>
        <div className="link-wrapper">
          <Link to="/home" className="fancy-3">
            Home
          </Link>
        </div>
        <div className="link-wrapper">
          <Link to="/gallery" className="fancy-3">
            Gallery
          </Link>
        </div>
        <div className="link-wrapper">
          <Link to="/contact" className="fancy-3">
            Contact
          </Link>
        </div>
      </Links>
      <Link to="/home">
        <Logo src={logo} />
      </Link>
    </Navigation>
  )
}

export default Nav

const Navigation = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: 100%;
  margin-bottom: 1rem;
  z-index: 2;

  @media screen and (max-width: 1000px) {
    display: grid;
    place-content: center;
  }
`
const Logo = styled.img`
  position: relative;
  left: 3rem;
  top: 2rem;
  padding-bottom: 50px;
  @media screen and (max-width: 1400px) {
    left: 50px;
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 10rem;
    left: 0;
  }
`

const Links = styled.div`
  height: auto;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  right: 0;
  transform: translateY(50px);
  text-transform: uppercase;

  a {
    text-decoration: none;
    font-size: 1.6rem;
  }
  .link-wrapper {
    position: relative;
    display: block;
  }
<<<<<<< HEAD
=======
  .hover-2 {
    padding-bottom: 10px;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 3px;
      transform: scaleX(0);
      background-color: white;
      transition: transform 0.3s;

      @media screen and (max-width: 500px) {
        width: 50%;
      }
    }

    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }
>>>>>>> parent of 865f5ba (bug fix)
  @media screen and (max-width: 1000px) {
    flex-direction: row;
    width: 100%;
    transform: translateY(200px);
    justify-content: space-between;
    padding: 0 3rem;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding-bottom: 5rem;
    text-align: center;
  }
`
