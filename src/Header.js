import React from 'react'
import './Header.css';
import Menu from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <IconButton>
            <Menu/>
            </IconButton>
            <img src="https://imagetolink.com/ib/aUsHTYea22.png"></img>
            <h1>Gmail</h1>
        </div>
        <div className='header-search'>
            <SearchIcon className='search'/>
            <input placeholder="Search Mail" type="text"></input>
            <ArrowDropDownIcon className='header-arrow'/>
        </div>
        <div className='header-right'>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <IconButton>
            <Avatar>
                
            </Avatar>
            </IconButton>
        </div>
    </div>
  )
}

export default Header
