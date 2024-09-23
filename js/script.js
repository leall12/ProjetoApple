const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const TituloProduto = document.getElementById('titulo-produto')

const verdeCipreste = {
    nome:'verde-cipreste', // nome da cor
    pasta:'imagens-verde-cipreste' // nome da pasta
}

const azulInverno = {
    nome:'azul-inverno', // nome da cor
    pasta:'imagens-azul-inverno' // nome da pasta
}

const meiaNoite = {
    nome:'meia-noite', // nome da cor
    pasta:'imagens-meia-noite' // nome da pasta
}

const estelar = {
    nome:'estelar', // nome da cor
    pasta:'imagens-estelar' // nome da pasta
}

const rosaClaro = {
    nome:'rosa-claro', // nome da cor
    pasta:'imagens-rosa-claro' // nome da pasta
}


const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro]
const opcoesTamanho = ['41 mm', '45 mm']

let imagemSelecionada = 1
let tamanhoSelecionado = 1
let corSelecionada = 1


function trocarImagem(){
    // pegando o id da opção selecionada
    const idImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    // função charAt() retorna o caractere especificado a partir de uma string.
    imagemSelecionada = idImagemSelecionada.charAt(0)
    //imagemVisualizacao.src="./imagens/opcoes-cores/imagens-azul-inverno/imagem-"+imagemSelecionada+".jpeg"
    imagemVisualizacao.src=`./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imagemSelecionada}.jpeg`
}

function trocarTamanho(){
    // atualizar a variável de controle que contém o tamanho selecionado
    const idTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = idTamanhoSelecionado.charAt(0)
    // alterar o título do produto
    TituloProduto.innerText = `Pulseira loop esportiva azul-inverno para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    // alterar o tamanho da imagem conforme a opção selecionada
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena')
    }
    else{
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}

function trocarCor(){
    // atualizar a variável de controle que contém a cor selecionada
    const idCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
    corSelecionada = idCorSelecionada.charAt(0)
    TituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    
}