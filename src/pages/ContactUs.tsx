import { Button } from "../components/button/Button"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { TextInput } from "../components/textInput/TextInput";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(e.target.value)
    }

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
    }

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }

    const notify = () => {
        if(name === "" || email === "" || subject === "" || phone === "" || message === "") {
            toast.error("Please fill all the fields")
            return
        }

        toast.success("Message sent successfully")
    }

    return (
        <>
        <ToastContainer position="bottom-right" />
            <section className="xl:h-dvh h-auto font-proyect py-32 28 px-4 sm:px-0 md:py-36 w-full mx-auto container transition duration-300">
                <div className="flex xl:flex-row xl:drop-shadow-md xl:gap-0 gap-8 flex-col-reverse items-center w-full h-full rounded-2xl">
                    <div className="basis-1/4 bg-red-800 text-white w-full h-full p-4 flex flex-col xl:rounded-none xl:rounded-bl-xl xl:rounded-ss-xl rounded-xl">
                        <p className="font-bold text-2xl mb-4 font-text">Contact info</p>
                    
                        <div className="flex flex-col gap-2 font-text">
                            <div className="flex gap-4 items-center">
                                <span className='bg-white text-red-800 rounded-full p-1'>
                                    <CallIcon/>
                                </span>
                                <p>443-515-8706</p>
                                <p>443-420-2438</p>
                            </div>

                            <div className="flex gap-4 items-center font-text">
                                <span className='bg-white text-red-800 rounded-full p-1'>
                                    <EmailIcon/>
                                </span>
                                <p>medranojosee1982@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 xl:drop-shadow-none drop-shadow-md bg-white w-full h-full p-4 flex flex-col xl:rounded-br-xl xl:rounded-e-xl xl:rounded-none rounded-md">
                        <p className="font-bold text-4xl mb-1">Send us a message</p>
                        <p className="text-gray-600 font-text text-lg">Feel free to call us at our phone number, or write to us through our contact form below.</p>
                        <hr className="border-t-1 border-gray-300 my-4" />

                        <div className="flex flex-col justify-between h-full">
                            <div className="flex flex-col gap-6 py-2">
                                <div className='flex gap-4 sm:flex-row flex-col'>
                                    <TextInput type="input" label="Name" value={name} onChange={handleName} />
                                    <TextInput type="input" label="E-mail" value={email} onChange={handleEmail} />
                                </div>
                                <div className='flex gap-4 sm:flex-row flex-col'>
                                    <TextInput type="input" label="Subject" value={subject} onChange={handleSubject} />
                                    <TextInput type="input" label="Phone number" value={phone} onChange={handlePhone} />
                                </div>
                                <TextInput type="textarea" label="Message" value={message} onChange={handleMessage} />

                            </div>
                            
                            <div className="w-full flex flex-col justify-end">
                                <hr className="border-t-1 border-gray-300 my-4" />
                                <div className='flex w-full justify-end'>
                                    <Button props={{label: "Enviar mensaje", onClick: notify, styles: "py-4", type: "primary"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}