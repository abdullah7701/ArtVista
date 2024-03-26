// @ts-nocheck
import React, { useState } from 'react'
import ReactDom from 'react-dom'
import * as THREE from 'three'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshStandardMaterial,
  Mesh,
  AmbientLight,
  TextureLoader,
  CubeTextureLoader,
  RepeatWrapping,
  DoubleSide,
  FrontSide,
  Clock
} from 'three'
import WebGL from 'three/examples/jsm/capabilities/WebGL.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Interaction } from 'three.interaction/src/index';

import KeyEvent from './key-event'

import CameraControls from 'camera-controls';


import { Button, Modal } from '@douyinfe/semi-ui';



CameraControls.install( { THREE: THREE } );



const IMAGE_URL = [
  'https://images.unsplash.com/photo-1549289524-06cf8837ace5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1577083862054-7324cd025fa6?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1579167728798-a1cf3d595960?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://i.guim.co.uk/img/media/ea9afa6f591b1bbeab0c34d3e2442fdd029fe8c3/0_444_3398_2038/master/3398.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b95946cf68ceb615cf4a5ba9d757212a',
 'https://plus.unsplash.com/premium_photo-1672870611269-38658f94666a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 'https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1576773689115-5cd2b0223523?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1579541718334-85e6075516f2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1578320340743-0314d3d66851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBhaW50aW5nJTIwY3JlYXRpdmUlMjBkaWZmdXNpb258ZW58MHx8MHx8fDA%3D',
'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1576504677598-49a46e4b7abb?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1579965342575-16428a7c8881?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1578301978162-7aae4d755744?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1709927628742-c3da31d7707f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1700652230512-f6e61be8fdcb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1641385270550-5f2beea05b66?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1704256415369-958ab7302c0a?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1703606107615-149b798c8560?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1701882243976-001242bba759?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://plus.unsplash.com/premium_photo-1700141482330-7e38d5e64b56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1699541948287-9c8ce85624ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1687568522006-f237c1e213b2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://plus.unsplash.com/premium_photo-1668612078594-5473898933ed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',


];

let isViewWork = false
let first = true
const MAX_WORK_COUNT = IMAGE_URL.length
const IMG_LIST: {
  [key: string]: {
    mesh: any;
    imgUrl: any;
  }
} = {}


