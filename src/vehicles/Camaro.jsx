/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Camaro.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from "valtio"
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';

export function Camaro(props) {
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)
  const { nodes, materials } = useGLTF('/models/Camaro.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body.geometry} material={materials.BaseMtl} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 1}/>
      <mesh geometry={nodes.BrakeCaliper001.geometry} material={materials.wire_010010010} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.BrakeCaliper002.geometry} material={materials.wire_010010010} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.BrakeCaliper003.geometry} material={materials.wire_010010010} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.BrakeCaliper004.geometry} material={materials.wire_010010010} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.BrakeDisk001.geometry} material={materials.BrakeDisk} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.BrakeDisk002.geometry} material={materials.BrakeDisk} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.BrakeDisk003.geometry} material={materials.BrakeDisk} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.BrakeDisk004.geometry} material={materials.BrakeDisk} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.BumperLight.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Camaro_Badge.geometry} material={materials.Matte_Chrome} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Consol.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Console_Screen.geometry} material={materials.Interior_Screens} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Dashboard.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.FogLight.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Front_ZL1_Badge.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.FrontChevyBadge.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Gauges_Frame.geometry} material={materials.BlackPlastic} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Gauges_Glass.geometry} material={materials.ClearGlass} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Gauges_Screen.geometry} material={materials.Interior_Screens} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Grille.geometry} material={materials.GlossyBlackPlastic} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Headlight.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Headlight_Glass.geometry} material={materials.ClearGlass} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Headlight_ReflectorGlass.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Hood_Insert.geometry} material={materials.GlossyBlackPlastic} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Hood_ZL1_Badge001.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Hood_ZL1_Badge002.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Interior_Body.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.InteriorMirror.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Needle001.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Needle002.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Pedals.geometry} material={materials.BlackPlastic} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Rear_ZL1_Badge.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.RearChevyBadge.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Rim001.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Rim002.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Rim003.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Rim004.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Seats.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Sidelights.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.SteerWheel.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Stoplight.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.TailLight.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.TailLight_Glass.geometry} material={materials.Taillight_Glass} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Tire001.geometry} material={materials.Tire} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Tire002.geometry} material={materials.tires} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Tire003.geometry} material={materials.Tire} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Tire004.geometry} material={materials.Tire} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Underbody.geometry} material={materials.Underbody} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.WindowGlass.geometry} material={materials.WindowGlass} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.WiperArm_001.geometry} material={materials.BlackPlastic} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.WiperArm_002.geometry} material={materials.BlackPlastic} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.WiperBlade_001.geometry} material={materials.BlackPlastic} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.WiperBlade_002.geometry} material={materials.BlackPlastic} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.MirrorR.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.MirrorL.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Spoiler.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.HandleL.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.HandleR.geometry} material={materials.wire_002002002} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
      <mesh geometry={nodes.Body001.geometry} material={materials.Slaughter} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 2}/>
      <mesh geometry={nodes.Body002.geometry} material={materials.BatLady} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 3}/>
      <mesh geometry={nodes.Body003.geometry} material={materials.BrakeLine} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 4}/>
      <mesh geometry={nodes.Body004.geometry} material={materials.Danger} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 5}/>
      <mesh geometry={nodes.Body005.geometry} material={materials.Embers} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 6}/>
      <mesh geometry={nodes.Body006.geometry} material={materials.SpiderID} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 7}/>
      <mesh geometry={nodes.Body007.geometry} material={materials.Fluid} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 8}/>
      <mesh geometry={nodes.Body008.geometry} material={materials.HotRods} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 9}/>
      <mesh geometry={nodes.Body009.geometry} material={materials.Mayan} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 10}/>
      <mesh geometry={nodes.Body010.geometry} material={materials.SeaBreeze} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 11}/>
      <mesh geometry={nodes.Body011.geometry} material={materials.ShapeShifter} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 12}/>
      <mesh geometry={nodes.Body012.geometry} material={materials.Silk} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 13}/>
      <mesh geometry={nodes.Body013.geometry} material={materials.SnakeSkin} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 14}/>
      <mesh geometry={nodes.Body014.geometry} material={materials.Flare} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 15}/>
      <mesh geometry={nodes.Body015.geometry} material={materials.Dominator} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 16}/>
      <mesh geometry={nodes.Body016.geometry} material={materials.TopGun} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 17}/>
      <mesh geometry={nodes.Body017.geometry} material={materials.Explosion} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 18}/>
      <mesh geometry={nodes.Body018.geometry} material={materials.WildWest} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 19}/>
      <mesh geometry={nodes.Body019.geometry} material={materials.Zombie} rotation={[Math.PI / 2, 0, 0]} scale={0.017} material-color={snap1.base.BaseMtl} visible={overlay === 20}/>
    </group>
  )
}

useGLTF.preload('/models/Camaro.glb')
