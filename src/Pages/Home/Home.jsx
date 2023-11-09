import React, { useContext } from 'react'
import Layout from '../../Components/LayOut/LayOut'
import myContext from '../../Contexts/Data/MyContext'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Filter from '../../Components/Filter/Filter'
import ProductCard from '../../Components/ProductCard/ProductCard'
// import AllProduct from '../All_product/AllProduct'

function Home() {
  const context = useContext(myContext)
  console.log(context) // {name: 'Kamal Nayan', class: '9 C'}
  // Destructure 
  const {name} = context
  console.log(name) // Kamal Nayan
  return (
    <Layout>
<HeroSection/>
<Filter/>
<ProductCard/>
    </Layout>
  ) 
}

export default Home