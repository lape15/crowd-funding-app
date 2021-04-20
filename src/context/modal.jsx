import{createContext,  useReducer } from 'react';

export const PledgeContext = createContext()
const initialState = {
    showModal: false,
    backedAmount: 37850,
    backers: 5007,
    daysLeft: 56,
    noRewardActive: false,
    bambooEditionActive: false,
    blackEditionActive:false,
    mahoganyEditonActive: false,
}


function modalReducer (state , action){
    const {payload} = action;
    switch(action.type){
        case 'SWITCH_MODAL':
            return {
                ...state,
                showModal: !state.showModal,
            };
            case 'CLOSE_MODAL':
                return{
                    ...state,
                    showModal: false,
                };

                case 'UPDATE_BACKED_AMOUNT':
                    return{
                        ...state,
                        backedAmount: state.backedAmount + payload,
                        backers: state.backers + 1
            };
            case 'NO_REWARD_ACTIVE':
                return {
                    ...state,
                    noRewardActive: true,
                    bambooEditionActive: false,
                    blackEditionActive:false,
                    mahoganyEditonActive: false,
                };
                case 'BAMBOO_ACTIVE':
                    return {
                        ...state,
                        bambooEditionActive: true,
                        noRewardActive: false,
                        blackEditionActive:false,
                        mahoganyEditonActive: false,
                    };
                    case 'BLACK_ACTIVE':
                        return {
                            ...state,
                            blackEditionActive: true,
                            noRewardActive: false,
                            bambooEditionActive:false,
                            mahoganyEditonActive: false,
                        };
                        case 'MAHOGANY_ACTIVE':
                            return {
                                ...state,
                                mahoganyEditonActive: true,
                                blackEditionActive: false,
                                noRewardActive: false,
                                bambooEditionActive:false,
                            };
                        case 'RESET_PLEDGE':
                            return {
                                ...state,
                                mahoganyEditonActive: false,
                                blackEditionActive: false,
                                noRewardActive: false,
                                bambooEditionActive:false,
                            }
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