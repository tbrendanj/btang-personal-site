'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchHome } from '../utils/fetchHome';
// import Image from 'next/image';
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function HomePage() {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<Array<BlocksContent>>([]);
  // const [image, setImage] = useState<Object>({});
  useEffect(() => {
    const fetchHomePageData = async () => {
      const { data } = await fetchHome();
      console.log(data);
      setTitle(data.Title);
      setText(data.text);
      // setImage(data.image);
    };
    fetchHomePageData();
  }, []);
  return (
    <>
      <div>{title}</div>
      <div>
        <BlocksRenderer content={text} />
      </div>
      {/* <div>{text}</div>
    <Image
      width={500}
      src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image}`}
    /> */}
    </>
  );
}
