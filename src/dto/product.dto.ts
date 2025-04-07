import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class IProductDTO {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: Number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  category?: string;
}