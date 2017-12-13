import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

export default () =>
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0" width="device-width" key="viewport" />
    </Head>
    <Head>
      <meta name="viewport" content="inital-scale=1.2" width="device-width" key="viewport"></meta>
    </Head>
    <div>
      Click <span onClick={handler}>here</span> to read more
    </div>
  </div>


const handler = () =>
  Router.push({
    pathname: '/about',
    query: { name: 'Zeit' }
  })

Router.onRouteChangeStart = url => {
  console.log('App is changing to: ', url);
}

Router.onRouteChangeError = (err, url) => {
  if (err.cancelled) {
    console.log(`Route to ${url} was cancelled`);
  }
}

Router.onAppUpdated = nextUrl => {
  // persist the local state
  location.href = nextUrl
}

const href = '/?counter=10'
const as = href
Router.push(href, as, { shallow: true })

// componentWillReceiveProps(nextProps) {
//   const { pathname, query } = nextProps.url
//   // fetch data based on the new query
// }
