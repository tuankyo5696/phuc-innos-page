import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer className='container' style={{ padding: 40, color:'dark-gray',fontSize:'0.8rem' }}>
        <div key='1' className='footer__flexbox'>
          <div className='footer__about'>
            <div className='footer__address'>
              <h3 className='footer__heading' style={{fontSize:'1rem',fontWeight:'900', textTransform:'uppercase', color:'rgb(54, 156, 181)'}}>Contact</h3> <br/>
              <div className='footer__office' style={{color:'gray',textTransform:'uppercase'}}>
                <span className='footer__city'>
                  <h3 style={{fontSize:'0.8rem', fontWeight:'bold'}}>Head Office</h3>
                </span>
                <span className='footer__phone'>+84 28 3863 3636</span>
                <span className='footer__street'>573/12 Su Van Hanh, Ward 13, District 10.<br /> Ho Chi Minh City, 740715.<br /> VIETNAM</span>
              </div>
            </div>
            <div className='footer__address'>
              <div className='footer__office'>
                <span className='footer__street'></span>
              </div>
            </div>
          </div>
        </div>
        <div key='2' className='footer__copyright' style={{ marginTop: 0 }}>
          <div className='footer__copy-container'>
            <span className='footer__year' style={{color:'gray', fontSize:'0.7rem'}}>&copy; 2019 Innos Vietnam</span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
