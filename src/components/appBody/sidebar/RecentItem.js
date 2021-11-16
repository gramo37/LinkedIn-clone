import React from 'react';
import '../css/sidebar.css'

const RecentItem = (props) => {
    return (
        <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <p>{ props.topic }</p>
        </div>
    )
}

export default RecentItem
