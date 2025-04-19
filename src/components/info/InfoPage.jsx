import React from 'react'
import { FaDiagramSuccessor, FaPersonDotsFromLine, FaTv } from 'react-icons/fa6'
import { MdVerified } from 'react-icons/md'

const InfoPage = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-2 mt-10 mb-5'>
        <div className="flex-col sm:flex sm:flex-row  space-y-4 items-center justify-between">
            <div className="rounded-lg px-8 py-4 flex items-center space-x-10 bg-yellow-100">
            <FaTv className='text-7xl text-yellow-500'/>
            <div>
                <h2 className='text-2xl font-bold '>1.3k</h2>
                <p className='capitalize text-lg'>Primary Question</p>
            </div>
            </div>
            <div className="rounded-lg px-6 py-4 flex items-center  space-x-10 bg-gray-100">
            <FaPersonDotsFromLine  className='text-7xl text-gray-500'/>
            <div>
                <h2 className='text-2xl font-bold '>1.8k</h2>
                <p className='capitalize text-lg'>Intermediate Question</p>
            </div>
            </div>
            <div className="rounded-lg px-6 py-4 flex items-center space-x-10 bg-purple-100">
            <FaTv className='text-7xl text-purple-500'/>
            <div>
                <h2 className='text-2xl font-bold '>1.0k</h2>
                <p className='capitalize text-lg'>Revision Note</p>
            </div>
            </div>
            <div className="rounded-lg px-6 py-4 flex items-center space-x-10 bg-green-100">
            <MdVerified className='text-7xl text-green-500'/>
            <div>
                <h2 className='text-2xl font-bold '>0.1k</h2>
                <p className='capitalize text-lg'>User Community</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default InfoPage