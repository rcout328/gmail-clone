import React from 'react'
import './Mail.css';
import { IconButton } from '@mui/material';
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, LabelImportantOutlined, Menu, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Mail() {
    const History = useHistory();
  return (
    <div className='mail'>
        <div className='mail-tools'>
            <div className='mail-toolsleft'>
                <IconButton onClick={() => History.push("/")}>
                    <ArrowBack/>
                </IconButton>
                <IconButton>
                    <MoveToInbox/>
                </IconButton>
                <IconButton>
                    <Error/>
                </IconButton>
                <IconButton>
                    <Delete/>
                </IconButton>
                <IconButton>
                    <Email/>
                </IconButton>
                <IconButton>
                    <WatchLater/>
                </IconButton>
                <IconButton>
                    <CheckCircle/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
                <IconButton>
                    <Menu/>
                </IconButton>
            </div>
            <div className='mail-toolsright'>
                <IconButton>
                    <UnfoldMore/>
                </IconButton>
                <IconButton>
                    <Print/>
                </IconButton>
                <IconButton>
                    <ExitToApp/>
                </IconButton>
            </div>
        </div>
        <div className='mail-body'>
            <div className='mail-bodyheader'>
                <h2>Subject</h2>
                <LabelImportant className='mail-important'/>
                <p>Title</p>
                <h5 className='mail-time'>10:00</h5>
            </div>
            
            <div className='mail-message'>This is test mailn</div>
        </div>
    </div>
  )
}

export default Mail
