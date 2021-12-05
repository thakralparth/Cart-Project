import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={ styles.image }/>
                </div>
                <div className="right-block">
                    <div style={ {color:'#777'}}>Phone</div>
                    <div style={ {color:'#777'}}>Rs 999</div>
                    <div style={ {color:'#777'}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
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