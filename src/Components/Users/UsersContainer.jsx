import { connect } from "react-redux";
import { Users } from "./Users";
import { followAC, unFollowAC, setCurrentPageAC, setUsersAC, toggleIsFetching } from "../../redux/users-reducer";
import React from 'react';
import * as axios from 'axios';


export class UsersAPI extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.toggleIsFetching(false);
                });
        }
    }
    selectedPage = (numberPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.totalUsersCount}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
        });
    }
    render = () => ( <Users countPages={this.props.countPages}
                            totalUsersCount={this.props.totalUsersCount}
                            currentPage={this.props.currentPage}
                            users={this.props.users}
                            unfollow={this.props.unfollow}
                            follow={this.props.follow}
                            selectedPage={this.selectedPage}
                            isFetching={this.props.isFetching}
    /> )
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        countPages: state.usersPage.countPages,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (numberPage) => {
            dispatch(setCurrentPageAC(numberPage));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);