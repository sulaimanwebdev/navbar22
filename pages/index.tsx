import type { NextPage } from 'next'

import Layout from '../src/components/structure/layout'

import CategoryTitle from '../src/components/CategoryTitle'
import Banner from '../src/components/Banner'
// mockup
import MockupSlider from '../src/components/mockup/MockupSlider';


// https://xd.adobe.com/spec/b23ca21e-1c69-432f-9654-d29e1244fdc1-e76f/screen/18668284-f2aa-4ab7-a4d5-10961ea21193/specs/

const Home: NextPage = () => {

    let bannerImg : string = 'https://static.teatroallascala.org/static/upload/syl/sylvia---martina-arduino-claudio-coviello---ph-brescia-e-amisano--teatro-alla-scala.jpg';

    return (
        <Layout>
            <Banner backgroundImg={bannerImg} label="Titolo dell&apos;opera"/>

            <div className="bg-grey-dark pb-20">
                <div className="container mx-auto px-4 xl:px-16">

                    <CategoryTitle text="Opera"/>
                    <div className="block h-[450px]">
                        <MockupSlider/>
                    </div>

                    <CategoryTitle text="Opera"/>
                    <div className="block h-[450px]">
                        <MockupSlider/>
                    </div>

{/* 
                    <CategoryTitle text="Balletto"/>
                    <div className="block h-[500px]">
                        <MockupSlider/>
                    </div>

                    <CategoryTitle text="Concerti"/>
                    <div className="block h-[500px]">
                        <MockupSlider/>
                    </div> */}
                </div>
            </div>

     </Layout>
  )
}

export default Home
