

export interface FormData {
  title: string;
  subtitle: string;
  optionalButton?: boolean;
  selectOptions?: string[];
  width: string;
  checkButton?: boolean;
  type: string;
  titleNest?: string;
  nestedForm?: FormData[],
  date?: boolean,
  text?: boolean,
  database: string,
  databaseNest?:string
}
