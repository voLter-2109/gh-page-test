import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHooksType";
import { IResponsePlaceholder } from "../../type/response-metmusem";
import Heading from "../../ui/heading/Heading";
import { HOME_PATH } from "../../type/constants";

export default function About() {
  const { postId } = useParams();

  // const {data, isLoading, isError} = useGetPostQuery(+postId);

  const post = useAppSelector((state) => state.plaseholder.posts);

  const [postData, setPostData] = useState<IResponsePlaceholder>();

  useEffect(() => {
    postId && setPostData(post.find((item) => item.id === +postId));
  }, []);

  if (!postId) return <div>Post not fount</div>;

  return (
    <div className="">
      {postData ? (
        <div className="flex flex-col  p-7 ">
          <div className="w-full flex justify-center mb-4">
            <Heading>{"Post " + postData.id + ". " + postData.title}</Heading>
          </div>
          <div className="flex gap-7">
            <img
              src={postData.image}
              alt="foto"
              className="h-[600px] rounded-2xl shadow-2xl w-[400px]"
            />
            <div className="flex flex-col justify-between">
              <div className="">
                <h2 className="text-xl font-medium mb-4">Description</h2>
                <p>{postData.body}</p>
                <hr className="my-4"></hr>
                <div className="text-gray-500 text-sm">
                  <p className="">
                    *все посты так же сохраняются в localStorage, что бы при
                    перезагрузке не терять данные по текущему посту "/:postId"
                  </p>
                  <p>
                    *либо использовать второй endpoint useGetPostQuery, что бы
                    подтянуть данные при посещениее "/:postId" страницы
                  </p>
                </div>
              </div>
              <Link
                to={HOME_PATH}
                className="text-center px-6 rounded-xl py-2 border border-spacing-1 shadow-lg hover:shadow-2xl transition-all w-48"
              >
                go Home
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <span>opps...</span>
      )}
    </div>
  );
}
