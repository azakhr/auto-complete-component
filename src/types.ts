export interface BaseCountryName {
  official: string;
  common: string;
}

export interface CountryNameField extends BaseCountryName {
  nativeName: {
    ron: BaseCountryName;
  };
}

export interface Country {
  name: CountryNameField;
}
