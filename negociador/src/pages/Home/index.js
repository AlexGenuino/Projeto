import React from 'react';
import MenuNew from '../../components/MenuComponent';

import { Container, Conteudo } from './style';
import Imagem from '../../img/index'

const Home = () => {

return (

<Container>

    <MenuNew></MenuNew>
        <Conteudo>
            <h1>Algoritmo de Senhas</h1>
            <Imagem/>

        </Conteudo>
        <div style={{display:'flex', margin:'20px', marginBottom:'30px', height:'300px', justifyContent:'center', fontSize:'20px', width:'100%'}}>
            <p>
                O algoritmo realiza a criptografia da senha através de um Embaralhamento seguindo a sequencia alfabética, por exemplo, se uma palavra é utilizada como senha na aplicação, para cada letra inserida, o algoritmo irá verificar sua posição dentro do alfabeto e irá trocar a letra de acordo com a distância desejada, que é recebido na função de criptografia. Para calcular essa distancia, o algoritmo recebe uma chave secreta, que utilizamos para calcular qual será a distancia percorrida na hora da troca do caractere, assim fazendo a criptografia da informação desejada. 
            </p>
        </div>
  
</Container>)
}

export default Home;
