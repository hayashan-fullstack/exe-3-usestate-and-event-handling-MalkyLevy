import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

const todoList = [
    {
        Details: "AAA",
        Deadline: "07/09",
        Importance: "v",
        Done: "v"
    },
    {
        Details: "BBB",
        Deadline: "15/04",
        Importance: "x",
        Done: "x"
    },
    {
        Details: "CCC",
        Deadline: "10/12",
        Importance: "v",
        Done: "x"
    },
    {
        Details: "DDD",
        Deadline: "01/03",
        Importance: "x",
        Done: "v"
    },
];


const OutputScreenRow = (props) => {
    return (
        <div className="screen-row" style={{ display: 'inline' }}>
            <input type="text" readOnly value={props.value} />
        </div>
    )
} 

  

const Line = (props) => {
    return (
        <p>
            < OutputScreenRow value={props.line.Details} />
            < OutputScreenRow value={props.line.Deadline} />
            < OutputScreenRow value={props.line.Importance} />
            < OutputScreenRow value={props.line.Done} />
        </p>
    )
}


const App = () => {
    return (
        <div style={{ color: "Black" }}>
            <h1>My ToDo List</h1>
            {todoList.map((line, i) => <Line line={todoList[i]} key={i} />)}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

