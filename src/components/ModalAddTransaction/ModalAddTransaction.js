import ReactModal from 'react-modal';
import {AnimateSharedLayout} from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

import {ReactComponent as CrossIcon} from '../../images/modal-close-icon.svg'
import { getIsModalAddTransactionOpen } from '../../redux/transactions/transactions-selectors';
import { setIsModalAddTransactionOpen } from '../../redux/transactions/transactions-actions';
import s from './ModalAddTransaction.module.css';
import s2 from './FormAddTransaction/FormAddTransaction.module.css'

import FormAddTransaction from './FormAddTransaction/FormAddTransaction'
import './transition.css';

export default function Modal() {
    const {backdrop, modal} = s;
    const isModalOpen = useSelector(getIsModalAddTransactionOpen);
    const dispatch = useDispatch()

    return (
        <AnimateSharedLayout>
        <ReactModal 
        isOpen={isModalOpen} 
        closeTimeoutMS={2000} 
        contentLabel={'Add transaction modal'} 
        ariaHideApp={false} 
        shouldFocusAfterRender={false} 
        className={modal} 
        overlayClassName={backdrop} 
        onRequestClose={() => dispatch(setIsModalAddTransactionOpen(false))}> 
        <FormAddTransaction/>
        <CrossIcon onClick={() => {dispatch(setIsModalAddTransactionOpen(false))}} className={s2.closeBtn}></CrossIcon>
        </ReactModal>
        </AnimateSharedLayout>
    )
}