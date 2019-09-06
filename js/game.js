var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Resizing Viewport
window.addEventListener('resize', function () {
    var width = this.window.innerWidth;
    var height = this.window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix
})
// Lighting
var lampung = new THREE.AmbientLight(0xffffff, 5);
lampung.position.z = 0;
scene.add(lampung);

// Skybox
var skyBoxGeometry = new THREE.BoxGeometry(100, 1, 100);
var skyBoxMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ffff
});
var skyBoxCube = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
skyBoxCube.position.y = -2;
scene.add(skyBoxCube);

// Floor
var floorGeometry = new THREE.BoxGeometry(100, 1, 100);
var floorMaterial = new THREE.MeshBasicMaterial({
    color: 0x6B8E23
});
var floorCube = new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.y = -2;
scene.add(floorCube);

camera.position.z = -50;
camera.lookAt(0, 0, 0);

var controls = new THREE.OrbitControls(camera);


// Add box model
var enemyBoxGeometry = new THREE.BoxGeometry(10, 10, 10);
var enemyBoxMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000
});
var enemyBox = new THREE.Mesh(enemyBoxGeometry, enemyBoxMaterial);
enemyBox.position.y = 3;
scene.add(enemyBox);

// Add frog model
// var loader = new THREE.GLTFLoader();
// loader.load('../asset/scene-frog.gltf', function(gltf){
    //     frog = gltf.scene.children[0];
    //     frog.scale.set(0.5,0.5,0.5);
    //     scene.add(gltf.scene);
    //     gameLoop();
    // }, undefined, function(e){
        //     console.error(e);
        // });
        
        // Add cow model
        // var loader = new THREE.GLTFLoader();
// loader.load('../asset/scene.gltf', function(gltf){
//     cow = gltf.scene.children[0];
//     cow.scale.set(0.5,0.5,0.5);
//     scene.add(gltf.scene);
//     // gameLoop();
// }, undefined, function(e){
//     console.error(e);
// });

//game logic
var update = function () {
    // enemyBox.position.x += 0.2;
    // enemyBox.position.y += 0.01;
    // console.log("Camera X: " + camera.position.x)
    // console.log("Camera Y: " + camera.position.y)
    enemyBox.position.x < camera.position.x ? enemyBox.position.x += 0.05 : enemyBox.position.x -= 0.05;
    enemyBox.position.z < camera.position.z ? enemyBox.position.z += 0.05 : enemyBox.position.z -= 0.05;
};

// draw

var render = function () {
    renderer.render(scene, camera)
};

// run game (update, render, repeat)
const gameLoop = () => {
    requestAnimationFrame(gameLoop)
    update();
    render();
};

gameLoop();

// Sentry
Sentry.init({
    dsn: 'https://9c50165edf4f43059e72bd2f6fcfbee4@sentry.io/1553752'
});