import PropTypes from "prop-types";

export const Item = ({ id, name, number, onClick }) => {
    return (
        <>{name}: {number}
            <button onClick={() => onClick(id)} type="button">Delete</button>
        </>
    )
}

Item.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })).isRequired,
    onClick: PropTypes.func.isRequired,
}