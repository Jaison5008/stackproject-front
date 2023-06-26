import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap'; 
import {toast} from 'react-toastify' 
import axios from 'axios';
import {  useEffect, useState } from 'react'; 
import { useParams,useNavigate } from 'react-router-dom'; 
import Card from 'react-bootstrap/Card';

const url="https://stack-back-qu4a.onrender.com";
function FormFloatingTextareaExample() {  
    const [data,setData]=useState([])  
    const [data1,setData1]=useState('')
    //console.log(data) 
    const toke=   localStorage.getItem('tokens')
    const [answer,setAns]=useState('') 
    const navi=useNavigate()
    const {id}=useParams() 
    //console.log(id)
 //const navi=useNavigate()
  useEffect(()=>{  
    
    dispalay()
  },[])  
  
    const  dispalay= async()=>{ 
      try{
    const res =  await axios.get(`${url}ans/ansget/${id}`,{headers:{Authorization:`Bearer ${toke}`}});    
   console.log(res)
     setData(res.data.msg) 
     setData1(res.data.msg1) 
     
    } 
  catch(error){ 
     toast.error("login again")
  }}
    const logged=async()=>{  
      const payload={answer}; 
      
  
  try{  
      let res= await axios.post(`${url}ans/anspost/${id}`,payload)   
     
      toast.success(res.data.msg)
  //sessionStorage.setItem("qId",res.data._id) 
  //const id=sessionStorage.getItem("queid")
  navi('/'); 
      
  }catch(error) {
  toast.error('login');
  }
  } 
       
      
  return (<>
    
    <Card style={{backgroundColor:"gray"}}>
      <Card.Body>{data1.question}</Card.Body>
    </Card>
  
    
    
    {data.map((dat)=>
      <Card style={{backgroundColor:"white"}}>
      <Card.Body>{dat.answer}</Card.Body>
    </Card>
     
   
    )}
    <div>  
      <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>write your Answer</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={((e)=>setAns(e.target.value))}/>
      </Form.Group> 
      <Button onClick={()=>logged()}>submit</Button> 
      </Form>
    </div>
    </>
     
      
  );
}

export default FormFloatingTextareaExample;
