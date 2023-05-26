<template>
  <canvas ref="graduationCapCanvas"/>
</template>

<script setup>

import  { Scene, WebGLRenderer, PerspectiveCamera, PointLightHelper, PointLight, AmbientLight } from 'three'
import  { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import  { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const graduationCapCanvas= ref(null)

let renderer // For setRenderer()
const scene = new Scene()
const camera = new PerspectiveCamera( 75, 1, 0.1, 1000 )

camera.position.setZ(5)


// Load GLTF model
const gltfLoader = new GLTFLoader()

gltfLoader.load("/graduation-cap/scene.gltf", (gltf) => {
  scene.add(gltf.scene)
})

// Lighting
const pointLight = new PointLight(0xffffff)
pointLight.position.set(6,-3,12)
scene.add(pointLight)

const ambientLight = new AmbientLight(0xffffff, 0.4)
scene.add(ambientLight)

// Helpers
const pointLightHelper = new PointLightHelper(pointLight)
scene.add(pointLightHelper)

// Functions
function setRenderer() {
  if (graduationCapCanvas.value) {
    renderer = new WebGLRenderer({ canvas: graduationCapCanvas.value})
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(1000, 1000)
    const controls = new OrbitControls(camera, renderer.domElement)
  }
}

function animate() {
  requestAnimationFrame( animate )
  renderer.render(scene, camera)
}

onMounted(() => {
  setRenderer()
  animate()
})

</script>

<style scoped>

</style>