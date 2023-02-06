import React from 'react'

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price:999,
            title:'Phone',
            qty:1,
            img:''
        }
        //  this.testing();
    }

    // testing(){
    //     const promise=new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve('done')
    //         },1000)
    //     });

    //     promise.then(() => {
    //         this.setState({qty:this.state.qty+10});

    //         this.setState({qty:this.state.qty+10});

    //         this.setState({qty:this.state.qty+10});

    //         console.log('this.state',this.state);
    //     });
    // }



    
     increaseQty(){
        // this.state.qty+=1;
        // console.log('this',this.state.qty);
        //first form
        // this.setState({
        //     // qty:this.state.qty+1
        //       qty:2
        // },()=>{
        //     console.log(this.state.qty);
        // });

        // this.setState({
        //     // qty:this.state.qty+1
        //       qty:3
        // },()=>{
        //     console.log(this.state.qty);
        // });


        //second form to update the state
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        });

        
    }
    decreaseQty(){
        const{qty}=this.state;
        if(qty==0){
            return;
        }
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        })
    }

    render(){
        console.log('render');
        const{price, title,qty} = this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img  style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'gray'}}>RS {price}</div>
                    <div style={{color:'gray'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img alt='increase' className='actions-icons' src='https://cdn-icons-png.flaticon.com/512/1828/1828919.png'
                        onClick={this.increaseQty.bind(this)}
                        />
                        <img alt='decrease' className='actions-icons' src='https://cdn-icons-png.flaticon.com/512/1828/1828899.png'
                        onClick={this.decreaseQty.bind(this)}
                        />
                        <img alt='delete' className='actions-icons' src='https://cdn-icons-png.flaticon.com/512/1828/1828843.png'
                        
                        />
                    </div>
                </div>
            </div>
        );
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'gray'
    }
}
export default CartItem;

