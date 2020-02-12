import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px 20px;
  font-size: 15px;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

function LikeButton(props) {
  const [likes, setLikes] = useState("");

  const getdata = (e) => {
    props.docRef.get().then(doc => {
      setLikes(doc.data()[props.docKey])
    });
  }
  getdata();

  const storedata = (e) => {
    props.docRef.update({
      [props.docKey]: likes+1,
    });

    getdata();
  }  

  return (
    <Wrapper onClick={storedata}>
      <Icon src="/like.svg" alt="like" />
      &nbsp;&nbsp;&nbsp;{likes}
    </Wrapper>
  )
}

export default LikeButton;
