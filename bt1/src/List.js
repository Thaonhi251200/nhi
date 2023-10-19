import { useEffect, useState } from "react"
import Student from "./Student"
import Header from "./Header"

export default function List() {
    const [list, setList] = useState([
        {
            id: 1,
            name: 'meo',
            age: 2
        },
        {
            id: 2,
            name: 'heo',
            age: 4
        },
        {
            id: 3,
            name: 'bo',
            age: 2
        },
        {
            id: 4,
            name: 'ga',
            age: 1
        },
        {
            id: 5,
            name: 'trau',
            age: 2
        },
    ])
    useEffect(() => { 
        const newList= JSON.parse(localStorage.setItem("list"))
        setList(newList)
    }, [])
    const delete_student = (id) => {
        let newList = list.filter((item) => item.id != id)
        setList(newList)
        localStorage.setItem('list', JSON.stringify(newList))
    }
    const add_student = (text) => {
        let newStudent
        if (list.length > 0) {
            newStudent = [...list, { id: list[list.length - 1].id + 1, name: text, age: 5 }]

        }
        setList(newStudent)
        localStorage.setItem('list', JSON.stringify(newStudent))
    }
    return (
        <div>
            <Header add_student={add_student} />
            {list.map((item, index) => {
                return <Student item={item} key={index} delete_student={delete_student} />
            })}
        </div>)

}