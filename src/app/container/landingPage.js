import React from "react";
import {connect} from 'react-redux';
import SinglePost from "../comopnent/singlrPost";

const LandingPage = (props) => {
    return (
        <div className="homepage-container">
           {
            props.posts.length > 0 ? props.posts.map((item,index)=>{
                return(
                    <SinglePost key={index} item={item} index={index} />
                )
            }) : 
            <h2>No post avvailable</h2>
           }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        userData: state.userData.user
    }
}
export default connect(mapStateToProps)(LandingPage);