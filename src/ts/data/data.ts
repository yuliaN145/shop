export const data = [
  {
    num: 1,
    name: "Samsung Galaxy S21",
    quantity: "2",
    year: 2019,
    shape: "Samsung",
    color: "белый",
    size: "3",
    favorite: "false",
  },
  {
    num: 2,
    name: "Samsung Galaxy A03",
    quantity: "5",
    year: 2000,
    shape: "Samsung",
    color: "красный",
    size: "2",
    favorite: "false",
  },
  {
    num: 3,
    name: "Samsung Galaxy S20",
    quantity: "3",
    year: 2022,
    shape: "Samsung",
    color: "желтый",
    size: "1",
    favorite: "false",
  },
  {
    num: 4,
    name: "Xiaomi Poco X4 pro",
    quantity: "1",
    year: 2014,
    shape: "Xiaomi",
    color: "желтый",
    size: "2",
    favorite: "false",
  },
  {
    num: 5,
    name: "Xiaomi Redmi Note 11",
    quantity: "4",
    year: 2012,
    shape: "Xiaomi",
    color: "белый",
    size: "1",
    favorite: "true",
  },
  {
    num: 6,
    name: "Xiaomi Redmi 9C 3/64gb",
    quantity: "6",
    year: 2010,
    shape: "Xiaomi",
    color: "красный",
    size: "2",
    favorite: "false",
  },
  {
    num: 7,
    name: "Apple iPhone 11",
    quantity: "12",
    year: 2018,
    shape: "Apple",
    color: "белый",
    size: "3",
    favorite: "true",
  },
  {
    num: 8,
    name: "Apple iPhone 13",
    quantity: "10",
    year: 2009,
    shape: "Apple",
    color: "красный",
    size: "3",
    favorite: "false",
  },
  {
    num: 9,
    name: "Apple iPhone 12",
    quantity: "2",
    year: 2010,
    shape: "Apple",
    color: "желтый",
    size: "3",
    favorite: "false",
  },
  {
    num: 10,
    name: "Apple iPhone SE",
    quantity: "7",
    year: 2004,
    shape: "Apple",
    color: "белый",
    size: "1",
    favorite: "false",
  },
];

export interface IDataItem {
  num: number;
  name: string;
  quantity: string;
  year: number;
  shape: string;
  color: string;
  size: string;
  favorite: string;
}
