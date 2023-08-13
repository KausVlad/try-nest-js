import { Injectable } from '@nestjs/common';
import { EnumReportType } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  calculateSummary() {
    const totalExpense = this.reportService
      .getAllReports(EnumReportType.EXPENSE)
      .reduce((acc, report) => acc + report.amount, 0);

    const totalIncome = this.reportService
      .getAllReports(EnumReportType.INCOME)
      .reduce((acc, report) => acc + report.amount, 0);

    return {
      totalIncome: totalIncome,
      totalExpense: totalExpense,
      netIncome: totalIncome - totalExpense,
    };
  }
}
