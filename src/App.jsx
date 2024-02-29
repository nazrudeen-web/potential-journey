import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import MainPage from "./pages/MainPage";
import OrdersPage from "./pages/OrdersPage";
import TasksPage from "./pages/TasksPage";
import ServicePage from "./pages/ServicePage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              {" "}
              <IndexPage />{" "}
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route
          path="/create-account"
          element={
            <>
              <CreateAccountPage />
            </>
          }
        />
        <Route
          path="/mainpage"
          element={
            <>
              <MainPage />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <OrdersPage />
            </>
          }
        />
        <Route
          path="/Tasks"
          element={
            <>
              <TasksPage />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
              <ServicePage />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <ProfilePage />
            </>
          }
        />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}
