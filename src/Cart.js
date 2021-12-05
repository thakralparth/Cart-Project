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

    render(){
        const { products }=this.state;
      return(
        <div className="cart">
            
            {products.map((product)=>{
               return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    /> 
               )
            })}
        </div>

      ) 
    }
}


export default Cart;