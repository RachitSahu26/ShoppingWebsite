import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../FireBase/FirBase';
function MyState(props) {


  const { mode, setMode } = useState('light');
  const togglebtn = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "black"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "#fff"


    }

  }
  // ................................................product .................
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })



  // ........................add product function..............



  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }



    try {
      const productRef = collection(fireDB, "products")
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      setTimeout(() => {

        window.location.href = "/admin"
      }, 800);
      getProductData()
      // closeModal()
      // setLoading(false)
    } catch (error) {
      console.log(error);
    }


  }





  // ..................................getProductData...........


  const [product, setProduct] = useState([])
  const getProductData = async () => {


    try {


      // gettting data from collection....................
      const q = query(
        collection(fireDB, 'products'),
        orderBy("time")
      );

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });

        setProduct(productArray)

      })

      return () => data



    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    getProductData();
  }, []);

// ..........................................edit product functionality............
const editProduct=(item)=>{
  setProducts(item)
}



// .........................updateProduct..........

  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully")
      getProductData();
      setLoading(false)
      window.location.href = '/admin'
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    // setProducts("")
  }

// ..............................delete product functionality.............


const deleteProduct = async (item) => {
  setLoading(true)
  try {
   
    await deleteDoc(doc(fireDB, "products", item.id));
    toast.success('Product Deleted successfully')
    setLoading(false)
    getProductData()
  } catch (error) {
    // toast.success('Product Deleted Falied')
  
  }
}



  const [ loading, setLoading]  = useState(false);
  return (
    <MyContext.Provider value={{
      togglebtn, mode,
      loading, setLoading,
      products, setProducts,
      addProduct,
      product, setProduct,
      editProduct,deleteProduct,updateProduct
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState