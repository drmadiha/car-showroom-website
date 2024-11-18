import React from "react"
import Header from "../component/header"
import Footer from "../component/footer"
const Contact = () => {
    return (
        <div>
            <Header />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                            Pricing
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Banh mi cornhole echo park skateboard authentic crucifix neutra tilde
                            lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee
                        </p>
                    </div>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                        Plan
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Speed
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Storage
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Price
                                    </th>
                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br" />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-3">RED CAR</td>
                                    <td className="px-4 py-3">500/s</td>
                                    <td className="px-4 py-3">15 LITTER</td>
                                    <td className="px-4 py-3 text-lg text-gray-900">$300</td>
                                    <td className="w-10 text-center">
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">WHITE CAR</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">1000/s</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">25 LITTER</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                        $2400
                                    </td>
                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">YELLOW CAR</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">3600/s</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">40 LITTER</td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                        $5000
                                    </td>
                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                        BLACK CAR
                                    </td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                        480/s
                                    </td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                        120 LITTER
                                    </td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                        $7200
                                    </td>
                                    <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <button className="flex ml-auto text-white bg-indigo-950 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded">
                            Submit
                        </button>
                    </div>
                </div>
            </section>


            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            MADIHA CAR SHOWROOM
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                            gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t
                            heard of them man bun deep.
                        </p>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                name="full-name"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button className="text-white bg-indigo-950 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Submit
                        </button>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}
export default Contact;