// Portfolio Projects Data & Visuals for Yuvraj Singh Chaudhary (IIT Kanpur '26)

const projects = [
  {
    id: 'scholar',
    title: 'ScholarRAG: Research Paper RAG & Evaluation Engine',
    shortTitle: 'ScholarRAG',
    category: 'ai-ml',
    kind: 'RETRIEVAL-AUGMENTED GENERATION · LLM EVALUATION',
    year: '2026',
    role: 'Self Project · IIT Kanpur',
    duration: 'May’26 – Jun’26',
    color: '#1a332d',
    tech: ['Python', 'FastAPI', 'ChromaDB', 'BM25Plus', 'BGE Embeddings', 'Cross-Encoder', 'Streamlit'],
    description: 'Making scientific papers conversational with 100% citation-grounded evidence and IR evaluation.',
    overview: 'A production-grade, citation-grounded hybrid retrieval engine engineered over 30 state-of-the-art research papers on efficient LLMs and Transformer acceleration (1,242 structured chunks). It pairs dense semantic embeddings with sparse lexical search and cross-encoder reranking to ensure precise, hallucination-free scientific discovery.',
    problem: 'Standard vector databases stumble on scientific literature because dense embeddings miss exact technical abbreviations (e.g., FlashAttention-2, LoRA rank r=16), while pure lexical search misses conceptual queries. Furthermore, generative LLMs often hallucinate citations that do not exist in the source text.',
    approach: 'Structure-aware PDF parsing extracts clean markdown sections, retaining heading depth, tables, and mathematical formulas. Ingestion indexes chunks into BAAI/bge-small-en-v1.5 dense vectors (ChromaDB) and BM25Plus sparse indices. Candidate sets are merged via Reciprocal Rank Fusion (RRF, k=60), routed through a bge-reranker-base Cross-Encoder, and evaluated by an LLM Faithfulness Auditor that flags any claim without direct source attribution.',
    details: [
      'Engineered a 30-paper scientific corpus indexed into 1,242 structure-aware chunks with preserved section metadata.',
      'Hybrid Retrieval: Merges dense BGE embeddings and BM25Plus sparse index using Reciprocal Rank Fusion (RRF, k=60).',
      'Cross-Encoder Reranker: Re-scores top-20 retrieved candidates, achieving 100% Paper Recall@1 on comparative queries in 1.47s.',
      'Custom IR Benchmarking: Developed an evaluation suite measuring Recall@K, Precision@K, MRR, and nDCG across 30 ground-truth query sets.',
      'Automated Faithfulness Auditor: Inspects generated LLM answers against cited context passages to guarantee 100% groundedness.',
      'Full-Stack Delivery: High-throughput FastAPI backend coupled with an interactive Streamlit research workbench.'
    ],
    math: 'RRF_Score(d) = \\sum_{m \\in M} \\frac{1}{60 + r_m(d)} \\quad \\bigg| \\quad nDCG@K = \\frac{DCG@K}{IDCG@K}',
    metrics: [
      { label: 'Paper Recall@1', value: '100%', note: 'On comparative research queries' },
      { label: 'End-to-End Latency', value: '1.47s', note: 'FastAPI + Reranker pipeline' },
      { label: 'Corpus Depth', value: '1,242', note: 'Structure-aware paper chunks' },
      { label: 'Ground Truth Queries', value: '30', note: 'Custom IR benchmark suite' }
    ],
    repo: 'https://github.com/Yuvraj2637/ScholarRAG',
    liveDemo: null
  },
  {
    id: 'agents',
    title: 'Multi-Agent Data Analyst System',
    shortTitle: 'Multi-Agent Analyst',
    category: 'ai-ml',
    kind: 'AUTONOMOUS AGENT WORKFLOWS · TABULAR INTELLIGENCE',
    year: '2026',
    role: 'Self Project · IIT Kanpur',
    duration: 'Jun’26 – Jul’26',
    color: '#25291e',
    tech: ['Python', 'Pandas', 'NumPy', 'Gemini API', 'Matplotlib', 'Seaborn', 'Streamlit'],
    description: 'Autonomous cooperating agents converting natural language questions into verified data calculations and charts.',
    overview: 'An autonomous, production-ready multi-agent analytics architecture. Users upload raw CSV or Excel datasets and ask natural-language questions; five specialized cooperating agents collaborate through deterministic code execution to deliver verified calculations, automated chart selections, and executive briefings.',
    problem: 'LLMs suffer from arithmetic hallucinations and probabilistic guesswork when aggregating tabular data directly. Relying on an LLM to calculate revenue sums or correlations leads to silent numerical errors in business-critical reporting.',
    approach: 'Employs a strict separation between linguistic reasoning and mathematical computation. Specialized Planner, Critic, Analyst, Visualization, and Report agents cooperate around a trusted local Pandas/NumPy execution environment. Calculations execute strictly in local Python; LLMs interpret intent, suggest hypotheses, and summarize verified findings.',
    details: [
      '5 Cooperating Specialized Agents: Planner, Pre-Execution Critic, Data Analyst, Smart Visualizer, and Executive Report Critic.',
      'Zero Numerical Hallucination: All mathematical calculations, group-by aggregates, and statistical tests execute in trusted local Pandas/NumPy.',
      'Smart Automated Chart Selection: Intelligently selects from 7 visualization types (Bar, Time Series, Scatter, Box, Histogram, Donut, Heatmap).',
      'Dual Operation Modes: Runs in 100% offline Deterministic Mode or LLM-Assisted Mode (Gemini API with strict JSON schema constraints).',
      'Dataset Profiling: Automated pre-flight scanning for missingness, type mismatches, high cardinality, and anomalous values.',
      'Observability: Visual timeline execution traces tracking step-by-step agent decisions, token counts, and compute latencies.'
    ],
    math: '\\text{Hallucination Rate} = 0.0\\% \\quad \\bigg| \\quad \\text{Execution Engine: Sandboxed Python Runtime}',
    metrics: [
      { label: 'Math Hallucinations', value: '0.0%', note: 'Sandboxed code execution' },
      { label: 'Specialized Agents', value: '5', note: 'Planner, Critic, Analyst, Viz, Report' },
      { label: 'Chart Varieties', value: '7 Types', note: 'Automatic heuristic selection' },
      { label: 'Resilience', value: '100% Offline', note: 'Deterministic rule-based fallback' }
    ],
    repo: 'https://github.com/Yuvraj2637/Multi-Agent-Data-Analyst',
    liveDemo: null
  },
  {
    id: 'tessch',
    title: 'Behavior-Based Product Recommendation Engine',
    shortTitle: 'Tessch Recommender',
    category: 'data-systems',
    kind: 'RECOMMENDER SYSTEMS · PRODUCTION MICROSERVICE',
    year: '2026',
    role: 'Industry Experience · Tessch Footwear Pvt. Ltd.',
    duration: 'Jun’26 – Jul’26',
    color: '#2d271f',
    tech: ['FastAPI', 'Scikit-learn', 'Pandas', 'SQLite', 'JavaScript', 'HTML5 Visibility API'],
    description: 'Transforming passive user dwell-time into high-precision modular footwear recommendations.',
    overview: 'An end-to-end, privacy-preserving recommendation engine engineered for Tessch Footwear Pvt. Ltd. Rather than relying on intrusive pop-ups or sparse explicit star ratings, the platform captures continuous implicit browser attention (dwell time) to power both personalized rankings and cross-user collaborative filtering.',
    problem: 'Early-stage footwear eCommerce suffers from extreme rating sparsity and high bounce rates. Traditional collaborative filtering fails because less than 1% of visitors leave reviews or sign in before abandoning the cart.',
    approach: 'Client-side telemetry utilizes the HTML5 VisibilityChange API and navigator.sendBeacon to filter background tabs, window switches, and bounce anomalies. An L2-normalized user-item interaction matrix dampens activity power-laws before calculating item-item Cosine Similarity. A 30-day exponential time-decay ranker personalizes returning visitor feeds.',
    details: [
      'Client-Side Attention Capture: Filters tab switches and background window events to isolate active dwell time.',
      'Matrix Normalization: Row-wise L2 normalization in Pandas to balance hyperactive shoppers against casual visitors.',
      'Dual Recommendation Surfaces: /api/recommendations/similar/{id} (Item-Item) and /api/recommendations/user/{id} (Personalized).',
      '2.78x Lift: Achieved a 2.78x increase in category agreement over random baseline on browsing interaction datasets.',
      'Statistical Rigor: Confirmed predictive signal through Spearman rank correlation (ρ = 0.21) and Gini activity distribution analysis.',
      'Production Readiness: Sub-40ms FastAPI serving latency with SQLite caching and dynamic popularity fallbacks for cold-start items.'
    ],
    math: 'S_{ij} = \\frac{\\mathbf{u}_i \\cdot \\mathbf{u}_j}{\\|\\mathbf{u}_i\\|_2 \\|\\mathbf{u}_j\\|_2} \\quad \\bigg| \\quad w(t) = e^{-\\lambda (t_0 - t)} \\cdot \\text{DwellTime}',
    metrics: [
      { label: 'Category Lift', value: '2.78x', note: 'Over random pairing baseline' },
      { label: 'Jaccard Stability', value: '0.940', note: 'Leave-one-user-out consistency' },
      { label: 'Spearman Correlation', value: 'ρ = 0.21', note: 'Dwell time vs purchase intent' },
      { label: 'Serving Latency', value: '<40ms', note: 'FastAPI cached microservice' }
    ],
    repo: 'https://github.com/Yuvraj2637/tessch-recommendation-engine',
    liveDemo: null
  },
  {
    id: 'spectral',
    title: 'The Physics of Paintings: Hydrodynamic Shell Entropy',
    shortTitle: 'Physics of Paintings',
    category: 'research-physics',
    kind: 'COMPUTATIONAL RESEARCH · FOURIER STATISTICAL PHYSICS',
    year: '2026',
    role: 'Course Research · Prof. Mahendra Kumar Verma, IIT Kanpur',
    duration: 'Aug’26',
    color: '#1d2730',
    tech: ['Python', 'NumPy', 'SciPy', '2D FFT', 'Matplotlib', 'Multiprocessing'],
    description: 'Applying hydrodynamic turbulence principles and 2D Fourier spectra to analyze 500 historical artworks.',
    overview: 'A computational physics research project exploring visual texture, spatial frequencies, and aesthetic complexity across 500 paintings and 5 art traditions, adapted from the turbulence framework of Verma & Chatterjee (Phys. Rev. Fluids, 2022).',
    problem: 'Classifying artistic styles is notoriously subjective. Prior computational art analyses relied on ad-hoc color histograms that ignore spatial correlation lengths, brushstroke scales, and physical energy cascades.',
    approach: 'Removed DC brightness per RGB channel, computed 2D Fast Fourier Transforms, and binned kinetic Fourier power into concentric annular wavenumber shells. Calculated normalized Shannon shell entropy and power-law spectral slopes E(k) ∝ k^β across the physical inertial range.',
    details: [
      'Curated 500 high-resolution paintings across 5 art movements: Classical Realism, Modern/Abstract, Picasso, Van Gogh, and Other Traditions.',
      '2D FFT & DC Removal: Extracted kinetic Fourier power across RGB channels without zero-frequency boundary distortion.',
      'Isotropic Shell Binning: Integrated spectral energy across concentric rings S_k to compute 1D radial energy spectrum E(k).',
      'Normalized Shannon Entropy: Quantified how evenly spatial frequencies are distributed throughout the painting surface.',
      'Key Discovery: Van Gogh exhibited the highest mean spectral entropy (0.573) and shallowest slope, mathematically confirming his dense impasto brushwork disperses energy across high wavenumbers.',
      'Realism Contrast: Classical Realism (Da Vinci, Raphael) exhibited steep power-law slopes (-1.82 to -1.95), proving dominant smooth low-frequency contours.'
    ],
    math: 'E(k) = \\sum_{(k_x, k_y) \\in S_k} |\\mathcal{F}\\{I(x,y) - \\bar{I}\\}|^2 \\quad \\bigg| \\quad H_{\\text{norm}} = -\\frac{1}{\\ln N}\\sum P(k)\\ln P(k)',
    metrics: [
      { label: 'Artworks Analyzed', value: '500', note: '5 Distinct historical art traditions' },
      { label: 'Van Gogh Entropy', value: '0.573', note: 'Highest mean normalized shell entropy' },
      { label: 'Classical Slope', value: '-1.95', note: 'Steep drop (Leonardo da Vinci Mona Lisa)' },
      { label: 'Reference Baseline', value: 'k^-5/3', note: 'Kolmogorov turbulence similarity' }
    ],
    repo: null,
    liveDemo: null
  },
  {
    id: 'shift',
    title: 'ShiftGuard10: Robust Image Classification',
    shortTitle: 'ShiftGuard10',
    category: 'ai-ml',
    kind: 'DEEP LEARNING · OUT-OF-DISTRIBUTION ROBUSTNESS',
    year: '2025',
    role: 'Course Project · Dr. Rajesh M. Hegde, IIT Kanpur',
    duration: 'May’25 – Jul’25',
    color: '#2a2d1d',
    tech: ['PyTorch', 'BroadResNet-28-10', 'Stochastic Weight Averaging', 'Mixup', 'PatchMix', 'TTA'],
    description: 'Architecting deep residual networks that resist severe distribution shifts and class imbalance.',
    overview: 'A deep learning system engineered for class-imbalanced, 32×32 image classification under extreme covariate shift and out-of-distribution evaluation environments, achieving a final Macro F1 of 0.91 and Leaderboard Rank 4.',
    problem: 'Standard convolutional networks overfit to spurious background correlations and crumble when test-time data suffers domain drift, illumination shifts, and heavy class imbalance.',
    approach: 'Scaled to a 36.5M-parameter BroadResNet-28-10 with frequency-adjusted cross-entropy loss. Combined Stochastic Weight Averaging (SWA), Mixup convex blending, and PatchMix cut-and-paste augmentation. Deployed a 2-seed ensemble with 13× Test-Time Augmentation (TTA) and high-confidence pseudo-label self-training.',
    details: [
      'BroadResNet-28-10 Architecture: 36.5 million parameters with widened convolutional channels for rich feature representations.',
      'Frequency-Adjusted Loss: Penalized majority classes dynamically to combat extreme distribution skew.',
      'Regularization Suite: Integrated SWA for flat minima convergence, Mixup for smooth decision boundaries, and PatchMix.',
      '13x Test-Time Augmentation (TTA): Multi-crop, horizontal flips, and jitter averaging during inference.',
      'Pseudo-Label Self-Training: Semi-supervised fine-tuning loop (>90% confidence threshold, 15 epochs) bridging the domain gap.',
      'Competition Result: Macro F1 score of 0.91 and 4th place on the public benchmark leaderboard.'
    ],
    math: '\\mathcal{L}_{\\text{adj}} = -\\sum_{c} w_c \\cdot y_c \\log(\\hat{y}_c) \\quad \\bigg| \\quad \\mathbf{x}_{\\text{mix}} = \\lambda \\mathbf{x}_i + (1-\\lambda)\\mathbf{x}_j',
    metrics: [
      { label: 'Final Macro F1', value: '0.91', note: 'On out-of-distribution test set' },
      { label: 'Leaderboard Rank', value: '#4', note: 'Public competitive benchmark' },
      { label: 'Model Parameters', value: '36.5M', note: 'BroadResNet-28-10 backbone' },
      { label: 'Inference TTA', value: '13x', note: 'Ensemble test-time augmentation' }
    ],
    repo: null,
    liveDemo: null
  },
  {
    id: 'mediq',
    title: 'MediQ: Symptom-Based Clinical Diagnostic Engine',
    shortTitle: 'MediQ Diagnostics',
    category: 'ai-ml',
    kind: 'HEALTHCARE AI · CLINICAL DECISION SUPPORT',
    year: '2025–2026',
    role: 'Society of Civil Engineers, IIT Kanpur',
    duration: 'Dec’25 – Jan’26',
    color: '#23253a',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Random Forest', 'Pandas', 'HTML5 / CSS3'],
    description: 'Probabilistic disease inference ranking calibrated Top-5 differential diagnoses with clinical guidance.',
    overview: 'An applied machine learning healthcare triage system that translates patient symptom profiles into calibrated differential diagnoses with accompanying precautions, treatment overviews, and specialist referral recommendations.',
    problem: 'Symptom checkers often output a single blunt prediction without confidence intervals, leading to misinterpretation, unwarranted panic, or ignored symptoms.',
    approach: 'Engineered a robust preprocessing pipeline with fuzzy symptom mapping, duplicate resolution, and stratified 80:20 data splits. Trained a Random Forest classifier with balanced class weighting. Employed predict_proba() to extract confidence-calibrated Top-5 differential diagnoses coupled to a structured medical knowledge base.',
    details: [
      'Multi-Class Disease Classification: Predicts across 40+ acute and chronic conditions from sparse binary symptom vectors.',
      'Class-Imbalance Handling: Integrated balanced class weights in Random Forest ensemble to safeguard rare disease sensitivity.',
      'Probabilistic Triage: Calibrates and ranks Top-5 differential diagnoses with percentage confidence distributions.',
      'Integrated Medical Knowledge Base: Synthesizes disease descriptions, preventative precautions, and recommended dietary interventions.',
      'REST API & Web Interface: Built and deployed a Flask web application with responsive form inputs and clean diagnosis cards.',
      'Mentorship & Leadership: Mentored ~20 IIT Kanpur undergraduates on machine learning workflows, model evaluation, and API deployment.'
    ],
    math: 'P(y = c \\mid \\mathbf{x}) = \\frac{1}{T} \\sum_{t=1}^T P_t(y = c \\mid \\mathbf{x}) \\quad \\bigg| \\quad \\text{Top-5 Calibrated Ranking}',
    metrics: [
      { label: 'Differential Diagnoses', value: 'Top-5', note: 'Calibrated probabilistic ranking' },
      { label: 'Students Mentored', value: '20+', note: 'Hands-on ML & web dev workshops' },
      { label: 'Conditions Covered', value: '40+', note: 'Comprehensive triage knowledge base' },
      { label: 'Architecture', value: 'Flask REST', note: 'Modular microservice design' }
    ],
    repo: 'https://github.com/Yuvraj2637/MediQ',
    liveDemo: null
  },
  {
    id: 'suggesteria',
    title: 'Suggesteria: Content-Based Recommendation Engine',
    shortTitle: 'Suggesteria',
    category: 'data-systems',
    kind: 'RECOMMENDER SYSTEMS · NATURAL LANGUAGE FEATURE PIPELINE',
    year: '2024–2025',
    role: 'Google Developer Groups (GDG)',
    duration: 'Dec’24 – Feb’25',
    color: '#2a2530',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'TF-IDF', 'Pickle'],
    description: 'Deep metadata vectorization and cosine similarity matching thousands of anime titles instantly.',
    overview: 'A content-based recommendation system powered by natural language processing and TF-IDF feature extraction over rich multi-attribute metadata (synopsis, genre tags, studio, media format), serving instantaneous similarity recommendations.',
    problem: 'Anime titles have complex niche genre crossovers and sub-cultures; collaborative filtering fails when a user discovers an obscure or newly released franchise without existing view histories.',
    approach: 'Constructed dense composite metadata corpora combining text synopses, genre labels, and thematic tags. Applied sub-linear TF-IDF vectorization with n-gram tokenization to map titles into high-dimensional vector space. Serialized precomputed similarity matrices into pickle artifacts for sub-30ms client retrieval.',
    details: [
      'Multi-Attribute Metadata Fusion: Tokenized synopses, genre lists, themes, and studios into unified feature documents.',
      'TF-IDF Vectorization: Generated high-dimensional sparse representations with stop-word filtering and unigram/bigram extraction.',
      'Pairwise Cosine Similarity: Calculated comprehensive similarity matrices across the entire title database.',
      'Model Serialization: Pickled vectorizers and similarity tensors to achieve sub-30ms recommendation lookups.',
      'Streamlit Deployment: Deployed an interactive user interface featuring title autocompletion, poster displays, and similarity rankings.'
    ],
    math: '\\text{Cosine Similarity} = \\frac{\\mathbf{v}_a \\cdot \\mathbf{v}_b}{\\|\\mathbf{v}_a\\| \\|\\mathbf{v}_b\\|} \\quad \\bigg| \\quad \\text{TF-IDF}(t, d) = \\text{TF}(t, d) \\times \\log\\frac{N}{\\text{DF}(t)}',
    metrics: [
      { label: 'Query Latency', value: '<30ms', note: 'Pickled precomputed similarity tensor' },
      { label: 'Feature Engineering', value: 'TF-IDF', note: 'Unigram + bigram text vectorization' },
      { label: 'Interface', value: 'Streamlit', note: 'Real-time interactive discovery app' },
      { label: 'Affinity Metric', value: 'Cosine', note: 'Multi-attribute metadata similarity' }
    ],
    repo: 'https://github.com/Yuvraj2637/Suggesteria',
    liveDemo: null
  },
  {
    id: 'gasification',
    title: 'Gasification of Municipal Solid Waste for Methanol Production',
    shortTitle: 'MSW Gasification',
    category: 'core-engineering',
    kind: 'THERMODYNAMIC & CHEMICAL MODELING · TECHNO-ECONOMICS',
    year: '2025',
    role: 'Research Project · Prof. Shantanu De, IIT Kanpur',
    duration: 'May’25 – Jul’25',
    color: '#2b2318',
    tech: ['Aspen Plus', 'Thermodynamics', 'Reaction Kinetics', 'Techno-Economic Modeling', 'Process Sizing'],
    description: 'Simulating commercial-scale MSW gasification, catalytic syngas cleanup, and methanol synthesis in Aspen Plus.',
    overview: 'A comprehensive chemical process simulation and techno-economic feasibility study of a 1 MMTPA Municipal Solid Waste (MSW) gasification facility producing industrial-grade green methanol, balancing syngas stoichiometry and thermal efficiency.',
    problem: 'Urban MSW accumulation causes critical environmental contamination. Converting heterogeneous waste into high-purity chemical fuel requires balancing endothermic gasification reactions with exact H2:CO syngas stoichiometry for catalytic synthesis.',
    approach: 'Simulated multi-agent fluidized bed gasification in Aspen Plus using air, pure O2, steam, and CO2. Integrated syngas cleanup, a Water-Gas Shift (WGS) reactor to tune the stoichiometric module M = (H2 - CO2)/(CO + CO2) ≈ 2.05, and a fixed-bed Cu/ZnO/Al2O3 catalytic methanol synthesis reactor operating at 50–100 bar. Sized 1 MMTPA plant CAPEX/OPEX.',
    details: [
      'Kinetic & Equilibrium Gasification: Modeled pyrolysis, Boudouard, water-gas, and steam-methane reforming reactions in Aspen Plus.',
      'Syngas Conditioning: Integrated acid gas removal and particulate scrubbing to prevent catalyst poisoning.',
      'Water-Gas Shift Integration: Precisely tuned H2:CO ratios to achieve optimal stoichiometric module M ≈ 2.05.',
      'Fixed-Bed Methanol Synthesis: Modeled high-pressure catalytic conversion over Cu/ZnO/Al2O3 catalyst with heat recovery recycle loops.',
      'Techno-Economic Feasibility: Sized CAPEX, OPEX, discounted cash flows, and payback periods for a commercial 1 MMTPA facility.'
    ],
    math: 'M = \\frac{\\text{mol } \\text{H}_2 - \\text{mol } \\text{CO}_2}{\\text{mol } \\text{CO} + \\text{mol } \\text{CO}_2} \\approx 2.05 \\quad \\bigg| \\quad \\text{CO} + 2\\text{H}_2 \\rightleftharpoons \\text{CH}_3\\text{OH}',
    metrics: [
      { label: 'Plant Capacity', value: '1 MMTPA', note: 'Commercial MSW processing scale' },
      { label: 'Stoichiometric Module', value: 'M ≈ 2.05', note: 'Optimal methanol synthesis ratio' },
      { label: 'Simulation Tool', value: 'Aspen Plus', note: 'Kinetic & equilibrium reactor model' },
      { label: 'Economic Sizing', value: 'CAPEX & OPEX', note: 'Payback period & discounted cash flow' }
    ],
    repo: null,
    liveDemo: null
  },
  {
    id: 'turbomachine',
    title: 'Turbomachine Component Scaling Analysis',
    shortTitle: 'Turbomachine Scaling',
    category: 'core-engineering',
    kind: 'COMPRESSIBLE FLUID MECHANICS · AERODYNAMIC SIMILITUDE',
    year: '2026',
    role: 'Course Project · Prof. Tushar Sikroria, IIT Kanpur',
    duration: 'Jan’26 – Apr’26',
    color: '#1a2a33',
    tech: ['MATLAB', 'Compressible Flow', 'Gas Dynamics', 'Non-Dimensional Similitude', 'Optimization'],
    description: 'Dynamic Mach and Reynolds aerodynamic scaling of multi-stage compressors and diffusers under test constraints.',
    overview: 'An aerodynamic and thermodynamic scaling investigation for multi-stage compressor-diffuser setups using real-gas equations of state, ensuring dynamic similitude between full-scale industrial machinery and sub-scale experimental test rigs.',
    problem: 'Full-scale experimental validation of high-pressure turbomachinery is economically prohibitive and exceeds laboratory facility mass-flow and power capacities. Sub-scale testing risks aerodynamic discrepancies unless Mach and Reynolds similitude are rigorously matched.',
    approach: 'Formulated 1D compressible real-gas flow equations across rotor blade rows and vaned diffusers. Enforced non-dimensional Mach number (shock wave similarity), Reynolds number (viscous boundary layer similarity), and flow/stage loading coefficients. Developed a MATLAB multi-parameter constrained optimization pipeline to compute optimal geometric scaling factors and compressor maps.',
    details: [
      '1D Compressible Flow Modeling: Formulated real-gas state relationships across multi-stage compressor and diffuser blade passages.',
      'Dynamic Similitude Enforcement: Matched Mach number Ma and Reynolds number Re criteria to preserve flow shock structures and losses.',
      'Stage Loading & Flow Coefficients: Derived non-dimensional stage loading ψ = Δh0 / U² and flow coefficient φ = Ca / U.',
      'MATLAB Optimization Pipeline: Solved multi-variable non-linear optimization mapping operating points within test bench power limits.',
      'Compressor Performance Mapping: Plotted pressure ratio vs mass flow characteristics to verify adequate stall and surge margins.'
    ],
    math: 'Ma_1 = Ma_2 \\quad \\& \\quad Re_1 = Re_2 \\quad \\bigg| \\quad \\psi = \\frac{\\Delta h_0}{U^2}, \\quad \\phi = \\frac{C_a}{U}',
    metrics: [
      { label: 'Fluid Regime', value: '1D Compressible', note: 'Real-gas thermodynamic state relations' },
      { label: 'Similitude Criteria', value: 'Mach & Reynolds', note: 'Dynamic shock & boundary layer matching' },
      { label: 'Optimization Engine', value: 'MATLAB', note: 'Multi-variable facility constrained pipeline' },
      { label: 'Stability Margin', value: 'Surge & Stall', note: 'Validated on synthetic compressor maps' }
    ],
    repo: null,
    liveDemo: null
  },
  {
    id: 'cryogenic',
    title: 'Cryogenic Energy Storage (CES) System Analysis',
    shortTitle: 'Cryogenic Storage',
    category: 'core-engineering',
    kind: 'ENERGY SYSTEMS · EXERGY ANALYSIS & TECHNO-ECONOMICS',
    year: '2026',
    role: 'Course Project · Prof. Abhishek Sarkar, IIT Kanpur',
    duration: 'Jan’26 – Apr’26',
    color: '#19262f',
    tech: ['Thermodynamic Modeling', 'Second-Law Exergy', 'Cryogenics', 'Process Engineering', 'Python'],
    description: 'Full-cycle thermodynamic, second-law exergy, and LCOS modeling for utility-scale liquid air energy storage.',
    overview: 'A complete thermodynamic and economic evaluation of a grid-scale Liquid Air Energy Storage (LAES / CES) system, evaluating multi-stage intercooled compression, Claude liquefaction, cryogenic tank storage boil-off, and reheated expansion.',
    problem: 'Renewable power grids suffer from intermittent generation; large-scale storage alternatives like pumped-hydro require specific geographical terrain, while lithium batteries degrade rapidly and carry high supply-chain costs.',
    approach: 'Developed a comprehensive cycle model covering 3-stage compression, waste heat capture, cold recycle integration, flash liquefaction, and 3-stage reheated gas turbine expansion. Performed component-level second-law exergy destruction calculations and sized capital expenditure (CAPEX), operational costs (OPEX), and Levelized Cost of Storage (LCOS).',
    details: [
      'Charging Cycle Modeling: 3-stage compression with intercooling, heat recovery, and flash liquefaction.',
      'Cryogenic Storage Tank Sizing: Modeled liquid air inventory, perlite vacuum insulation, and boil-off vapor loss rates.',
      'Discharge Expansion Train: 3-stage reheated air turbines driven by cryogenic high-pressure liquid air pumps.',
      'Component Exergy Destruction: Quantified Second-Law irreversibilities across heat exchangers, expanders, and valves.',
      'Techno-Economic Sizing: Evaluated Round-Trip Efficiency (RTE), Levelized Cost of Storage (LCOS, $/kWh), and payback.'
    ],
    math: '\\dot{E}x_{\\text{dest}} = T_0 \\dot{S}_{\\text{gen}} = \\dot{E}x_{\\text{in}} - \\dot{E}x_{\\text{out}} - \\dot{W} \\quad \\bigg| \\quad \\eta_{\\text{RTE}} = \\frac{W_{\\text{expansion}}}{W_{\\text{compression}}}',
    metrics: [
      { label: 'Cycle Scope', value: '3-Stage Charge/Discharge', note: 'Intercooled compression & reheated expansion' },
      { label: 'Analysis Method', value: 'Second-Law Exergy', note: 'Component-level irreversibility mapping' },
      { label: 'Storage Medium', value: 'Liquid Air (CES)', note: 'Atmospheric pressure cryogenic tank' },
      { label: 'Economic Metric', value: 'LCOS ($/kWh)', note: 'Levelized cost of grid-scale energy storage' }
    ],
    repo: null,
    liveDemo: null
  },
  {
    id: 'bicycle',
    title: 'Ride Comfort & Vibration Optimization in a Bicycle',
    shortTitle: 'Ride Comfort Optimization',
    category: 'core-engineering',
    kind: 'DYNAMICS & VIBRATION · STOCHASTIC ROAD PROFILES',
    year: '2026',
    role: 'Course Project · Prof. Bishakh Bhatt, IIT Kanpur',
    duration: 'Jan’26 – Apr’26',
    color: '#272a24',
    tech: ['MATLAB / Simulink', 'Vibration Analysis', 'Differential Equations', 'ISO 8608 Road Profiles', 'Ergonomics'],
    description: 'Multi-degree-of-freedom lumped-parameter dynamic modeling to minimize rider vibration exposure over stochastic terrain.',
    overview: 'A dynamic vibration study formulating lumped-parameter multi-body equations of motion for a bicycle and biomechanical human rider subjected to stochastic road profiles conforming to ISO 8608 standards, optimizing viscoelastic damping to minimize spinal shock.',
    problem: 'Continuous road vibration causes severe muscular fatigue, spinal compression, and loss of steering control. Mitigating transmitted shock without adding heavy suspension mechanisms requires precise stiffness-damping optimization.',
    approach: 'Constructed multi-degree-of-freedom differential equations incorporating frame flexure, pneumatic tire compliance, seatpost damping, and human biomechanical torso segments. Generated stochastic road surface elevations via spatial white noise filtering according to ISO 8608 Class A–D power spectral densities. Optimized damping ratios to minimize Head Acceleration Root-Mean-Square (RMS) and Vibration Dose Value (VDV) per ISO 2631-1.',
    details: [
      'Multi-DOF Dynamic Modeling: Formulated coupled differential equations for chassis, wheel unsprung masses, and rider torso.',
      'ISO 8608 Road Profile Generation: Synthesized stochastic road roughness profiles using white noise filtering and spatial PSDs.',
      'ISO 2631-1 Comfort Standards: Optimized Head Acceleration RMS and Vibration Dose Values (VDV) for ergonomic comfort.',
      'Viscoelastic Damping Optimization: Tuned spring constants and damping coefficients for maximum shock isolation.',
      'Simulation & Validation: Simulated transient impulse and continuous frequency responses in MATLAB/Simulink.'
    ],
    math: 'G_d(n) = G_d(n_0) \\left( \\frac{n}{n_0} \\right)^{-w} \\quad \\bigg| \\quad \\text{VDV} = \\left( \\int_0^T a_w^4(t) \\, dt \\right)^{1/4}',
    metrics: [
      { label: 'System Model', value: 'Multi-DOF Lumped', note: 'Biomechanical rider + frame dynamics' },
      { label: 'Roughness Standard', value: 'ISO 8608', note: 'Class A-D power spectral road densities' },
      { label: 'Comfort Metric', value: 'VDV & RMS', note: 'ISO 2631-1 human vibration exposure' },
      { label: 'Simulation Engine', value: 'MATLAB / Simulink', note: 'Dynamic ODE numerical integration' }
    ],
    repo: null,
    liveDemo: null
  },
  {
    id: 'graph',
    title: 'Graph Algorithms and Combinatorial Puzzle Solvers',
    shortTitle: 'Graph Solvers & Algorithms',
    category: 'open-source',
    kind: 'ALGORITHMIC SYSTEMS · HEURISTIC SEARCH',
    year: '2025',
    role: 'Self Project · IIT Kanpur',
    duration: 'Jun’25 – Jul’25',
    color: '#212a2c',
    tech: ['C++', 'Python', 'Graph Theory', 'A* Search', 'Dynamic Programming', 'Disjoint Set Union'],
    description: 'Foundational graph algorithms and heuristic state-space search solvers applied to combinatorial puzzles.',
    overview: 'An algorithmic repository implementing core graph theory concepts—traversal, minimum spanning trees, strongly connected components—and deploying heuristic search algorithms (A*, IDA*) to solve combinatorial problems including 3D Rubik’s cubes, mazes, and Sudoku.',
    problem: 'Combinatorial puzzle state spaces grow exponentially (e.g. 4.3 × 10^19 states for a 3×3 Rubik’s cube). Naive brute-force search fails instantaneously, requiring optimal admissibility heuristics and graph contraction.',
    approach: 'Implemented Kruskal’s and Prim’s algorithms for MSTs using Disjoint Set Union (DSU) with path compression and rank heuristics. Implemented Tarjan’s and Kosaraju’s algorithms for Strongly Connected Components (SCCs). Built A* pathfinding with Manhattan/Euclidean heuristics for 2D/3D mazes, and constraint satisfaction with recursive backtracking for Sudoku.',
    details: [
      'Minimum Spanning Trees: Kruskal’s algorithm with Disjoint Set Union (DSU) and Prim’s algorithm with priority queues.',
      'Strongly Connected Components: Tarjan’s single-pass low-link DFS algorithm and Kosaraju’s dual-pass algorithm.',
      'A* Heuristic Pathfinding: Solved 2D and 3D maze environments with admissible distance heuristics.',
      'Combinatorial Solvers: Engineered constraint-propagation Sudoku backtracking and Rubik’s Cube state-space solvers.',
      'Performance Optimization: Engineered in modern C++ with low memory footprints and sub-millisecond execution times.'
    ],
    math: 'f(n) = g(n) + h(n) \\quad \\bigg| \\quad \\text{Tarjan: } \\text{lowlink}[u] = \\min(\\text{lowlink}[u], \\text{dfn}[v])',
    metrics: [
      { label: 'Language', value: 'Modern C++ / Python', note: 'Optimized memory & pointer structures' },
      { label: 'Search Paradigm', value: 'A* & Heuristic', note: 'Admissible distance evaluations' },
      { label: 'Algorithms', value: 'Kruskal, Tarjan, Prim', note: 'DSU, lowlink SCC, priority queue' },
      { label: 'Applications', value: 'Sudoku, Rubik, Mazes', note: 'State-space combinatorial solvers' }
    ],
    repo: 'https://github.com/Yuvraj2637/Graph-Algorithms-and-Application-',
    liveDemo: null
  },
  {
    id: 'hotwheels',
    title: 'Hot Wheels 3D Automotive Design & Additive Prototyping',
    shortTitle: 'Hot Wheels 3D Prototyping',
    category: 'core-engineering',
    kind: 'PARAMETRIC CAD · ADDITIVE MANUFACTURING',
    year: '2024',
    role: 'Descon Society · IIT Kanpur',
    duration: 'May’24 – Jul’24',
    color: '#272528',
    tech: ['Autodesk Fusion 360', 'Blender', 'Additive Manufacturing (FDM)', 'G-Code Slicing', 'CAM Toolpaths'],
    description: 'Parametric CAD styling, T-splines aerodynamic surface modeling, and physical FDM 3D printing of miniature cars.',
    overview: 'A design and additive manufacturing project combining freeform organic surface modeling in Autodesk Fusion 360 with kinematic assembly joints, CAM G-code toolpath slicing, and physical fabrication of functional miniature automotive prototypes.',
    problem: 'Automotive styling requires continuous curvature surfaces (G2 continuity) that cannot be created via simple prismatic extrusions, while maintaining snap-fit mechanical assembly tolerances for physical 3D printing.',
    approach: 'Utilized T-splines form modeling to sculpt aerodynamic vehicle bodies with complex surface curvatures and functional chassis components. Engineered mechanical assembly joints for wheel axles and suspension snap-fits. Converted watertight solid bodies into G-code via CAM slicing software, optimizing print orientation, support geometry, and infill density for FDM manufacturing.',
    details: [
      'Surface & Form Modeling: Sculpted aerodynamic concept bodies using T-splines and parametric CAD in Fusion 360.',
      'Assembly Kinematics: Modeled multi-body component joints for rotating axles, chassis clips, and snap-fit hoods.',
      'CAM Slicing & G-Code: Generated optimized slicing toolpaths with balanced infill patterns and zero-sag overhang support structures.',
      'Additive Prototyping: Fabricated physical working prototypes via FDM 3D printing with tight mechanical tolerances.',
      'Rendering & Visualization: Produced photorealistic studio renders in Blender with metallic car paints and ray-traced lighting.'
    ],
    math: 'G_2 \\text{ Curvature Continuity} \\quad \\bigg| \\quad \\text{FDM Layer Resolution: } 0.12\\text{mm}',
    metrics: [
      { label: 'CAD Platform', value: 'Fusion 360', note: 'T-splines & parametric surface assemblies' },
      { label: 'Manufacturing', value: 'FDM 3D Printing', note: 'Additive manufacturing with PLA/PETG' },
      { label: 'Toolpath Generation', value: 'CAM G-Code', note: 'Optimized support & layer slicing' },
      { label: 'Kinematics', value: 'Snap-Fit Joints', note: 'Functional axle & chassis tolerances' }
    ],
    repo: null,
    liveDemo: null
  }
];

