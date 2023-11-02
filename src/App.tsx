import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './components/header/header';

function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <div className="container">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left"></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
