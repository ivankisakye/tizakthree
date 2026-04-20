export default function ProjectCard({ title, description, tags, color }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
      <div className={`h-3 ${color}`}></div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}