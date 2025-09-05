import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import FormBuilder from "./components/FormBuilder/FormBuilder";
import FloatingWindow from "./components/FloatingWindow/FloatingWindow";
import Toolbar from "./components/Toolbar/Toolbar";

import { useState } from "react";
import { FormProvider } from "./components/context/FormContext";

function App() {
  // This state will hold a callback from FormBuilder to clear errors
  const [clearErrors, setClearErrors] = useState<() => void>(() => () => {});

  return (
    <FormProvider>
      <Router>
        <Routes>
          {/* Preloader Route */}
          <Route path="/" element={<Preloader />} />

          {/* Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <>
                <Toolbar clearErrors={clearErrors} />
                <FormBuilder setClearErrors={setClearErrors} />
                <FloatingWindow />
              </>
            }
          />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
