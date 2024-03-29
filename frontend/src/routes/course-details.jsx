import { useParams } from "react-router-dom";
import courses from "../courses";

export default function CourseDetails() {
  const { courseId } = useParams();

  const course = courses.find((course) => course.id == courseId);

  return (
    <div className="w-full">
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="rounded-lg bg-gray-200 p-4">
            <img
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
              src={course.poster}
              alt={course.title}
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              {course.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-gray-700">
              {course.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
