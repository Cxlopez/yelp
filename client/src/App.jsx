import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetail from "./routes/RestaurantDetail";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants/:id/update" element={<UpdatePage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        </Routes>
      </div>
    </RestaurantsContextProvider>

  );
}

export default App;
