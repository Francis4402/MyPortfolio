import { useRef, useState} from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser";
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import LottiePi from "./LottiePi.jsx";

//template_5ize5gd
//gmail
//8AO4DZ7BTCpqQcB76

// <form
//     ref={formRef}
//     onSubmit={handleSubmit}
//     className='mt-12 flex flex-col gap-8'
// >
//
//   <label className='flex flex-col'>
//     <span className='text-white font-medium mb-4'>Your Name</span>
//     <input
//         type='text'
//         name='name'
//         value={form.name}
//         onChange={handleChange}
//         placeholder="What's your good name?"
//         className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//     />
//   </label>
//

//

//

// </form>
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'gmail',
        'template_5ize5gd',
        {
          from_name: form.name,
          to_name: 'Francis',
          from_email: form.email,
          message: form.message,
        },
        '8AO4DZ7BTCpqQcB76'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="justify-center flex">
      <div className="container max-w-6xl">
        <div className="grid lg:flex justify-between gap-10 items-center">

          <motion.div>
            <LottiePi />
          </motion.div>

          <motion.div>
            <div className="max-w-5xl bg-black-100 p-8 rounded-2xl">

              <p className={styles.sectionSubText}>Get in touch</p>
              <h3 className={styles.sectionHeadText}>Contact.</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="gap-8 grid mt-12">
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Your Name</span>
                  <input
                      type='text'
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      className='w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>

                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Your email</span>
                  <input
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your web address?"
                      className='w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Your Message</span>
                  <textarea
                      rows={7}
                      name='message'
                      value={form.message}
                      onChange={handleChange}
                      placeholder='What you want to say?'
                      className='w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>

                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type:"spring", damping: 7, stiffness: 400}}
                               type='submit'
                               className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                >
                  {loading ? "Sending..." : "Send"}
                </motion.button>
              </form>

            </div>
          </motion.div>


        </div>
      </div>
    </div>
  );
};


export default SectionWrapper(Contact, "contact");