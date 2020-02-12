import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Select from 'react-select'
import SideMenu from '../components/SideMenu';
import AppWrapper from '../components/AppWrapper';
var DOMParser = require('xmldom').DOMParser;
import LikeButton from '../components/LikeButton';
import { config } from '../apikey.js';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const Wrapper = styled.div`
  position: relative;
  padding: 7.5% 7.5%;
`;

const TopInfo = styled.div`
  background: rgba(238, 238, 238, 0.5);
  display: flex;
  padding-bottom: 10px;
  position: absolute;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 80px 10px 110px;
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  right: 155px;
  margin-top: 8px;
`;

const PathTitle = styled.span`
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 300;
`;

const PathWrapper = styled.div`
  padding: 10px;
  position: absolute;
  left: 525px;
`;

const Button = styled.button`
  font-weight: 500;
  background: #fff;
  border: solid 2px #1b1b1b;
  border-radius: 50px;
  padding: 10px 20px 10px 25px;
  font-size: 15px;
  letter-spacing: 1px;
  &:hover {
    background: #1b1b1b;
    color: #fff;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

const HeroUnit = styled.div`
  margin-top: 150px;
  padding: 60px;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 200;
  line-height: 30px;
  color: inherit;
  background-color: #eeeeee;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  color: #333333;
`;

const Text = styled.h1`
  margin-bottom: 0;
  font-size: 60px;
  line-height: 1;
  color: inherit;
  letter-spacing: -1px;
`;

const LikeButtonWrapper = styled.div`
  justify-content: flex-end;
  position: absolute;
  right: 110px;
  top: 200px;
