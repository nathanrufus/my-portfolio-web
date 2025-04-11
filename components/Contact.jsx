import React from "react"

function Contact() {
  return (
    <div className=" px-7 md:px-10 my-10" id="contact">
      <h1 className=" text-center text-sm text-green-700 font-bold mb-2">Lets connect</h1>
      <h2 className=" text-xl text-center mb-2 font-bold">You can write Review and also send message</h2>
      <div className=" flex flex-col md:flex-row">
        {/* texts and icons */}
        <div className=" md:w-1/2">
          {/* social icons */}
          <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 class="text-2xl mb-4">Leave a Review</h2>

            <form action="#" method="POST">
              <div class="mb-4">
                <label for="rating" class="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <select id="rating" name="rating" class="border border-gray-300 rounded p-2 w-full">
                  <option value="">Select a rating</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>

              <div class="mb-4">
                <label for="review" class="block text-sm font-medium text-gray-700 mb-2">Review</label>
                <textarea id="review" name="review" class="border border-gray-300 rounded p-2 w-full" rows="4"></textarea>
              </div>

              <button type="submit" class="bg-green-500 text-white rounded p-2 w-full hover:bg-green-600">Submit</button>
            </form>
          </div>
        </div>
        {/* form */}
        <div className=" md:w-1/2">
          <p className=" mt-5 text-2xl mb-6">
            Contact me, let's make magic together
          </p>
          <form>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name: "
              className=" bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email: "
              className=" bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mt-2"
            />

            <textarea
              name="message"
              id="message"
              placeholder="Message: "
              className=" bg-[#f5f5f5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mt-2"
            ></textarea>

            <button className="btn bg-green-700 py-2 px-10 text-white hover:bg-white outline outline-1 hover:text-green-700 block transition-all duration-500 rounded mt-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
