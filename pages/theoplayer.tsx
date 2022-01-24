import type { NextPage } from 'next'

import Layout from '../src/components/structure/layout'


// https://xd.adobe.com/spec/b23ca21e-1c69-432f-9654-d29e1244fdc1-e76f/screen/2ff55dad-48c2-40bb-8d2e-dbe7c6fb479f/specs/

const Home: NextPage = () => {

    // let mysvg : string = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='120px'><text x='0' y='15' fill='red' font-size='20'>I love SVG!</text></svg>";
    let url: string = "https://cdn.myth.theoplayer.com/aaee4cd7-ec23-4f32-8858-344d59b5d9c1/theoiframe.html";

    return (
        <Layout>
            <div className="h-screen p-10 bg-grey-dark">
                <iframe src={url} title="Embedded THEOplayer" scrolling="no" width="100%" height="100%"></iframe>
            </div>
         </Layout>
  )
}

export default Home
