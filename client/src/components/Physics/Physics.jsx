import { useEffect, useRef } from 'react'
import { Engine, Render, Bodies, World } from 'matter-js'

function Comp (props) {
    const scene = useRef()
    const isPressed = useRef(false)
    const engine = useRef(Engine.create())
    let objectsOnCanvas = 0;
    let cw, ch;

    useEffect(() => {
        cw = document.body.clientWidth
        ch = document.body.clientHeight*0.5
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
            Bodies.rectangle(150, ch / 2, 20, ch, { isStatic: true }),
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
        }
    }, [])

    const handleDown = () => {
        isPressed.current = true
    }

    const handleUp = () => {
        isPressed.current = false
    }

    const links = ["https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "https://vsekursy.online/image/pmc5hq4u.png",
        "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
        "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png",
        "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png",
        "https://icon-library.com/images/bootstrap-icon-png/bootstrap-icon-png-28.jpg",
        "https://www.typescripttutorial.net/wp-content/uploads/2020/04/favicon.png"]

    const physicObjects = [
        {
            radius: 40,
            options:{
                mass: 10,
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
                mass: 10,
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
        },
        {
            radius: 40,
            options:{
                mass: 10,
                restitution: 0.9,
                friction: 0.005,
                render: {
                    sprite:{
                        xScale: 0.02,
                        yScale: 0.02,
                        texture: links[2],
                    }
                }
            }
        },
        {
            radius: 40,
            options:{
                mass: 10,
                restitution: 0.9,
                friction: 0.005,
                render: {
                    sprite:{
                        xScale: 0.155,
                        yScale: 0.155,
                        texture: links[3],
                    }
                }
            }
        },
        {
            radius: 40,
            options:{
                mass: 10,
                restitution: 0.9,
                friction: 0.005,
                render: {
                    sprite:{
                        xScale: 0.15,
                        yScale: 0.15,
                        texture: links[4],
                    }
                }
            }
        },
        {
            radius: 40,
            options:{
                mass: 10,
                restitution: 0.9,
                friction: 0.005,
                render: {
                    sprite:{
                        xScale: 0.135,
                        yScale: 0.135,
                        texture: links[5],
                    }
                }
            }
        },
        {
            radius: 40,
            options:{
                mass: 10,
                restitution: 0.9,
                friction: 0.005,
                render: {
                    sprite:{
                        xScale: 0.139,
                        yScale: 0.139,
                        texture: links[6],
                    }
                }
            }
        },
    ]

    const handleAddCircle = (e) => {
        //make a counter where player can't make more objects than fixed number
        //make some icons lay on canvas after site initialization
       const objectNumber = Math.floor(Math.random()*physicObjects.length)
        if ( objectsOnCanvas<(cw*ch/7000)) {
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
            onMouseDown={handleAddCircle}
        >
            <div ref={scene} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export default Comp