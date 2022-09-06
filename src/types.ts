export interface Contact {
  id: string;
  name: string;
  email: string;
  avatar ?: string;
}

export interface IContacts {
  contacts: Array<Contact>;
  removeContactHandler: (id: string) => void;
}

export interface IContactCard {
  item: Contact;
  removeContactHandler: (id: string) => void;
}

export interface IAddContact {
  addContactHandler: (contact: Contact) => void;
}

export interface IContactDetails {
  getContact: (id: string) => Contact | undefined;
}