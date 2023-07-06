import MyComponent from "./copy-button"
import ButtonBox from "./button-box"
const CtaContact = () => {
  return (
    <section className="bg-indigo-50 w-full">
      <div className="my-10 border-b border-gray-200"></div>
      <div className="mx-auto px-3 max-w-7xl md:px-20 lg:px-24 py-36 grid grid-cols-1 md:grid-cols-2">
        
        <div className="px-6 py-10 mx-auto text-left">
          <h1 className="text-2xl font-semibold  text-gray-800 lg:text-4xl capitalize">Let&#39;s chat
          </h1>

          <p className="mt-4  text-gray-500">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>

        <div>
          <div className='button group'>
            <div className="px-3 py-2 m-2 hidden group-hover:block absolute">Click to copy</div>
            <MyComponent textToCopy='text to copy'>
              vianydiv@gmail.com
            </MyComponent>
          </div>
          <div >
            <MyComponent className='button group' textToCopy='text to copy'>
              <div className="px-3 py-2 m-2 hidden group-hover:block absolute top-16 left-0">
                Click to   copy
              </div>
              vianydiv@gmail.com
            </MyComponent>
          </div>

        </div>

      </div>



    </section>
  )
}

export default CtaContact