import styled from "styled-components";
import flag from "../media/flag.jpg";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        <img src={flag} alt="" />
        <h3>Family Owned & Operated</h3>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: absolute;
  display: grid;
  flex-direction: row;
  bottom: auto;
  width: 100%;
  background: #000;

  place-content: center;
  overflow-x: hidden;
  .footer {
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h3 {
      padding-left: 2rem;
      font-size: 1.1rem;
      color: gray;
    }
    img {
      width: 150px;
      z-index: 3;
    }

    @media screen and (max-width: 500px) {
      h3 {
        font-size: 0.8rem;
      }
    }
  }
`;
