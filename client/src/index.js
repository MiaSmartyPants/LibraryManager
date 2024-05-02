import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Root from "./routes/root";
import Profile from "./profile";
import Library from "./Library";
// import { Provider } from 'react-redux';
// import {store}  from './store';
import { createRoot } from "react-dom/client";

// import { BrowserRouter} from "react-router-dom"

const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

root.render(
  <Auth0Provider

      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,
  );


// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

// const rootElement = 
// document.getElementById('root');
// const root = createRoot(rootElement);

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // root.render(
// // //   <BrowserRouter>
// // //   <Profile />
// // //   </BrowserRouter>
// // // );
// // // const container = document.getElementById("root");
// // // const root = createRoot(container);

// // root.render(
// //   <React.StrictMode>
// //     <Provider store={store}>
// //         {/* <App /> */}
// //         <Profile />
// //     </Provider>
// //   </React.StrictMode>
// // );

// // import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// root.render(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" exact element={<Profile />} />
//         {/* <Route path="users/*" element={<Users />} /> */}
//       </Routes>
//     </BrowserRouter>,
//   document.getElementById('root')
// );


// // Define routes
// // const routes = [
// //   {
// //     path: "/", // Root path
// //     element: <Root />, // Render Root component
// //   },
// //   // {
// //   //   path: "/profile", // Profile path
// //   //   element: <Profile />, // Render Profile component
// //   // },
// // ];


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
