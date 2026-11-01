import * as data from './data/mock';
import { AppShell, Card, Badge } from './components/ui';

const records = data.Phrase as any[];

export function App(): HTMLElement {
  const root = document.createElement('div');
  root.className = 'tw-flex tw-flex-col tw-gap-4';
  const chips = ['All','Hymn','Gospel','Greeting','Declaration','Praise'];
  const groups: Record<string, any[]> = {};
  records.forEach((p: any) => { (groups[p.lang] = groups[p.lang] || []).push(p); });
  const langLabel: Record<string, string> = { en:'EN', sw:'SW', ar:'AR', pt:'PT', fr:'FR', it:'IT', he:'HE' };
  const fill = (lang: string) => {
    const list = groups[lang] || [];
    return list.map((p: any) =>
      '<button data-en="' + p.en + '" class="tw-bg-white tw-border tw-border-slate-200 twrounded-lg tw-p-4 tw-text-left tw-shadow-sm tw-transition hover:shadow-md tw-bg-slate-50 tw-text-left">' +
        '<div class="tw-text-3xl tw-mb-1">' + p.emoji + '</div>' +
        '<div class="tw-font-semibold tw-text-slate-800 dark:tw-text-white tw-leading-tight">' + p.key + '</div>' +
        '<div class="tw-text-xs tw-text-slate-500 tw-mt-0.5">' + langLabel[p.lang] + '</div>' +
      '</button>').join('');
  };
  const player = (p: any) => {
    const a = document.getElementById('phrase-player');
    if (a) { a.currentTime = 0; a.play().catch(() => {}); }
    document.querySelectorAll('.now-playing').forEach((e: Element) => e.classList.remove('now-playing'));
    const b = root.querySelector('button[data-en="' + p.en + '"]') as HTMLElement;
    if (b) b.classList.add('now-playing');
  };
  root.innerHTML = `
    <div id="clock" class="tw-text-xs tw-text-right tw-text-slate-400"></div>
    <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-4">
      <div class="lg:tw-span-2">
        <div class="tw-flex tw-flex-wrap tw-gap-2 tw-mb-3">
          ${chips.map(c => '<button class="tw-bg-white tw-border tw-border-slate-200 twrounded-md tw-px-3 tw-py-1.5 tw-text-sm tw-text-slate-600 tw-transition hover:bg-slate-50">' + c + '</button>').join('')}
        </div>
        <div id="phrase-grid" class="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-5 tw-gap-3">
          ${fill('en')}${fill('sw')}${fill('ar')}
        </div>
      </div>
      <div class="lg:tw-w-80">
        <Card title="Soundboard" desc="Tap a phrase to play it.">
          <div class="tw-flex tw-items-center tw-gap-3 tw-mt-2">
            <div id="eq" class="tw-w-28 tw-h-3 tw-rounded-full tw-bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
            <input id="vol" type="range" min="0" max="100" value="72" class="tw-w-full tw-accent-violet-500" aria-label="Volume">
          </div>
          <div class="tw-flex tw-gap-2 tw-mt-3">
            <button class="tw-bg-violet-500 tw-text-white tw-rounded-md tw-px-3 tw-py-1.5 tw-text-sm" onclick="document.getElementById('phrase-player')?.play()">▶ Play</button>
            <button class="tw-bg-slate-100 tw-text-slate-600 tw-rounded-md tw-px-3 tw-py-1.5 tw-text-sm">🔁 Loop</button>
            <button class="tw-bg-slate-100 tw-text-slate-600 tw-rounded-md tw-px-3 tw-py-1.5 tw-text-sm">🔁 Shuffle</button>
          </div>
          <div class="tw-flex tw-items-center tw-gap-2 tw-mt-3 tw-text-sm tw-text-slate-500">
            <span class="tw-font-medium tw-text-slate-700 dark:tw-text-white">Amazing Grace</span>
            <span class="tw-text-xs tw-text-slate-400">0:34</span>
          </div>
          <audio id="phrase-player" class="sr-only" src="assets/phrases/amazing-grace.mp3"></audio>
        </Card>
      </div>
    </div>
  `;
  document.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('button[data-en]');
    if (btn) {
      const p = records.find((x: any) => x.en === btn.getAttribute('data-en'));
      if (p) player(p);
    }
  });
  const vol = document.getElementById('vol') as HTMLInputElement;
  vol.addEventListener('input', () => {
    const a = document.getElementById('phrase-player');
    if (a) a.volume = vol.value / 100;
  });
  setInterval(() => { const d = new Date(); document.getElementById('clock')!.textContent = d.toLocaleTimeString(); }, 1000);
  return root;
}
