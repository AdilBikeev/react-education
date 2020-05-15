import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileStatusContainer } from './ProfileStatus/ProfileStatus';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <ProfileStatusContainer />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;