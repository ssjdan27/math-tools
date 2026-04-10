import { ToolCard } from '../../components/ui/ToolCard'
import { PageContainer } from '../../components/ui/PageContainer'
import { toolMetadata } from '../../content/toolMetadata'

export const HomePage = () => {
  return (
    <PageContainer>
      <section>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Interactive Math Tools
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
          A collection of in-browser visualizations for mathematical ideas. Each tool is fully
          client-side and designed for experimentation and learning.
        </p>
      </section>
      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {toolMetadata.map((tool) => (
          <ToolCard key={tool.route} tool={tool} />
        ))}
      </section>
    </PageContainer>
  )
}
