import React from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import * as axios from 'axios';
import { setUserProfile, toggleIsFething } from '../../redux/profile-reducer';
import { Preloader } from '../common/Preloader';

class ProfileAPI extends React.Component {
    componentDidMount(){
        this.props.toggleIsFething(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/8047')
             .then(response => {
                 debugger
                this.props.setUserProfile({
                    photo: response.data.photo,
                    fullName: response.data.fullName
                });
                this.props.toggleIsFething(false);
             });
    }
    render(){
       return this.props.profile.isFetching ? <Preloader/> : <Profile photos={this.props.profile.photo}
                                                                      fullName={this.props.profile.fullName}/>
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
        post: state.postPage
    }
};

export const ProfileContainer = connect(mapStateToProps, {setUserProfile, toggleIsFething})(ProfileAPI);