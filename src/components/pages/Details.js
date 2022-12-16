import React from 'react'
import TableDetails from '../table/Details'
import './css/summary.css'
import { PieChart } from 'react-minimal-pie-chart';

function Details() {

    return (
        <div className='h-100 w-100 bg-dark bg-opacity-75 d-flex bg-opacity-75 justify-content-center align-items-center'>

            <div className='h-75 w-75 bg-dark bg-opacity-50 rounded-5 border border-1 d-flex justify-content-center align-items-center'>
                <div className=' text-white h-75 w-75'>
                    <div className='w-100'>
                        <h4>D-1547</h4>
                        <h5 className='mb-4'>Aircraft</h5>
                        <div className='d-flex'>
                            <div className='me-5 ' style={{ width: "35%" }}>
                                <span className='border border-1 rounded-3 w-100'>
                                <TableDetails />
                                </span>
                            </div>
                            <div className='d-flex border border-1 rounded-3' style={{ width: "60%" }}>
                                <div className='w-50 border-end d-flex justify-content-center align-items-center '>
                                    <span className='w-75 d-block p-2'>
                                        
                                        <PieChart
                                            data={[
                                                { title: 'One', value: 10, color: '#E38627' },
                                                { title: 'Two', value: 15, color: '#C13C37' },
                                                { title: 'Three', value: 20, color: '#6A2135' },
                                            ]}
                                        />
                                    </span>
                                </div>
                                <div className='w-50'>
                                    <div className='d-flex justify-content-center align-items-center h-100' >
                                        <table>
                                           <tr>
                                                <td style={{fontSize:"12px"}} > Time spent on each location
                                                    <ul>
                                                        <li>L1 <br/> 80%</li>
                                                    </ul>
                                                </td>
                                           </tr>
                                        </table>    
                                    </div>
                                    
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Details