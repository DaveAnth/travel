export interface Country {
  name: String;
  code: String;
  capital: String;
  region: String;
  flag: String;
  currency: Currency;
  language: Language;
}

export interface Currency {
  name: String;
  code: String;
  symbol: String;
}

export interface Language {
  name: String;
  code: String;
}