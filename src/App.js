import React from "react";
import Cart from './Cart'
import Navbar from './Navbar'


class App extends React.Component{
  constructor(){
    super();
    this.state = {
        products:[
            {
                price:99,
                title:"Watch",
                qty:1,
                img:'https://as2.ftcdn.net/v2/jpg/01/60/72/83/1000_F_160728347_02yZycoj5h9zRUmqwQHLrfTK0A7YYvIP.jpg',
                id:1
            },
            {
                price:999,
                title:"MobilePh",
                qty:10,
                img:'https://as2.ftcdn.net/v2/jpg/05/41/60/15/1000_F_541601571_Ac6hQJmWxfwTJ8RYXYWIQ7fKHtK2pNUm.jpg',
                id:2
            },
            {
                price:1000,
                title:"Laptop",
                qty:4,
                img:'https://as1.ftcdn.net/v2/jpg/01/43/49/82/1000_F_143498286_vdYyJhJ5feHwv91EYG07WGf8na2vK6G6.jpg',
                id:3
            }
        ]
    }
    //  this.testing();
  }
  
  handleIncreaseQuantity=(product)=>{
    console.log('Hey increase quantity:',product);
    const{products}=this.state;
  
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products: products
    });
  }
  
  handleDecreaseQuantity=(product)=>{
    console.log('Hey decrease quantity:',product);
    const{products}=this.state;
    const index1=products.indexOf(product);
  
    if( products[index1].qty==0){
        return;
    }
    products[index1].qty-=1;
    // if(count==0){
    //     return;
    // }
    // count=count-1;
    this.setState({
        products: products
    })
  }
  handleDeleteProduct=(id)=>{
    const {products}=this.state;
    const items=products.filter( (item)=>{
        return item.id!==id;
    } );
    this.setState({
            products: items
        })
  }

  getCount=()=>{
      const {products}=this.state;
      let count=0;
      products.forEach((products)=>{
        count+=products.qty;
      });
      return count;
  }

  getTotal=()=>{
    const {products}=this.state;
    let total=0;

    products.forEach((product)=>{
      total+=product.qty*product.price;
    });

    return total;
  }

  render() {

    const{products}=this.state;
      return (
        <div className="App">
          <Navbar count={this.getCount()}/>
          <Cart
            products={products}
             onIncreaseQuantity={this.handleIncreaseQuantity}
             onDecreaseQuantity={this.handleDecreaseQuantity}
             onDel={this.handleDeleteProduct}
          />
          <div className="Total">ToTal:{this.getTotal()}</div>
        </div>
      );
  }
}

export default App;
