import type { NextPage } from 'next'

import Layout from '../src/components/structure/layout'
import CategoryTitle from '../src/components/CategoryTitle'
import Card from '../src/components/Card'
import Slider from 'react-slick'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// https://xd.adobe.com/spec/b23ca21e-1c69-432f-9654-d29e1244fdc1-e76f/screen/2ff55dad-48c2-40bb-8d2e-dbe7c6fb479f/specs/

const Home: NextPage = () => {

    return (
        <Layout>
            <div className="bg-grey-dark py-20">
                <div className="container mx-auto px-4 xl:px-16">

                    <h1 className="text-6xl font-bold font-times text-white mb-10 md:pl-40">Opera</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <div><Card/></div>
                        <div><Card/></div>
                        <div><Card/></div>
                        <div><Card/></div>
                        
                        <div><Card/></div>
                        <div><Card/></div>
                        <div><Card/></div>
                        <div><Card/></div>
                    </div>
                </div>
            </div>
         </Layout>
  )
}

export default Home
