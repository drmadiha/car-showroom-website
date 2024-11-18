import Image from "next/image"
const Services = () => {
  return (

    <>
      <section className="service mt-10">
        {/* Section Title */}
        <h1 className="text-center text-2xl font-bold bg-red-500 hover:bg-blue-950 text-white py-2">
          Our Service
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 mt-10">
          <div>
            <Image
              src="/S1.PNG"
              alt="Service 1"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src="/S2.PNG"
              alt="Service 2"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src="/S3.JPEG"
              alt="Service 3"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src="/S4.JPEG"
              alt="Service 4"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src="/S5.PNG"
              alt="Service 5"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src="/S6.PNG"
              alt="Service 6"
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
export default Services