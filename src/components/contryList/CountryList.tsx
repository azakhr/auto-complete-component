import React from 'react';

import './CountryList.css';

interface Props {
  onClick: (value: string) => void;
  countries: string[];
  country?: string;
}

export const CountryList: React.FC<Props> = ({ onClick, country, countries }) => {
  if (!country) {
    return null;
  }

  const startPosition = country.length;

  return (
    <ul className="countryList">
      {countries.map((matchedCountry, index) => (
        <li
          key={`${country}_${index}`}
          className="countryListItem"
          onClick={(event) => onClick(event.target.innerText)}
        >
          <span className="highlight">{matchedCountry.slice(0, startPosition)}</span>
          {matchedCountry.slice(startPosition)}
        </li>
      ))}
    </ul>
  );
};