const svg = body => `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">${body}</svg>`;
const text = (x, y, value, size = 11, color = '#d9e1d1', extra = '') =>
  `<text x="${x}" y="${y}" fill="${color}" font-family="'DM Mono',monospace" font-size="${size}" ${extra}>${value}</text>`;

function artwork(id) {
  if (id === 'scholar') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#0c1815"/>
      <g stroke="#1b3930" stroke-width="1" opacity="0.4">
        ${Array.from({length: 10}, (_, i) => `<line x1="${i*55}" y1="0" x2="${i*55}" y2="280"/>`).join('')}
        ${Array.from({length: 6}, (_, i) => `<line x1="0" y1="${i*50}" x2="500" y2="${i*50}"/>`).join('')}
      </g>
      <!-- Left: Research PDF Document -->
      <g transform="translate(36, 40)">
        <rect x="0" y="0" width="125" height="175" rx="8" fill="#142823" stroke="#376858" stroke-width="1.5"/>
        <rect x="15" y="18" width="55" height="5" rx="2" fill="#7ce5e0"/>
        ${[36, 48, 60, 72, 94, 106, 118, 130].map(y => `<rect x="15" y="${y}" width="${y%24===0?65:95}" height="3" rx="1.5" fill="#4d7e6f" opacity="0.75"/>`).join('')}
        <rect x="12" y="86" width="101" height="20" rx="4" fill="#7ce5e0" fill-opacity="0.15" stroke="#7ce5e0" stroke-width="0.8"/>
        ${text(16, 158, '30 PAPERS · 1.2K CHUNKS', 7, '#7ce5e0')}
      </g>
      <!-- Center: Hybrid Retrieval Flow -->
      <path d="M165 95 C 205 95, 205 75, 245 75" stroke="#7ce5e0" stroke-width="2" stroke-dasharray="4 4"/>
      <path d="M165 145 C 205 145, 205 165, 245 165" stroke="#a0d995" stroke-width="2" stroke-dasharray="4 4"/>
      <!-- Dual retrieval nodes -->
      <g transform="translate(245, 55)">
        <rect width="105" height="38" rx="6" fill="#172e27" stroke="#487e6d"/>
        ${text(12, 19, 'Dense BGE Vector', 8.5, '#7ce5e0')}
        ${text(12, 30, 'Top-K Cosine', 7.5, '#92b7aa')}
      </g>
      <g transform="translate(245, 145)">
        <rect width="105" height="38" rx="6" fill="#172e27" stroke="#487e6d"/>
        ${text(12, 19, 'Sparse BM25Plus', 8.5, '#a0d995')}
        ${text(12, 30, 'Exact Term Match', 7.5, '#92b7aa')}
      </g>
      <!-- Merge into Cross Encoder & Auditor -->
      <path d="M350 75 C 375 75, 375 110, 395 110" stroke="#7ce5e0" stroke-width="1.8"/>
      <path d="M350 165 C 375 165, 375 130, 395 130" stroke="#a0d995" stroke-width="1.8"/>
      <g transform="translate(395, 85)">
        <rect width="90" height="70" rx="8" fill="#1a3830" stroke="#7ce5e0" stroke-width="1.5"/>
        ${text(10, 22, 'RRF & Rerank', 8, '#7ce5e0')}
        ${text(10, 38, 'Cross-Encoder', 7, '#d6ed9d')}
        <line x1="8" y1="44" x2="82" y2="44" stroke="#3d6c5e"/>
        ${text(10, 56, '100% RECALL@1', 7.5, '#ffffff')}
      </g>
      <rect x="36" y="235" width="428" height="28" rx="6" fill="#10231d" stroke="#25473d"/>
      ${text(52, 253, 'CITATIONS GROUNDED · 1.47s LATENCY · FAITHFULNESS AUDITED', 9, '#7ce5e0')}
    `);
  }

  if (id === 'agents') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#0d140e"/>
      <g stroke="#1d2e1f" stroke-width="1" opacity="0.35">
        ${Array.from({length: 10}, (_, i) => `<line x1="${i*55}" y1="0" x2="${i*55}" y2="280"/>`).join('')}
      </g>
      <!-- Query Input -->
      <g transform="translate(155, 20)">
        <rect width="190" height="42" rx="8" fill="#1f3321" stroke="#5b885e" stroke-width="1.5"/>
        ${text(95, 26, 'Natural Language Query', 11, '#e3f3d5', 'text-anchor="middle"')}
      </g>
      <!-- Central Bus -->
      <path d="M250 62 V 105 M 90 105 H 410" stroke="#68966c" stroke-width="2"/>
      <circle cx="250" cy="105" r="4" fill="#7ce5e0"/>
      <!-- Agents -->
      <path d="M90 105 V 135 M 170 105 V 135 M 250 105 V 135 M 330 105 V 135 M 410 105 V 135" stroke="#68966c" stroke-width="1.5"/>
      ${[
        ['PLANNER', 50, 135, '#8ab38e'],
        ['CRITIC', 130, 135, '#d6ed9d'],
        ['ANALYST', 210, 135, '#7ce5e0'],
        ['VIZ AGENT', 290, 135, '#92caa4'],
        ['REPORT', 370, 135, '#c5e2b0']
      ].map(([label, x, y, col]) => `
        <g transform="translate(${x}, ${y})">
          <rect width="78" height="48" rx="6" fill="#162719" stroke="${col}" stroke-width="1.2"/>
          ${text(39, 24, label, 8.5, col, 'text-anchor="middle"')}
          ${text(39, 38, 'Verified', 7, '#8aa38c', 'text-anchor="middle"')}
        </g>
      `).join('')}
      <!-- Output: Sandboxed Python Execution -->
      <path d="M90 183 V 215 H 410 V 183 M 250 215 V 232" stroke="#68966c" stroke-width="1.5"/>
      <g transform="translate(130, 230)">
        <rect width="240" height="34" rx="17" fill="#7ce5e0"/>
        ${text(120, 22, 'TRUSTED LOCAL PANDAS (0% HALLUCINATIONS)', 8.5, '#0c1a10', 'text-anchor="middle" font-weight="bold"')}
      </g>
    `);
  }

  if (id === 'tessch') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#14110d"/>
      <!-- Dwell Time Wave / Attention Monitor -->
      <g transform="translate(35, 30)">
        <rect width="250" height="195" rx="10" fill="#1f1a14" stroke="#524332" stroke-width="1.5"/>
        ${text(20, 30, 'TESSCH STOREFRONT', 12, '#e0cfb8')}
        <line x1="20" y1="42" x2="230" y2="42" stroke="#3b3124"/>
        <!-- Modular Shoe Graphic -->
        <path d="M50 120 C 75 110, 85 75, 110 78 C 128 80, 140 108, 175 112 L 205 120 C 220 125, 222 138, 202 142 H 60 C 45 140, 40 128, 50 120 Z" fill="#4d3e2d" stroke="#876f51" stroke-width="2"/>
        <!-- Dwell time radar bar -->
        <rect x="20" y="158" width="210" height="20" rx="4" fill="#2d2319"/>
        <rect x="20" y="158" width="145" height="20" rx="4" fill="#e59849"/>
        ${text(28, 172, 'ATTENTION DWELL TIME: 14.8s (FILTERED)', 8, '#14110d', 'font-weight="bold"')}
      </g>
      <!-- Telemetry arrow -->
      <path d="M285 115 H 325" stroke="#e59849" stroke-width="2" stroke-dasharray="3 3"/>
      <!-- Recommendation Box -->
      <g transform="translate(325, 45)">
        <rect width="145" height="180" rx="10" fill="#221b14" stroke="#e59849" stroke-width="1.5"/>
        ${text(14, 26, 'Picked for You', 11, '#e59849')}
        ${text(14, 40, 'L2-Norm Cosine', 7.5, '#ab9274')}
        <line x1="12" y1="48" x2="133" y2="48" stroke="#3d3022"/>
        ${[0, 1, 2].map(i => `
          <g transform="translate(14, ${60 + i*38})">
            <rect width="117" height="30" rx="5" fill="#30261b" stroke="#5d4934"/>
            <circle cx="16" cy="15" r="7" fill="${['#e59849', '#7ce5e0', '#ab9274'][i]}"/>
            ${text(30, 19, ['Modular Sole v2', 'Urban Sneaker', 'Cushion Mid'][i], 8, '#f3ece1')}
          </g>
        `).join('')}
      </g>
      <rect x="35" y="238" width="435" height="26" rx="5" fill="#1b1510" stroke="#3b2f21"/>
      ${text(50, 255, '2.78x CATEGORY LIFT · JACCARD STABILITY 0.940 · SUB-40ms FASTAPI', 8.5, '#e59849')}
    `);
  }

  if (id === 'spectral') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#0c131a"/>
      <!-- Radial Shell Spectrum concentric rings -->
      <g transform="translate(130, 130)">
        <circle cx="0" cy="0" r="105" stroke="#253a4d" stroke-width="1.2" opacity="0.5"/>
        <circle cx="0" cy="0" r="78" stroke="#355773" stroke-width="1.5" stroke-dasharray="5 3"/>
        <circle cx="0" cy="0" r="52" stroke="#5188b3" stroke-width="1.8"/>
        <circle cx="0" cy="0" r="26" stroke="#7ce5e0" stroke-width="2.2"/>
        <circle cx="0" cy="0" r="4" fill="#ffffff"/>
        ${text(-35, -112, 'Concentric Shells S_k', 8, '#7ce5e0')}
      </g>
      <!-- Log-Log Power Spectrum Plot -->
      <g transform="translate(265, 35)">
        <rect width="200" height="190" rx="8" fill="#111c27" stroke="#2b465d" stroke-width="1.5"/>
        ${text(16, 26, 'Log E(k) vs Log k', 11, '#7ce5e0')}
        <line x1="25" y1="45" x2="25" y2="165" stroke="#365773" stroke-width="1.5"/>
        <line x1="25" y1="165" x2="185" y2="165" stroke="#365773" stroke-width="1.5"/>
        <!-- Van Gogh curve (shallow slope) -->
        <path d="M 30 65 Q 85 95, 175 125" stroke="#ffd166" stroke-width="2.5" fill="none"/>
        ${text(105, 90, 'Van Gogh (β ≈ -1.33)', 7.5, '#ffd166')}
        <!-- Classical curve (steep slope) -->
        <path d="M 30 55 Q 75 115, 175 158" stroke="#7ce5e0" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
        ${text(95, 148, 'Classical (β ≈ -1.95)', 7.5, '#7ce5e0')}
        ${text(30, 180, 'Wavenumber k', 8, '#6a8fae')}
      </g>
      <rect x="25" y="240" width="450" height="26" rx="5" fill="#101923" stroke="#233a4e"/>
      ${text(40, 257, '500 ARTWORKS · VERMA & CHATTERJEE FLUID DYNAMICS · VAN GOGH H=0.573', 8.5, '#7ce5e0')}
    `);
  }

  if (id === 'shift') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#13160e"/>
      <!-- 32x32 Convolution Feature Maps -->
      <g transform="translate(35, 45)">
        <rect width="115" height="155" rx="8" fill="#1a2014" stroke="#485c36" stroke-width="1.5"/>
        ${text(14, 25, 'Input under Shift', 9, '#b2d987')}
        ${Array.from({length: 16}, (_, i) => {
          const x = (i%4)*22 + 16, y = Math.floor(i/4)*22 + 40;
          return `<rect x="${x}" y="${y}" width="18" height="18" rx="3" fill="${['#4a6132', '#7fa255', '#354623', '#a7cf73'][i%4]}"/>`;
        }).join('')}
        ${text(14, 142, 'Class Imbalance', 7.5, '#7fa255')}
      </g>
      <!-- Deep Architecture: BroadResNet-28-10 -->
      <path d="M150 120 H 185" stroke="#7ce5e0" stroke-width="2"/>
      <g transform="translate(185, 35)">
        <rect width="150" height="175" rx="8" fill="#1c2516" stroke="#7fa255" stroke-width="1.5"/>
        ${text(15, 25, 'BroadResNet-28-10', 10, '#d6ed9d')}
        ${text(15, 40, '36.5M PARAMETERS', 7.5, '#7ce5e0')}
        <line x1="15" y1="48" x2="135" y2="48" stroke="#364929"/>
        <rect x="15" y="58" width="120" height="22" rx="4" fill="#2d3d23"/>
        ${text(22, 73, 'Frequency-Adjusted Loss', 7.5, '#d6ed9d')}
        <rect x="15" y="88" width="120" height="22" rx="4" fill="#2d3d23"/>
        ${text(22, 103, 'SWA + Mixup + PatchMix', 7.5, '#d6ed9d')}
        <rect x="15" y="118" width="120" height="22" rx="4" fill="#2d3d23"/>
        ${text(22, 133, '13x Test Augmentation', 7.5, '#7ce5e0')}
        <rect x="15" y="148" width="120" height="20" rx="4" fill="#2d3d23"/>
        ${text(22, 162, 'Pseudo-Label Loop >90%', 7.5, '#ffffff')}
      </g>
      <!-- Results Badge -->
      <path d="M335 120 H 365" stroke="#7ce5e0" stroke-width="2"/>
      <g transform="translate(365, 55)">
        <rect width="105" height="135" rx="8" fill="#212c1b" stroke="#7ce5e0" stroke-width="1.5"/>
        ${text(14, 30, 'RANK #4', 16, '#7ce5e0', 'font-weight="bold"')}
        ${text(14, 48, 'PUBLIC LEADERBOARD', 7, '#92b376')}
        <line x1="12" y1="60" x2="93" y2="60" stroke="#3b522e"/>
        ${text(14, 85, '0.91', 24, '#ffffff', 'font-weight="bold"')}
        ${text(14, 105, 'FINAL MACRO F1', 8, '#d6ed9d')}
      </g>
      <rect x="35" y="238" width="435" height="26" rx="5" fill="#171e12" stroke="#324525"/>
      ${text(50, 255, 'DR. RAJESH HEGDE · EE IIT KANPUR · COVARIATE SHIFT GENERALIZATION', 8.5, '#d6ed9d')}
    `);
  }

  if (id === 'mediq') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#11121d"/>
      <!-- Clinical Diagnostic Interface -->
      <g transform="translate(35, 35)">
        <rect width="165" height="180" rx="8" fill="#181a2b" stroke="#454973" stroke-width="1.5"/>
        ${text(15, 28, 'MediQ Clinical Intake', 10.5, '#c5c7e8')}
        <line x1="15" y1="38" x2="150" y2="38" stroke="#2c2f4d"/>
        ${['High Fever', 'Joint Pain', 'Fatigue / Malaise', 'Skin Rash', 'Cough'].map((sym, i) => `
          <g transform="translate(15, ${52 + i*24})">
            <rect width="14" height="14" rx="3" fill="#7ce5e0"/>
            <path d="M3 7 L6 10 L11 4" stroke="#0e1320" stroke-width="2" fill="none"/>
            ${text(22, 11, sym, 8, '#b6b9db')}
          </g>
        `).join('')}
      </g>
      <!-- Inference Engine -->
      <path d="M200 125 H 230" stroke="#7ce5e0" stroke-width="2"/>
      <g transform="translate(230, 35)">
        <rect width="235" height="180" rx="8" fill="#181b2a" stroke="#7ce5e0" stroke-width="1.5"/>
        ${text(16, 28, 'Top-5 Calibrated Differentials', 11, '#7ce5e0')}
        <line x1="16" y1="38" x2="220" y2="38" stroke="#34395c"/>
        ${[
          ['Dengue Fever', 88, '#7ce5e0'],
          ['Chikungunya', 64, '#8fa0e8'],
          ['Viral Exanthem', 42, '#a5a8cc'],
          ['Malaria', 28, '#787b9e'],
          ['Typhoid', 15, '#5a5d7c']
        ].map(([dis, pct, col], i) => `
          <g transform="translate(16, ${50 + i*24})">
            ${text(0, 11, dis, 8, '#d4d6ee')}
            <rect x="95" y="2" width="95" height="11" rx="3" fill="#24283d"/>
            <rect x="95" y="2" width="${pct*0.95}" height="11" rx="3" fill="${col}"/>
            ${text(195, 11, pct + '%', 7.5, col)}
          </g>
        `).join('')}
      </g>
      <rect x="35" y="238" width="430" height="26" rx="5" fill="#161827" stroke="#2e3250"/>
      ${text(50, 255, 'FLASK REST API · RANDOM FOREST · 20+ IITK UNDERGRADUATES MENTORED', 8.5, '#7ce5e0')}
    `);
  }

  if (id === 'suggesteria') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#15121b"/>
      <!-- TF-IDF Vector Space -->
      <g transform="translate(35, 35)">
        <rect width="180" height="180" rx="8" fill="#1f1a28" stroke="#52436b" stroke-width="1.5"/>
        ${text(16, 28, 'Metadata Extraction', 11, '#d5bbf7')}
        <line x1="15" y1="38" x2="165" y2="38" stroke="#3b2f50"/>
        <rect x="15" y="48" width="150" height="30" rx="5" fill="#2e233d"/>
        ${text(22, 67, 'Synopsis + Genres + Studio', 7.5, '#e3d2ff')}
        <rect x="15" y="86" width="150" height="30" rx="5" fill="#2e233d"/>
        ${text(22, 105, 'TF-IDF Unigram/Bigram', 7.5, '#7ce5e0')}
        <rect x="15" y="124" width="150" height="30" rx="5" fill="#2e233d"/>
        ${text(22, 143, 'Pickled Artifact Matrix', 7.5, '#ffd166')}
      </g>
      <path d="M215 125 H 255" stroke="#d5bbf7" stroke-width="2"/>
      <!-- Streamlit UI Showcase -->
      <g transform="translate(255, 35)">
        <rect width="210" height="180" rx="8" fill="#201a2b" stroke="#7ce5e0" stroke-width="1.5"/>
        ${text(15, 28, 'Streamlit Discovery Engine', 11, '#7ce5e0')}
        <line x1="15" y1="38" x2="195" y2="38" stroke="#3e3253"/>
        ${[
          ['Attack on Titan', 'Score: 0.94', '#d5bbf7'],
          ['Kabaneri Iron Fortress', 'Score: 0.89', '#bfa0eb'],
          ['Vinland Saga', 'Score: 0.82', '#a682de'],
          ['Fullmetal Alchemist', 'Score: 0.78', '#8962c4']
        ].map(([title, sc, col], i) => `
          <g transform="translate(15, ${48 + i*31})">
            <rect width="180" height="24" rx="4" fill="#2d233e" stroke="${col}" stroke-width="0.8"/>
            ${text(10, 16, title, 8, '#ffffff')}
            ${text(125, 16, sc, 7.5, '#7ce5e0')}
          </g>
        `).join('')}
      </g>
      <rect x="35" y="238" width="430" height="26" rx="5" fill="#1b1624" stroke="#3a2e4c"/>
      ${text(50, 255, 'GOOGLE DEVELOPER GROUPS · PAIRWISE COSINE SIMILARITY · <30ms LOOKUP', 8.5, '#d5bbf7')}
    `);
  }

  if (id === 'gasification') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#16120b"/>
      <!-- MSW to Methanol Flowsheet in Aspen Plus -->
      <g transform="translate(25, 45)">
        <!-- Feedstock -->
        <rect width="80" height="50" rx="6" fill="#2a1f11" stroke="#694d29" stroke-width="1.2"/>
        ${text(12, 24, 'MSW Waste', 9, '#e8b87d')}
        ${text(12, 38, '1 MMTPA Feed', 7.5, '#ba9463')}
        <!-- Arrow -->
        <path d="M80 70 H 115" stroke="#e8b87d" stroke-width="1.8"/>
        <!-- Gasifier -->
        <g transform="translate(115, 0)">
          <rect width="90" height="70" rx="6" fill="#3a2914" stroke="#d48c3b" stroke-width="1.5"/>
          ${text(12, 26, 'Gasifier', 10, '#f2af5c')}
          ${text(12, 42, 'Air/O2/Steam', 7.5, '#f5cba7')}
          ${text(12, 56, '900°C Kinetics', 7, '#d6ed9d')}
        </g>
        <!-- Arrow -->
        <path d="M205 35 H 235" stroke="#e8b87d" stroke-width="1.8"/>
        <!-- WGS Reactor -->
        <g transform="translate(235, 10)">
          <rect width="90" height="50" rx="6" fill="#2a1f11" stroke="#694d29" stroke-width="1.2"/>
          ${text(14, 24, 'WGS Reactor', 9, '#e8b87d')}
          ${text(14, 38, 'M ≈ 2.05 Module', 7, '#7ce5e0')}
        </g>
        <!-- Arrow -->
        <path d="M325 35 H 355" stroke="#e8b87d" stroke-width="1.8"/>
        <!-- Methanol Reactor -->
        <g transform="translate(355, 0)">
          <rect width="95" height="70" rx="6" fill="#3a2914" stroke="#7ce5e0" stroke-width="1.5"/>
          ${text(12, 26, 'Fixed-Bed CH3OH', 9, '#7ce5e0')}
          ${text(12, 42, 'Cu/ZnO/Al2O3', 7.5, '#ffffff')}
          ${text(12, 56, '50-100 bar', 7, '#d6ed9d')}
        </g>
      </g>
      <!-- Techno-Economic Bar -->
      <g transform="translate(45, 145)">
        <rect width="410" height="75" rx="8" fill="#20170c" stroke="#503a1f"/>
        ${text(20, 26, 'TECHNO-ECONOMIC ASSESSMENT (ASPEN PLUS)', 10, '#e8b87d')}
        <line x1="20" y1="36" x2="390" y2="36" stroke="#3b2b18"/>
        ${text(20, 55, 'CAPEX & OPEX Sizing for 1 MMTPA Facility', 8.5, '#d9cbba')}
        ${text(20, 68, 'Discounted Payback Optimization with Heat Recovery Recycle', 8, '#7ce5e0')}
      </g>
      <rect x="25" y="240" width="450" height="26" rx="5" fill="#1b140b" stroke="#382914"/>
      ${text(40, 257, 'PROF. SHANTANU DE · IIT KANPUR · CHEMICAL KINETICS & PROCESS SIMULATION', 8.5, '#e8b87d')}
    `);
  }

  if (id === 'turbomachine') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#0d171f"/>
      <!-- Rotor Blading & Flow Contours -->
      <g transform="translate(40, 40)">
        <rect width="185" height="175" rx="8" fill="#14222d" stroke="#2c4b63" stroke-width="1.5"/>
        ${text(16, 26, '1D Compressible Flow', 10, '#7ce5e0')}
        <line x1="16" y1="36" x2="169" y2="36" stroke="#223a4d"/>
        <!-- Aerodynamic Blades -->
        ${[0, 1, 2, 3].map(i => `
          <path d="M${40 + i*32} 60 C ${55 + i*32} 75, ${35 + i*32} 115, ${50 + i*32} 130" stroke="#7ce5e0" stroke-width="3" fill="none"/>
        `).join('')}
        ${text(18, 155, 'Rotor - Diffuser Cascade', 8, '#8ab3d4')}
      </g>
      <!-- Similitude Equations & Compressor Map -->
      <path d="M225 125 H 260" stroke="#7ce5e0" stroke-width="2"/>
      <g transform="translate(260, 40)">
        <rect width="200" height="175" rx="8" fill="#14222d" stroke="#7ce5e0" stroke-width="1.5"/>
        ${text(16, 26, 'Dynamic Similitude', 10, '#7ce5e0')}
        <line x1="16" y1="36" x2="184" y2="36" stroke="#28485f"/>
        <rect x="16" y="48" width="168" height="28" rx="4" fill="#1c3040"/>
        ${text(22, 66, 'Mach Number: Ma1 = Ma2', 8, '#ffffff')}
        <rect x="16" y="84" width="168" height="28" rx="4" fill="#1c3040"/>
        ${text(22, 102, 'Reynolds Number: Re1 = Re2', 8, '#d6ed9d')}
        <rect x="16" y="120" width="168" height="38" rx="4" fill="#1c3040"/>
        ${text(22, 137, 'MATLAB Multi-Variable', 8, '#7ce5e0')}
        ${text(22, 149, 'Facility Constraint Solver', 7.5, '#9bc5e6')}
      </g>
      <rect x="40" y="240" width="420" height="26" rx="5" fill="#101c26" stroke="#254257"/>
      ${text(55, 257, 'PROF. TUSHAR SIKRORIA · IIT KANPUR · REAL-GAS THERMODYNAMIC SCALING', 8.5, '#7ce5e0')}
    `);
  }

  if (id === 'cryogenic') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#0d151c"/>
      <!-- Cryogenic Plant Flowsheet -->
      <g transform="translate(35, 35)">
        <rect width="430" height="185" rx="10" fill="#13202b" stroke="#2e4e69" stroke-width="1.5"/>
        ${text(20, 28, 'CRYOGENIC LIQUID AIR ENERGY STORAGE (LAES)', 11, '#7ce5e0')}
        <line x1="20" y1="40" x2="410" y2="40" stroke="#253e54"/>
        <!-- 3-Stage Compression -->
        <g transform="translate(20, 55)">
          <rect width="115" height="60" rx="6" fill="#1b2e3e" stroke="#487a9e"/>
          ${text(12, 22, '3-Stage Compression', 8.5, '#97caeb')}
          ${text(12, 38, 'Intercooling & Heat', 7.5, '#ffd166')}
          ${text(12, 50, 'Waste Heat Exergy', 7, '#d6ed9d')}
        </g>
        <!-- Cryo Storage Tank -->
        <g transform="translate(155, 55)">
          <rect width="110" height="60" rx="6" fill="#1b2e3e" stroke="#7ce5e0" stroke-width="1.5"/>
          ${text(12, 22, 'Liquid Air Tank', 9, '#7ce5e0')}
          ${text(12, 38, 'Flash Liquefaction', 7.5, '#ffffff')}
          ${text(12, 50, 'Boil-Off Modeling', 7, '#97caeb')}
        </g>
        <!-- Reheated Expander -->
        <g transform="translate(285, 55)">
          <rect width="125" height="60" rx="6" fill="#1b2e3e" stroke="#487a9e"/>
          ${text(12, 22, '3-Stage Reheat Exp.', 8.5, '#97caeb')}
          ${text(12, 38, 'Grid Power Recovery', 7.5, '#ffd166')}
          ${text(12, 50, 'Round-Trip Efficiency', 7, '#d6ed9d')}
        </g>
        <!-- Exergy & LCOS formula box -->
        <g transform="translate(20, 130)">
          <rect width="390" height="38" rx="6" fill="#182937" stroke="#2b475e"/>
          ${text(18, 23, 'SECOND-LAW EXERGY DESTRUCTION & LCOS ($/kWh) TECHNO-ECONOMICS', 8, '#7ce5e0')}
        </g>
      </g>
      <rect x="35" y="240" width="430" height="26" rx="5" fill="#101923" stroke="#21384c"/>
      ${text(50, 257, 'PROF. ABHISHEK SARKAR · IIT KANPUR · ADVANCED ENERGY STORAGE SYSTEMS', 8.5, '#7ce5e0')}
    `);
  }

  if (id === 'bicycle') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#131710"/>
      <!-- Multi-DOF Dynamic Model -->
      <g transform="translate(35, 35)">
        <rect width="200" height="185" rx="8" fill="#1c2419" stroke="#3e5235" stroke-width="1.5"/>
        ${text(18, 28, 'Multi-DOF Dynamic System', 10, '#bfe3aa')}
        <line x1="18" y1="38" x2="182" y2="38" stroke="#2c3a26"/>
        <!-- Torso & Frame Lumped Masses -->
        <circle cx="100" cy="65" r="14" fill="#7ce5e0"/>
        ${text(92, 69, 'm1', 8.5, '#0d1710', 'font-weight="bold"')}
        <!-- Spring / Damper symbol -->
        <path d="M100 80 V 95 L 94 99 L 106 103 L 94 107 L 100 111 V 125" stroke="#bfe3aa" stroke-width="2" fill="none"/>
        <rect x="75" y="125" width="50" height="20" rx="4" fill="#32452a"/>
        ${text(88, 138, 'Frame', 8, '#ffffff')}
        ${text(25, 168, 'Human Spine & Seatpost Model', 7.5, '#92b37f')}
      </g>
      <!-- ISO 8608 Road Profile -->
      <path d="M235 125 H 265" stroke="#bfe3aa" stroke-width="2"/>
      <g transform="translate(265, 35)">
        <rect width="200" height="185" rx="8" fill="#1c2419" stroke="#7ce5e0" stroke-width="1.5"/>
        ${text(18, 28, 'ISO 8608 Roughness', 10, '#7ce5e0')}
        <line x1="18" y1="38" x2="182" y2="38" stroke="#2c3a26"/>
        <!-- Rough road profile -->
        <path d="M20 90 Q 40 65, 60 95 T 100 80 T 140 105 T 180 75" stroke="#ffd166" stroke-width="2" fill="none"/>
        <rect x="18" y="115" width="164" height="48" rx="5" fill="#263422"/>
        ${text(26, 133, 'Head RMS Acceleration &', 7.5, '#ffffff')}
        ${text(26, 146, 'VDV Minimization (ISO 2631)', 7.5, '#7ce5e0')}
      </g>
      <rect x="35" y="240" width="430" height="26" rx="5" fill="#161c12" stroke="#2c3c24"/>
      ${text(50, 257, 'PROF. BISHAKH BHATT · IIT KANPUR · VIBRATION & BIOMECHANICAL ERGONOMICS', 8.5, '#bfe3aa')}
    `);
  }

  if (id === 'graph') {
    return svg(`
      <rect width="500" height="280" rx="14" fill="#0f1619"/>
      <!-- Graph Traversal & Heuristic Pathfinding -->
      <g transform="translate(35, 35)">
        <rect width="200" height="185" rx="8" fill="#162227" stroke="#2f4954" stroke-width="1.5"/>
        ${text(16, 26, 'Spanning Trees & SCC', 10, '#7ce5e0')}
        <line x1="16" y1="36" x2="184" y2="36" stroke="#243841"/>
        <!-- Graph Nodes and Edges -->
        <line x1="45" y1="75" x2="105" y2="60" stroke="#7ce5e0" stroke-width="2"/>
        <line x1="105" y1="60" x2="160" y2="90" stroke="#7ce5e0" stroke-width="2"/>
        <line x1="45" y1="75" x2="70" y2="135" stroke="#4a7182" stroke-width="1.5" stroke-dasharray="3 3"/>
        <line x1="70" y1="135" x2="140" y2="140" stroke="#7ce5e0" stroke-width="2"/>
        <line x1="160" y1="90" x2="140" y2="140" stroke="#7ce5e0" stroke-width="2"/>
        ${[
          [45, 75, 'A'], [105, 60, 'B'], [160, 90, 'C'], [70, 135, 'D'], [140, 140, 'E']
        ].map(([x, y, l]) => `
          <circle cx="${x}" cy="${y}" r="12" fill="#203a45" stroke="#7ce5e0" stroke-width="1.5"/>
          ${text(x-4, y+4, l, 9, '#ffffff', 'font-weight="bold"')}
        `).join('')}
        ${text(18, 172, 'Kruskal, Prim, Tarjan SCC', 7.5, '#8cb8cc')}
      </g>
      <!-- A* Search & Solvers -->
      <path d="M235 125 H 265" stroke="#7ce5e0" stroke-width="2"/>
      <g transform="translate(265, 35)">
        <rect width="200" height="185" rx="8" fill="#162227" stroke="#7ce5e0" stroke-width="1.5"/>
        ${text(16, 26, 'A* Search & Solvers', 10, '#7ce5e0')}
        <line x1="16" y1="36" x2="184" y2="36" stroke="#243841"/>
        <!-- 3x3 Solver Grid (Rubik / Sudoku) -->
        ${Array.from({length: 9}, (_, i) => {
          const x = (i%3)*28 + 25, y = Math.floor(i/3)*28 + 50;
          return `<rect x="${x}" y="${y}" width="24" height="24" rx="4" fill="${['#7ce5e0', '#ffd166', '#ef476f', '#06d6a0'][i%4]}"/>`;
        }).join('')}
        <g transform="translate(115, 60)">
          <rect width="70" height="65" rx="4" fill="#223945"/>
          ${text(8, 20, 'Sudoku', 8, '#ffffff')}
          ${text(8, 36, 'Rubik 3D', 8, '#7ce5e0')}
          ${text(8, 52, 'A* Mazes', 8, '#d6ed9d')}
        </g>
        ${text(18, 168, 'Modern C++ Heuristic Solvers', 7.5, '#8cb8cc')}
      </g>
      <rect x="35" y="240" width="430" height="26" rx="5" fill="#121d22" stroke="#253e47"/>
      ${text(50, 257, 'DISJOINT SET UNION · LOWLINK DFS · IDA* HEURISTIC SEARCH', 8.5, '#7ce5e0')}
    `);
  }

  // Hot Wheels 3D Design & Additive Prototyping
  return svg(`
    <rect width="500" height="280" rx="14" fill="#161416"/>
    <!-- 3D Automotive Wireframe -->
    <g transform="translate(35, 35)">
      <rect width="210" height="185" rx="8" fill="#221e23" stroke="#4f4052" stroke-width="1.5"/>
      ${text(16, 26, 'Autodesk Fusion 360 T-Splines', 10, '#e5bbf7')}
      <line x1="16" y1="36" x2="194" y2="36" stroke="#36293a"/>
      <!-- Aerodynamic Car Silhouette -->
      <path d="M 30 115 C 45 95, 75 90, 95 75 C 115 60, 145 60, 165 78 C 180 92, 190 105, 195 115 Z" stroke="#7ce5e0" stroke-width="2" fill="none"/>
      <circle cx="65" cy="120" r="14" stroke="#e5bbf7" stroke-width="2" fill="#2d2230"/>
      <circle cx="160" cy="120" r="14" stroke="#e5bbf7" stroke-width="2" fill="#2d2230"/>
      ${text(18, 168, 'Continuous Curvature (G2)', 8, '#caa4dc')}
    </g>
    <!-- Additive Manufacturing & CAM Slicing -->
    <path d="M245 125 H 270" stroke="#e5bbf7" stroke-width="2"/>
    <g transform="translate(270, 35)">
      <rect width="195" height="185" rx="8" fill="#221e23" stroke="#7ce5e0" stroke-width="1.5"/>
      ${text(16, 26, 'Additive Prototyping', 10, '#7ce5e0')}
      <line x1="16" y1="36" x2="179" y2="36" stroke="#36293a"/>
      <!-- Slicing layers -->
      ${[0, 1, 2, 3, 4].map(i => `
        <line x1="25" y1="${55 + i*14}" x2="170" y2="${55 + i*14}" stroke="${['#7ce5e0', '#e5bbf7', '#ffd166', '#a2d2ff', '#7ce5e0'][i]}" stroke-width="2.5"/>
      `).join('')}
      <rect x="25" y="130" width="145" height="32" rx="4" fill="#322438"/>
      ${text(32, 147, 'G-Code CAM Toolpaths', 8, '#ffffff')}
      ${text(32, 157, 'FDM Functional Assembly', 7, '#7ce5e0')}
    </g>
    <rect x="35" y="240" width="430" height="26" rx="5" fill="#1b171c" stroke="#38293d"/>
    ${text(50, 257, 'DESCON SOCIETY · IIT KANPUR · SURFACE MODELING & 3D PRINTING', 8.5, '#e5bbf7')}
  `);
}

export { projects, artwork };
