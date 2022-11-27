import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/constants';

function AppRouter() {
  return (
    <Routes>
      {publicRoutes.map((({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Component />
            </div>
          )}
          exact
        />
      )
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  );
}

export default AppRouter;
