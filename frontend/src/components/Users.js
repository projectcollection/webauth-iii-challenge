import React, {Component} from 'react'
import axios from 'axios'

class Users extends Component{
    state = {
        users: []
    }

    render(){
        return (
            <>
               <h1>Users</h1>
               <ul>
                   {this.state.users.map(user => (
                       <li key = {user.id}>{user.username}</li>
                   ))}
               </ul>
            </>
        )
    }

    componentDidMount(){
        axios.get('/users').then(res => {
            console.log(res.data)
            this.setState({
                users: res.data
            })
        }).catch(err => {
            console.log(err.message)
        })
    }
}

export default Users