import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error404 from '../../pages/Error404';
import MainGame from '../../pages/MainGame';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainGame />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
