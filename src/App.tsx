import { useCallback, useEffect, useState } from 'react'
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { BottomPaper } from '@creativesolutionsgroup/bottom-paper';

const App = () => {
  const [show, setShow] = useState(true);

  const particles_init = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    console.log("thing");
  }, [show])

  return (
    <div style={{ height: "100vh", backgroundColor: "#f0f0f0" }}>
      <button onClick={() => setShow(true)}>show</button>
      <BottomPaper show={show} backgroundColor="white" onClose={() => setShow(false)}>
        <Particles options={{
          fpsLimit: 60,
          fullScreen: false,
          particles: {
            color: {
              value: "#000000",
            },
            links: {
              color: "#c0c0c0",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            size: {
              value: { min: 1, max: 1 },
            },
          },
          detectRetina: true,
        }} init={particles_init} />

        <h1>25% Off Rinnova</h1>
        <p style={{ opacity: 0.5 }}>One time use only.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatibus saepe officia numquam a dolores omnis praesentium, nemo suscipit doloribus. Alias animi, dignissimos et aut dolorum amet atque ab? Enim, id. Quia ipsam hic modi aliquam natus suscipit voluptate deserunt aperiam facere illum, culpa repudiandae quam at, dolorem cumque accusantium.</p>
        <button onClick={() => { setShow(false) }} style={{ borderRadius: 3, borderStyle: "solid", backgroundColor: "hsl(211, 100%, 95%)", borderColor: "hsl(211, 100%, 77%)", padding: "10px 30px" }}>CLAIM</button>
      </BottomPaper>

      <div style={{height: "100vh"}}>

      </div>
    </div>
  )
}

export default App
