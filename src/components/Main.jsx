import React from 'react'
import Slack from '../images/slack.png';
import github from '../images/Icon.png';


const Main = () => {
  return (
    <main>
      <ul>
        <li><button><a id='twitter' href="https://twitter.com/RajiSanjo" target="_blank">Twitter Link</a></button></li>
        <li><button><a id='btn_zuri' href="https://training.zuri.team" target="_blank">Zuri Team</a></button></li>
        <li><button><a id='books' title='site to get best books about design and coding' target="_blank" href="https://books.zuri.team">Zuri Books</a></button></li>
        <li><button><a id='book_python' title='best siite to get books that teaches like you are a 5 years kid' target="_blank" href="https://training.zuri.team/python-for-beginners?ref_id=RajiSarafadeenSanjo">Python Books</a></button></li>
        <li><button><a id='pitch' href="https://background.zuri.team" target="_blank">Background Check for Coders</a></button></li>
        <li><button><a id='book_design' title='quality free design books from zuri'  target="_blank"href="https://training.zuri.team/design-rules">Design Books</a></button></li>
      </ul>
      <div className="social-icons">
          <div className="wrap">
              <img src={Slack} alt="slack" className="slack" />
              <a href="https://github.com/rajiss-ctrl" target="_blank"><img src={github} alt="github" className="github" /></a>
          </div>
      </div>
    </main>
  )
}

export default Main