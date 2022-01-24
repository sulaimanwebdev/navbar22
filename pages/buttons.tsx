import type { NextPage } from 'next'
import Button, { ButtonVariantTypes } from '../src/components/Button'


const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <div className='my-10'><Button variant={ButtonVariantTypes.big} text={'Bottone grande'} /></div>
      <div className='my-10'><Button variant={ButtonVariantTypes.primary} text={'Bottone primario'} /></div>
      <div className='my-10'><Button variant={ButtonVariantTypes.secondary} text={'Bottone secondario'} /></div>
    </div>

  )
}

export default Home
