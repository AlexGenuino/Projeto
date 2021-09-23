import React from 'react'
import { Table } from 'semantic-ui-react'

const UsersList = props => {
  
  const renderRows = () => {
    const list = props.list || []
    console.log(list)
    return list.map(dados => (
      <Table.Row>
        <Table.Cell>{dados.id}</Table.Cell>
        <Table.Cell>{dados.name}</Table.Cell>
        <Table.Cell>{dados.email}</Table.Cell>
        <Table.Cell>**********************************</Table.Cell>
      </Table.Row>

    ))
  }
  
  return (
  <Table celled selectable>
    <Table.Header>
      <Table.Row>
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
)
  }

  export default UsersList

