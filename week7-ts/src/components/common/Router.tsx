import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EditLetter from '../../pages/EditLetter';
import Error404 from '../../pages/Error404';
import LetterMain from '../../pages/LetterMain';
import WriteLetter from '../../pages/WriteLetter';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LetterMain />} />
        <Route path="/write" element={<WriteLetter />} />
        <Route path="/edit" element={<EditLetter />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
