import { useState } from "react"

export default function Header(props) {
    const [name, setName]= useState("")
    // const [age, setAge]= useState("")
    return (
        <div>
            <h1>Add Student</h1>
            <input
                type="text"
                placeholder=""
                value = {name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.key == 'Enter'){
                        props.input_student(name)
                        setName("")
                    }
                }
                }
                />  <br/>
                {/* <input
                type="text"
                placeholder=""
                value = {age}
                onChange={(e) => setAge(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.key == 'Enter'){
                        props.add_age(age)
                        setAge("")
                    }
                }
                }
                />  */}

        </div>
    )
}