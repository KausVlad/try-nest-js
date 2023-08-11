export const data: IData = {
  report: [],
};

interface IData {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: EnumReportType;
  }[];
}

enum EnumReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

// data.report.push({
//   id: '1',
//   source: 'test',
//   amount: 100,
//   created_at: new Date(),
//   updated_at: new Date(),
//   type: EnumReportType.EXPENSE,
// });
