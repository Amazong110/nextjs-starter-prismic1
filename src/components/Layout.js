import { Header } from "./Header";
import { Footer } from "./Footer";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
const NavItem = ({ children }) => {
  return (
    <li className="font-semibold tracking-tight text-slate-800">{children}</li>
  );
};
import Link from "next/link";
export function Layout({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}) {
  const profilePicture = settings?.data?.profilePicture;
  return (
    <div className="text-slate-700">
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', padding: "1rem", }}>
          <nav>
          <ul className="flex flex-wrap justify-end gap-10 md:justify-center"> {/* 移动端居中，桌面端右对齐 */}
            <NavItem>
              <Link href="/">
                <PrismicText field={navigation.data.homepageLabel} />
              </Link>
            </NavItem>
            {navigation.data?.links.map((item) => (
              <NavItem key={prismic.asText(item.label)}>
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </NavItem>
            ))}
          </ul>
        </nav>

          </div>
 

        
        {prismic.isFilled.image(profilePicture) && (
          <div style={{ height: '40rem',position: 'relative' }}> {/* 外层外壳，高度40px */}
            <div
              style={{
                margin: '0 auto', // 水平居中
                width: '100%',
                height: '100%',
                position: 'absolute', // 绝对定位
               objectFit: "cover"
              }}
            >
                   <PrismicNextImage
                  field={profilePicture}
                  fill={true}
                  sizes="100vw"
                  className="object-cover"
                  objectPosition="bottom" height="100%" 
                />
              <div style={{ paddingLeft: '2rem',  paddingBottom: '2rem', position: 'absolute', bottom: '0',zIndex: '999' }}> {/* 文本左对齐并添加底部内边距，定位在最下方 */}
                <div style={{ color: 'yellow', fontWeight: 'bold', fontSize: '1.5rem' }}>Suitable for 0-5 years</div>
                <div style={{ color: 'white', fontSize: '3rem' }}>Learning for babies and young children</div>
              </div>
                     {/* 添加阴影效果 */}
                     <div
                style={{
                  background: 'linear-gradient(180deg, transparent, #000 90%)',
                  bottom: '-52px',
                  content: '""',
                  height: '90%',
                  left: '50%',
                  position: 'absolute',
                  transform: 'translateX(-50%)',
                  width: '101vw'
                }}
              />
            </div>
          </div>
        )}
 

  
      <Header
        withProfile={withProfile}
        withDivider={withHeaderDivider}
        settings={settings}
      />
      <main>{children}</main>
<div style={{ backgroundColor: 'orange', padding: '1rem' }}>

  <Footer  navigations={navigation} />
</div>
    </div>
  );
}
