export const parser = (data) => {
    data.forEach(product => {
            let title = product["productTitle"]
            delete product["productTitle"]
            product["title"] = title
    
            let price = product["price"].value
            product["price"] = price
        
    })
    return data;
}