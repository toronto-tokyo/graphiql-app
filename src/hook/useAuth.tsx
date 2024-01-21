import { useContext } from 'react';
import { AuthContext } from 'hoc';

const useAuth = () => useContext(AuthContext);

export default useAuth;
