import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyHome from "./page/company/CompanyHome";
import CompanyServices from "./page/company/CompanyServices";
import CompanyServiceBookingForm from "./page/company/CompanyServiceBookingForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="company-home/:id" element={<CompanyHome />} />
            <Route path="company-services/:id" element={<CompanyServices />} />
            <Route
              path="company-booking-services/:idService"
              element={<CompanyServiceBookingForm />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
