import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import {motion} from 'framer-motion';
import classNames from 'classnames'
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import { Oval } from  'react-loader-spinner'
import moment from 'moment';
import s from './FormAddTransaction.module.css';
import { CustomSelect, StyledOption } from './styled';
import { getIsLoading } from '../../../redux/transactions/transactions-selectors';
import { addTransaction } from '../../../redux/transactions/transactions-operations';
import { setIsModalAddTransactionOpen } from '../../../redux/transactions/transactions-actions';

const CATEGORIES = [{eng: 'main', ru: 'Основной'}, {eng: 'food', ru: 'Еда'}, {eng: 'car', ru: 'Авто'}, {eng: 'development', ru: 'Развитие'}, {eng: 'children', ru: 'Дети'}, {eng: 'home', ru: 'Дом'}, {eng: 'education', ru: 'Образование'},  {eng: 'other', ru: 'Остальные'}]

export default function FormAddTransaction() {
  const initialValues = {
    comment: "",
    sum: ""
  };

  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const [type, setType] = useState(false);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(() => new Date());

  const yesterday = moment().subtract( 1, 'day' );

  const valid =  current  => {
    return current.isAfter( yesterday );
};

  const transactionSchema = yup.object().shape({
    comment: yup.string(),
    sum: yup.number().transform(value => (isNaN(value) ? undefined : value)).required('Required').positive().min(6, 'should be more than 5!').max(20000, 'shouldn\'t be more than 20000!')
  });

  const handleDateChange = ({_d : newDate}) => {
    if (!newDate) {
      return;
    }
    setDate(newDate.toLocaleDateString());
  }

  const handleTypeChange = () => {
    setType(!type) 
    setCategory('')
  }

  const handleSubmit = async (values, {resetForm}) => {
    const dateArr = date.toLocaleDateString().split('.').map(val => val.length > 2 ? val : val.replace('0', ''));
    const transaction = {
    ...values,
    type,
    category,
    day: dateArr[0],
    month: dateArr[1],
    year: dateArr[2],
  } 
  dispatch(addTransaction(transaction));
  }
  
  const renderError = (message) => <p className={s.error}>{message}</p>;

  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={transactionSchema}
    onSubmit={handleSubmit}
    >
    {({ values, handleChange, dirty, isValid }) => (
      <motion.div layout transition={{ type: "spring", stiffness: 100}}>
      <Form className={s.form}  >
        <h2 className={s.title}>Добавить транзакцию</h2>
        <div className={s.wrapper}>
          <span className={type ? classNames(s.active, s.plus, s.type) : s.type}>Доход</span>
          <label className={s.switchCus}>
              <input type="checkbox" name="type" defaultChecked={!type} value={type} onChange={handleTypeChange}/>
              <span className={classNames(s.slider, s.round)}></span>
          </label>
          <span className={!type ? classNames(s.active, s.minus, s.type) : s.type} >Расход</span>
        </div>
        {!type && 
        <div className={s.selectWrapper}>
            <CustomSelect 
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={category ? {color: '#000'} : {color: '#BDBDBD'}} 
                defaultValue={'Выберите категорию'} 
                onChange={setCategory}
                name='categories'>
                  <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}>
                    <StyledOption style={{display: 'none'}} disabled={true} value={'Выберите категорию'}>Выберите категорию</StyledOption>
                  {CATEGORIES.map(({eng, ru}) => (
                    <StyledOption key={eng} value={eng}>{ru}</StyledOption>
                  ))}
                  </motion.div>
            </CustomSelect>
        </div>}
        <label className={s.inputWrapper}>
        <Field    
            type='number' 
            name='sum' 
            className={s.inputAmount} 
            value={values.sum} 
            placeholder='0.00' 
            onChange={handleChange}/>
        <ErrorMessage name="sum" render={renderError} />
        </label>
        <label className={s.dateWrapper}>
          <div className={s.inputDateWrapper}>
            <Datetime 
                name='date'
                type='string'
                isValidDate={ valid } 
                value={date}
                dateFormat='DD.MM.YYYY' 
                onChange={handleDateChange} 
                timeFormat={false} 
                inputProps={{className: s.inputDate}}/>
            </div>
        </label>
          <label className={s.commentLabel}>
              <p className={s.commentTitle}>Комментарий</p>
              <Field type='text' 
                  name='comment' 
                  placeholder='Комментарий' 
                  value={values.comment} 
                  onChange={handleChange} 
                  className={s.commentInput}/>
        </label>
          <div className={s.buttonWrapper}>
            <button type='submit'className={(dirty && isValid && !type && category) || (dirty && isValid && type) ? s.button : classNames(s.disabled, s.button) } disabled={(!dirty && !isValid && type && !category) || (!dirty && !isValid && !type)}>Добавить
                <Oval
                  color="#4A56E2"
                  secondaryColor="#cecece"
                  height={20}
                  visible={isLoading}
                  width={20}
                  strokeWidth={5}
                  ariaLabel='loading'
                  wrapperClass={s.loader}
                />
              </button>
          <button type='button' className={classNames(s.button, s.white)} onClick={() => dispatch(setIsModalAddTransactionOpen(false))}>Отмена</button>
          </div>
      </Form>
      </motion.div>
      )}
    </Formik>
  );
}



