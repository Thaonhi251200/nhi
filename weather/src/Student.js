import axios from "axios"
import { useEffect, useState } from "react"
export default function Student() {

    // fetch api => dùng axios ( npm i axios) -> lay API free
    const url = "https://6525471867cfb1e59ce6fff2.mockapi.io/Student"
    const [data, setDate] = useState([])
    useEffect(() => {
        axios
            .get(url)
            .then(function (response) {
                console.log(response)
                setDate(response.data)
            })
            .catch(function (error) {
                console.log(error)
            }) // cú pháp để lấy dữ liệu từ API ra (học thuộc)
    }, [])
    return (
        <div>
            {data.map((data,index) => {
                return(
                    <h1 key={index}>{data.Name} -- {data.age}</h1>
                )
            })}
        </div>
    )
}