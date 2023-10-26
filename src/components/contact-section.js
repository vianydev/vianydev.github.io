import CopyButton from "./copy-button"
const ContactSection = () => {
  return (
    <section className="w-full">
      <div className="my-6 border-b border-gray-200"></div>

      <div className="mx-auto px-1 max-w-7xl md:px-28 py-20 grid grid-cols-1 items-center">

        <div className="px-6 py-10 text-center">
          <h1 className="text-3xl font-semibold  text-neutral-600 lg:text-4xl capitalize">Get in touch
          </h1>
          {/* <p className="mt-4 mx-auto pb-8 sm:w-2/3 text-md md:text-xl text-neutral-600/80">
            You’d like to talk? Feel free to email me.
          </p> */}
          <CopyButton textToCopy='vianydev@gmail.com'>
            vianydev@gmail.com
          </CopyButton>
        </div>

      </div>



    </section>
  )
}

export default ContactSection