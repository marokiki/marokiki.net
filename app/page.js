import Home from "./components/Home";
import { ThemeToggle } from "./components/ThemeToggle";
import LanguageRedirect from "./components/LanguageRedirect";
import LanguageToggle from "./components/LanguageToggle";

export default function Page() {
  return (
    <>
      <LanguageRedirect />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ThemeToggle />
        <LanguageToggle />
      </div>
      <Home />
    </>
  );
}
