//Next, React (core node_modules) imports must be placed here
import * as THREE from "three";
import { useRef, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import {
  EffectComposer,
  Noise,
  ToneMapping,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import glsl from "babel-plugin-glsl/macro";

//import STORE from '@/store'

import styles from "./CanvasLanding.module.scss";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColorPrimary: new THREE.Color(0.0, 0.0, 0.0),
    uColorSecondary: new THREE.Color(0.0, 0.0, 0.0),
    warpSpeed: 1,
    speed: 1,
  },
  // Vertex Shader
  glsl`
    precision lowp float;

    varying vec2 vUv;

    uniform float uTime;

    #pragma glslify: snoise3 = require('glsl-noise/simplex/3d');

    void main() {
      vUv = uv;

      vec3 pos = position;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader -- Color
  glsl`
    precision lowp float;

    uniform vec3 uColorPrimary;
    uniform vec3 uColorSecondary;
    uniform float uTime;
    uniform float warpSpeed;
    uniform float speed;

    varying vec2 vUv;

    void main() {
      float res = .1;
      // res += cos(vUv.y * 12.345 - uTime * warpSpeed + cos(res * 12.234) * .2 + cos(vUv.x * 32.2345 + cos(vUv.y * 17.234))) + cos(vUv.x * 12.345);
      // vec3 c = mix(uColorPrimary, uColorSecondary, cos(res+cos(vUv.y * 24.3214) * .1+cos(vUv.x * 6.324 + uTime * warpSpeed) + uTime * speed) * .5 + .5);
      // c = mix(c, vec3(0.), clamp((length(vUv - .5 + cos(uTime * speed + vUv.yx * 4.34 + vUv.xy * res) *.1) * 5. - .4), 0., 1.));

      res += cos(vUv.y * 12.345 - warpSpeed + cos(res * 12.234) * .2 + cos(vUv.x * 32.2345 + cos(vUv.y * 17.234))) + cos(vUv.x * 12.345);
      vec3 c = mix(uColorPrimary, uColorSecondary, cos(res+cos(vUv.y * 24.3214) * .1+cos(vUv.x * 6.324 + warpSpeed) + speed) * .5 + .5);
      c = mix(c, vec3(0.), clamp((length(vUv - .5 + cos(speed + vUv.yx * 4.34 + vUv.xy * res) *.1) * 5. - .4), 0., 1.));


      gl_FragColor = vec4(c,length(c));
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const shaderRef = useRef();

  let x = 0;
  let y = 0;

  useFrame(({ clock, mouse }) => {
    shaderRef.current.uTime = clock.getElapsedTime();

    shaderRef.current.speed = mouse.x * 0.7;
    shaderRef.current.warpSpeed = mouse.y * 0.7;
  });

  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[6, 4, 2, 2]} />
      <waveShaderMaterial
        uColorPrimary={"#ffb347"}
        uColorSecondary={"#121212"}
        ref={shaderRef}
        warpSpeed={0}
        speed={0}
      />
    </mesh>
  );
};

const CanvasLanding = (props) => {
  return (
    <div className={styles.container}>
      <Canvas
        camera={{ fov: 20 }}
        onCreated={({ camera }) => {
          camera.rotateZ(Math.PI * 0.2);
        }}
      >
        <Suspense fallback={null}>
          <Wave />
        </Suspense>
        <EffectComposer>
          <Noise opacity={0.05} />
          <ToneMapping
            blendFunction={BlendFunction.NORMAL} // blend mode
            adaptive={false} // toggle adaptive luminance map usage
            resolution={256} // texture resolution of the luminance map
            middleGrey={0.6} // middle grey factor
            maxLuminance={1.0} // maximum luminance
            averageLuminance={1.0} // average luminance
            adaptationRate={1.0} // luminance adaptation rate
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL} // blend mode
            offset={[0.02, 0.002]} // color offset
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default CanvasLanding;
