import { useState } from "react"

export default function Header(props) {
    const [text, setText] = useState("")
    return (
        <div>
            <input type="text" property="" value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.key == 'Enter'){
                        props.add_student(text)
                        setText("")
                    }
                }
                }

                 />

        </div>
    )
}