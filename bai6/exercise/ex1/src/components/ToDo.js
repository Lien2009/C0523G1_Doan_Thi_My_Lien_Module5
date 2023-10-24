import {Component, useEffect, useState} from "react";
import axios from "axios";

function ToDo() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({
        userId: 1,
        title: "",
        completed: false
    })


    useEffect(
        () => {
            axios
                .get("https://jsonplaceholder.typicode.com/todos")
                .then(res => {
                    setTodos([...res.data])
                })
                .catch(err => {
                    throw  err;
                });
        }, []);

    const handleChange = ((event) => {
        setTodo({
            ...todo,
            title: event.target.value
        })
    })

    function handleSubmit() {
        axios
            .post("https://jsonplaceholder.typicode.com/todos", todo)
            .then(res => {
                console.log(res.status)
                console.log(todo)
                alert(
                    `todo ${JSON.stringify(
                        res.data
                    )} successfully!!!`
                );
            })
            .catch(err => {
                throw err;
            });
    }


    return (
        <div>
            <div>
                <h1>Todo List</h1>
                <form>
                    <div>
                        <input name="title" value={todo.title || ""} onChange={handleChange}/>
                    </div>

                    <button type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>

            {todos.map(todo => (
                <ul>
                    <li key={todo.id}>{todo.title}</li>
                </ul>
            ))}

        </div>
    )
}

export default ToDo;