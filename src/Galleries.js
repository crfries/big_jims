import styled from "styled-components";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { PageTrans } from "./animations";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Galleries = () => {
  const BasicRows = () => <Gallery photos={photos} />;
  return (
    <>
      <Nav />
      <GalleryContainer
        variants={PageTrans}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <BasicRows />
      </GalleryContainer>
      <Footer />
    </>
  );
};

export default Galleries;

const GalleryContainer = styled(motion.div)`
  position: relative;
  height: fit-content;
  width: 100%;
  background-color: #000;
  padding: 2rem 2rem 5rem 2rem;
  transform: translateY(50px);
  overflow-x: hidden;

  img {
    transition: transform linear 0.3s;
    padding: 3px;
    filter: grayscale(1);
    :hover {
      filter: grayscale(0);
      transform: scale(0.95);
    }
  }
`;
