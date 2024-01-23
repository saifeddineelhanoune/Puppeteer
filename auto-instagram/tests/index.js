'use strict'

const { test } = require('ava');
const autoInstagram = require('..');

test('basic', (a) => {
    const ig = new autoInstagram()
    a.is(ig.isAuthenticated, false)
    a.is(ig.user, null)
})