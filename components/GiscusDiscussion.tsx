// import Giscus from '@giscus/react'

export default function GiscusDiscussion() {
    return (
        <>
            <div id="comments" className="giscus" />
            <script
                src="https://giscus.app/client.js"
                data-repo="Ivy-End/blog-discussions"
                data-repo-id="R_kgDOPQnPCA"
                data-category="General"
                data-category-id="DIC_kwDOPQnPCM4CtREj"
                data-mapping="title"
                data-strict="1"
                data-reactions-enabled="1"
                data-emit-metadata="0"
                data-input-position="top"
                data-theme="light"
                data-lang="zh-CN"
                crossOrigin="anonymous"
                async
            ></script>
        </>
    )
}
