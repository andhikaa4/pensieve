import React from 'react'
import TableDetails from '../table/Details'
import './css/summary.css'
import { PieChart } from 'react-minimal-pie-chart';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { API } from '../config/api';

function Details() {
    const {id} = useParams()

    const { data } = useQuery("detailsCache", async () => {
        const token = localStorage.getItem("token")
        const response = await API.get("/" + id, {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    });

    console.log(data);
    
    const colours = ['#1ec891','#ff725e','#ffd05b','#251542','#186438','#ff276b','#ff186c']
    const getColour = () => colours[Math.floor(Math.random() * colours.length)];

    const pie = data?.reduce((acc, cur) => {
        const existingItem = acc.find(item => cur.location === item.location);
        if(existingItem) {
           existingItem.count++;
        }
        else {
           acc.push({...cur, count: 1, color: getColour()} );    
        }
        return acc;
     }, [])

     console.log(id);



    return (
        <div className='h-100 w-100 bg-dark bg-opacity-75 d-flex bg-opacity-75 justify-content-center align-items-center'>

            <div className='h-75 w-75 bg-dark bg-opacity-50 rounded-5 border border-1 d-flex justify-content-center align-items-center'>
                <div className=' text-white h-75 w-75'>
                    <div className='w-100'>
                        <h4>{id}</h4>
                        <h5 className='mb-4'>{data[0]?.device_type}</h5>
                        <div className='d-flex'>
                            <div className='me-5 ' style={{ width: "35%" }}>
                                <span className='border border-1 rounded-3 w-100'>
                                <TableDetails data={data} />
                                </span>
                            </div>
                            <div className='d-flex border border-1 rounded-3' style={{ width: "60%" }}>
                                <div className='w-50 border-end d-flex justify-content-center align-items-center '>
                                    <span className='w-75 d-block p-2'>
                                        
                                        <PieChart
                                            data={pie?.map((item) =>{
                                                return (
                                                    {title: item.location, value:item.count,color:item.color}
                                                )
                                            })}
                                        />
                                    </span>
                                </div>
                                <div className='w-50'>
                                    <div className='d-flex justify-content-center align-items-center h-100' >
                                        <table>
                                           <tr>
                                                <td style={{fontSize:"12px"}} > Time spent on each location
                                                    <ul>
                                                        {pie?.map((item)=> (
                                                            <li >{item.location} <br/> {(item.count / data.length)*100}%</li>
                                                        ))}
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