import Image from 'next/image'
import React from 'react'

const Queue = ({ list }) => {
  return (
    <div className='w-full flex flex-col'>
        {
            list.map((item, index) => {
                return (
                    <div key={index} className="flex flex-row justify-start items-center w-fit">
                        <h1 className="text-lg font-bold">{index + 1}</h1>

                        <div className="text-sm flex justify-start items-center">
                            <Image src={item.snippet.thumbnails.default.url} width={120} height={90} className='mx-5' alt=''/>
                                <h3 className="font-bold w-1/2">{item.snippet.title}</h3>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Queue