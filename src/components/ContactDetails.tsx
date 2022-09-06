import { FC } from "react";
import { useParams } from "react-router-dom";
import { IContactDetails } from "../types";
import user from '../images/user.jpg';
import { Button, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ContactDetails: FC<IContactDetails> = ({getContact}) => {
  const params = useParams();
  const contact = getContact(params.id as string);
  return <>
    <h2>
      Contact Details
      <Link to={"/"}>
        <Button content='View Contacts' floated="right" primary/>
      </Link>
    </h2>
    {!!contact && <Card centered>
        {contact.avatar? <Image src={contact.avatar} wrapped ui={false} /> : <Image src={user} wrapped ui={false} />}
        <Card.Content>
        <Card.Header>{contact?.name}</Card.Header>
        <Card.Meta>
            <span className='date'>{contact?.email}</span>
        </Card.Meta>
        </Card.Content>
    </Card>}
  </>;
}

export default ContactDetails;