import '@/styles/globals.css'
import "@/styles/sass/main.scss";

import { LayoutGroup, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import "@/styles/sass/main.scss";
import React, {useEffect, useRef} from 'react'

import type { AppProps } from 'next/app'



export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}
