import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-48 lg:my-14 px:-5"> 
      <div className="col-span-12 bg-white lg:col-span-3 rounded-2x1">Sidebar</div>
        <div className="col-span-12 bg-white lg:col-span-9 rounded-2x1">
          <Component {...pageProps} />
        </div>
    </div>
  )
}
