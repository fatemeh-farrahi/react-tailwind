import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="flex flex-wrap bg-metal text-white">
        <div class="flex-auto bg-siver text-sm"> flex A</div>
        <div class="flex-auto w-64 rounded-lg bg-midnight text-lg ">B</div>
        <div class="flex-auto bg-purple text-xl ">C</div>
        <div class="flex-auto  bg-tahiti-300 text-2xl ">D</div>
        <div class="flex-auto  bg-tahiti-500 text-8x">E </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-3">
        <div className="bg-bermuda text-sm"> Grid with col 3 </div>
        <div className="bg-silver">02</div>
        <div className="bg-silver">03</div>
        <div className="bg-silver">04</div>
        <div className="bg-silver">05</div>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-3 mt-3">
        <div className="col-span-2 bg-tahiti-100">Grid</div>
        <div className="col-span-2 bg-tahiti-200">B</div>
        <div className="bg-tahiti-300">C</div>
        <div className="bg-tahiti-400">D</div>
        <div className="bg-tahiti-500">E</div>
      </div>
    </div>
  );
}

export default App;
