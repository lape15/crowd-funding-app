import {useContext} from 'react';
import {PledgeContext} from '../context/modal';
import styled from "styled-components";
import check from '../assets/icon-check.svg'

const ModalWrapper = styled.div`
z-index: 11;
box-shadow: 0 0 3rem rgb(0 ,0, 0,0.5);
top: 20vh;
left:35vw;
margin: 0;
overflow-y: scroll;
opacity:0;
width: 480px;
background-color: hsl(0, 0%, 100%);
border: 1px solid hsl(0, 0%, 90%);
border-radius: 0.5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3rem 1.5rem;
text-align: center;
${({showThanksModal}) => showThanksModal && `
    opacity: 1;
    position: fixed;
    transform: scale(1);
    transform-origin: center;
    transition: all ease 0.5s;
`}
`;

const PledgeButton = styled.button`
    font: 500 16px/1 'Commissioner', sans-serif;
    padding: 1.25rem 2rem;
    border: none;
    border-radius: 1.75rem;
    outline: none;
    background-color: hsl(176, 50%, 47%);
    color: hsl(0, 0%, 100%);
    transition: background-color 0.25s ease;
    &:hover{
        background-color: hsl(176, 72%, 28%);
        cursor: pointer;
    }
`;
const ThanksModal = () => {

    const {state:{showThanksModal}} = useContext(PledgeContext);
    return (  
    <ModalWrapper showThanksModal={showThanksModal}>
        <img src={check} alt="check"/>
       <h3 style={{
            marginTop: '10px'
       }}>Thanks for your support!</h3>
       <p style={{
           lineHeight: 2.2,
            color: 'grey',
            margin: '10px'
       }}>
       Your pledge brings
        us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
        You will get an email once our campaign is completed.
       </p>
       <PledgeButton>
            Got it! 
       </PledgeButton>
    </ModalWrapper>)
}

export default ThanksModal;