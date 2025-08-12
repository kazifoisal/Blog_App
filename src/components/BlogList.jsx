import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  return (
    <>
      <div className="container mx-auto my-16  p-9">
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.list.map((item, index) => {
            return (
              <Link
                key={index.toString()}
                to={"/"}
                className="card glass  w-100 "
              >
                <figure>
                  <img src={item.img} alt="Card" />
                </figure>

                <div className="card-body">
                  <h2 className="card-titile">{item.title}</h2>
                  <p>{item.short}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogList;
