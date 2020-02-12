import Link from 'next/link';
import styled from 'styled-components';
import SideMenu from '../components/SideMenu';
import AppWrapper from '../components/AppWrapper';

const Wrapper = styled.div`
  position: relative;
  padding: 7.5% 7.5%;
`;

const Container = styled.div`
  max-width: 100%;
  display: flex;
  margin: 30px 20% 0 0;
`;

const Box = styled.div`
  display: none;
`;

const ImgWrapper = styled.div`
  width: 50%;
  position: relative;
  cursor: pointer;
  &:hover ${Box} {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    justify-content: center;
    padding: 15px 0px;
    background-color: rgba(256,256,256,0.5);
    color: #29332b;
    font-size: 25px;
    font-weight: 400;
  }
`;

const Desc = styled.div`
  display: flex;
  position: absolute;
  bottom: 80px;
  width: 100%;
  justify-content: center;
  padding: 15px 0px;
  background-color: rgba(256,256,256,0.5);
  color: #29332b;
  font-size: 18px;
  font-weight: 300;
`;

const Img = styled.img`
  width: 100%;
`;

const TitleWrapper = styled.div`
  font-size: 35px;
`;

function Badmood() {
  return (
  <AppWrapper>

    <SideMenu />
    <Wrapper>
      <TitleWrapper>
        <span>
          Maybe you need some ways to release
        </span>
        <br />
        <span>
          your emotions.
        </span>
      </TitleWrapper>
      <Container>
        <Link href="/adviceslip">
          <ImgWrapper>
            <Desc>
              <span>I feel depressed, need some encourage.</span>
            </Desc>
            <Box>
              <span>Give me some fortune cookies.</span>
            </Box>
            <Img src="/fortune-cookies-new.jpg" alt="fortune-cookies-new.jpg" />
          </ImgWrapper>
        </Link>
        <Link href="/foass">
          <ImgWrapper>
            <Desc>
              <span>I feel angry, need to blow off my steam.</span>
            </Desc>
            <Box>
              <span>I need shouting at the ocean!</span>
            </Box>
            <Img src="/sea.jpg" alt="sea.jpg" />
          </ImgWrapper>
        </Link>
      </Container>
    </Wrapper>
    <style jsx>{`
      @font-face {
        font-family: 'Apercu';
          src: url('/fonts/ApercuPro.woff2');
          src: url('/fonts/ApercuPro.woff');
          src: url('/fonts/ApercuPro.ttf');
      }
      body {
        font-family: 'Apercu';
        font-size: 110px;
      }
    `}</style>
  </AppWrapper>
  )
}

export default Badmood;
