import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { getExcerpt } from "@/lib/getExcerpt";
import { findFirstImage } from "@/lib/findFirstImage";
import { dateFormatter } from "@/lib/dateFormatter";
import { Heading } from "./Heading";
import Link from "next/link";
export function ThreeColumnArticles({ articles }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {articles.map((article) => {
        const featuredImage =
          (prismic.isFilled.image(article.data.featuredImage) &&
            article.data.featuredImage) ||
          findFirstImage(article.data.slices);
      

        return (
          <div key={article.id} className="grid grid-cols-1 gap-3">
            <PrismicNextLink document={article} tabIndex="-1">
              <div className="aspect-h-3 aspect-w-4 relative bg-gray-100">
                {prismic.isFilled.image(featuredImage) && (
                  <PrismicNextImage
                    field={featuredImage}
                    fill={true}
                    className="object-cover"
                  />
                )}
              </div>
            </PrismicNextLink>
            <div className="p-4  text-center md:text-left" >
            {/* 标题 */}
            <h3 className="mb-2 text-xl font-semibold text-slate-800">
              <PrismicText field={article.data.title} />
            </h3>
            {/* 描述 */}
            <p className="mb-4 text-slate-600">
              <PrismicText field={article.data.description} />
            </p>
            {/* Learn more 链接 */}
            <Link
              href={`/articles/${article.uid}`}
              className="text-red-500 underline"
            >
              Learn more
            </Link>
          </div>
          </div>
        );
      })}
    </div>
  );
}