var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Resizing Viewport
window.addEventListener('resize', function () {
    var width = this.window.innerWidth;
    var height = this.window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix
})

// Floor
var floorGeometry = new THREE.BoxGeometry( 100, 1, 100 );
var floorMaterial = new THREE.MeshBasicMaterial( { color: 0x404040 } );
var floorCube = new THREE.Mesh( floorGeometry, floorMaterial );
floorCube.position.y = -2;
scene.add( floorCube );

camera.position.z = -50;
camera.lookAt(0,0,0);

var controls = new THREE.OrbitControls(camera);

// Lighting
var lampung = new THREE.AmbientLight(0x404040, 5.0);
scene.add(lampung);

// Add frog model
var loader = new THREE.GLTFLoader();
loader.load('../asset/scene-frog.gltf', function(gltf){
    frog = gltf.scene.children[0];
    frog.scale.set(0.5,0.5,0.5);
    scene.add(gltf.scene);
    gameLoop();
}, undefined, function(e){
    console.error(e);
});

// Add cow model
// var loader = new THREE.GLTFLoader();
loader.load('../asset/scene.gltf', function(gltf){
    cow = gltf.scene.children[0];
    cow.scale.set(0.5,0.5,0.5);
    scene.add(gltf.scene);
    // gameLoop();
}, undefined, function(e){
    console.error(e);
});

//game logic
var update = function() {

};

// draw

var render = function() {
    renderer.render( scene, camera )
};

// run game (update, render, repeat)
var gameLoop = function() {
    requestAnimationFrame(gameLoop)
    update();
    render();
};

gameLoop();