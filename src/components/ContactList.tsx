import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from 'semantic-ui-react';
import { IContacts } from "../types";
import ContactCard from "./ContactCard";

const ContactList: FC<IContacts> = ({contacts, removeContactHandler}) => {
  const renderHeader = <Table.Header>
    <Table.Row>
      <Table.HeaderCell width={1}/>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>E-mail address</Table.HeaderCell>
      <Table.HeaderCell></Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  const renderContactList = <Table.Body>
    {
      contacts.map(item => <ContactCard item={item} key={item.id} removeContactHandler={removeContactHandler}/> )
    }
  </Table.Body>
  
  return <>
  <h2>
    Contact List
    <Link to={"/add"}>
      <Button content='Add Contact' floated="right" primary/>
    </Link>
  </h2>
  
    {contacts && contacts.length > 0 && 
      <Table singleLine>
      {renderHeader}
      {renderContactList}
    </Table>
    }
  </>;
}

export default ContactList;
  