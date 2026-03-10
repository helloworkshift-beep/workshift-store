export default function Divider({ className = "" }: { className?: string }) {
  return <hr className={`border-t border-[#e6ebf1] ${className}`} />;
}
