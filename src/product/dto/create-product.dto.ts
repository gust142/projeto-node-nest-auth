import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Product } from "../entities/product.entity";

export class CreateProductDto extends Product {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    active: boolean;

}
