const Profile = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="avatars"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://avatars.githubusercontent.com/u/140588883?v=4"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
              Admin
            </h2>
            <h1 className="my-4 text-3xl font-semibold text-black">
              Pankaj Ghosh
            </h1>
            <p className="leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              rem amet repudiandae neque adipisci eum enim, natus illo inventore
              totam?
            </p>
            <div className="flex items-center justify-between mt-10">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
