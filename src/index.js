import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const Li = ({ children, estado, casa, edad }) => {
//   console.log(casa, edad)
//   return (
//     <li>
//     {children} {estado}
//     </li>
//   )
// }
// const X = () => (
//   <ul>
//     <Li estado={"prueba"} casa={false} edad={24}>
//       Opcion 1
//     </Li>
//     <Li estado = {"estado 2"}>Opcion 2</Li>
//     <Li estado = {'estado 3'}>Opcion 3</Li>
//   </ul>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<X />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
