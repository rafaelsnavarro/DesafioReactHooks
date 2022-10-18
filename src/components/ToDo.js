import React, { useState } from "react";
import Task from "./Task";

function ToDo() {
  const [tarefa, setTarefa] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState([]);

  const handleChange = (event) => {
    setTarefa(event.target.value);
  };

  const send = (event) => {
    event.preventDefault();
    if (tarefa !== "") {
      setListaDeTarefas(
        listaDeTarefas.concat({
          nome: tarefa,
          id: Date.now()
        })
      );
      setTarefa("");
    }
  };

  const remove = (id) => {
    setListaDeTarefas(listaDeTarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div>
      <h1>Rafael S. Navarro - Lembretes</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={tarefa} onChange={handleChange} />
        <button onClick={send}>Enviar</button>
        <button onClick={() => setListaDeTarefas([])}>Limpar</button>
        <div>
          <ol>
            {listaDeTarefas.map((item, index) => (
              <Task
                key={index}
                id={item.id}
                name={item.nome}
                onRemove={remove}
              />
            ))}
          </ol>
        </div>
      </form>
    </div>
  );
}

export default ToDo;
