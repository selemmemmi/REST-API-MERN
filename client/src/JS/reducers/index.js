import  {combineReducers} from 'redux' ;
import contactReducers from "./contacts";




const rootReducer = combineReducers ({ contactReducers })

export default  rootReducer ;