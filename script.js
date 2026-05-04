'use strict'

import { listaProdutos } from './produtos.js'

function criarCardDoProduto(produto) {
  const cartao = document.createElement('div')
  cartao.classList.add('cartao-produto')

  // topo 
  const topo = document.createElement('div')
  topo.classList.add('card-topo')

  const avaliacao = document.createElement('span')
  avaliacao.classList.add('avaliacao')
  avaliacao.textContent = produto.classificacao

  const acoes = document.createElement('div')
  acoes.classList.add('card-acoes')

  const btnFavoritar = document.createElement('button')
  btnFavoritar.classList.add('btn-acao')
  btnFavoritar.title = 'Favoritar'
  btnFavoritar.textContent = '♡'

  const btnCarrinho = document.createElement('button')
  btnCarrinho.classList.add('btn-acao')
  btnCarrinho.title = 'Adicionar ao carrinho'
  btnCarrinho.textContent = '🛒'

  acoes.append(btnFavoritar, btnCarrinho)
  topo.append(avaliacao, acoes)

  // imagem 
  const divImagem = document.createElement('div')
  divImagem.classList.add('card-imagem')

  const img = document.createElement('img')
  img.src = `./img/${produto.imagem}`
  img.alt = produto.nome

  divImagem.append(img)

  // corpo 
  const corpo = document.createElement('div')
  corpo.classList.add('card-corpo')

  const estrelas = document.createElement('div')
  estrelas.classList.add('caixa-de-estrelas')

  const nome = document.createElement('h2')
  nome.classList.add('card-nome')
  nome.textContent = produto.nome

  const linhaPreco = document.createElement('div')
  linhaPreco.classList.add('linha-preco')

  const preco = document.createElement('span')
  preco.classList.add('preco-atual')
  preco.textContent = `R$ ${produto.preco}`

  linhaPreco.append(preco)
  corpo.append(estrelas, nome, linhaPreco)

  // monta o card 
  cartao.append(topo, divImagem, corpo)

  return cartao
}

const todosOsCards = listaProdutos.map(criarCardDoProduto)
document.getElementById('container').replaceChildren(...todosOsCards)