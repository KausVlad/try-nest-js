import { IsNumber, Min } from 'class-validator';

export class CreateDto {
  @Min(64)
  @IsNumber()
  num: number;
}
