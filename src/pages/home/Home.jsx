import React from 'react'
import './home.css'


export default function Home() {
  return (
      <div className='home-container'>
          <div className='home-profile'>
              <div className='photo-profile'>
                  <img src='public\IMG\lindsayLenardGhxX6TLxcqiUnsplashCopy2_2024-04-17\lindsayLenardGhxX6TLxcqiUnsplashCopy2.jpg' alt='profile'></img>
              </div>
              <h2 className='name-profile'> Hello! Ana</h2>
          </div>
          
          <div className='home-buttons'>
              <div className='scan-button'>
                  <span class="material-symbols-outlined">qr_code_scanner</span>
                  <h2>Scan</h2>
                  
              </div>
              <div className='search-button'>
                  <span class="material-symbols-outlined">search</span>
                  <h2>Search</h2>
                  
              </div>
              <div className='sos-button'>
                  <span class="material-symbols-outlined">sos</span>
                  <h2>SOS</h2>
                  
              </div>

              <div className='diary-button'>
                  <span class="material-symbols-outlined">menu_book</span>
                  <h2>Diary</h2>
                  
              </div>
          </div>
          

      
    </div>
  )
}
