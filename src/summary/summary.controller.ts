import { Controller, Get } from '@nestjs/common';

@Controller('summary')
export class SummaryController {
  @Get()
  getSummary() {
    return 'Summary';
  }
}
