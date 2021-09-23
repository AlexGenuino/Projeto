import React, {useEffect, useState} from 'react'
import {Divider, Form, Label, Button } from 'semantic-ui-react'
import { Container, CadastroName } from './styles';
import Select from '../../components/Select';
import TableAlunos from '../../components/TableUsers'
import Menu from './../../components/Menu';
import MenuNew from '../../components/MenuComponent';
import TableProducts from '../../components/TableProducts';
import Fuse from 'fuse.js'
import axios from 'axios'

const Cadastro = () => {
    
    const [Name, setName] = useState()
    const [Quantidade, setquantidade] = useState()
    const [itemSearchInput, setitemSearchInput] = useState()

const handleSubmit = async(event, values) => {
    event.preventDefault()
    CreateProduct()
}

const SearchSubmit = async(event, values) => {
  event.preventDefault()
  SearchProduct()
}

const SearchProduct = () =>{
  fuse.search(itemSearchInput)
}

const LoadToken = () => {

  return localStorage.getItem('token')
}

const URLgetbooks = 'http://127.0.0.1:8000/api/v1/book'
    
    const [listcourse, setlistUsers] = useState([])

    const [selectedcourse, setselectedcourse] = useState()

    const getUsers = () => {
        axios.get(`${URLgetbooks}`, {headers:{Authorization:`Bearer ${LoadToken()}`}})
                .then(resp => setlistUsers(resp.data.data))
    }
    
    /*const URLgetcourse = 'http://127.0.0.1:8000/api/v1/course'
    
    const [listCourse, setlistCorse] = useState([])

    const getCorse = () => {
        axios.get(`${URLgetcourse}`, {headers:{Authorization:`Bearer ${LoadToken()}`}})
                .then(resp => {
                    setlistCorse(resp.data)})
    }*/

    const CreateProduct = async () => {
        try {const {data} = await axios.post('http://127.0.0.1:8000/api/v1/book', { 
            
            nome: Name,
            quantidade: Quantidade,
            
         }, {headers:{Authorization:`Bearer ${LoadToken()}`}})
            if(data.id > 0){
              alert('Cadastrado!')
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
        //getCorse()
    }, [])

    

    useEffect(() => {
      
    }, [listcourse])

    const fuse = new Fuse(listcourse, {
      keys: ['nome', 'hashid', 'quantidade']
    })

    const itemsSearch = React.useMemo(() => {
      if (itemSearchInput)
        return fuse.search(itemSearchInput).map((array) => array.item);
      else return listcourse;
    });

    

  return (<Container>
    <MenuNew></MenuNew>
  <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'20vh', marginTop:'10%'}}>
  <CadastroName>Cadastro de Products</CadastroName>
  </div>
  <Form onSubmit = {handleSubmit}>
      <Form.Field>
        <input onChange={e => setName(e.target.value)} type='text' placeholder='Nome' />
      </Form.Field>
      <Form.Field>
        <input onChange={e => setquantidade(e.target.value)} type='text' placeholder='Quantidade' />
      </Form.Field>

      <div style={{marginTop:'2rem', display:'flex', alignItems:'center', justifyContent:'center', height:'15vh'}}>
      <Button type="submit" content='Cadastrar' />

    </div>
  </Form>

  <Form onSubmit = {SearchSubmit}>
      <Form.Field>
        <input onChange={e => setitemSearchInput(e.target.value)} type='text' placeholder='Digite sua pesquisaa meu amigo' />
      </Form.Field>
  </Form>
  
  <div style={{padding:'2rem'}}>
    <TableProducts list={itemsSearch}/>
  </div>
</Container>)
}

export default Cadastro;
