function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 text-center px-6">
      {/* Logo no topo */}
      <div className="flex items-center space-x-3 mb-8">
        <img src={notrusLogo} alt="Notrus" className="h-12 w-12 rounded-lg" />
        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Notrus
        </span>
      </div>

      {/* Número 404 grande */}
      <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
        404
      </h1>
      
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Página não encontrada
      </h2>
      
      {/* Descrição */}
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        O link que você tentou acessar não existe ou foi movido. Que tal voltar para nossa página inicial?
      </p>
      
      {/* Botão de volta */}
      <a href="/" className="mb-8">
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
          <ArrowLeft className="mr-2 h-5 w-5" /> 
          Voltar para Home
        </Button>
      </a>

      {/* Informações de contato */}
      <div className="text-sm text-gray-500">
        <p>Precisa de ajuda? Entre em contato:</p>
        <a 
          href="mailto:contact@notrus.ai" 
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          contact@notrus.ai
        </a>
      </div>
    </div>
  )
}