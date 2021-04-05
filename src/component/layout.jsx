import {useRef, useEffect, useContext} from 'react';
import Board from "./board";
import Modal from "./modal";
import TopSection from "./top-section";
import {PledgeContext} from '../context/modal'


const HomePage = () => {
  const parentNode = useRef();

  const { dispatch} = useContext(PledgeContext); 

   const handleClick = e => {
    if(parentNode.current.contains(e.target)) {
      return;
    }
    dispatch({
      type: 'SWITCH_MODAL'
  })
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
    <Board/>
   {/* 
    Enter your pledge $200 Continue Thanks for your support! Your pledge brings
    us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
   You will get an email once our campaign is completed. Got it! */}
    <div ref={parentNode}>
    < Modal/>
    </div>
  </div>
};

export default HomePage;
