import { useState } from "react";
import Layout from "./layout";
import dataArr from "../dataTodoApp/todoData";

export default function AddTask() {
    const [task, setTask] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (task === "") {
            return;
        }
        dataArr.push(task.trim());
        setTask("");
    };

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
                {dataArr.map((x, i) => (
                    <li key={i}>{x}</li>
                ))}
            </ul>
        </Layout>
    );
}
