import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'Desarrollo web' }))

router.get('/about', (req, res) => res.render('about', {title: 'Sobre Mi'}))

router.get('/contactos', (req, res) => res.render('contactos', {title: 'Contactos'}))

router.get('/desarrollo', (req, res) => res.render('desarrollo', {title: 'web'}))

export default router