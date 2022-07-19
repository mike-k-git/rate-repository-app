import { useApolloClient } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';

const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  useEffect(async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/signin');
  });

  return null;
};

export default SignOut;
