import {useRef, useEffect, useContext} from 'react';
import Board from "./board";
import Modal from "./modal";
import TopSection from "./top-section";
import {PledgeContext} from '../context/modal'


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
      // return;
      dispatch({
          type: 'CLOSE_MODAL'
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
   {/* 
    Enter your pledge $200 Continue Thanks for your support! Your pledge brings
    us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
   You will get an email once our campaign is completed. Got it! */}
    <div ref={parentNode}>
    < Modal PledgeRefOne={PledgeRefOne} PledgeRefTwo={PledgeRefTwo} PledgeRefThree={PledgeRefThree}/>
    </div>
  </div>
};

export default HomePage;

