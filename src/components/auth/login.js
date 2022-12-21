import React, { useState } from 'react'
import {MDBInput, MDBTabsPane} from 'mdb-react-ui-kit'
import { Alert } from 'react-bootstrap'
import { useMutation } from 'react-query'
import { API } from '../config/api'
import { useNavigate } from 'react-router-dom'


function Login({justifyActive, handleJustifyClick}) {
        const navigate = useNavigate()
        const [message, setMessage] = useState()
        const [data, setData] = useState({
                user_name:'',
                password:''
        })
        
        const handleChange = (e) => {
            setData({
                ...data,
                    [e.target.name] : e.target.value
            })
        }
    
        const handleSubmit = useMutation( async(e) => {
            e.preventDefault()
            try {
                if(data.user_name === ""){
                    const alert = (
                        <Alert variant="danger">Please Enter the correct Email</Alert>
                      );
                  
                      setMessage(alert);
                    }else if(data.password === ""){
                        const alert = (
                            <Alert variant="danger">Password is blank</Alert>
                          );
                      
                          setMessage(alert);
                        }
                if (data.user_name && data.password !== ""){

                    const response = await API.post("/login", data, {
                        auth:{
                            username:data.user_name,
                            password: data.password
                        }
                    })
                    localStorage.setItem("token", response.data.response.message.loginToken)
                    navigate("/summary")
                }   
                
            } catch (error) {
                console.log(error);
                if(error.response.data.response.message === 'passwords donot match'){
                    const alert = (
                        <Alert variant="danger">Invalid Password</Alert>
                      );
                  
                      setMessage(alert); 
                } else {
                    const alert = (
                        <Alert variant="danger">Invalid Email or Password</Alert>
                      );
                  
                      setMessage(alert);
                }
            }
            
        })
    return (
        <MDBTabsPane show={justifyActive === 'tab1'}>

            <div className="text-center mb-3">
                <p className='fs-3'>Sign In</p>

            </div>
            {message && message}
            <MDBInput wrapperClass='mb-4' name='user_name' onChange={handleChange}  placeholder="Email" id='form1' type='email' />
            <MDBInput wrapperClass='mb-4' name='password' onChange={handleChange} placeholder="Password" id='form2' type='password' />


            <p className="mb-4 w-100 bg-success text-white text-center py-2 rounded"  style={{ cursor: "pointer" }} onClick={(e)=> handleSubmit.mutate(e)} >Sign in</p>
            <p className="text-center">Not a member? <p style={{ cursor: "pointer" }} onClick={()=>handleJustifyClick('tab2')} >Click Here</p></p>

        </MDBTabsPane>
    )
}

export default Login