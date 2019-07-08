import {Graphics, Container} from 'pixi.js'
import { stage, ticker } from './renderer';
import { colourScheme } from '../core/style';
import { distance } from '../util/math';


export const initMouseFollow = ()=> {
  const graphics = new Graphics()
  stage.addChild(graphics)

  let counter = 0

  let point = [-200,-200]

  interface IPointerCircle {
    x: number,
    y: number,
    radius: number,
    lastDraw: number
  }

  const pointerCircles: IPointerCircle[] = []

  let lastNew = Date.now()

  const c = document.getElementById('pixi')
  let xScale = 1
  if(c){
    xScale = window.outerWidth/c.getBoundingClientRect().width    
  }

  window.addEventListener('pointermove', (e)=> {    
    const movementRange = distance({x: 0, y: 0}, {x: e.movementX, y: e.movementY})

    const circle = {
      x:(e.pageX-window.scrollX),
      y:e.pageY-window.scrollY,
      radius: 25,
      lastDraw: Date.now()
    }

    point = [circle.x, circle.y]

    if(Date.now()-lastNew>40&&movementRange>1){
      pointerCircles.push(circle)
      lastNew = Date.now()
    }
  })

  // graphics.alpha = 0.3  

  ticker.add((delta)=>{
    graphics.clear()

    const now = Date.now()
    for(let circle of pointerCircles){
      if(circle.radius>0&&now-circle.lastDraw>0){
        const color = circle.radius<20? 0xF0F0F0 : circle.radius<40? 0xcccccc : colourScheme().secondary
        graphics.lineStyle(0)
        graphics.beginFill(color)        
        graphics.drawCircle(circle.x, circle.y, circle.radius)
        graphics.endFill()
        circle.radius -= circle.radius**1.3 / 100
        circle.lastDraw = Date.now()
        if(circle.radius<4){
          circle.radius = 0
        }
      }
    }

    graphics.lineStyle(2, 0xbcbcbc, 1)
    graphics.beginFill(0xdddddd)
    graphics.drawCircle(point[0],point[1], 25)
    graphics.endFill()
  })
}
