

module.exports = function Cart(oldCart){
    this.items = oldCart.item || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.addItem = (item, id)=>{
        var getItemInCart= this.items[id];
        if(!getItemInCart) { // sản phẩm them vào chưa có trong giỏ
            getItemInCart= this.items[id] = {item:item, qty:0, price:0};
        }
        getItemInCart.qty++;
        getItemInCart.price = getItemInCart.item.price * getItemInCart.qty
        this.totalQty++;
        this.totalPrice+= getItemInCart.item.price;
    }

    this.returnArr= ()=>{
        var arr= [];
        for (var id in this.items){
            arr.push(this.items[id]);
        }
        return arr;
    }
}