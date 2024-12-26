export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">Inter!</h1>

      <article className="border-gray-200 border-4 flex p-3">
        {/* img */}
        <div className="bg-black w-fit rounded-full">img</div>

        <div>
          {/* name and location */}
          <span className="flex">
            <h3>@bchan98</h3>
            <h3>(US)</h3>
          </span>
          {/* msg */}
          <h4>hi</h4>
        </div>

        {/* time and date */}
        <span>
          <h6>12/26/24</h6>
          <h6>2:17 PM</h6>
        </span>
      </article>
    </main>
  );
}
