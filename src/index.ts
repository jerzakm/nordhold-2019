import * as style from './scss/style'
import { initRenderer, stage, ticker, renderer } from './pixi/renderer'
import { colourScheme } from './core/style'
const styleFix = style
import { initMouseFollow } from './pixi/mouseFollow'
import { Graphics, Sprite, Container } from 'pixi.js'
import { findNewPoint, distance, pointsAngleDeg, checkIntersection } from './util/math'

initRenderer()
// initMouseFollow()
// initCircleSquare()
// initAnimatedTriangles()

const graphics = new Graphics()

const sprite = Sprite.from('assets/hero_sp.jpg')
stage.addChild(sprite)

const w = window.document.body.getBoundingClientRect()
const scaleToWidth = w.width/sprite.width
sprite.width = sprite.width*scaleToWidth*0.8
sprite.height = sprite.height*scaleToWidth*0.8
sprite.position.x = (w.width-sprite.width)/2
sprite.position.y = 0

ticker.add((delta)=> {

})



stage.addChild(graphics);