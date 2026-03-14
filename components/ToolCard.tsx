import Link from "next/link";

interface ToolCardProps {
  name: string;
  description: string;
  type: string;
  rating: number;
  href: string;
  emoji: string;
}

export default function ToolCard({ name, description, type, rating, href, emoji }: ToolCardProps) {
  const isFree = type === "Free";
  const isPaid = type === "Paid";

  return (
    <div className="bg-[#111111] border border-[#1E1E1E] rounded-2xl p-5 flex flex-col card-hover group">
      <div className="flex items-start justify-between mb-3">
        <div className="text-2xl">{emoji}</div>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            isFree
              ? "bg-green-500/10 text-green-400 border border-green-500/20"
              : isPaid
              ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
              : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
          }`}
        >
          {type}
        </span>
      </div>

      <h3 className="text-white font-bold text-base mb-1">{name}</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{description}</p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-0.5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all ${
                i < rating ? "bg-[#D85A30]" : "bg-[#2A2A2A]"
              }`}
              style={{ width: "12px" }}
            />
          ))}
        </div>
        <span className="text-gray-500 text-xs font-medium">{rating}/10</span>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-2.5 bg-[#1A1A1A] hover:bg-[#D85A30] border border-[#2A2A2A] hover:border-[#D85A30] text-gray-400 hover:text-white text-xs font-semibold rounded-xl text-center transition-all duration-200"
      >
        Try it →
      </a>
    </div>
  );
}
