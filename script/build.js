#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const got = require('got')
const {chain} = require('lodash')
const verbs = Object.keys(require('http-verbs'))
const baseUrl = 'https://developer.github.com/v3/'

getPaths()
  .then(paths => {
    fs.writeFileSync(
      path.join(__dirname, '../paths.json'),
      JSON.stringify(paths, null, 2)
    )

    return Promise.all(paths.map(getCodeSnippets))
  })
  .then(snippets => {
    snippets = chain(snippets).flatten().sort().value()

    const endpoints = snippets.filter(text => verbs.some(verb => text.startsWith(verb)))
    fs.writeFileSync(
      path.join(__dirname, '../endpoints.json'),
      JSON.stringify(endpoints, null, 2)
    )

    const previewHeaders = snippets.filter(text => text.startsWith('application/'))
    fs.writeFileSync(
      path.join(__dirname, '../preview-headers.json'),
      JSON.stringify(previewHeaders, null, 2)
    )
  })

async function getPaths () {
  const page = await got(baseUrl)
  const $ = cheerio.load(page.body)
  return $('.sidebar-menu a')
    .map((i, el) => $(el).attr('href'))
    .get()
    .filter(href => href.startsWith('/v3/') && !href.includes('#'))
    .map(href => href.replace('/v3/', ''))
    .filter(href => href.length)
    .sort()
}

async function getCodeSnippets (path) {
  const url = baseUrl + path
  const page = await got(url)
  const $ = cheerio.load(page.body)

  return $('pre code')
    .map((i, el) => $(el).text().trim())
    .get()
}
