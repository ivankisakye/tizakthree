export default function BlogCard({ date, category, title, excerpt, readTime }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer">
      <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
        <span className="text-4xl">💡</span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">{category}</span>
          <span className="text-gray-400 text-xs">{readTime}</span>
        </div>
        <h3 className="font-display text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{excerpt}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  )
}