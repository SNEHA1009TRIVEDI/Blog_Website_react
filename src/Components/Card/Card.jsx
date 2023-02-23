import React, { useEffect,useContext } from "react";
import Clap from "../Clap/Clap";
import "./Card.css";
import heart_red from "../../assets/Icons/heart-red.svg";
import heart_black from "../../assets/Icons/heart-black.svg";
import clap from "../../assets/Icons/clapping.svg";
import makeRequest from "../../Utils/makeRequest";
import { BlogPostContext } from "../../contexts/BlogPostContext";
const Card = ({
  id,
  image,
  date,
  reading_time: readingTime,
  title,
  claps,
  liked,
  description,
  imgAlt = "",
}) => {
  const [isLiked, setIsLiked] = React.useState(liked);
  const [count, setCount] = React.useState(claps);
  // const [isLiked, setIsLiked] = React.useContext(liked);
  // const [count, setCount] = React.useContext(claps);
  const { allBlogData, setAllBlogData } = useContext(BlogPostContext);

  // useEffect(() => {
  //    axios({
  //     method: "put",
  //     url: "http://localhost:8080/blog-posts/1",
  //     data: {
  //       claps: count,
  //       liked: isLiked,
  //     },
  //   });
  // }, [count,isLiked]);

  // useEffect(() => {
  //   makeRequest("PUT", "http://localhost:8080/blog-posts/1", count, isLiked);
  // }, []);

  const handleLike = () => {
    makeRequest(
      "PUT",
      `http://localhost:8080/blog-posts/${id}`,
      count,
      !isLiked
    );
    setIsLiked(!isLiked);
  };

  const heartSrc = isLiked ? heart_red : heart_black;

  const handleClick = () => {
    // console.log("clap",count);
    makeRequest(
      "PUT",
      `http://localhost:8080/blog-posts/${id}`,
      count + 1,
      isLiked
    );
    setCount(count + 1);
  };

  return (
    <div className="card" data-testid="blog-post">
      {console.log("../../assests/Images" + image)}
      <img src={image} alt={imgAlt} className="card-img" />
      <p className="card-meta-info card-padding">
        <span>{readingTime}</span>
        <span>{date}</span>
      </p>
      <h3 className="card-title card-padding">{title}</h3>
      <p className="card-content card-padding">{description}</p>

      <div className="vertical-spacer"></div>

      <hr className="card-margin" />
      <div className="card-padding card-actions">
        <div className="card-actions" id="clap">
          <Clap iconPath={clap} clapCount={handleClick} />
          <span>{count}</span>
        </div>

        <div className="card-actions" id="heart">
          <Clap
            iconPath={heartSrc}
            // isLiked={handleLike}
            clapCount={handleLike}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
