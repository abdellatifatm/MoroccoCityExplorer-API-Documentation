import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  Squares2X2Icon,
  HomeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavItem({ children }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

function HeroSection16() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar
        shadow={false}
        fullWidth
        className="fixed top-0 z-50 w-full bg-white border-b border-gray-200"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link to='/'>
            <Typography color="blue-gray" className="text-lg font-bold">
              MoroccoCityExplorer
            </Typography>
          </Link>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <Link to="/">
              <NavItem>
                <HomeIcon className="h-5 w-5" />
                Home
              </NavItem>
            </Link>
            <Link to="/documentation">
              <NavItem>
                <DocumentTextIcon className="h-5 w-5" />
                Documentation
              </NavItem>
            </Link>
          </ul>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4 bg-white">
            <ul className="flex flex-col gap-4">
              <Link to="/">
                <NavItem>
                  <HomeIcon className="h-5 w-5" />
                  Home
                </NavItem>
              </Link>
              <Link to="/documentation">
                <NavItem>
                  <DocumentTextIcon className="h-5 w-5" />
                  Documentation
                </NavItem>
              </Link>
            </ul>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}

export default HeroSection16;
