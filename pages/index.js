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
      Click <span onClick={() => Router.push('/about')}>here</span> to read more
    </div>
  </div>
