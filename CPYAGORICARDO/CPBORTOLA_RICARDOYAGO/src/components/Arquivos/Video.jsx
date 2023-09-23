import React from 'react'

export default function Video() {
  return (
    <div className="box ladoB">
    <video controls poster="src/img/groot.png">
      <source src="src/arq/video/BabyGrootDançando.mp4" />
      <source src="src/arq/video/BabyGrootDançando.mpg" />
      <source src="src/arq/video/BabyGrootDançando.avi" />
      <p>Seu navegador não suporta esta mídia.</p>
    </video>
  </div>
  )
}
