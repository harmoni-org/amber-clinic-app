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
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Layout from "./components/Layout/Layout";
import Home from "./pages/home/Home";
import DentistDetail from "./pages/dentist-detail/DentistDetail";
import ServiceDetail from "./pages/service-detail/ServiceDetail";
import Error from "./pages/error/Error";
import BlogDetail from "./pages/blog-detail/BlogDetail";
import { MainnavigationLoader } from "./loaders/MainNavigationLoader";
import { ServiceLoader } from "./loaders/ServiceLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />} loader={MainnavigationLoader} id="root">
      <Route index element={<Home />}/>
      <Route path="our-dentists/:id" element={<DentistDetail />} />
      <Route path="our-services/:id" element={<ServiceDetail />} loader={({params}) => ServiceLoader(params.id)}/>
      <Route path="blog/:id" element={<BlogDetail />} />
    </Route>
  )
);

const client = new ApolloClient({
  uri: 'http://clinicamber.com/wordpress/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
