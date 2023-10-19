export default function Student(props){
    return(
        <div>
            {props.item.name}    {props.item.age}
            <button onClick={()=>props.delete_student(props.item.id)}>X</button>
        </div>
    )
}