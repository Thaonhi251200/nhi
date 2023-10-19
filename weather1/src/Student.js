import axios from "axios"
import { useEffect, useState } from "react"
export default function Student() {
    const url = "https://6525471867cfb1e59ce6fff2.mockapi.io/:endpoint"
    const [data, setData] = useState([])
    // useEffect(() => {
    //     axios
    //         .get(url)
    //         .then(function (response) {
    //             console.log(response)
    //             setData(response.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // }, [])
    useEffect(() => {
        axios
            .get(url)
            .then(function (response) {
                console.log(response)
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error)
            }) // cú pháp để lấy dữ liệu từ API ra (học thuộc)
    }, [])
    return (
        <div>
            {data.map((item,index)=>{
                return(
                    <h2> name: {item.Name} age: {item.age}</h2>
                )
            })}

        </div>
    )
}