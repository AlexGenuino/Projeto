import React from 'react';
import { Menu, StyleMenuTop, ItensMenu, Container, View, StyleIcons, DivImg, SvgHoverWhats, SvgHoverFace, SvgHoverinsta, StyleMenu} from './styles';
import { useHistory  } from "react-router-dom";
import { AiOutlineWhatsApp, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai"
import Logo from '../../img/Logo'

const MenuComponent = () => {

  const history = useHistory()

  const handlerlinkclick = (Link) =>{
    window.open(Link, '_blank')
}

  return (
    <Container>
      <StyleMenuTop>
        <View>
              
              <Logo/>
        </View>
      </StyleMenuTop>
      <StyleMenu>
        <Menu>
          <ItensMenu onClick={() => history.push('/home')}>Home</ItensMenu>
          <ItensMenu onClick={() => history.push('/adm/users')}>Usuários do Sistema</ItensMenu>
          <ItensMenu onClick={() => history.push('/adm/cadastroproducts')}>Cadastro de Produtos</ItensMenu>
         
        </Menu>
      </StyleMenu>
  </Container>
    );
}


export default MenuComponent;