import CardTextR from "@/components/card-text-r"
import CardTextL from "@/components/card-text-l"

export default function Portfolio() {
  return (
    <section className="bg-white mx-auto px-3 max-w-7xl md:px-20 lg:px-24 py-36">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-4xl">Portfolio
        </h1>

        <p className="mt-4 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
      </div>
      
      <CardTextR />
      <CardTextL />

      <div className="my-10 border-b border-gray-200"></div>
    </section>
  )
}
