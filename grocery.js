/**Instructions
Create a file called grocery.ts. It should have a definition of a class with the obvious name Grocery. The class should have some basic attributes such as name, quantity, etc. Feel free to add any other attributes you think will be necessary.
Add few grocery items to an array of groceries, such as milk, bread, and eggs, along with some quantities (i.e. 3, 6, 11).  Display these grocery items as HTML output.
The output of this assignment will be grocery.ts and groceries.html displaying the output.
*/
var Grocery = /** @class */ (function () {
    function Grocery(itemName, itemNo, price, quantity) {
        this.itemName = itemName;
        this.itemNo = itemNo;
        this.price = price;
        this.quantity = quantity;
        this.itemInfo = "Item: " + itemName + " Price: $" + String(price.toFixed(2)) + " Quantity: " + String(quantity);
    }
    return Grocery;
}());
function displayItems(list) {
    document.body.innerHTML = "Grocery List <br>";
    list.forEach(function (element) {
        document.body.innerHTML += element.itemInfo + "<br>";
    });
}
function addToList(groceryList, item) {
    groceryList.push(item);
    return groceryList;
}
var milk = new Grocery("Milk", 1, 1.80, 2);
var bread = new Grocery("Bread", 2, 2.15, 1);
var eggs = new Grocery("Eggs", 3, 0.89, 3);
var groceryList = [milk, bread, eggs];
displayItems(groceryList);
