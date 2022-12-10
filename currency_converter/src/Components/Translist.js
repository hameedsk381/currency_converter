import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
const Translist = () => {
    const [translist,setTranslist] = useState([])


    const getTransactions = async()=>{
        await axios.get("http://127.0.0.1:4001/logs/gettxns").then(response=>{setTranslist(response.data)})
    }


    useEffect(() => {
      
    
      getTransactions()
      
    }, [])
    
  return (
    <div className='m-5'>
        
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Transaction_id</th>
          <th>Amount sent (USD)</th>
          <th>Amount received (INR)</th>
          <th>Sender_name</th>
          <th>Receiver_name</th>
          <th>Purpose</th>

        </tr>
      </thead>
      <tbody>
        
        {translist.map((item)=>{
            return (
              <tr key={item._id}>
              <td >{item._id}</td>
              <td >{item.sent_amount}</td>
              <td >{item.rec_amount}</td>
              <td >{item.sender_name}</td>
              <td >{item.receiver_name}</td>
              <td >{item.purpose}</td>
              </tr>
             
              )
        })}
        
  
      </tbody>
    </Table>
    </div>
  )
}

export default Translist