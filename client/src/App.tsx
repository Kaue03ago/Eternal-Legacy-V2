import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import LandingPage from "./pages/LandingPage";
import SecurityPage from "./pages/SecurityPage";
import SignupStep1 from "./pages/SignupStep1";
import SignupStep2 from "./pages/SignupStep2";
import PricingPage from "./pages/PricingPage";
import PaymentPage from "./pages/PaymentPage";
import WaitlistPage from "./pages/WaitlistPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={LandingPage} />
      <Route path={"/security"} component={SecurityPage} />
      <Route path={"/signup/step1"} component={SignupStep1} />
      <Route path={"/signup/step2"} component={SignupStep2} />
      <Route path={"/pricing"} component={PricingPage} />
      <Route path={"/payment"} component={PaymentPage} />
      <Route path={"/waitlist"} component={WaitlistPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
