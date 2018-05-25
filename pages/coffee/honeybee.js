import React from 'react';
import s from './styles.css'

export function Honeybee() {
  return <div>
    <p>
      Honeybee is my 4th favorite, but it's about tied with wild love. Wild love just has a little better atmosphere. A lot of the chairs don't have cushions, especially the ones with the tables. Bring your own cushion, or use your laptop case like I do. Coffee is pretty good, and it's got a lot of windows which keeps it nice and bright, but there's still no glare on your laptop. Baristas are moderately friendly. Idk, I kind of get the feeling they want to run me out if I stay for very long. Kind of makes me less likely to go.
    </p>
    <img src={require('./honeybee.png')} className={s.show} alt="Honeybee Coffee Interior" />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51664.88452188763!2d-83.9534535021949!3d35.97007387285444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c17bfda95bbcd%3A0x859049a49101e98e!2sHoneybee+Coffee!5e0!3m2!1sen!2sus!4v1527205897939" width="400" height="300" frameBorder="0" style={{border:0}} allowFullScreen></iframe>

  </div>
}
