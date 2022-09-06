import { FC } from "react";
import { Link } from "react-router-dom";
import { Icon, Table } from 'semantic-ui-react';
import user from "../images/user.jpg";
import { IContactCard } from "../types";

const ContactCard: FC<IContactCard> = ({item, removeContactHandler}) => {
  return <>
    <Table.Row key={item.id}>
        <Table.Cell>
          {item.avatar ? <img src={item.avatar} alt="user" className="ui avatar image" />: <img src={user} alt="user" className="ui avatar image" /> }
        </Table.Cell>
        <Table.Cell>
          <Link to={{pathname: `/contact/${item.id}`}}>{item.name}</Link>
        </Table.Cell>
        <Table.Cell>{item.email}</Table.Cell>
        <Table.Cell>
          <Icon name="trash alternate" circular color="red" onClick={() => removeContactHandler(item.id)}/>
        </Table.Cell>
      </Table.Row>
  </>;
}

export default ContactCard;
