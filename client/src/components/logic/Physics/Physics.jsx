import { useEffect, useRef } from 'react'
import { Engine, Render, Bodies, World, Mouse,  MouseConstraint, Matter, Composite} from 'matter-js'

function Comp (props) {
    const scene = useRef()
    const isPressed = useRef(false)
    const engine = useRef(Engine.create())
    let mouse = useRef(Mouse);
    const mouseConstraint = useRef(MouseConstraint);
    let objectsOnCanvas = 0;
    let cw, ch;

    let mConstraint;
    const links = ["https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "https://vsekursy.online/image/pmc5hq4u.png",
        "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
        "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png",
        "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png",
        "https://icon-library.com/images/bootstrap-icon-png/bootstrap-icon-png-28.jpg",
        "https://www.typescripttutorial.net/wp-content/uploads/2020/04/favicon.png",
        "https://praveenpuglia.gallerycdn.vsassets.io/extensions/praveenpuglia/tailwind-breeze/2.2.6/1602691666511/Microsoft.VisualStudio.Services.Icons.Default"]
    const physicObjects = [
        {
            radius: 40,
            options:{
                mass: 10,
                restitution: 1,
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
                restitution: 0.6,
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
                restitution: 1,
                friction: 0.003,
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
                restitution: 0.7,
                friction: 0.002,
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
                restitution: 1,
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
                restitution: 1.1,
                friction: 0.001,
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
                friction: 0.001,
                render: {
                    sprite:{
                        xScale: 0.139,
                        yScale: 0.139,
                        texture: links[6],
                    }
                }
            }
        },
        {
            radius: 40,
            options:{
                mass: 10,
                restitution: 0.9,
                friction: 0.001,
                render: {
                    sprite:{
                        xScale: 0.095,
                        yScale: 0.095,
                        texture: links[7],
                    }
                }
            }
        },
    ]

    useEffect(() => {
        cw = document.body.clientWidth*0.6
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
            Bodies.rectangle(10, ch / 2, 10, ch, { isStatic: true }),
            Bodies.rectangle(cw / 2, ch + 9.5, cw-35, 20, { isStatic: true }),
            Bodies.rectangle(cw-10, ch / 2, 10, ch, { isStatic: true })
        ])

        mouse = Mouse.create(render.canvas);
        let options = {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        }
        Engine.run(engine.current);
        Render.run(render);
        mouse.pixelRatio = devicePixelRatio;
        mConstraint = MouseConstraint.create(engine, options);
        console.log(mouse)
        console.log(mConstraint)
        Composite.add(engine.current.world, mConstraint);
        render.mouse = mouse;
        const test = Composite.add(engine.current.world,Bodies.circle(400, 400, physicObjects[1].radius, physicObjects[1].options))
        Mouse.setElement(mConstraint.mouse, scene.current)

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



    const handleAddCircle = (e) => {
        //make a counter where player can't make more objects than fixed number
        //make some icons lay on canvas after site initialization
       const objectNumber = Math.floor(Math.random()*physicObjects.length)
        if ( objectsOnCanvas<(cw*ch/7000)) {
            const ball = Bodies.circle(
                //e.clientX,
                //e.clientY,
                mouse.position.x,
                mouse.position.y,
            physicObjects[objectNumber].radius,
                physicObjects[objectNumber].options
                )
            World.add(engine.current.world, [ball])
            objectsOnCanvas++;
        }
        console.log("cw = " + document.body.clientWidth*0.6)
        console.log("clientX = " + e.clientX);
    }

    return (
        <div
            //onMouseDown={handleDown}
            onMouseUp={handleUp}
            onTouchStart={handleAddCircle}
            onMouseDown={handleAddCircle}
        >
            <div ref={scene} className="physic-icons" style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export default Comp