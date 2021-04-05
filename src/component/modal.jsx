import {useContext, useEffect, useRef} from 'react';
import styled from "styled-components";
import {PledgeContext} from '../context/modal'
import close from "../assets/icon-close-modal.svg";
import {PledgeStock,Stock, PledgeDetails,PledgeTitlte} from '../common/style'

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
    font-family:'Commissioner', sans-serif;
    transition: all ease 0.5s;
    &::-webkit-scrollbar{
        -webkit-appearance: none; 
    }
    ${({showModal}) => showModal && `
        opacity: 1;
        position: fixed;
        transform: scale(1);
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

 const MobileHeader= styled.h3`
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
    border: 1px solid hsl(0, 0%, 90%);
    margin-right: 1rem;
    flex-shrink: 0;
    transition: border-color 0.25s ease;
`
const PledgeModalTitleSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const ModalSectionInput = styled.div`
    padding: 10px 0px 10px 35px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    @media(max-width: 512px){
        display: block;
    }
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

const Modal = () => {
    
        const {state:{showModal}, dispatch} = useContext(PledgeContext);
    
    return <ModalWrapper showModal={showModal}>
        <ModalHeaderSection>
        <ModalCloseContainer>
            <ModalClose src={close} alt="close" onClick={() => dispatch({
       type: 'SWITCH_MODAL'
   })}/>
        </ModalCloseContainer>
        <MobileHeader>
            Back this project
        </MobileHeader>
        </ModalHeaderSection>
        <ModalSentence>
        Want to support us in bringing Mastercraft Bamboo Monitor
        Riser out in the world?
        </ModalSentence>
        <ModalContent>
            <PledgeBoardItem>
                <PledgeModalTitleSection>
                <PledgeTitlte>
                   <PledgeInput type="radio"/> 
                   <PledgeRadio/>
                   <label>Pledge with no reward</label>
                </PledgeTitlte>
                </PledgeModalTitleSection>
                <PledgeDetails extra>
                Choose to support us without a
                reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                </PledgeDetails>
                <ModalSectionInput>
                    <label>
                        Enter your pledge
                    </label>
                    <PledgeInputTextWrapper>

                    <PledgeInputText type="text" value="" placeholder="0.00"/>
                    </PledgeInputTextWrapper>

                    <PledgeModalButton>Continue</PledgeModalButton>
                </ModalSectionInput>
            </PledgeBoardItem>
            <PledgeBoardItem>
            <PledgeModalTitleSection>
            <PledgeTitlte>
                   <PledgeInput type="radio"/> 
                   <PledgeRadio/>
                   <label>Bamboo Stand</label>
                </PledgeTitlte>
                <PledgeTitlte green>
                Pledge $25 or more
                </PledgeTitlte>
                <PledgeStock right>
                    <Stock>
                    101
                    </Stock>
                    <span>
                    left
                    </span>
                </PledgeStock>
                </PledgeModalTitleSection>
                <PledgeDetails extra>
                You
            get an ergonomic stand made of natural bamboo. You've helped us launch our
             promotional campaign, and you’ll be added to a special Backer member list.
                </PledgeDetails>
                <ModalSectionInput>
                    <label>
                        Enter your pledge
                    </label>
                    <PledgeInputTextWrapper>

                    <PledgeInputText type="text" value="" placeholder="0.00"/>
                    </PledgeInputTextWrapper>

                    <PledgeModalButton>Continue</PledgeModalButton>
                </ModalSectionInput>
            </PledgeBoardItem>
            <PledgeBoardItem>
                <PledgeModalTitleSection>
                    <PledgeTitlte>
                    <PledgeInput type="radio"/> 
                   <PledgeRadio/>
                   <label>Black Edition Stand</label>
                    </PledgeTitlte>
                    <PledgeTitlte green>
                        Pledge $75 or more
                    </PledgeTitlte>
                    <PledgeStock right>
                    <Stock>
                    64
                    </Stock>
                    <span>
                    left
                    </span>
                </PledgeStock>
                </PledgeModalTitleSection>
                <PledgeDetails extra>
                You
                get a Black Special Edition computer stand and a personal   thank you. You’ll
                be added to our Backer member list. Shipping is included.
                </PledgeDetails>
                <ModalSectionInput>
                    <label>
                        Enter your pledge
                    </label>
                    <PledgeInputTextWrapper>

                    <PledgeInputText type="text" value="" placeholder="0.00"/>
                    </PledgeInputTextWrapper>

                    <PledgeModalButton>Continue</PledgeModalButton>
                </ModalSectionInput>
            </PledgeBoardItem>

            <PledgeBoardItem>
                <PledgeModalTitleSection>
                    <PledgeTitlte>
                    <PledgeInput type="radio"/> 
                   <PledgeRadio/>
                   <label>Mahigany Special Edition</label>
                    </PledgeTitlte>
                    <PledgeTitlte green>
                        Pledge $200 or more
                    </PledgeTitlte>
                    <PledgeStock right>
                    <Stock>
                    0
                    </Stock>
                    <span>
                    left
                    </span>
                </PledgeStock>
                </PledgeModalTitleSection>
                <PledgeDetails extra>
                You get two
                Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
                You’ll be added to our Backer member list. Shipping is included. 0 left.
                </PledgeDetails>
                <ModalSectionInput>
                    <label>
                        Enter your pledge
                    </label>
                    <PledgeInputTextWrapper>

                    <PledgeInputText type="text" value="" placeholder="0.00"/>
                    </PledgeInputTextWrapper>

                    <PledgeModalButton>Continue</PledgeModalButton>
                </ModalSectionInput>
            </PledgeBoardItem>
        </ModalContent>
    </ModalWrapper>
}

export default Modal;