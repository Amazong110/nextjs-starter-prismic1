import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { getExcerpt } from "@/lib/getExcerpt";
import { findFirstImage } from "@/lib/findFirstImage";
import { dateFormatter } from "@/lib/dateFormatter";

import { Heading } from "./Heading";

export function Pagesecond({ secondPageMain }) {
  const featuredImage =
    (prismic.isFilled.image(secondPageMain.data.featuredImage) &&
    secondPageMain.data.featuredImage) ||
    findFirstImage(secondPageMain.data.slices);
  const excerpt = getExcerpt(secondPageMain.data.slices);
console.log("featuredImage", featuredImage);

  return (
<div className="flex flex-col md:flex-row px-8 py-8">
  <div className="ml-0  pt-20  md:ml-6 mr-4 md:mr-8 flex flex-col order-1 md:order-0 md:mt-0 md:items-start items-center py-4">
    <h2 style={{ 
      fontWeight: 'bold', 
      color: 'black', 
      fontSize: 'clamp(1.5em, 3vw, 1.8em)', 
      lineHeight: '1.2', 
      margin: '0 0 0.5em 0' 
    }}>{secondPageMain.data.title}</h2>
    {excerpt && (
      <p className="font-serif leading-relaxed text-base md:text-lg   md:order-0  md:mt-0 md:items-start items-center text-center md:text-left">
        {excerpt}
      </p>
    )}
    <button  style={{ 
      backgroundColor: 'red', 
      color: 'white', 
      border: 'none', 
      padding: '8px 16px', 
      cursor: 'pointer', 
      marginTop: '1em',
      width: 'auto'
    }}>find out more</button>
  </div>
  

  <div className="h-full w-full md:w-auto order-0 md:order-1 md:ml-auto">
    <PrismicNextLink>
      <div className="aspect-h-3 aspect-w-4 h-[500px] w-[500px] bg-gray-100 ">
        {prismic.isFilled.image(featuredImage) && (
          <PrismicNextImage
            field={featuredImage}
            fill={true}
            className="object-cover"
          />
        )}
      </div>
    </PrismicNextLink>
  </div>
</div>
 
  );
}
