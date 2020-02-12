import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  z-index: 3;
  position: absolute;
  max-height: 100%;
  background: #F7F7F7;
  top: 0;
  bottom: 0;
  right: 0;
  width: 55px;
  overflow: hidden;
  -webkit-transition: width .2s linear;
  transition: width .2s linear;
  -webkit-transform: translateZ(0) scale(1,1);
  box-shadow:  1px 0 15px rgba(0, 0, 0, 0.07);
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;
  &:hover {
    width: 170px;
    overflow: hidden;
    opacity: 1;
  }
`;

const MenuItem = styled.span`
  margin: 15px 0px;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  width: 100%;
  &:hover {
    background: #e0e0e0;
    cursor: pointer;
  }
  ${Wrapper}:hover & {
    padding-left: 35px;
    justify-content: flex-start;
  }
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
`;

const ItemText = styled.span`
  transition: display 100s linear;
  display: none;
  ${Wrapper}:hover & {
    display: inline;
    margin-left: 15px;
    margin-top: 5px;
  }
`;

const Scroll = styled.div`
  display: ${({ render }) => (render ? 'flex' : 'none')};
  position: absolute;
  top: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Wrapper}:hover & {
    display: none;
  }
`;

const Text = styled.div`
  transform: rotate(90deg);
  font-size: 14px;
  letter-spacing: 2px;
  color: rgba(0,0,0,0.5);
  font-family: Avenir;
  font-weight: 300;
`;

const Line = styled.div`
  margin-top: 35px;
  width: 1px;
  height: 100px;
  background-color: rgba(0,0,0,0.3);
`;

function SideMenu() {
  const router = useRouter();

  return (
    <Wrapper>
      <Link href="/">
        <MenuItem>
          <Icon src="/icon_home.png" alt="home" />
          <ItemText>Home</ItemText>
        </MenuItem>
      </Link>
      <Link href="/adviceslip">
        <MenuItem>
          <Icon 
            src="/icon_adviceslip.png"
            alt="home"
            style={{
              marginTop: "8px",
            }}
          />
          <ItemText>Advice Slip</ItemText>
        </MenuItem>
      </Link>
      <Link href="/foass">
        <MenuItem>
          <Icon src="/icon_foass.png" alt="home" />
          <ItemText>Foass</ItemText>
        </MenuItem>
      </Link>
    
      <Scroll
        render={router.pathname == '/adviceslip'|| router.pathname == '/foass'}>
        <Text>
          SCROLL
        </Text>
        <Line />
        <Text style={{marginTop: "12px"}}>
          >>>
        </Text>
      </Scroll>
      <style global jsx>{`
      @font-face {
        font-family: 'Apercu';
          src: url('/fonts/ApercuPro.woff2');
          src: url('/fonts/ApercuPro.woff');
          src: url('/fonts/ApercuPro.ttf');
        }
        body {
          font-family: 'Apercu';
        }
      }
    `}</style>
    </Wrapper>
  )
}

export default SideMenu;
