import Table from 'react-bootstrap/Table';
import '../pages/css/summary.css'
import {ChevronRight, ArrowDown, ArrowUp} from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function TableSummary({data, requestSort}) {
  const navigate = useNavigate()
  const [sort, setSort] = useState(null)
  const sortId = () => {
    if (sort === null) {
      setSort('asc')
    } else if (sort === 'asc'){
      setSort('desc')
    } else {
      setSort('asc')
    }
  }
  const [sorted, setSorted] = useState(null)
  const sortType = () => {
    if (sorted === null) {
      setSorted('asc')
    } else if (sorted === 'asc'){
      setSorted('desc')
    } else {
      setSorted('asc')
    }
  }
  console.log(sort);


  return (
    <Table className='text-white' 
    style={{fontSize:"12px"}}>
      <thead>
        <tr>
          <th className='ps-4' style={{width:"100px"}} onClick={() => {requestSort('device_id'); sortId()}} >Device ID { sort == null || sort === 'asc' ? <ArrowUp/> : <ArrowDown/>}</th>
          <th  style={{width:"100px"}} onClick={() => {requestSort('device_type'); sortType()}}>Device Type { sorted == null || sorted === 'asc' ? <ArrowUp/> : <ArrowDown/>}</th>
          <th  style={{width:"150px"}}>Latest Timezone</th>
          <th  style={{width:"100px"}}>Latest Location</th>
          <th  style={{width:"50px"}}></th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
            <tr>
            <td className='ps-4'>{item.device_id}</td>
            <td>{item.device_type}</td>
            <td>{item.timestamp}</td>
            <td>{item.location}</td>
            <td className='text-end'><span style={{cursor:"pointer"}} onClick={()=> navigate("/details/" + item.device_id)} >Details </span> <ChevronRight/> </td>
          </tr>
        ))}
        
      </tbody>
    </Table>
  );
}

export default TableSummary;