import React from 'react'
import './Slidebar.css';
import { Button, IconButton, Slide } from '@mui/material';
import { Add, ArrowDropDown, Drafts, Duo, Inbox, Person, Phone, Send, Star } from '@mui/icons-material';
import Slidebaroption from './Slidebaroption';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
function Slidebar() {
    const dispatch = useDispatch();
     return (
    <div className='slidebar'>
        <Button startIcon={<Add fontSize='large'/>} className='slidebar-compose' onClick={() => dispatch(openSendMessage())}> 
            Compose
        </Button>

        <Slidebaroption Icon={Inbox} title="Inbox" number={54} selected={true}/>
        <Slidebaroption Icon={Star} title="Starred" number={54}/>
        <Slidebaroption Icon={AccessTimeIcon} title="Snoozed" number={54}/>
        <Slidebaroption Icon={Send} title="Sent" number={5}/>
        <Slidebaroption Icon={Drafts} title="Drafts" number={54}/>
        <Slidebaroption Icon={ArrowDropDown} title="More" />

    <div className='slidebar-footer'>
        <div className='slidebar-footericons'>
            <IconButton>
                <Person/>
            </IconButton>
            <IconButton>
                <Duo/>
            </IconButton>
            <IconButton>
                <Phone/>
            </IconButton>
        </div>
    </div>
    </div>
  )
}

export default Slidebar
