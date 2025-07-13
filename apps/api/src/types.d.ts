import { Request, Response } from "express";
import { ProductEntity } from "./schemas/product.schema";

interface Product {
  name: string;
  price: number;
  stock: number;
  image: string;
}

export interface ProductCtrl {
  product: ProductEntity;
  findAll(req: Request, res: Response): Promise<Response>;
  findByName(req: Request, res: Response): Promise<Response>;
  buy(req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
  edit(req: Request, res: Response): Promise<Response>;
}
