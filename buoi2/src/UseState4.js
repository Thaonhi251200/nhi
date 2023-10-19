import { useState } from 'react'
export default function UseState4() {
    const [student, setStudent] = useState({ id: 1, name: "meo", age: 2 })
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    return (
        <div>
            <label>Name:  <input type='text' value={name}  onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                        setStudent({ ...student, name: name })
                    } // onKeyDown={(e)}=>{if (e.key=='Enter')} : lenh nhan phim (co the thay bang ten phim bat ki)
                }} /> </label>
            <br />
            <label>Age: <input type='text' value={age} onChange={(e) => setAge(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                        setStudent({ ...student, age: age })
                    }
                }} /></label>
            <h2>name: {student.name}</h2>
            <h2>age: {student.age}</h2>


        </div>
    )
}