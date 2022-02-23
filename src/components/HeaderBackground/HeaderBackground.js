import React from 'react';
import style from './HeaderBackground.module.css';
import AppBar from '../AppBar';
import Container from '../Container';

export default function HeaderBackground() {

  return (
    <div className={style.container}>
        <Container>
            <AppBar/>
        </Container>
    </div>
  );
}
