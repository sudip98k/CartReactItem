import React from 'react'



export default function CartItem(props){
        // console.log('render');
        // console.log("this.props",props);
        const{price, title,qty} =props.product;
        return(
            < div className='cart-item'>
                <div className='left-block'>
                    <img  style={styles.image} src={props.product.img} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'gray'}}>RS {price}</div>
                    <div style={{color:'gray'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img alt='increase' className='actions-icons' src='https://cdn-icons-png.flaticon.com/512/1828/1828919.png'
                        onClick={()=>{props.onIncreaseQuantity(props.product)}}
                        />
                        <img alt='decrease' className='actions-icons' src='https://cdn-icons-png.flaticon.com/512/1828/1828899.png'
                        onClick={()=>{props.onDecreaseQuantity(props.product)}}
                        />
                        <img alt='delete' className='actions-icons' src='https://cdn-icons-png.flaticon.com/512/1828/1828843.png'
                        onClick={()=>{props.onDel(props.product.id)}}
                        />
                    </div>
                </div>
            </div>
        );
   
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'gray'
    }
}


