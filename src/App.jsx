import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {



  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />}/>
        <Route path='jobs/1' element={<JobPage />}/>
        <Route path='edit-job/2' element={<EditJobPage/>}/>
        <Route path='/add-job' element={<AddJobPage/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App