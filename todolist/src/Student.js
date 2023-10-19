export default function Student(props) {
    return(
        <div className="student">
            <h1>
                {props.student.name} --- age: {props.student.age}
                <button onClick={()=>props.delete_student(props.student.id)}>X</button>
                {/*khi goi the co tham so o sau phai them ngoac tron o truoc  */}
            </h1>
            
        </div>
    )
}