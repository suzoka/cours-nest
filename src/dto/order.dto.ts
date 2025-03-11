import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class IOrderDTO {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  id?: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: Number;

  @IsString()
  @IsNotEmpty()
  sellerId: string;

  @IsNumber()
  @IsNotEmpty()
  price: Number;
}
