import { NavLink, Outlet } from "react-router-dom";
import { CounterPage } from "./CounterPage/CounterPage";
import { RerenderPage } from "./RerenderPage/RerenderPage";
import { TimerPage } from "./TimerPage/TimerPage";

const subPages = [
  { href: 'timer', title: 'Timer' },
  { href: 'counter', title: 'Counter' },
  { href: 're-render', title: 'Re-render' },
  { href: 'users', title: 'Users list' },
  { href: 'middleware', title: 'Middleware' },
];

export const ExercisesPage = () => {
  return (
    <>
      <ul className="nav nav-tabs mb-5">
        {subPages.map(item => (
          <li key={item.href} className="nav-item">
            <NavLink className="nav-link" to={item.href}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};