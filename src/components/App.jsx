import { Component } from "react";
import { nanoid } from 'nanoid'
import { Section } from "../components/Section/Section";
import { AddContactForm } from "../components/AddContactForm/AddContactForm";
import { Filter } from "../components/Filter/Filter";
import { Contacts } from "../components/Contacts/Contacts";

export class App extends Component {
state = {
   contacts: [],
  name: '',
  number: '',
  filter: "",
  }
  
  statePropUpdate = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value, });
  }
  addContactToState = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      const { contacts, name, number } = prevState;
      const newContact = { name, id: nanoid(), number};
      return {contacts: [newContact, ...contacts], name: "", number:"",}
      
    })
  }

  filterNames = () => {
    const { contacts, filter } = this.state;
    if (!filter) return contacts;
    return contacts.filter(({ name }) => {
      return (name.toLowerCase().includes(filter.toLowerCase()))
    });
    
}

  render() {
    const filtredContacts = this.filterNames();
    
    return (<div>
      <Section title={"Phonebook"}>
        <AddContactForm onChange={this.statePropUpdate} onSubmit={this.addContactToState} value={this.state} />
      </Section>
      <Section title={"Contacts"}>
        <Filter onChange={this.statePropUpdate}/>
        <Contacts contacts={filtredContacts} />
      </Section>
    </div>)
  }
}

