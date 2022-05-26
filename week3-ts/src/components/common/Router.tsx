import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error404 from '../../pages/Error404';
import Intro from '../../pages/Intro';
import Result from '../../pages/Result';
import WorldCup from '../../pages/WorldCup';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/worldCup" element={<WorldCup />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
