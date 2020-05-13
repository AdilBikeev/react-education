import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export const Profile = (props) => {
    debugger
    return (
        <div>
            <ProfileInfo photo={props.photo}
                         fullName={props.fullName}/>
            <MyPostsContainer />
        </div>
    )
};