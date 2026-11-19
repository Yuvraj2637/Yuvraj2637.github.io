function playSound() {}
// --- Interactive Lab Simulator 1: Tessch Recommender ---
const dwellSlider = document.querySelector('#dwell-slider');
const dwellValEl = document.querySelector('#dwell-val');
const tabFocusToggle = document.querySelector('#tab-focus-toggle');
const recencySlider = document.querySelector('#recency-slider');
const recencyValEl = document.querySelector('#recency-val');
const statusTagEl = document.querySelector('#sim-telemetry-status');
const attnScoreEl = document.querySelector('#attn-score');
const decayValEl = document.querySelector('#decay-val');
const tesschRecList = document.querySelector('#tessch-rec-list');

function updateTesschSim() {
  if (!dwellSlider || !tesschRecList) return;
  const dwellSec = parseFloat(dwellSlider.value);
  dwellValEl.textContent = `${dwellSec.toFixed(1)} seconds`;
  const isFocused = tabFocusToggle ? tabFocusToggle.checked : true;
  const daysAgo = parseInt(recencySlider ? recencySlider.value : '2');
  if (recencyValEl) recencyValEl.textContent = `${daysAgo} days ago`;

  // Filter rules:
  // If tab not focused -> invalid background tab!
  // If dwell < 2.0s -> bounce!
  if (!isFocused) {
    statusTagEl.textContent = 'DISCARDED (BACKGROUND TAB BLUR)';
    statusTagEl.style.color = '#ef476f';
    attnScoreEl.textContent = '0.00 (Filtered)';
    decayValEl.textContent = 'N/A';
    tesschRecList.innerHTML = `
      <div style="padding:14px; background:#1c1315; border:1px solid #5a2327; border-radius:8px; font-size:13px; color:#f8b4be;">
        ⚠️ Browser attention telemetry filtered out window blur. Zero dwell time attributed. Falling back to global catalog popularity.
      </div>`;
    return;
  }

  if (dwellSec < 2.0) {
    statusTagEl.textContent = 'DISCARDED (RAPID BOUNCE < 2.0s)';
    statusTagEl.style.color = '#ffd166';
    attnScoreEl.textContent = '0.00 (Bounced)';
    decayValEl.textContent = 'N/A';
    tesschRecList.innerHTML = `
      <div style="padding:14px; background:#1c1913; border:1px solid #5c4b1d; border-radius:8px; font-size:13px; color:#f8e4b4;">
        ⚠️ Visitor bounced in under 2.0s. Insufficient engagement signal. Cold-start fallback active.
      </div>`;
    return;
  }

  statusTagEl.textContent = 'VALID ATTENTION CAPTURED';
  statusTagEl.style.color = 'var(--emerald)';

  const attentionRaw = Math.min(1.0, dwellSec / 20.0);
  const decayWeight = Math.exp(-0.035 * daysAgo);
  const finalScore = attentionRaw * decayWeight;

  attnScoreEl.textContent = `${finalScore.toFixed(2)} (Active)`;
  decayValEl.textContent = `${decayWeight.toFixed(2)}`;

  const catalog = [
    { name: 'Tessch Modular Urban Boot', baseMatch: 0.94, cat: 'Boots' },
    { name: 'Aero-Mesh Interchangeable Sole', baseMatch: 0.88, cat: 'Accessories' },
    { name: 'Everyday Minimalist Sneaker', baseMatch: 0.81, cat: 'Sneakers' }
  ];

  tesschRecList.innerHTML = catalog.map(item => {
    const scorePct = Math.round(item.baseMatch * (0.6 + finalScore * 0.4) * 100);
    return `
      <div class="rec-item">
        <div>
          <strong>${item.name}</strong>
          <span style="font:11px var(--mono); color:var(--muted); margin-left:8px;">[${item.cat}]</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <div class="rec-bar-wrap">
            <div class="rec-bar" style="width:${scorePct}%;"></div>
          </div>
          <span style="font:11px var(--mono); color:var(--cyan); width:35px; text-align:right;">${scorePct}%</span>
        </div>
      </div>
    `;
  }).join('');
}

dwellSlider?.addEventListener('input', updateTesschSim);
tabFocusToggle?.addEventListener('change', updateTesschSim);
recencySlider?.addEventListener('input', updateTesschSim);
updateTesschSim();

// --- Interactive Lab Simulator 2: ScholarRAG Benchmarker ---
const ragQuerySelect = document.querySelector('#rag-query-select');
const ragRecallBadge = document.querySelector('#rag-recall-badge');
const ragResultsBox = document.querySelector('#rag-results-box');
let ragMode = 'hybrid';

