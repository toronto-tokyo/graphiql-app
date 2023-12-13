import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import './App.css';
import AuthProvider from './hoc/context/AuthContext/AuthProvider';
import RegionProvider from './hoc/context/RegionContext/RegionProvider';

function App() {
  return (
    <AuthProvider>
      <RegionProvider>
        <RouterProvider router={router} />
      </RegionProvider>
    </AuthProvider>
  );
}

export default App;
