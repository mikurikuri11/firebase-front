"use client";
import { getHello } from '@/features/login/api/getHello';

const Button = () => {
  return (
    <div>
      <button
        onClick={async () => {
          const res = await getHello()
          console.log(res)
        }}
        type="button"
        className="rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Login
      </button>
    </div>
  )
}

export default Button
