import React, { useState } from 'react';
import { userList } from './UserList';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginHeader from './LoginHeader';
const LoginBody = () => {
    const navigate = useNavigate();
    const [formValues,setFormValues] =useState({username:'',password:''});
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState({});
    const handleClick=(e)=>{
        e.preventDefault();
        const findusername=userList.find(u=>u.username===formValues.username);
        const findpassword=userList.find(u=>u.password===formValues.password);
        // for(let i=0;i<userList.length;i++){
        //     if(userList[i].username===formValues.username&&userList[i].password===formValues.password){
        //         setSuccess(true);
        //         navigate('/userDisplay');
        //     }
        //     else if(userList[i].username===formValues.username&&userList[i].password!==formValues.password){
        //         setError({message:"Invalid password"});
        //         break;
        //     }
        //     else if(userList[i].username!==formValues.username&&userList[i].password===formValues.password){
        //         setError({message:"Username does not exist"});
        //         break;
        //     }
        // }
        if(findusername&&findpassword){
            if(findusername.role==="admin"){
                setSuccess(true);
                navigate('/userDisplay');
            }
            else if(findusername.role==="user"){
                setError({message:"This user does not have access to login"});
            }
            
        }

        else if(findusername){
            setError({message:"Invalid password"});
        }

        else if(findpassword){
            setError({message:"Username does not exist"});
        }
        else
        setError({message:"Username does not exist"});
        }
        // if(success)
        //     <Navigate to={}/>
        
    
  return (
    <div>
        <LoginHeader value="Admin Login"></LoginHeader>
        <h2>Admin Login</h2>
        <form id="login-form" onSubmit={(e)=>e.preventDefault()}>
            <input 
            type="text" 
            id="username"
            name="username"
            placeholder='Username'
            value={formValues.username}
            onChange={(e)=>setFormValues({...formValues,username:e.target.value})}
            ></input>
            <input 
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={(e)=>setFormValues({...formValues,password:e.target.value})}
            ></input>
            {error&&<div id="errorMessage">{error.message}</div>}
            
            <button type="button" id="login" onClick={handleClick}>Login</button>
        </form>
    </div>
  )
}

export default LoginBody