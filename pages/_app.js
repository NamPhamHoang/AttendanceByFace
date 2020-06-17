import App from 'next/app';
import Head from 'next/head';

import ReactGA from 'react-ga';
import i18n from './locale/i18n';

class MyApp extends App {

  componentDidMount() {

    // Google Analytics
    if (window.location.protocol == 'https:') {
      ReactGA.initialize('UA-144600342-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

    // Configurações Zendesk
    zE('webWidget', 'setLocale', i18n.language);
    zE('webWidget', 'updateSettings', {
      webWidget: {
        contactForm: {
          attachments: false
        }
      }
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>AttendaceByFace</title>
          <meta httpEquiv="content-language" content={i18n.language} />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta charSet="utf-8" />
          <meta name="description" content={i18n.t("meta_tag:description")} />
          <meta name="keywords" content={i18n.t("meta_tag:keywords")} />
          <meta name="robots" content="index,follow" />
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Anny De Crypto" />
          <meta property="og:description" content={i18n.t("meta_tag:description")} />
          <meta property="og:url" content="https://annydecrypto.com/" />
          <meta property="og:site_name" content="Anny De Crypto" />
          <meta property="og:image" content="https://annydecrypto.com/images/anny.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,600,700,900&display=swap" />
          <script type="text/javascript" id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=6e3baeef-8c2d-40e3-bbba-056efb4ad4ac" />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;