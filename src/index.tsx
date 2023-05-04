import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import "./assets/fonts/Poppins/Poppins-Bold.ttf";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/home/Home";
import DentistDetail from "./pages/dentist-detail/DentistDetail";
import ServiceDetail from "./pages/service-detail/ServiceDetail";
import BlogDetail from "./pages/blog-detail/BlogDetail";
import { MainnavigationLoader } from "./loaders/MainNavigationLoader";
import { ServiceLoader } from "./loaders/ServiceLoader";
import { MainPageLoader } from "./loaders/MainPageLoader";
import { DentistLoader } from "./loaders/DentistLoader";
import { BlogLoader } from "./loaders/BlogLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}  loader={MainnavigationLoader} id="root">
      <Route index element={<Home />} loader={MainPageLoader}/>
      <Route path="our-dentists/:id" element={<DentistDetail />} loader={({params}) => DentistLoader(params.id)}/>
      <Route path="our-services/:id" element={<ServiceDetail />} loader={({params}) => ServiceLoader(params.id)}/>
      <Route path="blog/:id" element={<BlogDetail />} loader={({params}) => BlogLoader(params.id)}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
