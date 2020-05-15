import React from 'react';
import { connect } from "react-redux"

class ProfileStatus extends React.Component {
    state = {
        IsChangeMode: false
    }
    toggleStateChangeMode() {
        debugger;
        this.setState({
            IsChangeMode: !this.state.IsChangeMode
        });
    }
    render = () => {
        return <div>
            { this.state.IsChangeMode ?  <input autoFocus={true} placeholder={this.props.placeholder} onBlur={this.toggleStateChangeMode.bind(this)}/> : <label onDoubleClick={this.toggleStateChangeMode.bind(this)}>MyStatus</label> }
        </div>
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage
    }
}

export const ProfileStatusContainer = connect(mapStateToProps, {})(ProfileStatus);