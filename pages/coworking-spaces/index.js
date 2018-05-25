import React from 'react'

import { Regus } from './regus';
import { TechCooperative } from './tech-cooperative';
import Layout from '../../components/Layout'
import Link from '../../components/Link';
import { Upstart } from './upstart';
import s from './styles.css'

const titles = {
  ["tech-co"]: 'Tech Cooperative',
  ["regus"]: 'Regus',
  upstart: 'Upstart',
  ["coworking-spaces"]: 'Coworking Spaces',
}
const components = {
  ["tech-co"]: TechCooperative,
  ["regus"]: Regus,
  upstart: Upstart,
  ["coworking-spaces"]: ()=><div></div>,
}

class CoworkingSpaces extends React.Component {
  componentDidMount() {
    const path = this.getPath()
    document.title = titles[path]
  }

  getPath() {
    const { pathname } = location
    return pathname.substr(pathname.lastIndexOf('/') + 1)
  }

  render() {
    const path = this.getPath()
    const title = titles[path]

    return (
      <Layout className={s.content}>
        <h1>{title}</h1>
        <p>
          Ok, so the pickins' are pretty slim here, but there is one good option. The others sort of have stuff wrong with them. These places are really hard to find, and I didn't see them on any coworking space websites. I had to hear through the grape vine.
        </p>
        <div>
          <div><Link to="/coworking-spaces/tech-co">Tech Co</Link></div>
          <div><Link to="/coworking-spaces/regus">Regus</Link></div>
          <div><Link to="/coworking-spaces/upstart">Upstart Knoxville</Link></div>
        </div>
        <br />
        {React.createElement(components[path])}
      </Layout>
    )
  }

}

export default CoworkingSpaces
