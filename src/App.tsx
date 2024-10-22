import React from "react";
import { LoginPage } from "./pages/LoginPage";
import { MyPlaylistsPage } from "./pages/MyPlaylistsPage";
import {
 BrowserRouter as Router,
 Route,
 Routes,
 Navigate,
} from "react-router-dom";

import { RegistrationPage } from "./pages/RegistrationPage";
import { ROUTES } from "./constants/routes";
import { AllPlaylistsPage } from "./pages/AllPlaylistsPage";
import { SearchPage } from "./pages/SearchPage";

function App() {
 return (
//   <>testing</>
    <Router>
     <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
      <Route path={ROUTES.MY_PLAYLISTS} element={<MyPlaylistsPage />} />
      <Route path={ROUTES.ALL_PLAYLISTS} element={<AllPlaylistsPage />} />
      <Route path={ROUTES.SEARCH} element={<SearchPage />} />
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
     </Routes>
    </Router>
 );
}

export default App;
