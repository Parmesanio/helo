import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUserName, handlePassword, handleProfileUrl, register } from '../../redux/reducer';

class Auth extends Component {

    handleRegister(username, password, profile_url) {
        this.props.register(username, password, profile_url);
    }
    
    render() { 
        let { username, password, profile_url, handleUserName, handlePassword, handleProfileUrl} = this.props;
        console.log(username, password);
        
        return ( 
            <div>
                <form>
                    <input onChange={(e) => handleProfileUrl(e.target.value)} type='text' placeholder='Image_url' />
                    <input onChange={(e) => handleUserName(e.target.value)} type='text' placeholder='Username' />
                    <input onChange={(e) => handlePassword(e.target.value)} type='password' placeholder='Password' />
                </form>
                <button>Login</button>
                <button onClick={() => this.handleRegister(username, password, profile_url)}>Register</button>
            </div>
         );
    }
}

const mapStateToProps = state => {
    let { username, password, profile_url } = state.auth;
    return {
        username,
        password,
        profile_url
    }
}

const mapDispatchToProps = {
    handlePassword,
    handleUserName,
    handleProfileUrl,
    register
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Auth);