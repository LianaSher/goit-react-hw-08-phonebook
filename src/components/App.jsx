import { Component } from "react";
import { nanoid } from 'nanoid'

import { Filter } from "../components/Filter/Filter";
import { Contacts } from "../components/Contacts/Contacts";
import { Form } from "../components/AddContactForm/AddContactForm";

export class App extends Component {
state = {
   contacts: [],
   filter: "",
  }
  
  addContactToState = ({name, number}) => {
    this.setState((prevState) => {
      const { contacts } = prevState;
      const newContact = { name, id: nanoid(), number};
      return {contacts: [newContact, ...contacts]}
      
    })
  }

  filterNames = () => {
    const { contacts, filter } = this.state;
    if (!filter) return contacts;
    return contacts.filter(({ name }) => {
      return (name.toLowerCase().includes(filter.toLowerCase()))
    });
    
  }
  
  filterHandle = ({target}) => {
    this.setState({ filter: target.value });
  }

  render() {
    const filtredContacts = this.filterNames();
    
    return (<div>
      <h2>"Phonebook"</h2>
      
        <Form onSubmit={this.addContactToState} />
      <h2>"Contacts"</h2>
      
        <Filter onChange={this.filterHandle}/>
        <Contacts contacts={filtredContacts} />
      
    </div>)
  }
}

