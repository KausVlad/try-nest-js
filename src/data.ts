export enum EnumReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export interface IData {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: EnumReportType;
  }[];
}

export const data: IData = {
  report: [
    {
      id: '1',
      source: 'test',
      amount: 100,
      created_at: new Date(),
      updated_at: new Date(),
      type: EnumReportType.INCOME,
    },
    {
      id: '2',
      source: 'test1',
      amount: 200,
      created_at: new Date(),
      updated_at: new Date(),
      type: EnumReportType.INCOME,
    },
    {
      id: '3',
      source: 'test2',
      amount: 300,
      created_at: new Date(),
      updated_at: new Date(),
      type: EnumReportType.EXPENSE,
    },
  ],
};

// data.report.push({
//   id: '1',
//   source: 'test',
//   amount: 100,
//   created_at: new Date(),
//   updated_at: new Date(),
//   type: EnumReportType.EXPENSE,
// });
