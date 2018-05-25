import React from 'react';
import s from './styles.css'

export function Remedy() {
  return <div>
    <p>
      Remedy hands down has the best coffee in knoxville in my not so humble opinion. I always get the cappuccino, but i'm sure they have other good selections. It's also right next door maker's donuts which has the best donuts, but they're only open thursday, friday and saturday morning. Apparently they spend a lot on their coffee and get it imported from chicago or something. Idk. Anyway, it's good. It's got a great atmosphere, not too quiet, not too loud, not to comfortable, not to uncomfortable. A reasonable number of outlets, but they could use more. Baristas are pretty friendly.
    </p>
    <img className={s.show} alt="Remedy Coffee Shop Interior" src={require('./remedy.png')} />
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.8700344734975!2d-83.92684048482671!3d35.974602780126865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c17cfa520ee09%3A0xcb251a7f0d60f4b4!2sRemedy+Coffee!5e0!3m2!1sen!2sus!4v1527204949858" width="400" height="300" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
  </div>
}
