import './Sidebar.css'

import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DoneIcon from '@mui/icons-material/Done';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailOutIcon from '@mui/icons-material/MailOutline';
import MoreIcon from '@mui/icons-material/More';


import Sidebaroptions from './Sidebaroption';

import { Button, Avatar, IconButton, Menu, MenuItem, ListItem, Divider, } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Sidebar({ handleLogout, user }) {

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl)
    // // console.log('auth user chekc',user)
    // console.log('authclosefunction logour',handleLogout)
    // console.log('getthere variable eleemtn',getthere)
    const handleClick = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = e => {
        setAnchorEl(null)
    }


    return (
        <div className='sidebar' >
            {/* <h1>sidebar Works</h1> */}
            <TwitterIcon className="sidebar_twittericon" ></TwitterIcon>

            <Link className="linkdecoration" to="/home/feed" >
                <Sidebaroptions active Icon={HomeIcon} text='Home' ></Sidebaroptions>

            </Link>
            <Link className="linkdecoration" to="/home/explore" >
                <Sidebaroptions active Icon={SearchIcon} text='Explore' ></Sidebaroptions>

            </Link>
            <Link className="linkdecoration" to="/home/notification" >
                <Sidebaroptions active Icon={NotificationsIcon} text='Notification' ></Sidebaroptions>

            </Link>
            <Link className="linkdecoration" to="/home/messages" >
                <Sidebaroptions active Icon={MailOutIcon} text='Message' ></Sidebaroptions>

            </Link>
            <Link className="linkdecoration" to="/home/bookmarks" >
                <Sidebaroptions active Icon={BookmarkBorderIcon} text='Bookmarks' ></Sidebaroptions>

            </Link>
            <Link className="linkdecoration" to="/home/lists" >
                <Sidebaroptions active Icon={ListAltIcon} text='Lists' ></Sidebaroptions>

            </Link>
            <Link className="linkdecoration" to="/home/profile" >
                <Sidebaroptions active Icon={PermIdentityIcon} text='Profile' ></Sidebaroptions>

            </Link>
            <Link className="linkdecoration" to="/home/more" >
                <Sidebaroptions active Icon={MoreIcon} text='More' ></Sidebaroptions>

            </Link>


            {/* <Sidebaroptions active Icon={TwitterIcon} text='Home' ></Sidebaroptions>
            <Sidebaroptions active Icon={TwitterIcon} text='Home' ></Sidebaroptions> */}


            <Button variant='outlined' className='sidebar_tweet'> Tweet </Button>

            <div className="profile_info" >
                <Avatar src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumb.ac-illust.com%2Faf%2Faf39b2c67aed0b79b7e57070f41e180f_t.jpeg&tbnid=WPVw39wkN8LCzM&vet=12ahUKEwivt7T61ouDAxX-cmwGHeHoC40QMygzegUIARDZAQ..i&imgrefurl=https%3A%2F%2Fen.ac-illust.com%2Fclip-art%2F22969416%2Fperson-icon-pictogram-round-black&docid=rZY1Gg3Wdofi3M&w=338&h=340&q=round%20person%20icon&ved=2ahUKEwivt7T61ouDAxX-cmwGHeHoC40QMygzegUIARDZAQ' ></Avatar>
                <div className='user_info' >
                    <h4>Logesh U</h4>
                    <h5>@log</h5>

                </div>
                <IconButton size='small' sx={{ ml: 2 }} aria-controls={openMenu ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                ><MoreHorizIcon></MoreHorizIcon></IconButton>

                <Menu id='basic-menu' anchorEl={anchorEl} open={openMenu} onClick={handleClick} onClose={handleClose}  >
                    <MenuItem className="Profile_info"  >
                        <Avatar src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumb.ac-illust.com%2Faf%2Faf39b2c67aed0b79b7e57070f41e180f_t.jpeg&tbnid=WPVw39wkN8LCzM&vet=12ahUKEwivt7T61ouDAxX-cmwGHeHoC40QMygzegUIARDZAQ..i&imgrefurl=https%3A%2F%2Fen.ac-illust.com%2Fclip-art%2F22969416%2Fperson-icon-pictogram-round-black&docid=rZY1Gg3Wdofi3M&w=338&h=340&q=round%20person%20icon&ved=2ahUKEwivt7T61ouDAxX-cmwGHeHoC40QMygzegUIARDZAQ' ></Avatar>
                        <div className='user_info subuser_info ' >
                            <h4>Logesh U</h4>
                            <h5>@log</h5>
                            <ListItemIcon className='done_icon' ><DoneIcon></DoneIcon></ListItemIcon>
                        </div>
                    </MenuItem>
                    <Divider></Divider>
                    <MenuItem onClick={handleClose} >Add an existing account</MenuItem>
                    <MenuItem onClick={handleLogout} >Log out @log</MenuItem>

                </Menu>
            </div>

        </div>


    )
}