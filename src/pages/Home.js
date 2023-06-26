import { toast } from 'react-toastify'; 
 import {Container,Col,Card} from 'react-bootstrap';  
 
 import Button from 'react-bootstrap/Button';
 import React, { useEffect, useState } from 'react'
 import axios from "axios";  
 
 
 import { useNavigate } from 'react-router-dom'; 
 import Base from '../components/Base';

 const url="http://localhost:5000/"; 

 function Signup(props) {   
 const [datas,setData]=useState([]) 
 
 
  
  const [currentPage,setCurrentpage]=useState(1) 
  //const[key,setKey]=useState('')
  
   
   const perPage=3; 
   const lastIndex= currentPage*perPage;
   const firstIndex=lastIndex-perPage; 
   const record= datas.slice(firstIndex,lastIndex);  
  
   const npage=Math.ceil(datas.length/perPage);
   const Number=[...Array(npage+1).keys()].slice(1);
     const navigator=useNavigate()   
      const prePage=()=>{ 
      if(currentPage!==1){ 
         setCurrentpage(currentPage-1)
        }
      }
      const nxtPage=()=>{   
       if(currentPage!==npage){
        setCurrentpage(currentPage+1)}} 
      const  curPage=(n)=>{setCurrentpage(n)}
     useEffect(()=>{  
           display();  
           
           },[props.keys,currentPage]) 
           
  //sessionStorage.clear()
     const display=async()=>{   
    
   
   if(props.keys!==null)
   {
   const res =  await axios.get(`${url}que/qget/?search=${props.keys}`) 
   
   setData(res.data);  
   }else
   {
    const res =  await axios.get(`${url}que/qget/?search=${''}`) 
    
    setData(res.data);  }
 } 
      
     
    
    
     
     const logs=(e)=>{    
      const toke=  localStorage.getItem('tokens')
      if (toke) {
        navigator(`/answerpost/${e}`); 
      }else{toast.error('login')}
     
      
    } 
    
     
     const logs2=(e)=>{    
      const toke=  localStorage.getItem('tokens') 
    if(toke){
      navigator('./questionpost');}else{toast.error('login')}}
     
    
     return (  <Base thead='Home page' tstyle='headstyle'footer='foot' children={ 
      <div className="App">   
        
      <div style={{display:'flex',justifyContent:'center'}} > 
      
      <Button  variant='primary' onClick={()=>{logs2()}}>ask question</Button> 
      </div>
   
{record.map((d)=>  
 <Container className='me-auto my-2 my-lg-0'>  
<Col md="12">  
 
<Card>  

<Card.Body >  
  
<Card.Title >{d.keys}</Card.Title> 
  <Card.Title>{d.question}</Card.Title>  
   
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    
    <Button onClick={()=>{logs(d._id)}} > view answer</Button>
    </div> 
   
</Card.Body> 
</Card>
  </Col>  
</Container> )} 

<div style={{display:"flex",justifyContent:"center",marginTop:"5px"}}> 

  
  
</div> 
 <nav  style={{display:"flex",justifyContent:"end"}} > 
<ul className='pagination'> 

<li className='page-item'>  
<a href='#'className='page-link'onClick={prePage}>prev</a>
</li>
{ Number.map((n,i)=>(
<li className={`page-item ${currentPage=== n?'active':''}`} key={i}> 
<a href='#'className='page-link'onClick={()=>curPage(n)}>{n}</a>
</li>  ))  }
<li> 
<a href='#'className='page-link'onClick={nxtPage}>next</a>
</li>


</ul>



</nav>

  </div> 
  
  }></Base>)
     } 
  export default Signup;
  