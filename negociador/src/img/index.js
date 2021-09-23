import React from 'react';
import LogoPNG from '../assets/Capturar.PNG';

function Logo () {
    return (
        <div>
            <img src={LogoPNG} style={{
          width: 800,
          height: 500,
        }}></img>
        </div>
    )
}

export default Logo