const BlogsCard = ({ bolgImage, title, description, author, tags }) => {

    const tagSeperatedName = (tags) => {
        return (
            <div className="flex flex-wrap gap-5">
                {tags.map((tech, index) => {
                    const items = tech.split(',').map(item => item.trim());
                    return (
                        <div key={index} className="w-[400px] flex flex-wrap gap-2">
                            {items.map((item, i) => (
                                <span key={i} className="bg-blue-600-500 bg-slate-800 py-1 px-2 rounded text-sm">
                                    #{item}
                                </span>
                            ))}
                        </div>
                    );
                })}
            </div>
        )
    }
    return (
        <>
            <div className="bg-slate-900 h-full p-3 lg:p-6 m-2 rounded-lg w-[320px] lg:w-[500px] cursor-pointer border border-transparent hover:border-gray-700 duration-150">
                <p className="text-2xl font-semibold pb-4">{title}</p>
                <p className="text-sm pb-3 text-gray-300 text-justify">{description}</p>
                <p className="text-sm pb-4 text-gray-300"> Author: {author}</p>
                <p>{tagSeperatedName(tags)}</p>
            </div>
        </>
    )
}

export default BlogsCard;