const loadTexture = () => {
  const textureLoader = new TextureLoader()

  return new Promise<any>((resolve, reject) => {
    textureLoader.load('assets/floor3.jpg', (texture) => {
      resolve(texture)
    })
  })
}
const loadWallTexture = () => {
  const textureLoader = new TextureLoader()

  return new Promise<any>((resolve, reject) => {
    textureLoader.load('assets/wall6.jpg', (texture) => {
      resolve(texture)
    })
  })
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

let shuffledImages = shuffleArray([...IMAGE_URL]);

const loadWorkTexture = () => {
  const textureLoader = new TextureLoader();
  const imageUrl = shuffledImages.pop(); // Get and remove the last image from the shuffled array

  return new Promise<any>((resolve, reject) => {
    textureLoader.load(imageUrl, (texture) => {
      resolve(texture);
    });
  });
};


const loadWorks = async () => {

  const workTexture: any[] = []
  for (let i = 0; i < MAX_WORK_COUNT; i++) {
    let texture = await loadWorkTexture()
    workTexture.push(texture)
  }
  return workTexture
}

const loadWorkTexture2 = () => {
  const textureLoader = new TextureLoader()

  return new Promise<any>((resolve, reject) => {
    textureLoader.load('https://images.unsplash.com/photo-1656936632107-0bfa69ea06de?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTI1ODk0MQ&ixlib=rb-1.2.1&q=80&w=1000', (texture) => {
      resolve(texture)
    })
  })
}

const loadSkyTexture = () => {
  const textureLoader = new CubeTextureLoader()

  return new Promise<any>((resolve,reject) => {
    textureLoader.load([
      'assets/right.jpg',
      'assets/left.jpg',
      'assets/top.jpg',
      'assets/bottom.jpg',
      'assets/front.jpg',
      'assets/back.jpg'
    ], (texture) => {
      resolve(texture)
    })
  })
}

function getCenterPoint(mesh) {
  var geometry = mesh.geometry;
  geometry.computeBoundingBox();
  var center = new THREE.Vector3();
  geometry.boundingBox.getCenter( center );
  mesh.localToWorld( center );
  return center;
}
let initialized = false;
export async function createThree() {
  if (initialized) return; // Prevent re-initialization
  initialized = true;
  const scene = new Scene()
  const camera = new PerspectiveCamera( 
    75,
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000 
  )

  const renderer = new WebGLRenderer({
    
    antialias: true
  });
  renderer.setSize( window.innerWidth, window.innerHeight );

  const interaction = new Interaction(renderer, scene, camera);


  // const controls = new OrbitControls( camera, renderer.domElement )
  // controls.enableZoom = false
  // controls.update();
  const clock = new Clock();
  const cameraControls = new CameraControls( camera, renderer.domElement );
  window.cameraControls = cameraControls

  cameraControls.addEventListener('rest', () => {
    console.log('end of move')
    cameraControls.setOrbitPoint(camera.position.x, camera.position.y - 0.0001, camera.position.z)
    if (isViewWork) {
      isViewWork = false
      document.getElementById('detail-container')!.style.display = 'block'
    } else {
      document.getElementById('detail-container')!.style.display = 'none'
    }
  })

  cameraControls.setLookAt(0, 3, 0, 0, 3, 1)

  const keyEvent = new KeyEvent(
    camera,
    cameraControls,
    document.getElementById('three-el')
  )
  


  const ambient = new AmbientLight(0xffffff)
  scene.add(ambient);

  let texture = await loadTexture()
  let wallTexture = await loadWallTexture()
  const skyTexture = await loadSkyTexture()

  const workTexture = await loadWorks()
  console.log(workTexture)

  scene.background = skyTexture

  const loader = new GLTFLoader();

  loader.load( 'assets/scene3.gltf', function ( gltf ) {
    gltf.scene.traverse(child => {
      if (child.name === 'floor') {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;
        
        texture.repeat.set(20, 20)
        child.material = new MeshLambertMaterial({ 
          map: texture
        })
        child.material.roughness = 0.5
        child.material.metalness = 0.6
      } else if(child.name === 'powerful') {
        wallTexture.wrapS = RepeatWrapping;
        wallTexture.wrapT = RepeatWrapping;
        
        wallTexture.repeat.set(100, 40)
        child.material = new MeshLambertMaterial({ 
          map: wallTexture
        })
        child.material.roughness = 0.5
        child.material.metalness = 0.6
        console.log('powerful', child)
      } else if (child.name.includes('work')) {
        child.children[1].rotateZ ( Math.PI )
        child.children[1].translateX(-0.02)
        child.on('click', (ev) => {
          let target = ev.target

          console.log('target', target)
          cameraControls.fitToBox( target , true, { paddingLeft: 1, paddingRight: 1, paddingBottom: 1, paddingTop: 1 } )
          cameraControls.rotateAzimuthTo(Math.PI / 2 + target.rotation.z, true)
          isViewWork = true
        })
        console.log(child.children[1])
        if (child.children && child.children[0]) {
          let index = Math.floor(Math.random() * MAX_WORK_COUNT)
          
          IMG_LIST[child.name] = {
            mesh: child,
            imgUrl: workTexture[index].image
          }
          workTexture[index].wrapS = RepeatWrapping;
          workTexture[index].wrapT = RepeatWrapping;
          workTexture[index].rotation = Math.PI
          
          workTexture[index].repeat.set(1, 1)
          child.children[1].material = new MeshBasicMaterial({ 
            map: workTexture[index],
            side: FrontSide
          })
          // child.children[1].material.roughness = 0.5
          // child.children[1].material.metalness = 0.6
        }
      }
    })
    createUI(IMG_LIST, cameraControls)
    scene.add( gltf.scene )
  }, undefined, function ( error ) {
    console.error( error );
  });

  function animate() {
    requestAnimationFrame( animate );
    const delta = clock.getDelta();
    cameraControls.update( delta );
    keyEvent.update( delta )
    renderer.render( scene, camera );
  }

  const app = document.getElementById('three-el')
  if (app) {
    if (WebGL.isWebGLAvailable()) {
      // Initiate function or other initializations here
      animate();
      app.appendChild(renderer.domElement)
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      app.appendChild(warning);
    }
  }
  if (!document.getElementById('ui-container').hasChildNodes()) {
    createUI(IMG_LIST, cameraControls);
  }

}

const createUI = (imgObj, cameraControls) => {
  console.log(imgObj)
  return (
    ReactDom.render(
      <div className="ui-container" style={{
        position: 'fixed',
        bottom: '8px',
        height: '110px',
        display: 'flex', 
        width: '100vw',
        overflowX: 'scroll'
      }}>
        {
          Object.keys(imgObj).map((item) => {
            return (
              <img 
                style={{
                  width: '100px', 
                  height: '100px',
                  marginLeft: '10px',
                  cursor: 'pointer'
                }} 
                src={imgObj[item].imgUrl.currentSrc} 
                onClick={() => {
                  cameraControls.fitToBox( imgObj[item].mesh , true, { paddingLeft: 1, paddingRight: 1, paddingBottom: 1, paddingTop: 1 } )
                  cameraControls.rotateAzimuthTo(Math.PI / 2 + imgObj[item].mesh.rotation.z, true)
                  isViewWork = true
                }}
              />
            )
          })
        }
      </div>
    , document.getElementById('ui-container'))
  )
}

export function CreateDetailUI() {
  const [visible, setVisible] = useState(false)
  return (
      <div style={{ 
        position: 'fixed',
        top: '40px',
        width: '100vw',
        textAlign: 'center',
      }}>
        {/* {<Button theme="solid" type="primary" size="large" onClick={() => {setVisible(true)}}>Check The Details</Button> } */}
        <Modal
          visible={visible}
          title="Work details"
          onOk={() => {setVisible(false)}}
          onCancel={() => {setVisible(false)}}
          maskClosable={false}
          style={{
            maxWidth: '90vw'
          }}
        >
          {/* {<iframe
            src="https://www.lofter.com/cms/147056/jhy.html"
            width={375}
            height={450}
          ></iframe>} */}
        </Modal>
      </div>
    )
}

function destroyDetailUI() {
  ReactDom.unmountComponentAtNode(document.getElementById('detail-container')!)
}