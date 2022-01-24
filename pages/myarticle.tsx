import type { NextPage } from 'next'

import Layout from '../src/components/structure/layout'
import CategoryTitle from '../src/components/CategoryTitle'
import Banner from '../src/components/Banner'


// https://xd.adobe.com/spec/b23ca21e-1c69-432f-9654-d29e1244fdc1-e76f/screen/2ff55dad-48c2-40bb-8d2e-dbe7c6fb479f/specs/
// NOTE: NON USARE prose ma usare text-xl ecc ecc

const Home: NextPage = () => {

    let bannerImg : string = 'https://static.teatroallascala.org/static/upload/syl/sylvia---martina-arduino-claudio-coviello---ph-brescia-e-amisano--teatro-alla-scala.jpg';

    return (
        <Layout>
            <Banner backgroundImg={bannerImg} label="Titolo dell&apos;opera"/>
            <div className="container mx-autopx-4 xl:px-16">
                <article className="max-w-full prose md:prose-lg">
                    <h1>Titolo della pagina</h1>
                    <h2>Sottotitolo</h2>
                    <p className="font-bold leading-tight">Testo in evidenza: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                    <h3>Titoletto</h3>
                    <p className="opacity-50 leading-tight">Bodycopy: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
                </article>

                <CategoryTitle text="Titolo categoria"/>
            </div>
         </Layout>
  )
}

export default Home
