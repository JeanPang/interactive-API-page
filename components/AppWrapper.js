import Router from 'next/router';
import Head from 'next/head'
import NProgress from 'nprogress';
import { MY_SEO } from '../config';

function AppWrapper(props) {
  Router.events.on('routeChangeStart', url => {
    // console.log(`Loading: ${url}`)
    NProgress.start()
  })
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())
  
  return (
  <div>
    <Head>
      <title>JeanPang's Project</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        key="description"
        name="description"
        content={MY_SEO.description}
      />
      <meta
        key="og:type"
        name="og:type"
        content={MY_SEO.openGraph.type}
      />
      <meta
        key="og:title"
        name="og:title"
        content={MY_SEO.openGraph.title}
      />
      <meta
        key="og:description"
        name="og:description"
        content={MY_SEO.openGraph.description}
      />
      <meta
        key="og:url"
        name="og:url"
        content={MY_SEO.openGraph.url}
      />
      <meta
        key="og:image"
        name="og:image"
        content={MY_SEO.openGraph.image}
      />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
    {props.children}
  </div>
  )
}

export default AppWrapper;
