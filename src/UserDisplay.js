import React from 'react'
import { userList } from './UserList'
import LoginHeader from './LoginHeader'
const UserDisplay = () => {
    const user=userList.map(u=><li></li>)
  return (
    <div>
        <LoginHeader value="User Details"></LoginHeader>
        <table id="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>MobileNumber</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((user)=>{
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.mobileNumber}</td>
                        <td>{user.address}</td>
                    </tr>
                })}
            </tbody>
            
        </table>
    </div>
    
    
  )
}

export default UserDisplay