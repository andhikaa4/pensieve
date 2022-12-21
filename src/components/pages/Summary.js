import React, { useState } from 'react'
import TableSummary from '../table/Summary'
import'./css/summary.css'

import Pagination from '../Pagination/Pagination'
import { useQuery } from 'react-query';
import { API } from '../config/api';
import { useSortableData } from '../sortData/sortData';
function Summary() {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const [inputText, setInputText] = useState("");


    const { data, refetch } = useQuery("dataCache", async () => {
        const token = localStorage.getItem("token")
        const response = await API.get("", {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    });
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  
    const filteredData = data?.filter((el) => {
      //if no input the return the original
      if (inputText === '') {
          return el;
      }
      //return the item which contains the user input
      else {
          return el?.device_id.toLowerCase().includes(inputText) || el?.device_type.toLowerCase().includes(inputText)
      }
  })
 
  const {items, requestSort} = useSortableData(filteredData)
      const currentPosts = items[0]?.slice(firstPostIndex, lastPostIndex)
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
                            style={{fontFamily:"Arial, FontAwesome", fontSize:"10px",backgroundColor:"grey", }} onChange={inputHandler} />
                        </div>
                        <div style={{flex:"50%"}} className='text-end d-flex justify-content-end align-items-center'>
                            <div className='me-3'>
                            <p className='m-0'>{firstPostIndex + 1} - {lastPostIndex}</p>
                                
                            </div>
                            <Pagination
                totalPosts={data?.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
                        </div>
                    </div>
                    <div >
                        <TableSummary requestSort={requestSort} refetch={refetch} data={currentPosts}/>
                    </div>
                   
                </div>
            </div>

        </div>
    </div>
  )
}

export default Summary