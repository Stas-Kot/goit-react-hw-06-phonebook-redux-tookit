import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook-actions';
import { SearchTitle } from './SearchContact.styles';

const SearchContact = ({ value, inputChange }) => {
  return (
    <label>
      <SearchTitle>Find contacts by name</SearchTitle>
      <input type="text" value={value} onChange={inputChange} />
    </label>
  );
};
SearchContact.propTypes = {
  value: PropTypes.string,
  inputChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  inputChange: e => dispatch(actions.setFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContact);
