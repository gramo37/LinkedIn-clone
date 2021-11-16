import { Avatar } from '@mui/material';
import React from 'react';
import '../css/post.css';
import PostOptions from './PostOptions';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const Post = (props) => {

    

    return (
        <>
            <div className="post">
                <div className="post-top">
                    <Avatar alt="" src={props.userImg}>{props.name[0]}</Avatar>
                    <div className="personal-info">
                        <h4>{props.name}</h4>
                        <p>{props.designation}</p>
                        <p>Edited {props.editTime} days ago</p>
                    </div>
                </div>
                <div className="post-mid">
                    <p>{props.description}</p>
                    {props.imageSrc && <img src={props.imageSrc} alt="" />}
                    <div className="post-comments-stats">
                        <div className="post-likes">
                            <FavoriteBorderIcon />
                            <ThumbUpOffAltIcon />
                            <SentimentVerySatisfiedIcon />
                            <span>{props.likes}</span>
                        </div>
                        <div className="post-comments-container">
                            <div className="post-comments">
                                {props.comments} comments
                            </div>
                            <div className="post-dot">
                                .
                            </div>
                            <div className="post-views">
                                {props.views} views
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="post-comments-icon-container">
                    <PostOptions title="Like" Icon={ThumbUpAltIcon}/>
                    <PostOptions title="Comment" Icon={CommentIcon}/>
                    <PostOptions title="Share" Icon={ShareIcon}/>
                    <PostOptions title="Send" Icon={SendIcon}/>
                </div>
            </div>
        </>
    )
}

export default Post
