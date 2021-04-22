import { createContext, useReducer } from 'react';

export const PledgeContext = createContext();
const initialState = {
  showModal: false,
  backedAmount: 37850,
  backers: 5007,
  daysLeft: 56,
  noRewardActive: false,
  bambooEditionActive: false,
  blackEditionActive: false,
  mahoganyEditionActive: false,
  bambooLeft: 101,
  blackLeft: 64,
  mahoganyLeft: 2,
  showThanksModal: false,
  progressTransition: false,
  progressLength: 37.39,
};

function modalReducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case 'SWITCH_MODAL':
      return {
        ...state,
        showModal: !state.showModal,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
        noRewardActive: false,
        bambooEditionActive: false,
        blackEditionActive: false,
        mahoganyEditonActive: false,
      };

    case 'UPDATE_BACKED_AMOUNT':
      return {
        ...state,
        backedAmount: state.backedAmount + payload,
        backers: state.backers + 1,
        noRewardActive: false,
        bambooEditionActive: false,
        blackEditionActive: false,
        mahoganyEditonActive: false,
      };
    case 'UPDATE_BAMBOO_LEFT':
      return {
        ...state,
        bambooLeft: state.bambooLeft - 1,
      };
    case 'UPDATE_BLACK_LEFT':
      return {
        ...state,
        blackLeft: state.blackLeft - 1,
      };
    case 'UPDATE_MAHOGANY_LEFT':
      return {
        ...state,
        mahoganyLeft: state.mahoganyLeft - 1,
      };
    case 'NO_REWARD_ACTIVE':
      return {
        ...state,
        noRewardActive: true,
        bambooEditionActive: false,
        blackEditionActive: false,
        mahoganyEditonActive: false,
      };
    case 'BAMBOO_ACTIVE':
      return {
        ...state,
        bambooEditionActive: true,
        noRewardActive: false,
        blackEditionActive: false,
        mahoganyEditionActive: false,
      };
    case 'BLACK_ACTIVE':
      return {
        ...state,
        blackEditionActive: true,
        noRewardActive: false,
        bambooEditionActive: false,
        mahoganyEditionActive: false,
      };
    case 'MAHOGANY_ACTIVE':
      return {
        ...state,
        mahoganyEditionActive: true,
        blackEditionActive: false,
        noRewardActive: false,
        bambooEditionActive: false,
      };
    case 'RESET_PLEDGE':
      return {
        ...state,
        mahoganyEditionActive: false,
        blackEditionActive: false,
        noRewardActive: false,
        bambooEditionActive: false,
      };

    case 'THANKS_MODAL_ACTIVE':
      return {
        ...state,
        showModal: false,
        showThanksModal: !state.showThanksModal,
      };
    case 'CLOSE_THANKS_MODAL':
      return {
        ...state,
        showThanksModal: !state.showThanksModal,
        progressTransition: !state.progressTransition,
        progressLength: state.progressLength + 1.5,
      };

    default:
      return state;
  }
}

const PledgeContextProvider = (props) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  return (
    <PledgeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PledgeContext.Provider>
  );
};

export default PledgeContextProvider;
