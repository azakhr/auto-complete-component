import { Country } from './types.ts';

export const getCountryNames = (countryNames: Country[] = []) => countryNames.map(({ name: { common } }) => common);

export const filterByName = async (name = '', countryNames: string[] = [], limit: number = 5) => {
  return countryNames.filter((countryName) => countryName.toLowerCase().startsWith(name)).slice(0, limit);
};
