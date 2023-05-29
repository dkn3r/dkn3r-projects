import { getAllArticles } from '@/lib/getAllArticles';

const EXTERNAL_DATA_URL = 'https://irsyadnotes.com/articles';

function generateSiteMap(articles) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://irsyadnotes.com</loc>
     </url>
     <url>
       <loc>https://irsyadnotes.com/about</loc>
     </url>
     <url>
       <loc>https://irsyadnotes.com/articles</loc>
     </url>
     <url>
       <loc>https://irsyadnotes.com/projects</loc>
     </url>
     <url>
       <loc>https://irsyadnotes.com/sponsors</loc>
     </url>
     <url>
       <loc>https://irsyadnotes.com/uses</loc>
     </url>
     ${articles
         .map(({ slug }) => {
             return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${slug}`}</loc>
       </url>
     `;
         })
         .join('')}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const request = await getAllArticles();

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(request);

    res.setHeader('Content-Type', 'text/xml');

    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
