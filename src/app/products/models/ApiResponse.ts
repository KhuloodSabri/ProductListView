import { Product } from "./Product";

export interface ApiResponse{
    status: string;
    code: number;
    total: number,
    data: Product[]
}