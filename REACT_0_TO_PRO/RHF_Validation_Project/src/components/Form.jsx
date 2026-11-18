import { useState,useRef } from "react";
import { useForm } from "react-hook-form";
const Form = ({ setUser, user, setToggle }) => {



    let {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: 'onChange'
    })
    console.log("Form component rendered");
    // const inpref = useRef({})
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // console.log(inpref.current.productName.value);
    //     // console.log(inpref.current.productPrice.value);
    //     // console.log(inpref.current.selectOption.value);
    //     // console.log(inpref.current.image.value);
    //     let obj = {
    //     pName: inpref.current.productName.value,
    //     price: inpref.current.productPrice.value,
    //     category: inpref.current.selectOption.value,
    //     image: inpref.current.image.value
    // }
    // setProducts(obj)
    // }

    
    return (
        <>
        <form onSubmit={handleSubmit((data) => {console.log(data) 
        let arr = [...user,data]
            setUser(arr)
            localStorage.setItem('user', JSON.stringify(arr))
            reset()
            setToggle(prev => !prev)})} className="flex flex-col gap-4 p-4  bg-gray-200">
            <h2>Contact Form</h2>
            <input {...register("productName",{required: 'Product name is required',pattern: {value: /^[A-Za-z]+$/, message: 'Product name should contain only letters'}})} 
              className="border border-gray-700 rounded p-1" type="text" placeholder="Enter your product name" />
              {errors.productName && <span className='text-red-500'>Product name is required</span>}
            <input {...register("productPrice",{required: 'Product price is required'})} className="border border-gray-700 rounded p-1" type="text" placeholder="Enter your product price" />
            {errors.productPrice && <span className='text-red-500'>Product price is required</span>}
            <span className="text-gray-700">Select your product category</span>
            <select {...register("productCategory",{required: 'Please select a category'})} className="border border-gray-700 rounded p-1">
                
                <option>Choose an option</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>Kids</option>
            </select>
            {errors.productCategory && <span className='text-red-500'>Please select a category</span>}
            <input {...register("productImage",{required: 'Product image is required'})} className="border border-gray-700 rounded p-1" type="text" placeholder="Enter your product image" />
            {errors.productImage && <span className='text-red-500'>Product image is required</span>}
            <button  className="bg-blue-500 text-white rounded-full font-bold py-1" type="submit">Submit</button>
        </form>
        
        </>
    )
}

export default Form