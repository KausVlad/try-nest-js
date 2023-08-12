import { Injectable } from '@nestjs/common';
import { EnumReportType, data } from './data';
import { v4 as uuid } from 'uuid';
import { ResponseReportDto } from './dto/report.dto';

interface IReport {
  source: string;
  amount: number;
}

interface IUpdateReport {
  source?: string;
  amount?: number;
}

@Injectable()
export class AppService {
  getAllReports(reportType: EnumReportType): ResponseReportDto[] {
    return data.report
      .filter((report) => report.type === reportType)
      .map((report) => new ResponseReportDto(report));
  }

  getReportById(reportType: EnumReportType, id: string) {
    const report = data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    // return data.report.filter(
    //   (report) => report.type === reportType && report.id === id,
    // );
    if (!report) return;

    return new ResponseReportDto(report);
  }

  crateReport(reportType: EnumReportType, { source, amount }: IReport) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: reportType,
    };

    data.report.push(newReport);
    return new ResponseReportDto(newReport);
  }

  updateReport(reportType: EnumReportType, id: string, body: IUpdateReport) {
    const reportToUpdate = data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    if (!reportToUpdate) {
      return null;
    }

    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date(),
    };

    return new ResponseReportDto(data.report[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);

    if (reportIndex === -1) return null;

    const deletedReport = data.report.splice(reportIndex, 1);
    return new ResponseReportDto(deletedReport[0]);
  }
}
