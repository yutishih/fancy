import './App.css';
import React from 'react'
import StickyHeader from './components/StickyHeader'
import Main from './components/Main'

export default function App() {
  return (
    <div className='fancy'>
      <StickyHeader />
      <Main />
    </div>
  )
}
