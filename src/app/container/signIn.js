import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserData } from "../redux/action";

const users = [
    {
        name: 'Rahul Mehra',
        username: 'rahulmehra123',
        email: 'rahulmehra@gmail.com',
        password: '12345678',
        profileImage: 'https://wallpaperaccess.com/full/2213426.jpg'
    },
    {
        name: 'Sandeep Gupta',
        username: 'sandeepgupta325',
        email: 'sandeepgupta@gmail.com',
        password: '0987654',
        profileImage: 'https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg'
    },
    {
        name: 'Pinky Sharma',
        username: 'pinkysharma212',
        email: 'pinkysharma@gmail.com',
        password: '87654321',
        profileImage: 'https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg'
    },
]

const SignIn = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        let userData = null;
        users.forEach((user, index) => {
            if (user.username === username && user.password === password) {
                userData = users[index]
            }
        })
        if (userData) {
            props.setUserData(userData)
            props.history.replace('/app/home')
        }
    }
    return (
        <div className="signInpage">
            <div className="signInContainer">
                <h1 className="heading">Sign In</h1>
                <div className="inputContainer">
                    <label>Username</label>
                    <div className="inputBoxContainer">
                        <input
                            type="text"
                            value={username}
                            required
                            onChange={e => setUsername(e.target.value)}
                            className="inputBox"
                        />
                    </div>
                </div>
                <div className="inputContainer">
                    <label>Password</label>
                    <div className="inputBoxContainer">
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="inputBox"
                        />
                    </div>
                </div>
                <button type='button' className="actionButton" onClick={handleSignIn}>SignIn</button>
            </div>
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
        setUserData: data => dispatch(setUserData(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);