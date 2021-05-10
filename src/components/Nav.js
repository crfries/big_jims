import styled from "styled-components";
import logo from "../media/logo.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navigation>
      <Links>
        <div className="link-wrapper">
          <Link to="/home" className="link hover-2">
            Home
          </Link>
        </div>
        <div className="link-wrapper">
          <Link to="/gallery" className="link hover-2">
            Gallery
          </Link>
        </div>
        <div className="link-wrapper">
          <Link to="/contact" className="link hover-2">
            Contact
          </Link>
        </div>
      </Links>
      <Link to="/home">
        <Logo src={logo} />
      </Link>
    </Navigation>
  );
};

export default Nav;

const Navigation = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: 100%;
  margin-bottom: 5rem;
  z-index: 2;

  @media screen and (max-width: 1000px) {
    display: grid;
    place-content: center;
  }
`;
const Logo = styled.img`
  position: relative;
  left: 175px;
  top: 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 1400px) {
    left: 50px;
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 10rem;
    left: 0;
  }
`;

const Links = styled.div`
  height: fit-content;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  position: absolute;
  right: 0;
  transform: translateY(40px);
  text-transform: uppercase;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.6rem;
    transition: all linear 0.2s;
    :hover {
      color: royalblue;
    }
  }
  .link-wrapper {
    position: relative;
    display: block;
  }
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
`;
