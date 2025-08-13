

const BlogDetails = (props) => {
  return (
    <>
      <div className="container shadow-sm  mx-auto my-16 p-9">
          <div className="card w-100  p-4 glass">
            <figure>
              <img src={props.list.postDetails.img} alt="image" />
            </figure>
            <div className="card-body">
                <p className=" text-2xl lg:mx-[120px] ">{props.list.postDetails.content}</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default BlogDetails;
