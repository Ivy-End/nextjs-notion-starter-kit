import { useEffect, useState } from 'react'

interface GateProps {
    pageId?: string
    isProtected?: boolean
    password?: string
    children?: React.ReactNode
}

export default function PasswordGate({
    pageId,
    isProtected,
    password = '',
    children
}: GateProps) {
    /* 不受保护 → 直接渲染内容 */
    if (!isProtected) return children

    /* 受保护但未设置密码 → 永久锁定 */
    if (!password.trim()) {
        return (
        <div style={{ padding: '4rem', textAlign: 'center' }}>
            <p>该文章已被作者锁定，暂不可访问。</p>
        </div>
        )
    }

    /* 有密码：正常验密流程 */
    const key = `unlocked-${pageId}`
    const [ok, setOk] = useState(false)

    useEffect(() => {
        if (localStorage.getItem(key) === 'true') setOk(true)
    }, [])

    if (ok) return children

    return (
        <div style={{ padding: '4rem', textAlign: 'center' }}>
            <p>请输入密码后查看本文：</p>
            <input
                type="password"
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        if ((e.target as HTMLInputElement).value === password) {
                            localStorage.setItem(key, 'true')
                            setOk(true)
                        } else {
                            alert('密码错误')
                        }
                    }
                }}
            />
        </div>
    )
}
