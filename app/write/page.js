 const Write = () => {
  return (
    <div>
      <form className="text-gray-600 body-font relative" action="/api/post" method="POST">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Write</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">커뮤니티 가이드를 위반하는 게시물은 삭제될 수 있습니다.</p>
          </div>
          <div className="lg:w-2/2 md:w-1/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">Title</label>
                  <input type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="content" className="leading-7 text-sm text-gray-600">Content</label>
                  <textarea id="content" name="content" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Post</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Write;