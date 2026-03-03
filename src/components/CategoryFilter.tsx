import { categories } from "../data/projects"
import { iconMap } from "../data/icons"
import type { Category } from "../types/project"
import "./CategoryFilter.css"

interface CategoryFilterProps {
  active: Category | null
  onChange: (category: Category | null) => void
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <nav className="category-filter" aria-label="Filter by category">
      <button
        className={`category-pill ${active === null ? "active" : ""}`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {categories.map((cat) => {
        const Icon = iconMap[cat.icon]
        return (
          <button
            key={cat.name}
            className={`category-pill ${active === cat.name ? "active" : ""}`}
            onClick={() => onChange(cat.name)}
          >
            {Icon && <Icon size={15} />}
            <span>{cat.name}</span>
          </button>
        )
      })}
    </nav>
  )
}
