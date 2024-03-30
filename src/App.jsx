import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./Support/Support.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Transaction from "./Transaction/Transaction.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/transaction",
    element: <Transaction />
  },
  {
    path: "support",
    element: <Support />
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App