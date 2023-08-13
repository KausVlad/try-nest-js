import { Exclude, Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { EnumReportType } from 'src/data';

export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  source: string;

  @IsNumber()
  @IsPositive()
  amount: number;
}

export class UpdateReportDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;
}

export class ResponseReportDto {
  id: string;
  source: string;
  amount: number;

  @Expose({ name: 'createdAt' })
  transformFromCreatedAt() {
    return this.created_at;
  }

  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;

  type: EnumReportType;

  constructor(partial: Partial<ResponseReportDto>) {
    Object.assign(this, partial);
  }
}
