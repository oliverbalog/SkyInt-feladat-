import React from 'react';
import { Navigate } from 'react-router-dom';
import userSlice from '../features/userSlice';
import { userStore } from '../stores/userStore';

function Protected({ children }) {
  if (!userStore.getState().user.userName) {
    return (<Navigate to="/login" replace/>);
  }
  return children;
}

export default Protected;
