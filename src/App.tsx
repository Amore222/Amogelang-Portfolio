import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OldApp from './OldApp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OldApp />} />
      </Routes>
    </BrowserRouter>
  );
}
