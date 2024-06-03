import React from 'react';
import LinkedButton from '../Buttons/LinkedButton';

const Header = () => {
  return (
    <div className="navbar bg-neutral">
      <img className="px-4" src="/logo.svg"></img>
      <div className="btn btn-ghost text-base font-light">About</div>
      <div className="dropdown dropdown-start">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost text-base font-light"
        >
          Workplace
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
        >
          <li>
            <a className="justify-between">ISA</a>
          </li>
          <li>
            <a>Pension</a>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-start">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost text-base font-light"
        >
          Retail
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
        >
          <li>
            <LinkedButton
              text="ISA"
              link="/retail/isa"
              style="justify-between"
            />
          </li>
          <li>
            <a>
              Pension
              <span className="badge">Coming soon!</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-base font-light">Tools & More</a>
      </div>
      <a className="btn bg-accent text-base mx-1 font-light">Login</a>
      <a className="btn bg-primary text-base mx-1 font-light">Sign Up</a>
    </div>
  );
};

export default Header;
