import { GreetingApp } from './data/greetings'
import './style.css'

const app = new GreetingApp()

const languageSelect = document.getElementById('lang-filter') as HTMLSelectElement
const countEl = document.getElementById('phrase-count') as HTMLSpanElement
const greetingList = document.getElementById('greeting-list') as HTMLUListElement
const langFooter = document.getElementById('lang-footer') as HTMLParagraphElement
const playAllBtn = document.getElementById('play-all') as HTMLButtonElement
const clearBtn = document.getElementById('clear-history') as HTMLButtonElement

const langs = Array.from(new Set(app.greetings.map((g) => g.language))).sort()
langs.forEach((lang) => {
  const opt = document.createElement('option')
  opt.value = lang
  opt.textContent = lang
  languageSelect.appendChild(opt)
})

let currentLang = 'All'
const history: typeof app.greetings = []
let historyIndex = -1

function playGreeting(g: typeof app.greetings[0]) {
  const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.type = 'sine'
  osc.frequency.setValueAtTime(g.frequency || 440, ctx.currentTime)
  gain.gain.setValueAtTime(0.15, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5)
  osc.start(ctx.currentTime)
  osc.stop(ctx.currentTime + 1.5)

  history.push(g)
  historyIndex = history.length - 1
  updateHistoryFooter()
}

function getFiltered(): typeof app.greetings {
  if (currentLang === 'All') return app.greetings
  return app.greetings.filter((g) => g.language === currentLang)
}

function renderList() {
  const filtered = getFiltered()
  countEl.textContent = filtered.length.toLocaleString()
  greetingList.innerHTML = ''
  filtered.forEach((g) => {
    const li = document.createElement('li')
    li.className = 'greeting-item'
    const header = document.createElement('div')
    header.className = 'greeting-header'
    header.innerHTML = `<span class="lang-tag">${g.language}</span><span class="greeting-text">${g.phrase}</span>`
    li.appendChild(header)
    if (g.translation) {
      const trans = document.createElement('div')
      trans.className = 'greeting-trans'
      trans.textContent = `EN: ${g.translation}`
      li.appendChild(trans)
    }
    const btn = document.createElement('button')
    btn.className = 'play-btn'
    btn.textContent = '▶ Play'
    btn.addEventListener('click', () => playGreeting(g))
    li.appendChild(btn)
    greetingList.appendChild(li)
  })
}

function updateHistoryFooter() {
  if (history.length === 0) {
    langFooter.textContent = ''
    clearBtn.style.display = 'none'
    return
  }
  const last = history[historyIndex]
  langFooter.innerHTML = `
    <span>Last: <strong>${last.phrase}</strong> (${last.language})</span>
    <button id="undo-history" class="btn-link">↩ Undo</button>
    <button id="clear-history-btn" class="btn-link" style="display:block; margin-left:8px;">✕ Clear</button>
  `
  const undo = document.getElementById('undo-history')
  const clear = document.getElementById('clear-history-btn')
  if (undo) {
    undo.addEventListener('click', () => {
      if (historyIndex > 0) {
        historyIndex--
        const g = history[historyIndex]
        playGreeting(g)
        renderList()
      }
    })
  }
  if (clear) {
    clear.addEventListener('click', () => {
      history.length = 0
      historyIndex = -1
      updateHistoryFooter()
      renderList()
    })
  }
}

languageSelect.addEventListener('change', () => {
  currentLang = languageSelect.value
  renderList()
})

playAllBtn.addEventListener('click', () => {
  const filtered = getFiltered()
  let idx = 0
  const interval = setInterval(() => {
    if (idx >= filtered.length) {
      clearInterval(interval)
      return
    }
    playGreeting(filtered[idx])
    idx++
  }, 400)
})

clearBtn.addEventListener('click', () => {
  history.length = 0
  historyIndex = -1
  updateHistoryFooter()
  renderList()
})

renderList()
