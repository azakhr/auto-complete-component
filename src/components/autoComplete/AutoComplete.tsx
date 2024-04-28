import React, { ChangeEvent, useState } from 'react';
import { Input } from '../input/Input.tsx';
import { CountryList } from '../contryList/CountryList.tsx';
import { filterByName } from '../../utils.ts';
import { ClearButton } from '../clearButton/ClearButton.tsx';
import './AutoComplete.css';

interface Props {
  countries: string[];
}

export const AutoComplete: React.FC<Props> = ({ countries }) => {
  const [country, setCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCountry = event.target.value.toLowerCase();

    (async () => {
      const filteredCountries = await filterByName(newCountry, countries);

      setFilteredCountries(filteredCountries);
    })();

    setCountry(newCountry);
  };

  const onClick = (value: string) => {
    setCountry(value);
    setFilteredCountries([]);
  };

  return (
    <>
      <div className="inputWrapper">
        <Input value={country} onChange={onChange} />
        <ClearButton onClick={onClick} />
      </div>
      <CountryList country={country} countries={filteredCountries} onClick={onClick} />
    </>
  );
};
