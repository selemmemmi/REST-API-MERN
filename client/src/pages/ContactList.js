import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllContacts } from '../JS/actions/contacts'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ContactCard from '../components/ContactCard';

const ContactList = ()=> {
    const contacts = useSelector((state) => state.contactReducers.contacts);
    const isLoad = useSelector((state) => state.contactReducers.isLoad );
    const isError = useSelector((state) => state.contactReducers.isError );
    const dispatch = useDispatch() ;
    useEffect(() => {
        dispatch(getAllContacts());
    }, []);
    console.log(contacts)
  return (
    <div className='cartList'>
        {isLoad ? (<Box sx={{ display: 'flex' }}><CircularProgress /></Box>) 
        : isError ? (<p>Error To Get The contacts</p>) 
        : !contacts.length ? (<p>No Contact To show</p>) 
        : (contacts.map(el=> <ContactCard contact={el} key={el._id}/>))}
    </div>
  )
}

export default ContactList ;