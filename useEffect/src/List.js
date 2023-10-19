import { useState, useEffect } from "react";
import Student from "./Student";
import Header from "./Header";
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
            age: 3
        },
        {
            id: 3,
            name: 'khi',
            age: 5
        },
        {
            id: 4,
            name: 'gau',
            age: 3
        }
    ])
    useEffect(()=>{
        const newList = JSON.parse(localStorage.getItem("list")) // JSON.parse chuyển object thành mảng {} -> []
        setList(newList)

    },[])
    //useEffect(()=>{},[]) -->  cú pháp của useEffect
    const delete_student = (id) => {
        let newList = list.filter((item) => item.id != id)
        setList(newList)
        localStorage.setItem("list",JSON.stringify(newList)) // lưu trữ biến  JSON.stringify chuyênt []->{}
    }
    // const add_age = (text) => {
    //     let newStudent
    //     if (list.length > 0) {
    //         newStudent =  [...list,{ id: list[list.length - 1].id + 1, name: text, age: text }]
    //     }
    //  else {
    //     newStudent =  [...list,{ id: 1, name: text, age: 5 }]
    // }
    // setList(newStudent)
    // }
    const input_student = (text) => {

        let newStudent
        if (list.length > 0) {
            newStudent =  [...list,{ id: list[list.length - 1].id + 1, name: text, age: text }]
        }
     else {
        newStudent =  [...list,{ id: 1, name: text, age: 5 }]
    }
    setList(newStudent)
    localStorage.setItem("list", JSON.stringify(newStudent)) // 
}
return (
    <div>
        <Header input_student={input_student}  />
        {list.map((item, index) => {
            return <Student item={item} key={index} delete_student={delete_student} />
        })}
    </div>
)
    }