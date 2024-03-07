import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import URDFLoader from 'urdf-loader'; // Import URDFLoader

const ThreeScene = ({ data }) => {
  const mountRef = useRef(null);
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
    mountRef.current.appendChild(rendererRef.current.domElement);

    // Helpers and mesh
    const gridHelper = new THREE.GridHelper(200, 50);
    sceneRef.current.add(gridHelper);

    // Initialize URDF loader and load the model
    const loader = new URDFLoader();
    loader.load( '/home/andy/CS425_Project/package/src/assets/urdf_robot_meshs/turtlebot3_burger.urdf', ( robot ) => {
      robot.scale.set(10,10,10);
      robot.position.set(0,0,0);
      
      robotMeshRef.current = robot;
      sceneRef.current.add(robot);

      robot.traverse( function ( child ) {
        if ( child.isMesh ) {
            // Optionally set the material or any other properties for each mesh part
        }
      });

      // If you want to attach the camera to the robot or perform any other operations
    });

    // Controls
    controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
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

  const animate = () => {
    requestAnimationFrame(animate);
    // Animation and control logic
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  const updateRobot = () => {
    // Update robot logic
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