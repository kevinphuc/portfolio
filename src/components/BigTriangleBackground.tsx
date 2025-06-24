import React from 'react'

const BigTriangleBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {children}
        </div>
    )
}

export default BigTriangleBackground