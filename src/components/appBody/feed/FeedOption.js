import React from 'react';
import '../css/feed.css'

const FeedOption = (props) => {
    return (
        <>
            <div className="feedOptionContainer">
                {props.Icon && <props.Icon className="FeedOptionIcon" style={{ color: props.color }} />}
                <h4>{props.title}</h4>
            </div>
        </>
    )
}

export default FeedOption
