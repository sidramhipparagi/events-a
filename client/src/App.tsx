import { Switch, Route, Router, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ServicesPage from "@/pages/services";
import PortfolioPage from "@/pages/portfolio";
import AboutPage from "@/pages/about";
import CorporateEventsPage from "@/pages/corporate-events";
import TraditionalCeremoniesPage from "@/pages/traditional-ceremonies";
import WeddingsPage from "@/pages/weddings";
import PrivateCelebrationsPage from "@/pages/private-celebrations";

// Get base path from environment or default to "/"
const base = import.meta.env.BASE_URL || "/";

// Component to handle scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
  
  return null;
}

function AppRouter() {
  return (
    <Router base={base}>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services/corporate-events" component={CorporateEventsPage} />
        <Route path="/services/traditional-ceremonies" component={TraditionalCeremoniesPage} />
        <Route path="/services/weddings" component={WeddingsPage} />
        <Route path="/services/private-celebrations" component={PrivateCelebrationsPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
