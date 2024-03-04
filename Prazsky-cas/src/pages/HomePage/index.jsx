import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './style.css';

export const HomePage = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Prague');
        const data = await response.json();
        const apiDateTime = new Date(data.datetime);
        const formattedDateTime = format(apiDateTime, 'yyyy-MM-dd HH:mm:ss');
        setDateTime(formattedDateTime);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>React webová aplikace</h1>
      </header>
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí{' '}
          <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>.
        </p>
        {/* Zobrazte aktuální datum a čas z API endpointu */}
        <p>Aktuální datum a čas: {dateTime}</p>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
