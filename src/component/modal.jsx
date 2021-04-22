import { useContext, useState } from 'react';
import { PledgeContext } from '../context/modal';
import ModalWrapperMain from './modal-wrapper';
import {
  ModalWrapper,
  ModalHeaderSection,
  ModalHeader,
  ModalCloseContainer,
  ModalClose,
  ModalSentence,
  ModalContent,
  PledgeBoardItem,
  PledgeInput,
  PledgeInputTextWrapper,
  PledgeInputText,
  PledgeRadio,
  PledgeModalTitleSection,
  ModalSectionInput,
  PledgeModalButton,
} from '../common/modal-style';
import {
  flagErrorBamboo,
  flagErrorBlack,
  flagErrorMahogany,
  filterOutInvalid,
} from '../common/utils';
import close from '../assets/icon-close-modal.svg';
import {
  PledgeStock,
  Stock,
  PledgeDetails,
  PledgeTitlte,
} from '../common/style';

const Modal = ({ PledgeRefOne, PledgeRefThree, PledgeRefTwo }) => {
  const [modalInputState, setModalInputState] = useState({
    noReward: '',
    bambooEdition: '',
    blackEdition: '',
    mahoganyEdition: '',
  });
  const [error, setError] = useState('');

  const {
    state: {
      showModal,
      noRewardActive,
      bambooEditionActive,
      blackEditionActive,
      mahoganyEditionActive,
      bambooLeft,
      blackLeft,
      mahoganyLeft,
    },
    dispatch,
  } = useContext(PledgeContext);

  const handlePledgeChange = (e) => {
    setError('');
    setModalInputState({
      ...modalInputState,
      [e.target.name]: e.target.value,
    });
  };

  const refreshModalInputState = () => {
    setModalInputState({
      noReward: '',
      bambooEdition: '',
      blackEdition: '',
      mahoganyEdition: '',
    });
  };

  const handleNoRewardPledge = (value) => {
    if (filterOutInvalid(value)) {
      setError('Make your pledge count!');
      return;
    } else {
      dispatch({
        type: 'UPDATE_BACKED_AMOUNT',
        payload: Number(value),
      });
    }
    dispatch({
      type: 'THANKS_MODAL_ACTIVE',
    });
    refreshModalInputState();
  };

  const handleBambooPledge = (value) => {
    if (filterOutInvalid(value)) {
      setError('Make your pledge count!');
      return;
    } else if (flagErrorBamboo(value)) {
      setError('Do not be a cheap skate, make it count!');
      return;
    } else {
      dispatch({
        type: 'UPDATE_BACKED_AMOUNT',
        payload: Number(value),
      });
    }

    dispatch({
      type: 'UPDATE_BAMBOO_LEFT',
    });
    dispatch({
      type: 'THANKS_MODAL_ACTIVE',
    });
    refreshModalInputState();
  };

  const handleBlackPledge = (value) => {
    if (filterOutInvalid(value)) {
      setError('Make your pledge count!');
      return;
    } else if (flagErrorBlack(value)) {
      setError('Do not be a cheap skate, make it count!');
      return;
    } else {
      dispatch({
        type: 'UPDATE_BACKED_AMOUNT',
        payload: Number(value),
      });
    }
    dispatch({
      type: 'UPDATE_BLACK_LEFT',
    });
    dispatch({
      type: 'THANKS_MODAL_ACTIVE',
    });
    refreshModalInputState();
  };

  const handleMahoganyPledge = (value) => {
    if (filterOutInvalid(value)) {
      setError('Make your pledge count!');
      return;
    } else if (flagErrorMahogany(value)) {
      setError('Do not be a cheap skate, make it count!');
      return;
    } else {
      dispatch({
        type: 'UPDATE_BACKED_AMOUNT',
        payload: Number(value),
      });
    }
    dispatch({
      type: 'UPDATE_MAHOGANY_LEFT',
    });
    dispatch({
      type: 'THANKS_MODAL_ACTIVE',
    });
    refreshModalInputState();
  };

  return (
    <ModalWrapperMain open={showModal}>
      <ModalWrapper>
        <ModalHeaderSection>
          <ModalCloseContainer>
            <ModalClose
              src={close}
              alt="close"
              onClick={() =>
                dispatch({
                  type: 'SWITCH_MODAL',
                })
              }
            />
          </ModalCloseContainer>
          <ModalHeader>Back this project</ModalHeader>
        </ModalHeaderSection>
        <ModalSentence>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </ModalSentence>
        <ModalContent>
          <PledgeBoardItem noReward={noRewardActive}>
            <PledgeModalTitleSection>
              <PledgeTitlte
                modal
                onClick={() =>
                  dispatch({
                    type: 'NO_REWARD_ACTIVE',
                  })
                }
                noReward={noRewardActive}
              >
                <PledgeInput type="radio" />
                <PledgeRadio
                  className="pledge_radio"
                  noReward={noRewardActive}
                />
                <label
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  Pledge with no reward
                </label>
              </PledgeTitlte>
            </PledgeModalTitleSection>
            <PledgeDetails extra>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </PledgeDetails>
            <ModalSectionInput noReward={noRewardActive}>
              <label>Enter your pledge</label>
              <PledgeInputTextWrapper>
                <PledgeInputText
                  type="text"
                  value={modalInputState.noReward}
                  placeholder="0.00"
                  name="noReward"
                  onChange={handlePledgeChange}
                />
                <p
                  style={{
                    color: 'red',
                    fontSize: '0.9rem',
                    marginTop: '5px',
                  }}
                >
                  {error}
                </p>
              </PledgeInputTextWrapper>

              <PledgeModalButton
                onClick={() => handleNoRewardPledge(modalInputState.noReward)}
              >
                Continue
              </PledgeModalButton>
            </ModalSectionInput>
          </PledgeBoardItem>
          <PledgeBoardItem ref={PledgeRefOne} bamboo={bambooEditionActive}>
            <PledgeModalTitleSection>
              <PledgeTitlte
                modal
                onClick={() =>
                  dispatch({
                    type: 'BAMBOO_ACTIVE',
                  })
                }
                bamboo={bambooEditionActive}
              >
                <PledgeInput type="radio" />
                <PledgeRadio
                  className="pledge_radio"
                  bamboo={bambooEditionActive}
                />
                <label
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  Bamboo Stand
                </label>
              </PledgeTitlte>
              <PledgeTitlte green>Pledge $25 or more</PledgeTitlte>
              <PledgeStock right>
                <Stock>{bambooLeft}</Stock>
                <span>left</span>
              </PledgeStock>
            </PledgeModalTitleSection>
            <PledgeDetails extra>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </PledgeDetails>
            <ModalSectionInput bamboo={bambooEditionActive}>
              <label>Enter your pledge</label>
              <PledgeInputTextWrapper>
                <PledgeInputText
                  type="text"
                  value={modalInputState.bambooEdition}
                  placeholder="0.00"
                  name="bambooEdition"
                  onChange={handlePledgeChange}
                />
                <p
                  style={{
                    color: 'red',
                    fontSize: '0.9rem',
                    marginTop: '5px',
                  }}
                >
                  {error}
                </p>
              </PledgeInputTextWrapper>

              <PledgeModalButton
                onClick={() => {
                  handleBambooPledge(modalInputState.bambooEdition);
                }}
              >
                Continue
              </PledgeModalButton>
            </ModalSectionInput>
          </PledgeBoardItem>
          <PledgeBoardItem ref={PledgeRefTwo} black={blackEditionActive}>
            <PledgeModalTitleSection>
              <PledgeTitlte
                modal
                onClick={() =>
                  dispatch({
                    type: 'BLACK_ACTIVE',
                  })
                }
                black={blackEditionActive}
              >
                <PledgeInput type="radio" />
                <PledgeRadio
                  className="pledge_radio"
                  black={blackEditionActive}
                />
                <label
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  Black Edition Stand
                </label>
              </PledgeTitlte>
              <PledgeTitlte green>Pledge $75 or more</PledgeTitlte>
              <PledgeStock right>
                <Stock>{blackLeft}</Stock>
                <span>left</span>
              </PledgeStock>
            </PledgeModalTitleSection>
            <PledgeDetails extra>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </PledgeDetails>
            <ModalSectionInput black={blackEditionActive}>
              <label>Enter your pledge</label>
              <PledgeInputTextWrapper>
                <PledgeInputText
                  type="text"
                  onChange={handlePledgeChange}
                  value={modalInputState.blackEdition}
                  placeholder="0.00"
                  name="blackEdition"
                />
                <p
                  style={{
                    color: 'red',
                    fontSize: '0.9rem',
                    marginTop: '5px',
                  }}
                >
                  {error}
                </p>
              </PledgeInputTextWrapper>

              <PledgeModalButton
                onClick={() => {
                  handleBlackPledge(modalInputState.blackEdition);
                }}
              >
                Continue
              </PledgeModalButton>
            </ModalSectionInput>
          </PledgeBoardItem>

          <PledgeBoardItem
            ref={PledgeRefThree}
            mahogany={mahoganyEditionActive}
            mahoganyLeft={mahoganyLeft}
          >
            <PledgeModalTitleSection>
              <PledgeTitlte
                modal
                onClick={() =>
                  dispatch({
                    type: 'MAHOGANY_ACTIVE',
                  })
                }
                mahogany={mahoganyEditionActive}
              >
                <PledgeInput type="radio" />
                <PledgeRadio
                  className="pledge_radio"
                  mahogany={mahoganyEditionActive}
                />
                <label
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  Mahogany Special Edition
                </label>
              </PledgeTitlte>
              <PledgeTitlte green>Pledge $200 or more</PledgeTitlte>
              <PledgeStock right>
                <Stock>{mahoganyLeft}</Stock>
                <span>left</span>
              </PledgeStock>
            </PledgeModalTitleSection>
            <PledgeDetails extra>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included. 0 left.
            </PledgeDetails>
            <ModalSectionInput mahogany={mahoganyEditionActive}>
              <label>Enter your pledge</label>
              <PledgeInputTextWrapper>
                <PledgeInputText
                  type="text"
                  value={modalInputState.mahoganyEdition}
                  onChange={handlePledgeChange}
                  placeholder="0.00"
                  name="mahoganyEdition"
                />
                <p
                  style={{
                    color: 'red',
                    fontSize: '0.9rem',
                    marginTop: '5px',
                  }}
                >
                  {error}
                </p>
              </PledgeInputTextWrapper>

              <PledgeModalButton
                onClick={() =>
                  handleMahoganyPledge(modalInputState.mahoganyEdition)
                }
              >
                Continue
              </PledgeModalButton>
            </ModalSectionInput>
          </PledgeBoardItem>
        </ModalContent>
      </ModalWrapper>
    </ModalWrapperMain>
  );
};

export default Modal;
