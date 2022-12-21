import React, { useState } from 'react'
import {MDBInput, MDBTabsPane} from 'mdb-react-ui-kit'
import { API } from '../config/api'
import { useMutation } from 'react-query'
import { Alert } from 'react-bootstrap'


function Register({justifyActive, handleJustifyClick}) {
    const [message, setMessage] = useState()
    const [data, setData] = useState({
        name:'',
        email:'',
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

            if(data.name === ""){
                const alert = (
                    <Alert variant="danger">Please enter a name</Alert>
                  );
              
                   setMessage(alert);
                }else if(data.email === ""){
                    const alert = (
                        <Alert variant="danger">Email is Required</Alert>
                      );
                  
                        setMessage(alert);
                    } else {
                        const alert = (
                            <Alert variant="danger">Password is blank</Alert>
                          );
                      
                          setMessage(alert);
                    }
                    if (data.name && data.email && data.password !== "") {
                        
                        const response = await API.post('/signup',data)
                            const alert = (
                                <Alert variant="success">Register Success</Alert>
                              );
                          
                              setMessage(alert);
                              setData({
                                name:'',
                                email:'',
                                password:''
                              })
                              console.log(response);
                    }
        } catch (error) {
            console.log(error);
        }
        
    })


    return (
        <MDBTabsPane show={justifyActive === 'tab2'}>

            <div className="text-center mb-3">
                <p className='fs-3'>Sign up</p>

            </div>
            {message && message}
            <MDBInput wrapperClass='mb-4' name='name' onChange={handleChange} placeholder="Name" id='form3' type='text' />
            <MDBInput wrapperClass='mb-4' name='email' onChange={handleChange} placeholder="Email" id='form4' type='email' />
            <MDBInput wrapperClass='mb-4' name='password' onChange={handleChange} placeholder="Password" id='form5' type='password'/>


            <p className="mb-4 w-100 bg-success text-white text-center py-2 rounded" style={{ cursor: "pointer"}} onClick={(e)=>handleSubmit.mutate(e)}>Sign up</p>
            <p className="text-center">Already have an Account? <p style={{ cursor: "pointer" }} onClick={()=>handleJustifyClick('tab1')} >Login Here</p></p>
            

        </MDBTabsPane>
    )
}

export default Register