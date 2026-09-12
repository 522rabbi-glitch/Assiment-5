import type { Tech } from '../types'
import { iconMap } from '../iconMap'

interface TechCardProps {
  tech: Tech
  onAdd: (tech: Tech) => void
}

function TechCard({ tech, onAdd }: TechCardProps) {
  return (
    <div className=" container mx-auto justify-center border rounded-xl p-7 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-3xl">{iconMap[tech.name]}</span>
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
          {tech.tag}
        </span>
      </div>

      <h3 className="font-bold text-lg">{tech.name}</h3>
      <p className="text-sm text-gray-600">{tech.description}</p>

      <div className="flex items-center gap-3 text-xs text-gray-500">
        <span className="bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
        <span>{tech.level}</span>
        <span className="ml-auto">⭐ {tech.rating}</span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        className="bg-black text-white py-2 rounded-lg font-medium mt-2"
      >
        Add to Stack
      </button>
    </div>
  )
}

export default TechCard