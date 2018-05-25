import React from 'react';
import s from './styles.css';

export function WildLove() {
  return <div>
    <p>
      Wild Love has a good atmosphere. Their espresso is terrible (IMO), get their black coffee. Bring a cushion to sit on. I personally use my laptop case as a cushion. But the seats don't have any cusion, and it can be uncomfortable over time. It's nice and bright inside, and you can usually get an outlet seat. Pretty good vibe.
    </p>
    <img src={require('./wildlove.png')} className={s.show} alt="Wild Love Coffee Interior" />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.426918702891!2d-83.93667308482631!3d35.98543398012445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c3d87335d01fb%3A0xd1c204c6ee135ed9!2sWild+Love+Bakehouse!5e0!3m2!1sen!2sus!4v1527205718384"
      width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>


  </div>
}
