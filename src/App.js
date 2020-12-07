import logo from './logo.svg';
import './App.css';
import veg from"../src/images/Vegetabe-Grilled-Sandwich-Recipe.jpg";
import chicken from"../src/images/download.jpg";
import FakeData from'../src/components/FakeData/FakeData';
import {useState} from 'react';

function App() {

  const[count,setCount]=useState(0)

  const  increment=()=>{
   
  

  }
  const decrement=()=>{

  }
  

  return (
    <div className="m-auto" >
    
     <div className="small-container cart-page">
       
       <table className="table">
         {
           FakeData.map(data=><tr>
             <td>
             <div className="cart-info">
             <img src={data.img}/>
           <div>{data.food}<br/><span className="text-scondary">{data.energy}</span></div>
           </div>
             </td>
             <td><div className="flex-column"><span  style={{fontWeight:'bold'}}>{data.price}  KWD</span>
           <div className="input-group number-spinner mt-2" >  <button onClick={()=>setCount(count-1)} style={{backgroundColor:"#EFEFEF"}} class="btn-1 bg-light"><i class="fas fa-minus text-secondary"></i></button>
           <span  className=" first-value text-center">{count}</span>
                           <button onClick={()=>setCount(count+1)} style={{backgroundColor:"#EFEFEF"}} class="btn-2 bg-light"><i class="fas fa-plus text-secondary"></i></button>
                           </div>
                           </div>
         </td>
           </tr>
           )
         }
       
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
          <td>0.000 KWD</td>
          
        </tr>
        <tr>
          <td className=" delivery-charge">Delivery charges</td>
          <td>0.000 KWD</td>
          
        </tr>
        <tr>
          <td className="total">Total</td>
          <td>0.000 KWD</td>
          
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
