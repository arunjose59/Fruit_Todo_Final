import Signin from "./components/Signin/signin";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import List from "./components/List/list";
import NotFound from "./components/notfound";
function App() {
  localStorage.setItem("auth", false);

  function ProtectedRoute({ children }) {
    let auth = JSON.parse(localStorage.getItem("auth"));

    if (auth) {
      return children;
    } else return "Not Having Access";
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
          <Route path="/" element={<Signin></Signin>}></Route>
          <Route
            path="/list"
            element={
              <ProtectedRoute>
                <List></List>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
