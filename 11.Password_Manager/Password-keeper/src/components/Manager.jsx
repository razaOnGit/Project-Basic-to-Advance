import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [formData, setFormData] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");

    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPass = () => {
    // Logic to show/hide password
    if (!passwordRef.current || !ref.current) return;
    const isVisible = passwordRef.current.type === "text";
    // toggle input type
    passwordRef.current.type = isVisible ? "password" : "text";
    // toggle icon src
    ref.current.src = isVisible ? "eye1.png" : "eye2.svg";
  };
  const savePassword = () => {
    // Logic to save password
    setPasswordArray([...passwordArray, { ...formData, id: uuidv4() }]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...formData, id: uuidv4() }]));
    setFormData({ site: "", username: "", password: "" })
    toast('💾 Password Saved!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
  }
 const deletePassword = (id) => {
        console.log("Deleting password with id ", id)
        let c = confirm("Do you really want to delete this password?")
        if(c){
            setPasswordArray(passwordArray.filter(item=>item.id!==id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id))) 
            toast('Password Deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
            
    }
  const editPassword = (id) => {

    console.log("Editing password with id ", id)
    setform(passwordArray.filter(i => i.id === id)[0])
    setPasswordArray(passwordArray.filter(item => item.id !== id))

  }

  const copyText = (text) => {
    toast('🦄 Copy to Clipboard !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-200 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>

      <div className="mx-auto  container px-40 text-center ">
        <h1 className="text-2xl font-bold">
          <span className="text-green-700"> &lt;</span>
          <span>Pass</span><span className="text-green-600">OP/&gt;</span>
        </h1>
        <p className="text-green-600"> Your Own Password Manager</p>
        <div className="flex flex-col p-4 text-black gap-8 items-center ">
          <input value={formData.site} onChange={handleChange} className="rounded-full border border-green-700 w-full p-2" type="text" name="site" id="" placeholder="Enter your website URL" />
          <div className="flex w-full justify-between gap-8">
            <input value={formData.username} onChange={handleChange} className="rounded-full border border-green-700 py-2 px-2 w-full" type="text" name="username" id="" placeholder="Enter Username" />
            <div className="relative">
              <input ref={passwordRef} value={formData.password} onChange={handleChange} className="rounded-full border border-green-700 px-2  py-2 w-full" type="password" name="password" id="" placeholder="Enter Password" />
              <span className="absolute right-1 top-2 cursor-pointer" onClick={showPass}> <img ref={ref} width="27" src="eye1.png" alt="" /> </span>
            </div>
          </div>

          <button onClick={savePassword} className="flex justify-center item-center px-2 bg-green-600  hover:bg-green-400 w-fit rounded-full py-1">
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover">
            </lord-icon>
            Save </button>
        </div>


        <div className="passwords">
          <h2 className="flex ">Your Saved Passwords </h2>
          {passwordArray.length === 0 && <div>No passwords saved</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-2">Website</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-300">
              {passwordArray.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="p-3 text-center border border-white w-32"><a href={item.site} target="_blank"> {item.site} </a>
                      <div className="iconcopy" onClick={() => { copyText(item.site) }}> <lord-icon className=" cursor-pointer w-5 flex justify-center"
                        src="https://cdn.lordicon.com/xuoapdes.json"
                        trigger="hover">
                      </lord-icon></div ></td>
                    <td className="p-3 text-center border border-white w-32">{item.username}
                      <div className="iconcopy" onClick={() => { copyText(item.username) }}>  <lord-icon className=" cursor-pointer w-5 flex justify-center"
                        src="https://cdn.lordicon.com/xuoapdes.json"
                        trigger="hover">
                      </lord-icon>  </div>
                    </td>
                    <td className="p-3 text-center border border-white w-32">{item.password}
                      <div className="iconcopy" onClick={() => { copyText(item.password) }}> <lord-icon className=" cursor-pointer  "
                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover" >
                      </lord-icon></div ></td>
                    <td className='justify-center py-2 border border-white text-center'>
                      <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                          style={{ "width": "25px", "height": "25px" }}>
                        </lord-icon>
                      </span>
                      <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          style={{ "width": "25px", "height": "25px" }}>
                        </lord-icon>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>}
        </div>

      </div>
    </>
  );
};


export default Manager;
