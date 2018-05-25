import React from 'react';
import s from './styles.css'

export function OldCityJava() {
  return <div>
    <p>
      Old City Java is right near awaken, but I usually go to awaken. It's not open as long as awaken, and it has the negative parking effects. I haven't been here too many times, but I think the coffee was all right. It does have pretty cool outdoor seating. Inside seems too dark.
    </p>
    <img src={require('./old-city-java.png')} className={s.show} alt="Old City Java Interior" />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.055073723999!2d-83.9206226848268!3d35.97007898012793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c17cf0f69f4eb%3A0x8daad31f1c56b557!2sOld+City+Java!5e0!3m2!1sen!2sus!4v1527205829622" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
  </div>
}
