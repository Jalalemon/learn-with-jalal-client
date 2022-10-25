import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, routes } from 'react-router-dom';
import MainPage from './layOut/MainPage';
import Home from './pages/home/Home';
import Course from './pages/leftside/Course/Course';
import CourseDetails from './pages/leftside/Course/CourseDetails';

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
          loader: ({ params }) =>
            fetch(`http://localhost:5000/index/${params.id}`),
        },
        {
          path: '/coursedetails/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({params}) => {
            fetch(`http://localhost:5000/allCourse/${params.id}`);
          }
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
