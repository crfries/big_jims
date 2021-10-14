import styled from "styled-components"
import { SiFacebook, SiYelp, SiGoogle } from "react-icons/si"
import { PageTrans } from "./animations"
import { motion } from "framer-motion"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

const Contact = () => {
  return (
    <>
      <Nav />
      <ContactContainer
        variants={PageTrans}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ContactInfo>
          <h4>
            Phone:
          </h4>
          <a href="tel:6028662778" target="_blank noreferrer" className="allsides-6">
            602.866.2778
          </a>
          <h4>
            Text:
          </h4>
          <a href="tel:6232044303" target="_blank noreferrer" className="allsides-6">
            623.204.4303
          </a>
          <h4>
            Email:
          </h4>
          <a
            href="mailto:teddyhammond@hotmail.com"
            target="_blank noreferrer"
            className="allsides-6"
          >
            teddyhammond@hotmail.com
          </a>
          <h4>
            Address:
          </h4>
          <a
            href="https://www.google.com/maps/place/2402+W+Phelps+Rd+%233,+Phoenix,+AZ+85023/@33.6375802,-112.1125154,17z/data=!3m1!4b1!4m5!3m4!1s0x872b6eef09b836ff:0x1a7df3e7bfbd2281!8m2!3d33.6375802!4d-112.1103267"
            target="_blank noreferrer"
            className="allsides-6"
          >
            Google Maps
          </a>
          <Reviews>
            <h2>Reviews:</h2>
            <a
              href="https://www.facebook.com/bigjimscustomexhaust"
              target="_blank noreferrer"
            >
              <SiFacebook size="40px" />
            </a>
            <a
              href="https://www.yelp.com/biz/big-jims-custom-exhaust-phoenix"
              target="_blank noreferrer"
            >
              <SiYelp size="40px" />
            </a>
            <a
              href="https://www.google.com/search?gs_ssp=eJzj4tZP1zcsSUk2LchNN2C0UjWosDA3SjJLTU1LMkxLSTIzSLIyqDBPM01KtUw1TzRNTjNOSkr1EkjKTFfIyswtVkityEgsLS4BAPS5FnQ&q=big+jims+exhaust&oq=big+hjim&aqs=chrome.6.69i57j46i13i175i199j0i13i433j46i13l2j0i13j46i13i175i199l2j46i13.4689j0j4&sourceid=chrome&ie=UTF-8#lrd=0x872b6eefb1fdb60b:0x7f5be9e7a5cf3bbe,1,,,"
              target="_blank noreferrer"
            >
              <SiGoogle size="40px" />
            </a>
          </Reviews>
        </ContactInfo>
      </ContactContainer>
      <Footer />
    </>
  )
}

export default Contact

const ContactContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  background: #000;
  align-self: center;
  display: grid;
  place-content: center;
`
const ContactInfo = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: darkgray;
  z-index: 1;
  line-height: 2.5rem;
  
  a {
    color: darkgray;
    margin-right: auto;
    font-size: 2rem;
    padding: 10px;
  }

  h2 {
    display: flex; 
    justify-content: space-between;
  }

  @media screen and (max-width: 650px) {
    font-size: 0.75rem;
    text-align: center;
  }
`
const Reviews = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 1rem;
  transition: all linear 0.3s;

  a {
    padding-left: 25px;
    transition: all linear 0.3s;

    :hover {
      transform: translateY(-5px);
      color: royalblue;
    }
  }
  
  @media screen and (max-width: 650px) {
    flex-direction: column;

    h2 {
      transform: translateX(25px);
      padding-bottom: 1rem;
    }
    svg {
      height: 20px;
      width: 20px;
    }
  }
`