`;

const customStyles = {
  container: () => ({
    display: 'inline-block',
  }),
  valueContainer: () => ({
    padding: '0px 10px',
  }),
  input: () => ({
    padding: '0px',
    width: '225px',
    marginTop: '5px',
    marginBottom: '-5px',
  }),
  menu: styles => ({
    ...styles,
    width: '285px',
  }),
  control: styles => ({
    ...styles,
    border: '2px solid rgba(0,0,0,0)',
    boxShadow: 'none',
  }),
}

function Foass(props) {
  const [foassText, setFoassText] = useState(props.html);
  const [key, setKey] = useState(props.foaasKey.replace(/ /g, "").replace(/{name}youarebeingtheusualslimyhypocriticalasshole...Youmayhavehadvaluetenyearsago,butpeoplewillseethatyoudon'tanymore./g, "Deraadt"));
  const [inputValue, setInputValue] = useState({value: props.randomPath, label: props.randomPath});
  
  const [from, setFrom] = useState('Everyone');
  const [name, setName] = useState('Jayden');
  const [company, setCompany] = useState('Googol');
  const [tool, setTool] = useState('scissors');
  const [something, setSomething] = useState('design');
  const [reference, setReference] = useState('Nevaeh');
  const [noun, setNoun] = useState('Chiway');
  const [reaction, setReaction] = useState('smile');
  const [thing, setThing] = useState('angelic bitch');
  const [language, setLanguage] = useState('Mandarin');
  const [behavior, setBehavior] = useState('showing off');
  const [dos, setDo] = useState('Do');

  let keyChange;

  const handleChange = (e) => {
    setInputValue(foaasUrl.filter(option => option.label === e.value));

    keyChange = props.foaasOperation.filter(item => item.url == e.value);
    setKey(keyChange[0].name.replace(/ /g, "").replace(/{name}youarebeingtheusualslimyhypocriticalasshole...Youmayhavehadvaluetenyearsago,butpeoplewillseethatyoudon'tanymore./g, "Deraadt"));

    (async () => {
      const selectUrl = 'https://www.foaas.com'.concat(e.value);
      const fetchSelectUrl = await fetch(selectUrl);
      const fetchSelectUrlParse = await fetchSelectUrl.text();

      return setFoassText(fetchSelectUrlParse);
    })();
  }

  const randomPath = () => {
    (async () => {
      const randomPath = Math.floor(Math.random()*94);
      const randomUrl = props.foaasOperation[randomPath].url;

      setInputValue(foaasUrl.filter(option => option.label === randomUrl));

      keyChange = props.foaasOperation.filter(item => item.url == randomUrl);
      setKey(keyChange[0].name.replace(/ /g, "").replace(/{name}youarebeingtheusualslimyhypocriticalasshole...Youmayhavehadvaluetenyearsago,butpeoplewillseethatyoudon'tanymore./g, "Deraadt"));

      const selectUrl = 'https://www.foaas.com'.concat(randomUrl);
      const fetchSelectUrl = await fetch(selectUrl);
      const fetchSelectUrlParse = await fetchSelectUrl.text();

      if (fetchSelectUrlParse !== foassText) {
        setFoassText(fetchSelectUrlParse);
      };
    })();
  }

  // const doc = new DOMParser().parseFromString(foassText);
  const doc = new DOMParser({
    locator: {},
    errorHandler: { warning: function (w) { }, 
    error: function (e) { }, 
    fatalError: function (e) { console.error(e) } }
  }).parseFromString(foassText);

  const includesReference = doc.getElementById('view-10').textContent.includes(":reference");

  const inputArgument = ['from', 'name', 'company', 'tool', 'something', 'reference', 'noun', 'reaction', 'thing', 'language', 'behavior', 'dos']
  let input = {}
  const showInput =  value => {
    input[value] = doc.getElementById('view-10').textContent.includes(`:${value}`)
  }
  inputArgument.map((value) => {
    showInput(value);
  });

  const text = doc.getElementById('view-10').textContent
    .replace('- :from','')
    .replace('- :reference','')
    .replace(/:from/g, from)
    .replace(/:name/g, name)
    .replace(/:company/g, company)
    .replace(/:tool/g, tool)
    .replace(/:something/g, something)
    .replace(/:reference/g, reference)
    .replace(/:noun/g, noun)
    .replace(/:reaction/g, reaction)
    .replace(/:thing/g, thing)
    .replace(/:language/g, language)
    .replace(/:behavior/g, behavior)
    .replace(/:do/g, dos)
  
  const db = firebase.firestore();
  let ref = db.collection("user-feedback").doc("foass").collection("likes").doc("api_path");

  let foaasUrl = []
  let foaasOperationFilter = props.foaasOperation.filter(item => item.name !== "Version")

  foaasOperationFilter.map((value) => {
    const foaasItem = {
      value: value.url,
      label: value.url,
    }
    foaasUrl.push(foaasItem);
  });

  return (
    <AppWrapper>
      <div style={{ position: 'relative' }}>
        <SideMenu />
        <div style={{
          backgroundImage: "url(/seashore.jpg)",
          backgroundSize: "cover",
          height: "1150px",
          marginRight: '55px',
        }}>
          <TopInfo>
            <form style={{
              marginTop: "5px",
            }}>
              <label style={{display: input.from ? 'inline' : 'none'}}>
                Quote by:&nbsp;
                <input type="text" placeholder="from" onChange={e => setFrom(e.target.value)} value={from} />
                <br />
              </label>
              <label style={{display: input.reference ? 'inline' : 'none'}}>
                Reference:&nbsp;
                <input type="text" placeholder="reference" onChange={e => setReference(e.target.value)} value={reference} />
                <br />
              </label>
              <label style={{display: input.name ? 'inline' : 'none'}}>
                Person you want to fuck:&nbsp;
                <input type="text" placeholder="name" onChange={e => setName(e.target.value)} value={name} />
                <br />
              </label>
              <label style={{display: input.company ? 'inline' : 'none'}}>
                Company you want to fuck:&nbsp;
                <input type="text" placeholder="company" onChange={e => setCompany(e.target.value)} value={company} />
                <br />
              </label>
              <label style={{display: input.tool ? 'inline' : 'none'}}>
                Tool:&nbsp;
                <input type="text" placeholder="tool" onChange={e => setTool(e.target.value)} value={tool} />
                <br />
              </label>
              <label style={{display: input.thing ? 'inline' : 'none'}}>
                Thing:&nbsp;
                <input type="text" placeholder="thing" onChange={e => setThing(e.target.value)} value={thing} />
                <br />
              </label>
              <label style={{display: input.something ? 'inline' : 'none'}}>
                Something:&nbsp;
                <input type="text" placeholder="something" onChange={e => setSomething(e.target.value)} value={something} />
                <br />
              </label>
              <label style={{display: input.reaction ? 'inline' : 'none'}}>
                Reaction:&nbsp;
                <input type="text" placeholder="reaction" onChange={e => setReaction(e.target.value)} value={reaction} />
                <br />
              </label>
              <label style={{display: input.behavior ? 'inline' : 'none'}}>
                Behavior:&nbsp;
                <input type="text" placeholder="behavior" onChange={e => setBehavior(e.target.value)} value={behavior} />
                <br />
              </label>
              <label style={{display: input.noun ? 'inline' : 'none'}}>
                Noun:&nbsp;
                <input type="text" placeholder="noun" onChange={e => setNoun(e.target.value)} value={noun} />
                <br />
              </label>
              <label style={{display: input.language ? 'inline' : 'none'}}>
                Language:&nbsp;
                <input type="text" placeholder="language" onChange={e => setLanguage(e.target.value)} value={language} />
                <br />
              </label>
              <label style={{display: input.dos ? 'inline' : 'none'}}>
                Do:&nbsp;
                <input type="text" placeholder="do" onChange={e => setDo(e.target.value)} value={dos} />
                <br />
              </label>
            </form>
            <PathWrapper>
              <PathTitle>PATH: https://www.foaas.com&nbsp;</PathTitle>          
              <Select
                options={foaasUrl}
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
            </PathWrapper>
            <RightBox>
              <Button onClick={randomPath}>
                FUCK OFF AGAIN
              </Button>
            </RightBox>
          </TopInfo>
          <Wrapper>
            <LikeButtonWrapper>
              <LikeButton docRef={ref} docKey={key}/>
            </LikeButtonWrapper>
            <HeroUnit>
              <Text>{text}</Text>
              <p style={{ marginTop: "20px" }}>
                <em>- {includesReference ? reference : from}</em>
              </p>
            </HeroUnit>
          </Wrapper>
        </div>
      </div>
      <div style={{
        marginTop: "100px",
      }}
        dangerouslySetInnerHTML={{
          __html: props.foassIndex.replace("</table>", `${props.foassIndexTr}</table>`)
        }}
      />
      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
        }
        form {
          font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
          color: #1b1b1b !important;
        }
        label {
          font-size: 20px !important;
          font-weight: 300 !important;
        }
        form input {
          display: inline-block !important;
          font-size: 0.9rem !important;
          border-radius: 4px !important;
          padding: 6px 10px !important;
          border: 2px solid rgba(0,0,0,0) !important;
          margin: 5px !important;
          font-weight: 500 !important;
          box-shadow: none !important;
        }
        form input:focus {
          display: inline-block !important;
          outline: 0 !important;
          border: 2px solid pink !important;
          box-shadow: none !important;
        }
        .css-84bqln-Input input {
          margin-top: 20px !important;
        }
      `}</style>
    </AppWrapper>
  );
}

Foass.getInitialProps = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 500)
  });

  const [foaasOperation, foassIndex, foassIndexTr] = await Promise.all([
    fetch('https://www.foaas.com/operations'),
    fetch('https://www.foaas.com/'),
    fetch('https://www.foaas.com/fucks'),
    ])

  const foaasOperationParse = await foaasOperation.json();
  const foaasOperationParseFilter = foaasOperationParse.filter(item => item.name !== "Version")
  const random = Math.floor(Math.random()*94);
  const randomPath = foaasOperationParseFilter[random].url;
  const randomUrl = 'https://www.foaas.com'.concat(randomPath);

  const fetchRandomUrl = await fetch(randomUrl);
  const foassHtml = await fetchRandomUrl.text();
  const foassIndexParse = await foassIndex.text();
  const foassIndexTrParse = await foassIndexTr.text();

  return {
    html: foassHtml,
    randomUrl: randomUrl,
    foassIndex: foassIndexParse,
    foassIndexTr: foassIndexTrParse,
    foaasKey: foaasOperationParse[random].name,
    foaasOperation: foaasOperationParse,
    randomPath: randomPath,
  };
};

export default Foass;
