import {
  MAIN_TITLE,
  RABBITS_TITLE,
  COMPLEX_TITLE,
  MAIN_ROUTE,
  RABBITS_ROUTE,
  COMPLEX_ROUTE, SOME_TITLE, SOME_ROUTE, FILE_TITLE, FILE_ROUTE,
} from './utils/constants';
import MainPage from './pages/MainPage';
import RabbitsPage from './pages/Rabbits';
import ComplexPage from './pages/Complex';
import SomePage from './pages/Some';
import FilePage from './pages/File';

// eslint-disable-next-line import/prefer-default-export
export const publicRoutes = [
  {
    title: MAIN_TITLE,
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    title: RABBITS_TITLE,
    path: RABBITS_ROUTE,
    Component: RabbitsPage,
  },
  {
    title: COMPLEX_TITLE,
    path: COMPLEX_ROUTE,
    Component: ComplexPage,
  },
  {
    title: SOME_TITLE,
    path: SOME_ROUTE,
    Component: SomePage,
  },
  {
    title: FILE_TITLE,
    path: FILE_ROUTE,
    Component: FilePage,
  },
];
