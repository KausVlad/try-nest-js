import { IsNumber, Min } from 'class-validator';

export class CreateDto {
  @Min(32)
  @IsNumber()
  num: number;
}
