import type { NextPage } from 'next'
import Head from 'next/head'
import {getData} from '../lib/getData'
const Home: NextPage = () => {
  return (
    <div className="container flex flex-col flex-wrap">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full ">
        <h1 className='text-2xl'>ikalanga dictionary</h1> 

          <div className=''>
            <input className='border border-gray-600 py-2 px-4 rounded ' 
              name='search' type='search' placeholder='search' />
            <input className='border border-gray-600 py-2 px-4 rounded hover:bg-gray-600 hover:text-white hover:border-transparent'
              type='submit' value="search" />
          </div>

          <div className=''>
            <h2>add a suggestion</h2>
            <label htmlFor='word'>word</label>
            <input className='border border-gray-600 py-2 px-4 rounded'
              type="text" name='word' placeholder="word" />
            <label htmlFor="description"></label>
            <textarea className='border border-gray-600 rounded' id="description" >

            </textarea>

            <input className='border border-gray-600 py-2 px-4 rounded hover:bg-gray-600 hover:text-white hover:border-transparent' type='submit' value="add word" />
            </div>

        </main>
      

    </div>
  )
}

export default Home

export async function getStaticProps(){
    const data = await getData("words/") 
    return { props : { data } };

}
