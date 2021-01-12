export type Order = {
    id:number,
    address: string,
    latitude:number,
    longetude:number,
    moment: string,
    status: string,
    total:number
    products: Product[];
}

export type Product={
    id:number,
    imageUri:string,
    name:string,
    description:string,
    price:number,
}