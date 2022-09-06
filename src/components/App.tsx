import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';
import { Contact } from '../types';
import AddContact from './AddContact';
import ContactDetails from './ContactDetails';
import ContactList from './ContactList';

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState<Array<Contact>>([]);

  const addContactHandler = (c: Contact) => {
    setContacts([...contacts, c]);
  }

  const removeContactHandler = (id: string) => {
    const newContactList = contacts.filter(item => item.id !== id);
    setContacts(newContactList);
  }

  const getContactHandler = (id: string) => {
    return contacts.find(item => item.id === id);
  }

  useEffect(() => {
    const retrievedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(retrievedContacts) setContacts(JSON.parse(retrievedContacts));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return <Router>
      <Header as="h2" textAlign='center' block>Contact Manager</Header>
      
      <Segment attached>
        <Routes>
          <Route path="/"  element={<ContactList contacts={contacts} removeContactHandler={removeContactHandler}/>}/>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path='/contact/:id' element={<ContactDetails getContact={getContactHandler}/>}/>
        </Routes>      
      </Segment>
    </Router>;
}

export default App;
