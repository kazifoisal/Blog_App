import React, { useEffect, useState } from "react";
import Layout from "../layouts/layout";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { newPostsByCategories } from "../APIrequests/APIrequest";
import BlogList from "../components/BlogList";

const ByCtegoryPage = () => {
  let {categoryID}=useParams();
  const [list, setList] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    (async () => {
      let res = await newPostsByCategories(categoryID);
      setList(res);
      setLoading(false);
    })();
  }, [categoryID]);


  return( 

 <Layout>{loading ? <Loader /> : <BlogList list={list} /> }</Layout>
)
};

export default ByCtegoryPage;
