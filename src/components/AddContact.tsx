import { FC, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { IAddContact } from '../types';
import uuidv4 from 'uuidv4';
import { Link, useNavigate } from 'react-router-dom';

const AddContact: FC<IAddContact> = ({addContactHandler}) => {

  const [name, setName] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const addContact = () => {
    if(!name || !email || name === "" || email === "") {
      alert("Enter all mandatory fields..")
      return;
    }
    addContactHandler({id: uuidv4(), name, email});
    setName(""); setEmail("");
    navigate("/");
  }

  return <>
    <h2>
      Add Contact
      <Link to={"/"}>
        <Button content='View Contacts' floated="right"/>
      </Link>
    </h2>

    <Form onSubmit={addContact}>
      <Form.Field required={true}>
        <label>Name</label>
        <input placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/>
      </Form.Field>

      <Form.Field required={true}>
        <label>Email</label>
        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
      </Form.Field>
      
      <Button type='submit' primary>Submit</Button>
    </Form>
  </>;
}

export default AddContact;
