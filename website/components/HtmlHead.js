import Head from 'next/head';
import Script from 'next/script';
import Router from "next/router";
const HtmlHead=({urlx,metaData,images})=>{
const base_url = process.env.NEXT_PUBLIC_BASEURL;

return(
        <Head>
         <title>{metaData && metaData.title ? metaData.title : "Vintage IT Academy"}</title>
         <link rel="icon" src="/assets/img/logo.svg" sizes="192x192"/>
         <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
         <meta name="description" content={metaData && metaData.description ? metaData.description : "The Vintage IT Academy, Tezpur At Vintage IT Academy, we empower students with skills that enable personal transformation, community impact, and global progress, making them future career-ready. Know More The Vintage IT Academy, Tezpur At Vintage IT Academy, we empower students with skills that enable personal transformation, community impact, and global progress, making them future"}/>
         <meta name="keywords" content={metaData && metaData.keywords ? metaData.keywords : "Vintage, IT, Academy"}/>
         <meta property="og:title" content={metaData && metaData.title ? metaData.title : "Vintage IT Academy"}/>
         <meta property="og:description" content={metaData && metaData.description ? metaData.description : "The Vintage IT Academy, Tezpur At Vintage IT Academy, we empower students with skills that enable personal transformation, community impact, and global progress, making them future career-ready. Know More The Vintage IT Academy, Tezpur At Vintage IT Academy, we empower students with skills that enable personal transformation, community impact, and global progress, making them future"}/>
         <meta property="og:locale" content="en_US" />
         <meta property="og:site_name" content={metaData && metaData.site_name ? metaData.site_name : "Vintage IT Academy - A Journey to Excellence."} />
         <meta property="og:image" content="/assets/img/logo.svg"/>
         <meta property="og:url" content={`${base_url}/${urlx}`}/>
         <link rel="canonical" href={`${base_url}/${urlx}`}/>
        </Head>
	)

}
export default HtmlHead;