import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyHome from "./page/company/CompanyHome";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="company-home/:id" element={<CompanyHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
