import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

//components
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Loader from "@/components/Loader";


import bannerStyles from "@/styles/Banner.module.css";


export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if(document !== undefined) {
      loading
          ? document?.querySelector("body").classList.add("loading")
          : document?.querySelector("body").classList.remove("loading");
    }


  }, [loading]);

  return (
      <LayoutGroup id={'home'}>
        <AnimatePresence>
          {loading ? (
              <motion.div key='loader'>
                <Loader setLoading={setLoading} />
              </motion.div>
          ) : (
              <>
                <Header />
                <Banner />
                {/*{!loading && (*/}
                {/*    // <div className='transition-image final'>*/}
                {/*    <div className={bannerStyles['transition-image final']}>*/}
                {/*      <motion.img*/}
                {/*          transition={{ ease: 'easeInOut', duration: 1.6 }}*/}
                {/*          // src={process.env.PUBLIC_URL + `/img_1.png`}*/}
                {/*          src={`/img_1.png`}*/}
                {/*          layoutId='main-image-1'*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*)}*/}
              </>
          )}
        </AnimatePresence>
      </LayoutGroup>
  );
}
