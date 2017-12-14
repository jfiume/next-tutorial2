import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(import('./hello'))

const DynamicComponentWithCustomLoading = dynamic(
  import('./hello'),
  {
    loading: () => <p>...</p>
  }
)

const DynamicComponentWithNoSSR = dynamic(import('./hello'), {
  ssr: false
})

export default () =>
  <div>
    {/* <Header /> */}
    <DynamicComponentWithNoSSR />
    <p style={{color: 'white'}}>HOME PAGE is here!</p>
  </div>
