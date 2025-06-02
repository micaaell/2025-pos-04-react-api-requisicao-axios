"use client";

import { useState } from "react";
import dados, { TarefaInterface } from "@/data";
import Cabecalho from "@/componentes/Cabecalho";

// Componente Tarefa
interface TarefaProps {
  titulo: string;
  concluido?: boolean;
}

const Tarefa: React.FC<TarefaProps> = ({ titulo, concluido }) => {
  const [estaConcluido, setEstaConcluido] = useState(concluido);

  const classeCard = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
    estaConcluido
      ? "bg-gray-800 hover:border-gray-800"
      : "bg-gray-400 hover:border-gray-400"
  }`;

  const classeCorDoTexto = estaConcluido ? "text-amber-50" : "";

  const escutarClique = () => {
    console.log(`A tarefa '${titulo}' foi clicada!`);
    setEstaConcluido(!estaConcluido);
  };

  return (
    <div className={classeCard} onClick={escutarClique}>
      <h3 className={`text-xl font-bold ${classeCorDoTexto}`}>{titulo}</h3>
      <p className={`text-sm ${classeCorDoTexto}`}>
        {estaConcluido ? "Concluída" : "Pendente"}
      </p>
    </div>
  );
};

// Componente que renderiza a lista de tarefas
interface TarefasProps {
  dados: TarefaInterface[];
}

const Tarefas: React.FC<TarefasProps> = ({ dados }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dados.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          titulo={tarefa.title}
          concluido={tarefa.completed}
        />
      ))}
    </div>
  );
};

// Componente Modal para adicionar tarefas
interface ModalTarefaProps {
  adicionarTarefa: (titulo: string) => void;
  fecharModal: () => void;
}

const ModalTarefa: React.FC<ModalTarefaProps> = ({
  adicionarTarefa,
  fecharModal,
}) => {
  const [titulo, setTitulo] = useState("");

  const handleAdicionar = () => {
    if (titulo.trim()) {
      adicionarTarefa(titulo);
      setTitulo("");
      fecharModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Adicionar Tarefa</h2>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Digite a tarefa"
          className="w-full px-3 py-2 border rounded mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleAdicionar}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Adicionar
          </button>
          <button
            onClick={fecharModal}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

// Página principal
const Home = () => {
  const [tarefas, setTarefas] = useState<TarefaInterface[]>(dados);
  const [mostrarModal, setMostrarModal] = useState(false);

  const adicionarTarefa = (titulo: string) => {
    const novaTarefa: TarefaInterface = {
      id: tarefas.length + 1,
      title: titulo,
      completed: false,
    };
    setTarefas((prev) => [...prev, novaTarefa]);
  };

  return (
    <div className="container mx-auto p-4">
      <Cabecalho />

      <button
        onClick={() => setMostrarModal(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Nova Tarefa
      </button>

      <Tarefas dados={tarefas} />

      {mostrarModal && (
        <ModalTarefa
          adicionarTarefa={adicionarTarefa}
          fecharModal={() => setMostrarModal(false)}
        />
      )}
    </div>
  );
};

export default Home;