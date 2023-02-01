"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Box = (props: any) => {
  const ref = useRef<any>();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.2 * delta;
      ref.current.rotation.y += 0.05 * delta;
    }
  });

  return (
    <mesh {...props} ref={ref}>
      {/* boxGeometry這三項是： width, length and depth */}
      <boxGeometry attach="geometry" args={[4, 4, 4]} />
      <meshStandardMaterial wireframe />
      {/* <OrbitControls /> */}
    </mesh>
  );
};

export default Box;
