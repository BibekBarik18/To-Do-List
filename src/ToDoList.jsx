import { useState } from "react"

function ToDoList(){
    const [task,setTask]=useState(["shjhbjdba","shvdb","sdbjhbf"]);
    const [newTask,setnewTask]=useState("");
    const handleKeyPress = (e) => { 
        if (e.key === 'Enter') 
            { 
                addTask(); 
            } 
        };

    function addTask(){
        if(newTask.trim()!==""){
            setTask(t=>[...t,newTask])
            setnewTask("");
        }
    }
    function deleteTask(index){
        setTask(task.filter((_,i)=>i!==index))
    }
    function moveUp(index){
        if(index>0){
            const updatedTasks=[...task];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]]
            setTask(updatedTasks)
        }
    }
    function moveDown(index){
        if(index<task.length-1){
            const updatedTasks=[...task];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]]
            setTask(updatedTasks)
        }
    }
    function handleTask(e){
        setnewTask(e.target.value)
    }

    return(
        <div className="container">
            <div className="title"><h1>To Do List</h1>
            <div className="display">
                <input type="text" value={newTask} placeholder="Enter the task" onChange={handleTask} onKeyDown={handleKeyPress}></input>
                <button className="Add" onClick={addTask}>Add</button>
            </div>
            </div >
            <ol>
                {task.map((task,index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete" onClick={()=>deleteTask(index)}><img src="public\delete.svg" alt="delete"/></button>
                        <button className="arrow" onClick={()=>moveUp(index)}><img src="public\up.svg" alt="up"/></button>
                        <button className="arrow" onClick={()=>moveDown(index)}><img src="public\down.svg" alt="down"/></button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList