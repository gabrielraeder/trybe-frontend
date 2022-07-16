import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

function mapContent(arr) {
  return arr.map((item) => <li className="item">O conteúdo é: {item.conteudo}<br/>Status: {item.status}<br/>Bloco: {item.bloco}</li>)
}

class Content extends React.Component {
  render() {
    return mapContent(conteudos)
  }
}

export default Content