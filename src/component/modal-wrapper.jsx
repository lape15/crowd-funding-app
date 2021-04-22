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
  const parentNode = useRef();
  const {
    state: { showModal },
    dispatch,
  } = useContext(PledgeContext);

  const handleClick = (e) => {
    if (parentNode.current.contains(e.target)) {
      console.log('aaa', parentNode, parentNode.current);
      return;
    }
    if (!parentNode.current.contains(e.target) && showModal) {
      dispatch({
        type: 'CLOSE_MODAL',
      });
      dispatch({
        type: 'RESET_PLEDGE',
      });
      console.log('weee', parentNode);
    }
  };
  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <MainModal>
      <ModalCon open={open} ref={parentNode}>
        {open && children}
      </ModalCon>
    </MainModal>
  );
};

export default ModalWrapperMain;
