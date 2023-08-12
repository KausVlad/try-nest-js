import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EnumReportType, data } from './data';
import { AppService } from './app.service';

@Controller('report/:typeReport')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('typeReport') typeReport: string) {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;

    return this.appService.getAllReports(reportType);
  }

  @Get(':id')
  getReportById(
    @Param('typeReport') typeReport: string,
    @Param('id') id: string,
  ) {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;
    return this.appService.getReportById(reportType, id);
  }

  @Post()
  crateReport(
    @Body() { amount, source }: { source: string; amount: number },
    @Param('typeReport') typeReport: string,
  ) {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;
    return this.appService.crateReport(reportType, { source, amount });
  }

  @Put(':id')
  updateReport(
    @Param('typeReport') typeReport: string,
    @Param('id') id: string,
    @Body() body: { source: string; amount: number },
  ) {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;
    return this.appService.updateReport(reportType, id, body);
  }

  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return this.appService.deleteReport(id);
  }
}
