import { Link, useParams } from "react-router-dom"
export default function Product() {
    const { id } = useParams()
    return (
        <div>
            <h1>Product: id={id}</h1>
        </div>
    )
}