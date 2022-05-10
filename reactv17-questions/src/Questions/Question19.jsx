/*
Question: useReducer dispatch being called twice
Url: https://stackoverflow.com/questions/72068781/usereducer-dispatch-being-called-twice
 */

import { v4 as uuidv4 } from 'uuid';

import { useReducer, useState } from 'react';

function reducer(stateTodos, actionType) {
  switch (actionType.type) {
    case 'ADD-TODO':
      if (actionType.payload.id && actionType.payload.name) {
        const newStateTodos = [...stateTodos];
        newStateTodos.push({
          id: actionType.payload.id,
          name: actionType.payload.name,
          done: actionType.payload.done,
        });
        console.log('Adicionado TODO');
        return newStateTodos;
        break;
      }

    case 'DEL-TODO':
      if (actionType.payload.id) {
        let newStateTodos = [...stateTodos];
        newStateTodos = newStateTodos.filter((item) => item.id !== actionType.payload.id);
        console.log('Deletado TODO');
        return newStateTodos;
        break;
      }

    case 'TOGGLE-TODO':
      if (actionType.payload.id) {
        const newStateTodos = [...stateTodos];

        for (const item of newStateTodos) {
          if (item.id === actionType.payload.id) {
            item.done = !item.done;
          }
        }

        console.log(newStateTodos);
        return newStateTodos;
      }

    default:
      return stateTodos;
  }
}

const initialToDos = [];

function Question19() {
  const [inputTodo, setInputTodo] = useState('');
  const [stateTodos, dispatch] = useReducer(reducer, initialToDos);

  // controlando o input para sempre que digittar atualizar o valor do proprio.
  const handleInputTodo = (e) => {
    setInputTodo(e.target.value);
  };

  // Funcao que faz acao de adicionar Todo ao dar submit no FORM
  const handleForm = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD-TODO',
      payload: {
        id: parseInt(uuidv4()),
        name: inputTodo,
        done: false,
      },
    });

    setInputTodo('');
  };

  // Funcao que faz acao de deletar TODO ao clicar no botao de delete
  const handleDelTodo = (id) => {
    dispatch({
      type: 'DEL-TODO',
      payload: {
        id,
      },
    });
  };

  // Funcao que chama o Toggle-TODO, chama a action Toggle TODO e altera o status DONE para FALSE (nao esta funcionando ainda)
  const handleToggleTodo = (id) => {
    dispatch({
      type: 'TOGGLE-TODO',
      payload: {
        id,
      },
    });
  };

  return (
    <div>
      <form action="submit" onSubmit={handleForm}>
        <input type="text" value={inputTodo} onChange={handleInputTodo} />
        <button type="submit">ENVIAR</button>
      </form>

      <div>
        LISTA:
        <ul>
          {stateTodos.map((item) => (
            <li key={item.id}>
              {item.id} - {item.name}
              <button onClick={() => handleDelTodo(item.id)}> DELETAR </button>
              <button onClick={() => handleToggleTodo(item.id)}>CHECK</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Question19;
