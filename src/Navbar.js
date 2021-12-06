import React from 'react';

const Navbar=(props)=>{
    
        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="cart-icon"></img>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        )
    
}


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 30
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 9,
      top: -9
    }
  };
export default Navbar;