import { useEffect, useState } from "react"
import axios from "axios"
import './App.css'
// import { IconName } from "react-icons/bs";

export default function Weather() {
    const [data, setData] = useState(null)
    const [text ]= "Ha Noi"
    const getData = async () => {
        const apiKey = "210728f48aa831f2544d0e46ab5182e2"
        // const[error,setError]= useState ("")
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apiKey}` // phai chinh dola ($) truoc{} sua ten theo cu phap
        axios
            .get(url)
            .then(function (response) {
                console.log(response)
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    useEffect(() => {
        getData()

    }, [])
    console.log(data)
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = weekday[d.getUTCDay()];
    // function find() {
    //     getData()
    //     setText("")
    // }
    return (
        <div className="weather">
            {/* <div className="find">
            <input type="text"
                property=""
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={e => {
                    if (e == 'Enter' && text){
                        getData()
                        setText("")
                    }
                }}
            /> */}
            {/* <button id="find" onClick={find}><i class="fa-solid fa-magnifying-glass"></i></button> */}
            {/* </div> */}
            
            {data && ( // cau truc cua if()
                <>
                    <div className="main">
                        <h1> {data.name}</h1>
                        <div className="contain">
                            <div className="text">
                                <div className="info">
                                    <p> <i class="fa-solid fa-location-dot"></i>  {data.name} </p>
                                    <p><i class="fa-solid fa-calendar-days"></i> Day Time | {day} </p>
                                </div>
                                <h2> {((data.main.temp)).toFixed()}°C | {(((data.main.temp) * 1 + 32) * 9 / 5).toFixed()}°F </h2>
                                <div className="info_1">
                                    <h2>light rain</h2>
                                    <p>{data.name}</p>
                                    <p>Temp: {data.main.temp}°C</p>
                                    <p>Country: VN</p>
                                </div>
                            </div>
                            <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                        </div>

                    </div>
                </>

            )}
            {/* <h1>Weather</h1> */}
            {/* <h1>Temp: {data.main.temp}</h1> */}

        </div>
    )
}