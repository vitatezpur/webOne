import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom";

export default function ContactForm({formData,setFormData , isoutside , showSetter , setShowSetter}) {
  const [isShowing, setIsShowing] = useState(false);
  const [error,setError] = useState({name:'',email:'',mobile:'',message:''});
  const [loading,setLoading] = useState(false);

const wrapperRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef]);

  useEffect(()=>{
    setIsShowing(showSetter);
  },[showSetter]);

  useEffect(() => {
    let html = document.querySelector("html")

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden"

        const focusableElements =
          'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'

        const modal = document.querySelector("#modal") // select the modal by it's id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements)

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false)
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9

          if (!isTabPressed) {
            return
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus() // add focus for the last focusable element
              e.preventDefault()
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
      
              firstFocusableElement.focus()
              e.preventDefault()
            }
          }
        })

        firstFocusableElement.focus()
      } else {
        html.style.overflowY = "visible"
      }
    }
  }, [isShowing]);

useEffect(()=>{
if(isShowing === false){
  setShowSetter(false);
}

},[isShowing])

  const onChangeHandler=(e)=>{
    setFormData({...formData,[e.target.name] : e.target.value});
    validatorcv(e.target.name,e.target.value);
  }

  const sanitizeInput = (input) => {
    const specialChars = {
      "'": '&#39;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '%': '&#37;',
    };

    return input.replace(/[&<>"'%]/g, (match) => specialChars[match]);
  };

  const ValidateEmail=(input)=>{
    let validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (input.match(validRegex)) {
  
      return true;
  
    } else {
  
      return false;
  
    }
  
  }
  const validatorcv=(typewe,dd)=>{
  let sdd = {...error};

  if(typewe === 'name'){
    if(dd.length < 4){
  
      sdd = {...sdd,[typewe] : "Text Length Should be minimum 4"}
    }else{
      sdd = {...sdd,[typewe] : ""}
    }
  }
  if(typewe === 'email'){
    if(!ValidateEmail(dd)){
      sdd = {...sdd,[typewe] : "Email not validate"}
    }else{
      sdd = {...sdd,[typewe] : ""}
    }
  }
  if(typewe === 'mobile'){
    const mobileRegex = /^\d{10}$/;   
    if (!mobileRegex.test(dd)) {
      sdd = {...sdd,[typewe] : "Mobile not validate"}

    }else{
      sdd = {...sdd,[typewe] : ""}
    }
  }
  if(typewe === 'message'){
    if(dd.length < 10){
      sdd = {...sdd,[typewe] : "Text Length Should be minimum 10"}
    
    }else{
      sdd = {...sdd,[typewe] : ""}
    }
  }
 
  setError(sdd);
  }

  const saveData=()=>{
  let err = {...error};
 if(formData.name === ""){
  setLoading(true);
 err['name'] = "Name Required";
 }
 if(formData.email === ""){
  err['email'] = "Email Required";
  }
  if(formData.mobile === ""){
    err['mobile'] = "Mobile Required";
    }
    if(formData.message === ""){
      err['message'] = "Message Required";
      }
    setError(err);
  if(Object.values(err).some((sd)=>sd !=='')){
    console.log(err)
    setLoading(false);
  }else{
    setLoading(false);
    const { email, mobile, ...formDataWithoutEmailMobile } = formData;
    const sanitizedFormData = Object.fromEntries(
      Object.entries(formDataWithoutEmailMobile).map(([key, value]) => [key, sanitizeInput(value)])
    );
  let finaldata = {...formData,...sanitizedFormData}
  console.log(finaldata);
    alert('Data ready for Travel')
    setFormData({name:'',email:'',mobile:'',message:''});
  }


  }

  return (
    <>
      {!isoutside && <button
        onClick={() => setIsShowing(true)}
        className="fixed right-0 bottom-20 bg-blue-500 text-white rounded-full px-6 py-3 shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none z-40"
      >
        <span>Contact us</span>
        <span className=""></span>
      </button>
     }
      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-4a content-4a"
              aria-modal="true"
              tabIndex="-1"
              role="dialog"
            >
              <div
                ref={wrapperRef}
                className="flex max-h-[90vh] max-w-sm flex-col gap-4 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                id="modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <header id="header-4a" className="flex items-center">
                  <h3 className="flex-1 text-lg font-medium text-slate-700">
                   Write to us !
                  </h3>
            
                  <button
                    onClick={() => setIsShowing(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-79 desc-79"
                      >
                        <title id="title-79">Icon title</title>
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </header>
                <div id="content-4a" className="flex-1">
                  <div className="flex flex-col gap-4">
                  <div className="text-pink-500 text-xs mt-1">{error?.name ?? '' }</div>
                  <div className="relative w-[300px]">             
                      <input
                        id="id-b03"
                        type="text"
                        name="name"
                        placeholder="your name"
                        onChange={(e)=>onChangeHandler(e)}
                        value = {formData?.name ?? ''}
                        className={`peer relative h-10 w-full rounded border ${error?.name !=="" ? 'border-pink-500 text-pink-500' : 'border-slate-200 text-slate-500'} px-4 text-sm placeholder-transparent outline-none transition-all autofill:bg-white focus:border-emerald-500 focus:outline-none invalid:border-pink-500 invalid:text-pink-500 invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
                      />
                      <label
                        htmlFor="id-b03"
                        className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                      >
                        Your Name
                      </label>
               
                    </div>
                    <div className="text-pink-500 text-xs mt-1">{error?.email ?? '' }</div>
                    <div className="relative w-[300px]">
                      <input
                        id="id-b05"
                        type="email"
                        name="email"
                        placeholder="your name"
                        onChange={(e)=>onChangeHandler(e)}
                        value = {formData?.email ?? ''}
                        className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                      />
                      <label
                        htmlFor="id-b05"
                        className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                      >
                        Your email
                      </label>
               
                    </div>
                    <div className="text-pink-500 text-xs mt-1">{error?.mobile ?? '' }</div>
                    <div className="relative w-[300px]">
                      <input
                        id="id-b08"
                        type="mobile"
                        name="mobile"
                        placeholder="your Mobile"
                        onChange={(e)=>onChangeHandler(e)}
                        value = {formData?.mobile ?? ''}
                        className={`peer relative h-10 w-full rounded border ${error?.mobile !=="" ? 'border-pink-500 text-pink-500' : 'border-slate-200 text-slate-500'} px-4 text-sm placeholder-transparent outline-none transition-all autofill:bg-white focus:border-emerald-500 focus:outline-none invalid:border-pink-500 invalid:text-pink-500 invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}

                      />
                      <label
                        htmlFor="id-b08"
                        className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                      >
                        Your Mobile Number
                      </label>
               
                    </div>
                    <div className="text-pink-500 text-xs mt-1">{error?.message ?? '' }</div>
                    <div className="relative w-[300px]">
                      <textarea
                        id="id-b13"
                        name="message"
                        placeholder="your Message"
                        onChange={(e)=>onChangeHandler(e)}
                        value = {formData?.message ?? ''}
                        className={`peer relative h-10 w-full pt-3 rounded border ${error?.message !=="" ? 'border-pink-500 text-pink-500' : 'border-slate-200 text-slate-500'} px-4 text-sm placeholder-transparent outline-none transition-all autofill:bg-white focus:border-emerald-500 focus:outline-none invalid:border-pink-500 invalid:text-pink-500 invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
                      />
                      <label
                        htmlFor="id-b13"
                        className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                      >
                        Write about the course you Interested
                      </label>
                     
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <button disabled={loading} onClick={()=>saveData()} className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>{loading ? 'Saving...' : 'Submit'}</span>
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  )
}
