import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from "../redux/action";

const SinglePost = (props) => {
    const { item, index } = props;
    const handleDelete = () => {
        props.deletePost(index)
    }
    return (
        <div className="singlePost-container">
            <div className="flex">
                <div className="flex-row">
                    <div className="post-user-image-container">
                        <img className="post-user-image" src={item.userData.profileImage} alt="img" />
                    </div>
                    <h4 className="post-username">{item.userData.name}</h4>
                </div>
                <div>
                    {props.userData.username === item.userData.username && <button onClick={handleDelete} type="button" className="simple-button">Delete</button>}
                </div>
            </div>
            <div className="post-body-container-bottom">
                <p style={{ fontWeight: 'bold' }}>{item.title}</p>
                <p >{item.body}</p>
            </div>
            <div className="post-body-container-bottom">
                <button className="like-button" type="button">{item.likeCount !== 0 && item.likeCount} Like</button>
                <button className="like-button" type="bytton">{item.dislikeCount !== 0 && item.dislikeCount} Dislike</button>
            </div>
            <div className="post-body-container">
                <input type="text" placeholder="Your comment here" className="title-input" />
            </div>
            <button type="button" className="post-body-container simple-button">Comment</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        userData: state.userData.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: data => dispatch(deletePost(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);