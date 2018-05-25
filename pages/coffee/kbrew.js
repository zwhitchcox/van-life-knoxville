import React from 'react';
import s from './styles.css'

export function KBrew() {
  return <div>
    <p>
      K Brew has the best environment in knoxville, imo. They have cool hammock swings, which I never use. And they've got a big table where everyone can sit, or there's individual/couple tables, and big comfy sofas with coffee tables. It's got a lot of cool design features like garage doors that have a bunch of windows, and overall just feels cool. I think they have the second best coffee next to remedy. This is the only coffee shop I think were chairs at the table has cushions. That alone is enough to rank it number one. Seems like a simple thing, but it has a huge effect subconsciously.
    </p>
    <img src={require('./kbrew.png')} className={s.show} alt="K Brew Coffee Interior" />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.4914466588075!2d-83.92239174264327!3d35.98385688107084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c162e1c6a1283%3A0x5ed2e2df9f5f03fc!2sK+Brew!5e0!3m2!1sen!2sus!4v1527204755002" width="400" height="300" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
    
  </div>
}
