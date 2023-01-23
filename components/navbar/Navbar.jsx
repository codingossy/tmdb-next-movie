import Link from "next/link";


const Navbar = ( {textColor}) => {
  return (
    <div className="capitalize hidden md:flex">
      <ul  
       className="flex items-center space-x-12 text-white">
        <li >
          <Link className="cursor-pointer"  href="/">home</Link>
        </li>
        <li>
          <Link href="/tvshows">tv shows</Link>
        </li>
        <li>
          <Link href="/allmovies">movies</Link>
        </li>
        <li>
          <Link href="/watchlist">watchlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
