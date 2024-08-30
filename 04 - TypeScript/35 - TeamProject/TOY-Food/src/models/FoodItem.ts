import { Category } from "./Category";

export class Item {
    name: string;
    id: string;
    price: number;
    src: string;
    desc: string;
    inStock: number;
    quantity: number
    category: Category;

    constructor(name: string, price: number, src: string, desc: string, inStock: number, category: string, 
                categoryId?: string, id?: string, quantity?: number) {
        this.name = name;
        this.id = id == null ? crypto.randomUUID() : id;
        this.price = price;
        this.src = src;
        this.desc = desc;
        this.inStock = inStock;
        this.quantity = quantity == null ? inStock : quantity;
        this.category = new Category(category, categoryId ?? crypto.randomUUID());
    }

    descFromStock(): void {
        this.inStock -= 1;
        console.log(`Items in stock are ${this.inStock}`)
    }


    incrFromStock(): void {
        if (this.inStock < this.quantity) {
            this.inStock += 1;
            console.log(`Items in stock are ${this.inStock} and quantity = ${this.quantity}`)
        }
        else {
            console.log(`${this.quantity} its the max num per item`);
        }
    }

}


const pillow = new Item('Pillow', 13.23, 'https://d128mhi1cadhb5.cloudfront.net/lervqqq4o4b3zdlo60c4500x32bs', 'pillow image', 12, "Home");
const glass = new Item('Glass', 64.23, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Bz6keQwWZVefABD7NMSseKDjS0cRCFvLwQ&s', 'cup of glass', 3, "Home");
const chair = new Item('Chair', 23.23, 'https://m.media-amazon.com/images/I/71P9QF0BYLL.jpg', ' chair image', 5, "Home");
const computer = new Item('Computer', 122.3, 'https://i0.wp.com/ten-low.co.il/wp-content/uploads/2024/02/HP_i3_NoteBook_15s-fq2019nj_BLACK.jpg?fit=1000%2C1000&ssl=1', 'computer image', 5, "Electronics");
const bag = new Item('Bag', 33.2, 'https://contents.mediadecathlon.com/p1818463/k$baa228586f5fbb6b704d1cd0bd249caf/55l-sports-bag-essential-navy-blue.jpg?format=auto&quality=40&f=800x800', 'bag image', 3, "Home");
const screen = new Item('Screen', 13.23, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3PUTRrQeuqk4aEU3Cxlbuu2_1Y9d1RGiVA&s', 'screen image', 7, "Electronics");

export const items = [pillow, glass, chair, computer, bag, screen]; 