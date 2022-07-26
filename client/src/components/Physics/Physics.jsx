import { useEffect, useRef } from 'react'
import { Engine, Render, Bodies, World } from 'matter-js'
import reactLogo from './React-icon.png'

function Comp (props) {
    const scene = useRef()
    const isPressed = useRef(false)
    const engine = useRef(Engine.create())
    let objectsOnCanvas = 0;

    useEffect(() => {
        const cw = document.body.clientWidth
        const ch = document.body.clientHeight*0.5



        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: cw,
                height: ch,
                wireframes: false,
                background: 'transparent',
                wireframeBackground: 'transparent'
            }
        })

        World.add(engine.current.world, [
            Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
            Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
            Bodies.rectangle(cw / 2, ch + 9.5, cw, 20, { isStatic: true }),
            Bodies.rectangle(cw + 9.5, ch / 2, 20, ch, { isStatic: true })
        ])

        Engine.run(engine.current)
        Render.run(render)

        return () => {
            Render.stop(render)
            World.clear(engine.current.world)
            Engine.clear(engine.current)
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.textures = {}
        }
    }, [])

    const handleDown = () => {
        isPressed.current = true
    }

    const handleUp = () => {
        isPressed.current = false
    }

    const links = ["https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", "https://vsekursy.online/image/pmc5hq4u.png"]

    const physicObjects = [
        {
            radius: 40,
            options:{
                mass: 5,
                restitution: 0.9,
                friction: 0.005,
                render: {
                    sprite:{
                        xScale: 0.5,
                        yScale: 0.5,
                        texture: links[0],
                    }
                }
            }
        },
        {
            radius: 40,
            options:{
                mass: 5,
                restitution: 0.9,
                friction: 0.005,
                render: {
                    sprite:{
                        xScale: 0.235,
                        yScale: 0.235,
                        texture: links[1],
                    }
                }
            }
        }

        ]

    const handleAddCircle = e => {
        //make a counter where player can't make more objects than fixed number
        //make some icons lay on canvas after site initialization
        //count of max balls per screen calculates from size of user's screen
       const objectNumber = Math.floor(Math.random()*physicObjects.length)
        if (isPressed.current && objectsOnCanvas<230) {
            const ball = Bodies.circle(
                e.clientX,
                e.clientY,
                physicObjects[objectNumber].radius,
                physicObjects[objectNumber].options
                )
            World.add(engine.current.world, [ball])
            objectsOnCanvas++;

        }
    }

    return (
        <div
            onMouseDown={handleDown}
            onMouseUp={handleUp}
            onMouseMove={handleAddCircle}
        >
            <div ref={scene} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export default Comp