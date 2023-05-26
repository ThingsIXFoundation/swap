import Swapper from '@/app/swapper'
import Image from 'next/image'

const Environment = () => {
  if (process.env.NODE_ENV == 'production') return <></>

  return (
    <div className="bg-orange-700 text-xs px-2 pb-0.5 mt-0.5 rounded-sm text-white">
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
        <Environment />
      </div>

      <div className="flex flex-col -mt-6 items-center">
        <a
          href="https://app.thingsix.com/"
          className="hover:bg-zinc-500 bg-zinc-600 text-white text-sm px-2.5 py-0.5 rounded mb-5 mt-3"
        >
          Back to the Dashboard
        </a>
        <Swapper />
      </div>
    </>
  )
}

export default Page
