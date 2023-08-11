import { Controller, Get, Param } from '@nestjs/common';
import { EnumReportType, data } from './data';

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
}
