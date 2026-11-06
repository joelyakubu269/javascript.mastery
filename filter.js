let filterByCategory=(products, category)=>{
    let prods= products.filter(product=>product.categotry)
    return prods
}
let filterByMaxPrice=(products, maxPrice)=>{
    let prods = products.filter(product=>product.price< product.maxPrice)
    return prods
}
let getInStockProducts=(products)=>{
    let prods= products.filter(product=>product.inStock == true)
    return prods
}
let findProductById=(products, productId)=>{
    let prods= products.find(product=>product.id === productId)
    return prods
}
let searchProducts=(products, searchText)=>{
    let prods = products.filter(product=> product.name.toLowerCase().includes(searchText.toLowerCase()))
    return prods
}
const products = [
  { id: 1, name: 'Notebook', category: 'stationery', price: 10, inStock: true },
  { id: 2, name: 'Desk Lamp', category: 'home', price: 35, inStock: false },
  { id: 3, name: 'Pen Set', category: 'stationery', price: 6, inStock: true },
  {
    id: 4,
    name: 'Water Bottle',
    category: 'fitness',
    price: 18,
    inStock: true,
  },
];

console.log(filterByCategory(products, 'stationery').map((product) => product.name));
console.log(filterByMaxPrice(products, 20).map((product) => product.name));
console.log(findProductById(products, 3));
console.log(searchProducts(products, 'pen').map((product) => product.name));
console.log(getInStockProducts(products).map((product) => product.name));
console.log(findProductById(products, 99));