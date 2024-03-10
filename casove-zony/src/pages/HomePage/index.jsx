import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './style.css';

export const HomePage = () => {
  const [dateTime, setDateTime] = useState('');
  const [timezone, setTimezone] = useState('Europe/Prague'); // Výchozí hodnota

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
        const data = await response.json();
        const apiDateTime = new Date(data.datetime);
        const formattedDateTime = format(apiDateTime, 'yyyy-MM-dd HH:mm:ss');
        setDateTime(formattedDateTime);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [timezone]); // useEffect volán při změně timezone

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
  };

  return (
    <div className="container">
      <header>
      
      </header>
      <main>
        <p>
         
        </p>
        {/* Formulář pro výběr časové zóny */}
        <label>
          Vyberte časovou zónu:
          <select value={timezone} onChange={handleTimezoneChange}>
            <option value="America/New_York">New York</option>
            <option value="Europe/London">Londýn</option>
            <option value="Europe/Moscow">Moskva</option>
            <option value="Europe/Prague">Praha</option>
            <option value="Asia/Hong_Kong">Hong Kong</option>
            <option value="Asia/Jerusalem">Jeruzalém</option>
          </select>
        </label>

        {/* Zobrazte aktuální datum a čas z API endpointu */}
        <p>Aktuální datum a čas v časové zóně {timezone}: {dateTime}</p>
      </main>
      <footer>
       
      </footer>
    </div>
  );
};
