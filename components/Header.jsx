import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'
import Transition from '../pages/utils/Transition';
import Dropdown from '../pages/utils/Dropdown';
import Logo from '../public/helms-media-logo.svg';

const Header = () => {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Helms Media">
            <img src={Logo} width="32" height="32" rx="16" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About us</Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
              </li>              
              {/* 1st level: hover */}
              <Dropdown title="Resources">
                {/* 2nd level: hover */}
                <li>
                  <Link href="/documentation" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Documentation</Link>
                </li>
                <li>
                  <Link href="/support" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Support center</Link>
                </li>
                <li>
                  <Link href="/404" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">404</Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  
                  {/* Take out & refactor (link has 2 children and breaks)
                   <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                   */}
                </Link>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">

            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"              
              >
                <ul className="px-5 py-2">
                  <li>
                    <Link href="/pricing" className="flex text-gray-600 hover:text-gray-900 py-2">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/about" className="flex text-gray-600 hover:text-gray-900 py-2">About us</Link>
                  </li>
                  <li>
                    <Link href="/tutorials" className="flex text-gray-600 hover:text-gray-900 py-2">Tutorials</Link>
                  </li>  
                  <li>
                    <Link href="/blog" className="flex text-gray-600 hover:text-gray-900 py-2">Blog</Link>
                  </li>                                  
                  <li className="py-2 my-2 border-t border-b border-gray-200">
                    <span className="flex text-gray-600 hover:text-gray-900 py-2">Resources</span>
                    <ul className="pl-4">
                      <li>
                        <Link href="/documentation" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">Documentation</Link>
                      </li>
                      <li>
                        <Link href="/support" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">Support center</Link>
                      </li>
                      <li>
                        <Link href="/404" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/signin" className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center">Sign in</Link>
                  </li>
                  <li>
                    <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2">
                      <span>Sign up</span>
                      {/* Take out & refactor (link has 2 children and breaks)
                      <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill="#999" fillRule="nonzero" />
                      </svg> */}
                    </Link>
                  </li>
                </ul>
              </Transition>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;