import { useEffect, useState } from "react";
import "./styles.css";

export const App = () => {
  const [datetime, setDatetime] = useState("");
  const [timezone, setTimezone] = useState("Europe/Prague");

  useEffect(() => {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => {
        setDatetime(data.datetime);
      });
  }, [timezone]);

  return (
    <div>
      Hodnota datetime: <output>{datetime}</output>
      <label>
        Vyberte zónu:{" "}
        <select
          onChange={(event) => {
            setTimezone(event.target.value);
          }}
          value={timezone}
        >
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
      </label>
    </div>
  );
};
