class ProductManager {
    constructor (){
        this.products = [];
    }


getProducts = () => {
    console.log(this.products)
    return; 
};
addProduct = (title, description, price, thumbnail, code, stock) =>{
    const product = {
        id:this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };
    this.products.push(product);
}
getProductById (Id){
  const product = this.products.find((product)=> product.id===Id)
  if(product){
    return product; 
  }else {
    console.error("El producto no ha sido encontrado")
    return null;
  }
}    

}
const productManager = new ProductManager();
productManager.getProducts();
productManager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123",25)
productManager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123",25)
productManager.getProductById();