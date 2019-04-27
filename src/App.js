import React, { Component } from "react";
import ReactDOM from "react-dom";
import PersonList from "./components/PersonList";


class App extends Component {
    render() {
        return (
            <div className="App">

                <header className="App-header">

                    <h1 className="App-title">Welcome to React</h1>

                </header>

                <PersonList />

            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));



