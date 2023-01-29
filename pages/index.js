
import { Inter } from '@next/font/google'
import { BreadCrumbs,  Hero } from '@components/ui/common'
import { EthRates, WalletBar } from '@components/ui/web3'
import { CourseList } from '@components/ui/course'
import { OrderCard } from '@components/ui/order'
import BaseLayout from '@components/ui/layout/base'
import { getAllCourses } from '@components/content/courses/fetcher'

const inter = Inter({ subsets: ['latin'] })

export default function Home({courses}) {
  return (
    
    <>
              <Hero></Hero>
            <CourseList courses={courses}></CourseList>
    </>
  )
}

export function getStaticProps(){
  const {data}=getAllCourses()
  return{
    props:{
      courses:data
    }
  }
}

Home.LayOut = BaseLayout