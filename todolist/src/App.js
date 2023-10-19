import List from "./List";
import Meo from "./Meo";
import Student from "./Student";

export default function App() {
    const x = 10
    const y = "le meo"
    return (
        <div>
            <h1>Student List</h1>
            <Meo x={x} ten={y} />
            <List />
        </div>
    )
}