export const Contacts = ({ contacts, onClick}) => {
    if (contacts.length <= 0) { return (<p>There are no contacts yet</p>) }
    return (
        <ul>{contacts.map(({ id, name, number }) => <li key={id}>{name}: {number}<button onClick={()=>onClick(id)} type="button">Delete</button> </li>)} </ul>
    )
}