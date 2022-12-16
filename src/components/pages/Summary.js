import React from 'react'
import TableSummary from '../table/Summary'
import'./css/summary.css'
import {ChevronRight, ChevronLeft} from 'react-bootstrap-icons'
function Summary() {

  return (
    <div className='h-100 w-100 bg-dark bg-opacity-75 d-flex bg-opacity-75 justify-content-center align-items-center'>
        
        <div className='h-75 w-75 bg-dark bg-opacity-50 rounded-5 border border-1 d-flex justify-content-center align-items-center'>
            <div className=' text-white   h-75 w-75'>
                <div className='w-100'>
                    <h4>GPS Summary</h4>
                    <div className='d-flex mb-3'>
                        <div style={{flex:"50%"}}>
                            <input type="text" className='rounded-5 py-1 w-75 px-2'  
                            placeholder='&#xf002; Search by Device ID / Type' 
                            style={{fontFamily:"Arial, FontAwesome", fontSize:"10px",backgroundColor:"grey", }} />
                        </div>
                        <div style={{flex:"50%"}} className='text-end d-flex justify-content-end align-items-center'>
                            <div className='me-3'>
                            <p className='m-0'>1-5</p>
                                
                            </div>
                            <ChevronLeft/>
                            <ChevronRight/>
                        </div>
                    </div>
                    <div >
                        <TableSummary/>
                    </div>
                   
                </div>
            </div>

        </div>
    </div>
  )
}

export default Summary