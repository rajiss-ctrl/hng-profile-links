import React from 'react'
import Slack from '../images/slack.png';
import github from '../images/Icon.png';

const Main = () => {
  return (
    <main>
      <ul>
        <li><button><a id='twitter' href="https://twitter.com/RajiSanjo">Twitter Link</a></button></li>
        <li><a id='btn_zuri' href="https://training.zuri.team">Zuri Team</a></li>
        <li><a id='books' href="https://books.zuri.team">Zuri Books</a></li>
        <li><a id='book_python' href="https://training.zuri.team/python-for-beginners?ref_id=RajiSarafadeenSanjo">Python Books</a></li>
        <li><a id='pitch' href="https://background.zuri.team">Background Check for Coders</a></li>
        <li><a id='book_design' href="https://training.zuri.team/design-rules">Design Books</a></li>
      </ul>
      <div className="social-icons">
          <div className="wrap">
              <img src={Slack} alt="slack" className="slack" />
              <img src={github} alt="github" className="github" />
          </div>
      </div>
    </main>
  )
}

export default Main