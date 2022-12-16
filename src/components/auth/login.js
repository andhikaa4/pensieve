import React, { useState } from 'react'
import {MDBInput, MDBTabsPane} from 'mdb-react-ui-kit'
import { Alert } from 'react-bootstrap'
import { useMutation } from 'react-query'
import { API } from '../config/api'


function Login({justifyActive, handleJustifyClick}) {

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
                const response = await API.post('/login',data)
               console.log(response)
                const alert = (
                    <Alert variant="success">Berhasil Login</Alert>
                  );
              
                  setMessage(alert);
                //   setData({
                //     user_name:'',
                //     password:''
                //   })
            } catch (error) {
                console.log(error);
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