import { Injectable } from '@nestjs/common';
import { EnumReportType, data } from './data';
import { v4 as uuid } from 'uuid';

interface IReport {
  source: string;
  amount: number;
}

@Injectable()
export class AppService {
  getAllReports(reportType: EnumReportType) {
    return data.report.filter((report) => report.type === reportType);
  }

  getReportById(reportType: EnumReportType, id: string) {
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }

  crateReport(reportType: EnumReportType, { source, amount }: IReport) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: EnumReportType.INCOME,
    };
  }
}
