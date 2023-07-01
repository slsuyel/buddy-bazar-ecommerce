
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProviders from './provider/AuthProviders';

// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProviders>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProviders>

)

// import React, { useState, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './routes/routes';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../src/index.css';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import AuthProviders from './provider/AuthProviders';

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const queryClient = new QueryClient();

//   useEffect(() => {
//     const handleRenderingComplete = () => {
//       setIsLoading(false);
//     };

//     // Simulating a delay to showcase the loading state
//     const delay = setTimeout(() => {
//       handleRenderingComplete();
//     }, 1000);

//     return () => {
//       clearTimeout(delay);
//     };
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <div className="py-5 text-center">
//           <div className="spinner-grow" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div></div>
//       ) : (
//         <AuthProviders>
//           <QueryClientProvider client={queryClient}>
//             <RouterProvider router={router} />
//           </QueryClientProvider>
//         </AuthProviders>
//       )}
//     </>
//   );
// };

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
