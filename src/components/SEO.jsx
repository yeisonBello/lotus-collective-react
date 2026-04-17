import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type }) {
  const siteName = "Lotus Collective";
  const defaultTitle = siteName;
  const canonicalUrl = "https://www.lotuscollective.com";
  
  // Format the title. If we have a page title, append sitename 
  const formattedTitle = title ? `${title} | ${siteName}` : defaultTitle;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{formattedTitle}</title>
      <meta name='description' content={description} />
      {/* End standard metadata tags */}
      
      {/* Facebook tags */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      {/* End Facebook tags */}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
