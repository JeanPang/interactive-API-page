import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Select from 'react-select'
import SideMenu from '../components/SideMenu';
import AppWrapper from '../components/AppWrapper';
import LikeButton from '../components/LikeButton';
import { config } from '../apikey.js';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const Wrapper = styled.div`
  position: relative;
  padding: 7.5% 7.5%;
`;

const Container = styled.div`
  max-width: 100%;
  display: flex;
  position: relative;
`;

const RightBoxTop = styled.div`
  width: 20%;
  right: -50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
  top: 0;
`;

const RightBoxBottom = styled.div`
  width: 20%;
  right: -50px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  bottom: 0;
`;

const SlipId = styled.span`
  font-size: 15px;
  letter-spacing: 1px;
`;

const SlipIdWrapper = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  background: #fff;
  border: solid 2px #1b1b1b;
  border-radius: 50px;
  padding: 10px 15px 10px 20px;
  font-size: 15px;
  letter-spacing: 1px;
  &:hover {
    background: #1b1b1b;
    color: #fff;
    pointer: cursor;
  }
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

const Box = styled.div`
  display: none;
`;

const ImgWrapper = styled.div`
  margin: 30px 20% 0 0;
  width: 100%;
  height: 550px;
  overflow: hidden;
  display: flex;
  align-items: center;
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
    font-weight: 300;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TitleWrapper = styled.div`
  font-size: 35px;
  line-height: 35px;
  margin-right: 200px;
`;

const customStyles = {
  container: () => ({
    display: 'inline-block',
  }),
  valueContainer: () => ({
    padding: '8px 10px',
    display: 'flex',
    justifyContent: 'center',
  }),
  singleValue: styles => ({
    ...styles,
    fontSize: '35px',
    padding: '10px 0px',
    margin: '2px 0px',
  }),
  input: () => ({
    padding: '0px',
    width: '60px',
    marginTop: '5px',
    marginBottom: '-5px',
  }),
  menu: styles => ({
    ...styles,
    width: '110px',
    top: '50%',
  }),
  control: styles => ({
    ...styles,
    border: '2px solid rgba(0,0,0,0.1)',
    boxShadow: 'none',
  }),
}

function AdviceSlip(props) {
  const [adviceSlipText, setAdviceSlipText] = useState(props.adviceSlip.advice);
  const [selectedValue, setSelectedValue] = useState({value: props.adviceSlip.slip_id, label: props.adviceSlip.slip_id});
  const [unsplashSrc, setUnsplashSrc] = useState(props.unsplash.urls.regular);
  const [inputValue, setInputValue] = useState({value: props.adviceSlip.slip_id, label: props.adviceSlip.slip_id});

  const handleChange = (e) => {
    setSelectedValue({value: e.value, label: e.value});
    setInputValue(slipIdArray.filter(option => option.label === e.value));

    (async () => {
      const selectSlipId = 'https://api.adviceslip.com/advice/'.concat(e.value)
      const fetchSelectSlipId = await fetch(selectSlipId);
      const fetchSelectSlipIdParse = await fetchSelectSlipId.json();

      const unsplash = await fetch('https://api.unsplash.com/collections/341312/photos?per_page=20&client_id=a4750dbdb38cc20997c5734edc4218892a0bc1af8477cce656da43634d8732e3').then(value => value.json());
      const unsplashRandom = unsplash[Math.floor(Math.random()*20)];

      setUnsplashSrc(unsplashRandom.urls.regular);

      return setAdviceSlipText(fetchSelectSlipIdParse.slip.advice);
    })();
  }

  const randomPath = () => {
    (async () => {

      const randomNo = Math.floor(Math.random()*94)
      setSelectedValue({value: randomNo, label: randomNo})
      setInputValue(slipIdArray.filter(option => option.label === randomNo));

      const selectSlipId = 'https://api.adviceslip.com/advice/'.concat(randomNo)
      const fetchSelectSlipId = await fetch(selectSlipId);
      const fetchSelectSlipIdParse = await fetchSelectSlipId.json();

      if (fetchSelectSlipIdParse.slip.advice !== adviceSlipText) {
        setAdviceSlipText(fetchSelectSlipIdParse.slip.advice);

        const unsplash = await fetch('https://api.unsplash.com/collections/341312/photos?per_page=20&client_id=a4750dbdb38cc20997c5734edc4218892a0bc1af8477cce656da43634d8732e3').then(value => value.json());
        const unsplashRandom = unsplash[Math.floor(Math.random()*20)];
        setUnsplashSrc(unsplashRandom.urls.regular);
      };
    })();
  }

  const db = firebase.firestore();
  let ref = db.collection("user-feedback").doc("adviceslip").collection("likes").doc("slip_id");

  let slipIdArray = [];
  let i;
  for (i = 1; i < 218; i++) {
    const slipIdItem = {
      value: i,
      label: i,
    }
    slipIdArray.push(slipIdItem);
  }

  const find = '/assets/';
  const re = new RegExp(find, 'g');

  return (
    <AppWrapper>
      <div style={{ position: 'relative' }}>
        <SideMenu />
        <Wrapper>
          <TitleWrapper>
            <span>
              {adviceSlipText}
            </span>
          </TitleWrapper>
          <Container>
            <ImgWrapper>
              <Img src={unsplashSrc} alt="unsplash random image" />
            </ImgWrapper>
            <RightBoxTop>
              <LikeButton docRef={ref} docKey={selectedValue.value}/>
            </RightBoxTop>
            <RightBoxBottom>
              <SlipIdWrapper>
                <SlipId>Slip Id:&nbsp;&nbsp;</SlipId>
                <Select
                  options={slipIdArray}
                  styles={customStyles}
                  onChange={handleChange}
                  value={inputValue}
                  theme={theme => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: 'rgba(246, 195, 204, 0.5)',
                      primary: '#edabb6',
                      primary50: 'rgba(246, 195, 204, 0.8)',
                      neutral30: 'pink',
                    },
                })}/>
              </SlipIdWrapper>
              <Button onClick={randomPath}>
                random quote
              </Button>
            </RightBoxBottom>
          </Container>
        </Wrapper>
      </div>
      <div style={{
        borderTop: "solid 2px rgba(0,0,0,0.1)",
        paddingTop: "50px",
      }}
        dangerouslySetInnerHTML={{
          __html: props.adviceSlipIndex.replace(re, "https://api.adviceSlip.com/assets/")
        }}
      />
      <style global jsx>{`
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
        .css-4tuput-Input input {
          font-size: 35px !important;
          padding: 4px 0px !important;
          width: 60px !important;
          text-align: center !important;
        }
      `}</style>
    </AppWrapper>
  );
}

AdviceSlip.getInitialProps = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 500)
  })
  
  const [adviceSlip,unsplash, adviceSlipIndex] = await Promise.all([
    fetch('https://api.adviceslip.com/advice').then(value => value.json()),
    fetch('https://api.unsplash.com/collections/341312/photos?per_page=20&client_id=a4750dbdb38cc20997c5734edc4218892a0bc1af8477cce656da43634d8732e3').then(value => value.json()),
    fetch('https://api.adviceslip.com/')
    ])

  const adviceSlipIndexParse = await adviceSlipIndex.text();

  return {
    adviceSlip: adviceSlip.slip,
    unsplash: unsplash[Math.floor(Math.random()*20)],
    adviceSlipIndex: adviceSlipIndexParse,
  }
};

export default AdviceSlip;
