import React from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import {Link } from 'react-router-dom';

const ProfileCard = ({location}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state)=>state.postReducer.posts)
  // console.log(posts)
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img className="Cover-img" src={user.coverPicture
              ? user.coverPicture
              : "https://img.freepik.com/free-vector/white-gold-geometric-pattern-background-vector_53876-140726.jpg?w=2000"} />
        <img className="Profile-img" src={user.profilePicture
              ?  user.profilePicture
              : "data:image/png;base64,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"} alt="" />
      </div>

      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt? user.worksAt : 'Write about yourself'}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>

          {location=="profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{
                posts.filter((post)=>post.userId == user._id).length
                }</span>
                <span>Posts</span>
              </div>{" "}
            </>
           )} 
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
