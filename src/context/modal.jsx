import{createContext,  useReducer} from 'react';

export const PledgeContext = createContext()
const initialState = {
    showModal: false
}



function modalReducer (state , action){
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