"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Box from "../Box/Box";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRouter } from "next/router";

interface WorkInProps {}

const WorkIn: React.FC<WorkInProps> = ({}) => {
  return (
    <Canvas camera={{ position: [-30, -20, -3] }}>
      <Environment files="assets/index/slide1.hdr" background />
      <OrbitControls autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default WorkIn;
//https://itnext.io/promise-loading-with-three-js-78a6297652a5
