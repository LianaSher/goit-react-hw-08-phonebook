
import { Component } from "react";

export class Form extends Component {
    state = {
      name: '',
      number: '',  
    }
statePropUpdate = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value, });
  }

    handleSubmit = (event) => {
        event.preventDefault(); 
        const { onSubmit } = this.props;
        onSubmit({ ...this.state });
        this.setState({name: '',
  number: '',})
    }

    render() { return( <form onSubmit={this.handleSubmit}>
            <label>Name
                <input value={this.state.name} onChange={this.statePropUpdate}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
                /></label>
            <label>Number
                <input value={this.state.number} onChange={this.statePropUpdate}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            </label>
            <button>Add contact</button>
        </form>)}
}


