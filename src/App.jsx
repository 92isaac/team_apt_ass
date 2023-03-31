import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './route/Home'
import { InitialSpinner } from "./components/commonfiles/InitialSpinner";
import SharedLayout from "./components/commonfiles/SharedLayout";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);



  return (
    <>
    {loading ? (<InitialSpinner load={loading} />) : <div>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home/>} />
      </Route>
    </Routes>
    </div>}
    </>
  )
}

export default App
