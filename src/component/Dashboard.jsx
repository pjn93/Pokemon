import React , {useState, useEffect} from 'react'
import {Table} from 'antd';
import {Link} from 'react-router-dom'
import Sidebar from './Sidebar'
import axios from 'axios';
import EYE from './eye.png';

const Dashboard = () => {
  const title = <h1>Pokemon List</h1>
  const data = [
   
    {
      title:'Name',
      dataIndex: 'name',

    },
    {
      title: 'Details',
      dataIndex: 'url',
      render: (text, record) => (
        <span>
        <Link to={record.url}> 
          <img src={EYE} alt='eye' style={{ width: '30px', height: '30px' }} /></Link>
        </span>
      ),
    },
  ]

  const [dataSource, setDataSource] = useState([])

  function user(){
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0').then(
      (response)=>{
              setDataSource(response.data.results)
              console.log("data", response.data)
              console.log(response.data.results[0].url)

      }
    )
  }

  useEffect(()=>{
    user()
    },[])

  return (
    <div>
     <Sidebar>
     
     <h1 style={{textAlign:'center', fontSize:'20px'}}>Pokemon List</h1>
      <Table  columns={data} dataSource={dataSource} size='small' style={{marginTop:'20px'}}/>
     
    </Sidebar> 
      
    </div>
  )
}

export default Dashboard
