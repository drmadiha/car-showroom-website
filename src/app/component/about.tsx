
import Image from "next/image"

 const About = ()=>{
    return(

<>
<section className="mt-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-800 text-white px-4 sm:px-10 py-10">
    {/* Image */}
    <Image 
      src="/Carred.png" 
      alt="Red Car" 
      width={700} 
      height={350} 
      className="mx-auto"
    />
    {/* Text */}
    <p className="text-right pt-5 lg:pt-10 pr-0 lg:pr-10 text-sm sm:text-base leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, rem
      eligendi quisquam dolores delectus ullam atque saepe aperiam? Facilis
      commodi atque reprehenderit dignissimos quos a et quae vel officia
      repellendus. Quis velit blanditiis magnam magni, quod adipisci atque
      molestias rem quas libero facilis aliquam accusamus doloribus dolorum
      rerum. Voluptate laboriosam modi blanditiis.
    </p>
  </div>
</section>

<section className="mt-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white text-black px-4 sm:px-10 py-10">
    {/* Text */}
    <p className="text-right pt-5 lg:pt-10 pr-0 lg:pr-10 text-red-500 text-sm sm:text-base leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem
      iure sit ullam, odio quos reiciendis similique, vitae numquam possimus
      illum in Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
      commodi, atque recusandae, ullam reiciendis est expedita vitae soluta
      provident nostrum molestias optio itaque. Dicta, ipsum tenetur. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Sint commodi, atque
      recusandae, ullam reiciendis est expedita vitae soluta provident nostrum
      molestias optio itaque. Dicta, ipsum tenetur. Loream odit minima placeat
      velit. Voluptatibus animi quidem, minima perferendis amet non. Dolor?
    </p>
    {/* Image */}
    <Image 
      src="/blackcar.jpeg" 
      alt="Black Car" 
      width={700} 
      height={200} 
      className="mx-auto"
    />
  </div>
</section>

</>

    )
}
export default About;