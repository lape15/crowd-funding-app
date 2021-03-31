import styled from "styled-components";
import close from "../assets/icon-close-modal.svg";
import {PledgeStock,Stock, PledgeDetails,PledgeTitlte} from '../common/style'

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 11;
    border: 2px solid red;
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
    border-radius: 0.5rem;
    font-family:'Commissioner', sans-serif;
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
`;

const ModalSentence = styled.p`
margin-top: 10px;
font-size: 1rem;
line-height: 2;
color: grey;
font-family:'Commissioner', sans-serif;
`;

const ModalContent = styled.div`
display: flex;
flex-direction: column;
`

const PledgeBoardForm = styled.form`
    flex-basis: 100%;
    padding: 2rem 1.5rem;
    border: 1px solid hsl(0, 0%, 90%);
    border-radius: 0.5rem;
    margin-top: 2rem;
`

const PledgeInput = styled.div`
    display: none;
`

const PledgeRadio = styled.div`
    position: relative;
    display: block;
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
    justify-content: flex-start;
`;
const Modal = () => {
 return <ModalWrapper>
        <ModalHeaderSection>
        <ModalCloseContainer>
            <ModalClose src={close} alt="close"/>
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
            <PledgeBoardForm>
                <PledgeModalTitleSection>
                <PledgeTitlte>
                   <PledgeInput type="radio"/> 
                   <PledgeRadio/>
                   <label>Pledge with no reward</label>
                </PledgeTitlte>
                <PledgeStock>
                    <Stock>
                    64 
                    </Stock>
                    <span>
                    left
                    </span>
                </PledgeStock>
                </PledgeModalTitleSection>
                <PledgeDetails>
                Choose to support us without a
                reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                </PledgeDetails>
            </PledgeBoardForm>
        </ModalContent>
        { /* Bamboo Stand Pledge $25 or more You
    get an ergonomic stand made of natural bamboo. You've helped us launch our
    promotional campaign, and you’ll be added to a special Backer member list.
   101 left */}
    </ModalWrapper>
}

export default Modal;