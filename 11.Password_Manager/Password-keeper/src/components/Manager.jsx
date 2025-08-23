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
    if (!passwordRef.current || !ref.current) return;
    const isVisible = passwordRef.current.type === "text";
    passwordRef.current.type = isVisible ? "password" : "text";
    ref.current.src = isVisible ? "eye1.png" : "eye2.svg";
  };

  const savePassword = () => {
    if (!formData.site || !formData.username || !formData.password) {
      toast.error('Please fill all fields!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }

    const newPassword = { ...formData, id: uuidv4() };
    const updatedPasswords = [...passwordArray, newPassword];
    
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    setFormData({ site: "", username: "", password: "" });
    
    toast.success('💾 Password Saved Successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const deletePassword = (id) => {
    console.log("Deleting password with id ", id);
    const confirmDelete = window.confirm("Do you really want to delete this password?");
    
    if (confirmDelete) {
      const updatedPasswords = passwordArray.filter(item => item.id !== id);
      setPasswordArray(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      
      toast.success('🗑️ Password Deleted Successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  const editPassword = (id) => {
    console.log("Editing password with id ", id);
    const passwordToEdit = passwordArray.find(item => item.id === id);
    
    if (passwordToEdit) {
      setFormData({
        site: passwordToEdit.site,
        username: passwordToEdit.username,
        password: passwordToEdit.password
      });
      
      // Remove the item being edited from the array
      const updatedPasswords = passwordArray.filter(item => item.id !== id);
      setPasswordArray(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      
      toast.info('✏️ Password loaded for editing!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('📋 Copied to Clipboard!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }).catch(() => {
      toast.error('Failed to copy to clipboard!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    });
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
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-200 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      <div className="mx-auto container px-40 text-center">
        <h1 className="text-2xl font-bold">
          <span className="text-green-700"> &lt;</span>
          <span>Pass</span><span className="text-green-600">OP/&gt;</span>
        </h1>
        <p className="text-green-600"> Your Own Password Manager</p>
        
        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input 
            value={formData.site} 
            onChange={handleChange} 
            className="rounded-full border border-green-700 w-full p-2" 
            type="text" 
            name="site" 
            placeholder="Enter your website URL" 
          />
          
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input 
              value={formData.username} 
              onChange={handleChange} 
              className="rounded-full border border-green-700 py-2 px-2 w-full" 
              type="text" 
              name="username" 
              placeholder="Enter Username" 
            />
            
            <div className="relative">
              <input 
                ref={passwordRef} 
                value={formData.password} 
                onChange={handleChange} 
                className="rounded-full border border-green-700 px-2 py-2 w-full" 
                type="password" 
                name="password" 
                placeholder="Enter Password" 
              />
              <span className="absolute right-1 top-2 cursor-pointer" onClick={showPass}>
                <img ref={ref} width="27" src="eye1.png" alt="toggle password visibility" />
              </span>
            </div>
          </div>

          <button 
            onClick={savePassword} 
            className="flex justify-center items-center px-4 py-2 bg-green-600 hover:bg-green-400 w-fit rounded-full transition-colors"
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover">
            </lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords mt-5">
          <h2 className="text-xl font-semibold mb-2">Your Saved Passwords</h2>

          {passwordArray.length === 0 && (
            <div className="text-gray-500">
              No passwords saved yet. Add your first password above!
            </div>
          )}

          {passwordArray.length > 0 && (
            /* wrapper added to allow horizontal scroll on small screens */
            <div className="w-full overflow-x-auto">
      <table className="w-full min-w-max table-auto rounded-md mb-10">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="py-3 px-4">Website</th>
                    <th className="py-3 px-4">Username</th>
                    <th className="py-3 px-4">Password</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {passwordArray.map((item) => (
                    <tr key={item.id} className="hover:bg-green-200 transition-colors">
                      <td className="p-3 text-center border border-white">
                        <div className="flex items-center justify-center gap-2">
                          <a href={item.site} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {item.site}
                          </a>
                          <lord-icon 
                            className="cursor-pointer" 
                            style={{ width: "20px", height: "20px" }}
                            src="https://cdn.lordicon.com/xuoapdes.json"
                            trigger="hover"
                            onClick={() => copyText(item.site)}
                          />
                        </div>
                      </td>

                      <td className="p-3 text-center border border-white">
                        <div className="flex items-center justify-center gap-2">
                          <span>{item.username}</span>
                          <lord-icon 
                            className="cursor-pointer" 
                            style={{ width: "20px", height: "20px" }}
                            src="https://cdn.lordicon.com/xuoapdes.json"
                            trigger="hover"
                            onClick={() => copyText(item.username)}
                          />
                        </div>
                      </td>

                      <td className="p-3 text-center border border-white">
                        <div className="flex items-center justify-center gap-2">
                          <span>{"*".repeat(item.password.length)}</span>
                          <lord-icon 
                            className="cursor-pointer" 
                            style={{ width: "20px", height: "20px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                            onClick={() => copyText(item.password)}
                          />
                        </div>
                      </td>

                      <td className="p-3 text-center border border-white">
                        <div className="flex justify-center gap-2">
                          <lord-icon
                            className="cursor-pointer hover:scale-110 transition-transform"
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                            onClick={() => editPassword(item.id)}
                          />
                          <lord-icon
                            className="cursor-pointer hover:scale-110 transition-transform"
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                            onClick={() => deletePassword(item.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;