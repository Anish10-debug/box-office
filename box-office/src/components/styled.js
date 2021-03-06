/*eslint-disable*/
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
// we use styled-components because the style will be limited to specific components
//unlike css in which the scope is global

//NOTE: React component must always start with an uppercase letter otherwise it wont render
export const FlexGrid = styled(FadeIn)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SearchCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;

  .img-wrapper {
    width: 100%;
    border-radius: 40px;
    height: 420px;
    overflow: hidden;
    border: 1px solid #ddd;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;
//we can also extend this markup of SearchCard in another file
//extended SearchCard markup is written in ShowCard.styled.js

//this will create a square and by using clip path proeprty we will make a star out of it
export const Star = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  /* background-color: #ffc806; */
  background-color: ${props =>
    props.active
      ? '#ffc806'
      : '#ddd'}; //if star is active then yellow otherwise grey
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;
