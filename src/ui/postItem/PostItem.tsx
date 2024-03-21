import { FC } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/storeHooksType";
import { IResponsePlaceholder } from "../../type/response-metmusem";

const PostItem: FC<{ item: IResponsePlaceholder; favorites: boolean }> = ({
  item,
  favorites,
}) => {
  const { body, id, title, image } = item;
  const { addFavorite, removeFavorite } = useActions();
  return (
    <div className="relative">
      <Link to={`/gh-page-test/${id}`}>
        <div className="p-3 rounded-lg shadow-xl w-[600px] h-44 hover:border hover:border-slate-900  ">
          <div className="w-[150px] h-40 border border-gray-400 mr-4 float-left  ">
            <img src={image} alt="foto" className="w-full h-full bg-contain" />
          </div>
          <h1 className="text-xl font-semibold">
            Post {id}. {title.length > 50 ? `${title.slice(0, 50)}...` : title}
          </h1>
          <span>{body.length > 180 ? `${body.slice(0, 180)}...` : body}</span>
        </div>
      </Link>
      <div className="absolute top-2 right-1 flex flex-col gap-2 ">
        <button className="text-red-600" onClick={() => addFavorite(id)}>
          {favorites ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
        </button>
        {!!favorites && (
          <button onClick={() => removeFavorite(id)}>
            <FaTrash size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default PostItem;
