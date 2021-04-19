import{createContext,  useReducer } from 'react';

export const PledgeContext = createContext()
const initialState = {
    showModal: false,
    backedAmount: 37850,
    backers: 5007,
    daysLeft: 56,
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