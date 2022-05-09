import { GET_CONTACTS_SUCCESS , GET_CONTACTS_LOAD , GET_CONTACTS_FAIL, GET_CONTACT_SUCCESS } from '../constants/contacts'
import axios from 'axios' ;


export const getAllContacts=()=> async(dispatch)=>{
    dispatch ({ type :GET_CONTACTS_LOAD  })
    try {
       let result = await axios.get("/api/contact/contactlist");
       // if i send an http request 
       //result chikon feha
       // { status : "", headers:"" , data }
        dispatch({
            type :GET_CONTACTS_SUCCESS ,
            payload : result.data , //{msg , contact }
        });
    } catch (error) {
        dispatch ({ type :GET_CONTACTS_FAIL  })
    }
}


export const deleteContact =(id)=>async(dispatch) =>{
    dispatch ({ type :GET_CONTACTS_LOAD  })
    try {
       await  axios.delete(`/api/contact/delete/${id}`);
        dispatch (getAllContacts())
    } catch (error) {
        dispatch({type:GET_CONTACTS_FAIL})
    }
}

export const addContact = (newContact,navigate) => async(dispatch)=>{
    dispatch ({ type :GET_CONTACTS_LOAD  })
    try {
        await axios.post("/api/contact/post" , newContact)
        dispatch (getAllContacts())
        navigate("/contacts")
    } catch (error) {
        dispatch({ type :GET_CONTACTS_FAIL  })
    }

}

export const getContact =(id)=> async(dispatch)=>{
    dispatch ({ type :GET_CONTACTS_LOAD  })
    try {
        let result = await axios.get(`/api/contact/getOne/${id}`)
        dispatch ({ type:GET_CONTACT_SUCCESS , payload:result.data}) //payloat: {msg,findContact}
    } catch (error) {
        dispatch({ type :GET_CONTACTS_FAIL  })
    }

}


export const editContact =(id,editContact,navigate)=>async(dispatch)=> {
    dispatch ({ type :GET_CONTACTS_LOAD  })
    try {
        await axios.put(`/api/contact/update/${id}`,editContact)
        dispatch (getAllContacts())
        alert("contact updated")
        navigate("/contacts")
    } catch (error) {
        dispatch({ type :GET_CONTACTS_FAIL  })
    }
}