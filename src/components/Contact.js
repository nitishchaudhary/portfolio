import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/c630abc9-564e-48b5-bf04-c3405e1b48b9" autoComplete='off' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 font-medium tracking-wide'>// Submit to contact or leave a mail</p>
            </div>
            <input className='bg-transparent border-[1px] rounded-sm border-blue-200 p-[10px] text-md tracking-wide outline-none text-gray-100 ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-[10px] bg-transparent border-[1px] rounded-sm border-blue-200 text-md tracking-wide outline-none text-gray-100' type="text" placeholder='Email' name='email' />
            <textarea className='bg-transparent border-[1px] rounded-sm border-blue-200 p-[10px] text-md tracking-wide outline-none text-gray-100' name='message' rows='10' placeholder="Enter message"></textarea>
            <button className='text-white text-lg tracking-wide border-2 hover:bg-pink-600 hover:font-medium hover:border-pink-600 px-4 py-3 my-6 mx-auto flex items-center duration-150'>Lets connect</button>
        </form>
    </div>
  )
}

export default Contact