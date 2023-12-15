import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import './App.css';
import AuthProvider from './hoc/context/AuthContext/AuthProvider';
import AuthInitializer from './hoc/context/AuthContext/AuthInitializer';
import RegionProvider from './hoc/context/RegionContext/RegionProvider';

function App() {
  return (
    <AuthInitializer>
      <AuthProvider>
        <RegionProvider>
          <RouterProvider router={router} />
        </RegionProvider>
      </AuthProvider>
    </AuthInitializer>
  );
}

export default App;
