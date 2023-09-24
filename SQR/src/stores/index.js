import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  categories: [],
  qurbans: [],
  oneQurban: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "categories/fetchSuccess":
      return {
        ...state, 
        categories: action.payload
      };
    case "categories/fetchByIdSuccess":
      return {
        ...state,
        categories: action.payload,
      };
    case 'qurbans/fetchSuccess':
      return {
        ...state,
        qurbans: action.payload
      }
    case "qurbans/fetchOneQurban":
      return{
        ...state,
        oneQurban: action.payload
      }
    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
