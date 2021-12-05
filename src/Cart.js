import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){   //defining state object
        super();   //defining constructor of parent class React.Component
        this.state={ //A state is a way to store your local data for that particular component.
            products:[
                {
                    price:999,
                    title:'Mobile Phone',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:99,
                    title:'Watch',
                    qty:5,
                    img:'',
                    id:2
                },
                {
                    price:99999,
                    title:'Laptop',
                    qty:2,
                    img:'',
                    id:3
                }
            ]
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    render(){
        const { products }=this.state;
      return(
        <div className="cart">
            
            {products.map((product)=>{
               return <CartItem product={product} key={product.id}/> 
            })}
        </div>

      ) 
    }
}


export default Cart;