
export default function Section({ title, children, className = "" }) {
    return (
        <section className={`mb-14 scroll-mt-24 ${className}`}>
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-[var(--primary-strong)] border-b border-[var(--card-border)] pb-3">
                {title}
            </h2>
            {children}
        </section>
    );
}
