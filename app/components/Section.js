
export default function Section({ title, children, className = "" }) {
    return (
        <section className={`mb-12 ${className}`}>
            <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] border-b-2 border-[var(--primary)]/20 pb-2">
                {title}
            </h2>
            {children}
        </section>
    );
}