const ragData = {
  flash: {
    hybrid: {
      recall: '100% RECALL@1',
      latency: '1.47s',
      chunks: [
        { title: 'FlashAttention-2 (Dao, 2023)', score: '0.962', pass: 'Tiling forward pass across GPU SRAM minimizes high-bandwidth memory (HBM) read/writes from O(N²) to O(N).', cited: true },
        { title: 'Flash-Decoding (Tri Dao et al.)', score: '0.891', pass: 'Parallelizing along the sequence dimension during inference attention generation.', cited: true }
      ]
    },
    dense: {
      recall: '66% RECALL@1',
      latency: '0.42s',
      chunks: [
        { title: 'Self-Attention Mechanisms', score: '0.781', pass: 'General attention complexity discussion without kernel-level SRAM tiling specifics.', cited: false },
        { title: 'FlashAttention-2', score: '0.742', pass: 'Forward pass tiling overview.', cited: true }
      ]
    },
    bm25: {
      recall: '50% RECALL@1',
      latency: '0.08s',
      chunks: [
        { title: 'FlashAttention-2', score: '18.4 BM25', pass: 'Matched exact token "FlashAttention-2" in abstract.', cited: true },
        { title: 'Transformer Scaling Laws', score: '11.2 BM25', pass: 'Mentions SRAM bandwidth constraints.', cited: false }
      ]
    }
  },
  lora: {
    hybrid: {
      recall: '100% RECALL@1',
      latency: '1.38s',
      chunks: [
        { title: 'LoRA: Low-Rank Adaptation (Hu et al.)', score: '0.984', pass: 'W = W0 + B*A where B in R^{d x r} and A in R^{r x k} with r << min(d,k). Retains full quality with r=16.', cited: true },
        { title: 'QLoRA: Efficient Finetuning', score: '0.912', pass: '4-bit NormalFloat (NF4) quantization coupled with double quantization and paged optimizers.', cited: true }
      ]
    },
    dense: {
      recall: '75% RECALL@1',
      latency: '0.39s',
      chunks: [
        { title: 'Parameter-Efficient Fine-Tuning', score: '0.805', pass: 'Adapter layers vs prompt tuning comparisons.', cited: false }
      ]
    },
    bm25: {
      recall: '70% RECALL@1',
      latency: '0.07s',
      chunks: [
        { title: 'LoRA Paper', score: '22.1 BM25', pass: 'Rank decomposition r=16 exact keyword occurrences.', cited: true }
      ]
    }
  },
  kv: {
    hybrid: {
      recall: '100% RECALL@1',
      latency: '1.52s',
      chunks: [
        { title: 'KV-Cache Compression Survey', score: '0.953', pass: 'FP8 E4M3 vs INT4 asymmetric grouping for multi-query attention head states.', cited: true }
      ]
    },
    dense: {
      recall: '60% RECALL@1',
      latency: '0.41s',
      chunks: [
        { title: 'Long-Context Transformers', score: '0.740', pass: 'General memory footprint discussions.', cited: false }
      ]
    },
    bm25: {
      recall: '65% RECALL@1',
      latency: '0.09s',
      chunks: [
        { title: 'Quantization Frameworks', score: '16.8 BM25', pass: 'Mentions FP8 and INT4 formats.', cited: false }
      ]
    }
  }
};

function updateScholarSim() {
  if (!ragQuerySelect || !ragResultsBox) return;
  const q = ragQuerySelect.value;
  const data = ragData[q][ragMode];

  if (ragRecallBadge) {
    ragRecallBadge.textContent = `${data.recall} · LATENCY: ${data.latency}`;
    ragRecallBadge.style.color = ragMode === 'hybrid' ? 'var(--emerald)' : 'var(--amber)';
  }

  ragResultsBox.innerHTML = data.chunks.map((c, i) => `
    <div style="background:var(--surface); border:1px solid var(--line); border-radius:8px; padding:12px;">
      <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
        <span style="font-weight:700; font-size:13px; color:var(--ink);">${c.title}</span>
        <span style="font:11px var(--mono); color:var(--cyan);">Score: ${c.score}</span>
      </div>
      <p style="font-size:13px; color:var(--muted); line-height:1.6; margin-bottom:8px;">"${c.pass}"</p>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font:10px var(--mono); color:${c.cited ? 'var(--emerald)' : '#ef476f'};">
          ${c.cited ? '✓ ILLUSTRATIVE CITATION MATCH' : '✗ PASSAGE NOT STRICTLY ATTRIBUTABLE'}
        </span>
        <span style="font:10px var(--mono); color:var(--muted);">Rank #${i+1}</span>
      </div>
    </div>
  `).join('');
}

