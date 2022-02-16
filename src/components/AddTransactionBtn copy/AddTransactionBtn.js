import s from './AddTransactionBtn.module.css';
import {ReactComponent as AddIcon} from '../../images/plus-icon.svg'
import { useDispatch } from 'react-redux';
import { setIsModalAddTransactionOpen } from '../../redux/modalAddTransaction/modal-actions';

export default function AddTransactionBtn() {
  const { button, icon } = s;
  const dispatch = useDispatch()

  return (
    <button type="button" className={button} onClick={() => dispatch(setIsModalAddTransactionOpen(true))}>
        <AddIcon className={icon} />
    </button>
  );
}
