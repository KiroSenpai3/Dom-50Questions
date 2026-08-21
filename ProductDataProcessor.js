const products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        name: "Phone",
        price: 30000,
        category: "Electronics"
    },
    {
        name: "Shirt",
        price: 1000,
        category: "Clothing"
    }
];

let names = products.map(product => product.name)
console.log(names)
let type = products.filter(product => product.category === "Electronics")
console.log(type)
let som = products.reduce((sum, product) => {
    return sum = sum + product.price
}, 0)
console.log(som)