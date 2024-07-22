export class Product {
    constructor(
      public id: number,
      public name: string,
      public price: number,
      public description: string,
      public category: string,
      public stock: number,
      public imageUrl: string,
    ) {}
  }