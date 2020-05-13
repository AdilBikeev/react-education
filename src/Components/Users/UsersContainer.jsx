import { connect } from "react-redux";
import { Users } from "./Users";
import { followAC, unFollowAC, setCurrentPageAC, setUsersAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        countPages: state.usersPage.countPages,
        totalUsersCount: state.usersPage.totalUsersCount,
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)