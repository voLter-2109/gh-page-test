import { FC, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAppSelector } from "../../hooks/storeHooksType";
import { useGetPostsQuery } from "../../store/getdata/metmuseum.api";
import { IResponsePlaceholder } from "../../type/response-metmusem";
import CustomButton from "../../ui/button/customButton";
import PostItem from "../../ui/postItem/PostItem";

const Home: FC = () => {
  const { data, isLoading, isError, refetch } = useGetPostsQuery();
  const { favorites } = useAppSelector((state) => state.plaseholder);
  const [onActiveFav, setActiveFav] = useState<boolean>(false);

  if (isError)
    return <button onClick={() => refetch()}>Попробовать снова</button>;

  return (
    <div className="">
      <div className="flex px-10">
        <CustomButton
          onClick={() => setActiveFav((prev) => !prev)}
          className="mb-6"
        >
          Favorites
          {onActiveFav ? (
            <AiFillHeart size="20px" />
          ) : (
            <AiOutlineHeart size="20px" />
          )}
        </CustomButton>
      </div>
      <div className="flex flex-wrap gap-4 justify-center container">
        {isLoading ? (
          <span>Loading...</span>
        ) : data?.length === 0 ? (
          <span>No Post</span>
        ) : (
          !onActiveFav &&
          data?.map((item) => (
            <PostItem
              key={item.id}
              item={item}
              favorites={favorites.some((fav) => fav === item.id)}
            />
          ))
        )}

        {onActiveFav &&
          (favorites.length > 0 ? (
            data
              ?.filter((item) => favorites.some((fav) => fav === item.id))
              .map((item: IResponsePlaceholder) => (
                <PostItem
                  key={item.id}
                  item={item}
                  favorites={favorites.some((fav) => fav === item.id)}
                />
              ))
          ) : (
            <div>not favorites post</div>
          ))}
      </div>
    </div>
  );
};

export default Home;
