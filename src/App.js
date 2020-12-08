import logo from './logo.svg';
import './App.css';
import veg from"../src/images/Vegetabe-Grilled-Sandwich-Recipe.jpg";
import chicken from"../src/images/download.jpg";
import FakeData from'../src/components/FakeData/FakeData';
import {useState} from 'react';

function App() {

  const[count,setCount]=useState(0)
  const [count2,setCount2]=useState(0)

  console.log(FakeData)
  const decrement=()=>{
if(count>0){
  setCount(count-1)
}
  }

  const decrement2=()=>{
    if(count2>0){
      setCount2(count2-1)
    }
      }
  

  return (
    <div className="m-auto" >
    
     <div className="small-container cart-page">
       
       <table className="table">
       
           <tr>
             <td>
             <div className="cart-info">
             <img src={veg}/>
           <div>Veg Grill Sandwitch<br/><span className="text-scondary">1000 cal</span></div>
           </div>
             </td>
             <td><div className="flex-column"><span  style={{fontWeight:'bold'}}>1500  KWD</span>
           <div className="input-group number-spinner mt-2" >  <button onClick={decrement} style={{backgroundColor:"#EFEFEF"}} class="btn-1 bg-light"><i class="fas fa-minus text-secondary"></i></button>
  <span  className=" first-value text-center">{count}</span>
                           <button  style={{backgroundColor:"#EFEFEF"}} onClick={()=>setCount(count+1)} class="btn-2 bg-light"><i class="fas fa-plus text-secondary"></i></button>
                           </div>
                           </div>
         </td>
           </tr>
           
         
           <tr>
             <td>
             <div className="cart-info">
             <img src={chicken}/>
           <div>Chicken Grill Sandwitch<br/><span className="text-scondary">1000 cal</span></div>
           </div>
             </td>
             <td><div className="flex-column"><span  style={{fontWeight:'bold'}}>1500 KWD</span>
           <div className="input-group number-spinner mt-2" >  <button onClick={decrement2} style={{backgroundColor:"#EFEFEF"}} class="btn-1 bg-light"><i class="fas fa-minus text-secondary"></i></button>
           <span  className=" first-value text-center">{count2}</span>
                           <button onClick={()=>setCount2(count2+1)} style={{backgroundColor:"#EFEFEF"}} class="btn-2 bg-light"><i class="fas fa-plus text-secondary"></i></button>
                           </div>
                           </div>
         </td>
           </tr>
           
         
       
       </table>
     </div>
    
     <div className="form-group m-auto">
     <h6 className="add-note">Add a note</h6>
                           <textarea name="" className="form-control m-auto w-75 bg-light" id="" cols="10" rows="5" placeholder="Let us know any additional request" name="message" name="message" required></textarea>
                       </div>
                       
   <div className="total-price m-auto"> 
    <table >
        <tr>
          <td className="mr-2 cart-total ">Cart total</td>
          <td>{(count+count2)*1500} KWD</td>
          
        </tr>
        <tr>
          <td className=" delivery-charge">Delivery charges</td>
          <td>{(count+count2)*25/100} KWD</td>
          
        </tr>
        <tr>
          <td className="total">Total</td>
          <td>{(count+count2)*1500 +(count+count2)*25/100 } KWD</td>
          
        </tr>
        <tr>
          <td>
          <div className="add-more" style={{ }}> <span className="add-more-whole"><i class="fas fa-plus"></i>Add more </span></div>
          </td>
        </tr>
      </table>
    
      </div> 

      <div className="checkout" >Checkout</div>
    </div>
  );
}

export default App;
