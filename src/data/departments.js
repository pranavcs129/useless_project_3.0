// ============================================
// BUGLEARN — Department & Course Data
// ============================================
// Single source of truth for all departments, courses, and lessons.

export const DEPARTMENTS = [
  {
    "slug": "ant",
    "name": "Ant Department",
    "emoji": "🐜",
    "image": "/bugs/ant.png",
    "accent": "#C17840",
    "tagline": "Scan. Isolate. Defend. Biological network security.",
    "tutor": {
      "name": "Prof. Antonia",
      "title": "Professor of Antivirus Architecture & Colony Defense",
      "personality": "Hyper-vigilant cybersecurity mind applied to subterranean biology. Treats fungal spores, rogue microbes, and foreign pheromones like critical zero-day exploits. Absurdly serious.",
      "avatar": "🐜",
      "rating": 4.9,
      "reviewCount": 2341,
      "quotes": [
        "A virus does not negotiate with mandibles. You scan, you isolate, you disinfect.",
        "The colony is a biological network. One contaminated crumb compromises the entire Queen sub-routine.",
        "If you detect an anomalous spore, you do not ask questions. You initiate quarantine.",
        "Never skip the antennal threat scan at the main gallery gates."
      ],
      "expertise": [
        "Antivirus Protocols",
        "Threat Scanning",
        "Malware Isolation",
        "Colony Perimeter Security"
      ]
    },
    "course": {
      "name": "Antivirus",
      "subtitle": "Scan. Isolate. Defend.",
      "description": "Master the engineering of biological antivirus systems. Learn threat detection heuristics, fungal spore malware analysis, colony-wide threat scanning, and Queen quarantine protocols to protect the subterranean network from foreign biological exploits.",
      "difficulty": "Intermediate",
      "hours": 5,
      "enrolled": 4821,
      "rating": 4.9,
      "learnings": [
        "Classify biological viruses and pathogen attack vectors",
        "Execute antennal threat detection and heuristic scanning",
        "Analyze fungal spore payloads and contaminated food samples",
        "Construct high-security colony quarantine chambers",
        "Perform automated colony-wide antivirus perimeter scans",
        "Final practical: Perform a complete antivirus scan of the colony"
      ],
      "modules": [
        {
          "title": "01 — Virus Fundamentals",
          "lessons": [
            {
              "title": "What is a Virus?",
              "content": "<h2>What is a Virus?</h2>\n<p>In subterranean colony engineering, a virus is not a digital construct — it is a biological payload designed to hijack cellular machinery, subvert pheromone pathways, and destabilize colony infrastructure.</p>\n<p>An ant colony operates as a distributed superorganism. Because thousands of workers share food via trophallaxis and interact in humid, crowded chambers, an unchecked viral or fungal intrusion can propagate exponentially.</p>\n<h3>Core Biological Threat Models</h3>\n<ul>\n<li><strong>Capsid Infiltration</strong> — Protein shells that attach to insect cuticular receptors and inject genetic payloads.</li>\n<li><strong>Trophallactic Transmission</strong> — Direct oral fluid exchange that inadvertently spreads viral particles from worker to worker.</li>\n<li><strong>Micro-Spore Vectors</strong> — Fungal spores (such as <em>Ophiocordyceps</em>) that operate like malicious zero-day exploits.</li>\n</ul>\n<blockquote>\"To defend the colony, you must think of every tunnel as a data bus and every worker as a network endpoint.\" — Prof. Antonia</blockquote>",
              "quiz": {
                "question": "Why is an ant colony especially vulnerable to unchecked pathogen transmission?",
                "type": "multiple-choice",
                "options": [
                  "Ants lack any physical exoskeleton",
                  "High population density and trophallaxis (shared oral fluid exchange)",
                  "The Queen refuses to allow hand-washing",
                  "Ant tunnels are open to the open sky"
                ],
                "correct": 1,
                "explanation": "High tunnel density and direct trophallactic food exchange allow biological pathogens to spread quickly across the colony without proper quarantine protocols.",
                "xp": 15
              }
            },
            {
              "title": "Colony Attack Vectors",
              "content": "<h2>Colony Attack Vectors</h2>\n<p>Threat actors do not attack the queen directly. They exploit perimeter vulnerabilities. Understanding the attack surface is the first rule of defensive engineering.</p>\n<h3>The Three Primary Attack Vectors</h3>\n<ol>\n<li><strong>Forager Ingress</strong> — Returning foragers carrying foreign soil particles, mold spores, or pathogenic bacteria on their tarsi.</li>\n<li><strong>Imported Food Payloads</strong> — Sugary honeydew farmed from aphids or rotting insect protein contaminated with bacterial endotoxins.</li>\n<li><strong>Ventilation Infiltration</strong> — Airborne fungal spore clouds sucked into the colony via surface chimney drafts.</li>\n</ol>",
              "quiz": {
                "question": "True or False: The majority of colony infections originate from the royal nursery chambers.",
                "type": "true-false",
                "correct": false,
                "explanation": "Nursery chambers are deep inside the nest; infection vectors almost always enter via returning surface foragers or contaminated food inputs.",
                "xp": 10
              }
            },
            {
              "title": "Biological Threat Classification",
              "content": "<h2>Biological Threat Classification</h2>\n<p>We classify threats by virulence, persistence, and colony impact level.</p>\n<ul>\n<li><strong>Level 1: Benign Particulates</strong> — Harmless pollen grains, sand, and non-pathogenic dust. Requires standard grooming.</li>\n<li><strong>Level 2: Bacterial Opportunists</strong> — Common soil microbes that infect wounded workers. Requires localized isolation.</li>\n<li><strong>Level 3: Virulent Microsporidia</strong> — Chronic internal parasites that sap metabolic energy. Requires brood sanitation.</li>\n<li><strong>Level 4: Fungal Hijackers (Cordyceps)</strong> — Behavioral manipulation payloads. Mandatory immediate lethal quarantine.</li>\n</ul>"
            }
          ]
        },
        {
          "title": "02 — Threat Detection",
          "lessons": [
            {
              "title": "Identifying Threats",
              "content": "<h2>Identifying Threats</h2>\n<p>Antennal sensors are the biological equivalent of deep packet inspection engines. Each antenna contains thousands of sensilla capable of detecting molecular anomalies down to parts per billion.</p>\n<h3>Detection Mechanics</h3>\n<ul>\n<li><strong>Odorant Binding Proteins (OBPs)</strong> — Molecular filters that capture and present airborne volatile compounds to sensory neurons.</li>\n<li><strong>Anomalous Cuticular Hydrocarbon (CHC) Profiles</strong> — Diseased or parasitized ants exhibit modified cuticular signatures.</li>\n<li><strong>Thermal and Vibrational Spikes</strong> — Infected larvae emit distinct acoustic stress cues.</li>\n</ul>",
              "quiz": {
                "question": "What biological sensor functions as the ant’s primary deep packet inspection tool?",
                "type": "multiple-choice",
                "options": [
                  "Compound eye retinas",
                  "Antennal sensilla with odorant binding proteins",
                  "Wing stubs",
                  "Tarsal claws"
                ],
                "correct": 1,
                "explanation": "Antennal sensilla detect chemical anomalies, pathogen pheromones, and cuticular hydrocarbon profile shifts.",
                "xp": 15
              }
            },
            {
              "title": "Symptom Heuristics",
              "content": "<h2>Symptom Heuristics</h2>\n<p>Do not wait for full systemic pathogen bloom. Detect subtle behavioral deviations early using symptom heuristics:</p>\n<ol>\n<li><strong>Locomotor Irregularity</strong> — Asymmetric leg articulation or erratic walking cadence along established pheromone trails.</li>\n<li><strong>Antennal Droop</strong> — Loss of responsive antennal tapping during peer-to-peer identification checks.</li>\n<li><strong>Disoriented Phototaxis</strong> — Workers inexplicably climbing upward toward sunlight instead of descending into nest chambers.</li>\n</ol>"
            },
            {
              "title": "Perimeter Intrusion Alarms",
              "content": "<h2>Perimeter Intrusion Alarms</h2>\n<p>When a pathogen is verified, threat detection systems must immediately notify the sector without triggering a stampede.</p>\n<p>Deploying concentrated formic acid vapors and pulsing alarm pheromones establishes a localized defensive lockdown while sanitization crews mobilize.</p>"
            }
          ]
        },
        {
          "title": "03 — Malware Analysis",
          "lessons": [
            {
              "title": "Fungal Spore Malware Analysis",
              "content": "<h2>Fungal Spore Malware Analysis</h2>\n<p>Consider <em>Ophiocordyceps unilateralis</em> as an advanced biological rootkit. Its spores adhere to the cuticle, secrete chitinase enzymes to drill through the exoskeleton, and release neurochemicals that commandeer the host central nervous system.</p>\n<h3>Deconstructing the Spore Payload</h3>\n<ul>\n<li><strong>Adhesion Matrix</strong> — Sticky glycoproteins that bind irreversibly to exoskeleton chitin.</li>\n<li><strong>Enzymatic Penetration</strong> — Protease and chitinase cocktails that dissolve outer armor within 12 hours.</li>\n<li><strong>Neural Override</strong> — Chemical manipulation forcing the ant to clamp its mandibles onto a leaf vein at precise altitude.</li>\n</ul>",
              "quiz": {
                "question": "What is the primary mechanism fungal spores use to breach the ant exoskeleton?",
                "type": "multiple-choice",
                "options": [
                  "Mechanical drilling using microscopic teeth",
                  "Secreting chitinase and protease enzymes to dissolve cuticular chitin",
                  "Entering through the ant’s compound eyes exclusively",
                  "Waiting for the ant to molting season"
                ],
                "correct": 1,
                "explanation": "Spore payloads secrete specialized enzymes that chemically break down the protein and chitin matrix of the exoskeleton.",
                "xp": 15
              }
            },
            {
              "title": "Contaminated Food Detection",
              "content": "<h2>Contaminated Food Detection</h2>\n<p>Never ingest unverified nutrients. Foragers must screen every sugar droplet and beetle carcass for signs of decomposition toxins, viral particulates, and mold hyphae before transporting it to central granaries.</p>\n<h3>Field Screening Protocol</h3>\n<ol>\n<li>Sample with maxillary palps for bitter alkaloids.</li>\n<li>Check for sticky bacterial slime coats.</li>\n<li>If suspicious, flag the supply trail with repellent pheromone warning tags.</li>\n</ol>"
            },
            {
              "title": "Payload Neutralization Chemistry",
              "content": "<h2>Payload Neutralization Chemistry</h2>\n<p>Ants do not rely solely on immune cells; we synthesize external chemical defenses. The metapleural gland produces potent broad-spectrum antimicrobials, including phenylacetic acid, that dissolve bacterial walls on contact.</p>"
            }
          ]
        },
        {
          "title": "04 — Colony Protection",
          "lessons": [
            {
              "title": "Quarantine Chamber Architecture",
              "content": "<h2>Quarantine Chamber Architecture</h2>\n<p>A resilient colony must include physical isolation sectors. Quarantine chambers must be excavated at the periphery of the nest, downwind and isolated from the main brood galleries.</p>\n<h3>Architectural Requirements</h3>\n<ul>\n<li><strong>Soil Airlocks</strong> — Double-barrier plug tunnels constructed from moist clay.</li>\n<li><strong>Negative Airflow</strong> — Positioned so that chimney drafts draw air out of the nest, not into the royal chambers.</li>\n<li><strong>Sanitizing Substrate</strong> — Floors lined with antimicrobial tree resin and dry pine needles.</li>\n</ul>"
            },
            {
              "title": "Threat Isolation Protocols",
              "content": "<h2>Threat Isolation Protocols</h2>\n<p>When an infected worker is detected, isolation must be swift, methodical, and humane. Dedicated sanitation ants escort the individual to the perimeter quarantine sector.</p>\n<p>No physical aggression is required — precision chemical trail marking guides the compromised worker into containment.</p>"
            },
            {
              "title": "Protecting the Queen",
              "content": "<h2>Protecting the Queen</h2>\n<p>The Queen is the single point of failure in the subterranean network. If the Queen is compromised, the colony lifecycle terminates.</p>\n<h3>The Royal Security Perimeter</h3>\n<ol>\n<li><strong>Zero-Trust Food Chain</strong> — Royal jelly passes through three separate nurse worker filtration tiers before reaching the Queen.</li>\n<li><strong>Strict Physical Isolation</strong> — The royal chamber is accessible only through narrow, easily defendable access chokepoints.</li>\n<li><strong>Prophylactic Resin Shield</strong> — The royal chamber walls are plastered with propolis and antimicrobial pine resin.</li>\n</ol>",
              "quiz": {
                "question": "In colony security architecture, why is the Queen treated under a Zero-Trust framework?",
                "type": "multiple-choice",
                "options": [
                  "She is suspected of being an enemy agent",
                  "She is the sole reproductive core and single point of failure for the entire colony",
                  "She frequently attempts to escape the nest",
                  "Her mandibles are too sharp for regular workers"
                ],
                "correct": 1,
                "explanation": "Because colony reproduction depends entirely on the Queen, any viral or fungal penetration of the royal chamber spells systemic collapse.",
                "xp": 15
              }
            }
          ]
        },
        {
          "title": "05 — Threat Scanning",
          "lessons": [
            {
              "title": "Colony Scanning Procedures",
              "content": "<h2>Colony Scanning Procedures</h2>\n<p>Scheduled antivirus scans prevent dormant infections from turning into systemic outbreaks. Patrol units systematically inspect tunnel corridors, larval chambers, and food caches.</p>\n<h3>The Three-Phase Scan Cycle</h3>\n<ol>\n<li><strong>Perimeter Sweep</strong> — Antennal inspections along all surface entrances.</li>\n<li><strong>Brood Chamber Audit</strong> — Microscopic grooming checks of egg clusters and developing pupae.</li>\n<li><strong>Granary Diagnostic</strong> — Testing stored seed caches for moisture-induced fungal mold.</li>\n</ol>"
            },
            {
              "title": "Gate Inspection Drills",
              "content": "<h2>Gate Inspection Drills</h2>\n<p>Every returning forager must pass through a designated decontamination corridor. Specialized sanitation workers perform thorough mutual grooming (allogrooming) to strip off external debris and apply metapleural secretions before granting access to inner galleries.</p>"
            },
            {
              "title": "Continuous Soil Monitoring",
              "content": "<h2>Continuous Soil Monitoring</h2>\n<p>Nest soil is an active biological medium. Microscopic soil testing ensures that beneficial actinobacteria dominate subterranean gallery walls while dangerous pathogenic molds are identified and neutralized immediately.</p>"
            }
          ]
        },
        {
          "title": "06 — Advanced Antivirus",
          "lessons": [
            {
              "title": "Social Immunity Architecture",
              "content": "<h2>Social Immunity Architecture</h2>\n<p>Social immunity is the pinnacle of biological collective defense. Just as distributed firewall architectures correlate packet logs across thousands of nodes, an ant colony coordinates collective fever, nest disinfection, and sanitary waste removal.</p>\n<h3>Key Social Defenses</h3>\n<ul>\n<li><strong>Collective Grooming Networks</strong> — Continuous mutual sanitization that removes up to 99% of fungal conidia before germination.</li>\n<li><strong>Social Fever</strong> — Workers clustering to elevate colony temperature and denature heat-sensitive fungal pathogens.</li>\n<li><strong>Sanitary Cemeteries</strong> — Specialized waste chambers operated exclusively by elder workers who never re-enter the brood zone.</li>\n</ul>"
            },
            {
              "title": "Emergency Tunnel Collapse Protocols",
              "content": "<h2>Emergency Tunnel Collapse Protocols</h2>\n<p>When an uncontrollable biological outbreak occurs in a peripheral gallery, decisive isolation is mandatory. Specially trained soldier units intentionally collapse ceiling supports, entombing the infected sector behind solid earthen bulkheads.</p>"
            },
            {
              "title": "Final Practical: Complete Antivirus Scan",
              "content": "<h2>Final Practical: Complete Antivirus Scan</h2>\n<p>It is time to prove your operational readiness. In this final capstone practical, you will coordinate and execute a full-scale antivirus scan across the entire subterranean colony network.</p>\n<h3>Practical Requirements</h3>\n<ol>\n<li>Deploy perimeter scanning sentries to all 6 main tunnel gates.</li>\n<li>Perform antennal odorant spectral diagnostics on 100 returning foragers.</li>\n<li>Audit the royal chamber and establish a sealed zero-trust quarantine corridor.</li>\n<li>Successfully isolate simulated fungal spore incursions and certify the colony 100% clean.</li>\n</ol>\n<blockquote>\"Perform a complete antivirus scan of the colony. Verify every tunnel. Protect the Queen.\" — Prof. Antonia</blockquote>",
              "quiz": {
                "question": "What is the objective of the Antivirus final practical examination?",
                "type": "multiple-choice",
                "options": [
                  "To write a computer software program in Python",
                  "Perform a complete antivirus scan of the colony and secure the royal chambers",
                  "To harvest 5 kilograms of sugar alone",
                  "To challenge another anthill to a duel"
                ],
                "correct": 1,
                "explanation": "The capstone practical requires coordinating a comprehensive biological threat scan of the entire colony infrastructure.",
                "xp": 25
              }
            }
          ]
        }
      ]
    },
    "activity": {
      "type": "simulation",
      "slug": "antivirus-scan",
      "title": "Colony Antivirus Threat Scan",
      "description": "Run diagnostic sweeps across subterranean tunnel junctions. Detect fungal spores, isolate infected chambers, and maintain queen security."
    }
  },
  {
    "slug": "cockroach",
    "name": "Cockroach Department",
    "emoji": "🪳",
    "image": "/bugs/cockroch.png",
    "accent": "#8B6F4E",
    "tagline": "Synthesize. Resist. Outlast. 300 million years of chemical superiority.",
    "tutor": {
      "name": "Dr. Roach",
      "title": "Senior Lecturer in Chemical Engineering & Hazard Mitigation",
      "personality": "Unshakable industrial chemist. Treats pesticide sprays, bleach, and harsh acids like minor culinary seasonings. Pragmatic, gritty, and scientifically formidable.",
      "avatar": "🪳",
      "rating": 4.8,
      "reviewCount": 1876,
      "quotes": [
        "Bleach is just an aggressive perfume. Understand its pH, and you understand how to survive it.",
        "We have survived 300 million years of chemical warfare. Synthetic cleaners are merely an engineering challenge.",
        "When an aerosol deploys, you don’t panic. You calculate dispersal half-life.",
        "A chemical-resistant shelter is not a luxury; it is basic architectural hygiene."
      ],
      "expertise": [
        "Xenobiotic Metabolism",
        "Hazardous Materials Mitigation",
        "Enzyme Upregulation",
        "Habitat Shielding"
      ]
    },
    "course": {
      "name": "Chemical Engineering",
      "subtitle": "Synthesize. Resist. Outlast.",
      "description": "Master the science of hazardous material resistance, industrial chemical mitigation, and toxic compound breakdown. Learn how evolutionary biochemistry enables survival in the most hostile chemical environments on Earth.",
      "difficulty": "Intermediate",
      "hours": 5,
      "enrolled": 3102,
      "rating": 4.8,
      "learnings": [
        "Master organic chemistry fundamentals for extremophile survival",
        "Analyze common household cleaning products and industrial surfactants",
        "Calculate toxic exposure thresholds and lethal concentration indexes",
        "Upregulate metabolic detoxifying enzymes (Cytochrome P450)",
        "Navigate hazardous drainage basins and caustic micro-climates",
        "Final project: Design a chemical-resistant cockroach habitat"
      ],
      "modules": [
        {
          "title": "01 — Chemical Fundamentals",
          "lessons": [
            {
              "title": "Molecular Resilience & Cuticle Lipids",
              "content": "<h2>Molecular Resilience & Cuticle Lipids</h2>\n<p>The first line of chemical defense is not internal metabolism — it is the epicuticle. The cockroach exoskeleton is coated with a dense crystalline matrix of long-chain hydrocarbons, wax esters, and fatty acids.</p>\n<p>This hydrophobic barrier prevents water-soluble toxins, polar solvents, and corrosive ionic solutions from penetrating into the hemolymph.</p>\n<h3>Chemical Barrier Properties</h3>\n<ul>\n<li><strong>Hydrocarbon Density</strong> — Saturated n-alkanes that resist enzymatic breakdown.</li>\n<li><strong>Contact Angle</strong> — High surface tension causing chemical droplets to bead up and roll off.</li>\n<li><strong>Self-Healing Wax</strong> — Secretion channels that replenish abraded protective wax layers within hours.</li>\n</ul>",
              "quiz": {
                "question": "What is the primary physical function of the cockroach epicuticular wax layer?",
                "type": "multiple-choice",
                "options": [
                  "To provide attractive coloration for mating displays",
                  "To act as a dense hydrophobic barrier preventing toxic chemical penetration",
                  "To absorb liquid bleach directly into internal organs",
                  "To make walking on glass completely impossible"
                ],
                "correct": 1,
                "explanation": "The epicuticular hydrocarbon wax creates a hydrophobic shield that repels polar chemicals and prevents toxin absorption.",
                "xp": 15
              }
            },
            {
              "title": "pH Extremes in Sub-Counter Living",
              "content": "<h2>pH Extremes in Sub-Counter Living</h2>\n<p>In domestic kitchens, roaches encounter extreme chemical gradients: from caustic drain cleaners (pH 13) to concentrated vinegar solutions (pH 2.5).</p>\n<p>Survival requires understanding acid-base equilibria, buffering systems in internal fluids, and identifying non-reactive tile grout buffer zones.</p>"
            },
            {
              "title": "Solvent Evaporation & Vapor Pressures",
              "content": "<h2>Solvent Evaporation & Vapor Pressures</h2>\n<p>Volatile organic compounds (VOCs) and aerosol propellants exert vapor pressure that can enter the respiratory system via thoracic spiracles. Learn how spiracular valve timing protects against airborne solvent inhalation.</p>"
            }
          ]
        },
        {
          "title": "02 — Household Chemicals",
          "lessons": [
            {
              "title": "Identify Dangerous Household Chemicals",
              "content": "<h2>Identify Dangerous Household Chemicals</h2>\n<p>A professional cockroach engineer must catalog and classify every commercial chemical agent found in human domiciles.</p>\n<h3>The Top Chemical Threats</h3>\n<ol>\n<li><strong>Sodium Hypochlorite (Bleach)</strong> — Powerful oxidizing agent that attacks organic cuticles. Avoid standing puddles.</li>\n<li><strong>Quaternary Ammonium Compounds</strong> — Disrupts cellular membranes. Common in surface disinfectant wipes.</li>\n<li><strong>Synthetic Pyrethroids (Permethrin, Cypermethrin)</strong> — Neurotoxins targeting voltage-gated sodium channels.</li>\n</ol>",
              "quiz": {
                "question": "Which compound represents a synthetic neurotoxin designed to target insect sodium channels?",
                "type": "multiple-choice",
                "options": [
                  "Distilled water",
                  "Synthetic pyrethroid",
                  "Table sugar",
                  "Corn starch"
                ],
                "correct": 1,
                "explanation": "Synthetic pyrethroids target nerve sodium channels; roach chemical engineers must learn to identify and metabolize them.",
                "xp": 15
              }
            },
            {
              "title": "Analyze Cleaning Products",
              "content": "<h2>Analyze Cleaning Products</h2>\n<p>Surfactants in dish soap and counter cleaners break down surface tension, allowing water to penetrate spiracles. By analyzing the foam density and surfactant concentrations, roaches can chart safe escape routes across freshly mopped floors.</p>"
            },
            {
              "title": "Aerosol Dispersal Dynamics",
              "content": "<h2>Aerosol Dispersal Dynamics</h2>\n<p>When a human brandishes an aerosol spray can, the resulting mist follows predictable fluid dispersion physics. Convective thermal currents from refrigerators create updraft shadows where aerosol concentration drops by over 85%.</p>"
            }
          ]
        },
        {
          "title": "03 — Toxicity & Exposure",
          "lessons": [
            {
              "title": "Dose-Response Relationships",
              "content": "<h2>Dose-Response Relationships</h2>\n<p>Paracelsus established: <em>The dose makes the poison.</em> In roach chemical engineering, calculating LD50 curves and biological half-life metrics is the difference between mild lethargy and evolutionary success.</p>\n<h3>Exposure Parameters</h3>\n<ul>\n<li><strong>Termal Exposure</strong> — Surface area of tarsi in contact with chemical residue.</li>\n<li><strong>Inhalation Load</strong> — Spiracle ventilation volume per minute.</li>\n<li><strong>Metabolic Clearance Rate</strong> — Milligrams of toxic compound degraded per hour.</li>\n</ul>"
            },
            {
              "title": "Survive Simulated Chemical Exposure",
              "content": "<h2>Survive Simulated Chemical Exposure</h2>\n<p>Practical exercise: In the event of a sudden chemical mist deployment, instantly close spiracular valves, adopt a compressed low-profile posture, and exploit baseboard micro-crevices where air circulation is zero.</p>"
            },
            {
              "title": "Neurotoxin Disruption Pathways",
              "content": "<h2>Neurotoxin Disruption Pathways</h2>\n<p>Understand how modern insecticides attempt to disable neural signaling. Learn how target-site mutations and rapid enzymatic breakdown protect the central nerve cord from catastrophic hyper-excitation.</p>"
            }
          ]
        },
        {
          "title": "04 — Chemical Resistance",
          "lessons": [
            {
              "title": "Cytochrome P450 Detoxification",
              "content": "<h2>Cytochrome P450 Detoxification</h2>\n<p>Cockroaches possess one of the largest repertoires of Cytochrome P450 monooxygenase genes in the animal kingdom. These enzymes oxidize, reduce, and hydrolyze xenobiotic compounds, rendering lethal pesticides into benign, water-soluble excretions.</p>\n<blockquote>\"Humans spend millions formulating a new pesticide molecule. Our P450 gene family expresses a neutralizing counter-enzyme before breakfast.\" — Dr. Roach</blockquote>",
              "quiz": {
                "question": "What gene superfamily provides cockroaches with massive metabolic pesticide detoxification capability?",
                "type": "multiple-choice",
                "options": [
                  "Hemoglobin genes",
                  "Cytochrome P450 monooxygenases",
                  "Chlorophyll synthesizers",
                  "Silk fibroin genes"
                ],
                "correct": 1,
                "explanation": "Cytochrome P450 enzymes metabolize lipophilic insecticides into harmless excretable polar molecules.",
                "xp": 15
              }
            },
            {
              "title": "Glutathione S-Transferase Defense",
              "content": "<h2>Glutathione S-Transferase Defense</h2>\n<p>Secondary metabolic defense: Glutathione S-transferases (GSTs) conjugate toxic electrophilic chemicals with endogenous glutathione, facilitating rapid active transport and fecal excretion.</p>"
            },
            {
              "title": "Target-Site Mutation Strategy",
              "content": "<h2>Target-Site Mutation Strategy</h2>\n<p>Explore evolutionary knockdown resistance (kdr) mutations in the para sodium channel gene that physically prevent pesticide molecules from docking to nerve receptors.</p>"
            }
          ]
        },
        {
          "title": "05 — Hazardous Environments",
          "lessons": [
            {
              "title": "Industrial Kitchen Chemistry",
              "content": "<h2>Industrial Kitchen Chemistry</h2>\n<p>Commercial restaurant kitchens are extreme industrial chemical zones: caustic degreasers, hot fryer oil aerosols, and enzyme-based drain cleaners. Master the art of boundary layer navigation across stainless steel surfaces.</p>"
            },
            {
              "title": "Drainpipe Toxic Vapor Protocols",
              "content": "<h2>Drainpipe Toxic Vapor Protocols</h2>\n<p>Sewer pipes and drain conduits contain elevated concentrations of methane (CH4) and hydrogen sulfide (H2S). Learn anaerobic metabolic switching and mucosal protection techniques for navigating subterranean plumbing networks.</p>"
            },
            {
              "title": "Design a Chemical-Resistant Shelter",
              "content": "<h2>Design a Chemical-Resistant Shelter</h2>\n<p>Shelter design criteria: Selecting inert, non-porous masonry materials, creating labyrinthine vapor traps, and establishing multi-directional escape conduits that chemical fumes cannot stagnate in.</p>"
            }
          ]
        },
        {
          "title": "06 — Industrial Chemical Systems",
          "lessons": [
            {
              "title": "Synthetic Barrier Engineering",
              "content": "<h2>Synthetic Barrier Engineering</h2>\n<p>Engineer protective nest coatings using fecal pheromone extracts combined with insoluble chitin resins to create hermetic seals against external chemical sprays.</p>"
            },
            {
              "title": "Hazardous Waste Scrubbing",
              "content": "<h2>Hazardous Waste Scrubbing</h2>\n<p>Utilize symbiotic gut microbiomes to bio-remediate and digest persistent environmental pollutants, turning cardboard adhesives, cellulose, and grease residues into energy.</p>"
            },
            {
              "title": "Final Project: Chemical-Resistant Cockroach Habitat",
              "content": "<h2>Final Project: Chemical-Resistant Cockroach Habitat</h2>\n<p>Your capstone engineering challenge: Design a comprehensive, chemical-resistant cockroach habitat situated in the highest-risk domestic kitchen zone.</p>\n<h3>Deliverables</h3>\n<ul>\n<li>A detailed architectural blueprint specifying non-porous barrier materials.</li>\n<li>Passive air-scrubbing ventilation channels to deflect volatile aerosol propellants.</li>\n<li>Enzymatic emergency decontamination protocols for returning foragers.</li>\n<li>Independent survival verification under simulated bleach, ammonia, and pyrethroid exposure.</li>\n</ul>\n<blockquote>\"Design a chemical-resistant cockroach habitat. Outlast every formulation they throw at you.\" — Dr. Roach</blockquote>",
              "quiz": {
                "question": "What is the capstone project requirement for the Chemical Engineering course?",
                "type": "multiple-choice",
                "options": [
                  "Write a poem about crumbs",
                  "Design a chemical-resistant cockroach habitat capable of surviving hazardous domestic exposures",
                  "Flee into the garden and never return",
                  "Build an electronic microchip"
                ],
                "correct": 1,
                "explanation": "Students must synthesize their chemical knowledge into designing an engineered, chemical-resistant habitat.",
                "xp": 25
              }
            }
          ]
        }
      ]
    },
    "activity": {
      "type": "challenge",
      "slug": "chemical-defense",
      "title": "Chemical Resistance Simulation",
      "description": "Analyze cleaning chemical compounds, navigate pH danger zones, and reach chemical-resistant shelter before sprays settle."
    }
  },
  {
    "slug": "spider",
    "name": "Spider Department",
    "emoji": "🕷️",
    "image": "/bugs/spider.png",
    "accent": "#6B5B8A",
    "tagline": "Anchor. Spin. Catch. Physical web engineering with zero code.",
    "tutor": {
      "name": "Prof. Webster",
      "title": "Professor of Physical Web Development & Silk Architecture",
      "personality": "Obsessive civil engineer of physical silk structures. Gets visibly agitated whenever anyone mentions computers or programming. \"We extrude high-tensile protein polymer cables here, not JavaScript!\"",
      "avatar": "🕷️",
      "rating": 4.8,
      "reviewCount": 2056,
      "quotes": [
        "Web Development — strictly physical. No HTML, no CSS, no JavaScript required.",
        "A broken anchor point is not a bug you patch with code. It is a structural catastrophe.",
        "Symmetry distributes tension. Tension captures dinner. Never sacrifice structural integrity for decorative vanity.",
        "You don’t compile a web. You extrude it under dynamic aerodynamic load."
      ],
      "expertise": [
        "Physical Web Architecture",
        "Silk Tensile Mechanics",
        "Radial Load Distribution",
        "Dynamic Web Maintenance"
      ]
    },
    "course": {
      "name": "Web Development",
      "subtitle": "Anchor. Spin. Catch.",
      "description": "Study physical web development from tensile mechanics to aerodynamic stabilization. Master anchor point selection, radial structural architecture, dynamic silk elasticity, and high-velocity prey capture. Absolutely zero coding involved.",
      "difficulty": "Beginner",
      "hours": 4,
      "enrolled": 3567,
      "rating": 4.8,
      "learnings": [
        "Understand biological silk glands and protein polymer extrusion",
        "Select high-yield physical web sites and structural anchor points",
        "Calculate radial thread tension and spiral load distribution",
        "Implement responsive web design for wind adaptation and environmental shifts",
        "Optimize web performance for vibration sensing and kinetic energy absorption",
        "Final practical: BUILD A PRODUCTION-READY SPIDER WEB"
      ],
      "modules": [
        {
          "title": "01 — Web Fundamentals",
          "lessons": [
            {
              "title": "Types of Spider Webs",
              "content": "<h2>Types of Spider Webs</h2>\n<p>Welcome to physical Web Development. Here, a web is not something you open in a browser. It is a high-tensile, physical aerodynamic structure suspended in physical 3D space.</p>\n<h3>The Four Core Web Archetypes</h3>\n<ul>\n<li><strong>Orb Webs</strong> — Geometric, radially symmetric planar nets optimized for intercepting flying insects.</li>\n<li><strong>Funnel Webs</strong> — Sheet structures leading into a dense tubular retreat for rapid ambush strikes.</li>\n<li><strong>Sheet & Tangle Webs</strong> — Multi-layered 3D scaffolding with non-sticky tripwires and horizontal sheets.</li>\n<li><strong>Tubular Trapdoor Webs</strong> — Subterranean structural burrows reinforced with hinged silk portals.</li>\n</ul>",
              "quiz": {
                "question": "What is Web Development in the Spider Department?",
                "type": "multiple-choice",
                "options": [
                  "Writing React components and styling with CSS",
                  "Constructing physical silk architectural nets to capture prey in 3D space",
                  "Managing internet server infrastructure",
                  "Browsing social media feeds"
                ],
                "correct": 1,
                "explanation": "Physical Web Development is the civil and aerodynamic engineering of physical spider silk structures.",
                "xp": 15
              }
            },
            {
              "title": "Web Purpose",
              "content": "<h2>Web Purpose</h2>\n<p>A web serves four synchronized operational functions:</p>\n<ol>\n<li><strong>Kinetic Prey Capture</strong> — Decelerating high-speed insect projectiles without breaking structural lines.</li>\n<li><strong>Sensory Transmission Network</strong> — Conducting acoustic and vibrational frequency signals directly to the spider’s leg slit sensilla.</li>\n<li><strong>Structural Shelter</strong> — Protecting the spider from aerial avian predators and inclement weather.</li>\n<li><strong>Reproductive Nursery Platform</strong> — Suspending and protecting silk egg cocoons.</li>\n</ol>"
            },
            {
              "title": "Web Site Selection",
              "content": "<h2>Web Site Selection</h2>\n<p>Building the world’s most magnificent web is useless if built in dead airspace. Site selection requires rigorous environmental surveying:</p>\n<ul>\n<li><strong>Insect Flight Corridors</strong> — Gaps between shrubs, window corners, and illuminated porch lights.</li>\n<li><strong>Prevailing Breeze Vectors</strong> — Sufficient air movement for bridge line casting, but shielded from destructive gale turbulence.</li>\n<li><strong>Substrate Anchoring Rigidity</strong> — Firm anchor points that do not sway excessively in moderate breezes.</li>\n</ul>"
            },
            {
              "title": "Basic Web Structure",
              "content": "<h2>Basic Web Structure</h2>\n<p>The anatomy of an orb web consists of four primary structural components:</p>\n<ol>\n<li><strong>Bridge Thread</strong> — The topmost horizontal cable carrying the primary gravitational load.</li>\n<li><strong>Frame Threads</strong> — Outer perimeter boundary lines anchored to external substrates.</li>\n<li><strong>Radial Spokes</strong> — High-tension structural radii meeting at the central hub.</li>\n<li><strong>Capture Spiral</strong> — Sticky, elastic viscid silk wound in an Archimedean spiral across the radii.</li>\n</ol>"
            }
          ]
        },
        {
          "title": "02 — Web Architecture",
          "lessons": [
            {
              "title": "Anchor Points",
              "content": "<h2>Anchor Points</h2>\n<p>A web is only as strong as its weakest anchor point. Learn to evaluate substrate surface mechanics:</p>\n<ul>\n<li><strong>Bark & Wood</strong> — Excellent adhesion for pyriform attachment discs; slight thermal contraction.</li>\n<li><strong>Foliage & Leaves</strong> — High flexibility, but vulnerable to wind sway and wilting.</li>\n<li><strong>Stone & Brick</strong> — Extremely rigid; requires deep mechanical insertion into micro-fissures.</li>\n</ul>",
              "quiz": {
                "question": "Why must a spider carefully assess anchor point substrates before spanning lines?",
                "type": "multiple-choice",
                "options": [
                  "Because leaves wilt and flexible twigs can collapse web tension during storms",
                  "Because paint color affects web stickiness",
                  "Because spiders only build on metal poles",
                  "Anchor points do not affect web stability"
                ],
                "correct": 0,
                "explanation": "Unstable or wilting substrates cause anchor point failure and destroy structural tension across the entire frame.",
                "xp": 15
              }
            },
            {
              "title": "Support Lines",
              "content": "<h2>Support Lines</h2>\n<p>Extruding the bridge line requires dynamic wind-casting. The spider elevates its abdomen, secretes a buoyant plume of major ampullate silk into the breeze, and waits for passive adhesion to a distant branch before tensioning and doubling the cable.</p>"
            },
            {
              "title": "Load Distribution",
              "content": "<h2>Load Distribution</h2>\n<p>Structural forces decompose across radial lines according to catenary mechanics. By adjusting radial thread spacing, an engineer ensures that localized impacts from heavy moths distribute force evenly throughout the outer frame.</p>"
            },
            {
              "title": "Tension",
              "content": "<h2>Tension</h2>\n<p>Radial threads must be pre-stressed under tension like violin strings. Too loose, and vibrations fail to propagate; too tight, and the silk snaps prematurely upon impact.</p>"
            }
          ]
        },
        {
          "title": "03 — Web Design",
          "lessons": [
            {
              "title": "Web Patterns",
              "content": "<h2>Web Patterns</h2>\n<p>Web geometry is not arbitrary art; it is mathematical optimization. An Archimedean spiral provides uniform turn spacing, whereas logarithmic spirals optimize for directional prey bias.</p>"
            },
            {
              "title": "Symmetry",
              "content": "<h2>Symmetry</h2>\n<p>Centering the hub and maintaining rotational symmetry balances the tension vectors. Vertical webs naturally introduce an asymmetric gravitational bias, which spiders offset by positioning the central hub slightly above the geometric center.</p>"
            },
            {
              "title": "Coverage",
              "content": "<h2>Coverage</h2>\n<p>Calculate capture surface area against protein metabolic cost. Every millimeter of extruded silk represents expended amino acid reserves that must be recouped through successful prey capture.</p>"
            },
            {
              "title": "Structural Layout",
              "content": "<h2>Structural Layout</h2>\n<p>Master the transition from temporary non-sticky auxiliary scaffolding spirals to the final permanent sticky capture spiral loaded with microscopic glue droplets.</p>"
            }
          ]
        },
        {
          "title": "04 — Responsive Web Design",
          "lessons": [
            {
              "title": "Wind Adaptation",
              "content": "<h2>Wind Adaptation</h2>\n<p>In physical web development, \"Responsive Web Design\" means building a web that physically adapts to changing wind speeds and ambient weather conditions without tearing.</p>\n<h3>Aerodynamic Porosity</h3>\n<p>Adjusting the mesh spacing allows high-velocity wind gusts to pass straight through the open grid without generating destructive drag forces against the anchor lines.</p>",
              "quiz": {
                "question": "What does \"Responsive Web Design\" mean in physical spider engineering?",
                "type": "multiple-choice",
                "options": [
                  "Writing CSS media queries for mobile phone viewports",
                  "Constructing physical webs with aerodynamic compliance that dynamically withstand wind and rain shifts",
                  "Making web pages load faster on slow internet connections",
                  "Using responsive JavaScript frameworks"
                ],
                "correct": 1,
                "explanation": "In physical web development, responsive design refers to aerodynamic structural adaptation to environmental changes like wind and rain.",
                "xp": 15
              }
            },
            {
              "title": "Environmental Changes",
              "content": "<h2>Environmental Changes</h2>\n<p>Ambient humidity directly affects silk hydration. In dry conditions, silk becomes brittle; in heavy fog, dew droplets weigh down lines. Learn silk hygroscopic tensioning techniques.</p>"
            },
            {
              "title": "Web Flexibility",
              "content": "<h2>Web Flexibility</h2>\n<p>Major ampullate silk exhibits high tensile strength (up to 1.5 GPa), while capture spiral flagelliform silk can stretch over 300% without breaking. Combining these materials creates ideal responsive flexibility.</p>"
            },
            {
              "title": "Dynamic Repair",
              "content": "<h2>Dynamic Repair</h2>\n<p>When a struggling wasp damages three sectors of the spiral, do not tear down the entire web. Master rapid hot-patching: snipping broken lines, anchoring replacement radii, and spinning fresh capture spirals in under 15 minutes.</p>"
            }
          ]
        },
        {
          "title": "05 — Web Performance",
          "lessons": [
            {
              "title": "Strength Testing",
              "content": "<h2>Strength Testing</h2>\n<p>Subject structural lines to kinetic drop tests. Measure tensile failure thresholds and ensure anchor disc shear strength exceeds 500 millinewtons of lateral force.</p>"
            },
            {
              "title": "Capture Efficiency",
              "content": "<h2>Capture Efficiency</h2>\n<p>Evaluate prey retention metrics. Viscid droplets must dissipate impact kinetic energy through internal molecular friction before flying prey can bounce off or break free.</p>"
            },
            {
              "title": "Vibration Response",
              "content": "<h2>Vibration Response</h2>\n<p>The web is an extended sensory organ. Tune silk string tension so that struggling insect wing frequencies (100–500 Hz) transmit cleanly to the hub while low-frequency wind noise is filtered out.</p>"
            }
          ]
        },
        {
          "title": "06 — Advanced Web Development",
          "lessons": [
            {
              "title": "Complex Web Structures",
              "content": "<h2>Complex Web Structures</h2>\n<p>Explore high-performance architectural topologies: 3D tent webs, horizontal hammock sheets with vertical tension fall-lines, and dual-plane defensive barrier arrays.</p>"
            },
            {
              "title": "Multi-Anchor Webs",
              "content": "<h2>Multi-Anchor Webs</h2>\n<p>Constructing hyper-static webs anchored across 6 or more fluctuating branches. Master floating anchor nodes that compensate for independent branch motion.</p>"
            },
            {
              "title": "Environmental Optimization",
              "content": "<h2>Environmental Optimization</h2>\n<p>Integrate UV-reflective silk stabilimenta (decorative zig-zags) that attract ultraviolet-sensitive pollinators while preventing birds from accidentally flying through your masterpiece.</p>"
            },
            {
              "title": "Final Practical: BUILD A PRODUCTION-READY SPIDER WEB",
              "content": "<h2>Final Practical: BUILD A PRODUCTION-READY SPIDER WEB</h2>\n<p>Your graduation requirement is absolute: you must literally construct and submit a production-ready, physical spider web.</p>\n<h3>Submission Criteria</h3>\n<ol>\n<li>Select an outdoor flight corridor site with at least 3 solid anchor substrates.</li>\n<li>Span a double-reinforced bridge line and anchor boundary frames.</li>\n<li>Spin at least 24 high-tension structural radii with equal angular spacing.</li>\n<li>Deploy a uniform sticky viscid capture spiral across all sectors.</li>\n<li>Perform physical tension, wind deflection, and vibration response verification.</li>\n</ol>\n<blockquote>\"BUILD A PRODUCTION-READY SPIDER WEB. No code. Just pure tensile perfection.\" — Prof. Webster</blockquote>",
              "quiz": {
                "question": "What must a spider student submit for their final practical project?",
                "type": "multiple-choice",
                "options": [
                  "A Github pull request with a website",
                  "A fully constructed, production-ready physical spider web",
                  "A written essay about spiders",
                  "A jar of fruit flies"
                ],
                "correct": 1,
                "explanation": "Spider students literally build and submit a physical, production-ready spider web.",
                "xp": 25
              }
            }
          ]
        }
      ]
    },
    "activity": {
      "type": "builder",
      "slug": "web-builder",
      "title": "Web Construction Challenge",
      "description": "Build a stable, beautiful physical web by placing anchor points and connecting silk strands. Test your web against wind and prey."
    }
  },
  {
    "slug": "bee",
    "name": "Bee Department",
    "emoji": "🐝",
    "image": "/bugs/bee.png",
    "accent": "#D4A824",
    "tagline": "Lift. Vortex. Flow. Aerodynamic mastery in low Reynolds flight.",
    "tutor": {
      "name": "Prof. Buzz",
      "title": "Professor of Fluid Mechanics & Aerodynamic Efficiency",
      "personality": "Passionate aerodynamicist who translates complex Navier-Stokes equations into buzzing wing motions. Delighted by leading-edge vortices and unsteady airflow.",
      "avatar": "🐝",
      "rating": 4.8,
      "reviewCount": 2203,
      "quotes": [
        "Conventional steady-state aerodynamics says bees cannot fly. Conventional aerodynamics forgot about dynamic stall.",
        "Every wing stroke is a miniature hurricane. Master the vortex, and the air becomes your ladder.",
        "Drag is just an uncoordinated attempt at lift. Trim your wing angle, minimize turbulence.",
        "Transporting 80% of your body weight in pollen requires textbook fluid mechanics."
      ],
      "expertise": [
        "Unsteady Aerodynamics",
        "Leading-Edge Vortices",
        "Microfluidics",
        "Kinetic Wing Reversal"
      ]
    },
    "course": {
      "name": "Fluid Mechanics",
      "subtitle": "Lift. Vortex. Flow.",
      "description": "Explore the aerodynamic and microfluidic principles governing hymenopteran flight. Connect real fluid dynamics, unsteady leading-edge vortices, and boundary layer airflow to flight efficiency and maximum pollen payload transport.",
      "difficulty": "Intermediate",
      "hours": 4,
      "enrolled": 3890,
      "rating": 4.8,
      "learnings": [
        "Master fluid dynamics at low Reynolds numbers (Re ~ 1000)",
        "Understand airflow separation, laminar flow, and boundary layer physics",
        "Generate persistent lift using leading-edge vortices (LEV) and dynamic stall",
        "Analyze 230-Hz wing kinematics and stroke reversal rotation",
        "Navigate turbulent crosswinds and urban thermal downdrafts",
        "Final practical: Transport maximum pollen while minimizing aerodynamic energy loss"
      ],
      "modules": [
        {
          "title": "01 — Fluid Fundamentals",
          "lessons": [
            {
              "title": "Viscosity & Reynolds Numbers",
              "content": "<h2>Viscosity & Reynolds Numbers</h2>\n<p>To an aircraft with a 30-meter wingspan, air feels invisible and thin. To a honeybee with a 10-millimeter wingspan, air behaves more like viscous molasses.</p>\n<p>The Reynolds number ($Re = \\frac{\\rho v L}{\\mu}$) for bee flight falls around 1,000. In this regime, viscous forces and inertial forces clash directly, requiring specialized unsteady aerodynamic mechanisms.</p>\n<h3>Fluid Parameters</h3>\n<ul>\n<li><strong>Kinematic Viscosity ($\\nu$)</strong> — Ratio of viscous force to inertial force in ambient air.</li>\n<li><strong>Boundary Layer Adhesion</strong> — Air sticking to microscopic wing hairs and creating parasite drag.</li>\n<li><strong>Micro-Scale Pressure Gradients</strong> — Rapid localized pressure drops generated during fast wing strokes.</li>\n</ul>",
              "quiz": {
                "question": "At insect flight scales (Reynolds number ~ 1,000), how does air behave compared to large commercial aircraft flight?",
                "type": "multiple-choice",
                "options": [
                  "Air behaves like a vacuum with zero resistance",
                  "Air exhibits significantly higher relative viscosity, behaving like a thick fluid",
                  "Air completely turns into solid ice",
                  "Air has no effect on insect wings"
                ],
                "correct": 1,
                "explanation": "At low Reynolds numbers, viscous forces are prominent, meaning air feels thick and resistive to insect wings.",
                "xp": 15
              }
            },
            {
              "title": "The Continuum Hypothesis in Insect Airspace",
              "content": "<h2>The Continuum Hypothesis in Insect Airspace</h2>\n<p>We treat air not as isolated nitrogen and oxygen molecules, but as a continuous fluid continuum characterized by velocity fields, vorticity, and pressure distributions across the flight envelope.</p>"
            },
            {
              "title": "Bernoulli vs Unsteady Flow",
              "content": "<h2>Bernoulli vs Unsteady Flow</h2>\n<p>Steady-state Bernoulli equations predict that bee wings are far too small to generate enough lift to support the bee's body weight. Learn why classical aviation theory failed and how unsteady vortex shedding solved the puzzle.</p>"
            }
          ]
        },
        {
          "title": "02 — Airflow",
          "lessons": [
            {
              "title": "Boundary Layer Separation",
              "content": "<h2>Boundary Layer Separation</h2>\n<p>As airflow travels over the curved surface of a wing, friction robs kinetic energy from the boundary layer. If the adverse pressure gradient is too steep, the flow separates, causing catastrophic stall.</p>"
            },
            {
              "title": "Crosswind Aerodynamics",
              "content": "<h2>Crosswind Aerodynamics</h2>\n<p>Navigating crosswinds between flower meadows requires vector addition of forward airspeed and lateral wind drift. Master asymmetric stroke amplitude to maintain straight flight paths.</p>"
            },
            {
              "title": "Downwash Velocity Fields",
              "content": "<h2>Downwash Velocity Fields</h2>\n<p>Every wing stroke pumps a cone of accelerated air downwards. Calculate the induced velocity field beneath hovering foragers and exploit ground-effect cushioning during landing on petals.</p>"
            }
          ]
        },
        {
          "title": "03 — Lift & Drag",
          "lessons": [
            {
              "title": "Leading-Edge Vortex (LEV) Generation",
              "content": "<h2>Leading-Edge Vortex (LEV) Generation</h2>\n<p>The secret weapon of bee flight: the Leading-Edge Vortex (LEV). By sweeping wings at very high angles of attack (around 30°), bees trap a stable, swirling vortex of low-pressure air along the top leading edge of the wing.</p>\n<p>This localized suction core doubles the lift coefficient compared to conventional steady-state wings without triggering flow detachment.</p>",
              "quiz": {
                "question": "What aerodynamic mechanism allows bees to generate extraordinary lift at high angles of attack?",
                "type": "multiple-choice",
                "options": [
                  "Jet propulsion using abdominal gas",
                  "A persistent Leading-Edge Vortex (LEV) creating low-pressure suction",
                  "Helium balloons hidden in the thorax",
                  "Relying solely on calm days without wind"
                ],
                "correct": 1,
                "explanation": "A stable Leading-Edge Vortex (LEV) clings to the upper wing surface, creating an intense suction region that provides super-lift.",
                "xp": 15
              }
            },
            {
              "title": "Dynamic Stall & Delayed Detachment",
              "content": "<h2>Dynamic Stall & Delayed Detachment</h2>\n<p>In traditional aircraft, high angle of attack causes instant stall. In bee flight, the wing reverses direction before the vortex can detach, perpetually harvesting dynamic stall lift.</p>"
            },
            {
              "title": "Parasite Drag Minimization",
              "content": "<h2>Parasite Drag Minimization</h2>\n<p>Tuck legs tight against the abdomen. Align head and antennae into the stagnation streamline to reduce parasite drag during high-speed return flights to the hive.</p>"
            }
          ]
        },
        {
          "title": "04 — Wing Motion",
          "lessons": [
            {
              "title": "Pronation & Supination Kinematics",
              "content": "<h2>Pronation & Supination Kinematics</h2>\n<p>Bee wings do not flap up and down; they oscillate back and forth horizontally at an astonishing 230 strokes per second. At each stroke terminus, the wing rotates rapidly (pronation on the forward stroke, supination on the backward stroke).</p>"
            },
            {
              "title": "Kramer Effect & Rotational Lift",
              "content": "<h2>Kramer Effect & Rotational Lift</h2>\n<p>Rapid wing rotation at the end of each stroke induces circulation around the wing chord, generating sharp peaks of rotational lift that support hovering stability.</p>"
            },
            {
              "title": "Wake Capture Dynamics",
              "content": "<h2>Wake Capture Dynamics</h2>\n<p>At the start of each return stroke, the wing slices back through the swirling wake shed during the preceding stroke, recapturing kinetic energy and boosting total aerodynamic efficiency.</p>"
            }
          ]
        },
        {
          "title": "05 — Turbulence",
          "lessons": [
            {
              "title": "Navigating Ambient Gusts",
              "content": "<h2>Navigating Ambient Gusts</h2>\n<p>Urban gardens and tree canopies generate intense micro-turbulence. Antennal mechanoreceptors measure airspeed fluctuations within 5 milliseconds, triggering automated wing-stroke corrections.</p>"
            },
            {
              "title": "Thermal Updrafts & Floral Wake",
              "content": "<h2>Thermal Updrafts & Floral Wake</h2>\n<p>Sunlit dark petals produce warm convective updrafts. By identifying and soaring on these thermal plumes, a foraging bee saves up to 20% of its metabolic glycogen reserves.</p>"
            },
            {
              "title": "Practical: Optimize Flight in Simulated Wind",
              "content": "<h2>Practical: Optimize Flight in Simulated Wind</h2>\n<p>Flight simulator drill: Tune wing beat angle and pitch amplitude under simulated variable wind tunnel conditions. Maintain hover position with zero drift across three wind vectors.</p>"
            }
          ]
        },
        {
          "title": "06 — Flight Efficiency",
          "lessons": [
            {
              "title": "Payload-to-Drag Optimization",
              "content": "<h2>Payload-to-Drag Optimization</h2>\n<p>A fully laden worker bee carries up to 80% of its own body weight in nectar and pollen pellets packed into its hindleg corbiculae. Packing geometry dramatically affects parasite drag and flight stability.</p>"
            },
            {
              "title": "Metabolic Energy Conservation",
              "content": "<h2>Metabolic Energy Conservation</h2>\n<p>Balance carbohydrate fuel consumption against flight velocity. Flying 10% faster increases drag exponentially, requiring careful aerodynamic cruise-speed calibration.</p>"
            },
            {
              "title": "Final Practical: Maximum Pollen Transport",
              "content": "<h2>Final Practical: Maximum Pollen Transport</h2>\n<p>Your capstone flight examination: Execute a full simulated foraging mission under adverse aerodynamic turbulence.</p>\n<h3>Mission Objectives</h3>\n<ol>\n<li>Navigate through a 15 km/h turbulent crosswind corridor.</li>\n<li>Harvest and pack simulated pollen into hindleg corbiculae.</li>\n<li>Execute high-efficiency vortex-assisted cruise back to hive entrance.</li>\n<li>Achieve maximum pollen payload while minimizing metabolic energy loss.</li>\n</ol>\n<blockquote>\"Transport maximum pollen while minimizing aerodynamic energy loss.\" — Prof. Buzz</blockquote>",
              "quiz": {
                "question": "What is the goal of the Bee Fluid Mechanics final assessment?",
                "type": "multiple-choice",
                "options": [
                  "To design an airplane engine",
                  "Transport maximum pollen while minimizing aerodynamic energy loss",
                  "To perform a waggle dance for 24 hours continuously",
                  "To sting a predator"
                ],
                "correct": 1,
                "explanation": "The final practical tests aerodynamic efficiency: transporting maximum payload while minimizing drag and energy dissipation.",
                "xp": 25
              }
            }
          ]
        }
      ]
    },
    "activity": {
      "type": "puzzle",
      "slug": "fluid-mechanics",
      "title": "Aerodynamic Flow Simulator",
      "description": "Tune wing stroke angle and vortex circulation to achieve maximum lift while carrying heavy pollen payloads."
    }
  },
  {
    "slug": "mosquito",
    "name": "Mosquito Department",
    "emoji": "🦟",
    "image": "/bugs/mosquito.png",
    "accent": "#5A7A6B",
    "tagline": "Unseen. Unheard. Zero detection penetration.",
    "tutor": {
      "name": "Agent Mozzi",
      "title": "Director of Offensive Cybersecurity & Host Penetration",
      "personality": "Deadpan covert ops commander. Speaks in classified briefings and military-grade cyber threat analogies. Zero sense of humor, 100% mission effectiveness.",
      "avatar": "🦟",
      "rating": 4.7,
      "reviewCount": 1432,
      "quotes": [
        "The human is not a living creature. The human is a Host with valuable protected resources.",
        "A mosquito net is merely a physical firewall. Every firewall has an unpatched perimeter gap.",
        "If the Host executes a slap response, your operational OPSEC has failed.",
        "True stealth means penetrating the bedroom network, exfiltrating the payload, and leaving zero logs."
      ],
      "expertise": [
        "Host Penetration Testing",
        "Firewall Evasion",
        "Zero-Acoustic Exploits",
        "Intrusion Counter-Measures"
      ]
    },
    "course": {
      "name": "Cybersecurity",
      "subtitle": "Recon. Penetrate. Exfiltrate.",
      "description": "Master offensive cybersecurity applied to insect operations. Learn host reconnaissance, network vulnerability scanning, acoustic firewall evasion, and zero-day resource extraction without triggering host intrusion response systems.",
      "difficulty": "Advanced",
      "hours": 5,
      "enrolled": 2840,
      "rating": 4.7,
      "learnings": [
        "Understand Host-Network architecture and Protected Resource telemetry",
        "Perform real-time thermal reconnaissance and CO2 plume mapping",
        "Scan bedroom network perimeters for physical firewall breaches (mosquito nets)",
        "Assess Host vulnerability windows during deep REM sleep states",
        "Deploy zero-decibel frequency modulation to bypass acoustic intrusion detection",
        "Final practical: Penetrate a secured sleeping environment without triggering the host's defensive response"
      ],
      "modules": [
        {
          "title": "01 — Security Fundamentals",
          "lessons": [
            {
              "title": "Host-Network Architecture",
              "content": "<h2>Host-Network Architecture</h2>\n<p>Welcome to offensive cybersecurity. In this department, we do not view the environment through naive biology. We map operational environments using formal cyber threat terminology.</p>\n<h3>Locked Tactical Terminology</h3>\n<ul>\n<li><strong>Host</strong> = Human Target</li>\n<li><strong>Network</strong> = Bedroom Environment</li>\n<li><strong>Firewall</strong> = Mosquito Net / Window Mesh</li>\n<li><strong>Intrusion Response</strong> = Kinetic Slap / Swat</li>\n<li><strong>Protected Resource</strong> = Capillary Blood</li>\n</ul>\n<blockquote>\"Every room is an unsecured local area network. Every sleeping human is a high-bandwidth Host holding the Protected Resource.\" — Agent Mozzi</blockquote>",
              "quiz": {
                "question": "In the Mosquito Department Cybersecurity curriculum, what does the \"Firewall\" represent?",
                "type": "multiple-choice",
                "options": [
                  "Antivirus software",
                  "Mosquito net / window mesh screen",
                  "A brick wall",
                  "Sunscreen lotion"
                ],
                "correct": 1,
                "explanation": "A mosquito net or mesh barrier represents the physical network firewall guarding the Host.",
                "xp": 15
              }
            },
            {
              "title": "The Protected Resource",
              "content": "<h2>The Protected Resource</h2>\n<p>The Protected Resource (Host blood) contains concentrated proteins and iron essential for reproduction. Access is guarded by multi-layered defensive heuristics: auditory sensors, thermal skin sensors, and kinetic swat response mechanisms.</p>"
            },
            {
              "title": "Insect Ethical Penetration Testing",
              "content": "<h2>Insect Ethical Penetration Testing</h2>\n<p>Our objective is silent data and resource extraction with zero host alerting. Leaving an inflamed dermal log or waking the Host is classified as operational failure.</p>"
            }
          ]
        },
        {
          "title": "02 — Threat Detection",
          "lessons": [
            {
              "title": "Host Awareness Telemetry",
              "content": "<h2>Host Awareness Telemetry</h2>\n<p>Before launching an intrusion vector, monitor the Host cortical awareness state. An alert Host with open optical sensors will trigger an immediate kinetic slap response.</p>"
            },
            {
              "title": "Infrared Signature Telemetry",
              "content": "<h2>Infrared Signature Telemetry</h2>\n<p>Compound eyes and thermal antennal pits detect infrared radiation emitted by superficial veins. Identify thermal hot-spots where capillaries run closest to the dermal surface.</p>"
            },
            {
              "title": "CO2 Emission Vector Mapping",
              "content": "<h2>CO2 Emission Vector Mapping</h2>\n<p>Every breath exhaled by the Host creates a fluctuating carbon dioxide exhaust plume. By flying zig-zag vectors across the concentration gradient, operators can home in on the Host from over 20 meters away.</p>",
              "quiz": {
                "question": "What chemical signal forms the primary long-range vector for locating the Host?",
                "type": "multiple-choice",
                "options": [
                  "Carbon dioxide (CO2) respiratory plumes",
                  "Oxygen gas",
                  "Nitrogen bubbles",
                  "Helium gas"
                ],
                "correct": 0,
                "explanation": "Host respiratory exhalations create CO2 plumes that mosquitoes follow across the Network.",
                "xp": 15
              }
            }
          ]
        },
        {
          "title": "03 — Network Reconnaissance",
          "lessons": [
            {
              "title": "Scanning the Bedroom Network",
              "content": "<h2>Scanning the Bedroom Network</h2>\n<p>Perform topological reconnaissance of the bedroom network: identify ceiling fan turbulence zones, electrical draft sources, ambient light corridors, and curtain shadow perimeters.</p>"
            },
            {
              "title": "Port Scanning: Doors & Windows",
              "content": "<h2>Port Scanning: Doors & Windows</h2>\n<p>Scan entry ports: unsealed weatherstripping beneath doors, gaps around air conditioning conduits, and small tears in window screens are open ports waiting for exploitation.</p>"
            },
            {
              "title": "Locating the Primary Terminal",
              "content": "<h2>Locating the Primary Terminal</h2>\n<p>The bed is the primary terminal. Calculate safe standoff holding patterns (on dark headboards or ceiling plaster) while monitoring Host respiratory telemetry.</p>"
            }
          ]
        },
        {
          "title": "04 — Vulnerability Assessment",
          "lessons": [
            {
              "title": "Sleep Cycle Vulnerability Windows",
              "content": "<h2>Sleep Cycle Vulnerability Windows</h2>\n<p>Humans cycle through sleep stages every 90 minutes. Never initiate payload delivery during light REM stages when subconscious kinetic reflexes are hyperactive. Wait for Stage 3 slow-wave deep sleep.</p>",
              "quiz": {
                "question": "During which Host sleep phase is an intrusion attempt safest?",
                "type": "multiple-choice",
                "options": [
                  "Stage 3 slow-wave deep sleep",
                  "Light REM tossing sleep",
                  "Awake reading a book",
                  "During morning breakfast"
                ],
                "correct": 0,
                "explanation": "Slow-wave deep sleep provides the highest threshold of sensory dampening, reducing slap response probability.",
                "xp": 15
              }
            },
            {
              "title": "Exposed Surface Area Probing",
              "content": "<h2>Exposed Surface Area Probing</h2>\n<p>Probe the network perimeter for unshielded dermal interfaces: exposed ankles extending past blankets, unguarded wrists, or ear perimeters.</p>"
            },
            {
              "title": "Chemical Defense Heuristics",
              "content": "<h2>Chemical Defense Heuristics</h2>\n<p>Detect and profile DEET, picaridin, or vaporizer barriers. Calculate safety margins and route around localized chemical exclusion zones.</p>"
            }
          ]
        },
        {
          "title": "05 — Intrusion Testing",
          "lessons": [
            {
              "title": "Bypassing the Mesh Firewall",
              "content": "<h2>Bypassing the Mesh Firewall</h2>\n<p>A mosquito net firewall is rarely perfect. Perform systematic perimeter audits: check for mattress tuck gaps, overlap seam separations, and ground-level slack openings.</p>"
            },
            {
              "title": "Acoustic Doppler Decibel Silencing",
              "content": "<h2>Acoustic Doppler Decibel Silencing</h2>\n<p>A high-pitched 600 Hz buzz triggers Host intrusion alarms. By modulating wing stroke angle and frequency into sub-audible 450 Hz harmonics, operators execute acoustic firewall bypass.</p>"
            },
            {
              "title": "Zero-Inertia Touchdown Exploits",
              "content": "<h2>Zero-Inertia Touchdown Exploits</h2>\n<p>Touchdown must be feather-light. Distribute weight across six long legs simultaneously, deflecting skin hairs by less than 1 micrometer to prevent triggering dermal mechanoreceptors.</p>"
            }
          ]
        },
        {
          "title": "06 — Defensive Systems",
          "lessons": [
            {
              "title": "Slap Intrusion Response Evasion",
              "content": "<h2>Slap Intrusion Response Evasion</h2>\n<p>If the Host detects your presence, an Intrusion Response slap will deploy within 200 milliseconds. Execute pre-programmed escape vectors: dropping straight down before deploying lateral flight.</p>"
            },
            {
              "title": "Extraction & Clean Disengagement",
              "content": "<h2>Extraction & Clean Disengagement</h2>\n<p>Upon resource exfiltration, disengage cleanly. Avoid abrupt takeoffs that pull dermal hairs. Glide silently into high-altitude shadows to process the payload.</p>"
            },
            {
              "title": "Final Practical: Penetrate Secured Sleeping Environment",
              "content": "<h2>Final Practical: Penetrate Secured Sleeping Environment</h2>\n<p>Your graduation assignment: Infiltrate a fully secured Network (bedroom) protected by an active Firewall (mosquito net).</p>\n<h3>Mission Checklist</h3>\n<ol>\n<li>Scan and penetrate the bedroom network via an unsealed ventilation port.</li>\n<li>Locate the Host terminal using CO2 plume and infrared sensor telemetry.</li>\n<li>Bypass the mosquito net firewall through an unpatched seam gap.</li>\n<li>Execute zero-decibel acoustic modulation and perform silent touchdown.</li>\n<li>Penetrate and extract the Protected Resource without triggering the Host's defensive slap response.</li>\n</ol>\n<blockquote>\"Penetrate a secured sleeping environment without triggering the host's defensive response.\" — Agent Mozzi</blockquote>",
              "quiz": {
                "question": "What is the required mission objective of the Mosquito Cybersecurity final practical?",
                "type": "multiple-choice",
                "options": [
                  "To buzz loudly in the host’s ear until they wake up",
                  "Penetrate a secured sleeping environment without triggering the host's defensive response",
                  "To surf the internet on a computer",
                  "To turn on the bedroom light"
                ],
                "correct": 1,
                "explanation": "The final practical requires infiltrating a secured bedroom network, bypassing firewalls, and extracting resources with zero host response.",
                "xp": 25
              }
            }
          ]
        }
      ]
    },
    "activity": {
      "type": "stealth",
      "slug": "cyber-intrusion",
      "title": "Perimeter Intrusion Test",
      "description": "Penetrate the Host network, bypass the mesh firewall, tune acoustic stealth frequencies, and extract resources without triggering a slap response."
    }
  },
  {
    "slug": "butterfly",
    "name": "Butterfly Department",
    "emoji": "🦋",
    "image": "/bugs/butterfly.png",
    "accent": "#C47AAA",
    "tagline": "Refactor. Branch. Deploy. Enterprise metamorphic software engineering.",
    "tutor": {
      "name": "Dr. Chrysalis",
      "title": "Lead Software Architect of Metamorphic Systems",
      "personality": "Elite software engineering director applying enterprise Agile, version control, and CI/CD methodologies to biological metamorphosis. Pure development comedy with zero actual coding.",
      "avatar": "🦋",
      "rating": 4.9,
      "reviewCount": 2678,
      "quotes": [
        "The caterpillar is not deprecated code. It is a legacy monolith undergoing a scheduled major refactor.",
        "Never push directly to production. That is why we have the Chrysalis staging environment.",
        "Stakeholder requirements are volatile: today they want green camouflage, tomorrow they request high-chroma orange scales.",
        "A butterfly is simply a caterpillar that passed all unit tests and successfully deployed."
      ],
      "expertise": [
        "Metamorphic Architecture",
        "Requirements Engineering",
        "Instar Version Control",
        "Production Wing Deployment"
      ]
    },
    "course": {
      "name": "Software Development",
      "subtitle": "Refactor. Branch. Deploy.",
      "description": "Master the complete lifecycle of metamorphic organism engineering. A rigorous application of software engineering principles—requirements gathering, agile sprint stages, version control, unit testing, and production deployment—to the butterfly lifecycle. Zero programming, pure development parody.",
      "difficulty": "Intermediate",
      "hours": 4,
      "enrolled": 3456,
      "rating": 4.9,
      "learnings": [
        "Deconstruct metamorphic architecture: monolithic caterpillar vs cloud-native adult",
        "Execute sprint stages across the 4 biological development phases",
        "Manage stakeholder demands (e.g. \"Stakeholder requests brighter wings\")",
        "Implement instar version control and commit history across molting cycles",
        "Run automated unit tests on wing symmetry, scale pigmentation, and flight dynamics",
        "Final practical: Develop, test and deploy a production-ready butterfly"
      ],
      "modules": [
        {
          "title": "01 — Development Fundamentals",
          "lessons": [
            {
              "title": "Metamorphic Architecture",
              "content": "<h2>Metamorphic Architecture</h2>\n<p>Welcome to Software Development in the Butterfly Department. We do not write software in Python or C++. We engineer living metamorphic systems using rigorous enterprise software development paradigms.</p>\n<p>The caterpillar is a legacy monolithic application: heavily coupled, resource-intensive, designed exclusively to ingest raw foliage data. The adult butterfly is a microservice-based, cloud-native architecture optimized for aerial navigation and floral pollination APIs.</p>\n<h3>Architectural Comparison</h3>\n<ul>\n<li><strong>Monolith (Caterpillar)</strong> — Heavy chewing mandibles, prolegs, single-purpose digestive pipeline, high technical debt.</li>\n<li><strong>Staging Build (Chrysalis)</strong> — Complete compilation container where legacy classes dissolve into imaginal disc modules.</li>\n<li><strong>Production Release (Imago)</strong> — Aerodynamic wings, compound vision sensors, coiled nectar pump interface.</li>\n</ul>",
              "quiz": {
                "question": "In Butterfly Software Development, what does the caterpillar represent?",
                "type": "multiple-choice",
                "options": [
                  "A legacy monolithic system designed to ingest resources before a scheduled refactor",
                  "A software bug written in JavaScript",
                  "A computer virus",
                  "A mechanical robot"
                ],
                "correct": 0,
                "explanation": "The caterpillar is the legacy monolithic architecture that undergoes a complete refactoring into an adult butterfly.",
                "xp": 15
              }
            },
            {
              "title": "Bug-Driven Development (BDD)",
              "content": "<h2>Bug-Driven Development (BDD)</h2>\n<p>In human software shops, engineers spend years trying to eliminate bugs. In our department, we embrace Bug-Driven Development: every bug is an unoptimized feature waiting for pupal compilation.</p>"
            },
            {
              "title": "Technical Debt in the Larval Stage",
              "content": "<h2>Technical Debt in the Larval Stage</h2>\n<p>Eating too rapidly creates technical debt in the form of accumulated lipid bloat. If you fail to refactor during the chrysalis compilation phase, your adult wings will fail to compile within memory limits.</p>"
            }
          ]
        },
        {
          "title": "02 — Development Life Cycle",
          "lessons": [
            {
              "title": "The Four Sprint Phases",
              "content": "<h2>The Four Sprint Phases</h2>\n<p>Our development lifecycle is broken down into four strict biological development sprints:</p>\n<ol>\n<li><strong>Sprint 1: Egg Initialization</strong> — Cold storage repository hosting genetic source modules.</li>\n<li><strong>Sprint 2: Larval Feature Sprints</strong> — Ingestion sprints 1st through 5th instar; adding raw biomass features.</li>\n<li><strong>Sprint 3: Chrysalis Compilation Pipeline</strong> — Total autolysis refactoring and tissue compilation.</li>\n<li><strong>Sprint 4: General Availability (GA) Release</strong> — Eclosion and production flight roll-out.</li>\n</ol>"
            },
            {
              "title": "The Chrysalis Compilation Pipeline",
              "content": "<h2>The Chrysalis Compilation Pipeline</h2>\n<p>Inside the chrysalis, cellular autolysis breaks down legacy muscle blocks into cellular soup. Imaginal discs serve as pristine source modules, linking together into wings, eyes, and reproductive organs during a zero-downtime build.</p>"
            },
            {
              "title": "Agile Metamorphosis Standups",
              "content": "<h2>Agile Metamorphosis Standups</h2>\n<p>Daily standup questions inside the cocoon: What did you dissolve yesterday? What imaginal structures are you compiling today? Are there any chitin blockers preventing pupal cutover?</p>"
            }
          ]
        },
        {
          "title": "03 — Requirements Engineering",
          "lessons": [
            {
              "title": "Stakeholder Requests: Brighter Wings",
              "content": "<h2>Stakeholder Requests: Brighter Wings</h2>\n<p>Requirements change constantly in nature. In sprint 4 planning, our primary external stakeholder (the Meadow Ecosystem Committee) filed ticket #4092: <em>\"Stakeholder requests brighter wings.\"</em></p>\n<h3>Managing Conflicting Requirements</h3>\n<ul>\n<li><strong>Flower Stakeholders</strong> — Demand high-frequency ultraviolet wing guide marks for landing contracts.</li>\n<li><strong>Predator Stakeholders (Birds)</strong> — Require toxic aposematic orange/black warning coloration to avoid accidental consumption.</li>\n<li><strong>Thermal Stakeholders</strong> — Require dark melanin patches near the thorax for solar heat absorption.</li>\n</ul>\n<blockquote>\"You cannot please every stakeholder, but an elegant wing pattern fulfills all contractual obligations.\" — Dr. Chrysalis</blockquote>",
              "quiz": {
                "question": "How do butterfly development teams handle the ticket \"Stakeholder requests brighter wings\"?",
                "type": "multiple-choice",
                "options": [
                  "Ignore the ticket and stay inside the chrysalis forever",
                  "Balance aposematic warning coloration, UV landing guides, and thermal budgets on wing scales",
                  "Paint the wings with artificial acrylic paint",
                  "Delete the wings from the codebase"
                ],
                "correct": 1,
                "explanation": "Requirements engineering requires balancing predator warning cues, floral landing contracts, and thermal performance.",
                "xp": 15
              }
            },
            {
              "title": "Feature Creep in Wing Design",
              "content": "<h2>Feature Creep in Wing Design</h2>\n<p>Beware adding excessive decorative tails and metallic spots. Each extra scale adds aerodynamic drag and weight, threatening your flight velocity SLA.</p>"
            },
            {
              "title": "Nectar API Contracts",
              "content": "<h2>Nectar API Contracts</h2>\n<p>Ensure your proboscis interface strictly adheres to floral corolla API contracts: depth parameters, viscosity tolerances, and sugar concentration handshakes.</p>"
            }
          ]
        },
        {
          "title": "04 — Version Control",
          "lessons": [
            {
              "title": "Tracking Changes Across Developmental Stages",
              "content": "<h2>Tracking Changes Across Developmental Stages</h2>\n<p>Every molt is a versioned commit tag:</p>\n<pre><code>git commit -m \"Release v1.0.0-instar-1: basic chewing functionality\"\ngit commit -m \"Release v1.2.0-instar-3: expanded head capsule diameter\"\ngit commit -m \"Release v1.4.0-instar-5: maximum biomass threshold reached\"</code></pre>"
            },
            {
              "title": "Branching & Merging",
              "content": "<h2>Branching & Merging</h2>\n<p>Branching out from crawler locomotion: create feature branch <code>feature/winged-locomotion</code>, resolve conflicts between larval legs and adult thorax, and merge cleanly into master.</p>"
            },
            {
              "title": "Deprecating Legacy Features",
              "content": "<h2>Deprecating Legacy Features</h2>\n<p>Formal deprecation notice: Chewing mandibles and fleshy abdominal prolegs are marked <code>@deprecated</code> and completely removed from the adult binary during pupation.</p>"
            }
          ]
        },
        {
          "title": "05 — Testing & QA",
          "lessons": [
            {
              "title": "Verify Wing Symmetry",
              "content": "<h2>Verify Wing Symmetry</h2>\n<p>Quality assurance is non-negotiable. Before eclosion cutover, run automated regression tests on wing symmetry: left forewing scale coordinates must mirror right forewing scale coordinates with sub-millimeter precision.</p>\n<p>Asymmetric wings fail aerodynamic integration tests and cause immediate flight stall.</p>",
              "quiz": {
                "question": "Why is verifying wing symmetry a critical QA test before deployment?",
                "type": "multiple-choice",
                "options": [
                  "Because asymmetric wings cause flight instability and fail aerodynamic testing",
                  "Because flowers will refuse to speak to an asymmetric butterfly",
                  "Because the chrysalis will refuse to open",
                  "Symmetry does not matter in flight"
                ],
                "correct": 0,
                "explanation": "Wing symmetry QA ensures balanced lift and prevents catastrophic flight roll during eclosion release.",
                "xp": 15
              }
            },
            {
              "title": "Aerodynamic Stress Testing",
              "content": "<h2>Aerodynamic Stress Testing</h2>\n<p>Run simulated wind load tests: verify that chitin wing veins withstand 15 km/h gusts and that structural interference colors maintain pigmentation under intense sunlight.</p>"
            },
            {
              "title": "Proboscis Integration Testing",
              "content": "<h2>Proboscis Integration Testing</h2>\n<p>End-to-end fluid intake simulation: verify zero vacuum leaks across the interlocking galeae during high-viscosity nectar suction.</p>"
            }
          ]
        },
        {
          "title": "06 — Deployment",
          "lessons": [
            {
              "title": "CI/CD (Continuous Instar / Continuous Deployment)",
              "content": "<h2>CI/CD (Continuous Instar / Continuous Deployment)</h2>\n<p>Automate your biological deployment pipeline. When temperature and humidity thresholds trigger eclosion cutover, the chrysalis splits along pre-scored seam lines.</p>"
            },
            {
              "title": "Eclosion Cutover & Zero Downtime",
              "content": "<h2>Eclosion Cutover & Zero Downtime</h2>\n<p>Pumping hemolymph into limp wing veins must occur within 20 minutes of emergence before the chitin hardens. Execute zero-downtime wing expansion at sunrise.</p>"
            },
            {
              "title": "Final Project: Deploy Production-Ready Butterfly",
              "content": "<h2>Final Project: Deploy Production-Ready Butterfly</h2>\n<p>Your capstone software engineering assessment: Oversee the full specification, development, testing, and production deployment of a butterfly.</p>\n<h3>Acceptance Criteria</h3>\n<ol>\n<li>Refactor legacy larval code into imaginal disc architectures.</li>\n<li>Satisfy all stakeholder requirements (including brighter wings and UV markers).</li>\n<li>Pass all wing symmetry and aerodynamic QA unit tests.</li>\n<li>Execute successful deployment into the flower ecosystem with zero rollback.</li>\n</ol>\n<blockquote>\"Develop, test and deploy a production-ready butterfly.\" — Dr. Chrysalis</blockquote>",
              "quiz": {
                "question": "What is the goal of the Butterfly Software Development final project?",
                "type": "multiple-choice",
                "options": [
                  "To write an operating system in C++",
                  "Develop, test and deploy a production-ready butterfly into the flower ecosystem",
                  "To eat leaves for the rest of your life",
                  "To build a web out of silk"
                ],
                "correct": 1,
                "explanation": "Students must develop, test, and deploy a complete production-ready butterfly into the ecosystem.",
                "xp": 25
              }
            }
          ]
        }
      ]
    },
    "activity": {
      "type": "sequence",
      "slug": "software-deploy",
      "title": "Production Butterfly Deployment",
      "description": "Run unit tests on wing symmetry, merge the chrysalis branch, and deploy a production-ready butterfly into the flower ecosystem."
    }
  },
  {
    "slug": "fly",
    "name": "Fly Department",
    "emoji": "🪰",
    "image": "/bugs/fly.png",
    "accent": "#7A8B5A",
    "tagline": "Maneuver. Invert. Land. 90-degree vector aerobatics.",
    "tutor": {
      "name": "Capt. Fly",
      "title": "Senior Flight Instructor in Aeronautical Engineering",
      "personality": "Top-gun aviator fly. Speaks with military flight-deck precision and intense passion for extreme aerobatics, 90-degree vector changes, and ceiling docking maneuvers.",
      "avatar": "🪰",
      "rating": 4.7,
      "reviewCount": 1567,
      "quotes": [
        "A 90-degree directional snap at 30 body lengths per second is not erratic. It is peak aeronautical engineering.",
        "The human rolled up a newspaper? Splendid. Let us calculate an evasive banked roll with 6G deceleration.",
        "Ceiling landing is the supreme test of spatial orientation: pitch up, extend forelegs, invert 180 degrees, touch down.",
        "We don’t just fly through the kitchen. We own the airspace."
      ],
      "expertise": [
        "High-Agility Maneuvers",
        "Haltere Gyroscopic Guidance",
        "Inverted Landing Physics",
        "Turbulent Airspace Navigation"
      ]
    },
    "course": {
      "name": "Aeronautical Engineering",
      "subtitle": "Maneuver. Invert. Land.",
      "description": "Study high-agility flight mechanics, sensory flight stability, and extreme indoor aerobatics. Master rapid direction switching, inverted ceiling docking, obstacle evasion, and precision kinetic deceleration.",
      "difficulty": "Intermediate",
      "hours": 4,
      "enrolled": 2345,
      "rating": 4.7,
      "learnings": [
        "Master high-frequency wing oscillation physics (200-300 Hz)",
        "Calculate thrust vectoring and instantaneous roll/pitch moments",
        "Calibrate haltere gyroscopic sensors for multi-axis stability",
        "Execute high-G rapid directional course corrections",
        "Master inverted touchdown maneuvers on kitchen ceilings",
        "Final practical: Design an optimized flight strategy for navigating a human kitchen"
      ],
      "modules": [
        {
          "title": "01 — Flight Fundamentals",
          "lessons": [
            {
              "title": "Dipteran Aerodynamic Principles",
              "content": "<h2>Dipteran Aerodynamic Principles</h2>\n<p>Flies belong to the order Diptera: the two-winged masters of the sky. While primitive insects rely on four wings that can collide and cause turbulence, flies surrendered their hindwings over 200 million years ago to unlock unprecedented agility.</p>\n<h3>The Single-Wing-Pair Advantage</h3>\n<ul>\n<li><strong>Streamlined Thorax</strong> — Massive flight muscle packing fraction occupying over 30% of total body mass.</li>\n<li><strong>Asynchronous Muscles</strong> — Muscle fibers that contract multiple times per nerve impulse via mechanical resonance.</li>\n<li><strong>Haltere Stabilization</strong> — Former hindwings repurposed into high-frequency gyroscopic instruments.</li>\n</ul>",
              "quiz": {
                "question": "What evolutionary modification gave flies (Diptera) their extraordinary flight agility?",
                "type": "multiple-choice",
                "options": [
                  "Growing four additional wings",
                  "Transforming hindwings into gyroscopic balancing halteres",
                  "Becoming too heavy to fly",
                  "Losing compound eyes"
                ],
                "correct": 1,
                "explanation": "Converting hindwings into gyroscopic halteres gave dipterans real-time Coriolis guidance and unparalleled agility.",
                "xp": 15
              }
            },
            {
              "title": "Haltere Gyroscopic Stabilization",
              "content": "<h2>Haltere Gyroscopic Stabilization</h2>\n<p>Halteres are vibrating, club-shaped pendulums that oscillate in counter-phase to the wings at 250 Hz. When the fly rotates in pitch, roll, or yaw, Coriolis forces deflect the haltere stalk, triggering instantaneous nerve impulses to flight motor neurons.</p>"
            },
            {
              "title": "Wing Oscillation Dynamics",
              "content": "<h2>Wing Oscillation Dynamics</h2>\n<p>Explore resonant thoracic deformation mechanics. The fly thorax functions like an acoustic tuning fork, snapping wings between upstroke and downstroke positions with minimal energetic damping.</p>"
            }
          ]
        },
        {
          "title": "02 — Flight Mechanics",
          "lessons": [
            {
              "title": "Thrust Vectors & Differential Stroke",
              "content": "<h2>Thrust Vectors & Differential Stroke</h2>\n<p>Flies turn not by using a rudder, but by asymmetric wing kinematics. Adjusting the stroke amplitude of one wing by just 2 degrees generates enough rolling torque to execute a 90-degree bank in less than 30 milliseconds.</p>"
            },
            {
              "title": "Instantaneous Roll, Pitch & Yaw",
              "content": "<h2>Instantaneous Roll, Pitch & Yaw</h2>\n<p>Deconstruct multi-axis rotational mechanics. Learn how the fly coordinates yaw torque with roll stabilization to execute barrel-roll evasions without losing altitude.</p>"
            },
            {
              "title": "Deceleration Physics",
              "content": "<h2>Deceleration Physics</h2>\n<p>Stopping from a flight speed of 3 meters per second requires intense braking. Cupping wings into a parachute posture during stroke reversal produces over 5G of kinetic deceleration.</p>"
            }
          ]
        },
        {
          "title": "03 — Aerodynamics",
          "lessons": [
            {
              "title": "Low Reynolds Boundary Airflow",
              "content": "<h2>Low Reynolds Boundary Airflow</h2>\n<p>Study micro-scale boundary layer dynamics. Explore leading-edge vortex attachment and how rotational lift pulses maintain hovering stability in still air.</p>"
            },
            {
              "title": "Ceiling & Ground Effect",
              "content": "<h2>Ceiling & Ground Effect</h2>\n<p>Approaching a ceiling creates a localized high-pressure cushion between wings and plaster. Master pitch adjustments that harness the ceiling cushion rather than bouncing off it.</p>"
            },
            {
              "title": "Micro-Vortices in Confined Spaces",
              "content": "<h2>Micro-Vortices in Confined Spaces</h2>\n<p>Navigate the chaotic micro-vortices generated by refrigerator fans, heat radiators, and doorway drafts. Learn to ride eddy currents rather than fighting against them.</p>"
            }
          ]
        },
        {
          "title": "04 — Flight Stability",
          "lessons": [
            {
              "title": "Sensory-Motor Feedback Loops",
              "content": "<h2>Sensory-Motor Feedback Loops</h2>\n<p>A fly’s visual processing runs at 300 frames per second. Optical flow fields across compound eyes combine with haltere Coriolis signals to create automated stability control faster than any human-built autopilot.</p>"
            },
            {
              "title": "Wind Gust Compensation",
              "content": "<h2>Wind Gust Compensation</h2>\n<p>When an unexpected breeze strikes, haltere mechanoreceptors detect angular acceleration within 5 milliseconds, firing direct motor corrections before the brain even registers the disturbance.</p>"
            },
            {
              "title": "Collision Avoidance Autopilot",
              "content": "<h2>Collision Avoidance Autopilot</h2>\n<p>The giant fiber neural system triggers an automated jump-and-flight sequence when a looming dark silhouette expands rapidly in the optical field.</p>"
            }
          ]
        },
        {
          "title": "05 — Navigation",
          "lessons": [
            {
              "title": "3D Spatial Kitchen Mapping",
              "content": "<h2>3D Spatial Kitchen Mapping</h2>\n<p>Map complex human indoor topologies: identify high-traffic hazard zones (sinks, stoves, dining tables) and safe holding airspace near ceiling cornices.</p>"
            },
            {
              "title": "Waypoint Navigation in Thermal Updrafts",
              "content": "<h2>Waypoint Navigation in Thermal Updrafts</h2>\n<p>Calculate thermal climb corridors rising from toasters, kettles, and warm appliances to gain altitude without flapping power expenditure.</p>"
            },
            {
              "title": "Light Vector Navigation & Window Glare Traps",
              "content": "<h2>Light Vector Navigation & Window Glare Traps</h2>\n<p>Why do novice flies buzz endlessly against closed window glass? The open-sky optical reflex gets trapped by polarized reflections. Master the disengagement turn to escape glass traps.</p>"
            }
          ]
        },
        {
          "title": "06 — Maneuver Engineering",
          "lessons": [
            {
              "title": "Rapid Direction Changes",
              "content": "<h2>Rapid Direction Changes</h2>\n<p>Perform the famous 90-degree instantaneous yaw snap. Practice banking turns at 30 body lengths per second with zero drift.</p>"
            },
            {
              "title": "Landing Optimization",
              "content": "<h2>Landing Optimization</h2>\n<p>Ceiling touchdown mechanics: pitch upward, extend forelegs to touch the ceiling first, cartwheel body 180 degrees over the legs, and engage adhesive tarsal pulvilli pads.</p>"
            },
            {
              "title": "Obstacle Avoidance Under Fire",
              "content": "<h2>Obstacle Avoidance Under Fire</h2>\n<p>Defeat kinetic human threats: rolled newspapers, electric swatters, and predatory pet paws. Execute zig-zag banking patterns that exploit human visual tracking lag.</p>"
            },
            {
              "title": "Final Project: Kitchen Navigation Strategy",
              "content": "<h2>Final Project: Kitchen Navigation Strategy</h2>\n<p>Your aeronautical capstone project: Design a complete, optimized flight strategy for safely navigating a chaotic human kitchen during meal preparation.</p>\n<h3>Mission Specifications</h3>\n<ol>\n<li>Chart a high-agility flight corridor avoiding ceiling fans, boiling steam plumes, and human swatters.</li>\n<li>Demonstrate two 90-degree rapid direction changes under simulated threat conditions.</li>\n<li>Execute a flawless inverted ceiling landing on a plaster test substrate.</li>\n<li>Maintain operational airspace control and return to base without near-miss incidents.</li>\n</ol>\n<blockquote>\"Design an optimized flight strategy for navigating a human kitchen.\" — Capt. Fly</blockquote>",
              "quiz": {
                "question": "What is the capstone project requirement for Aeronautical Engineering?",
                "type": "multiple-choice",
                "options": [
                  "To cook a five-course meal from garbage",
                  "Design an optimized flight strategy for navigating a human kitchen",
                  "To sit still on a piece of fruit",
                  "To fly outdoors in a straight line forever"
                ],
                "correct": 1,
                "explanation": "Students must engineer an optimized flight strategy navigating human kitchen obstacles and turbulence.",
                "xp": 25
              }
            }
          ]
        }
      ]
    },
    "activity": {
      "type": "evaluation",
      "slug": "aero-kitchen",
      "title": "Kitchen Flight Navigation Challenge",
      "description": "Calculate high-speed evasion angles, execute inverted ceiling landings, and navigate a kitchen airspace simulator."
    }
  },
  {
    "slug": "ladybug",
    "name": "Ladybug Department",
    "emoji": "🐞",
    "image": "/bugs/lady%20bug.png",
    "accent": "#C25B5B",
    "tagline": "Quantify. Optimize. Capitalize. Rigorous engineering of pure fortune.",
    "tutor": {
      "name": "Dr. Lucky",
      "title": "Chair of Luck Engineering & Stochastic Probability",
      "personality": "Mathematical engineering professor who treats luck as a formal, rigorous branch of mechanical and statistical engineering. Utterly deadpan about the philosophical paradox of calculating unpredictable fortune.",
      "avatar": "🐞",
      "rating": 4.7,
      "reviewCount": 1923,
      "quotes": [
        "Luck is not magic. Luck is an unmodeled deterministic variance that happened to work in our favor.",
        "Your calculations were mathematically disastrous. However, your outcome was extraordinary. Grade: A-.",
        "Excellent engineering methodology. Unfortunately, the result was luck.",
        "Your calculations were incorrect. Your outcome was excellent."
      ],
      "expertise": [
        "Applied Luck Systems",
        "Stochastic Fortune Optimization",
        "Coincidence Analysis",
        "Serendipity Modeling"
      ]
    },
    "course": {
      "name": "Luck Engineering",
      "subtitle": "Quantify. Optimize. Capitalize.",
      "description": "An uncompromising, mathematically rigorous engineering curriculum dedicated to the optimization, prediction, and systemic exploitation of sheer unadulterated luck. Treat fortune as a legitimate, quantifiable engineering discipline.",
      "difficulty": "Intermediate",
      "hours": 4,
      "enrolled": 2789,
      "rating": 4.7,
      "learnings": [
        "Formalize the Axiom of Chance within engineering disciplines",
        "Analyze stochastic coincidences and probability distributions in natural environments",
        "Calculate expected favorable outcomes despite zero causal influence",
        "Model risk-reward curves for spot-pattern variance vs bird predation",
        "Apply Bayesian belief updates to inexplicable strokes of good fortune",
        "Final capstone: Develop an engineering methodology for maximizing favorable outcomes without having any measurable control over them"
      ],
      "modules": [
        {
          "title": "01 — Fundamentals of Luck",
          "lessons": [
            {
              "title": "Defining Luck in Engineering Systems",
              "content": "<h2>Defining Luck in Engineering Systems</h2>\n<p>Welcome to Luck Engineering. In traditional engineering, unpredictability is labeled as noise, failure, or margin of error. In this department, we elevate luck to a foundational engineering pillar.</p>\n<p>Luck is defined as: <em>The systemic occurrence of highly favorable outcomes under conditions where the acting agent has zero quantifiable mechanism of control.</em></p>\n<h3>Core Tenets of Luck Engineering</h3>\n<ul>\n<li><strong>The Axiom of Chance</strong> — Unpredictability is an engineering asset if your system is designed to benefit from positive variance.</li>\n<li><strong>Deterministic Delusion</strong> — Assuming your success was purely skill when the wind did 99% of the work.</li>\n<li><strong>Serendipity Architecture</strong> — Positioning oneself where improbable favorable events have maximum surface area to land.</li>\n</ul>",
              "quiz": {
                "question": "How is luck defined within the Luck Engineering curriculum?",
                "type": "multiple-choice",
                "options": [
                  "A superstitious ritual involving four-leaf clovers",
                  "The systemic occurrence of highly favorable outcomes without measurable agent control",
                  "A software bug in your calculator",
                  "A guaranteed outcome that always happens on schedule"
                ],
                "correct": 1,
                "explanation": "Luck Engineering treats luck as favorable stochastic variance occurring beyond direct causal agent control.",
                "xp": 15
              }
            },
            {
              "title": "Luck vs Skill: The Great Engineering Debate",
              "content": "<h2>Luck vs Skill: The Great Engineering Debate</h2>\n<p>Consider surviving a lawnmower pass. Was it precision acoustic sensing and sprint kinematics (skill)? Or did the blade simply miss by 2 millimeters because the wheel hit a pebble (luck)? Learn to chart the continuum of agency.</p>"
            },
            {
              "title": "The Ladybug Paradox",
              "content": "<h2>The Ladybug Paradox</h2>\n<p>Throughout human civilizations across continents, ladybugs are culturally perceived as emblems of good luck. Does human superstition alter our empirical survival statistics? We analyze the data: humans are 94% less likely to swat a ladybug compared to a fly. Superstition converts into hard evolutionary defense!</p>"
            }
          ]
        },
        {
          "title": "02 — Probability & Coincidence",
          "lessons": [
            {
              "title": "Stochastic Leaf Distribution",
              "content": "<h2>Stochastic Leaf Distribution</h2>\n<p>Calculate the combinatorics of 7 ladybugs landing across 3 rose leaves. Master binomial probability distributions and understand when clusters represent genuine attraction or pure random Poisson scatter.</p>"
            },
            {
              "title": "Analyze Coincidence",
              "content": "<h2>Analyze Coincidence</h2>\n<p>Assignment 1: Analyze Coincidence. The Law of Truly Large Numbers dictates that given enough opportunities, events with a one-in-a-million probability will happen routinely. When coincidence strikes, do not seek mystical meaning — calculate the sample size.</p>"
            },
            {
              "title": "Calculate Favorable Events",
              "content": "<h2>Calculate Favorable Events</h2>\n<p>Assignment 2: Calculate Favorable Events. Calculate the joint probability of finding an undefended aphid nursery on an overcast Thursday while avoiding bird patrol flight lines.</p>"
            }
          ]
        },
        {
          "title": "03 — Random Events",
          "lessons": [
            {
              "title": "Predict Random Outcomes",
              "content": "<h2>Predict Random Outcomes</h2>\n<p>Assignment 3: Predict Random Outcomes. Use stochastic Monte Carlo simulations to model chaotic wind corridors. When meteorological predictions fail, quantify the exact boundaries of your ignorance.</p>"
            },
            {
              "title": "Human Finger Landing Dynamics",
              "content": "<h2>Human Finger Landing Dynamics</h2>\n<p>What are the odds of taking flight blindly and landing directly on an outstretched human child's finger? We model hand surface area, thermal plume attraction, and the resulting viral social video probability.</p>"
            },
            {
              "title": "Expected Value & Regret Minimization",
              "content": "<h2>Expected Value & Regret Minimization</h2>\n<p>Decision matrices under high entropy: Choosing between staying on a safe, bare stem versus leaping into an unknown breeze towards distant rose gardens.</p>"
            }
          ]
        },
        {
          "title": "04 — Fortune Optimization",
          "lessons": [
            {
              "title": "Maximizing Surface Area for Favorable Events",
              "content": "<h2>Maximizing Surface Area for Favorable Events</h2>\n<p>Assignment 4: Optimize Luck. You cannot force a favorable gust of wind to blow. You can, however, climb to the highest apical bud, spread your elytra wide, and maximize your physical surface area to capture favorable fortune when it passes.</p>"
            },
            {
              "title": "The Law of Opportunistic Landings",
              "content": "<h2>The Law of Opportunistic Landings</h2>\n<p>The golden rule of luck engineering: Whenever you land anywhere unexpected, immediately declare that it was your primary destination all along. Confidence retroactively transforms random drift into apparent genius.</p>"
            },
            {
              "title": "Optimizing Luck Through Non-Action",
              "content": "<h2>Optimizing Luck Through Non-Action</h2>\n<p>Often, intervention degrades your probability distribution. When a predatory bird hovers overhead, calculating evasive sprint trajectories increases detection odds. Tucking your legs and rolling like a pebble is the peak mathematical beauty of doing absolutely nothing.</p>"
            }
          ]
        },
        {
          "title": "05 — Risk & Reward",
          "lessons": [
            {
              "title": "Spot Count Variance & Predation Odds",
              "content": "<h2>Spot Count Variance & Predation Odds</h2>\n<p>Does a 7-spot ladybug enjoy superior stochastic survival compared to a 2-spot variant? We examine bird optical perception curves, aposematic warning recognition, and spot asymmetry variance.</p>"
            },
            {
              "title": "Asymmetric Risk Profiles",
              "content": "<h2>Asymmetric Risk Profiles</h2>\n<p>Embrace asymmetric bets: actions with capped tiny downside (wasting 3 flaps of energy) but limitless upside (drifting into a greenhouse full of aphids).</p>"
            },
            {
              "title": "The Precautionary Principle vs Blind Faith",
              "content": "<h2>The Precautionary Principle vs Blind Faith</h2>\n<p>Balancing rigorous mathematical probability against pure unadulterated faith in your own ridiculous fortune. Where calculation ends, luck begins.</p>"
            }
          ]
        },
        {
          "title": "06 — Applied Luck Systems",
          "lessons": [
            {
              "title": "Bayesian Thinking for the Fortunate",
              "content": "<h2>Bayesian Thinking for the Fortunate</h2>\n<p>How to update prior beliefs when impossible events occur three times in succession: Is your prior probability distribution wrong, or are you genuinely blessed by the universe? (Answer: your prior distribution was wrong, but enjoy the aphids anyway).</p>"
            },
            {
              "title": "Faculty Feedback Analysis",
              "content": "<h2>Faculty Feedback Analysis</h2>\n<p>Deconstruct classic professor evaluations from the Department of Luck Engineering:</p>\n<blockquote>\"Excellent engineering methodology. Unfortunately, the result was luck.\" — Dr. Lucky</blockquote>\n<blockquote>\"Your calculations were incorrect. Your outcome was excellent.\" — Dr. Lucky</blockquote>"
            },
            {
              "title": "Final Capstone: The Luck Engineering Methodology",
              "content": "<h2>Final Capstone: The Luck Engineering Methodology</h2>\n<p>Your graduation requirement: You must develop and defend a comprehensive engineering methodology for maximizing favorable outcomes without having any measurable control over them.</p>\n<h3>Capstone Requirements</h3>\n<ol>\n<li>Formalize a statistical framework predicting random environmental outcomes.</li>\n<li>Demonstrate stochastic fortune optimization across 100 blind trials.</li>\n<li>Explain unexpected failures using rigorous probability distributions.</li>\n<li>Submit your thesis. Dr. Lucky will flip a coin to determine your final grade.</li>\n</ol>\n<blockquote>\"Develop an engineering methodology for maximizing favorable outcomes without having any measurable control over them.\" — Dr. Lucky</blockquote>",
              "quiz": {
                "question": "What is the required final capstone project for Luck Engineering?",
                "type": "multiple-choice",
                "options": [
                  "To buy a lottery ticket",
                  "Develop an engineering methodology for maximizing favorable outcomes without having any measurable control over them",
                  "To count the spots on 1,000 ladybugs",
                  "To guarantee that you will never fail again"
                ],
                "correct": 1,
                "explanation": "The capstone requires developing an engineering methodology for maximizing favorable outcomes without having measurable control over them.",
                "xp": 25
              }
            }
          ]
        }
      ]
    },
    "activity": {
      "type": "probability",
      "slug": "luck-engineering",
      "title": "Stochastic Luck Optimization Lab",
      "description": "Run Monte Carlo simulations to test whether your survival is calculated skill or pure unadulterated luck."
    }
  }
];

