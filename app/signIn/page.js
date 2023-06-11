import GitLoginBtn from "@/components/gitLoginBtn";

const SignIn = () => {
  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24 mx-auto	">
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image" />
          </div>

          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
          <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/4">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                  Full Name
                </label>
              </div>
              <div class="md:w-3/4">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe" />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/4">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                  Password
                </label>
              </div>
              <div class="md:w-3/4">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3"></div>
              <label class="md:w-2/3 block text-gray-500 font-bold">
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="text-sm">
                  Send me your newsletter!
                </span>
              </label>
            </div>
            <div class="md:flex md:items-center">
              <div class="mb-3 flex items-center justify-center w-full ">
                <button class="w-full  shadow bg-primary-500 hover:bg-primary-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Sign In
                </button>
              </div>
            </div>
            {/* Divider */}
            <div
              className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
            >
              <p
                className="mx-4 mb-0 text-center font-semibold">
                OR
              </p>
            </div>

              {/* Social login buttons */}
              <GitLoginBtn />
          </form>
          
          
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default SignIn;