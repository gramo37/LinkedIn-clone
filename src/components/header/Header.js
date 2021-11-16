import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from './linkedin.png'
import './css/header.css'
import HeaderOption from './HeaderOption';
import { Home } from '@mui/icons-material';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import DragIndicatorRoundedIcon from '@mui/icons-material/DragIndicatorRounded';
import VideoLabelRoundedIcon from '@mui/icons-material/VideoLabelRounded';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../Firebase';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

    const user = useSelector(selectUser);
    // console.log(user.email, user.uid, user.displayName, user.profilePic)

    const dispatch = useDispatch();
    const logoutOfApp = ()=>{
        dispatch(logout());
        auth.signOut();
    }
    return (
        <>
        <div className="header">
            <div className="headerLeft">
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/riajulislam" title="riajulislam">riajulislam</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                <img src={logo} alt="linkedIn"/>
                <div className="headerSearch">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="headerRight">
                <HeaderOption title="Home" Icon = {Home}/>
                <HeaderOption title="My Network" Icon= {GroupIcon} />
                <HeaderOption title="Jobs" Icon= {WorkIcon} />
                <HeaderOption title="Messaging" Icon= {MessageRoundedIcon} />
                <HeaderOption title="Notifications" Icon= {NotificationsActiveRoundedIcon} />
                <HeaderOption avatar={true} onClick={logoutOfApp} title={user?.displayName}/>
                <HeaderOption title="Work" Icon= {DragIndicatorRoundedIcon} />
                <HeaderOption title="Learning" Icon= {VideoLabelRoundedIcon} />
            </div>
        </div>
        
        </>
    )
}

export default Header
