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
    bottom: 30px;
    width: 100%;
    justify-content: center;
    padding: 15px 0px;
    background-color: rgba(256,256,256,0.5);
    color: #29332b;
    font-size: 25px;
    font-weight: 300 !important;
  }
`;

ImgWrapper.displayName = 'ImgWrapper';

const Img = styled.img`
  width: 100%;
`;

const Title = styled.div`
  font-size: 70px;
`;

function Index() {
  return (
    <AppWrapper>
      <SideMenu />
      <Wrapper>
        <Title>
          <span>
            Hey, how do you feel today?
          </span>
        </Title>
        <Container>
          <Link href="/adviceslip">
            <ImgWrapper>
              <Box>
                <span>I'm in good mood.</span>
              </Box>
              <Img src="/index-img-1.jpg" alt="index-img-1.jpg" />
            </ImgWrapper>
          </Link>
          <Link href="/badmood">
            <ImgWrapper>
              <Box>
                <span>I'm out of sort.</span>
              </Box>
              <Img src="/index-img-2.jpg" alt="index-img-2.jpg" />
            </ImgWrapper>
          </Link>
        </Container>
      </Wrapper>
      <style jsx global>{`
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

export default Index;
