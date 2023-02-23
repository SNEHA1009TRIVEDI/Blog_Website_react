import React, { useEffect, useState ,useContext} from "react";
import "./Body.css";
import Card from "../Components/Card/Card";
import makeRequest from "../Utils/makeRequest";
import { BlogPostContext } from "../contexts/BlogPostContext";


const Body = () => {
  // const [mockData, setData] = useState(null);
  const { allBlogData, setAllBlogData } = useContext(BlogPostContext);

  useEffect(() => {
    makeRequest("GET", "http://localhost:8080/blog-posts")
      .then((res) => {
        console.log(res);
        setAllBlogData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="body-padding home-page">
      {allBlogData ? (
        allBlogData.map((post, idx) => 
          
        <Card key={post.id} {...post} />
        
        )

      ) : (
        <div className="loading-screen">Loading!!!</div>
      )}
    </div>
  );
};

export default Body;
