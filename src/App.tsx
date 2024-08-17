import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/provider/auth";

const App = () => {
  return <AuthProvider>
    <Routes>
      <Route path="/login" element={<p>Login</p>} />
      <Route path="/join" element={<p>Join</p>} />
    </Routes>
  </AuthProvider>
}

export default App;