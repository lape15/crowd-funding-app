import { useContext } from 'react';
import { PledgeContext } from '../context/modal';
import styled from 'styled-components';
import ModalWrapperMain from './modal-wrapper';
import check from '../assets/icon-check.svg';

const ModalWrapper = styled.div`
  box-shadow: 0 0 3rem rgb(0, 0, 0, 0.5);
  margin: 50% auto;
  overflow-y: scroll;
  opacity: 0;
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
  ${({ showThanksModal }) =>
    showThanksModal &&
    `
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    transform-origin: center;
    transition: all ease 1s;
`}
  @media (max-width: 512px) {
    margin: 40% auto;
    width: 100%;
    padding: 15px;
  }
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
  &:hover {
    background-color: hsl(176, 72%, 28%);
    cursor: pointer;
  }
`;
const ThanksModal = ({ progressRef }) => {
  const {
    state: { showThanksModal },
    dispatch,
  } = useContext(PledgeContext);
  return (
    <ModalWrapperMain open={showThanksModal}>
      <ModalWrapper showThanksModal={showThanksModal}>
        <img src={check} alt="check" />
        <h3
          style={{
            marginTop: '10px',
          }}
        >
          Thanks for your support!
        </h3>
        <p
          style={{
            lineHeight: 2.2,
            color: ' grey',
            margin: '10px',
          }}
        >
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <PledgeButton
          onClick={() => {
            dispatch({
              type: 'CLOSE_THANKS_MODAL',
            });
            progressRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
        >
          Got it!
        </PledgeButton>
      </ModalWrapper>
    </ModalWrapperMain>
  );
};

export default ThanksModal;
