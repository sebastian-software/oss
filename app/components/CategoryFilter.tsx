import type { Category } from "../types/project"

import { iconMap } from "../data/icons"
import { categories } from "../data/projects"
import "./CategoryFilter.css"

type CategoryFilterProperties = {
  active: Category | null
  onChange: (category: Category | null) => void
}

export function CategoryFilter({ active, onChange }: CategoryFilterProperties): React.JSX.Element {
  return (
    <nav aria-label="Filter by category" className="category-filter">
      <button
        className={`category-pill ${active === null ? "active" : ""}`}
        onClick={() => { onChange(null); }}
        type="button"
      >
        All
      </button>
      {categories.map((cat) => {
        const Icon = iconMap[cat.icon]
        return (
          <button
            className={`category-pill ${active === cat.name ? "active" : ""}`}
            key={cat.name}
            onClick={() => { onChange(cat.name); }}
            type="button"
          >
            {Icon ? <Icon size={15} /> : null}
            <span>{cat.name}</span>
          </button>
        )
      })}
    </nav>
  )
}
