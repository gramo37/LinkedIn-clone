import React from 'react';
import '../css/post.css';

const PostOptions = (props) => {
    return (
        <>
            <div className="postOptionContainer">
                {props.Icon && <props.Icon className="postOptionIcon" />}
                <h4>{props.title}</h4>
            </div>

        </>
    )
}

export default PostOptions
