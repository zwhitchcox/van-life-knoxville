import React from 'react'

import { Awaken } from './awaken';
import { Honeybee } from './honeybee';
import { KBrew } from './kbrew';
import { OldCityJava } from './old-city-java';
import { Remedy } from './remedy';
import { WildLove } from './wildlove';
import Layout from '../../components/Layout'
import Link from '../../components/Link';
import s from './styles.css'

const titles = {
  ["honeybee"]: 'Honeybee',
  ["wild-love"]: 'Wild Love',
  ["k-brew"]: 'K Brew',
  ["awaken"]: 'Awaken',
  ["old-city-java"]: 'Old City Java',
  ["remedy"]: 'Remedy',
  coffee: 'Coffee Shops Knoxville',
}
const components = {
  ["honeybee"]: Honeybee,
  ["wild-love"]: WildLove,
  ["k-brew"]: KBrew,
  ["awaken"]: Awaken,
  ["old-city-java"]: OldCityJava,
  ["remedy"]: Remedy,
  coffee: ()=><div></div>
}

class Coffee extends React.Component {

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
        <div>
          Maybe I'm making assumptions here, but i think most urban van lifers are probably digitally nomadic and thereby spend a lot of their time in coffee shops. I guess if this is irrelevant to you, you can just skip this, but I'm going to go ahead and leave it in. The following are in order from my least favorite to most favoritest, but they're all good.
        </div>
        <div>
          <div><Link to="/coffee/k-brew">#1 K Brew</Link></div>
          <div><Link to="/coffee/remedy">#2 Remedy</Link></div>
          <div><Link to="/coffee/wild-love">#3-4 Wild Love</Link></div>
          <div><Link to="/coffee/honeybee">#3-4 Honeybee</Link></div>
          <div><Link to="/coffee/awaken">#5 Awaken</Link></div>
          <div><Link to="/coffee/old-city-java">#6 Old City Java</Link></div>
        </div>
        <br />
        {React.createElement(components[path])}
      </Layout>
    )
  }

}

export default Coffee
