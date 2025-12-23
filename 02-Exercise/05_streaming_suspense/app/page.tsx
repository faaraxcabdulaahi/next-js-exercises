import React, { Suspense } from 'react'
import SlowsDown from './slow/page'

const Home = () => {
  return (
    <div>
         <Suspense fallback={<div>loading</div>}>
          < SlowsDown/>
        </Suspense>
    </div>
  )
}

export default Home