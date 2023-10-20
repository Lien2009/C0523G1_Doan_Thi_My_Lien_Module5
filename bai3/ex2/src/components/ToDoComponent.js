import React, {Component} from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            item: ''
        };
    }

    handleChange = (event) => {
        this.setState({item: event.target.value})
    }
    handleAddItem = () => {
        if (this.state.item) {
            this.setState({
                list: [...this.state.list, this.state.item]
            })
        }
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>Todo List</h1>
                    </div>
                    <div>
                        <input onChange={(text)=> {
                            this.handleChange(text);
                        }}
                        />
                        <button onClick={this.handleAddItem}>Add</button>
                    </div>
                    <div>
                        <h3>ToDo List</h3>
                        <table>
                            <tbody>
                            {this.state.list.map((task,index) => (
                                <tr key={index}>
                                    <td>{task}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </center>
            </div>
        )
    }
}

export default App;