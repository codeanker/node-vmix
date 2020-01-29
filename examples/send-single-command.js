// Import modules from the package
// Note when using as npm dep: swap in: 'node-vmix' instead of '../index'
const { ConnectionTCP } = require('../dist/index').default

// Instanciate connection to vMix instance via TCP localhost:8099
const vMixAddress = 'localhost'
const connection = new ConnectionTCP(vMixAddress)

connection.on('connect', () => {
  console.log('Connected')
})
connection.on('error', (error) => {
  console.error('Error', error)
})

// Perform commands directly on connection
// You can use any vMix Function here
// List of all functions here: 
// https://www.vmix.com/help22/ShortcutFunctionReference.html

// Perform a single command - a simple cut
connection.send({ Function: 'Cut' })
