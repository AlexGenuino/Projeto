import React from 'react'
import { Table } from 'semantic-ui-react'


const TableExampleSelectableRow = props => {

  const renderRows = () => {
    const list = props.list || []
    console.log(props.list)
    return list.map(dados => (
      <Table.Row>
        <Table.Cell>{dados.hashid}</Table.Cell>
        <Table.Cell>{dados.nome}</Table.Cell>
        <Table.Cell>{dados.quantidade}</Table.Cell>
        <Table.Cell>{dados.created_at}</Table.Cell>
      </Table.Row>

    ))
  }
  
  return (
  <Table celled selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>hashID</Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>Quantidade</Table.HeaderCell>
        <Table.HeaderCell>Data Cadastro</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {renderRows()}
    </Table.Body>
  </Table>
)
}

export default TableExampleSelectableRow