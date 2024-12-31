import { Canvas } from "@react-three/fiber";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { Bottle } from "./components/Models/Bottle";
import { Chancho } from "./components/Models/Chancho";
import { Cuchilla } from "./components/Models/Cuchilla";
import {Mesa} from "./components/Models/Mesa";
import { Center, OrbitControls } from "@react-three/drei";
import { Silla } from "./components/Models/Silla";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Escena } from "./components/Models/Escena";

function App() {

  return (
    <main className="bg-slate-200 min-h-screen">
      <Header/>
    <section className="p-2">
        <div className="max-w-screen-lg mx-auto px-2 mt-5">
          <h1 className="text-3xl font-bold text-center">Diseño 3D y más</h1>
          <p className="text-center">Desarrollo web innovador</p>
        </div>
        <div className="mx-auto max-w-fit flex gap-2 mt-2 font-semibold">
          <button className="p-2 border border-black rounded-md">Ver proyectos</button>
          <button className="p-2 bg-black text-white rounded-md">Contacto</button>
        </div>
        <div className="max-w-3xl mx-auto">
          <img src="img/isometric.png"/>
        </div>
        <Projects/>
        <div className="text-center mb-2">
              <h2 className="text-3xl font-black mt-4">Modelos 3D</h2>
              <h3>Movelos, acercate y alejate</h3>
            </div>
        <div className="flex gap-1 max-w-screen-lg mx-auto items-center justify-center flex-wrap">
          <div className="border border-gray-500 rounded-xl">
            <Canvas>
              <directionalLight
                position={[1, 1, 1]} // Posición de la luz
                intensity={2} // Intensidad de la luz
                castShadow // Habilita sombras
              />
              <OrbitControls/>
              <Center>
                <Bottle/>
              </Center>
            </Canvas>
          </div>
          <div className="border border-gray-500 rounded-xl">
            <Canvas>
            <directionalLight
              position={[5, 5, 5]} // Posición de la luz
              intensity={1} // Intensidad de la luz
              castShadow // Habilita sombras
            />
              <OrbitControls/>
              <Center>
                <Chancho scale={5}/>
              </Center>
            </Canvas>
          </div>
          <div className="border border-gray-500 rounded-xl">
            <Canvas>
              <directionalLight
                position={[5, 5, 5]} // Posición de la luz
                intensity={1} // Intensidad de la luz
                castShadow // Habilita sombras
              />
              <OrbitControls/>
              <Center>
                <Cuchilla scale={8}/>
              </Center>
            </Canvas>
          </div>
          <div className="border border-gray-500 rounded-xl">
            <Canvas>
              <directionalLight
                position={[5, 5, 5]} // Posición de la luz
                intensity={2} // Intensidad de la luz
                castShadow // Habilita sombras
              />
              <OrbitControls/>
              <Center>
                <Mesa scale={1}/>
              </Center>
            </Canvas>
          </div>
          <div className="border border-gray-500 rounded-xl">
            <Canvas>
              <directionalLight
                position={[5, 5, 5]} // Posición de la luz
                intensity={1} // Intensidad de la luz
                castShadow // Habilita sombras
              />
              <OrbitControls/>
              <Center>
                <Silla scale={1}/>
              </Center>
            </Canvas>
          </div>
          <div className="border border-gray-500 rounded-xl">
            <Canvas>
              <Escena/>
              <ambientLight intensity={0.2}/>
              <EffectComposer>
              <Bloom
                intensity={10}
                luminanceThreshold={1}
                luminanceSmoothing={1}
                mipmapBlur
                levels={10}
                layers={[1]} // Aplicamos el bloom solo en la capa 1
              />
              </EffectComposer>
              <OrbitControls target={[0, 0.5, 0]}/>
            </Canvas>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
