let products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
    console.log(products[0]);
}

function addProduct(product) {
    products.push(product);
    console.log("Added product: " + product);
}

function updateProductName(index, newProduct) {
    if (index >= 0 && index < products.length) {
        products[index] = newProduct;
        console.log("Product at index " + index + " has been updated to: " + newProduct);
    } else {
        console.log("Invalid index. Please provide a valid index between 0 and " + (products.length - 1));
    }
}

function removeLastProduct() {
    if (products.length > 0) {
        let removedProduct = products.pop();
        console.log("Removed the last product: " + removedProduct);
    } else {
        console.log("No products to remove.");
    }
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};