import React from "react";

const Manager = () => {
  const showPass = () => {
    // Logic to show/hide password
    alert("Show Password");
  };
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-green-200 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>

      <div className="mx-auto  container px-40 text-center ">
        <h1 className="text-2xl font-bold">
          <span className="text-green-700"> &lt;</span>
          <span>Pass</span><span className="text-green-600">OP/&gt;</span>
        </h1>
        <p className="text-green-600"> Your Own Password Manager</p>
        <div className="flex flex-col p-4 text-black gap-8 items-center ">
          <input className="rounded-full border border-green-700 w-full p-2" type="text" name="" id="" placeholder="Enter your website URL" />
          <div className="flex w-full justify-between gap-8">
            <input className="rounded-full border border-green-700 py-2 px-2 w-full" type="text" name="" id="" placeholder="Enter Username"/>
            <div className="relative">
            <input className="rounded-full border border-green-700 px-2  py-2 w-full" type="text" name="" id="" placeholder="Enter Password"/>
            <span className="absolute right-1 top-1 cursor-pointer" onClick={showPass}> <img width="30" src="eye1.png" alt="" /> </span>
          </div>
           </div>
          <button className="flex justify-center item-center px-4 bg-green-600  hover:bg-green-400 w-fit rounded-full py-2">
          <lord-icon
            src="https://cdn.lordicon.com/efxgwrkc.json"
            trigger="hover">
            </lord-icon>
          Add Password </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
