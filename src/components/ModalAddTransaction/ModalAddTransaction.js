import ReactModal from 'react-modal';
import {AnimateSharedLayout} from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

import {ReactComponent as CrossIcon} from '../../images/modal-close-icon.svg'
import { getIsModalAddTransactionOpen } from '../../redux/modalAddTransaction/modal-selectors';
import { setIsModalAddTransactionOpen } from '../../redux/modalAddTransaction/modal-actions';
import sBut from './FormAddTransaction/FormAddTransaction.module.css';
import s from './ModalAddTransaction.module.css'
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
        <CrossIcon className={sBut.closeBtn} onClick={() => {dispatch(setIsModalAddTransactionOpen(false))}} ></CrossIcon>
        </ReactModal>
        </AnimateSharedLayout>
    )
}