import { useState } from "react";
import Layout from "./layout";
import initialDataArr from "../dataTodoApp/todoData";

export default function AddTask() {
    const [task, setTask] = useState("");
    const [dataArr, setDataArr] = useState(initialDataArr);

    function onSubmitHandler(e) {
        e.preventDefault();
        if (task.trim() === "") {
            return;
        }
        dataArr.push(task.trim());
        setTask("");
    }

    function onDelete(id) {
        const updatedDataArr = [...dataArr];
        updatedDataArr.splice(id, 1);
        setDataArr(updatedDataArr);
    }

    return (
        <Layout>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    placeholder="Add to do..."
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {dataArr.map((x, id) => (
                    <li key={id}>
                        {x} <button onClick={() => onDelete(id)}>delete</button>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
