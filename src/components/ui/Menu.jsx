import React from 'react'

export default function Menu({ title, items }) {
    return (
        <div>
            <section className="flex flex-col gap-4">
                <h6 className="text-primary-brand-color">{title}</h6>
                <nav className="flex flex-col gap-y-4">
                    {items.map((item, key) => (
                        <a key={key} href="/#">
                            {item.title}
                        </a>
                    ))}
                </nav>
            </section>
        </div>
    )
}
