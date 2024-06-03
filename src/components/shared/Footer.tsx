import React from 'react'

function Footer() {
  return (
    <footer className='py-3 px-4 bg-slate-800 text-white text-center text-sm'>
      Shopping web-app copyright &copy; {new Date().getFullYear()}
    </footer>
  )
}

export default Footer