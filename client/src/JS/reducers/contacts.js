import { GET_CONTACTS_SUCCESS ,GET_CONTACTS_LOAD ,GET_CONTACTS_FAIL, GET_CONTACT_SUCCESS} from "../constants/contacts"


const initialState={
     contacts:[],
     isLoad:false,
     isError:false,
     contact:[],
};


const contactReducers = ( state = initialState , { type , payload })=>{
        switch (type) {
            case GET_CONTACTS_SUCCESS:
                // if type howa get contact success=> payload :{msg , contactlist:[{} , {}]}
                return {...state , contacts: payload.contactlist ,isLoad:false ,isError: false};
            case GET_CONTACTS_LOAD:
                return {...state ,isLoad: true }
            case GET_CONTACTS_FAIL:
                return {...state ,isError: true ,isLoad:false }
            case GET_CONTACT_SUCCESS:
                // if type howa get contact success=> payload :{msg , findContact:{} }
                return {...state,contact: payload.findContact , idLoad: false}
            default:
                return state;
        }

}
export default contactReducers ;