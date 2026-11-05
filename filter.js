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
    
}