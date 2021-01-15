import { useContext } from "react";
import { TodosContext } from "../App";

const CourseCard = (props) => {
  const {dispatch} = useContext(TodosContext)
  return (
    <>
      {
      	props.todos.map((course)=>{
          return (
            <>
            <div class= "coursecard" >
            <tr>
                <td>
                	<p>Subject : {course.name}</p>
                	<p>Grade : {course.grade}</p>
                	<p>Credit: {course.cred}</p>
                </td>
                <td>
                  <button onClick ={()=>{
                    dispatch({
                      type : "DELETE_TODO",
                      payload : course.id
                    })
                  }}>X</button>
                </td>
              </tr>
            </div>
           </>
          )
        }
       )
      }
    </>
  );
};

export default CourseCard;