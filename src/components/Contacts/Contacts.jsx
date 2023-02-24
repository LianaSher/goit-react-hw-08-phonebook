import PropTypes from "prop-types";
import { Item } from "./ContactsItem";

export const Contacts = ({ contacts, onClick }) => {
    if (contacts.length <= 0) { return (<p>There are no contacts yet</p>) }
    return (
        <ul>{contacts.map(({ id, name, number }) => <li key={id}><Item id={id} name={name} number={number} onClick={onClick} /> </li>)} </ul>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })).isRequired,
}