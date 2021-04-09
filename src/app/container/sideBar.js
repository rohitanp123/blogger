import React from "react";
import { connect } from "react-redux";

const Sidebar = (props) => {
    const { userData } = props;
    return (
        <div className="sidebar-container">
            <div className="sidbar-top">
                <div className="profilepicContainer">
                    <img className="profileImage" src={userData.profileImage} alt="profile" />
                </div>
                <p className="caption">{userData.name}</p>
                <p className="caption">{userData.username}</p>
                <p className="caption">{userData.email}</p>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        userData: state.userData.user
    }
}
export default connect(mapStateToProps)(Sidebar);