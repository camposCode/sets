"use strict";

//A set is a collection of unique values, so that means that a set can never have any duplicates. And that property makes them useful in certain situations.

//Sets can hold mixed data types.

//****************To create a new set we write new Set() and we pass and iterable such as array**********//

//Sets are iterable, example: console.log(new Set("Jose")); //output:  Set(4) {"J", "o", "s", "e"}

//The order of the elements inside the set are irrelevant. 




const orderSet = new Set([
    "Pasta",
    "Pizza",
    "Risotto",
    "Tiramisu",
    "Wine",
    "Pasta",
    "Pizza"
]);


//To know the length of the set we use the method "size". 

console.log(orderSet.size);

//To know if one element is inside the se we use the has() method: 

console.log(orderSet.has("Pizza"));

//To add elements to the set:

orderSet.add("Salad");
console.log(orderSet);

//To delete elements from the set we use the delete() method:

orderSet.delete("Salad");
console.log(orderSet);

//In sets there are not indexes so since the order of the elements doesnt matter and the values are unique it is pointless to retrieve datas out of the set, for that reason there's not method to do it

//To delete all the elements of the set we use the clear() method:

orderSet.clear();
console.log(orderSet);

















