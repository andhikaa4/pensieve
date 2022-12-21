import '../pages/css/summary.css'

function TableDetails({data}) {
  return (
    <table className='text-white w-100 zui-table zui-table-rounded'>
      <thead>
        <tr>
          <th>Timezone</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
      {data?.map((item)=>(
        <tr>
        <td>{item.timestamp}</td>
        <td>{item.location}</td>
      </tr>
      ))}
        
       
      </tbody>
    </table>
  );
}

export default TableDetails;