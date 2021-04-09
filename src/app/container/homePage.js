import React, { useState } from 'react';
import { connect } from "react-redux";
import { createPost } from "../redux/action";
import SinglePost from '../comopnent/singlrPost';

const HomePage = (props) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const handleLogout = () => {
        props.history.push('/signin')
        localStorage.removeItem('userData')
    }
    const handleCreatePost = () => {
        const postData = {
            userData: props.userData,
            title: title,
            body: message,
            likeCount: Number(),
            dislikeCount: Number(),
            like: Boolean(),
            dislike: Boolean(),
            comments: []
        }
        props.createPost(postData)
        setTitle("");
        setMessage("");
    }
    return (
        <div className="homepage-container">
            <button onClick={handleLogout} className="simple-button" style={{ marginBottom: '10px' }}>Log out</button>
            <div className="create-post-container">
                <div className="flex">
                    <h3>Create Post</h3>
                    <button onClick={handleCreatePost} className="simple-button" type="button">Post</button>
                </div>
                <div className="inputbox-container">
                    <input type="text" placeholder="Title" className="title-input" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="inputbox-container">
                    <textarea type="text" placeholder="Your message here" className="desc-input" rows={5} value={message} onChange={e => setMessage(e.target.value)} />
                </div>
            </div>
            <div className="posts-container">
                {props.posts.length > 0 ? props.posts.map((item, index) => {
                    return (
                        props.userData.username === item.userData.username && <div key={index} className="homepage-container">
                            <SinglePost item={item} index={index} />
                        </div>
                    )
                }) :
                    <h2>No posts available</h2>
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        userData: state.userData.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: data => dispatch(createPost(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);