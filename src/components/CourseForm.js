import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useState } from "react";
import { TodosContext } from "../App";

const CourseForm = () => {
  const [inputData,setInputData] = useState({name:"",grade:"",val:0,cred:0})
  const {dispatch} = useContext(TodosContext)
  return (
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >

      <form class= "form" onSubmit = {(e)=>{
        e.preventDefault();
        dispatch({
          type : "ADD_TODO",
          payload : {
            id: Date.now(),
            name: inputData.name,
            grade: inputData.grade,
            val: inputData.val,
            cred: inputData.cred
          }
        }
       )
     }}>


        <input class="name"  placeholder="Input Subject Name or Subject ID" onChange ={(e)=>{
          setInputData({...inputData,name:e.currentTarget.value})
        }}></input>
        <select class="grade" onChange = {(e) => {
          setInputData({...inputData,val:e.currentTarget.value,
                        grade:e.currentTarget.options[e.currentTarget.selectedIndex].text})
        }}>
          <option></option>
          {GRADES.map((obj)=>{
            return (<option value={obj.value}>{obj.name}</option>)
          })}
        </select>
        <select class="credit" onChange ={(e) => {
          setInputData({...inputData,cred:e.currentTarget.value})
        }}>
          <option></option>
        {CREDITS.map((obj)=>{
            return (<option value={obj}>{obj}</option>)
          })}
        </select>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default CourseForm;