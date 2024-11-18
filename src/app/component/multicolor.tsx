
import Image from "next/image"
const Colors = () => {
  return (

    <>
      <section className="mt-10">
        {/* Section Title */}
        <h1 className="text-center text-2xl font-bold bg-red-500 hover:bg-blue-950 text-white py-2">
          MULTY COLORS
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 mt-10">
          <div>
            <Image
              src="/C1.JPEG"
              alt="Color 1"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src="/C2.JPEG"
              alt="Color 2"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src="/C3.PNG"
              alt="Color 3"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src="/C4.JPEG"
              alt="Color 4"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src="/C5.JPEG"
              alt="Color 5"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src="/C6.JPEG"
              alt="Color 6"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
        </div>
      </section>


    </>

  )
}
export default Colors