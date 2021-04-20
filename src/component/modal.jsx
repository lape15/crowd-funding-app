import {useContext, useState, useEffect} from 'react';
import {PledgeContext} from '../context/modal'
import {
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
} from '../common/modal-style'
import close from "../assets/icon-close-modal.svg";
import {PledgeStock,Stock, PledgeDetails,PledgeTitlte} from '../common/style'



const Modal = ({PledgeRefOne,PledgeRefThree,PledgeRefTwo}) => {

        const [modalInputState, setModalInoutState]= useState({
            noReward: '',
            bambooEdition:'',
            blackEdition:'',
            mahoganyEditon:''
           
        })

        const {state:{showModal, noRewardActive,
            bambooEditionActive,
            blackEditionActive,
            mahoganyEditonActive}, dispatch} = useContext(PledgeContext);

        const handlePledgeChange = e => {
            setModalInoutState({
                ...modalInputState,
                [e.target.name] : e.target.value
            })
        }

        const handlePledgeSubmit = e => {
            const {noReward,bambooEdition,blackEdition,mahoganyEditon} = modalInputState
            e.preventDefault();
            if(!noReward){
                return 
            } else {
                dispatch({
                    type: 'UPDATE_BACKED_AMOUNT',
                    payload: Number(noReward),
                })
                dispatch({
                    type: 'SWITCH_MODAL'
                })
            }
        }
    
    return ( 
    <ModalWrapper showModal={showModal}>
        <ModalHeaderSection>
        <ModalCloseContainer>
            <ModalClose src={close} alt="close" onClick={() => dispatch({
       type: 'SWITCH_MODAL'
   })}/>
        </ModalCloseContainer>
        <ModalHeader>
            Back this project
        </ModalHeader>
        </ModalHeaderSection>
        <ModalSentence>
        Want to support us in bringing Mastercraft Bamboo Monitor
        Riser out in the world?
        </ModalSentence>
        <ModalContent onSubmit={handlePledgeSubmit}>
            <PledgeBoardItem noReward={noRewardActive}>
                <PledgeModalTitleSection>
                <PledgeTitlte modal onClick={() => dispatch({
                    type : 'NO_REWARD_ACTIVE'
                })} noReward={noRewardActive}>
                   <PledgeInput type="radio"/> 
                   <PledgeRadio className="pledge_radio" noReward={noRewardActive}/>
                   <label style={{
                       cursor: 'pointer'
                   }}>Pledge with no reward</label>
                </PledgeTitlte>
                </PledgeModalTitleSection>
                <PledgeDetails extra>
                Choose to support us without a
                reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                </PledgeDetails>
                <ModalSectionInput noReward={noRewardActive}>
                    <label>
                        Enter your pledge
                    </label>
                    <PledgeInputTextWrapper>

                    <PledgeInputText type="text" value={modalInputState.noReward} placeholder="0.00" name="noReward" onChange={handlePledgeChange}/>
                    </PledgeInputTextWrapper>

                    <PledgeModalButton>Continue</PledgeModalButton>
                </ModalSectionInput>
            </PledgeBoardItem>
            <PledgeBoardItem  ref={PledgeRefOne} bamboo={bambooEditionActive}>
            <PledgeModalTitleSection>
            <PledgeTitlte modal onClick={() => dispatch({
                type: 'BAMBOO_ACTIVE'
            })} 
                bamboo={bambooEditionActive}>
                   <PledgeInput type="radio"/> 
                   <PledgeRadio className="pledge_radio" bamboo={bambooEditionActive}/>
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
                <ModalSectionInput bamboo={bambooEditionActive}>
                    <label>
                        Enter your pledge
                    </label>
                    <PledgeInputTextWrapper>

                    <PledgeInputText type="text" value={modalInputState.bambooEdition} placeholder="0.00" name="bambooEdition"
                    onChange={handlePledgeChange}
                    />
                    </PledgeInputTextWrapper>

                    <PledgeModalButton>Continue</PledgeModalButton>
                </ModalSectionInput>
            </PledgeBoardItem>
            <PledgeBoardItem ref={PledgeRefTwo} black={blackEditionActive}>
                <PledgeModalTitleSection>
                    <PledgeTitlte modal onClick={() => dispatch({
                        type: 'BLACK_ACTIVE'
                    })} black={blackEditionActive}>
                    <PledgeInput type="radio"/> 
                   <PledgeRadio className="pledge_radio" black={blackEditionActive}/>
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
                <ModalSectionInput black={blackEditionActive}>
                    <label>
                        Enter your pledge
                    </label>
                    <PledgeInputTextWrapper>

                    <PledgeInputText type="text" 
                    onChange={handlePledgeChange}
                    value={modalInputState.blackEdition} placeholder="0.00" name="blackEdition"/>
                    </PledgeInputTextWrapper>

                    <PledgeModalButton>Continue</PledgeModalButton>
                </ModalSectionInput>
            </PledgeBoardItem>

            <PledgeBoardItem ref={PledgeRefThree} mahogany={mahoganyEditonActive}>
                <PledgeModalTitleSection>
                    <PledgeTitlte modal onClick={ () => dispatch({
                        type: 'MAHOGANY_ACTIVE'
                    })} mahogany={mahoganyEditonActive}>
                    <PledgeInput type="radio"/> 
                   <PledgeRadio className="pledge_radio" mahogany={mahoganyEditonActive}/>
                   <label>Mahogany Special Edition</label>
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
                <ModalSectionInput mahogany={mahoganyEditonActive}>
                    <label>
                        Enter your pledge
                    </label>
                    <PledgeInputTextWrapper>

                    <PledgeInputText type="text" value={modalInputState.mahoganyEditon} 
                    onChange={handlePledgeChange}
                    placeholder="0.00" name="mahoganyEditon"/>
                    </PledgeInputTextWrapper>

                    <PledgeModalButton>Continue</PledgeModalButton>
                </ModalSectionInput>
            </PledgeBoardItem>
        </ModalContent>
    </ModalWrapper>
)
}

export default Modal;