#!/usr/bin/env node
/**
 * Fetches the 50 most recent lobbying filings from the Senate LDA API
 * and saves them to public/data/recent-filings.json
 */

const fs = require('fs')
const path = require('path')

const BASE_URL = 'https://lda.senate.gov/api/v1/filings/'
const PARAMS = 'filing_year=2025&page_size=25&ordering=-dt_posted'

async function fetchPage(url) {
  console.log(`Fetching: ${url}`)
  const res = await fetch(url, {
    headers: { 'Accept': 'application/json' }
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
  return res.json()
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main() {
  const allFilings = []

  // Page 1
  const page1 = await fetchPage(`${BASE_URL}?${PARAMS}`)
  allFilings.push(...page1.results)
  console.log(`Page 1: ${page1.results.length} results`)

  // Page 2
  if (page1.next) {
    await sleep(500)
    const page2 = await fetchPage(page1.next)
    allFilings.push(...page2.results)
    console.log(`Page 2: ${page2.results.length} results`)
  }

  // Trim to 50
  const filings = allFilings.slice(0, 50)

  const outPath = path.join(__dirname, '..', 'public', 'data', 'recent-filings.json')
  fs.writeFileSync(outPath, JSON.stringify(filings, null, 2))
  console.log(`Saved ${filings.length} filings to ${outPath}`)
}

main().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
