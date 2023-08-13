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
import { EnumReportType } from 'src/data';
import {
  CreateReportDto,
  ResponseReportDto,
  UpdateReportDto,
} from 'src/dto/report.dto';
import { ReportService } from './report.service';

@Controller('report/:typeReport')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReports(
    @Param('typeReport', new ParseEnumPipe(EnumReportType)) typeReport: string,
  ): ResponseReportDto[] {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;

    return this.reportService.getAllReports(reportType);
  }

  @Get(':id')
  getReportById(
    @Param('typeReport', new ParseEnumPipe(EnumReportType)) typeReport: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ResponseReportDto {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;
    return this.reportService.getReportById(reportType, id);
  }

  @Post()
  crateReport(
    @Body() { amount, source }: CreateReportDto,
    @Param('typeReport', new ParseEnumPipe(EnumReportType)) typeReport: string,
  ): ResponseReportDto {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;
    return this.reportService.crateReport(reportType, { source, amount });
  }

  @Put(':id')
  updateReport(
    @Param('typeReport', new ParseEnumPipe(EnumReportType)) typeReport: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto,
  ): ResponseReportDto {
    const reportType =
      typeReport === 'income' ? EnumReportType.INCOME : EnumReportType.EXPENSE;
    return this.reportService.updateReport(reportType, id, body);
  }

  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string): ResponseReportDto {
    return this.reportService.deleteReport(id);
  }
}
