import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

const ThreeScene = ({ data }) => {
  const sceneRef = useRef(null);
  const robotMeshRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const [trackRobot, setTrackRobot] = useState(false);
  const trackRobotRef = useRef(trackRobot);

  const init = () => {
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, 1.0 / 1.0, 0.1, 1000);
    cameraRef.current.position.set(5, 10, -5); // Position the camera above and slightly behind the robot

    rendererRef.current = new THREE.WebGLRenderer();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(rendererRef.current.domElement);

    // Grid helper on the x-y plane
    const gridHelper = new THREE.GridHelper(200, 50);
    sceneRef.current.add(gridHelper);

    // Robot mesh
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    robotMeshRef.current = new THREE.Mesh(geometry, material);
    sceneRef.current.add(robotMeshRef.current);

    controlsRef.current = new OrbitControls(
      cameraRef.current,
      rendererRef.current.domElement
    );
    robotMeshRef.current.attach(cameraRef.current);
    robotMeshRef.current.position.set(0, 0, 0);
  };

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

  const onWindowResize = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    cameraRef.current.aspect = newWidth / newHeight;
    cameraRef.current.updateProjectionMatrix();

    rendererRef.current.setSize(newWidth, newHeight);
  };

  useEffect(() => {
    init();
    animate();
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
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

  const toggleTracking = () => {
    setTrackRobot(!trackRobot);
    console.log('Track robot toggled to:', trackRobot);
    if (!trackRobot) {
      controlsRef.current.reset();
    }
  };

  return (
    <>
      <button onClick={toggleTracking}>
        {trackRobot ? 'Stop Tracking Robot' : 'Track Robot'}
      </button>
      {/* Other components or HTML elements if needed */}
    </>
  );
};

export default ThreeScene;
