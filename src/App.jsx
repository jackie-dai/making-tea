import { useState } from 'react'
import './App.css'

import TextBlock from './components/textBlock'

function App() {

  return (
    <div>
      <h1 className="title">How to Make Tea</h1>
      <p className="blackText">Jackie Dai - Art 23AC</p>
      <TextBlock title="Intro" text="Today you'll learn you how to make a hot cup of tea. Take this time to relax and breathe. Forget about everything going on around you, all that matters is that you are here in this moment."></TextBlock>
      <TextBlock title="Preparing your water" text="First let's prepare the hot water. Grab a kettle and fill it with water to your desired amount."></TextBlock>
      <TextBlock title="Boiling the water" text="Press the start button located on your kettle to start boiling the water"></TextBlock>
      <TextBlock title="Preparing the tea leaves" text="Measure out the desired amount of dry tea leaves. It is generally recommended to use one teaspoon of tea leaves for every 6 ounces of water. This equates to one cup of tea"></TextBlock>
      <TextBlock title="Pour hot water" text="Once your water has finished boiling. Carefully pour your hot water into the teapot”"></TextBlock>
      <TextBlock title="Steeping" text="Now sit back and let the tea steep. Each tea has a different steeping point but if you you're feeling too lazy, just set a timer for 4 minutes"></TextBlock>
      <TextBlock title="Enjoy your tea" text="Carefully pour a cup of tea for yourself. Take your tea back to your desk or take the time to enjoy your cup of tea in this moment"></TextBlock>
    </div>
  )
}

export default App
