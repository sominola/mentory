import { Users } from 'lucide-react';
import { ModeToggle } from './switcher-theme';
import { Link } from 'react-router-dom';
import { AppRoute } from '@/common/enums/enums';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" to={AppRoute.ROOT}>
            <Users className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Mentorship</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {/* <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">
              Main
            </a> */}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Link className="transition-colors hover:text-foreground/80 text-foreground/60" to={AppRoute.ACCOUNTgit}>
            Account
          </Link>
          <Link className="transition-colors hover:text-foreground/80 text-foreground/60" to={AppRoute.SIGN_IN}>
            Sign In
          </Link>
          <Link className="transition-colors hover:text-foreground/80 text-foreground/60" to={AppRoute.SIGN_UP}>
            Sign Up
          </Link>
          <Link className="transition-colors hover:text-foreground/80 text-foreground/60" to={AppRoute.MENTORS}>
            Mentors
          </Link>
          <nav className="flex items-center">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};
