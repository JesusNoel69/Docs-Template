export interface Field {
  [key: string]: { [key: string]: string }[];
}

export interface DataStructure {
  Name: string;
  Logo: string;
  Field: Field[];
}