ragQuerySelect?.addEventListener('change', updateScholarSim);
document.querySelector('#btn-mode-hybrid')?.addEventListener('click', () => {
  ragMode = 'hybrid';
  document.querySelectorAll('#sim-scholar .filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('#btn-mode-hybrid').classList.add('active');
  playSound('tab');
  updateScholarSim();
});
document.querySelector('#btn-mode-dense')?.addEventListener('click', () => {
  ragMode = 'dense';
  document.querySelectorAll('#sim-scholar .filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('#btn-mode-dense').classList.add('active');
  playSound('tab');
  updateScholarSim();
});
document.querySelector('#btn-mode-bm25')?.addEventListener('click', () => {
  ragMode = 'bm25';
  document.querySelectorAll('#sim-scholar .filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('#btn-mode-bm25').classList.add('active');
  playSound('tab');
  updateScholarSim();
});
updateScholarSim();

// --- Interactive Lab Simulator 3: Physics of Paintings ---
const artDescBox = document.querySelector('#art-desc-box');
const artPlotWrap = document.querySelector('#art-plot-wrap');
const artTitleTag = document.querySelector('#art-title-tag');
const artSlopeTag = document.querySelector('#art-slope-tag');
const artHNorm = document.querySelector('#art-h-norm');
const artTextureLabel = document.querySelector('#art-texture-label');

const paintingData = {
  vangogh: {
    title: 'VINCENT VAN GOGH — THE STARRY NIGHT (1889)',
    slope: 'SLOPE β ≈ -1.33',
    h: '0.573',
    texture: 'High-k Rhythmic Impasto',
    desc: 'Dense, undulating brushstrokes disperse Fourier energy evenly across high spatial frequencies (shallow spectral slope). This mathematically yields the highest Shannon shell entropy of all analyzed movements.',
    linePath: 'M 25 50 Q 80 80, 240 115',
    color: '#ffd166'
  },
  davinci: {
    title: 'LEONARDO DA VINCI — MONA LISA (1503)',
    slope: 'SLOPE β ≈ -1.95',
    h: '0.424',
    texture: 'Smooth Sfumato Tonal Gradients',
    desc: 'Classical realism sfumato technique blends pigment smoothly, heavily concentrating energy in low spatial frequencies. High frequencies roll off sharply, leading to a steep spectral slope and lower entropy.',
    linePath: 'M 25 40 Q 75 105, 240 155',
    color: '#7ce5e0'
  },
  kandinsky: {
    title: 'WASSILY KANDINSKY — COMPOSITION VII (1913)',
    slope: 'SLOPE β ≈ -1.61',
    h: '0.512',
    texture: 'Sharp Geometric Edges & Color Patches',
    desc: 'Sharp contrasting geometrical boundaries create intermittent high-frequency bursts, yielding an intermediate entropy between classical realism and post-impressionist impasto.',
    linePath: 'M 25 45 Q 80 95, 240 135',
    color: '#d5bbf7'
  }
};

function renderPainting(key) {
  const d = paintingData[key];
  if (!d) return;

  if (artTitleTag) artTitleTag.textContent = d.title;
  if (artSlopeTag) {
    artSlopeTag.textContent = d.slope;
    artSlopeTag.style.color = d.color;
  }
  if (artHNorm) artHNorm.textContent = d.h;
  if (artTextureLabel) artTextureLabel.textContent = d.texture;
  if (artDescBox) artDescBox.textContent = d.desc;

  if (artPlotWrap) {
    artPlotWrap.innerHTML = `
      <svg viewBox="0 0 280 180" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="180" rx="6" fill="#090f17"/>
        <line x1="25" y1="20" x2="25" y2="160" stroke="#253a4d" stroke-width="1.5"/>
        <line x1="25" y1="160" x2="265" y2="160" stroke="#253a4d" stroke-width="1.5"/>
        <text x="30" y="30" fill="#6a8fae" font-family="'DM Mono',monospace" font-size="8">Log E(k)</text>
        <text x="215" y="152" fill="#6a8fae" font-family="'DM Mono',monospace" font-size="8">Log k →</text>
        <!-- Kolmogorov reference k^-5/3 -->
        <line x1="25" y1="65" x2="240" y2="145" stroke="#3d586e" stroke-width="1" stroke-dasharray="3 3"/>
        <text x="175" y="132" fill="#547794" font-family="'DM Mono',monospace" font-size="7">k^-5/3 (Kolmogorov)</text>
        <!-- Art curve -->
        <path d="${d.linePath}" stroke="${d.color}" stroke-width="2.5" fill="none"/>
      </svg>
    `;
  }
}

document.querySelector('#art-vangogh')?.addEventListener('click', () => {
  playSound('tab');
  document.querySelectorAll('#sim-spectral .filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('#art-vangogh').classList.add('active');
  renderPainting('vangogh');
});
document.querySelector('#art-davinci')?.addEventListener('click', () => {
  playSound('tab');
  document.querySelectorAll('#sim-spectral .filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('#art-davinci').classList.add('active');
  renderPainting('davinci');
});
document.querySelector('#art-kandinsky')?.addEventListener('click', () => {
  playSound('tab');
  document.querySelectorAll('#sim-spectral .filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('#art-kandinsky').classList.add('active');
  renderPainting('kandinsky');
});
renderPainting('vangogh');

// --- Interactive Lab Simulator 4: MediQ Diagnostics ---
const symptomInputs = document.querySelectorAll('#symptom-checkboxes input');
const mediqDiffList = document.querySelector('#mediq-diff-list');
const mediqPrecaution = document.querySelector('#mediq-precaution');

function updateMediQSim() {
  if (!mediqDiffList) return;
  const checked = Array.from(symptomInputs).filter(i => i.checked).map(i => i.value);

  let pDengue = 0.1, pChikungunya = 0.1, pMalaria = 0.1, pFlu = 0.1, pGastro = 0.05;

  if (checked.includes('fever')) { pDengue += 0.35; pMalaria += 0.3; pFlu += 0.25; }
  if (checked.includes('joint')) { pChikungunya += 0.45; pDengue += 0.2; }
  if (checked.includes('rash')) { pDengue += 0.3; pChikungunya += 0.2; }
  if (checked.includes('chills')) { pMalaria += 0.45; pFlu += 0.15; }
  if (checked.includes('vomiting')) { pDengue += 0.15; pGastro += 0.5; }
  if (checked.includes('cough')) { pFlu += 0.4; }
  if (checked.includes('fatigue')) { pDengue += 0.1; pMalaria += 0.1; }

  const total = pDengue + pChikungunya + pMalaria + pFlu + pGastro;
  const diseases = [
    { name: 'Dengue Viral Fever', score: Math.round((pDengue / total) * 100), col: 'var(--cyan)' },
    { name: 'Chikungunya Arthritic Illness', score: Math.round((pChikungunya / total) * 100), col: '#8fa0e8' },
    { name: 'Malaria Infection (Plasmodium)', score: Math.round((pMalaria / total) * 100), col: '#ffd166' },
    { name: 'Acute Viral Influenza', score: Math.round((pFlu / total) * 100), col: '#a5a8cc' },
    { name: 'Acute Gastroenteritis', score: Math.round((pGastro / total) * 100), col: '#ef476f' }
  ].sort((a, b) => b.score - a.score).slice(0, 3);

  mediqDiffList.innerHTML = diseases.map(d => `
    <div style="background:var(--surface); border:1px solid var(--line); border-radius:8px; padding:10px 14px;">
      <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
        <span style="font-size:13px; font-weight:600; color:var(--ink);">${d.name}</span>
        <span style="font:12px var(--mono); color:${d.col};">${d.score}% sample score</span>
      </div>
      <div style="width:100%; height:6px; background:#182230; border-radius:3px; overflow:hidden;">
        <div style="width:${d.score}%; height:100%; background:${d.col};"></div>
      </div>
    </div>
  `).join('');

  if (mediqPrecaution) {
    mediqPrecaution.innerHTML = `
      <strong>Educational demonstration:</strong> These hand-weighted example scores demonstrate the interface. They are not outputs from the trained model and do not provide a diagnosis.
    `;
  }
}

symptomInputs.forEach(input => input.addEventListener('change', () => {
  playSound('click');
  updateMediQSim();
}));
updateMediQSim();

// --- Lab Tabs Switching ---
document.querySelectorAll('.lab-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    playSound('tab');
    document.querySelectorAll('.lab-tab-btn').forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-selected', String(b === btn));
    });
    document.querySelectorAll('.lab-panel').forEach(p => {
      p.classList.toggle('active', p.id === btn.dataset.tab);
    });
  });
});


