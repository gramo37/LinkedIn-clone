import React from 'react';
import { Avatar } from '@mui/material'
import '../css/sidebar.css'
import RecentItem from './RecentItem';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';

const Sidebar = (props) => {

    const user = useSelector(selectUser);
    
    return (
        <div className="sidebar">
            {/* sidebar */}
            <div className="sidebar-top">
                <img src={props.userBackGroundImg} alt="" />
                <Avatar className="sidebar-avatar" alt="Remy Sharp" src={props.userImg} >{ user
                .email?user.email[0]:"NA" }</Avatar>
                <h2>{ user.displayName }</h2>
                <h4>{ user.email } </h4>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className="sidebar-number">3000</p>
                </div>

                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className="sidebar-number">3000</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                <RecentItem topic="ReactJS" />
                <RecentItem topic="AngularJS" />
                <RecentItem topic="Flutter" />
                <RecentItem topic="Mern Stack" />
            </div>
            
        </div>
    )
}

export default Sidebar
