import React from "react";
import Cart from './Cart'
import Navbar from './Navbar'

import { collection, getDocs,addDoc, updateDoc, doc,deleteDoc} from "firebase/firestore";
import {db} from './firebase';
import { getDatabase, ref, set, update,} from "firebase/database";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        products:[],
        loading: true
    }
  // this.db=firebase.firestore();
  }
//......................................................
      componentDidMount(){
        const getData = async ()=>{
          const querySnapshot = await getDocs(collection(db, "products"));
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });

          const products=querySnapshot.docs.map((doc) => {
            const data=doc.data();

            data['id']=doc.id;

            return data;
          })
          this.setState({
            products: products,
            loading:false
          })
      }

    getData();
  }
  //........................................................................
  handleIncreaseQuantity=async (product)=>{
    console.log('handleIncreaseQuantity product', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    const quantity=products[index].qty+1;
    const id=products[index].id
    console.log(id);
    const productRef = doc(db, "products", id);
    console.log(productRef);
    await updateDoc(productRef, {
      qty:quantity
    })
    .then(() =>{
      product.qty = quantity;
      console.log('Updated product')
    })
    .catch(err =>{
      console.log('Error updating product',err);
    })

  }
  

  //............................................................................................
  handleDecreaseQuantity=async (product)=>{
    console.log('handleDecreaseQuantity product', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    const quantity=products[index].qty-1;
    const id=products[index].id
    console.log(id);
    const productRef = doc(db, "products", id);
    console.log(productRef);
    await updateDoc(productRef, {
      qty:quantity
    })
    .then(() =>{
      product.qty = quantity;
      console.log('Updated product')
    })
    .catch(err =>{
      console.log('Error updating product',err);
    })
  }
  //......................................................................................
  handleDeleteProduct=async (id)=>{
    const {products}=this.state;
    // const items=products.filter( (item)=>{
    //     return item.id!==id;
    // } );
    // this.setState({
    //         products: items
    //     })
    console.log('handleDeleteProduct',id);
    await deleteDoc(doc(db, 'products',id))
    .then(()=>{
        console.log('Doc deleted')
    })
    .catch(err=>{

    })

 }
//......................................................................................
  getCount=()=>{
      const {products}=this.state;
      let count=0;
      products.forEach((products)=>{
        count+=products.qty;
      });
      return count;
  }
//..............................................
  getTotal=()=>{
    const {products}=this.state;
    let total=0;

    products.forEach((product)=>{
      total+=product.qty*product.price;
    });

    return total;
  }
//..................................................................................  
  addProduct = ()=>{
    // this.db
    // .collection('products')
    // .add({
    //   img:'',
    //   price:568,
    //   qty:3,
    //   title:"Washing Machine"
    // })
    // .then((docRef)=>{
    //   console.log('Product has been added',docRef);
    // })
    // .catch((err)=>{
    //   console.log('Error adding product',err);
    // })

    const docRef = addDoc(collection(db, "products"), {
      img:'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price:5888,
      qty:1,
      title:"Phone"
    })
    .then((docRef)=>{
      console.log('Product has been added',docRef);
    })
    .catch((err)=>{
      console.log('Error adding product',err);
    })
    console.log("Document written with ID: ", docRef.id);
  }
//............................................................................................
  render() {

    const{products,loading}=this.state;
      return (
  
        <div className="App">
          <Navbar count={this.getCount()}/>
          <h2>Added To My Cart</h2>
          <button onClick={this.addProduct}>Add Product</button>
          <Cart
            products={products}
             onIncreaseQuantity={this.handleIncreaseQuantity}
             onDecreaseQuantity={this.handleDecreaseQuantity}
             onDel={this.handleDeleteProduct}
          />
            {loading && <h3>Loading Product....</h3>}
          <div className="Total">ToTal:{this.getTotal()}</div>
          
        </div>
      );
  }
}

export default App;
