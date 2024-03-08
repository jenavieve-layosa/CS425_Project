import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

const ThreeScene = ({ data }) => {
  const mountRef = useRef(null); // Reference to the div where the renderer will be mounted
  const sceneRef = useRef(null);
  const robotMeshRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const [trackRobot, setTrackRobot] = useState(false);
  const trackRobotRef = useRef(trackRobot);

  const init = () => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene
    sceneRef.current = new THREE.Scene();
    
    // Camera
    cameraRef.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    cameraRef.current.position.set(5, 10, -5); // Position the camera

    // Renderer
    rendererRef.current = new THREE.WebGLRenderer();
    rendererRef.current.setSize(width, height);
    mountRef.current.appendChild(rendererRef.current.domElement); // Append to the div instead of body

    // Helpers and mesh
    const gridHelper = new THREE.GridHelper(200, 50);
    sceneRef.current.add(gridHelper);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    robotMeshRef.current = new THREE.Mesh(geometry, material);
    sceneRef.current.add(robotMeshRef.current);

    // Controls
    controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);

    robotMeshRef.current.attach(cameraRef.current);
    robotMeshRef.current.position.set(0, 0, 0);
  };

  const onResize = () => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    if (rendererRef.current && cameraRef.current) {
      rendererRef.current.setSize(width, height);
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
    }
  };

  useEffect(() => {
    init();
    animate();

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    updateRobot();
  }, [data]);

  useEffect(() => {
    trackRobotRef.current = trackRobot;
  }, [trackRobot]);
  const updateRobot = () => {
    if (data) {
      const scaleFactor = 1;
      robotMeshRef.current.position.set(
        parseFloat(data.x) * -scaleFactor,
        0, // Keeping the robot on the x-y plane
        parseFloat(data.y) * scaleFactor
      );
      robotMeshRef.current.rotation.set(0, parseFloat(data.theta), 0);
    }
  };


  let lastLoggedTime = 0;
  const logInterval = 1000;
  const animate = () => {
    requestAnimationFrame(animate);


    if (trackRobotRef.current && robotMeshRef.current) {
      controlsRef.current.enabled = false; // Disable manual controls in tracking mode
      robotMeshRef.current.attach(cameraRef.current);
    } else {
      const offset = new THREE.Vector3(-10, 50, 10);
      controlsRef.current.enabled = true; // Enable manual controls


      sceneRef.current.attach(cameraRef.current);
      cameraRef.current.position.lerp(offset, 0.05);
      cameraRef.current.lookAt(-10, 0, 10);
      controlsRef.current.maxPolarAngle = Math.PI / 2; // Limit vertical rotation to maintain height
    }


    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };


  const toggleTracking = () => {
    setTrackRobot(!trackRobot);
    if (!trackRobot) {
      controlsRef.current.reset();
    }
  };

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100%' }}>
      <button onClick={toggleTracking}>
        {trackRobot ? 'Stop Tracking Robot' : 'Track Robot'}
      </button>
      {/* Other components or HTML elements if needed */}
    </div>
  );
};

export default ThreeScene;