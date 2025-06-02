const Titulo = () => (
  <h1 className="text-2xl md:text-3xl font-bold mb-1">React - Conceitos básicos</h1>
);

const SubTitulo = () => (
  <h2 className="text-3xl md:text-4xl font-bold mb-6">Lista de tarefas</h2>
  
);

const Cabecalho = () => {
  return (
    <div className="text-center my-6">
      <Titulo />
      <SubTitulo />
    </div>
  );
};

export default Cabecalho;
export { Titulo, SubTitulo };