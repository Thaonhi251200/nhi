export default function Student(props){
    return(
        <div>
            <div>
                <h2>Name: {props.item.name} </h2>
                <h4>Age:{props.item.age}</h4>
                <button onClick={()=>props.delete_student(props.item.id)}>X</button>
            </div>
        </div>
    )
}