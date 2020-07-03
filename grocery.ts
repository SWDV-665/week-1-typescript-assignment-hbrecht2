class Grocery {
    itemInfo: string;
    constructor(public itemName: string, public itemNo: number, public price: number, public quantity: number){
        this.itemInfo = "Item: " + itemName + " Price: $" + String(price.toFixed(2)) + " Quantity: " + String(quantity);
    }
}

interface Item{
    itemName: string;
    itemNo: number;
    price: number; 
    quantity: number; 
}

function displayItems(list){
    document.body.innerHTML = "Grocery List <br>"
    list.forEach(element => {
        document.body.innerHTML += element.itemInfo + "<br>"
    });
}

function addToList(groceryList, item: Item) {
    groceryList.push(item);
    return groceryList
}

let milk = new Grocery("Milk", 1, 1.80, 2);
let bread = new Grocery("Bread", 2, 2.15, 1);
let eggs = new Grocery("Eggs", 3, 0.89, 3);

let groceryList = [milk, bread, eggs];

displayItems(groceryList)