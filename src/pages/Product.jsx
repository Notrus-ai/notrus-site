import React from "react"

function Product ({t, notrusLogo}) {
    return (
        <div className="container mx-auto py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">{t('navProduto')}</h1>
            <p className="text-lg text-gray-600">Conteúdo da página Produto aqui.</p>
        </div>
    )
}

export default Product