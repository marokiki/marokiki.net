import HomeEn from "../components/HomeEn";
import { ThemeToggle } from "../components/ThemeToggle";
import LanguageToggle from "../components/LanguageToggle";

export default function Page() {
    return (
        <>
            <div className="page-controls">
                <ThemeToggle />
                <LanguageToggle />
            </div>
            <HomeEn />
        </>
    );
}
