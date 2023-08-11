import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EnumReportType, data } from './data';
import { v4 as uuid } from 'uuid';

@Controller('report/:typeReport')
export class AppController {
  @Get()
  getAllReports(@Param('typeReport') typeReport: string) {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;
    console.log(typeReport);
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportById(
    @Param('typeReport') typeReport: string,
    @Param('id') id: string,
  ) {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    return data.report.filter(
      (report) => report.type === reportType && report.id === id,
    );
  }

  @Post()
  crateReport(
    @Body() { amount, source }: { source: string; amount: number },
    @Param('typeReport') typeReport: string,
  ) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type:
        typeReport === 'income'
          ? EnumReportType.INCOME
          : EnumReportType.EXPENSE,
    };

    data.report.push(newReport);
    return newReport;
  }
}
