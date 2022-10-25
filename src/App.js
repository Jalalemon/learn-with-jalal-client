import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, routes } from 'react-router-dom';
import MainPage from './layOut/MainPage';
import Home from './pages/home/Home';
import Course from './pages/leftside/Course/Course';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainPage></MainPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/course/:id',
          element: <Course></Course>
        },

      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
