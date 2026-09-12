import type { Tech } from '../types'

interface StackSidebarProps {
  stack: Tech[]
  onRemove: (id: number) => void
  onRemoveAll: () => void
}

function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside>
      <div className="border rounded-2xl p-5 shadow-sm bg-white sticky top-6">
        <div className="flex items-center  justify-between mb-5">
          <h2 className="text-2xl font-bold">
            Your Stack
          </h2>

          <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-bold">
            {stack.length}
          </span>
        </div>

        {stack.length === 0 ? (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">
              🧩
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Your stack is empty
            </h3>

            <p className="text-sm text-gray-500">
              Add technologies from the list to build your stack.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between gap-3 border rounded-lg p-3"
              >
                <div>
                  <h3 className="font-semibold text-sm">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {tech.category}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-red-500 hover:bg-red-50 px-3 py-1 rounded-lg text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              onClick={onRemoveAll}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </aside>
  )
}

export default StackSidebar;