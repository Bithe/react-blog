import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Singlepost from '../../components/singlePost/Singlepost';
import './Single.css'

export default function Single() {
  return (
    <div className='single'>
      <Singlepost/>
      <Sidebar/>
    </div>
  )
}
