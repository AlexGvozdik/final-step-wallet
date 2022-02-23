import React, { useState, useEffect } from 'react';
import PieChart from '../PieChart';
import StatisticMenu from './StatisticMenu';
import Table from './Table';

import { categoriesOperations } from '../../redux/categories';
import { useDispatch } from 'react-redux';

import styles from './DiagramTab.module.css';

import { useLocation, useNavigate } from 'react-router-dom';

export default function DiagramTab() {
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const monthParams = new URLSearchParams(location.search).get('month');
  const yearParams = new URLSearchParams(location.search).get('year');



  function queryParams() {
    if (month && year) {
      return `month=${month}&year=${year}`
    }

    if (month) {
      return `month=${month}`
    }

    if (year) {
      return `year=${year}`
    }

    return ''
  }

  function pushMonth() {
    navigate({
      pathname: location.pathname,
      search: queryParams(),
    })
  }


  function changeMonth(value) {
    setMonth(value+1)
  }

  function changeYear(value) {
    const calendar = {
      0: new Date().getFullYear().toString(),
      1: (new Date().getFullYear() +1).toString(),
      2: (new Date().getFullYear()+2).toString()
    }
    setYear(calendar[value])
  }
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(categoriesOperations.fetchCategories());
  }, [dispatch]);
  
  useEffect(() => {
    pushMonth()
    // eslint-disable-next-line
  }, [month, year]);

  useEffect(() => {
    if (yearParams && monthParams) {
      const numberYear = Number(year)
      dispatch(categoriesOperations.fetchCategories(month, numberYear))
      return
    }

    if (monthParams) {
      const currentYear = new Date().getFullYear()
      const numberYear = Number(currentYear)
      dispatch(categoriesOperations.fetchCategories(month, numberYear));
      return
    }

    if (yearParams) {
      dispatch(categoriesOperations.fetchCategories(undefined, yearParams));
      return
    }
      // eslint-disable-next-line
  }, [monthParams, yearParams])


  return (
    <div className={styles.container}>
      <PieChart />
      <div>
        <StatisticMenu monthClicker={changeMonth} yearClicker={changeYear} />
        <Table />
      </div>
    </div>
  );
}
