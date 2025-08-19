function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-8xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl mt-4">Página não encontrada</h2>
      <a href="/" className="mt-6 text-blue-600 underline">Voltar ao início</a>
    </div>
  )
}

export default NotFound