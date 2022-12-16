import Table from 'react-bootstrap/Table';
import '../pages/css/summary.css'
import {ChevronRight, ArrowDown, ArrowUp} from 'react-bootstrap-icons'

function TableSummary() {
  return (
    <Table className='text-white' 
    style={{fontSize:"12px"}}>
      <thead>
        <tr>
          <th className='ps-4' style={{width:"100px"}}>Device ID <ArrowUp/></th>
          <th  style={{width:"100px"}}>Device Type <ArrowUp/></th>
          <th  style={{width:"150px"}}>Latest Timezone</th>
          <th  style={{width:"100px"}}>Latest Location</th>
          <th  style={{width:"50px"}}></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='ps-4'>D-1547</td>
          <td>Aircraft</td>
          <td>000000000</td>
          <td>L2</td>
          <td className='text-end'><span style={{cursor:"pointer"}} >Details </span> <ChevronRight/> </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableSummary;