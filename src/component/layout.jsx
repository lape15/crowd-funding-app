import {useRef, useEffect, useContext} from 'react';
import Board from "./board";
import Modal from "./modal";
import TopSection from "./top-section";
import {PledgeContext} from '../context/modal'
import ThanksModal from './thanks-modal';


const HomePage = () => {
  const parentNode = useRef();

  const {state:{showModal}, dispatch} = useContext(PledgeContext); 
  const PledgeRefOne = useRef(null);
  const PledgeRefTwo = useRef(null);
  const PledgeRefThree = useRef(null);

   const handleClick = e => {
    if(parentNode.current.contains(e.target)) {
      return;
    }
    if(!parentNode.current.contains(e.target) && !showModal) {
      dispatch({
          type: 'CLOSE_MODAL',
      })
      dispatch({
        type: 'RESET_PLEDGE',
    })
    }

  }
  useEffect(() => {
      // add when mounted
      document.addEventListener("mousedown", handleClick);
      // return function to be called when unmounted
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, []);

  return <div >
    <TopSection />
    {/* Selected pledge start */}
    <Board PledgeRefOne={PledgeRefOne} PledgeRefTwo={PledgeRefTwo} PledgeRefThree={PledgeRefThree}/>
    <div ref={parentNode}>
    < Modal PledgeRefOne={PledgeRefOne} PledgeRefTwo={PledgeRefTwo} PledgeRefThree={PledgeRefThree}/>
    </div>
    <ThanksModal/>
  </div>
};

export default HomePage;

