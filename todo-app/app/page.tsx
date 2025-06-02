import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md text-center">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-4">
          Bem-vindo ao App de Tarefas!
        </h1>
        <p className="text-gray-600 mb-8">
          Organize suas tarefas de forma rápida e eficiente.
        </p>
        <Link
          href="/tarefas"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition duration-300"
        >
          Ver Tarefas
        </Link>
      </div>
    </main>
  );
}
