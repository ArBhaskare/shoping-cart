import { useSelector} from "react-redux"
import Student from "./Student"
export default function App()
{
  const students = useSelector(state=>state.students.value)
  return<>
  <h1>App Component</h1>
  <b>Student List</b>
  <ol>
  {students.map(nm=><li>{nm}</li>)}
  </ol>
  <hr/>
  <Student/>
  </>
}