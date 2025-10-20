import HomeEn from "../components/HomeEn";
import { ThemeToggle } from "../components/ThemeToggle";
import LanguageToggle from "../components/LanguageToggle";

export default function Page() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ThemeToggle />
                <LanguageToggle />
            </div>
            <HomeEn />
        </>
    );
}
