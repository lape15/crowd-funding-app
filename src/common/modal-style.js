import styled from "styled-components";

const ModalWrapper = styled.div`
z-index: 11;
height: 70vh;
box-shadow: 0 0 3rem rgb(0 ,0, 0,0.5);
top: 10vh;
margin: 0;
padding: 3rem 1.8rem;
overflow-y: scroll;
outline: none;
border: none;
width: 700px;
left:  calc(50% - 350px);
transform: scale(0.95);
background-color: hsl(0, 0%, 100%);
border: 1px solid hsl(0, 0%, 90%);
opacity:0;
border-radius: 0.5rem;
transform-origin: center;
font-family:'Commissioner', sans-serif;
&::-webkit-scrollbar{
    -webkit-appearance: none; 
}
${({showModal}) => showModal && `
    opacity: 1;
    position: fixed;
    transform: scale(1);
    transform-origin: center;
    transition: all ease 0.5s;
`}
@media(max-width: 512px){
    width:100%;
    left: 0;
}
`;

const ModalHeaderSection =  styled.nav`
width: 100%;
display: flex;
flex-wrap: wrap;
font-family:'Commissioner', sans-serif;
`;

const ModalHeader= styled.h3`
font-weight: 700;
width: 100%;
`
const  ModalCloseContainer = styled.div`
width: 100%;
text-align: right;
margin-bottom: 1rem
`;

const ModalClose = styled.img`
cursor: pointer;
`;

const ModalSentence = styled.p`
margin-top: 10px;
font-size: 1rem;
line-height: 2;
color: grey;
font-family:'Commissioner', sans-serif;
`;

const ModalContent = styled.form`
display: flex;
flex-direction: column;
`

const PledgeBoardItem = styled.div`
flex-basis: 100%;
padding: 2rem 1.5rem;
border: 1px solid hsl(0, 0%, 90%);
border-radius: 0.5rem;
margin-top: 2rem;
height: 160px;
max-height: 160px;
transition: all ease 0.5;
${({noReward,bamboo,black,mahogany }) => (noReward || black || bamboo || mahogany )&& `
    border-color: hsl(176, 50%, 47%);
    max-height: 400px;
    transition: all ease 0.5;
`}
`

const PledgeInput = styled.input`
display: none;
`
const PledgeInputTextWrapper = styled.div`
position: relative;
&:before{
content: "$";
font-size: 1rem;
position: absolute;
top: 10px;
left: 10px;
}
@media(max-width: 512px){
    margin: 15px 0;
}
`;


const PledgeInputText= styled.input`
padding: 10px 26px;
border-radius: 16px;
font-size: 1rem;
border: 1px solid hsl(0, 0%, 90%);  
width: 100%;
`;

const PledgeRadio = styled.div`
position: relative;
display: inline-block;
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
cursor: pointer;
border: 1px solid hsl(0, 0%, 90%);
margin-right: 1rem;
flex-shrink: 0;
transition: border-color 0.25s ease;
${({noReward, bamboo, black, mahogany}) => ( noReward || bamboo || black || mahogany) && `

&:after {
    background: hsl(176, 50%, 47%);
    content: '';
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 3px;
    left: 3px;
}
`}
`
const PledgeModalTitleSection = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
&:hover > label {
    color: hsl(176, 50%, 47%);
  }
  &:hover > .pledge_radio{
    border-color: hsl(176, 50%, 47%);
  }
`;

const ModalSectionInput = styled.div`
padding: 10px 0px 10px 35px;
display:flex;
justify-content: space-between;
align-items: center;
margin-top: 1.5rem;
opacity:0;
transition: opacity ease 0.3;
@media(max-width: 512px){
    display: block;
}
${({noReward, bamboo,black, mahogany}) =>( noReward || bamboo || black || mahogany)&& `
    opacity: 1;
    transition: opactiy 0.3s ease;
`}
`;

const PledgeModalButton = styled.button`
padding:  10px 20px;
border: none;
background: hsl(176, 50%, 47%);
color: white;
font-weight: 700;
border-radius: 20px;
font-size: 1rem;
outline: none;
cursor: pointer;
transition: background-color o.3s;
&:hover{
background-color: hsl(176, 72%, 28%);
}
`
;

export {
    ModalWrapper,
    ModalHeaderSection,
    ModalHeader,
    ModalCloseContainer,
    ModalClose ,
    ModalSentence,
    ModalContent,
    PledgeBoardItem,
    PledgeInput,
    PledgeInputTextWrapper,
    PledgeInputText,
    PledgeRadio,
    PledgeModalTitleSection,
    ModalSectionInput,
    PledgeModalButton
}