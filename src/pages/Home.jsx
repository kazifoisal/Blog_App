import React, { useEffect, useState } from 'react'
import Layout from '../layouts/layout'
import BlogList from '../components/BlogList'
import { newPosts } from '../APIrequests/APIrequest'

const Home = () => {

  const [list, setlist]= useState([]);



useEffect(()=>{

  (async()=>{

   let res = await newPosts()

    setlist(res)

  })()

},[])


  return (
  
      <Layout>
       <BlogList list={list} />

      </Layout>
     
    
  )
}

export default Home
