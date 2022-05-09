import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact } from '../JS/actions/contacts';



function AddContact() {
    const [contact, setcontact] = useState({})
    const [edit, setedit] = useState(false)
    const contactToEdit = useSelector((state) => state.contactReducers.contact);
    console.log(contactToEdit)
    const dispatch = useDispatch() 
    const params = useParams();
    const navigate= useNavigate();
        // -----------------------------

    useEffect(() => {
      if(params.id){
        setedit(true)
      }else{ 
        setedit(false)
      }
      edit ? setcontact(contactToEdit  ) : setcontact({name:"",phone:"",email:"",  adress:"",}) ;
    }, [params,edit , contactToEdit])
    


    // ------------------------------
    const handelChange = (e) =>{
        setcontact({ ...contact, [e.target.name] : e.target.value });
    }
    const handelcontact = () =>{  
        const result = window.confirm(edit ? "are you sure to modif that ?":"are you sure to save that ?")
        if (result){
            if(edit){
                dispatch(editContact(params.id,contact ,navigate))
            }else{
                dispatch(addContact(contact ,navigate));
            }
        }
        setcontact({name:"",phone:"",email:"",  adress:"",})
    }
  return (
    <div>
        <form className='formContact'>
                <Box sx={{ '& > :not(style)': { m: 3 } }} className='inputContact'>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                        name
                        </InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        
                        onChange={handelChange}
                        name="name"
                        value={contact.name}
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                        phone
                        </InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        onChange={handelChange}
                        name="phone"
                        value={contact.phone}
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                        email
                        </InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        onChange={handelChange}
                        name="email"
                        value={contact.email}
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                        adress
                        </InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        onChange={handelChange}
                        name="adress"
                        value={contact.adress}
                        />
                    </FormControl>
                    <Button variant="contained" onClick={handelcontact}>{edit ? "EDIT CONTACT":"SAVE CONTACT"} </Button>
            </Box>
        </form>
    </div>
  )
}

export default AddContact