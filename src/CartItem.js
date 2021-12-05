import React from 'react';

class CartItem extends React.Component{
    constructor(){   //defining state object
        super();   //defining constructor of parent class React.Component
        this.state={ //A state is a way to store your local data for that particular component.
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity=()=>{   //Using arrow function for binding
        console.log('this',this.state);
    }
    render(){
        const {price,title,qty}=this.state; //object destructuring
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={ styles.image }/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize:25}}>{title}</div>
                    <div style={ {color:'#777'}}>Rs {price}</div>
                    <div style={ {color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase"
                         className="action-icons" 
                         src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303893.png?token=exp=1638699626~hmac=d4c5d2c46ebf84ddf8c2684739e73bc9"
                         onClick={this.increaseQuantity}
                         />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/2740/premium/2740679.png?token=exp=1638699430~hmac=b5f9b40a8538a3590449617081723172"/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907762.png?token=exp=1638699698~hmac=32f5bb5bf48c1334181302bad8d7f25e"/>
                    </div>

                </div>
            </div>
        );
    }
}

//In JSX we can't add styling using CSS so we use javascript object to add styling

const styles ={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'LightGray'
    }
}

export default CartItem;