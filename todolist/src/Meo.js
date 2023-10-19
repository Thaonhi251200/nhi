//truyền biến từ component này qua component khác
export default function Meo(props){
    return(
        <div>
            <h1>{props.ten}</h1>
            {props.x}
        </div>
    )
}