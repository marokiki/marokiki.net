
export default function Card({ children, className = "" }) {
  return (
    <div className={`p-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg ${className}`}>
      {children}
    </div>
  );
}
