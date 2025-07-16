import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { getExcerpt } from "@/lib/getExcerpt";
import { findFirstImage } from "@/lib/findFirstImage";
import { dateFormatter } from "@/lib/dateFormatter";

import { Heading } from "./Heading";

export function Article({ publicity }) {
  const featuredImage =
    (prismic.isFilled.image(publicity.data.featuredImage) &&
    publicity.data.featuredImage) ||
    findFirstImage(publicity.data.slices);
  const excerpt = getExcerpt(publicity.data.slices);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="h-full w-full md:w-auto">
        <PrismicNextLink>
          <div className="aspect-h-3 aspect-w-4 h-[500px] w-[500px] bg-gray-100">
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
  
      <div className="ml-0 md:ml-6 flex flex-col mt-4 md:mt-0 flex-1 pt-20 md:items-start items-center">
        <h2 style={{ 
          fontWeight: 'bold', 
          color: 'black', 
          fontSize: 'clamp(1.5em, 3vw, 1.8em)', 
          lineHeight: '1.2', 
          margin: '0 0 0.5em 0' 
        }}>{publicity.data.meta_title}</h2>
        {excerpt && (
          <p className="font-serif leading-relaxed text-base md:text-lg md:leading-relaxed mb-0">
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
          width: 'auto'  // 宽度设为自适应内容，使其变短
        }}>find out more</button>
      </div>
      
    </div>
 
  );
}
