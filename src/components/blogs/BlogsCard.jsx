const BlogsCard = ({ blogImage, title, description, author, tags }) => {

    const renderTags = (tags) => {
        return (
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-slate-800 py-1 px-2 rounded text-sm">
            #{tag.trim()}
          </span>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-slate-900 h-full p-3 lg:p-6 m-2 rounded-lg w-[320px] lg:w-[500px] cursor-pointer border border-transparent hover:border-gray-700 duration-150">
            <p className="text-2xl font-semibold pb-4">{title}</p>

            {/* Render description using dangerouslySetInnerHTML */}
            <div
                className="text-sm pb-3 text-gray-300 text-justify"
                dangerouslySetInnerHTML={{ __html: description.slice(0, 700) }}
            />

            <p className="text-sm pb-4 text-gray-300">Author: {author}</p>
            {renderTags(tags)}
        </div>
    );
};

export default BlogsCard;
