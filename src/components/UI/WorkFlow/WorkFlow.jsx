import { useState } from 'react';

const WorkFlow = () => {
const [product, setProduct]=useState("Explore Products");
//console.log(product)
    return (
       
<div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] h-48 flex justify-center items-center text-center py-35">
       <div className='space-y-4'>
        <h1 className='font-extrabold text-[40px] text-white'>Ready to Transform Your Workflow?</h1>
        <p className='font-light text-white'>Join thousands of professionals who are already using  Digitools to work smarter.<br />Start your free trial today.</p>
        <div className='flex gap-2 items-center justify-center'>
                {/* <p 
                onClick={()=>{setProduct("Explore Products")}}
                className={`${product=== "Explore Products"? "form-[#4F34F6]":"bg-pink-500"} rounded-4xl px-5 text-white btn btn bg-linear-to-r`}>Explore Products</p>
                <p 
                onClick={()=>{setProduct("View Pricing")}}
                className={`${product==="View Pricing" ? "bg-amber-400 p-5":"bg-pink-500" }`}
                >View Pricing</p>
                */}
                <p>
                <a className={`${  product=== "Explore Products" 
                 ? "bg-white text-[#4F39F6]! ":
                 "border border-white text-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} 
                   text-white  rounded-4xl px-5 py-2`}
                  onClick={()=>{setProduct("Explore Products")}}
                  >Explore Products</a></p>

                  <p>
                    <a className={`${   product==="View Pricing"  
                  ? "bg-white text-[#4F39F6]!   "
                  :"border border-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} 
                   text-white btn  rounded-4xl px-5`
                   }
                   onClick={()=>{setProduct("View Pricing")}}> View Pricing</a></p>
                  
              </div>
             <p className='font-light text-white'> 14-day free trial • No credit card required • Cancel anytime
                </p>
              </div>
</div>


    );
};

export default WorkFlow;