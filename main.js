// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------
import * as THREE from 'three';

// ------------------------------------------------
// Renderer SETUP
// ------------------------------------------------

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// Configure renderer clear color
renderer.setClearColor("#f8ebda");
// Configure renderer size
renderer.setSize(window.innerWidth, window.innerHeight);
// Append Renderer to DOM
document.body.appendChild(renderer.domElement);



// ------------------------------------------------
// Camera SETUP
// ------------------------------------------------
// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  5,
  20
);
camera.position.z = 10;


// ------------------------------------------------
// Light SETUP
// ------------------------------------------------

var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.x = -5;
directionalLight.position.y = 10;
directionalLight.position.z = 9;

var ambientLight = new THREE.AmbientLight( 0xffffff ); 
ambientLight.position.x = 4;
ambientLight.position.y = 5;
ambientLight.position.z = -4;



// ------------------------------------------------
// Cube SETUP
// ------------------------------------------------
// Create a Cube Mesh with phong material
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshPhongMaterial({ color: "#433F81" });
var cube = new THREE.Mesh(geometry, material);

// ------------------------------------------------
// Scene SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Add cube to Scene
scene.add(cube);
// add light to scene
scene.add(directionalLight);
scene.add(ambientLight)
// Render Loop
function animation(time) {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animation);

