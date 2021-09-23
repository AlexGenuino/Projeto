import React, { Children, Component } from 'react'
import { Container, Input, Menu, Segment, SemanticCOLORS } from 'semantic-ui-react'
import {NameH1} from './styles'
import { useHistory  } from "react-router-dom";
import styled from 'styled-components';
  
  const MenuPage = ({children}) => {

    const history = useHistory()
    return ( <>
    <Container>
        <div>
        <Menu pointing color='blue'>
          <Menu.Item
            name='Cadastro de Usuários'
            onClick={() => history.push('/adm/cadastro')}
          />
          <Menu.Item
            name='Lista de Usuários'
            onClick={() => history.push('/adm/listusers')}
            
          />
          <Menu.Item
            name='Cadastro de Produtos'
            onClick={() => history.push('/adm/cadastroproducts')}
            
          />
          <Menu.Item
            name='Lista de Produtos'
            onClick={() => history.push('/adm/cadastrocourse')}
          />
          <Menu.Item
            name='Financeiro'
            onClick={() => history.push('/adm/financeiro')}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
                <NameH1>Client Products</NameH1>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    </Container>
    {children}
    </>
    )
  }

 
  
  export default MenuPage;
    
  
