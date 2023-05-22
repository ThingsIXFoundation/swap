import Swapper from '@/app/swapper'
import Image from 'next/image'

const Environment = () => {
  if (process.env.NODE_ENV == 'production') return <></>

  return (
    <div className="bg-orange-700 text-sm px-3 py-0.5 rounded text-white">
      This is a testing environment!
    </div>
  )
}

const Page = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full flex flex-col h-16 items-center justify-center bg-black bg-opacity-70 text-white">
        <Image
          src="/thingsix-logo.svg"
          alt="Vercel Logo"
          width={140}
          height={20}
        />
      </div>

      <div className="flex flex-col space-y-6 -mt-6 items-center">
        <Environment />
        <Swapper />
      </div>
    </>
  )
}

export default Page
