class ProductManager {
    static incrementId = 0;
    
    constructor() {
        this.products = [];
    }
    
    getProducts () {
      return this.products;
    }
    
    addProduct(title, description, price, thumbnail, code, stock) {
      ProductManager.incrementId++;
      let findCode = this.products.find(product => product.code === code);
      if ((title == undefined) || (description == undefined) || (price == undefined) || (thumbnail == undefined) || (code == undefined) || (stock == undefined)) {
        console.log('You must complete all the fields to add a new Product!');
        return;
      }
      const newProduct = {
        id: ProductManager.incrementId,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock
      }
      if (findCode) {
        console.error('Already existing code!')
        return;
      }
      return this.products.push(newProduct);
    }
    
    getProductById(productId) {
        const findId = this.products.find(product => product.id === productId);
        findId ? 
        console.log(findId)
        : 
        console.error("Not Found");
    }
}

const products = new ProductManager();
products.addProduct('Manzana', 'Manzana roja', 100, 'Manzanaroja.com', 12345, 5);
products.addProduct('Banana', 'Banana', 100, 'abc123', 1222, 2);

console.log(products.getProductById(1))



