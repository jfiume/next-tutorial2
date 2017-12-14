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

// export default () =>
//   <div>
//     {/* <Header /> */}
//     <DynamicComponentWithNoSSR />
//     <p style={{color: 'white'}}>HOME PAGE is here!</p>
//   </div>


const HelloBundle = dynamic({
  modules: props => {
    const components ={
      Hello1: import('./hello'),
      Hello2: import('./hello')
    }

    // Add remove components based on props

    return components
  },
  render: (props, { Hello1, Hello2 }) =>
    <div>
      <h1>
        {props.title}
      </h1>
      <Hello1 />
      <Hello2 />
    </div>
})

export default () => <HelloBundle title="Dynamic Bundle" />
