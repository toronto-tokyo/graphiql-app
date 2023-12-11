import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import './App.css';
import AuthProvider from './hoc/context/AuthContext/AuthProvider';
import AuthInitializer from './hoc/context/AuthContext/AuthInitializer';

function App() {
  return (
    <AuthInitializer>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AuthInitializer>
  );
}

export default App;
