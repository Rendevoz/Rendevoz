import { useState } from 'react'
import './global.less'
import './common.less'
import logo from './assets/logo.png'
import intro1 from './assets/intro-one.png'
import editor_intro from './assets/editor-intro.png'
import pdf_intro from './assets/pdf-intro.png'

function App() {

  return (
    <div className='container'>
      <div className='header'>
        <img className='logo' src={logo}/>
        <div className='header-toolbar'>
          <a href='https://rendevoz.github.io/Reditor'>Editor demo</a>
          <a href='https://github.com/Rendevoz/Rendevoz'>Github</a>
        </div>
      </div>
      <div className='content-wrapper'>
          <div className='heading-one'>Your Private Knowledge base</div>
          <div className='heading-two'>Give you best experience of reading & noting.</div>
          <div className='desc'>Current version: Alpha 0.0.1 (Unstable)</div>
          <a href='https://github.com/Rendevoz/Rendevoz'>Check it out on Github.</a>
      </div>
      <div className='content-wrapper-rtl'>
        <div>
          <div className='heading-one'>Amazing editor experience</div>
          <div style={{marginBottom: 30}} className='heading-two'>Organize your ideas freely</div>
          <a href='https://rendevoz.github.io/Reditor' >Try editor online.</a>
        </div>
        <div className='img-wrapper' style={{marginRight: 50}}>
          <img className='intro' src={editor_intro}/>
        </div>
      </div>
      <div className='content-wrapper-flex'>
        <div>
          <div className='heading-one'>What about read & note together?</div>
          <div style={{marginBottom: 30}} className='heading-two'>Take down your thoughts right now</div>
          <a style={{fontSize: 20}} href='https://github.com/Rendevoz/Rendevoz'>Check it out on Github.</a>
        </div>
        <div className='img-wrapper' style={{marginLeft: 50}}>
          <img className='intro' src={pdf_intro}/>
        </div>
      </div>
      <div className='content-wrapper-center'>
        <div className='heading-one'>Meet Rendevoz right now</div>
        <div className='desc'>If you are interested in this project,support is appreciated!  (UI/UX Design,Program development,Localiztion,etc)</div>
        <a style={{fontSize: 20}} href='https://github.com/Rendevoz/Rendevoz'>Check it out on Github.</a>
      </div>
    </div>
  )
}

export default App