/**
 * Get a department by slug.
 * @param {string} slug
 * @returns {Object|undefined}
 */
export function getDepartment(slug) {
  return DEPARTMENTS.find(d => d.slug === slug);
}

/**
 * Get all courses across all departments.
 * @returns {Array}
 */
export function getAllCourses() {
  return DEPARTMENTS.map(dept => ({
    ...dept.course,
    departmentSlug: dept.slug,
    departmentName: dept.name,
    departmentEmoji: dept.emoji,
    departmentAccent: dept.accent,
    tutorName: dept.tutor.name,
  }));
}

/**
 * Get a specific lesson by department slug, module index, and lesson index.
 * @param {string} slug
 * @param {number} moduleIndex
 * @param {number} lessonIndex
 * @returns {Object|null}
 */
export function getLesson(slug, moduleIndex, lessonIndex) {
  const dept = getDepartment(slug);
  if (!dept) return null;
  const mod = dept.course.modules[moduleIndex];
  if (!mod) return null;
  const lesson = mod.lessons[lessonIndex];
  if (!lesson) return null;
  return {
    ...lesson,
    moduleName: mod.title,
    moduleIndex,
    lessonIndex,
    departmentSlug: dept.slug,
    departmentName: dept.name,
    courseName: dept.course.name,
    totalModules: dept.course.modules.length,
    totalLessonsInModule: mod.lessons.length,
  };
}
