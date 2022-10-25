import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, routes } from 'react-router-dom';
import MainPage from './layOut/MainPage';
import Home from './pages/home/Home';
import Course from './pages/leftside/Course/Course';
import CourseDetails from './pages/leftside/Course/CourseDetails';
import Login from './Authuntication/Login/Login';
import Register from './Authuntication/Register/Register';
import Footer from './pages/footer/Footer';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("http://localhost:5000/allCourse"),
        },
        {
          path: "/course/:id",
          element: <Course></Course>,
          loader: ({ params }) =>fetch(`http://localhost:5000/index/${params.id}`),
        },
        {
          path: "/footer/:id",
          element: <Footer></Footer>,
          loader: ({ params }) => fetch(`http://localhost:5000/allCourse/${params.id}`),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);


  return (
    <div>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
