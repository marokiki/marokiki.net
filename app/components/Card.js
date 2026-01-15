
export default function Card({ children, className = "" }) {
  return (
    <div className={`p-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
      {children}
    </div>
  );
}
