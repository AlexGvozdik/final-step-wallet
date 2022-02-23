import styles from './DropDownJSX.module.css';
import { ReactSVG } from 'react-svg';
import svgIcon from '../../../images/categories-list-icon.svg';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { categoriesOperations } from '../../../redux/categories';


export default function DropDownJSX({ categoryName, categoryArray, dateClicker }) {
  const [query, setQuery] = useState(categoryName);
  const [listVisible, setListVisible] = useState(false);

  function onClickCategory() {
    listVisible ? setListVisible(false) : setListVisible(true);
  }
  function onClickList(name, number) {
    setQuery(name);
    onClickCategory()
    dateClicker(number)
  }

  


  return (
    <form className={styles.container}>
      <div className={styles.category} onClick={onClickCategory}>
        {query}
        <ReactSVG src={svgIcon} className={styles.arrow} />
      </div>
      {listVisible && (
        <ul className={styles.itemContainer}>
          {categoryArray.map((name, idx) => (
            <li
              id={idx}
              className={styles.listItem}
              onClick={() => onClickList(name, idx)}
              key={idx}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
      {/* <button type="submit" onClick={() => fetchCategories()}>
        загр
      </button> */}
    </form>
  );
}
