import React from 'react'
import './Emaillist1.css';
import { ArrowDropDown, Check, ChevronLeft, ChevronRight, Inbox, Keyboard, KeyboardHide, LocalOffer, MoreVert, Person, Redo, Settings } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import Section from './Section';
import Emailrow from './Emailrow';

function Emaillist1() {
  return (
    <div className='emaillist'>
        <div className='emaillist-settings'>
            <div className='emailist-settingsleft'>
                <Checkbox/>
                <IconButton>
                    <ArrowDropDown/>
                </IconButton>
                <IconButton>
                    <Redo/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            <div className='emailist-settingsright'>
                <IconButton>
                    <ChevronLeft/>
                </IconButton>
                <IconButton>
                    <ChevronRight/>
                </IconButton>
                <IconButton>
                    <KeyboardHide/>
                </IconButton>
                <IconButton>
                    <Settings/>
                </IconButton>
            </div>
            
        </div>
        <div className='emaillist-section'>
                <Section Icon={Inbox} title="Primary" color="red" selected/>
                <Section Icon={Person} title="Social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="Promotion" color="green" />
            </div>

        <div className='emaillist-list'>
            <Emailrow
            
            title="Twitch"
            subject="Hello scout is live"
            description="This is the test"
            time="10:00"
            />
            <Emailrow
            
            title="Twitch"
            subject="Hello scout is live"
            description="This is the test"
            time="10:00"
            />
            <Emailrow
            
            title="Twitch"
            subject="Hello scout is live"
            description="This is the test"
            time="10:00"
            />
            <Emailrow
            
            title="Twitch"
            subject="Hello scout is live"
            description="This is the test"
            time="10:00"
            />
            <Emailrow
            
            title="Twitch"
            subject="Hello scout is live"
            description="This is the test"
            time="10:00"
            />
            <Emailrow
            
            title="Twitch"
            subject="Hello scout is live"
            description="This is the test"
            time="10:00"
            />
        </div>
    </div>
  )
}

export default Emaillist1