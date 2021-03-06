import React from 'react';

const CartItem = (props) => {

    
        
        const {price,title,qty}=props.product; //object destructuring
        const {product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
            }=props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={ styles.image } src={product.img}/>
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
                         onClick={()=>onIncreaseQuantity(product)}
                         />
                        <img alt="decrease"
                         className="action-icons"
                         src="https://cdn-icons.flaticon.com/png/128/2740/premium/2740679.png?token=exp=1638699430~hmac=b5f9b40a8538a3590449617081723172"
                         onClick={()=>onDecreaseQuantity(product)} 
                          />
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907762.png?token=exp=1638699698~hmac=32f5bb5bf48c1334181302bad8d7f25e"
                        onClick={()=>onDeleteProduct(product.id)}
                        />
                    </div>

                </div>
            </div>
        );
    
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