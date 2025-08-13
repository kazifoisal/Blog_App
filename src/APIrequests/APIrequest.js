import axios from "axios";


const baseUrl = "https://basic-blog.teamrabbil.com/api";


export const postCtegories = async()=>{

   const res= await axios.get(baseUrl+"/post-categories");

   if (res.status===200) {
       return res.data
   }
   else{
    return []
   }
}


export const newPosts =async()=>{
    let res = await axios.get(baseUrl+"/post-newest")

    return res.data;
}

export const newPostsByCategories = async(id)=>{
    let res = await axios.get(baseUrl+"/post-list/"+id)

    return res.data;
}