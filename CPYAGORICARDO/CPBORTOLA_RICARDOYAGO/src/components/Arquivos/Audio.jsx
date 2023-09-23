import React from 'react'

export default function Audio() {
  return (
    <div className="box ladoA">
      <audio controls>
        <source src="src/arq/audio/GuardioesGalaxia.mp3" />
        <source src="src/arq/audio/GuardioesGalaxia.mid" />
        <p>Seu navegador não suporta esta mídia.</p>
      </audio>
    </div>

  )
}
