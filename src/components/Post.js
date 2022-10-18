import React, { useState, useEffect } from "react";
import axios from "axios";
import { posts } from "../redux/action";
import { useSelector } from "react-redux";

const Post = () => {
  const [loading, setLoading] = useState(true);
 const postData=useSelector((state)=>state.posts)
 console.log(postData);
  const fetchPost = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // console.log(result.data);
      posts(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPost();
    setTimeout(() => setLoading(false), 3000);
  }, []);
  console.log(postData);
  return (
    <>
      <section className="py-28">
        <div className="container mx-auto">
          {loading === false ? (
            <div className="grid grid-cols-1 md:grid-cols-2  md:grid-cols-4 gap-4">
              {postData.map((item, index) => {
                return (
                  <div className="border border-indigo-500 rounded p-2 bg-slate-50" key={item.id}>
                    <h3 className="text-xl font-semibold capitalize ">
                      {item.id}.{item.title}
                    </h3>
                    <p>{item.body}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid place-items-center">
              <p>Loading....</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Post;
