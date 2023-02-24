import PropTypes from "prop-types";
export const Filter = ({ onChange }) => {
    
    return (<div>
        
        <label>Find contacts by name
            <input onChange={onChange}
                
  type="text"
  name="filter"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  
/>
        </label>
    </div>)
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}