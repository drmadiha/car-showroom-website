import Header from "./component/header"
import Herosection from "./component/herosection"
import Services from "./component/services"
import Colors from "./component/multicolor"
import About from "./component/about"
import Footer from "./component/footer"
 const HomePage =()=>{
  return(
<div>
<Header/>
<Herosection/>
<Services/>
<Colors/>
<About/>
<Footer/>
</div>
  )
}
export default HomePage




// import Image from "next/image";

// import Link from "next/link";
// import Home from './../../.next/server/app/page';
// import Colors from './component/multicolor';
// export default function Home() {
//   return (
//     <>
//        <header className="flex justify-between pl-10 pr-10 bg-gray-800 text-red-500 pt-2 font-medium">
//         {/* Logo */}
//         <div>
//           <h2 className="text-2xl font-semibold"> Madiha Rashid </h2>
//         </div>

//         {/* Links */}
//         <nav>
//           <ul className="flex gap-x-9 ">
//             <li>
//               <Link href="./">Home</Link>
//             </li>
//             <li>
//               <Link href="./about">Services</Link>
//             </li>
//             <li>
//               <Link href="./contact-us">Contact-Us</Link>
//             </li>
//           </ul>
//         </nav>
//       </header> 
//       <main className="mt-10 ml-10">
//         <section className="flex gap-6 items-center mt-7">
//           <div className="grid grid-cols-2 gap-5 ">
//             <div className="mt-40">
//               <h1 className="font-bold font-weight-900 text-4xl text-red-500 text-shadow-sm">CAR SHOROOM</h1>
//               <p className="text-gray-400 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi qui cum impedit quod deserunt quisquam consequatur officiis unde, sed rem ipsa et laborum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi neque ut ipsam iure, modi, illo esse vel doloribus officia quas accusantium saepe amet quisquam? Nisi perspiciatis nobis cum officiis? neque praesentium mollitia optio pariatur laudantium nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem suscipit officia incidunt laudantium alias consequatur eaque excepturi saepe tempore veritatis temporibus dicta ea, quaerat dolor distinctio rerum pariatur corrupti.</p>
//               <div className="bg-red-500 w-40 h-14 rounded-lg pb-2 mt-12 text-center text-white font-bold text-[20px]"><button>VISTE MY WEBSIT</button></div>
//             </div>
//             <div className="mt-40  bg-gray-800 text-white ml-5 mr-5">

//               <Image src="/redcar.png"
//                 alt="pic"
//                 width={700} height={350}
//               />
//             </div>
//           </div>
//         </section>
//       </main>
//       <section className=" service mt-10">
//         <h1 className="text-center text-size-30px bg-red-500 text-white h-10 pt-2 font-bold text-2xl">Our service</h1>
//         <div className="grid grid-cols-3 gap-6 ml-10 mr-10 h-700px mt-10">
//           <div className="height={350} "> <Image src="/S1.PNG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//           <div className="height={350} "><Image src="/S2.PNG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//           <div className="height={350} "><Image src="/S3.JPEG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//           <div className="height={350} "><Image src="/S4.JPEG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//           <div className="height={350} "><Image src="/S5.PNG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//           <div className="height={350} "><Image src="/S6.PNG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//         </div>
//       </section>

//       <section className="mt-10">
//         <h1 className="text-center text-size-30px bg-red-500 text-white h-10 pt-2 font-bold text-2xl">MULTY COLORS</h1>
//         <div className="grid grid-cols-3 gap-6 ml-10 mr-10 h-700px mt-10">
//           <div className="height={350} "> <Image src="/C1.JPEG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//           <div className="height={350} "><Image src="/C2.JPEG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//           <div className="height={350} "><Image src="/C3.PNG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//           <div className="height={350} "><Image src="/C4.JPEG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//           <div className="height={350} "><Image src="/C5.JPEG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//           <div className="height={350} "><Image src="/C6.JPEG" alt="pic" width={350} height={8500} className="ml-auto" /></div>
//         </div>
//       </section>
//       <section>
//         <div className="grid grid-cols-2 mt-40 bg-gray-800 text-white ml-5 mr-5">

//           <Image src="/Carred.png"
//             alt="pic"
//             width={700} height={350}
//           /><p className="text-right pt-10 pr-10">Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, rem eligendi quisquam dolores delectus ullam atque saepe aperiam? Facilis commodi atque reprehenderit dignissimos quos a et quae vel officia repellendus. ipsum dolor sit amet consectetur adipisicing elit. Quis velit blanditiis magnam magni, quod adipisci atque molestias rem quas libero facilis aliquam accusamus doloribus dolorum rerum. Voluptate laboriosam modi blanditiis.</p></div>

//       </section>

//        <section>
        
//           <div className="grid grid-cols-2 mt-40 bg-white text-black-800 font-size-24px ml-5 mr-5 ">
//             <p className="text-right pt-10 pr-10 text-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem iure sit ullam, odio quos reiciendis similique, vitae numquam possimus illum in 
//                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi, atque recusandae, ullam reiciendis est expedita vitae soluta provident
//                 nostrum molestias optio itaque. Dicta, ipsum tenetur.loream Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi, atque recusandae, ullam reiciendis est expedita vitae soluta provident
//                 nostrum molestias optio itaque. Dicta, ipsum tenetur.loream
//                  Odit minima placeat velit. voluptatibus animi quidem, minima perferendis amet non. Dolor?
//                  Odit minima placeat velit. voluptatibus animi quidem, minima perferendis amet non. Dolor?</p>
//                  <Image src="/blackcar.jpeg"
//                  alt="black car pic"
//                  width={700} height={200}/>
//           </div>
        
//        </section>

//           <section>
//             <div className="flex width={100%} height={450} bg-red-500 text-white mt-10 pl-10 font-size-24px">
//               <div>
//                 <ol>
//                   <ul>drmadiha1may@gmail.com</ul>
//                   <ul>linkdin</ul>
//                   <ul>facebook</ul>
//                   <ul>0341 0244149</ul>
//                 </ol>
//               </div>
//               <div className="pl-10">
//                 <ol>
//                   <ul>drmadiha1may@gmail.com</ul>
//                   <ul>linkdin</ul>
//                   <ul>facebook</ul>
//                   <ul>0341 0244149</ul>
//                 </ol>
//               </div>
//             </div>
//           </section>
//         </>
//         );
// }
