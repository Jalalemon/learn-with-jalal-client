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
import Terms from './tersmsAndCondition/Terms';
import Blog from './Blogs/Blog';
import PrivateRoute from './privateRoute/PrivateRoute';
import Faq from './Faq/Faq';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>
            fetch("https://learn-with-jalal-server.vercel.app/allCourse"),
        },
        {
          path: "/course/:id",
          element: <Course></Course>,
          loader: ({ params }) =>
            fetch(
              `https://learn-with-jalal-server.vercel.app/index/${params.id}`
            ),
        },
        {
          path: "/coursedetails/:id",
          element: (
            <PrivateRoute>
              <CourseDetails></CourseDetails>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://learn-with-jalal-server.vercel.app/allCourse/${params.id}`
            ),
        },
        // {
        //   path: "/course/:id",
        //   element: <Course></Course>,
        //   loader: ({ params }) =>
        //     fetch(`http://localhost:5000/allCourse/${params.id}`),
        // },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/terms",
          element: <Terms></Terms>,
        },
        {
          path: "/blog",
          element: (
            <PrivateRoute>
              <Blog></Blog>
            </PrivateRoute>
          ),
        },
        {
          path: "*",
          element: <h3 className="mx-auto"> 404: oppps! Rout not found </h3>,
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
