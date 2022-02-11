import PropTypes from 'prop-types';
import s from './AddTransactionBtn.module.css';
import {ReactComponent as AddIcon} from '../../images/plus-icon.svg'
export default function AddTransactionBtn({onClick}) {
  const { button, icon } = s;

  return (
    <button type="button" className={button} onClick={onClick}>
        <AddIcon className={icon} />
    </button>
  );
}

AddTransactionBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};