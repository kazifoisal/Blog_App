import React, { useEffect, useState } from 'react'
import Layout from '../layouts/layout'
import { useParams } from 'react-router-dom';
import { postDetails } from '../APIrequests/APIrequest';
import Loader from '../components/Loader';
import BlogDetails from '../components/BlogDetails';

const PorstDestailsPage = () => {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { postID } = useParams();

  useEffect(() => {
    (async () => {
      let res = await postDetails(postID);
      setList(res);
      setLoading(false);
    })();
  }, [postID]);

  return (
    <Layout>
      {
        loading ? <Loader/>:<BlogDetails list={list}/>
      }
    </Layout>
  )
}

export default PorstDestailsPage
