import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../Contexts/Data/MyContext';
import { useDispatch, useSelector } from 'react-redux';
import LayOut from '../../Components/LayOut/LayOut';
import { toast } from 'react-toastify';
import { removeToCart } from '../../Redux/Slice/CartSlice';
import Modal from '../../Components/Model/Model';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../FireBase/FirBase';
// import Modal from '../../Components/Model/Model';
// replace with your actual action import

function Cart() {
  const context = useContext(myContext);
  const { mode } = context;
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deletCart = (item) => {
    dispatch(removeToCart(item));
    toast.success("Successfully deleted");
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItem));
  }, [cartItem])


  // .......................................total price..............


  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartItem.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price)
    })
    setTotalAmount(temp);
    // console.log(temp)
  }, [cartItem])

  let shipping = parseInt(100);
  const grandTotal = shipping + totalAmount






  // ..........................model functionality.........................

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // ..................................razor Payment..................

  const [fullName, setFullName] = useState('')
  const [fullAddress, setFullAddress] = useState('')
  const [pin, setPin] = useState('')
  const [mobile, setMobile] = useState('')

  const buyNow = async () => {

    // .............validation..............
    if (fullName === "" || fullAddress === "" || pin === "" || mobile === "") {
      return toast.error("all Fields are required")






    }




    // ............................address Info............
    const addressInfo = {
      fullName,
      fullAddress,
      pin,
      mobile,

      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }


    // ...................code provided by razor pay.............. 



    var options = {
      key: "",
      key_secret: "",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
          console.log(response)
          toast.success('Payment Successful')
     
     
     
     
     
     
     
     


    const orderInfo = {
      cartItem,
        addressInfo,
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        ),
        email: JSON.parse(localStorage.getItem("users")).user.email,
        userid: JSON.parse(localStorage.getItem("users")).user.uid,
        paymentId
      }


      try {


        const orderRef = collection(fireDB, "orderDetail");
        addDoc(orderRef, orderInfo)
toast.success("payment success ful")

      }
      catch (error) {
        console.log(error)
      }


     
     
     
     
     
     
        },
  
      theme: {
          color: "#3399cc"
      }
  };

























  }




  return (
    <LayOut>
      <div className="h-screen bg-red-100 pt-5 " style={{ backgroundColor: mode === 'dark' ? '#487be0' : '', color: mode === 'dark' ? 'white' : '' }}>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">




            {cartItem.map((item) => {
              const { id, title, price, imageUrl, category, description, date } = item;
              return (
                <div key={id} className="justify-between mb-6 rounded-lg border drop-shadow-xl bg-white p-6 sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}>
                  <img src={imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
                      <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{price}</p>
                    </div>
                    <div onClick={() => deletCart(item)} className="mt-4 flex  justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>




          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>

            <div className="mb-2 flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{totalAmount}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{shipping}</p>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{grandTotal}</p>
              </div>
            </div>




            {/* <Modal  /> */}

            <button
              type="button"
              className="w-full  bg-violet-600 py-2 text-center rounded-lg text-white font-bold "


              onClick={openModal}>
              Buy Now
            </button>


            <Modal 
               isOpen={isModalOpen}
            onClose={closeModal}
            fullName={fullName}
            setFullName={setFullName}
            fullAddress={fullAddress}
            setFullAddress={setFullAddress}
            pin={pin}
            setPin={setPin}
            mobile={mobile}
            setMobile={setMobile} // Make sure you are passing the correct function here
            buyNow={buyNow}
            
            />


          </div>






        </div>
      </div>
    </LayOut >
  );
}

export default Cart;
