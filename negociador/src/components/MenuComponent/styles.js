import styled from "styled-components";

export const StyleMenuTop = styled.div`
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    height: 10vh;
`;

export const ItensMenu = styled.p`
    font-family: 'M PLUS 1p';
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    border: none;
    padding:15px;
    color: #ffff;
    background-color: Transparent;
    cursor: pointer;
    :hover{
        color: #b9b9b9
    }

`;
export const Menu = styled.div`
    width: 755px;
    height: 55px;
    background: black;
    border-radius: 0px 0px 7px 7px;
    position: absolute;
    position: fixed;
    z-index: 13;
    display:flex;
    flex-direction:row;
    justify-content:center;
`;

export const View = styled.div`
    
    width: 120%;
    height: 10%;
    background: slategrey;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: fixed;
    z-index: 12;
    
`;

export const DivWhats = styled.div`

    display: flex;
    align-items: center;
    flex-direction: row;

`;

export const TelefoneText = styled.a`
    font-family: 'M PLUS 1p', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    padding: 10px;
`;

export const DivImg = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    svg {
        width: 2.2rem;
        height: 2.2rem;
        color: #470606;
        cursor: pointer;
    }
`;

export const SvgHoverWhats = styled.div`
    display:flex;
    align-items:center;
    svg{
        :hover{
        color: #34af23
    }
    }
`;

export const SvgHoverFace = styled.div`
    display:flex;
    align-items:center;
    svg{
        :hover{
        color: #3b5998
    }
    }
`;

export const SvgHoverinsta = styled.div`
    display:flex;
    align-items:center;
    svg{
        :hover{
        color: #8134AF
    }
    }
`;

export const Link = styled.a`

`;

export const StyleIcons = styled.div`
    width: 13%;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content:space-around;
`

export const Container = styled.div`
    width: 110%;
    height: 5vh;
    

`;

export const StyleMenu = styled.div`
    width: 100%;
    height: 20vh;
    display:flex;
    justify-content:center;

    
`;