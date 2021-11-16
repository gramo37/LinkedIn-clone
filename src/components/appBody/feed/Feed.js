import { Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import '../css/feed.css';
import FeedOption from './FeedOption';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from '../../Firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';

const Feed = (props) => {

    const [input, setInput] = useState('');
    const [posts, setposts] = useState([]);
    const [postImgUrl, setpostImgUrl] = useState("")
    const user = useSelector(selectUser);

    useEffect(() => {
        // Get posts from database 
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setposts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        });
    }, []);

    const onChange=(e)=>{
        setInput(e.target.value)
    }

    const onPostSubmit = (e) => {
        e.preventDefault();

        // Add a post to posts collection 
        db.collection('posts').add({
            userImg: user.photoUrl || "",                                           // Database varun ghyaycha after logging in
            name: user.displayName,                                                 // Database varun ghyaycha after logging in
            designation: "",                                                        // Database varun ghyaycha after logging in
            editTime: "2",                                                          // Automatic
            description: input,                                                     // This is done
            imgSrc: postImgUrl,           // Using the photo button in the feed-top
            likes: "2303",
            comments: "345340",
            views: "2342434234",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Clear the input bar
        setInput('');
    }

    return (
        <>
            <div className="feed">
                <div className="feed-top">
                    <div className="feed-input">
                        {/* <Avatar src={props.userImg} /> */}
                        <Avatar>{user?.email[0]}</Avatar>
                        <form className="feed-search">
                            <input value={input} onChange={onChange} placeholder="Start a post" type="text" />
                            <button type="submit" onClick={onPostSubmit}>Send</button>
                        </form>
                    </div>
                    <div className="feed-icons">
                        <FeedOption title="Photo" Icon={InsertPhotoIcon} color="blue" />
                        <FeedOption title="Video" Icon={OndemandVideoIcon} color="green" />
                        <FeedOption title="Event" Icon={EventIcon} color="orange" />
                        <FeedOption title="Write article" Icon={ArticleIcon} color="pink" />
                    </div>
                </div>

                {/* Posts */}
                <div className="all-posts-container">
                    {posts.map((post) => {
                        return <Post key={post.id} userImg={post.data.userImg} name={post.data.name} designation={post.data.designation} editTime={post.data.editTime} description={post.data.description} imageSrc={post.data.imgSrc} likes={post.data.likes} comments={post.data.comments} views={post.data.views} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Feed
