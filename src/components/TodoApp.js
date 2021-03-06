import React from 'react';

export default function TodoApp({
  task,
  tasks,
  inputTask,
  addTask,
  redirectToFnit
}) {
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={e => inputTask(e.target.value)}
      />
      <input type="button" value="add" onClick={() => addTask(task)} />
      <ul>
        {tasks.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          redirectToFnit();
        }}
      >
        Redirect To Fnit
      </button>
    </div>
  );
}
