import type { NextPage } from 'next'
import Link from 'next/link'

// components
import Layout from '../src/components/structure/layout'
import Banner from '../src/components/Banner'
import ShowEntity from '../src/components/ShowEntity';
import CategoryTitle from '../src/components/CategoryTitle';
// models

// mockup
import MockupSlider from '../src/components/mockup/MockupSlider';
import {opera} from '../src/data/opere';
// import { LocalizedString } from '../src/mds_models/models';

// desktop: https://xd.adobe.com/spec/b23ca21e-1c69-432f-9654-d29e1244fdc1-e76f/screen/5d9f682b-5d00-47e1-bdb6-a0730a8d4666/specs/
// mobile: https://xd.adobe.com/spec/b23ca21e-1c69-432f-9654-d29e1244fdc1-e76f/screen/81419e7f-180d-4a57-a9e1-f485dfd884d0/specs/

const Show: NextPage = () => {

    const locale: string = 'IT';
    // const textLocalized = `text${locale}` as keyof typeof LocalizedString;
    // NOTE: da capire come mettere il locale dentro a opera.title[`text${locale}`]

    return (
        <Layout>
            {/* <Banner backgroundImg={opera.mainImg} label={opera.title[`text${locale}`]}/> */}
            <Banner backgroundImg={opera.mainImg} label={opera.title[`text${locale}`]}/>
            <div className="bg-grey-dark pb-10">
                <div className="container mx-auto px-4 xl:px-16">
                    <div className="md:hidden pb-10">
                        <div className="grid grid-cols-2 text-center text-white pb-10">
                            <div>
                                <i className="fal fa-search-plus cursor-pointer mr-2"></i> Locandina<br/>
                            </div>
                            <div>
                                <i className="fal fa-share-alt cursor-pointer mr-2"></i> Condividi<br/>
                            </div>
                        </div>
                        <CategoryTitle text="Opera"/>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:basis-6/12 text-white font-bold">
                            <h1 className="text-5xl lg:text-7xl font-times">{opera.composer}</h1>
                            <div className="font-gotham lg:text-xl">
                                <p className="mt-2">{opera.detail1.textIT}</p>
                                <p>{opera.detail2.textIT}</p>
                                <p>{opera.detail3.textIT}</p>
                            </div>
                        </div>
                        <div className="basis-12/12 lg:basis-3/12 text-white pt-5 lg:pt-2">
                            <div className="font-gotham text-lg">
                                {
                                    opera.entities.map((entity, k) => (
                                        <ShowEntity key={k} entityType={entity.title['textIT']} name={entity.name}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="lg:basis-3/12 float-right text-right hidden lg:block">
                            {/* copiato da CategoryTitle */}
                            <div className="px-6">
                                <h3 className="text-grey-light-fc text-4xl font-bold font-times">
                                    <Link href="/category">Opera</Link>
                                </h3>
                                <div className="w-1/4 md:w-1/3 h-1 bg-red float-right mt-1"></div><br/>
                                <div className="font-gotham text-white float-right">
                                    <table>
                                        <tr>
                                            <td><i className="fal fa-search-plus cursor-pointer mr-2"></i></td>
                                            <td>Locandina</td>
                                        </tr>
                                        <tr>
                                            <td><i className="fal fa-share-alt cursor-pointer mr-2"></i></td>
                                            <td>Condividi</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-10">
                <div className="container mx-auto px-4 xl:px-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="basis-full md:basis-6/12 text-white">
                            <h3 className="text-4xl font-times font-bold">Cast</h3>
                            <div className="font-gotham text-lg mt-5 w-1/2">
                                {
                                    opera.cast.map((entity, k) => (
                                        <ShowEntity key={k} entityType={entity.title['textIT']} name={entity.name}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="basis-full pt-5 lg:pt-0 md:basis-6/12 text-white opacity-[.65] xl:pr-40">
                            {opera.description['textIT']}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-grey-dark py-10">
                <div className="container mx-auto px-4 xl:px-16">
                    <CategoryTitle text="Suggeriti per te"/>
                    <MockupSlider/>
                </div>
            </div>
     </Layout>
  )
}

export default Show
