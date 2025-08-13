import React, { useEffect, useState } from "react";
import Layout from "../layouts/layout";
import BlogList from "../components/BlogList";
import { newPosts } from "../APIrequests/APIrequest";
import Loader from "../components/Loader";

const Home = () => {
  const [list, setlist] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await newPosts();

      setlist(res);
    })();
  }, []);

  return (
    <Layout>{list.length > 0 ? <BlogList list={list} /> : <Loader />}</Layout>
  );
};

export default Home;
