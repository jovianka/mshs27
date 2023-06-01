<template>
  <canvas ref="graduationCapCanvas" class="border"/>
</template>

<script setup>

import  { Scene, WebGLRenderer, PerspectiveCamera, AmbientLight, AxesHelper, DirectionalLight, DirectionalLightHelper, CameraHelper } from 'three'
import  { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import  { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const graduationCapCanvas= ref(null)
let renderer // For setRenderer()
let graduationCapModel
let graduationCapYIncrement = 0


const scene = new Scene()
const camera = new PerspectiveCamera(75, 1, 0.1, 1000)

camera.position.setZ(2.9)

// Load GLTF model
const gltfLoader = new GLTFLoader()

gltfLoader.load("/graduation-cap/scene.gltf", (gltf) => {
  graduationCapModel = gltf.scene
  scene.add(graduationCapModel)
  graduationCapModel.castShadow = true
  graduationCapModel.receiveShadow = true
  graduationCapModel.rotation.z = -0.2
  graduationCapModel.rotation.x =  0.17
  graduationCapModel.rotation.y = -2.4
  graduationCapModel.position.y = -0.4
})


// Lighting
// const pointLight = new PointLight(0xffffff)
// pointLight.position.set(0, 5, 3)
// scene.add(pointLight)

const directionalLight = new DirectionalLight(0xffffff)
directionalLight.position.set(0, 5, 3)
directionalLight.target.position.set(0, 0, 0)
directionalLight.castShadow = true
scene.add(directionalLight)
scene.add(directionalLight.target)

// const ambientLight = new AmbientLight(0x404040)
// scene.add(ambientLight)

// Helpers
// const pointLightHelper = new PointLightHelper(pointLight)
// scene.add(pointLightHelper)

const directionalLightHelper = new DirectionalLightHelper(directionalLight)
scene.add(directionalLightHelper)

const axesHelper = new AxesHelper(10);
scene.add(axesHelper);

// Functions
function setRenderer() {
  if (graduationCapCanvas.value) {
    renderer = new WebGLRenderer({ canvas: graduationCapCanvas.value })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(500, 500)
    renderer.shadowMap.enabled = true
    const controls = new OrbitControls(camera, renderer.domElement)
  }
}

function animate() {
  if (graduationCapModel) {
    graduationCapModel.position.y = graduationCapModel.position.y + Math.sin(graduationCapYIncrement) * 0.01
    graduationCapYIncrement += 0.045
    if (graduationCapYIncrement >= Math.PI * 2) { graduationCapYIncrement = 0 }
  }
  
  requestAnimationFrame(animate)
  
  renderer.render(scene, camera)
}

onMounted(() => {
  setRenderer()
  animate()
})

</script>

<style scoped>

</style>