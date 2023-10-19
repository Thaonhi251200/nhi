// truyền biến từ component này sang component khác 
import { useState } from "react"
import Student from "./Student"
export default function List() {
    const [list, setList] = useState([
        {
            id: 1,
            name: "meo",
            age: 2
        },
        {
            id: 2,
            name: "ga",
            age: 1
        },
        {
            id: 3,
            name: "heo",
            age: 4
        },
        {
            id: 4,
            name: "tho",
            age: 2
        }
    ])
    // cu phap { list.map((dat ten gi cung duoc) => {return(<> </>)})}
    // cu phap 2 { list.map((item) => (<> </>))}    ham 'map' de lap 
    const delete_student = (id) => {
        let newList = list.filter((item) => item.id != id)
        setList(newList) // tuong duong bang list=newList
    }

    return (
        <div>
            {/* {list.map((Student) => {
                return (
                    <h1>
                        {Student.name} -- age:{Student.age}
                    </h1>
                )
            })} */} 
            {/* in danh sach bang vong lam map */}
            {list.map((student, index) => {
                return <Student key={index} student={student} delete_student={delete_student} /> //truyen biến // de in danh sach bang vong lam map
            })}
        </div>
    )
}