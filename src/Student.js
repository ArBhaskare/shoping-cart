import { useRef } from "react"
import { useDispatch } from "react-redux";
import { addName } from "./StudentSlice";

export default function Student(){
   
   const namebox = useRef()
 const dispatch = useDispatch()
   var add = ()=>{
    var name =  namebox.current.value;
    dispatch(addName(name))
   }
   return<>
    <h2>Add New Student</h2>
    <input type="text" ref={namebox} placeholder="Name"/>
&nbsp;
<button onClick={add}>Add Name</button>
    </>
}