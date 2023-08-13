import { Module } from '@nestjs/common';
// import { CustomInterceptor } from './custom.interceptor';
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [SummaryModule, ReportModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
