import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="bg-blue-500 p-4 mb-10">
        <div class="max-w-5xl m-auto">
          <div class="text-xl font-bold text-white">QR Code Generator</div>
        </div>
      </header>
      <main>
        <div class="flex flex-col-reverse align-center justify-center m-auto md:max-w-4xl md:flex-row p-10">
          <div class="w-full md:w-2/3 mr-24">
            <h1 class="text-3xl font-bold mb-5 md:text-4xl">
              QR Code Generator
            </h1>
            <p class="mb-4">
              QR code allows smartphone users to easily access your products and
              services simply and quickly.
            </p>
            <p>
              Enter your URL below to generate a QR Code and download the image.
            </p>
            <form id="generate-form" class="mt-4">
              <input
                id="url"
                type="url"
                placeholder="Enter a URL"
                class="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5"
              ></input>
              <select
                id="size"
                class="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none"
              >
                <option value="100">100x100</option>
                <option value="200">200x200</option>
                <option value="300">300x300</option>
                <option value="400">400x400</option>
                <option value="500">500x500</option>
                <option value="600">600x600</option>
                <option value="700">700x700</option>
              </select>
              <button class="bg-orange-400 rounded w-full text-white">
                Generate QR code
              </button>
            </form>
          </div>
          <div class="w-full md:w-1/3 self-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSD1-_SlvVl_D-rX2sVMX8VELrva0LJqZqVw&usqp=CAU"
              alt=""
              class="w-1/2 m-auto mb-10 md:w-full"
            ></img>
          </div>
        </div>
        <div class="max-w-5xl m-auto flex flex-col text-center align-center justify-center mt-20">
          <div class="flex items-center justify-center">
            <div
              id="spinner"
              class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div id="qrcode" class="m-auto"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
