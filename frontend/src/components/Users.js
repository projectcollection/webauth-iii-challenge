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
                       <li>{user.username}</li>
                   ))}
               </ul>
            </>
        )
    }

    componentDidMount(){
        axios.get('/users').then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
}

export default Users