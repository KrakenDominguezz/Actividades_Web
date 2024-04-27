import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex gap-10 justify-center">
      <Link href="/characters">Characters</Link>
      <Link href="/favoritelist">Favorites</Link>
    </nav>
  );
};

export default Navbar;
