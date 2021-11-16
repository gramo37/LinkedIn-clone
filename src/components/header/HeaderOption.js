import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './css/headerOption.css'

const HeaderOption = (props) => {
    const user = useSelector(selectUser);
    
    return (
        <>
        <div className="HeaderOptionContainer" onClick={props.onClick}>
            {props.Icon && <props.Icon className="HeaderOptionIcon" />}
            {props.avatar && <Avatar className="HeaderOptionIcon">{user?.email[0]}</Avatar>}
            <h6>{props.title}</h6>
        </div>
        </>
    )
}

export default HeaderOption
