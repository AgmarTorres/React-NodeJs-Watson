const express = require('express')

//router esta dentro ddo express

const router = require('express').Router();

router.use('/', require('./postagens'))
router.use('/', require('./comentarios'))

module.exports = router