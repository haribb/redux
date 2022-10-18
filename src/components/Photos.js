import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { photos } from "../redux/action";

const Photos = () => {
  const [loading, setLoading] = useState(true);
const photosData =useSelector((state )=>state.photos)
  const fetchPhotos = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      photos(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPhotos();
    setTimeout(() => setLoading(false), 4000);
  }, []);
  // console.log(photosData);
  return (
    <>
      <section className="py-28">
        {loading === false ? (
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-4">
              {photosData.map((item, index) => {
                return (
                  <div key={item.id}>
                    <img
                      className="w-full aspect-square"
                      src={item.url}
                      alt="pic"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid place-items-center">
            <p>Loading....</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Photos;
