import React from "react";
import {  Routes, Route } from "react-router-dom";

import MathPage from "./pages/MathPage";
import HomePage from "./pages/HomePage";
import DifficultyPage from "./pages/DifficultyPage";
import NotFound from "./pages/NotFound";
import ValidPage from "./components/ValidPage";
import { ResultsPage } from "./pages/ResultsPage";
import { descriptions } from "./utils/descriptions";

function App() {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<HomePage/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="R" element={<ResultsPage />} />
          <Route path="Complement">
            <Route index element={<DifficultyPage descriptions={descriptions["/complement"]} />} />
            <Route path=":difficulty" element={<ValidPage> <MathPage/> </ValidPage>}/>
          </Route>
          <Route path="Addition">
            <Route index element={<DifficultyPage descriptions={descriptions["/addition"]}/>} />
            <Route path=":difficulty" element={<ValidPage> <MathPage/> </ValidPage>}/>
          </Route>
          <Route path="Multiplication">
            <Route index element={<DifficultyPage descriptions={descriptions["/multiplication"]}/>} />
            <Route path=":difficulty" element={<ValidPage> <MathPage/> </ValidPage>}/>
          </Route>
          <Route path="Subtraction">
            <Route index element={<DifficultyPage descriptions={descriptions["/subtraction"]}/>} />
            <Route path=":difficulty" element={<ValidPage> <MathPage/> </ValidPage>}/>
          </Route>
          <Route path="Division">
            <Route index element={<DifficultyPage descriptions={descriptions["/division"]}/>} />
            <Route path=":difficulty" element={<ValidPage> <MathPage/> </ValidPage>}/>
          </Route>
         
        </Route>
      </Routes>
  );
}

export default App;


