import React, {useEffect, useState} from 'react'
import {Divider, Form, Label, Button } from 'semantic-ui-react'
import { Container, CadastroName } from './styles';
import Select from '../../components/Select';
import TableUers from '../../components/TableUsers'
import Menu from './../../components/Menu';
import HeaderNew from '../../components/NavBar';
import MenuNew from '../../components/MenuComponent';
import axios from 'axios'
import { Table, Icon } from 'semantic-ui-react'


const Cadastro = () => {
    
    
    const [Name, setName] = useState()
    //const [lastName, setlastName] = useState()
    //const [birthdate, setbirthdate] = useState()
    //const [cpf, setcpf] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()


const handleSubmit = async(event, values) => {
    event.preventDefault()
    AlterUser()
}

const LoadToken = () => {

  return localStorage.getItem('token')
}

const URLgetstudent = 'http://127.0.0.1:8000/api/v1/user/GetAllUsers'
    
    const [listUsers, setlistUsers] = useState([])

    //const [selectedcourse, setselectedcourse] = useState()

    const getUsers = () => {
        axios.get(`${URLgetstudent}`, {headers:{Authorization:`Bearer ${LoadToken()}`}})
                .then(resp => setlistUsers(resp.data))
                
    }

    const [currentuser, setCurrentuser] = useState();
    
    const renderRows = () => {
      const list = listUsers || []
      console.log(list)
      return list.map(dados => (
        <Table.Row  onClick = {e => console.log(e)}>
          <Table.Cell ><Icon name='edit' onClick = { () => setCurrentuser(dados)}/></Table.Cell>
          <Table.Cell>{dados.id}</Table.Cell>
          <Table.Cell>{dados.name}</Table.Cell>
          <Table.Cell>{dados.email}</Table.Cell>
          <Table.Cell>**********************************</Table.Cell>
        </Table.Row>
  
      ))
    }

    
    //const URLgetcourse = 'http://127.0.0.1:8000/api/v1/course'
    
    //const [listCourse, setlistCorse] = useState([])

    //const getCorse = () => {
        //axios.get(`${URLgetcourse}`, {headers:{Authorization:`Bearer ${LoadToken()}`}})
                //.then(resp => {
                    //setlistCorse(resp.data)})
    //}

    const AlterUser = async () => {
        try {const {data} = await axios.post('http://127.0.0.1:8000/api/v1/user/update', { 
            //CPF: cpf,
           // name: Name +" "+lastName,
            id: currentuser.id,
            name: Name,
            email: email,
            password: password,
           // birth_date: birthdate,
            //course: selectedcourse,
         }, {headers:{Authorization:`Bearer ${LoadToken()}`}})
         if(data.id > 0){
          alert('Alterado!')
          getUsers()
        }else{
          alert('Não Cadastrado!')
        }
        } catch (error) {
            console.log(error.response)
        }
    }
    
    useEffect(() => {
        getUsers()
        console.log(listUsers)
        //getCorse()
    }, [])


  return (<Container>

    <MenuNew></MenuNew>
    
  <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'40vh'}}>
  <CadastroName>Usuarios do Sistema</CadastroName>
  </div>
  <Form onSubmit = {handleSubmit}>
      <Form.Field>
        <input onChange={e => setName(e.target.value)} type='text' placeholder={currentuser && currentuser.name}/>
      </Form.Field>
      <Form.Field>
        <input onChange={e => setemail(e.target.value)} type='text' placeholder={currentuser && currentuser.email} />
      </Form.Field>
      <Form.Field inline>
        <input onChange={e => setpassword(e.target.value)} type='password' placeholder='Password' />
      <Label pointing='left'>A senha deve conter 6 caracters</Label>
      </Form.Field>
      <div style={{marginTop:'2rem', display:'flex', alignItems:'center', justifyContent:'center', height:'15vh'}}>
      <Button type="submit" content='Alterar' />

    </div>
  </Form>
  <div style={{padding:'2rem'}}>
  <Table celled selectable>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell >Password</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      
      {renderRows()}
      
    </Table.Body>
  </Table>
  </div>
</Container>)
}

export default Cadastro;
