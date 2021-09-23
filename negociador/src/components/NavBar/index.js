import React from 'react';
import { Container, View, StyleIcons, DivImg, SvgHoverWhats, SvgHoverFace, SvgHoverinsta} from './styles';

import { AiOutlineWhatsApp, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai"


function NavBar() {

    const handlerlinkclick = (Link) =>{
        window.open(Link, '_blank')
    }
    
    const LinkWhats = "http://wa.me/5519993176589"
    const LinkFace = "https://www.facebook.com/cdgcontabildadeeassessoria"
    const LinkInsta = "https://www.instagram.com/cdgcontabilidadeassessoria/"
    return (
        <Container>
            <View>
            <div></div>
            <StyleIcons>
            <DivImg>
                <SvgHoverWhats>
                <AiOutlineWhatsApp onClick = { () => handlerlinkclick(LinkWhats)}/>
                </SvgHoverWhats>
            </DivImg>
            <DivImg>
                <SvgHoverinsta>
                <AiFillInstagram onClick = { () => handlerlinkclick(LinkInsta)}/>
                </SvgHoverinsta>
            </DivImg>
            <DivImg>
                <SvgHoverFace>
                <AiOutlineFacebook onClick = { () => handlerlinkclick(LinkFace)}/>
                </SvgHoverFace>
            </DivImg>
            </StyleIcons>
            </View>
        </Container>
    )}
  
  export default NavBar;