
import type { Tech } from '../types'
import { iconMap } from '../iconMap'

interface TechCardProps {
  tech: Tech
  onAdd: (tech: Tech) => void
  isAdded: boolean
}

function TechCard({ tech, onAdd, isAdded }: TechCardProps) {
  return (
    <div className="border rounded-xl p-7 flex flex-col gap-3 bg-white">

      {/* Icon and Badge */}
      <div className="flex items-center justify-between">
        <span className="text-3xl">
          {iconMap[tech.name]}
        </span>

        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
          {tech.tag}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="font-bold text-lg">
        {tech.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600">
        {tech.description}
      </p>

      {/* Category, Level, Rating */}
      <div className="flex items-center gap-3 text-xs text-gray-500">

        <span className="bg-gray-100 px-2 py-1 rounded">
          {tech.category}
        </span>

        <span>{tech.level}</span>

        <span className="ml-auto">
          ⭐ {tech.rating}
        </span>

      </div>

      {/* Add to Stack Button */}
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`py-2 rounded-lg font-medium mt-2 transition ${
          isAdded
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>

    </div>
  )
}
export default TechCard;