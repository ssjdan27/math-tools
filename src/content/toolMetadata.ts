export interface ToolMetadata {
  route: string
  title: string
  description: string
}

export const toolMetadata: ToolMetadata[] = [
  {
    route: '/cantor',
    title: 'Cantor Set',
    description: 'Explore recursive middle-third removal with an interactive SVG visualization.',
  },
  {
    route: '/complex',
    title: 'Complex Transformations',
    description:
      'Compare points in the complex plane before and after common transformations.',
  },
  {
    route: '/barycentric',
    title: 'Barycentric Coordinates',
    description:
      'Drag a point relative to a triangle and inspect its barycentric coordinate values.',
  },
]
