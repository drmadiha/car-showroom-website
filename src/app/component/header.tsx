

import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 bg-gray-800 text-red-500 py-3 font-medium">
        {/* Logo */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">Madiha Rashid</h2>
        </div>

        {/* Links */}
        <nav>
          <ul className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-9 text-center mt-2 sm:mt-0">
            <li>
              <Link href="./">Home</Link>
            </li>
            <li>
              <Link href="./about">Services</Link>
            </li>
            <li>
              <Link href="./contact-us">Contact-Us</Link>
            </li>
          </ul>
        </nav>
      </header>

    </>

  )
}
export default Header;