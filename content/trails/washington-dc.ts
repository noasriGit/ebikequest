import type { Trail } from "@/types/trail";
import { EDITORIAL_DEFAULTS } from "../_shared/defaults";
import { trailCoverImages } from "../images/trail-covers";

export const washingtonDcTrails: Trail[] = [
  {
    id: "trail-dc-c-and-o-dc",
    slug: "c-and-o-canal-towpath-dc",
    title: "C&O Canal Towpath (DC Section)",
    description: "Georgetown's C&O Canal towpath: crushed-stone Potomac riding under NPS rules—pedal-assist e-bikes to 15 mph with links to Capital Crescent and Rock Creek.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "washington-dc",
    location: {
      name: "Georgetown, Washington DC",
      coordinates: {
        lat: 38.902,
        lng: -77.062
      }
    },
    stats: {
      distanceMiles: 4,
      difficulty: "easy",
      surface: [
        "crushed stone"
      ],
      estimatedTimeMinutes: 30
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1",
        "class2"
      ],
      notes: "NPS manages the towpath; e-bike policies follow federal and local guidance for the DC section.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "historic",
      "riverfront"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "ebike-regulations-overview"
    ],
    images: [trailCoverImages["c-and-o-canal-towpath-dc"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview: Georgetown to the D.C. Line",
        paragraphs: [
          "The District of Columbia section of the Chesapeake and Ohio Canal National Historical Park towpath runs roughly four miles west from Georgetown along the Potomac River toward the Maryland boundary near Fletcher's Cove and Chain Bridge. Managed entirely by the National Park Service, this segment follows the historic canal prism through a corridor of sycamores, lock ruins, and river overlooks that feel surprisingly wild for a capital city ride.",
          "The surface is predominantly hard-packed crushed stone—generally smooth enough for hybrid and gravel tires but softer and slower than the paved Capital Crescent Trail that parallels it in Georgetown. Mile markers along the towpath help you gauge distance; Mile 0 sits at the Georgetown lift-lock area near Rock Creek, and the route continues uninterrupted into Maryland for riders heading toward Great Falls or the full 184-mile corridor to Cumberland.",
          "This is a shared corridor for hikers, joggers, anglers, and horseback riders in permitted zones. Expect narrow sections, occasional mud after rain, and slow zones near Great Falls Overlook and Fletcher's Boathouse where foot traffic concentrates. The towpath connects directly to the Capital Crescent Trail terminus at Georgetown and to Potomac waterfront routes linking Rock Creek Park and the Mount Vernon Trail across the river in Virginia."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access: NPS Rules and D.C. Motorized Bicycle Law",
        paragraphs: [
          "E-bikes are permitted on the C&O Canal towpath wherever traditional bicycles are allowed, per the park superintendent's compendium and NPS bicycle guidance. The federal definition requires fully operable pedals and a motor under 750 watts. Using the electric motor to propel the bike without pedaling is prohibited except where public motor vehicle traffic is allowed—which effectively means you must pedal on the towpath.",
          "Washington, D.C. adopts its own motorized bicycle standard rather than Virginia's or Maryland's three-class framework. D.C. Code § 50-2201.02 caps motor-assisted speed at 20 mph on level ground. Class 1 and Class 2 e-bikes that meet that cap generally qualify as legal motorized bicycles; Class 3 models designed to assist to 28 mph do not. Operators must be at least 16 years old. DCMR § 18-1201.18 prohibits motorized bicycles on D.C. sidewalks and off-street bike paths, but the NPS-managed towpath operates under federal bicycle regulations rather than that local path prohibition.",
          "On designated NPS routes within the park, including the towpath, Capital Crescent Trail segment, and Berma Road, the superintendent's compendium sets a 15 mph maximum speed—stricter than D.C.'s 20 mph motorized bicycle cap. Plan to ride in a low assist mode through crowded Georgetown segments. Dismount and walk your bike across all aqueducts and footbridges, including the Foundry Branch crossing. Helmets are required for operators and passengers under 16 on public rights-of-way under D.C. Code § 50-1605."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights Along the D.C. Towpath",
        paragraphs: [
          "Georgetown's Mile 0 area puts you at the heart of one of the region's oldest industrial corridors, with the restored Georgetown Lift Lock, canal boat programs, and waterfront restaurants steps from the trailhead. Heading upstream, the wide Potomac views open toward Roosevelt Island and the Virginia shoreline.",
          "Fletcher's Cove (around Mile 3) is a local institution: rowboat and kayak rentals, a snack bar, and a popular angling spot where the towpath bends into a shaded river bend. The route passes beneath the graceful arches of the Key Bridge and continues toward Chain Bridge, where the canal corridor narrows and the forest closes in.",
          "Wildlife sightings—herons, turtles, and deer—are common in the early morning. Lock ruins and interpretive signage tell the story of the canal's 19th-century commerce. For e-bike riders, the towpath is a natural link in a longer Potomac loop combining the Capital Crescent, Rock Creek Trail, and bridges into Virginia."
        ],
        listItems: [
          "Mile 0 Georgetown lift-lock area and Potomac Heritage Trail connections",
          "Fletcher's Cove boathouse, fishing, and riverside picnic spots",
          "Key Bridge and Chain Bridge river crossings with forested canal prism",
          "Direct connection to Capital Crescent Trail at Georgetown waterfront",
          "Gateway to Maryland segments toward Great Falls and the full C&O corridor"
        ]
      },
      {
        id: "access-parking",
        heading: "Access Points and Parking",
        paragraphs: [
          "The most popular Georgetown trailhead sits at the intersection of the towpath and the Capital Crescent Trail near Water Street NW and the Georgetown waterfront. Capital Bikeshare and limited street parking are available in Georgetown, though weekend demand is high. Many riders arrive by Metro (Foggy Bottom–GWU, then a short ride) or combine the towpath with a one-way trip.",
          "Fletcher's Cove offers a dedicated parking lot off Canal Road NW with access to the towpath and boathouse. Foundry Branch and other mid-route pull-offs provide additional entry points for shorter out-and-back rides. Chain Bridge access connects riders continuing into Maryland toward the Capital Beltway and Great Falls.",
          "Overnight parking for through-trekkers is limited in Georgetown; long-distance C&O riders often arrange shuttles or stay at canal-side hiker-biker campsites in Maryland. Check NPS alerts for towpath closures during flooding—the Potomac can submerge low sections after heavy rain."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips for E-Bike Towpath Etiquette",
        paragraphs: [
          "Run lower tire pressure than you would on pavement—35–45 psi on 40 mm or wider tires improves comfort and traction on crushed stone. After storms, mud and standing water can make the surface slippery; Class 2 throttle launches are poor etiquette here and violate NPS pedal requirements anyway.",
          "Stay right except when passing, announce passes early, and slow to walking speed near anglers and lock ruins. Horses and mules appear in permitted sections November through March upstream of Georgetown; yield generously. The towpath has no lighting—carry front and rear lights if you ride near dawn or dusk, and note that parkland from Georgetown to Seneca closes at dark.",
          "Battery range is rarely an issue on the D.C. section alone, but there are no charging stations on the towpath. Carry a repair kit; the nearest bike shops are in Georgetown and Bethesda. If you continue into Maryland, remember that the Western Maryland Rail Trail allows only Class 1 e-bikes under Maryland DNR rules—a different policy from the NPS towpath."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Conditions",
        paragraphs: [
          "Spring brings mud and overgrowth as the canal thaws; summer offers deep shade but heavy weekend crowds in Georgetown and at Fletcher's. Fall is the sweet spot—dry surface, autumn color, and fewer tour groups. Winter rides can be serene, but ice in shaded sections and early darkness require caution.",
          "Flooding closes the towpath periodically when the Potomac rises. NPS posts condition updates on the C&O Canal website and social channels. Ticks and poison ivy appear in summer along overgrown edges—stay on the main tread. Heat and humidity in July and August make early-morning rides preferable for e-bike battery efficiency and personal comfort."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Connections",
        paragraphs: [
          "The Capital Crescent Trail begins at the Georgetown waterfront and offers a paved alternative paralleling the towpath toward Bethesda. Rock Creek Trail reaches Georgetown under the Whitehurst Freeway, connecting north through Rock Creek Park. Across the Key Bridge, the Mount Vernon Trail and Arlington's riverfront network expand your loop options into Virginia.",
          "For a monument ride, continue east via connector routes through the National Mall area—allow extra time for crowds and walk-your-bike zones at memorials. DDOT-managed trails like the Metropolitan Branch and Anacostia Riverwalk follow different jurisdictional rules than this NPS corridor; verify policies before linking a multi-jurisdiction day ride."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on the C&O Canal towpath in Georgetown?",
        answer: "Yes. NPS allows e-bikes on the towpath where traditional bicycles are permitted, with operable pedals, a motor under 750 watts, mandatory pedaling (no throttle-only riding), and a 15 mph speed limit on designated park routes."
      },
      {
        question: "Can I use a Class 3 e-bike on the D.C. towpath section?",
        answer: "Class 3 e-bikes exceed D.C.'s 20 mph motorized bicycle cap and are not legally recognized as e-bikes in the District. Even where NPS federal rules mention e-bikes broadly, operating an unregistered motor-driven cycle on D.C. parkland creates legal risk."
      },
      {
        question: "Do I need to walk my bike anywhere on the towpath?",
        answer: "Yes. NPS requires cyclists to dismount and walk across all aqueducts and footbridges along the towpath, including the Foundry Branch crossing in the D.C. section."
      },
      {
        question: "What is the surface like for e-bikes?",
        answer: "Hard-packed crushed stone, generally smooth but softer than pavement. It can become muddy after rain. Wider tires and moderate speed make the ride comfortable; road slicks are not ideal."
      },
      {
        question: "Is there a speed limit for e-bikes on the towpath?",
        answer: "Yes. The NPS superintendent's compendium sets a 15 mph maximum on designated routes including the towpath—lower than D.C.'s 20 mph motorized bicycle statutory cap."
      }
    ],
    highlights: [
      "Historic Georgetown Mile 0 lock and canal heritage corridor",
      "Crushed-stone Potomac riding with Key Bridge and Fletcher's Cove views",
      "NPS e-bike access with pedal-assist requirement and 15 mph trail limit",
      "Direct links to Capital Crescent Trail and Potomac waterfront routes",
      "Gateway to Maryland's Great Falls and the full 184-mile C&O corridor"
    ],
    accessPoints: [
      {
        name: "Georgetown Waterfront / Mile 0",
        notes: "Primary trailhead at Water Street NW; connects to Capital Crescent Trail; limited street parking and Capital Bikeshare."
      },
      {
        name: "Fletcher's Cove",
        notes: "Parking lot off Canal Road NW; boathouse, fishing access, and mid-route towpath entry around Mile 3."
      },
      {
        name: "Foundry Branch Crossing",
        notes: "Footbridge access between Georgetown and Fletcher's; cyclists must dismount across the bridge."
      },
      {
        name: "Chain Bridge Area",
        notes: "Western D.C. access near the Maryland line; connects toward Great Falls and the wider C&O corridor."
      }
    ],
    seasonalNotes: "Spring mud and summer crowds are the main challenges; fall offers the best conditions. The towpath may close during Potomac flooding. Parkland from Georgetown to Seneca closes at dark. No towpath charging stations—plan battery range accordingly.",
  },
  {
    id: "trail-dc-rock-creek",
    slug: "rock-creek-trail",
    title: "Rock Creek Trail",
    description: "Rock Creek Trail through NPS parkland: paved multi-use path from Georgetown to Maryland—pedal-assist e-bikes on paved routes only, 15 mph trail limit.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "washington-dc",
    location: {
      name: "Rock Creek Park",
      coordinates: {
        lat: 38.948,
        lng: -77.051
      }
    },
    stats: {
      distanceMiles: 8,
      difficulty: "moderate",
      surface: [
        "paved",
        "mixed"
      ],
      estimatedTimeMinutes: 50
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1"
      ],
      notes: "E-bike access on park trails is limited; paved multi-use segments may allow Class 1 e-bikes only.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "urban",
      "park"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "ebike-regulations-overview"
    ],
    images: [trailCoverImages["rock-creek-trail"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview: Rock Creek Park Multi-Use Trail",
        paragraphs: [
          "Rock Creek Trail is the primary paved bicycle corridor through Rock Creek Park, one of the nation's oldest urban national parks. In the District, the trail runs from the Georgetown waterfront—where it passes beneath the Whitehurst Freeway—north through the Rock Creek valley to the Maryland state line, with a southern extension connecting toward the Lincoln Memorial along the Potomac.",
          "The National Park Service manages the trail and surrounding parkland. The paved multi-use path is typically four to six feet wide with rolling grades following the creek bottom and western ridge. It mixes commuter traffic with weekend recreational riders, joggers, and families. Unpaved hiking trails branch throughout the park but are closed to all bicycles.",
          "Distance within D.C. covers roughly eight miles of connected riding, though exact mileage depends on which spurs and road connections you include. Beach Drive sections close to motor vehicles on a scheduled basis, creating car-free riding on park roads that intersect the trail system. The corridor links Georgetown, Dupont Circle access via side routes, the National Zoo area, and Maryland's Rock Creek Trail extension."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access: NPS Paved Routes and D.C. Law",
        paragraphs: [
          "Rock Creek Park allows e-bikes on paved roads and paved multi-use trails where traditional bicycles are permitted. All unpaved trails and off-trail areas remain closed to bikes. The NPS compendium requires operable pedals, a motor under 750 watts, and prohibits using the motor without pedaling except on roads open to public vehicular traffic.",
          "District of Columbia law governs e-bike use within the park through adoption in the NPS compendium. D.C. defines legal motorized bicycles as devices with operable pedals and motors incapable of exceeding 20 mph on level ground—effectively aligning with Class 1 and Class 2 e-bikes, not Class 3. Operators must be at least 16. DCMR § 18-1201.18 bans motorized bicycles from D.C. sidewalks and off-street bike paths citywide, but NPS paved multi-use trails within Rock Creek Park operate under the federal e-bike authorization.",
          "Speed limits split by surface: 15 mph on multi-use trails and 25 mph on park roadways. Pedal-assist operation is both a legal requirement and practical etiquette on a trail that narrows through wooded sections with blind curves. The park's existing trail listing emphasizes Class 1 compatibility because throttle-only riding is prohibited and natural-surface riding is off limits—leaving pedal-assist Class 1 models as the safest choice for compliance and trail relations."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights Along Rock Creek Trail",
        paragraphs: [
          "The Georgetown-to-Peirce Mill segment combines Potomac views at the southern end with deep forest canopy as you enter the main valley. Peirce Mill and the Rock Creek Park Nature Center offer restrooms, water, and ranger programs near the trail.",
          "Beach Drive closures transform the park road network into a regional cycling destination on weekends and scheduled weekday periods. The Military Road parallel section is the steepest paved grade—a downhill reward if you plan your loop direction accordingly.",
          "Wildlife, stone bridges, and creek crossings provide an escape from downtown density. The southern connection toward the Lincoln Memorial and Watergate complex links Rock Creek riding to National Mall connector routes and the Mount Vernon Trail via Ohio Drive and Memorial Bridge."
        ],
        listItems: [
          "Georgetown waterfront entry beneath the Whitehurst Freeway",
          "Peirce Mill and Rock Creek Nature Center visitor stops",
          "Beach Drive car-free riding during scheduled road closures",
          "Forest canopy and creek crossings through the main valley",
          "Southern connection toward the Lincoln Memorial and Potomac trails"
        ]
      },
      {
        id: "access-parking",
        heading: "Access Points and Parking",
        paragraphs: [
          "The Georgetown trailhead at K Street and the Rock Creek and Potomac Parkway is the primary southern access, connecting from the C&O Canal towpath and Capital Crescent Trail. Limited parking exists in Georgetown; Metro via Foggy Bottom is a common approach.",
          "Peirce Mill, the Nature Center on Military Road, and Carter Barron/Smithsonian National Zoo area provide mid-route parking with trail access. Beach Drive pull-offs serve riders during car-free periods. Check NPS road closure schedules before planning a Beach Drive loop.",
          "Northern access at the Maryland line connects seamlessly to Montgomery County's Rock Creek Trail extension toward Lake Needwood. Shady Grove and Friendship Heights Metro stations are reachable via side-street connections for multimodal trips."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips for a Crowded Urban Park Trail",
        paragraphs: [
          "Weekday rush hours bring fast commuters; weekends bring families and strollers. Use a bell or voice before passing, slow for dogs on leashes, and drop to Eco mode in congested segments. Root bumps and frost heaves appear throughout the paved path—especially north of Peirce Mill.",
          "Do not ride unpaved hiking trails even if your e-bike handles dirt well—NPS enforcement and trail damage concerns are real. When Beach Drive is open to cars, stay right and treat intersections as standard road merges. The Military Road parallel trail section is steep; inexperienced e-bike riders should descend cautiously.",
          "Lighting is essential for dawn and dusk commutes. The trail passes through long shaded stretches with limited sight lines. Carry identification and a phone; cell service is generally good but spotty in deep valley sections."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Conditions",
        paragraphs: [
          "Fall foliage peaks in late October along the creek corridor. Spring delivers cherry blossoms nearby and heavy pollen. Summer humidity makes the shaded trail popular but crowded. Winter ice on shaded pavement is a hazard—many commuters switch to street routes after freezes.",
          "NPS may close sections after storms when trees fall across the path. Ticks are present April through October; stay on pavement and check after rides. Beach Drive closure schedules shift seasonally—verify the current calendar on the Rock Creek Park website before planning car-free road riding."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Connections",
        paragraphs: [
          "Capital Crescent and C&O Canal towpath meet Rock Creek Trail at Georgetown. South and east, connector routes reach the National Mall, Ohio Drive, and the Mount Vernon Trail. Glover-Archbold Trail and other unpaved paths are hiking-only.",
          "Into Maryland, the Rock Creek Trail continues north through Montgomery County parkland with its own trail policies. For a longer e-bike day, combine Beach Drive closures with the Capital Crescent—but remember Montgomery County's Capital Crescent segment restricts e-bikes to Class 1 only past the D.C. line."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on Rock Creek Trail?",
        answer: "Yes, on paved multi-use trails and paved park roads where traditional bicycles are allowed. E-bikes must have operable pedals, a motor under 750 watts, and you must pedal—throttle-only operation is prohibited on trails."
      },
      {
        question: "Can I ride my e-bike on unpaved trails in Rock Creek Park?",
        answer: "No. NPS closes all unpaved trails and off-trail areas to bicycle use. E-bikes follow the same restriction as conventional bikes."
      },
      {
        question: "What speed limit applies to e-bikes on the trail?",
        answer: "15 mph on paved multi-use trails and 25 mph on park roadways, per the Rock Creek Park superintendent's compendium."
      },
      {
        question: "Is a Class 3 e-bike legal on Rock Creek Trail?",
        answer: "Class 3 e-bikes exceed D.C.'s 20 mph motorized bicycle definition and are not legally recognized as e-bikes in the District. Pedal-assist Class 1 and Class 2 models that meet the 20 mph cap are the compliant choice."
      },
      {
        question: "When is Beach Drive closed to cars?",
        answer: "NPS closes selected Beach Drive sections to motor vehicles on a recurring schedule, creating car-free riding for cyclists. Check the Rock Creek Park alerts page for current closure days and times."
      }
    ],
    highlights: [
      "Paved NPS multi-use trail through a historic urban national park",
      "Georgetown-to-Maryland corridor with Potomac and Lincoln Memorial links",
      "E-bikes permitted on paved routes with 15 mph trail speed limit",
      "Beach Drive car-free riding during scheduled road closures",
      "Peirce Mill, Nature Center, and deep forest minutes from downtown"
    ],
    accessPoints: [
      {
        name: "Georgetown / K Street Trailhead",
        notes: "Southern entry beneath Whitehurst Freeway; links to C&O towpath and Capital Crescent."
      },
      {
        name: "Peirce Mill",
        notes: "Historic mill site with restrooms and mid-valley trail access off Beach Drive."
      },
      {
        name: "Rock Creek Nature Center",
        notes: "Military Road NW visitor center with parking and trail connections."
      },
      {
        name: "Maryland State Line",
        notes: "Northern D.C. terminus connecting to Montgomery County Rock Creek Trail."
      }
    ],
    seasonalNotes: "Shaded pavement holds winter ice; verify Beach Drive closure schedules before weekend rides. Ticks active spring through fall. Storm downfall can close trail segments—check NPS alerts.",
  },
  {
    id: "trail-dc-anacostia-riverwalk",
    slug: "anacostia-riverwalk-trail",
    title: "Anacostia Riverwalk Trail",
    description: "Paved Anacostia Riverwalk from Navy Yard to the Arboretum—DDOT and NPS segments with D.C. 20 mph motorized-bicycle rules and riverfront commuting.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "washington-dc",
    location: {
      name: "Anacostia River",
      coordinates: {
        lat: 38.865,
        lng: -76.989
      }
    },
    stats: {
      distanceMiles: 12,
      difficulty: "easy",
      surface: [
        "paved"
      ],
      estimatedTimeMinutes: 60
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1",
        "class2",
        "class3"
      ],
      notes: "Paved Riverwalk segments allow e-bikes under DC e-bike regulations.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "riverfront",
      "paved",
      "commuter"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "ebike-regulations-overview"
    ],
    images: [trailCoverImages["anacostia-riverwalk-trail"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview: Anacostia Riverwalk Trail",
        paragraphs: [
          "The Anacostia Riverwalk Trail is a developing paved corridor along both banks of the Anacostia River, connecting the Southwest Waterfront and Navy Yard to Anacostia, Buzzard Point, RFK Stadium, the National Arboretum, and points toward Bladensburg, Maryland. Roughly twelve miles are open today toward an ultimate twenty-mile vision linking sixteen waterfront communities.",
          "Management is split. The District Department of Transportation (DDOT) oversees D.C.-owned segments built as part of the Anacostia Waterfront Initiative. National Park Service units—including National Capital Parks-East—manage sections through Anacostia Park and riverfront parkland. Each agency sets e-bike rules within its jurisdiction, though both align with the broader D.C. motorized bicycle framework and federal NPS e-bike policy on park segments.",
          "The trail surface is paved throughout open sections, designed for commuting and recreation with river views, bridge crossings, and access to Nationals Park, the DC United Audi Field area, and historic Anacostia. Gaps remain in the network—check DDOT's Riverwalk map before planning a continuous end-to-end ride."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access: DDOT Rulemaking and NPS Segments",
        paragraphs: [
          "DDOT rulemaking effective in late 2022 and early 2023 opened select D.C.-managed off-street trails to motorized bicycles, including the Anacostia Riverwalk Trail alongside the Metropolitan Branch Trail, Marvin Gaye Trail, Oxon Run Trail, and Klingle Valley Trail. Qualifying devices must meet D.C.'s motorized bicycle definition: operable pedals and a motor incapable of propelling the device faster than 20 mph on level ground. Operators must be at least 16.",
          "On NPS-managed Riverwalk segments, federal e-bike policy applies: e-bikes are allowed where traditional bicycles are allowed, with operable pedals, motors under 750 watts, mandatory pedaling on trails, and a 15 mph speed limit on designated routes. Throttle-only riding is prohibited on trail segments. Class 3 e-bikes exceeding the 20 mph D.C. cap are not legal motorized bicycles in the District regardless of trail manager.",
          "This trail is one of the few D.C. off-street corridors where DDOT explicitly permits motorized bicycles under local rulemaking—a meaningful change from the prior citywide ban in DCMR § 18-1201.18. When you cross into Maryland at Bladensburg or connect to Prince George's County tributary trails, policies change again; verify county park rules before continuing."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights Along the Riverwalk",
        paragraphs: [
          "The Navy Yard and Capitol Riverfront segment buzzes with game-day energy near Nationals Park and The Wharf development. Crossing the Anacostia bridges delivers skyline views of the Capitol and monuments from the east.",
          "Anacostia Park and Kenilworth Park segments feel open and green, with wetlands, birding, and the Kenilworth Aquatic Gardens nearby. The trail toward the National Arboretum passes through a quieter corridor of river woodlands and community parks.",
          "For e-bike commuters, the Riverwalk provides a low-stress alternative to riding motorized bicycles on D.C. sidewalks—which remain prohibited. Link to the Metropolitan Branch Trail via connector routes for a cross-town commute."
        ],
        listItems: [
          "Navy Yard, Nationals Park, and Capitol Riverfront waterfront access",
          "Anacostia Park and Kenilworth Aquatic Gardens riverfront segments",
          "Bridge crossings with Capitol and monument skyline views",
          "Connection toward RFK Stadium, National Arboretum, and Bladensburg",
          "DDOT-authorized motorized bicycle access on paved Riverwalk segments"
        ]
      },
      {
        id: "access-parking",
        heading: "Access Points and Parking",
        paragraphs: [
          "Navy Yard Metro and the Anacostia Metro station anchor opposite sides of the river with trail access. Parking lots serve Anacostia Park, RFK Stadium events, and the National Arboretum—though Arboretum access may involve on-street connections.",
          "Buzzard Point and the Southwest Waterfront provide western trailheads near the Washington Channel. The 11th Street Bridge and John Philip Sousa Bridge crossings link north and south bank segments. Capital Bikeshare stations appear at multiple nodes.",
          "Event parking at Nationals games and RFK can overwhelm nearby lots; plan rides outside event peaks or arrive by Metro. Bladensburg Waterfront Park in Maryland marks the northern connection toward the Anacostia Tributary Trail System with separate county policies."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips for a Multi-Agency Trail",
        paragraphs: [
          "Know which agency manages your segment before assuming speed limits—15 mph on NPS sections, 20 mph D.C. motorized bicycle cap on DDOT segments, and lower prudent speeds near pedestrians. The trail passes through neighborhoods where residents walk dogs and children play—respect slow zones.",
          "Gap sections may require on-street connections using D.C. bike lanes, where motorized bicycles are permitted in the roadway but not on sidewalks. Use lights at night; not all open segments are fully lit. Game-day crowds near the Navy Yard require walking-speed caution.",
          "When connecting to Maryland, research Prince George's County and Montgomery County e-bike pilot policies on tributary trails—they differ from D.C. and NPS rules. Carry a map; phone navigation works well but riverfront paths occasionally detour during construction."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Conditions",
        paragraphs: [
          "Summer heat along the open river corridor is intense—carry water and ride early. Spring cherry season near the Tidal Basin connectors draws tourists who spill onto adjacent paths. Fall offers clear views and comfortable commuting temperatures.",
          "Flooding affects low riverbank sections after heavy storms. Construction of remaining Riverwalk gaps continues year-round—DDOT detours may push riders onto streets temporarily. Winter riding is feasible on paved segments with proper layers and lights."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Connections",
        paragraphs: [
          "The Metropolitan Branch Trail connects via D.C. bike lanes toward Union Station and Silver Spring—also open to DDOT-authorized motorized bicycles. Fort Circle trails lie east in the Civil War Defenses network with different surface and e-bike restrictions.",
          "Across the river, Southwest Waterfront paths link toward the National Mall connector routes. Into Maryland, the Anacostia Tributary Trail System extends through Prince George's County with Class 1 pilot restrictions on many segments."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on the Anacostia Riverwalk Trail?",
        answer: "Yes. DDOT rulemaking permits motorized bicycles meeting D.C.'s 20 mph cap on D.C.-managed Riverwalk segments. NPS segments allow e-bikes where bicycles are permitted, with pedal-assist required and a 15 mph trail limit."
      },
      {
        question: "Can I ride a Class 3 e-bike on the Riverwalk?",
        answer: "No. Class 3 e-bikes exceed D.C.'s 20 mph motorized bicycle definition and are not legally recognized as e-bikes in the District on any segment."
      },
      {
        question: "Who manages the Anacostia Riverwalk Trail?",
        answer: "DDOT manages D.C.-built segments as part of the Anacostia Waterfront Initiative. NPS National Capital Parks-East manages sections through Anacostia Park and related riverfront parkland."
      },
      {
        question: "Is the trail fully connected end to end?",
        answer: "Not yet. About twelve of twenty planned miles are open. Check DDOT's current Riverwalk map for gaps and detours before planning a continuous ride."
      },
      {
        question: "Can I use a throttle on my e-bike along the Riverwalk?",
        answer: "On NPS segments, throttle-only riding without pedaling is prohibited. On DDOT segments, your device must still qualify as a D.C. motorized bicycle with operable pedals and a 20 mph motor cap."
      }
    ],
    highlights: [
      "Paved riverfront corridor through Navy Yard, Anacostia, and the Arboretum",
      "DDOT-authorized motorized bicycle access on District-managed segments",
      "NPS riverfront park riding with federal pedal-assist requirements",
      "Capitol and monument views from Anacostia bridge crossings",
      "Commuter link to Metropolitan Branch Trail and cross-town bike lanes"
    ],
    accessPoints: [
      {
        name: "Navy Yard / Capitol Riverfront",
        notes: "Navy Yard Metro access; Nationals Park waterfront; heavy event-day crowds."
      },
      {
        name: "Anacostia Park",
        notes: "NPS-managed parkland with parking off Anacostia Drive; multi-use trail segments."
      },
      {
        name: "Buzzard Point",
        notes: "Western riverfront access connecting toward the Southwest Waterfront."
      },
      {
        name: "National Arboretum Connection",
        notes: "Northeast trail approach to the Arboretum area; verify current gap status on DDOT maps."
      }
    ],
    seasonalNotes: "Summer river heat and game-day crowds at Navy Yard and RFK require planning. Low sections may flood after storms. Active construction continues on remaining trail gaps—check DDOT detours before visiting.",
  },
  {
    id: "trail-dc-capital-crescent-dc",
    slug: "capital-crescent-trail-dc",
    title: "Capital Crescent Trail (DC Section)",
    description: "Georgetown's NPS Capital Crescent segment: heavily used paved rail-trail toward Bethesda—pedal-assist e-bikes, 15 mph cap, and trail etiquette.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "washington-dc",
    location: {
      name: "Georgetown Waterfront",
      coordinates: {
        lat: 38.901,
        lng: -77.068
      }
    },
    stats: {
      distanceMiles: 2,
      difficulty: "easy",
      surface: [
        "paved"
      ],
      estimatedTimeMinutes: 15
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1",
        "class2"
      ],
      notes: "Follow DC e-bike rules and crowded-trail etiquette on the Georgetown segment.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "paved",
      "commuter"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "ebike-regulations-overview"
    ],
    images: [trailCoverImages["capital-crescent-trail-dc"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview: Georgetown to the Maryland Line",
        paragraphs: [
          "The Capital Crescent Trail follows the bed of the former Georgetown Branch of the Baltimore and Ohio Railroad from the Georgetown waterfront to Bethesda, Maryland. The National Park Service manages and maintains the 3.7-mile District segment as part of Chesapeake and Ohio Canal National Historical Park. Montgomery County Parks (M-NCPPC) maintains the remaining distance into Bethesda.",
          "The D.C. section is fully paved, generally flat, and among the most heavily trafficked rail-trails in the country. Runners, dog walkers, tourists, commuters, and road cyclists share a corridor that narrows through wooded cuts and passes over the Potomac on the Dalecarlia Reservoir bridge approach before reaching the Maryland line near the District boundary.",
          "The trail terminus in Georgetown sits at Water Street NW near the C&O Canal towpath and Rock Creek Trail connections, making this segment a hub for Potomac-side riding. A planned Purple Line transit project affects the Bethesda end in Maryland but the Georgetown-to-border segment remains a core regional route."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access: NPS in D.C., Class 1 Only in Maryland",
        paragraphs: [
          "On the NPS-managed D.C. segment, e-bikes are allowed where traditional bicycles are allowed. Requirements match the C&O Canal compendium: operable pedals, motor under 750 watts, no throttle-only riding on the trail, and a 15 mph maximum speed. D.C. motorized bicycle law—20 mph motor cap, operators 16 and older—is adopted into the NPS compendium for the District.",
          "Once you cross into Montgomery County, M-NCPPC policy restricts e-bikes to Class 1 pedal-assist models with motors rated 500 watts or less. Class 2 throttle bikes and Class 3 speed pedelecs that were compliant on the NPS segment may be prohibited on the Maryland side even if they meet D.C.'s 20 mph definition. Stop and verify your bike class before continuing north.",
          "Class 3 e-bikes are not legal motorized bicycles in D.C. regardless of NPS federal language. For daily commuters crossing the line, a Class 1 e-bike is the only configuration legal on both sides of the boundary."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights on the D.C. Segment",
        paragraphs: [
          "The Georgetown terminus puts you at the heart of the waterfront dining and canal heritage district. The trail passes through wooded buffers that feel removed from city noise despite running parallel to busy corridors.",
          "The Dalecarlia Reservoir crossing offers one of the trail's signature views—a brief opening over the water supply landscape before entering the final approach to Maryland. Interpretive signage marks the railroad history of the corridor.",
          "For e-bike riders, the Capital Crescent is a fast commuter spine when ridden respectfully—but weekend congestion demands patience and low assist levels through Georgetown and the narrowest wooded sections."
        ],
        listItems: [
          "Georgetown waterfront trailhead at Water Street NW",
          "Paved, flat rail-trail through wooded Potomac hillside",
          "Dalecarlia Reservoir bridge approach and river views",
          "Direct connection to C&O Canal towpath and Rock Creek Trail",
          "3.7-mile NPS segment before Montgomery County jurisdiction"
        ]
      },
      {
        id: "access-parking",
        heading: "Access Points and Parking",
        paragraphs: [
          "The primary D.C. trailhead is at the Capital Crescent terminus on Water Street NW in Georgetown. Street parking is scarce on weekends; arrive early or use Foggy Bottom Metro with a short ride west.",
          "Secondary access points appear at cross streets and trail crossings through the Palisades and Bethesda approaches, though Georgetown is the logical start for D.C.-only rides. Capital Bikeshare docks sit near the waterfront.",
          "The Arizona Avenue trail connection and MacArthur Boulevard crossing serve Palisades neighborhood access. There are no restrooms directly on the narrow trail corridor—plan stops in Georgetown before heading north."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips on a Crowded Commuter Corridor",
        paragraphs: [
          "Ride single file, stay right, and pass on the left with a clear audible signal. Rush-hour weekday mornings and weekend midday bring the heaviest use. Drop to the lowest assist mode in Georgetown and near the trail terminus where pedestrians overflow.",
          "The 15 mph NPS limit is lower than what many e-bikes can deliver—set a speed limiter if your display allows it. Pedal through congested zones even if throttle use is legal on D.C. streets; NPS requires pedaling on the trail.",
          "If you plan to continue into Maryland, confirm Class 1 compliance before crossing the line. Many regional group rides pause at the border for this reason. Wet leaves in fall and shade ice in winter create traction hazards on the paved surface.",
          "Bright front and rear lights help during dawn and dusk commutes when the wooded corridor darkens quickly. A bell is essential—the trail's popularity means pedestrians often cannot hear approaching bikes without a clear signal."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Conditions",
        paragraphs: [
          "Peak congestion runs April through October on weekends. Cherry blossom season adds tourist traffic to Georgetown access routes. Summer humidity is tolerable in the shaded cuts but crowds are maximal.",
          "Winter riding is viable—the paved surface clears faster than the adjacent towpath—but early-morning ice persists in shade. Fall leaf cover reduces traction on the Dalecarlia approach. DDOT and NPS occasionally close connectors during major waterfront events."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Connections",
        paragraphs: [
          "The C&O Canal towpath begins at Mile 0 adjacent to the Capital Crescent terminus—a crushed-stone alternative when you want softer scenery. Rock Creek Trail reaches Georgetown from the east via the Whitehurst Freeway underpass.",
          "Into Maryland, the trail continues to Bethesda with M-NCPPC Class 1 e-bike rules. South and west, Potomac bridges reach the Mount Vernon Trail and Virginia's riverfront network for a multi-state loop."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on the Capital Crescent Trail in Georgetown?",
        answer: "Yes on the 3.7-mile NPS segment in D.C., with operable pedals, a motor under 750 watts, mandatory pedaling, and a 15 mph speed limit."
      },
      {
        question: "What changes when I cross into Maryland?",
        answer: "Montgomery County Parks allows only Class 1 e-bikes with motors rated 500 watts or less on hard-surface park trails. Class 2 and Class 3 models may be prohibited past the D.C. line."
      },
      {
        question: "Can I ride a Class 2 throttle e-bike on the D.C. segment?",
        answer: "Class 2 e-bikes meeting D.C.'s 20 mph motorized bicycle definition may qualify, but you must pedal on the trail—throttle-only riding is prohibited by NPS. Continuing into Maryland requires Class 1 pedal-assist only."
      },
      {
        question: "How crowded is the trail?",
        answer: "Very crowded, especially weekends and weekday rush hours near Georgetown. Expect runners, strollers, and tourist groups—plan low speeds and patience."
      },
      {
        question: "Where does the D.C. segment end?",
        answer: "The NPS-managed section runs approximately 3.7 miles from the Georgetown waterfront terminus at Water Street NW to the Maryland-D.C. boundary near Dalecarlia."
      }
    ],
    highlights: [
      "Heavily used paved rail-trail from Georgetown waterfront to Maryland",
      "NPS e-bike access with pedal requirement and 15 mph speed limit",
      "Hub connecting C&O towpath, Rock Creek Trail, and Bethesda corridor",
      "Dalecarlia Reservoir views on the approach to the state line",
      "Montgomery County Class 1-only rules begin at the Maryland border"
    ],
    accessPoints: [
      {
        name: "Georgetown Terminus (Water Street NW)",
        notes: "Primary trailhead; Capital Bikeshare; connections to C&O towpath and Rock Creek Trail."
      },
      {
        name: "Arizona Avenue Connection",
        notes: "Palisades neighborhood access mid-corridor; on-street approach from MacArthur Boulevard area."
      },
      {
        name: "D.C.–Maryland Boundary",
        notes: "Jurisdiction change near Dalecarlia; M-NCPPC Class 1 e-bike rules apply beyond this point."
      }
    ],
    seasonalNotes: "Weekend and rush-hour congestion peak spring through fall. Shaded sections hold winter ice. Fall leaves reduce traction on the Dalecarlia approach. Verify Maryland Class 1 rules before crossing the border.",
  },
  {
    id: "trail-dc-monument-loop",
    slug: "national-mall-connector-routes",
    title: "National Mall Connector Routes",
    description: "Designated National Mall connector routes linking monuments, Ohio Drive, and 15th Street cycle track to Potomac waterfront trails—NPS and DDOT layers.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "washington-dc",
    location: {
      name: "National Mall area",
      coordinates: {
        lat: 38.889,
        lng: -77.023
      }
    },
    stats: {
      distanceMiles: 6,
      difficulty: "easy",
      surface: [
        "paved"
      ],
      estimatedTimeMinutes: 35
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1",
        "class2",
        "class3"
      ],
      notes: "E-bikes are permitted on DC streets and designated bike lanes; dismount in crowded pedestrian zones.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "urban",
      "landmarks"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "ebike-regulations-overview"
    ],
    images: [trailCoverImages["national-mall-connector-routes"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview: Mall to Potomac Connectors",
        paragraphs: [
          "National Mall connector routes are not a single named trail but a network of designated bicycle corridors linking the monument core to Potomac waterfront trails. Typical loops combine Ohio Drive SW and East Potomac Park paths, the Rock Creek and Potomac Parkway multi-use trail, Memorial Bridge approaches, Independence and Constitution avenue bike lanes, and the two-way 15th Street cycle track from Pennsylvania Avenue to the Tidal Basin.",
          "Management spans National Mall and Memorial Parks (NPS), Rock Creek Park (NPS), and DDOT street infrastructure. A complete Georgetown-to-Mount Vernon-style loop uses roughly six miles of these connectors, though distance varies with your chosen landmarks and bridge crossings.",
          "These routes serve tourists, commuters, and recreational riders moving between the Lincoln Memorial, Washington Monument, Tidal Basin, Jefferson Memorial, and bridges to Virginia. Event closures for festivals, marches, and security zones frequently alter available paths—check NPS and DDOT alerts before riding."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access: NPS Memorial Parks and DDOT Bike Lanes",
        paragraphs: [
          "National Mall and Memorial Parks allows e-bikes where traditional bicycles are allowed on paved park roads and multi-use paths, per the park's record of determination. Requirements include operable pedals, a motor under 750 watts, and no motor-only propulsion except where public motor vehicles may drive. Bicycles—and e-bikes—must be walked through memorial interiors including the World War II and FDR memorials.",
          "DDOT protected bike lanes and cycle tracks on D.C. streets—including 15th Street NW, Pennsylvania Avenue, and 20th/21st Street corridors—permit motorized bicycles that meet D.C.'s 20 mph cap on roadway bicycle facilities. Operators must be at least 16. Class 3 e-bikes are not legal motorized bicycles in the District.",
          "DCMR § 18-1201.18 prohibits motorized bicycles on sidewalks and off-street bike paths citywide—a rule that creates complexity because NPS multi-use paths on the Mall are federal lands with separate e-bike authorization. In practice, ride on NPS-designated paved routes and DDOT bike lanes; avoid sidewalks entirely on a motorized bicycle. When in doubt, follow NPS bicycling guidance and walk through crowded memorial zones."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights on Mall Connector Routes",
        paragraphs: [
          "The Lincoln Memorial to Reflecting Pool corridor offers the iconic D.C. riding experience—best enjoyed early morning before tour bus peaks. Ohio Drive loops through East and West Potomac Park with Hains Point circling the airport approach.",
          "The 15th Street cycle track provides a protected north-south link from downtown past the Washington Monument to the Tidal Basin and 14th Street Bridge approaches toward Virginia. Thompson Boat Center near the Kennedy Center rents conventional bikes for visitors.",
          "Memorial Bridge connects to the Mount Vernon Trail in Virginia—a popular extension for e-bike riders who meet both NPS and Virginia policies. Watergate Steps and the Kennedy Center waterfront offer photo stops accessible from the Rock Creek and Potomac Parkway trail."
        ],
        listItems: [
          "Lincoln Memorial, Reflecting Pool, and Washington Monument loop paths",
          "Ohio Drive and Hains Point Potomac waterfront riding",
          "15th Street protected cycle track to the Tidal Basin",
          "Memorial Bridge connection toward the Mount Vernon Trail",
          "Independence and Constitution avenue bike lane corridors"
        ]
      },
      {
        id: "access-parking",
        heading: "Access Points and Parking",
        paragraphs: [
          "Parking garages downtown and near the National Mall fill quickly; Metro remains the most reliable access. Smithsonian, Foggy Bottom, and L'Enfant Plaza stations connect to multiple connector routes.",
          "Ohio Drive has limited parking near the Jefferson Memorial and Hains Point. The Lincoln Memorial circle provides drop-off access but not ideal bike staging. Capital Bikeshare docks cluster around the Mall perimeter—note that shared micromobility fleet bikes are separate from personal e-bike rules.",
          "Thompson Boat Center on Virginia Avenue NW offers riverfront access to the Rock Creek and Potomac Parkway trail. Arlington Memorial Bridge provides the primary Virginia crossing for Mount Vernon Trail connections."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips Through the Monument Core",
        paragraphs: [
          "Dismount or walk through memorial interiors and crowded plaza zones—NPS requires it at several sites. Pedestrian volumes peak 10 a.m. to 4 p.m. daily and swell during cherry blossom season. Use a bell, ride slowly, and accept that some segments are faster walked than ridden.",
          "Security closures for demonstrations, filming, and national events redirect bike traffic without much notice. Have a street-route backup using DDOT bike lanes. The 15th Street cycle track intersects bus platforms and crosswalks—watch for turning vehicles at signalized crossings.",
          "Set your e-bike assist low near monuments. NPS and DDOT both expect reasonable speeds; the federal 15 mph guidance on multi-use paths applies on park paths, while street bike lanes follow D.C.'s 20 mph motorized bicycle cap. Never ride a motorized bicycle on a sidewalk."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Conditions",
        paragraphs: [
          "Cherry blossom season (late March through early April) brings extreme pedestrian congestion around the Tidal Basin—consider avoiding e-bike rides through that zone at midday. Summer heat on exposed Ohio Drive is brutal; carry water.",
          "Fall and winter offer clearer riding conditions with fewer tourists. Inauguration, Fourth of July, and major events trigger security perimeter closures. Ice rarely clears on shaded park paths before street lanes—check conditions after freezes."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Connections",
        paragraphs: [
          "Rock Creek Trail begins near the Lincoln Memorial via the Potomac Parkway path north to Georgetown. The Mount Vernon Trail starts across Memorial Bridge in Virginia. The Anacostia Riverwalk and Metropolitan Branch Trail lie east via DDOT bike lane connections—both permit DDOT-authorized motorized bicycles on trail segments.",
          "Capital Crescent and C&O Canal towpath reach Georgetown west of the Mall. Plan jurisdiction changes carefully: a loop crossing into Virginia invokes Virginia e-bike statutes on the Mount Vernon Trail, while D.C. rules govern the Mall connectors."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on National Mall paths?",
        answer: "Yes on paved park roads and multi-use paths where traditional bicycles are allowed, per National Mall and Memorial Parks policy. Walk your bike through memorial interiors and avoid crowded pedestrian plazas when dismounting is safer."
      },
      {
        question: "Can I ride my e-bike on the 15th Street cycle track?",
        answer: "Yes, if your e-bike qualifies as a D.C. motorized bicycle with operable pedals and a 20 mph motor cap. The cycle track is a DDOT roadway bicycle facility, not a sidewalk."
      },
      {
        question: "Are sidewalks OK for e-bikes near the monuments?",
        answer: "No. DCMR § 18-1201.18 prohibits motorized bicycles on all D.C. sidewalks, even when conventional bikes may use sidewalks outside the Central Business District."
      },
      {
        question: "Can I connect to the Mount Vernon Trail from the Mall?",
        answer: "Yes via Memorial Bridge or the 14th Street Bridge corridor from the Tidal Basin area. Virginia and NPS GWMP e-bike rules apply once you cross into Virginia."
      },
      {
        question: "Is a Class 3 e-bike legal on Mall connector routes?",
        answer: "No. Class 3 e-bikes exceed D.C.'s 20 mph motorized bicycle definition and are not legally recognized as e-bikes in the District."
      }
    ],
    highlights: [
      "Iconic monument loop routes from Lincoln Memorial to the Tidal Basin",
      "15th Street protected cycle track linking downtown to Potomac bridges",
      "Ohio Drive and Hains Point waterfront riding through Potomac Park",
      "NPS e-bike policy on paved Mall paths with walk-through memorial zones",
      "Bridge connections to Mount Vernon Trail and Georgetown waterfront trails"
    ],
    accessPoints: [
      {
        name: "Lincoln Memorial Circle",
        notes: "Central hub for Reflecting Pool, Ohio Drive, and Potomac Parkway trail connections."
      },
      {
        name: "15th Street Cycle Track (Pennsylvania Ave to Ohio Drive)",
        notes: "Protected two-way bike lane past Washington Monument to Tidal Basin; DDOT-managed."
      },
      {
        name: "Ohio Drive SW / East Potomac Park",
        notes: "Waterfront loop and Hains Point access; popular weekend riding with limited parking."
      },
      {
        name: "Arlington Memorial Bridge",
        notes: "Virginia crossing to Mount Vernon Trail; use south side per NPS signage."
      }
    ],
    seasonalNotes: "Cherry blossom season brings extreme Tidal Basin congestion. Major events and security closures frequently block routes. Summer heat on exposed Ohio Drive demands hydration. Verify NPS alerts before planning a monument loop.",
  },
  {
    id: "trail-dc-fort-circle",
    slug: "fort-circle-trail-network",
    title: "Fort Circle Trail Network",
    description: "Fort Circle Civil War fort network in eastern DC—mixed NPS trails with Class 1 e-bikes on select routes through historic earthworks and wooded hills.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "washington-dc",
    location: {
      name: "East of the Anacostia",
      coordinates: {
        lat: 38.862,
        lng: -76.948
      }
    },
    stats: {
      distanceMiles: 7,
      difficulty: "moderate",
      surface: [
        "mixed"
      ],
      estimatedTimeMinutes: 55
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1"
      ],
      notes: "Natural surface trails in NPS-managed forts may restrict throttle-assist e-bikes.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "historic",
      "mixed-surface"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "ebike-regulations-overview"
    ],
    images: [trailCoverImages["fort-circle-trail-network"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview: Civil War Defenses Trail Network",
        paragraphs: [
          "The Fort Circle Trail network links Civil War-era fortifications that once ringed Washington, D.C.—a chain of earthen forts built to defend the capital during the Civil War. Today the Civil War Defenses of Washington sites are managed by National Park Service units including National Capital Parks-East and Rock Creek Park, with trails connecting Fort Stanton, Fort Dupont, Fort Davis, Fort Mahan, and other historic batteries across eastern and southeastern D.C.",
          "The signature route is the seven-mile Fort Circle Parks Hiker-Biker Trail running between Fort Stanton and Fort Mahan through wooded hills east of the Anacostia River. Additional connections reach forts in Rock Creek Park's northern arc. Surfaces range from paved park roads to natural-tread hiking paths and the designated mountain-bike-friendly hiker-biker corridor.",
          "This network offers a different D.C. riding experience—forest canopy, fort earthworks, neighborhood greenways, and skyline glimpses from hilltop batteries—far from the Mall tourist corridors. Total ridable distance depends on which fort sites you link; plan seven to ten miles for a representative loop."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access: Paved Roads, Hiker-Biker Trail, and Natural Surface Limits",
        paragraphs: [
          "NPS policy allows e-bikes where traditional bicycles are allowed, with operable pedals, motors under 750 watts, and no throttle-only riding on trails. D.C. motorized bicycle law applies: 20 mph motor cap, operators 16 and older. Class 3 e-bikes are not legal in the District.",
          "Critical restriction: except for the designated Fort Circle Hiker-Biker Trail between Fort Mahan and Fort Stanton, bicycles are permitted only on paved trails and paved park roads within the Civil War Defenses sites. Natural-surface hiking trails throughout the fort network are closed to bikes—including most e-bikes. The hiker-biker trail is a mixed-tread corridor where mountain bikes are traditionally allowed; e-bike access here aligns with Class 1 pedal-assist models that match hiking-trail etiquette, and throttle operation is prohibited.",
          "National Capital Parks-East manages southeastern fort sites; Rock Creek Park manages northern fort remnants. Each unit's compendium may specify speed limits—typically 15 mph on multi-use trails. Respect earthwork preservation rules: do not ride on fort ramparts or off established treads."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights in the Fort Circle Network",
        paragraphs: [
          "Fort Stanton and Fort Dupont parks anchor the southeastern loop with deep forest, picnic areas, and interpretive signage about the Civil War defense system. Fort Mahan's hilltop position offers neighborhood views across Ward 7.",
          "The hiker-biker trail passes through quiet woodland with stream crossings and bridge structures—recent NPS planning proposes connectivity improvements and bridge replacements across the corridor. Historic earthworks appear through the trees; dismount and walk if a section becomes too narrow or crowded with hikers.",
          "Fort Totten, Fort DeRussy, and northern fort sites near Rock Creek connect to paved park roads and the Rock Creek Trail system for riders who prefer pavement over natural tread."
        ],
        listItems: [
          "Seven-mile Fort Circle Hiker-Biker Trail from Fort Stanton to Fort Mahan",
          "Fort Dupont, Fort Davis, and Fort Stanton parkland in southeast D.C.",
          "Civil War earthworks and interpretive history throughout the network",
          "Wooded hilltop riding with Anacostia neighborhood greenway connections",
          "Paved connections to Fort Totten and Rock Creek Park fort sites"
        ]
      },
      {
        id: "access-parking",
        heading: "Access Points and Parking",
        paragraphs: [
          "Fort Stanton Park offers parking off Erie Street SE with direct trail access. Fort Dupont Park has parking near the activity center off Randle Circle SE. Fort Mahan is accessible from Benning Road SE approaches.",
          "Metro connections include Anacostia, Fort Totten, and Minnesota Avenue stations with on-street or park connections varying by fort site. Driving between forts is often necessary for a full tour unless you commit to the full hiker-biker corridor.",
          "Northern fort sites near Fort Totten connect to the Fort Totten neighborhood via park roads. Verify current NPS maps—trail connectivity improvements may add or close segments during construction."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips on Mixed-Surface Fort Trails",
        paragraphs: [
          "Use tires at least 40 mm wide with moderate tread for the hiker-biker trail; pavement sections suit standard commuter tires. Class 1 pedal-assist is strongly recommended—natural tread sections punish heavy throttle use and annoy hikers.",
          "Yield to hikers always; this corridor is shared with foot traffic and occasional equestrians in connected parkland. Poison ivy and ticks are common off tread—stay on established paths. Do not climb fort earthworks; NPS prohibits riding on historic ramparts.",
          "Navigation is trickier than on signed rail-trails. Download the NPS Civil War Defenses trail guide map before riding. Cell service is generally adequate but carry offline maps. Some neighborhood connector streets lack bike lanes—ride predictably on low-traffic residential roads between fort parks."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Conditions",
        paragraphs: [
          "Spring mud slows the hiker-biker trail after rains; summer overgrowth narrows sight lines. Fall is ideal—dry tread, autumn color, and fewer mosquitoes. Winter rides are peaceful but daylight is short and natural sections may not be cleared of snow.",
          "NPS construction on bridge replacements and connectivity projects may close segments—check National Capital Parks-East project pages. Heat and humidity in July and August are intense on exposed fort hilltops; carry extra water."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Connections",
        paragraphs: [
          "The Anacostia Riverwalk Trail lies west of the fort network—reachable via neighborhood connections through Anacostia Park. DDOT-authorized motorized bicycles are permitted on paved Riverwalk segments.",
          "Rock Creek Trail and the Fort Totten area forts link the northern arc toward Georgetown. For paved-only e-bike riding, stay on park roads and the Rock Creek paved multi-use trail rather than natural-surface fort paths."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on Fort Circle trails?",
        answer: "E-bikes are allowed on paved park roads and paved trails, and on the designated Fort Circle Hiker-Biker Trail between Fort Mahan and Fort Stanton where bikes are permitted. Natural-surface hiking trails are closed to all bikes."
      },
      {
        question: "Why are Class 1 e-bikes recommended here?",
        answer: "Mixed natural tread, hiker sharing, and NPS throttle prohibitions make Class 1 pedal-assist the compliant and courteous choice. Class 3 e-bikes are not legal motorized bicycles in D.C."
      },
      {
        question: "Who manages the Fort Circle trail network?",
        answer: "National Park Service units including National Capital Parks-East (southeastern forts) and Rock Creek Park (northern fort sites) manage the Civil War Defenses of Washington sites."
      },
      {
        question: "Can I ride on fort earthworks?",
        answer: "No. NPS prohibits climbing or riding on historic earthwork structures to prevent erosion and resource damage. Stay on designated trails and paved roads."
      },
      {
        question: "How long is the main hiker-biker trail?",
        answer: "The Fort Circle Parks Hiker-Biker Trail runs approximately seven miles between Fort Stanton and Fort Mahan in southeastern D.C."
      }
    ],
    highlights: [
      "Civil War fort sites linked through eastern D.C. parkland",
      "Seven-mile Fort Circle Hiker-Biker Trail through wooded hills",
      "Class 1 pedal-assist recommended on mixed-tread NPS corridors",
      "Fort Dupont, Fort Stanton, and Fort Mahan historic landscapes",
      "Connections toward Anacostia Riverwalk and Rock Creek paved trails"
    ],
    accessPoints: [
      {
        name: "Fort Stanton Park",
        notes: "Parking off Erie Street SE; southern anchor of the hiker-biker trail."
      },
      {
        name: "Fort Dupont Park",
        notes: "Activity center parking off Randle Circle SE; forested fort site with trail connections."
      },
      {
        name: "Fort Mahan",
        notes: "Northern anchor of the hiker-biker trail; hilltop views from Benning Road SE approaches."
      },
      {
        name: "Fort Totten Area",
        notes: "Northern fort sites with paved park road connections toward Rock Creek Trail."
      }
    ],
    seasonalNotes: "Spring mud and summer overgrowth affect the hiker-biker trail. NPS bridge and connectivity projects may close segments. Ticks and poison ivy active April through October. Fall offers the best mixed-surface conditions.",
  },
];
