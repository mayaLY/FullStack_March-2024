import { Item } from "../model/itemModel";
import { User } from "../model/userModel";
import { renderHeader } from "./Header";

const guest: User = { name: "Guest", email: "", password: "" };

export function renderItem(item: Item): string {
  try {
    let html = `
        <div class="card">
            <div class="card-image">
                <img class="card-img-top" src="${item.img}" alt="">
            </div>
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-text">${item.description}</p>
                <p class="card-text">Prise: ${item.price}$</p>
            </div>
            <div class="card-buttons">
                <button class="remote" oncklick="emptyFromUseCart(event)">remove</button>
                <button class="remote" oncklick="addToUserCart(event)">add more items</button>
                </div>
        </div>
        `;
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

export function renderItems(items: Item[]): string {
  try {
    let html = renderHeader(guest);
    html += "<div class='wrapper'>";
    items.forEach((item) => {
      html += renderItem(item);
    });
    html += "</div>";
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}
