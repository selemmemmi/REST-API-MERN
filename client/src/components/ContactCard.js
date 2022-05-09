import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteContact, getContact } from '../JS/actions/contacts';
import { Link } from 'react-router-dom';


function ContactCard({contact}) {
    console.log(contact)
    const dispatch = useDispatch ()
    const hundelDelete =() => {
        const result = window.confirm("are you sure to delete that ?")
        if (result){
            dispatch (deleteContact(contact._id))
        }
    };
    const handelContact =()=> {
        dispatch(getContact(contact._id))
    }
  return (
    <div className='cart'>
        <Card sx={{ maxWidth: 345 , }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image="./img1.png"
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {contact.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        phone : {contact.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        email : {contact.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {contact.adress? (<Typography variant="body2" color="text.secondary">
                            email : {contact.adress}
                        </Typography>) : null}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={hundelDelete}> 
                DELETE
                </Button>
                    <Button size="small" color="primary" onClick={handelContact}   >
                        <Link  to={`/edit/${contact._id}`} style={{textDecoration:"none"}}>
                            MODIFIE
                        </Link>
                    </Button>
            </CardActions>
    </Card>
    </div>
  )
}

export default ContactCard