import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Cursor } from '../helpers/Drag'
import { Guy } from './Guy'
import Floor from './Floor'
import {startHands} from "../helpers/Hands"

export default function App() {
    startHands()
    return (
        <div className='ragDoll'>
            <Canvas dpr={[1, 2]} shadows camera={{ position: [-40, 40, 40], fov: 25, near: 1, far: 100 }}>
                <color attach="background" args={['#171720']} />
                <fog attach="fog" args={['#171720', 60, 90]} />
                <ambientLight intensity={0.2} />
                <pointLight position={[-20, -5, -20]} color="red" />
                <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}>
                    <Cursor />
                    <Guy rotation={[-Math.PI / 3, 0, 0]} />
                    <Floor position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                </Physics>
            </Canvas>
        </div>
    )
}
