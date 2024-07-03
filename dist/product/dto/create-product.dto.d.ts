import { Product } from "../entities/product.entity";
export declare class CreateProductDto extends Product {
    name: string;
    description: string;
    amount: number;
    active: boolean;
}
