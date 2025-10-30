import React, { useMemo } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { RouterProvider, useRouter } from "./contexts/RouterContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import OurModel from "./pages/OurModel";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Router() {
  const { path } = useRouter();

  // Parse the current path
  const renderPage = useMemo(() => {
    if (path === '/') return <Home />;
    if (path === '/about-us') return <AboutUs />;
    if (path === '/services') return <Services />;
    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      return <ServiceDetail slug={slug} />;
    }
    if (path === '/our-model') return <OurModel />;
    if (path === '/contact') return <Contact />;
    return <NotFound />;
  }, [path]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {renderPage}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <RouterProvider>
            <Router />
          </RouterProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
