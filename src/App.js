// import CartItem from "./CartItem";
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component{
  constructor(){   //defining state object
    super();   //defining constructor of parent class React.Component
    this.state={ //A state is a way to store your local data for that particular component.
        products:[
            {
                price:999,
                title:'Mobile Phone',
                qty:1,
                img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id:1
            },
            {
                price:99,
                title:'Watch',
                qty:5,
                img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id:2
            },
            {
                price:99999,
                title:'Laptop',
                qty:2,
                img:'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id:3
            }
        ]
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this);
}

handleIncreaseQuantity = (product) => {
    console.log('Heyy please increse the quantity of ',product);
    const { products}=this.state;
    const index=products.indexOf(product);

    products[index].qty +=1;

    this.setState({
        products:products 
    })
}

handleDecreaseQuantity = (product) => {
    console.log('Heyy please decrease the quantity of ',product);
    const { products}=this.state;
    const index=products.indexOf(product);

    if(products[index].qty===0){
        return;
    }

    products[index].qty -=1;

    this.setState({
        products:products 
    })
}

handleDeleteProduct = (id) =>{
    const{ products } = this.state;

    const items= products.filter((item) => item.id!==id);

    this.setState({
        products:items 
    })
}

getCartCount=()=>{
  const {products}=this.state;

  let count =0;
  products.forEach((product)=>{
    count +=product.qty;
  })

  return count;
}

getCartTotal=()=>{
  const {products}=this.state;

  let cartTotal =0;
  products.forEach((product)=>{
    cartTotal = cartTotal + product.qty * product.price;
  })

  return cartTotal;
}

  render(){
    const {products}=this.state;
      return (
        <div className="App">
            <Navbar count={this.getCartCount()}/>
            <Cart 
            products={products }
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}/>
            <div style={{fontSize:20,padding:10}}>TOTAL: {this.getCartTotal()}</div>
        </div>
      );
  }
}




export default App;
