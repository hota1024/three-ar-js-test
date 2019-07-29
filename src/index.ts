import { Scene, WebGLRenderer } from 'three'
import { ARUtils, ARPerspectiveCamera, ARView } from 'three.ar.js'

async function initialize(): Promise<void> {
  const display = await ARUtils.getARDisplay()
  const renderer = new WebGLRenderer({ alpha: true })
  const arView = new ARView(display, renderer)
}

initialize()
