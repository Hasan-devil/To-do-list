export default function List(props)
{ 
  return(
    <>
    <ul className="container p-1 mt-5 m-1 ">
      {  props.task.map((item, index) => ( <li className="container-sm bg-secondary d-flex col-12 mt-3 rounded p-3 text-light justify-content-between overflow-hidden">{index+1}. {item} <button className = "btn btn-danger btn-sm border-0 " onClick={()=>props.removeTask(index)}>x</button></li> )) }
    </ul>
    </>
    )
}