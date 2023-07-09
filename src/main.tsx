import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import ShowTimetable from './pages/showtimetable.tsx'
import Simplifier from './pages/simplifer.tsx'
import TrainList from './pages/trainlist.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/show-timetable',
    element: <ShowTimetable />,
  },
  {
    path: '/simplifier',
    element: <Simplifier />,
  },
  {
    path: '/train-list',
    element: <TrainList />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
