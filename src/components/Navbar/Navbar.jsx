import React, { Component } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import {motion} from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "#" },
  { id: 3, title: "About", link: "#" },
  { id: 4, title: "Shop", link: "#" },
  { id: 5, title: "Contacts", link: "#" },
];

export default class Navbar extends Component {
  state = { isMobileMenuOpen: false };

  menuRef = React.createRef();
  menuButtonRef = React.createRef();

  componentDidUpdate(_, prevState) {
    if (this.state.isMobileMenuOpen && !prevState.isMobileMenuOpen) {
      document.addEventListener("mousedown", this.handleOutsideClick);
    } else if (!this.state.isMobileMenuOpen && prevState.isMobileMenuOpen) {
      document.removeEventListener("mousedown", this.handleOutsideClick);
    }
  }

  handleOutsideClick = (event) => {
    // Check if the click is outside both the menu and the menu button
    if (
      this.menuRef.current &&
      !this.menuRef.current.contains(event.target) &&
      this.menuButtonRef.current &&
      !this.menuButtonRef.current.contains(event.target)
    ) {
      this.setState({ isMobileMenuOpen: false });
    }
  };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }));
  };

  render() {
    return (
      <nav className="bg-white shadow-md py-4">
        <motion.div 
         initial={{ opacity: 0}}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.5 }}
        className="container mx-auto flex justify-between items-center px-4">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>

          {/* Desktop Menu Section */}
          <div className="hidden md:flex items-center gap-6 text-gray-600">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="text-xl">
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <MdOutlineShoppingCart />
            </button>
          </div>

          {/* Mobile Hamburger Menu Section */}
          <div className="md:hidden flex items-center">
            <button
              onClick={this.toggleMobileMenu}
              className="text-4xl"
              ref={this.menuButtonRef} // Reference for the menu button
            >
              <MdMenu />
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        {this.state.isMobileMenuOpen && (
          <div
            ref={this.menuRef}
            className="md:hidden bg-white shadow-lg rounded-3xl"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="text-xl">
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                    onClick={this.toggleMobileMenu} // Close menu on link click
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}
