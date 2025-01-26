// app/page.tsx
import axios from 'axios';
import { CustomNavbar } from '../components/Navbar';
import FirstSection from '@/components/FirstSection';
import LatestArticles from '@/components/LatestArticles';
import Featured from '@/components/Featured';

interface Article {
  title: string;
  description: string;
  url: string;
}

interface News {
  articles: Article[];
}

export default async function Home() {
  
  
  return(
    <>
    <CustomNavbar/>
    <FirstSection/>
    <LatestArticles/>
    <Featured/>
    <div className='h-screen'></div>
    </>
  )
}
