import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function SEO({ title, image = "" }) {
  const projectName = "Drifty";
  const { t } = useTranslation("common");
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0"
      />
      <meta charSet="utf-8" />
      <title>{t(title) || projectName}</title>
      <meta name="description" content="Next js" />
      <meta
        name="keywords"
        content="Fikr, kurslar, islom, Abdukarim Mirzayev, tashkent"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || projectName} key="ogtitle" />
      <meta property="og:description" content="Next js" key="ogdesc" />
      <meta
        property="og:site_name"
        content={title || projectName}
        key="ogsitename"
      />
      <meta property="og:image" content={image || "/logo.png"} key="ogimage" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || projectName} />
      <meta name="twitter:description" content="Next js" />
      <meta name="twitter:site" content={title || projectName} />
      <meta name="twitter:creator" content="Abdukarim Mirzayev" />
      <meta name="twitter:image" content="/logo.png" />

      <link rel="icon" href="/d.png" />
    </Head>
  );
}
