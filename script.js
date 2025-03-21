var products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
];

// Exercise 1 
  
var userId = prompt("Enter Product ID")

for (var i = 0; i < products.length; i++) {
  
  if (products[i].id == userId) {
    console.log(userId , products[i])
  }
}

// Exercise 2

// for (var i = 0; i< products.length; i++) {
//   console.log(products[i].title)
// }

// Exercise 3

// var prodId = prompt("Enter Product ID")
// for (var i = 0; i < products.length; i++) {
//   let colors = products[i].variations[i].color
  
//   if (prodId == products[i].id) {
//     console.log(colors)
//   }
//   else{
//     console.log(colors)
//   }
// }

// Exercise 4

// var sum = 0
// for (var i = 0; i< products.length; i++) {
//   sum = sum + products[i].variations[i].quantity
// }
// console.log("Total Quantity : " + sum)

// Exercise 5

// var lowStock = 2

// for (var i = 0; i < products.length; i++) {
//   var prodQuant  = (products[i].variations[i].quantity)

//   if (prodQuant = lowStock) {
//     console.log(products[i].title)
//   }
// }

// Exercise 6

// var sum = 0
// for (var i = 0; i < products[i].reviews.length; i++) {
//   sum = sum + products[i].reviews[i].rating
// }

// var highRatProd = ""
// var highRat = 0

// for (var i = 0; i < products[i].reviews.length; i++) {
//   var avg = sum / products[i].reviews.length
  
// if (avg >= highRat) {
//   highRatProd = products[i].title
//   highRat = avg
// }
// else if (avg == highRat) {
//   console.log("zero")
// }

// }

// console.log("Highest Rated Product:", highRatProd);

// Exercise 7

// var userStatus = true
// for (var i = 0; i < products.length; i++) {
//   if (products[i].reviews[i].status == userStatus) {
//     console.log(products[i].reviews[i])
//   }
// }

// Exercise 8

// for (var i = 0; i < products.length; i++) {
  
//   var price = products[i].variations[i].price
//   var expenVariat = 0

//   if (price >= expenVariat) {
//     expenVariat = price
//     console.log("Product " + products[i].id + " = " + products[i].title + " - " + products[i].variations[i].color + " (" + products[i].variations[i].price + ") ")
//   }
//   else if (avg == highRat) {
//       console.log("zero")
//     }
// }

// Exercise 9

// var priceSum = 0
// var quantitySum = 0 

// for (var i = 0; i < products.length; i++) {
//   priceSum = priceSum + products[i].variations[i].price
// }
// for (var i = 0; i < products.length; i++) {
//   quantitySum = quantitySum + products[i].variations[i].quantity
// }

// console.log("sum of price : " + priceSum)
// console.log("quantity for all variations : " + quantitySum)

// var result = priceSum * quantitySum

// console.log("Total Stock Value : " + result)