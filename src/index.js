import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content'
import './index.css';

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Total = ({part}) =>{
  return <p>Number of exercises : {part[0].exercises + part[1].exercises + part[2].exercises} </p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part= [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
    ]

  return (
    <div>
      <Header course={course} />
      <Content part={part}/>
      <Total   part={part}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
