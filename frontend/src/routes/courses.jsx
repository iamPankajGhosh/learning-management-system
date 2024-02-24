import { NavLink } from "react-router-dom";
import courses from "../courses";

export default function Courses() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2">
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((post) => (
            <NavLink
              to={`course/${post.id}`}
              key={post.title}
              className="border"
            >
              <img
                src={post.poster}
                className="aspect-video w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #{post.category}
                </p>
                <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                  {post.description}
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <img
                    className="h-full w-10 rounded-lg"
                    src={post.avatar}
                    alt={post.author}
                  />
                  <div>
                    <p className="text-sm font-semibold leading-tight text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-sm leading-tight text-gray-600">
                      {post.date}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
