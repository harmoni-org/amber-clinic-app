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
import "./index.css";
import ServiceDetail from "./pages/service-detail/ServiceDetail";
import Error from "./pages/error/Error";
import { getMainPageContent, getService, getBlog, getDentist } from "./components/Utils/routeLoaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} loader={getMainPageContent} errorElement={<Error />}>
      <Route index element={<Home />}/>
      <Route path="our-dentists/:id" element={<DentistDetail />} loader={({ params }) => { return getDentist(params.id)}}/>
      <Route path="our-services/:id" element={<ServiceDetail />} loader={({ params }) => { return getService(params.id)}} />
      <Route path="blog/:id" element={<ServiceDetail />} loader={({ params }) => { return getBlog(params.id)}}/>
      <Route path="*" element={<Home />} />
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
