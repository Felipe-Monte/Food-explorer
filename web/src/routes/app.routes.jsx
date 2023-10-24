import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { DishDetails } from '../pages/DishDetails';
import { EditDish } from '../pages/EditDish';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path='/details' element={<DishDetails />} />
      <Route path='/edit' element={<EditDish />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}