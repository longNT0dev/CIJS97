import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import WelcomePage from './components/WelcomePage/WelcomePage';
import DemoFetch from './components/DemoFetch/DemoFetch';
import { DemoUseRef } from './components/DemoHook/DemoHook';
import DemoCrudFetch from './components/DemoCRUDFetch/DemoCrudFetch';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/welcome",
        element: <WelcomePage />,
        children: [
          {
            path: "/welcome/continue",
            element: <div>hello 1</div>
          },
          {
            path: "/welcome/continue",
            element: <div>hello 2</div>
          }
        ]
      },
      {
        path: "/products",
        element: <div>Xin chào các bạn tới mua hàng</div>,
      },
      {
        path: "/products/:productId",
        element: <WelcomePage />
      },
      {
        path: "/demo-fetch",
        element: <DemoCrudFetch />
      },
      {
        path: "/demo-hooks",
        element: <DemoUseRef />
      },
    ]
  },
  {
    path: "*",
    element: <div>Not found page</div>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


