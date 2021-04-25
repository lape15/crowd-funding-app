import { useRef, useEffect, useContext } from 'react';
import { PledgeContext } from '../context/modal';
import styled from 'styled-components';
import MainModal from '../big-modal';

const ModalCon = styled.div`
  background: transparent;
  opacity: 0;
  visibility: hidden;

  ${({ open }) =>
    open &&
    `
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transform-origin: center;
        transition: all ease 0.5s;
        transform: scale(0.95);
    `}
`;

const ModalWrapperMain = ({ children, open }) => {
  const {
    state: { showModal },
    dispatch,
  } = useContext(PledgeContext);

  return (
    <MainModal>
      <ModalCon open={open}>{open && children}</ModalCon>
    </MainModal>
  );
};

export default ModalWrapperMain;
