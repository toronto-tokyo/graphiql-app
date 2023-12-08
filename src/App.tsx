import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import './App.css';
import AuthProvider from './hoc/context/AuthContext/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
