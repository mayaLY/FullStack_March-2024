import { Item } from "../models/Item";
import { editItemPage } from "../views/editItem";
import { homePage } from "./HomeController";
import { getAllItems, updateItemInGlobal } from "./ItemsController";

export function renderEditItem(id: string): void {
    try {
        const content = document.querySelector("#content") as HTMLDivElement;
        const item: Item = getAllItems().find(item => item.id === id) as Item;
        if (content) {
            content.innerHTML = editItemPage(item);
            content.addEventListener('submit', handleSubmitUpdateItem);
        }
    } catch (error) {
        console.error(error);
    }
}

function handleSubmitUpdateItem(event: Event): void {
    try {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const id = form?.id;
        const { name, price, category, pic } = {name:form?.name.value,
                                                price:form?.price.value,
                                                pic:form?.pic.value,
                                                category:form?.category.value};
        console.log(form?.name.value);
        console.log(form?.price.value);
        console.log(form?.category.value);
        console.log(form?.pic.value);
        updateItemInGlobal(id, new Item(category, pic, name, Number(price) as number));
        homePage();
    } catch (error) {
        console.error(error);
    }
}