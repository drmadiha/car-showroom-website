import Image from "next/image"
const Herosection = () => {
  return (

    <>
      <main className="mt-1 px-4 sm:px-10">
        <section className="flex flex-col lg:flex-row gap-6 items-center mt-7">
          <div className="grid lg:grid-cols-2 gap-5 w-full">
            {/* Text Content */}
            <div className="mt-10 lg:mt-40">
              <h1 className="font-bold text-3xl sm:text-4xl text-red-500 shadow-sm">
                CAR SHOWROOM
              </h1>
              <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi qui
                cum impedit quod deserunt quisquam consequatur officiis unde, sed rem
                ipsa et laborum. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ipsum sequi neque ut ipsam iure, modi, illo esse vel doloribus
                officia quas accusantium saepe amet quisquam? Nisi perspiciatis nobis
                cum officiis? Neque praesentium mollitia optio pariatur laudantium
                nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae dolorem suscipit officia incidunt laudantium alias
                consequatur eaque excepturi saepe tempore veritatis temporibus dicta
                ea, quaerat dolor distinctio rerum pariatur corrupti.
              </p>
              <div className="bg-red-500 hover:bg-blue-950 w-52 h-12 rounded-lg mt-12 flex justify-center items-center text-white font-bold text-lg ml-20">
                <button>VISIT MY WEBSITE</button>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-10 lg:mt-40 bg-gray-800 text-white flex justify-center items-center">
              <Image
                src="/redcar.png"
                alt="pic"
                width={700}
                height={350}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </>

  )
}
export default Herosection;