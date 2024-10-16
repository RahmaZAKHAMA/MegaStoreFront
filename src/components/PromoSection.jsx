import { Link, useNavigate } from "react-router-dom";

export default function PromoSection() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Real-Estate"); // Navigue vers la page Real-Estate
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Browse Our Sales By Categories
            </h1>
            <p className="mt-4 text-xl text-gray-500">Great Deals Await You!</p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Link to="/Real-Estate">
                          <img
                            alt="realestate"
                            src="https://img.freepik.com/free-photo/hand-holding-house-real-estate-property-model_53876-129010.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727740800&semt=ais_hybrid"
                            className="h-full w-full object-cover object-center z-index-10"
                          />
                        </Link>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Link to={"/Vehicles"}>
                          <img
                            alt="vehicles"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4ZEZ3FDlklhAOrbWEcwhEyDT_lDpzF6XoQ&s"
                            className="h-full w-fit object-cover object-center"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 bg-gray-200">
                      <div className="h-64 w-44 overflow-hidden rounded-lg"></div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Link to={"/Home&Garden"}>
                          <img
                            alt="HomeGarden"
                            src="data:image/jpeg;base64,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"
                            className="h-full w-full object-cover object-center"
                          />
                        </Link>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg"></div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Link to={"/Vacation"}>
                          <img
                            alt="vacation"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF80wlecPQUzefxGp0z0-HMC_WNfgHer8Z9Q&s"
                            className="h-full w-full object-cover object-center"
                          />
                        </Link>
                      </div>

                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Link to={"/Fashion"}>
                        
                          <img
                            alt="fashion"
                            src="data:image/jpeg;base64,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"
                            className="h-full w-full object-cover object-center"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Browse Offers<span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
