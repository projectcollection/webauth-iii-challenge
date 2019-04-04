import React, {Component} from 'react'
import axios from 'axios';

class Auth extends Component{
    state = {
        showLogin: true,
        username: '',
        password: '',
        department: '',
    }
    render(){
            return (
                <>
                    <form onSubmit = {(e) => {
                        e.preventDefault();
                        this.state.showLogin ? this.handleLogin() : this.handleSignUp();
                        this.setState({
                            username: '',
                            password: '',
                            department: ''
                        })
                        }}>
                        <input name = 'username' value = {this.state.username} onChange = {this.handleChange} type = 'text' placeholder = 'username' />
                        <input name = 'password' value = {this.state.password} onChange = {this.handleChange} type = 'password' placeholder = 'password' />
                        {!this.state.showLogin && <input name = 'department' value = {this.state.department} onChange = {this.handleChange} type = 'text' placeholder = 'department' />}
                        {this.state.showLogin ? <input type = 'submit' value = 'login'/> :  <input type = 'submit' value = 'signup'/>}
                    </form>
                    <ToggleButton toggle = {this.toggleForm} text = {this.state.showLogin ? 'signup' : 'login'} />
                </>
            )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    toggleForm = () => {
        this.setState({
            showLogin: !this.state.showLogin
        });
    }

    handleLogin = () => {
        axios.post('/login', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('token', res.data.token)
            this.props.updateAuth(true)
        }).catch(error => {
            console.error(error)
        })
    }

    handleSignUp = (e) => {
        axios.post('/register', {
            username: this.state.username,
            password: this.state.password,
            department: this.state.department
        }).then(res => {
            this.setState({
                showLogin: true
            })
        }).catch(error => {
            console.error(error)
        })
    }
}

const ToggleButton = (props) => {
    return <button onClick = {props.toggle}>{props.text}</button>
}

export default Auth
