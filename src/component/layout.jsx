import { useRef, useEffect, useContext } from 'react';
import Board from './board';
import Modal from './modal';
import TopSection from './top-section';
import { PledgeContext } from '../context/modal';
import ThanksModal from './thanks-modal';

const HomePage = () => {
  const parentNodes = useRef();
  const progressRef = useRef(null);

  const {
    state: { showModal },
    dispatch,
  } = useContext(PledgeContext);
  const PledgeRefOne = useRef(null);
  const PledgeRefTwo = useRef(null);
  const PledgeRefThree = useRef(null);
  return (
    <div>
      <TopSection />
      {/* Selected pledge start */}
      <Board
        PledgeRefOne={PledgeRefOne}
        PledgeRefTwo={PledgeRefTwo}
        PledgeRefThree={PledgeRefThree}
        progressRef={progressRef}
      />

      <div ref={parentNodes}>
        <Modal
          PledgeRefOne={PledgeRefOne}
          PledgeRefTwo={PledgeRefTwo}
          PledgeRefThree={PledgeRefThree}
        />
      </div>

      <ThanksModal progressRef={progressRef} />
    </div>
  );
};

export default HomePage;
