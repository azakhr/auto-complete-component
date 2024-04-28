import { useEffect, useState } from 'react';
import './App.css';
import { API_URL } from './consts.ts';
import { getCountryNames } from './utils.ts';
import { Country } from './types.ts';
import { AutoComplete } from './components/autoComplete/AutoComplete.tsx';

function App() {
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const response: Country[] = await fetch(API_URL).then((response) =>
        response.json(),
      );

      setCountries(getCountryNames(response));
    })();
  }, []);

  return <AutoComplete countries={countries} />;
}

export default App;
