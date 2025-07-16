import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Article } from "@/components/Article";
import { Pagesecond } from "@/components/Pagesecond";
import { ThreeColumnArticles } from "@/components/ThreeColumnArticles";
import { Therichtext } from "@/components/therichtext";
export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: prismic.asText(settings.data.name),
  };
}

export default async function Index() {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  const publicitys = await client.getAllByType("publicity", {

  });

  const secondPages = await client.getAllByType("secondPage", {

  });
  const richtexts = await client.getAllByType("richtext", {

  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
// 从publicitys数组中取出唯一的元素
const [publicity] = publicitys;
// 从secondPages数组中取出唯一的元素
const [secondPageindex] = secondPages;
// console.log(secondPageindex,'secondPageindexsecondPageindex');
const [richtext] = richtexts;

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
     
      {/* <Bounded size="widest">
        <ul className="grid grid-cols-1 gap-16">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </Bounded> */}
        <Bounded size="widest">
        <ThreeColumnArticles articles={articles} />

      </Bounded>
      <div className="bg-yellow-50 max-w-full px-8 py-8 justify-items-center content-center">
          {/* {publicitys.map((publicity) => ( */}
            <Article key={publicity.id} publicity={publicity} />
          {/* ))} */}
        </div>

        <div className=" max-w-full  justify-items-center content-center">
          {/* {publicitys.map((publicity) => ( */}
            <Pagesecond key={secondPageindex.id} secondPageMain={secondPageindex} />
          {/* ))} */}
        </div>
        <div className="bg-gray-100 max-w-full  justify-items-center content-center">
          {/* {publicitys.map((publicity) => ( */}
            {/* <Article key={publicity.id} publicity={publicity} /> */}
          {/* ))} */}
          <Therichtext key={secondPageindex.id} richtext={richtext} />
          
        </div>
    </Layout>
  );
}
