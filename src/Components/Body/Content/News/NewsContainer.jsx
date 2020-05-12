//import React from 'react'
import { textChangeActionCreator, addPostActionCreator } from '../../../../redux/postReducer'
import News from './News';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  debugger;
  return {
    News: state.News
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeNewsText: (text) => {
      dispatch(textChangeActionCreator(text));
    },
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    }
  };
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;