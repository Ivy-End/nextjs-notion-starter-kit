import Giscus from '@giscus/react'

export default function GiscusDiscussion() {
  return (
    <Giscus
      repo="Ivy-End/blog‑discussions"
      repoId="R_kgDOPQkY3Q"
      category="General"
      categoryId="DIC_kwDOPQkY3c4CtQzP"
      mapping="title"     // pathname / title / url / og:title
      reactionsEnabled="1"
      strict="1"
      inputPosition="top"
      theme="light"
      lang="zh-CN"
      loading="lazy"
    />
  )
}
