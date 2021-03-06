import React, {useEffect, useState} from 'react'
import {Divider, Form, Label, Input, Button } from 'semantic-ui-react'
import { Container, CadastroName } from './styles';
import axios from 'axios'
import Select from '../../components/Select';
import InputAmount from '../../components/InputAmount';
import TableCursos from '../../components/TableProducts';
import Menu from '../../components/Menu';

const LabelExamplePointing = () => {

    const LoadToken = () => {

        return localStorage.getItem('token')
      }

    const URLget = 'http://127.0.0.1:8000/api/v1/course'
    
    const [listCourse, setlistCorse] = useState([])

    const getCorse = () => {
        axios.get(`${URLget}`, {headers:{Authorization:`Bearer ${LoadToken()}`}})
                .then(resp => setlistCorse(resp.data))
    }
    
    useEffect(() => {
        getCorse()
    }, [])

    return(
    <Container>
        <Menu></Menu>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'20vh'}}>
        <CadastroName>Produtos</CadastroName>
        </div>
        <Form>
            <Form.Field>
            <input type='text' placeholder='Filtrar' />
            </Form.Field>
        </Form>
        <div style={{marginTop:'2rem', display:'flex', alignItems:'center', justifyContent:'center', height:'15vh'}}>
            <Button content='Procurar' />
        </div>
        <div style={{padding:'2rem'}}>
            <TableCursos list={listCourse}/>
        </div>
    </Container>)
}

export default LabelExamplePointing