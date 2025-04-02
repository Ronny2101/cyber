import { ObjectId }  from "mongoose"
import { ProductCollection, ProductSize, ProductStatus } from "../enums/product.enum";


export interface Product {
    _id:ObjectId;
    ProductStatus : ProductStatus;
    productCollection : ProductCollection;
    productName : string;
    productPrice: number;
    productLeftCount : number;
    productSize : ProductSize;
    productVolume: number;
    productDesc?: string;
    productImages: string[];
    productViews : number;
}



export interface ProductInput {
    _id:ObjectId;
    ProductStatus? : ProductStatus;
    productCollection? : ProductCollection;
    productName? : string;
    productPrice? : number;
    productLeftCount? : number;
    productSize? : ProductSize;
    productVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews? : number;
}



export interface ProductUpdateInput {
    ProductStatus? : ProductStatus;
    productCollection : ProductCollection;
    productName : string;
    productPrice: number;
    productLeftCount : number;
    productSize? : ProductSize;
    productVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews? : number;
}