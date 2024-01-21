import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from 'router';
import './App.css';
import store from 'store';
import AuthProvider from 'hoc/context/AuthContext/AuthProvider';
import AuthInitializer from 'hoc/context/AuthContext/AuthInitializer';
import RegionProvider from 'hoc/context/RegionContext/RegionProvider';

function App() {
  return (
    <Provider store={store}>
      <AuthInitializer>
        <AuthProvider>
          <RegionProvider>
            <RouterProvider router={router} />
          </RegionProvider>
        </AuthProvider>
      </AuthInitializer>
    </Provider>
  );
}

export default App;
