import { PrismicText } from "@prismicio/react";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { Bounded } from "./Bounded";
import { components } from "@/slices";

export function Therichtext({ richtext }) {
  return (
    <Bounded>
      <div className="flex flex-col gap-6 mt-1 mb-1">
        {/* 标题区域 */}
        <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
          <PrismicText field={richtext.data.richtext} />
        </h2>

        {/* 文本内容区域 */}
        {prismic.isFilled.sliceZone(richtext.data.slices) && (
          <div className="font-serif leading-relaxed text-base md:text-lg">
            <SliceZone slices={richtext.data.slices} components={components} />
          </div>
        )}

      </div>
    </Bounded>
  );
}