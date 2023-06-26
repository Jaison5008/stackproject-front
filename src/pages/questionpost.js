import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {  useState } from 'react'; 
import{toast} from 'react-toastify' 
import axios  from 'axios'; 
import { Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
const url="http://localhost:5000/"; 
function TextControlsExample() { 
 const [catagory, setCatagory]=useState("") 
  const [keys,setKeys]=useState('') 
  const[question,setQuestion]=useState('')  
  const navi=useNavigate()
 
  const logged=async()=>{  
    const payload={catagory,keys,question}; 
    

try{  
    let res= await axios.post(`${url}que/qpost`,payload)   
    if(res.data){
    toast.success(res.data.msg)

navi('/'); 
    }else{ 
      toast.error({error:'login to ask question'})
    }
}catch(error) {
toast.error("please enter all fields");
}
}

  return (
    <Form> 
       <FloatingLabel controlId="floatingSelect" label="Works with selects">
      <Form.Select  onChange={(e)=>setCatagory(e.target.value)} aria-label="Floating label select example">
        <option>Open this select catagory</option>
        <option  value="logical">logical</option>
        <option   value="reasoning">reasoning</option>
        <option   value="maths">maths</option> 
        <option  value="general">general</option>
      </Form.Select>
  </FloatingLabel> 
 
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Keys</Form.Label>
        <Form.Control type="text" placeholder="keywords" onChange={((e)=>setKeys(e.target.value))}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Question</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={((e)=>setQuestion(e.target.value))}/>
      </Form.Group> 
      <Button onClick={()=>logged()}>submit</Button>
    </Form>
  );
}

export default TextControlsExample;