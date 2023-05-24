export default function Catagory({ catagory: { id, title, image } }) {
    return (
        <a href="/#" className="hover:bg-purple-50 group flex flex-col items-center p-4 rounded hover:text-primary-brand-color w-28">
            <img src={image} alt={title} className="border w-12 rounded-lg mb-2"/>
            <span className="text-sm font-semibold group-hover:text-brand-color whitespace-nowrap tracking-tight">{title}</span>
        </a>
    );
}
