import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseEnumPipe,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { EnumReportType } from './data';
import { AppService } from './app.service';
import {
  CreateReportDto,
  ResponseReportDto,
  UpdateReportDto,
} from './dto/report.dto';

@Controller('report/:typeReport')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(
    @Param('typeReport', new ParseEnumPipe(EnumReportType)) typeReport: string,
  ): ResponseReportDto[] {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;

    return this.appService.getAllReports(reportType);
  }

  @Get(':id')
  getReportById(
    @Param('typeReport', new ParseEnumPipe(EnumReportType)) typeReport: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ResponseReportDto {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;
    return this.appService.getReportById(reportType, id);
  }

  @Post()
  crateReport(
    @Body() { amount, source }: CreateReportDto,
    @Param('typeReport', new ParseEnumPipe(EnumReportType)) typeReport: string,
  ): ResponseReportDto {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;
    return this.appService.crateReport(reportType, { source, amount });
  }

  @Put(':id')
  updateReport(
    @Param('typeReport', new ParseEnumPipe(EnumReportType)) typeReport: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto,
  ): ResponseReportDto {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;
    return this.appService.updateReport(reportType, id, body);
  }

  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string): ResponseReportDto {
    return this.appService.deleteReport(id);
  }
}
