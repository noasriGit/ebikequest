import type { Trail } from "@/types/trail";
import { EDITORIAL_DEFAULTS } from "../_shared/defaults";
import { trailCoverImages } from "../images/trail-covers";

export const marylandTrails: Trail[] = [
  {
    id: "trail-md-b-and-a",
    slug: "baltimore-and-ohio-trail",
    title: "B&A Trail",
    description: "Paved 13-mile Anne Arundel rail-trail from Annapolis to Glen Burnie. E-bikes allowed on county trails with a 15 mph speed limit and scenic history stops.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "maryland",
    location: {
      name: "Anne Arundel County",
      coordinates: {
        lat: 39.021,
        lng: -76.502
      }
    },
    stats: {
      distanceMiles: 13,
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
      notes: "E-bikes meeting Maryland statutory definitions are permitted on the B&A Trail.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "rail-trail",
      "paved"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "riding-ebikes-in-maryland"
    ],
    images: [trailCoverImages["baltimore-and-ohio-trail"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "The Baltimore & Annapolis Trail—almost always called the B&A Trail—is a 13.3-mile paved rail-trail managed by Anne Arundel County Recreation and Parks. It follows the former Baltimore & Annapolis Railroad corridor from Dorsey Road in Glen Burnie south to Boulters Way in Annapolis, passing through Severna Park, Arnold, and quiet suburban greenbelts along the way.",
          "The surface is asphalt throughout, with gentle grades typical of a converted railroad bed. Most riders complete an out-and-back day ride or choose a shorter segment centered on the Earleigh Heights Ranger Station, where a restored 1889 railroad depot now serves as a ranger office and small museum. The trail is open dawn to dusk and draws walkers, runners, dog walkers, and cyclists of all ages.",
          "Because the B&A is a county-managed shared-use path rather than a state park rail-trail, it functions as both a recreational destination and a practical connector between Annapolis, Severna Park, and Glen Burnie neighborhoods. Expect steady weekend traffic and commuter use on fair-weather weekdays."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "Anne Arundel County explicitly permits electric bicycles on all paved county park trails, including the full length of the B&A Trail. The county's trail safety and ethics page states that e-bikes may also use authorized natural-surface county trails unless posted otherwise, though the B&A itself is entirely paved.",
          "Under Maryland Transportation Article § 21-1205.2, Class 1, Class 2, and Class 3 e-bikes that meet state equipment and labeling requirements are treated as bicycles on public roads and most bicycle paths unless a local manager prohibits specific classes. Anne Arundel County has aligned its trail policy with the state bicycle definition and does not publish a separate class ban for the B&A.",
          "County trail rules impose a 15 mph speed limit for all wheeled users, including e-bikes—regardless of how fast your motor can assist on the road. Racing, pace lines, and reckless riding are prohibited. Helmets are required for riders and passengers under age 16 under Maryland law (§ 21-1207.1). Always yield to pedestrians, pass on the left with an audible warning, and slow through congested segments near trailheads and playgrounds."
        ],
        listItems: [
          "Allowed: Class 1, Class 2, and Class 3 e-bikes meeting Maryland § 11-117.1 definitions on the paved B&A Trail.",
          "Speed limit: 15 mph maximum on Anne Arundel County trails.",
          "Hours: Dawn to dusk; the trail is closed after dark.",
          "Source: Anne Arundel County Recreation and Parks trail rules; Maryland Transportation Code § 21-1205.2."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights Along the Trail",
        paragraphs: [
          "History buffs will appreciate the Earleigh Heights Ranger Station, a Second Empire-style building that once served as a B&A Railroad depot, general store, and post office. The Hatton-Regester Green in Severna Park offers a gazebo, benches, and horticultural plantings—a popular rest stop for families.",
          "The corridor passes through wooded buffers, neighborhood parks, and occasional glimpses of the Severn River watershed. Bird activity is steady in morning hours, especially near wetland crossings south of Severna Park. The flat profile makes the B&A a reliable introductory long ride for new e-bike owners testing range and assist levels."
        ],
        listItems: [
          "Earleigh Heights Ranger Station and railroad heritage exhibits.",
          "Hatton-Regester Green rest area with gardens and seating.",
          "Flat, fully paved 13.3-mile corridor suitable for all skill levels.",
          "Connections toward Broadneck and Sandy Point area trail projects.",
          "Annapolis and Glen Burnie endpoints for food and supply stops."
        ]
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "The most popular trailhead is Earleigh Heights Ranger Station at 51 West Earleigh Heights Road in Severna Park, which offers on-site parking, restrooms, and direct trail access. Additional parking is available at various cross-street trail access points along the corridor; consult the county trail map before your visit because lot sizes vary.",
          "The northern Glen Burnie endpoint near Dorsey Road and the southern Annapolis access at Boulters Way provide terminus parking, though spaces can fill quickly on weekend mornings. Some neighborhood access points offer only street-side parking—respect residential driveways and posted restrictions."
        ],
        listItems: [
          "Earleigh Heights Ranger Station (51 W Earleigh Heights Rd, Severna Park)—primary parking and restrooms.",
          "Dorsey Road trailhead (Glen Burnie north end).",
          "Boulters Way access (Annapolis south end).",
          "Intermittent neighborhood access points in Severna Park and Arnold."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips",
        paragraphs: [
          "Weekend mornings between 9 a.m. and noon see the heaviest mix of walkers, strollers, and group cyclists. Drop to a lower assist mode and reduce speed before blind curves and at road crossings—the trail intersects numerous neighborhood streets without grade-separated crossings.",
          "An out-and-back from Earleigh Heights to Annapolis and return covers roughly 22–24 miles depending on where you turn around, a comfortable half-day e-bike ride. Carry water in summer; shade is moderate along some segments. Lock your bike at the ranger station if you stop for the museum, and use bike racks rather than leaning bikes against historic structures."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "Spring and fall offer the most pleasant riding temperatures and wildflower displays in county plantings. Summer afternoons bring heat and thunderstorms that arrive quickly; check radar before a long out-and-back. Winter riding is possible when the path is clear of ice, but county maintenance prioritizes snow removal on roadways over trail surfaces—call ahead or inspect conditions after significant snow.",
          "Leaf peepers crowd the trail on peak autumn weekends. If you prefer open sight lines for passing, ride early or on weekday mornings."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "Anne Arundel County continues extending its trail network, including the Broadneck Trail project that will connect toward Sandy Point State Park. Baltimore's Jones Falls Trail and the Northern Central (Torrey C. Brown) Rail Trail in Baltimore County are longer crushed-stone options for riders seeking a different surface.",
          "For e-bike class definitions and Mid-Atlantic trail etiquette, see eBikeQuest guides linked below. Verify Sandy Point State Park access separately if you plan to connect from future Broadneck segments—state park e-bike rules differ from county trail policy."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on the B&A Trail?",
        answer: "Yes. Anne Arundel County Recreation and Parks permits electric bicycles on all paved county park trails, including the B&A Trail, provided riders follow the 15 mph trail speed limit and standard trail etiquette."
      },
      {
        question: "What e-bike classes can I ride on the B&A?",
        answer: "Class 1, Class 2, and Class 3 e-bikes that meet Maryland statutory definitions are generally permitted. The county has not posted a class-specific ban on this trail, though the 15 mph speed limit applies to all users."
      },
      {
        question: "Where is the best place to park?",
        answer: "Earleigh Heights Ranger Station in Severna Park is the primary trailhead with dedicated parking and restrooms. Glen Burnie and Annapolis endpoints also offer access, but lots can fill on busy weekends."
      },
      {
        question: "Is the B&A Trail paved?",
        answer: "Yes. The entire 13.3-mile corridor is paved asphalt on a former railroad grade with gentle slopes."
      },
      {
        question: "What are the trail hours?",
        answer: "Anne Arundel County trails are open dawn to dusk. Riding after dark is prohibited."
      }
    ],
    highlights: [
      "13.3 miles of paved rail-trail from Glen Burnie to Annapolis",
      "Historic Earleigh Heights Ranger Station and railroad museum",
      "Hatton-Regester Green gardens and rest area in Severna Park",
      "Flat profile ideal for family and beginner e-bike rides",
      "E-bikes permitted under Anne Arundel County trail policy"
    ],
    accessPoints: [
      {
        name: "Earleigh Heights Ranger Station",
        notes: "51 W Earleigh Heights Rd, Severna Park. Primary parking, restrooms, and heritage exhibits."
      },
      {
        name: "Dorsey Road Trailhead",
        notes: "Northern Glen Burnie endpoint with trail parking."
      },
      {
        name: "Boulters Way Access",
        notes: "Southern Annapolis endpoint near the city limit."
      }
    ],
    seasonalNotes: "Peak use occurs on weekend mornings spring through fall. Summer heat and afternoon thunderstorms are common; winter ice may linger on shaded sections after storms. Trail open dawn to dusk year-round.",
  },
  {
    id: "trail-md-capital-crescent",
    slug: "capital-crescent-trail",
    title: "Capital Crescent Trail",
    description: "Heavily used paved rail-trail from Bethesda toward Georgetown. Class 1 and 2 e-bikes only on Maryland segments; Class 3 barred on bicycle paths.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "maryland",
    location: {
      name: "Montgomery County",
      coordinates: {
        lat: 38.984,
        lng: -77.094
      }
    },
    stats: {
      distanceMiles: 11,
      difficulty: "easy",
      surface: [
        "paved"
      ],
      estimatedTimeMinutes: 55
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1",
        "class2"
      ],
      notes: "Class 1 and 2 e-bikes are permitted; obey posted speed guidance on crowded segments.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "commuter",
      "paved"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "riding-ebikes-in-maryland"
    ],
    images: [trailCoverImages["capital-crescent-trail"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "The Capital Crescent Trail is one of the busiest shared-use paths in the United States. It follows the abandoned Georgetown Branch of the Baltimore & Ohio Railroad from Silver Spring through Bethesda and Chevy Chase to the District of Columbia line, where it connects to the National Park Service-managed segment into Georgetown.",
          "Montgomery County Parks maintains roughly 7.5 miles of paved trail from Silver Spring through Bethesda to the DC boundary near Little Falls Parkway. The surface is smooth asphalt with a few grade changes, notably the approach to the Dalecarlia Tunnel area and the descent toward the Potomac River. The trail passes through neighborhoods, commercial districts, and wooded buffers along Rock Creek.",
          "Expect a mix of commuters, recreational cyclists, runners, and pedestrians at all hours. The Capital Crescent is a regional spine connecting to the C&O Canal Towpath, Rock Creek Trail, and downtown Washington routes—plan for congestion near Bethesda Row, the Columbia Country Club underpass, and weekend tourist traffic near the DC line."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "On Maryland-managed segments, only Class 1 and Class 2 e-bikes should be used on the Capital Crescent Trail. Maryland Transportation Article § 21-1205.2(a)(2)(ii) prohibits Class 3 e-bikes on bicycle paths unless the path is within or adjacent to a highway right-of-way or the managing agency explicitly allows them. Montgomery Parks has not opened the Capital Crescent to Class 3, and the trail qualifies as a bicycle path for most of its Maryland length.",
          "Montgomery Parks Park Directive MC-21-001 (effective March 25, 2021) authorizes electric bicycles on hard-surface county park trails. The parks department defines an electric bicycle as a pedal-assist device with operable pedals, two or three wheels, and a motor rated at 500 watts or less—a narrower equipment standard than Maryland's 750-watt state definition. Most Class 1 e-bikes sold nationally meet the 500-watt cap; verify your motor label before riding.",
          "Class 2 throttle-assist e-bikes are permitted under Maryland state law on bicycle paths unless locally prohibited, and Montgomery Parks allows e-bikes meeting its park definition on paved trails. Throttle-only riding without pedaling is poor etiquette on crowded segments and is prohibited on the adjacent NPS segment of the Capital Crescent, where the C&O Canal National Historical Park requires pedaling whenever the electric motor is used except where public motor vehicles may drive. Obey reasonable-and-prudent speed limits; Montgomery Parks requires speeds not exceeding posted limits or a safe speed for conditions."
        ],
        listItems: [
          "Maryland segments: Class 1 and Class 2 e-bikes only; Class 3 is prohibited on this bicycle path under state law.",
          "Montgomery Parks equipment cap: 500-watt motor maximum under Park Directive MC-21-001.",
          "NPS DC segment (beyond the state line): e-bikes allowed where bicycles are allowed; 15 mph cap; pedaling required when using the motor.",
          "Sources: Maryland § 21-1205.2; Montgomery Parks Park Directive MC-21-001; NPS C&O Canal e-bike policy."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights Along the Trail",
        paragraphs: [
          "Bethesda Row and the Bethesda Pool area offer dining and repair stops a short detour from the trail. The corridor through Chevy Chase and the Dalecarlia area provides shaded riding and occasional Potomac views as you approach the DC line. The Georgetown Branch heritage is interpretive for railroad history enthusiasts—the corridor carried freight to Georgetown's industrial waterfront until 1985.",
          "Connecting from the Capital Crescent to the C&O Canal Towpath opens long-distance touring options toward Great Falls or downstream toward Washington. The trail's paved surface and predictable grades make it a benchmark test ride for new e-bike owners in the region."
        ],
        listItems: [
          "Bethesda Row dining and shopping near the trail spine",
          "Wooded Rock Creek corridor and Potomac approaches near the DC line",
          "Connection to C&O Canal Towpath for extended rides",
          "Former Georgetown Branch railroad history",
          "Regional commuter link between Silver Spring and Georgetown"
        ]
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Popular Maryland access points include the Bethesda trailhead near Bethesda Avenue, the Silver Spring terminus near Talbot Avenue, and street-side access in Chevy Chase along Little Falls Parkway. Parking is limited near urban trailheads; many riders use Metro (Red Line at Bethesda or Silver Spring) and ride from the station.",
          "Garage parking in downtown Bethesda is available for a fee on weekends. Residential street parking near trail crossings requires attention to posted restrictions and neighborhood permit zones."
        ],
        listItems: [
          "Bethesda Trailhead—near Bethesda Row and Wisconsin Avenue.",
          "Silver Spring terminus—Talbot Avenue area with Metro access.",
          "Little Falls Parkway crossings—multiple Chevy Chase access points.",
          "Lyttonsville Place area—mid-trail neighborhood access."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips",
        paragraphs: [
          "Ride defensively and keep assist low on crowded segments. Announce passes early and wide—many users wear headphones. The Columbia Country Club underpass and several driveway crossings have limited sight lines; slow before entering those zones.",
          "If you ride a Class 2 e-bike, start from stops by pedaling first even when throttle use is legal under Maryland law—it reduces conflict on this high-traffic path. Class 3 owners should not ride the Maryland portion; choose the W&OD Trail or on-road bike lanes for higher-speed assist.",
          "Morning rush (7–9 a.m.) and Saturday mid-mornings see the heaviest volumes. For a quieter experience, try weekday mid-afternoons or early Sunday."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "The paved surface drains well but can accumulate wet leaves in autumn, reducing traction under bridge decks and in shaded cuts. Summer heat and humidity peak in July and August; carry water because long stretches lack fountains.",
          "Winter snow removal varies by segment—Montgomery Parks clears some priority paths after storms, but do not assume the entire Capital Crescent is bare ice-free. Spring cherry blossom season increases tourist traffic near the DC connection."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "Rock Creek Trail, the Sligo Creek Trail, and the Matthew Henson Trail offer additional Montgomery County paved riding with the same Montgomery Parks e-bike directive. Across the DC line, the C&O Canal Towpath and Rock Creek Park multi-use paths extend your route network—verify NPS and DC rules separately because they differ from Maryland park policy.",
          "The Washington & Old Dominion Trail in Virginia is an alternative long paved corridor if Capital Crescent congestion is too heavy for your taste."
        ]
      }
    ],
    faq: [
      {
        question: "Can I ride a Class 3 e-bike on the Capital Crescent Trail in Maryland?",
        answer: "No. Maryland § 21-1205.2 prohibits Class 3 e-bikes on bicycle paths like the Capital Crescent unless the managing agency explicitly allows them. Montgomery Parks has not opened this trail to Class 3."
      },
      {
        question: "Are Class 2 e-bikes allowed on the Maryland portion?",
        answer: "Yes. Class 2 e-bikes meeting Maryland and Montgomery Parks equipment rules may use the paved Maryland segments. The parks department caps motors at 500 watts under Park Directive MC-21-001."
      },
      {
        question: "Who manages the trail?",
        answer: "Montgomery County Parks (M-NCPPC) maintains the Maryland segments. The National Park Service manages the 3.7-mile DC segment from the Maryland line into Georgetown."
      },
      {
        question: "Is there a speed limit?",
        answer: "Montgomery Parks requires e-bike riders to travel no faster than posted trail limits or a reasonable and prudent speed for conditions. The adjacent NPS segment caps all bikes at 15 mph."
      },
      {
        question: "Can I connect to the C&O Canal Towpath?",
        answer: "Yes. The Capital Crescent meets the C&O Canal Towpath near Georgetown (NPS-managed). E-bike rules on the towpath follow NPS and federal policy—pedaling is required when using the motor except where motor vehicles may drive."
      }
    ],
    highlights: [
      "Regional paved commuter spine from Silver Spring to Georgetown",
      "Bethesda Row and Rock Creek corridor scenery",
      "Class 1 and Class 2 e-bikes only on Maryland bicycle-path segments",
      "Connection to C&O Canal Towpath for long-distance touring",
      "Montgomery Parks 500-watt e-bike equipment standard on park trails"
    ],
    accessPoints: [
      {
        name: "Bethesda Trailhead",
        notes: "Near Bethesda Avenue and Wisconsin Avenue; limited parking, Metro Red Line nearby."
      },
      {
        name: "Silver Spring Terminus",
        notes: "Talbot Avenue area with Metro Red Line access at Silver Spring station."
      },
      {
        name: "Little Falls Parkway Access",
        notes: "Multiple Chevy Chase entry points along the parkway corridor."
      }
    ],
    seasonalNotes: "Heavy year-round use peaks on weekday commute hours and weekend mid-mornings. Autumn leaves and winter ice can reduce traction in shaded underpasses. Summer heat warrants extra hydration.",
  },
  {
    id: "trail-md-northeast-branch",
    slug: "northeast-branch-trail",
    title: "Northeast Branch Trail",
    description: "Paved Anacostia Tributary segment in Prince George's County linking neighborhoods to the regional river trail network with PG Parks e-bike rules.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "maryland",
    location: {
      name: "Prince George's County",
      coordinates: {
        lat: 38.963,
        lng: -76.928
      }
    },
    stats: {
      distanceMiles: 7,
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
      notes: "E-bikes allowed on paved Anacostia Tributary trails under Maryland law.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "paved",
      "suburban"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "riding-ebikes-in-maryland"
    ],
    images: [trailCoverImages["northeast-branch-trail"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "The Northeast Branch Trail is a paved segment of the Anacostia Tributary Trail System in Prince George's County, managed by the Maryland-National Capital Park and Planning Commission (M-NCPPC) Department of Parks and Recreation. It follows the Northeast Branch of the Anacostia River through suburban green corridors, connecting communities between Hyattsville, Riverdale Park, and the broader Anacostia River Trail network.",
          "The trail surface is asphalt with gentle grades, designed as a shared-use path for walkers, runners, and cyclists. It links to the Northwest Branch Trail, Indian Creek Trail, and Paint Branch trails, forming a web of tributary routes that eventually connect toward the Anacostia Riverwalk in the District of Columbia—though e-bike rules change at jurisdictional boundaries.",
          "Riders use the Northeast Branch for recreation, school and work commutes, and as a low-stress alternative to Route 1 and Baltimore Avenue corridors. Expect dog walkers, families, and university traffic near College Park and Riverdale Park."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "Prince George's County Parks Park Directive PG-23-01 authorizes electric bicycles on designated hard-surface trails listed in the directive's Exhibit A, including the Northeast Branch Trail. The parks department defines an electric bicycle as a device operated by human power with electric assist, equipped with operable pedals, two or three wheels, and a motor rated at 500 watts or less.",
          "This park definition aligns closely with Class 1 e-bikes and many Class 2 models under Maryland's state three-class system (§ 11-117.1), though the 500-watt cap is stricter than the state's 750-watt maximum. Class 3 e-bikes exceed the parks' wattage standard and are also barred from most Maryland bicycle paths under § 21-1205.2(a)(2)(ii) unless explicitly permitted.",
          "Riders must obey posted trail rules and travel at a reasonable speed for conditions. Note that e-bike policies differ on adjacent NPS-managed Anacostia River Trail segments and on some Prince George's County connector sections—verify signage at the Bladensburg Waterfront and DC boundary before assuming continuous e-bike access across the full regional network."
        ],
        listItems: [
          "Allowed on Northeast Branch per PG Parks Directive PG-23-01 (500-watt, pedal-equipped e-bikes).",
          "Class 3 e-bikes: prohibited on Maryland bicycle paths unless agency opts in; not permitted under PG Parks wattage cap.",
          "Speed: reasonable and prudent; yield to pedestrians and announce passes.",
          "Source: PG Parks Park Directive PG-23-01; Maryland § 21-1205.2."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights Along the Trail",
        paragraphs: [
          "The Northeast Branch corridor offers surprisingly quiet riding for a suburban Washington trail, with riparian buffers along the stream and bridges crossing the waterway at several points. Connections toward Lake Artemesia and the Paint Branch trails expand ride options for half-day loops.",
          "Wildlife viewing—including herons, turtles, and seasonal migratory birds—is common in morning hours. The trail's flat profile suits new e-bike riders testing assist levels before tackling longer regional routes."
        ],
        listItems: [
          "Riparian riding along the Northeast Branch stream valley",
          "Connections to Northwest Branch, Indian Creek, and Paint Branch trails",
          "Link toward Anacostia River Trail and Bladensburg Waterfront",
          "Flat paved surface for commuting and family rides",
          "Lake Artemesia access via connected tributary routes"
        ]
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Access points are distributed along the corridor at road crossings in Hyattsville, Riverdale Park, and adjacent communities. Lake Artemesia Natural Area provides parking and connects to multiple tributary trails, though some Lake Artemesia loop paths restrict e-vehicles—follow posted maps.",
          "Metro access via Prince George's Plaza, College Park-UMD, and Riverdale stations allows bike-plus-transit trips. Secure your e-bike at Metro racks with a quality lock if combining modes."
        ],
        listItems: [
          "Lake Artemesia Natural Area—parking and multi-trail connections (check loop restrictions).",
          "Hyattsville and Riverdale Park road crossings—neighborhood access.",
          "Rhode Island Avenue Trolley Trail junction—regional connector.",
          "College Park area connections near University of Maryland."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips",
        paragraphs: [
          "Plan a loop using the Northwest Branch or Paint Branch trails for a 15–25 mile ride without repeating the same corridor. Drop assist in Eco mode near playgrounds and picnic areas along the stream.",
          "At jurisdictional boundaries toward Bladensburg and the District, stop and read posted e-bike rules—Prince George's County, NPS, and DC policies are not identical. Some Anacostia River Trail segments south of Bladensburg Waterfront have restricted e-bike access.",
          "After rain, underpasses near the stream can hold standing water; bypass or walk through if depth is uncertain to protect your e-bike electronics and bearings.",
          "The Rhode Island Avenue Trolley Trail intersects the tributary network near Hyattsville, offering a historic rail corridor connection for longer loops. Wayfinding signage has improved in recent years, but carry a map on your first visit because trail names change at county and municipal borders."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "Spring pollen and fall leaves can make the paved surface slick under tree canopy. Summer afternoons bring thunderstorms that track the river valleys—check weather before long loops.",
          "Winter maintenance on county tributary trails is less aggressive than on major commuter spines; shaded sections may retain ice after cold snaps."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "The WB&A Rail Trail, Sligo Creek Trail (Montgomery County), and Henson Creek Trail are other PG Parks Directive PG-23-01 trails with similar e-bike rules. For a paved DC connection, research current Anacostia Riverwalk and NPS policies before crossing the District line.",
          "The Indian Head Rail Trail and Mount Vernon Trail are longer alternatives if you prefer a single continuous corridor over a tributary network."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on the Northeast Branch Trail?",
        answer: "Yes. The Northeast Branch Trail is listed in Prince George's County Parks Directive PG-23-01, which permits e-bikes meeting the parks' 500-watt, pedal-equipped definition on designated hard-surface trails."
      },
      {
        question: "Can I ride a Class 3 e-bike on this trail?",
        answer: "Class 3 e-bikes are generally prohibited on Maryland bicycle paths under § 21-1205.2 and exceed the Prince George's County parks 500-watt equipment cap. Use a Class 1 or Class 2 e-bike instead."
      },
      {
        question: "Does this trail connect to the Anacostia Riverwalk in DC?",
        answer: "The tributary system links toward the Anacostia River corridor, but e-bike rules change at NPS and DC boundaries. Verify posted rules before riding into the District."
      },
      {
        question: "What wattage limit applies?",
        answer: "Prince George's County parks cap electric bicycle motors at 500 watts under Park Directive PG-23-01, stricter than Maryland's 750-watt state definition."
      },
      {
        question: "Is the trail paved?",
        answer: "Yes. The Northeast Branch Trail is a paved shared-use path within the Anacostia Tributary Trail System."
      }
    ],
    highlights: [
      "Paved Anacostia Tributary corridor through Prince George's County",
      "Connections to Northwest Branch, Paint Branch, and Lake Artemesia",
      "Authorized e-bike trail under PG Parks Directive PG-23-01",
      "Flat suburban greenway suitable for commuting and recreation",
      "Riparian scenery along the Northeast Branch stream"
    ],
    accessPoints: [
      {
        name: "Lake Artemesia Natural Area",
        notes: "Central hub with parking; verify loop trail e-bike restrictions on posted maps."
      },
      {
        name: "Hyattsville Crossings",
        notes: "Multiple neighborhood access points along the corridor."
      },
      {
        name: "Riverdale Park Access",
        notes: "Road crossing access near commercial and residential areas."
      }
    ],
    seasonalNotes: "Best riding March through November. Stream-adjacent underpasses may flood after heavy rain. Winter ice possible on shaded segments with limited plowing.",
  },
  {
    id: "trail-md-great-allegheny-passage-md",
    slug: "great-allegheny-passage-maryland",
    title: "Great Allegheny Passage (MD Section)",
    description: "Crushed-stone rail-trail through Allegany County from Cumberland toward Pennsylvania—long-distance touring with GAP e-bike equipment rules and 15 mph cap.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "maryland",
    location: {
      name: "Western Maryland",
      coordinates: {
        lat: 39.653,
        lng: -78.762
      }
    },
    stats: {
      distanceMiles: 20,
      difficulty: "moderate",
      surface: [
        "crushed stone"
      ],
      estimatedTimeMinutes: 120
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1",
        "class2",
        "class3"
      ],
      notes: "GAP allows e-bikes meeting Maryland definitions on the Maryland segment.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "long-distance",
      "rail-trail"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "riding-ebikes-in-maryland"
    ],
    images: [trailCoverImages["great-allegheny-passage-maryland"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "The Maryland section of the Great Allegheny Passage (GAP) spans approximately 22 miles from Cumberland to the Pennsylvania state line, managed by Allegany County with support from the Great Allegheny Passage Conservancy. The crushed limestone surface follows the former Western Maryland Railway corridor through the Allegheny Mountains, climbing gradually toward the Eastern Continental Divide.",
          "This segment is part of the 150-mile GAP connecting Cumberland to Pittsburgh, and it links directly to the C&O Canal Towpath for a 335-mile car-free route to Washington, DC. The Maryland portion passes through wooded cuts, open farmland, and small trail towns including Frostburg (via a short on-road connector) and the Big Savage Tunnel area.",
          "The riding surface is firm crushed stone suitable for hybrid, touring, and gravel bikes. Long-distance e-bike tourers use this corridor for multi-day trips, but plan for limited services between Cumberland and Meyersdale, Pennsylvania."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "The Great Allegheny Passage Conservancy publishes e-bike rules aligned with Pennsylvania and Maryland practice: electric bicycles are permitted if the motor is 750 watts or less, the device weighs under 100 pounds, width is no more than 36 inches, and fully operable pedals are present. Internal combustion engines are prohibited.",
          "These equipment standards accommodate Class 1, Class 2, and Class 3 e-bikes under the three-class framework adopted in Maryland law (§ 11-117.1), provided each bike meets the GAP weight and width limits—relevant if you carry heavy panniers or a trailer. Allegany County trail rangers enforce general trail rules including a 15 mph speed limit, dawn-to-dusk access, and helmet requirements for riders under age 16 under Maryland law.",
          "Maryland Transportation Article § 21-1205.2 defaults to allowing e-bikes where bicycles may travel; the GAP adds specific equipment caps beyond state minimums. Stay on the trail tread—adjacent land is mostly private. Pedal through Big Savage Tunnel and respect any temporary closures posted by the conservancy or county."
        ],
        listItems: [
          "Motor: 750 watts maximum; operable pedals required.",
          "Weight: under 100 pounds; width under 36 inches.",
          "Classes: Class 1, 2, and 3 permitted if equipment limits are met.",
          "Speed limit: 15 mph on the GAP; yield to pedestrians and equestrians.",
          "Source: gaptrail.org rules; Allegany County GAP guidelines; Maryland § 21-1205.2."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights Along the Trail",
        paragraphs: [
          "The Big Savage Tunnel near the state line is a 3,300-foot lighted tunnel and a signature GAP experience—it closes seasonally from roughly early December through early April with no easy detour. The Mason-Dixon Line marker at the Pennsylvania border is a popular photo stop.",
          "Cumberland's downtown trailhead connects to the C&O Canal Towpath at the historic Western Maryland Railway Station. Climbing toward the divide offers long mountain views and fall foliage that rivals anywhere in the Mid-Atlantic."
        ],
        listItems: [
          "Big Savage Tunnel (seasonal hours—check before touring)",
          "Eastern Continental Divide crossing toward Pennsylvania",
          "Cumberland trailhead link to C&O Canal Towpath",
          "22-mile Allegany County segment through mountain scenery",
          "Rail-trail Hall of Fame corridor for multi-day touring"
        ]
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Cumberland is the primary Maryland trailhead, with parking near the Western Maryland Railway Station and canal basin. Additional access points exist at smaller road crossings along the corridor; consult the GAP Conservancy map for lot locations at Frostburg connectors and Savage River area.",
          "Overnight tourers can use hiker-biker campsites on the connected C&O Canal Towpath downstream from Cumberland, but verify current NPS camping rules for e-bike travelers separately."
        ],
        listItems: [
          "Cumberland Trailhead—Western Maryland Railway Station area.",
          "Frostburg connectors—short on-road links to the college town.",
          "Savage River / Big Savage Tunnel area access roads.",
          "Mason-Dixon Line parking at the Pennsylvania border."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips",
        paragraphs: [
          "Charge planning matters on multi-day GAP tours. Cumberland, Frostburg, and Meyersdale (just across the state line) offer lodging and restaurants, but stretches between services can exceed 20 miles. Carry a spare battery or plan conservative assist use on long climbs.",
          "Crushed stone is easier with wider tires (40 mm or more). After heavy rain, the surface can soften—reduce speed to avoid rutting. Announce passes clearly because touring cyclists and hikers may not hear you approaching on downhill grades.",
          "Book Big Savage Tunnel dates before scheduling a spring or late-fall through-ride—the tunnel closure blocks the only practical route.",
          "Allegany County Trail Rangers patrol the corridor and can answer questions about closures or special events. Group rides of 15 or more participants require a special-use permit from the county—plan ahead if organizing a club outing."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "Peak touring season runs May through October when the Big Savage Tunnel is open and services are fully staffed. Summer brings humid afternoons in the river valleys; autumn is peak foliage with heavy weekend traffic.",
          "Winter riding is possible on the Allegany County segment when the surface is frozen and bare, but the tunnel closes and some businesses shutter. Spring mud season can soften the limestone tread—local riders often wait for dry conditions."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "The C&O Canal Towpath extends 184.5 miles from Cumberland to Georgetown. Western Maryland Rail Trail and the Torrey C. Brown (Northern Central) Rail Trail are other Maryland rail-trails with different e-bike policies worth checking before routing home.",
          "The Great Allegheny Passage Conservancy publishes trip planning tools, shuttle services, and tunnel schedules at gaptrail.org."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on the GAP in Maryland?",
        answer: "Yes. The Great Allegheny Passage permits e-bikes that meet conservancy equipment rules: 750-watt motor maximum, under 100 pounds, under 36 inches wide, with operable pedals."
      },
      {
        question: "What e-bike classes are permitted?",
        answer: "Class 1, Class 2, and Class 3 e-bikes are allowed if they meet the GAP equipment limits. Internal combustion is prohibited."
      },
      {
        question: "Is the Big Savage Tunnel open year-round?",
        answer: "No. The tunnel typically closes from early December through early April. There is no easy detour during closure—plan accordingly."
      },
      {
        question: "What is the trail surface?",
        answer: "Crushed limestone rail-trail tread, firm and well-maintained in dry conditions. Wider tires improve comfort."
      },
      {
        question: "Can I connect to the C&O Canal Towpath?",
        answer: "Yes. The GAP meets the C&O Canal Towpath in Cumberland, enabling a continuous route toward Washington, DC. NPS e-bike rules apply on the towpath."
      }
    ],
    highlights: [
      "22-mile Allegany County segment of the 150-mile Great Allegheny Passage",
      "Big Savage Tunnel and Eastern Continental Divide scenery",
      "Cumberland connection to the C&O Canal Towpath",
      "E-bikes allowed under GAP 750-watt equipment standards",
      "Long-distance touring corridor through Western Maryland mountains"
    ],
    accessPoints: [
      {
        name: "Cumberland Trailhead",
        notes: "Western Maryland Railway Station area; primary parking and C&O Canal connection."
      },
      {
        name: "Frostburg Connectors",
        notes: "On-road links to Frostburg amenities; consult GAP map for exact routes."
      },
      {
        name: "Big Savage Tunnel Area",
        notes: "Road access near the Pennsylvania state line; tunnel seasonal closure applies."
      }
    ],
    seasonalNotes: "Big Savage Tunnel closed roughly December–April. Peak season May–October. Spring mud and winter ice can affect crushed-stone traction. Dawn-to-dusk trail access in Allegany County.",
  },
  {
    id: "trail-md-patapsco",
    slug: "patapsco-valley-state-park-trails",
    title: "Patapsco Valley State Park Trails",
    description: "Expansive DNR trail network near Baltimore with mixed surfaces. Class 1 e-bikes on select multi-use trails; natural singletrack may prohibit all e-bikes.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "maryland",
    location: {
      name: "Ellicott City area",
      coordinates: {
        lat: 39.312,
        lng: -76.754
      }
    },
    stats: {
      distanceMiles: 15,
      elevationFeet: 800,
      difficulty: "moderate",
      surface: [
        "mixed"
      ],
      estimatedTimeMinutes: 90
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1"
      ],
      notes: "Class 1 e-bikes may be allowed on select multi-use trails; natural surface trails may prohibit all e-bikes.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "state-park",
      "mixed-surface"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "riding-ebikes-in-maryland"
    ],
    images: [trailCoverImages["patapsco-valley-state-park-trails"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "Patapsco Valley State Park protects 16,000 acres along the Patapsco River west of Baltimore, with trailheads spanning Ellicott City, Catonsville, and Howard County borders. The park is divided into developed areas—Avalon, Orange Grove, Hollofield, Pickall, Hilton, McKeldin, and Daniels—each offering a different trail character from riverside paths to rugged forest singletrack.",
          "Trails range from wide multi-use paths and fire roads to technical mountain-bike singletrack with roots, rock gardens, and steep climbs. The park is one of Maryland's most popular outdoor destinations, drawing hikers, trail runners, equestrians in permitted areas, and mountain bikers on weekends year-round.",
          "E-bike access is not uniform across the network. Maryland Department of Natural Resources (DNR) expanded Class 1 e-bike access to select natural-surface trails where traditional bicycles are allowed, but many trails remain off limits to any motorized bicycle. Read trailhead signage in the specific area you plan to visit."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "DNR's Bike and E-bike Regulation FAQ states that Class 1 electric bicycles—pedal-assist only, assisting up to 20 mph—are now permitted on select natural-surface trails on DNR lands where conventional bicycles are allowed, unless posted otherwise at trailheads or on the department website. Before this change, e-bikes were limited largely to the Torrey C. Brown and Western Maryland rail trails plus roads and parking areas.",
          "Class 2 throttle-assist and Class 3 speed pedelec e-bikes face tighter restrictions on DNR natural-surface trails. DNR's proposed and adopted framework emphasizes pedal-assist Class 1 devices on singletrack; Class 2 is generally limited to adaptive mobility uses on trails where DNR allows exceptions, and Class 3 remains barred from most bicycle paths under Maryland § 21-1205.2.",
          "Any trail where e-bikes remain prohibited will be marked at the trailhead, on bulletin boards, or on DNR's website. When in doubt, contact the park office before riding an e-bike into Avalon or McKeldin singletrack. Posted speed limits for bicycles and e-bikes apply in developed areas. Helmets are required for riders under 16."
        ],
        listItems: [
          "Default on DNR natural-surface trails: Class 1 e-bikes where traditional bikes are allowed, unless posted closed.",
          "Class 2 and Class 3: restricted on most singletrack; verify current DNR postings.",
          "Prohibited: any trail posted no e-bikes at trailhead or on DNR trail listings.",
          "Source: dnr.maryland.gov Bike and E-bike Regulation FAQ; Maryland § 21-1205.2."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights Along the Trail",
        paragraphs: [
          "The Avalon area features the iconic Swinging Bridge over the Patapsco River, cascading falls at the Lost Lake area, and historic ruins of the Avalon Nail and Iron Works. McKeldin offers more remote, rugged terrain popular with mountain bikers, including Maryland's first adaptive mountain-bike trail improvements on select routes.",
          "Hollofield Overlook provides panoramic valley views accessible via park roads and nearby trails. The Grist Mill Trail in the Avalon area is a relatively gentle riverside route, while McKeldin and Hilton trails demand more skill and fitness even with e-bike assist."
        ],
        listItems: [
          "Avalon Swinging Bridge and Patapsco River gorge",
          "Lost Lake and historic mill ruins in Avalon",
          "McKeldin rugged forest trails and adaptive MTB improvements",
          "Hollofield scenic overlook of the Patapsco Valley",
          "Multi-area network spanning Baltimore and Howard counties"
        ]
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Major trailheads include Avalon (5970 Baltimore National Pike, Ellicott City), Hollofield (8020 Baltimore National Pike), McKeldin (11601 Marriottsville Road), Hilton (1101 Hilton Avenue, Catonsville), and Pickall (6951 Oakland Road). Maryland State Park Service charges a day-use entrance fee per vehicle; annual passes are available.",
          "Parking lots fill early on fair-weather weekends. Arrive before 9 a.m. or visit McKeldin and Hilton areas for relatively lighter congestion compared with Avalon."
        ],
        listItems: [
          "Avalon Area—5970 Baltimore National Pike, Ellicott City.",
          "Hollofield Area—8020 Baltimore National Pike, Ellicott City.",
          "McKeldin Area—11601 Marriottsville Road, Marriottsville.",
          "Hilton Area—1101 Hilton Avenue, Catonsville.",
          "Pickall Area—6951 Oakland Road, Baltimore."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips",
        paragraphs: [
          "Use Class 1 pedal-assist in low to mid modes on shared singletrack—motor torque can accelerate erosion on wet trails. Stay off closed or e-bike-prohibited routes; rangers enforce resource protection rules.",
          "The park mixes foot traffic, dogs, and children near Avalon falls on summer days. Dismount or walk crowded boardwalks and bridge approaches. After rain, avoid riding soft trails even if e-bikes are permitted—the issue is trail damage, not legality.",
          "McKeldin trails are remote; carry a repair kit and phone. Cell service is spotty in river valleys.",
          "Orange Grove and Daniels areas offer additional access to riverside terrain with different e-bike postings than Avalon—never assume one area's rules apply park-wide. The park's online trail map color-codes hiking-only versus multi-use routes."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "Summer weekends are crowded at Avalon and the Swinging Bridge. Fall foliage peaks in mid-October along the river gorge. Spring brings mud season—DNR and volunteer groups may close soft trails temporarily.",
          "Winter hiking traffic continues on popular paths; icy rocks near the river are hazardous. Some auxiliary park roads close seasonally—check DNR alerts."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "The Torrey C. Brown (Northern Central) Rail Trail and B&A Trail offer paved and crushed-stone alternatives when Patapsco singletrack is too crowded or muddy. Baltimore City's Gwynns Falls Trail provides urban connectivity.",
          "Friends of Patapsco Valley State Park and DNR publish trail condition updates and volunteer stewardship opportunities."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed in Patapsco Valley State Park?",
        answer: "Class 1 e-bikes are permitted on select DNR natural-surface trails where traditional bicycles are allowed, unless a specific trail is posted closed to e-bikes. Policies vary by trail—always check trailhead signage."
      },
      {
        question: "Can I ride a Class 2 or Class 3 e-bike on park trails?",
        answer: "Class 2 and Class 3 e-bikes face significant restrictions on DNR natural-surface trails and Maryland bicycle paths. Patapsco riders should default to Class 1 pedal-assist and verify postings."
      },
      {
        question: "Which park area is best for e-bikes?",
        answer: "Gentler multi-use routes in Avalon and fire-road loops in McKeldin suit e-bikes better than technical singletrack in wet conditions. Confirm e-bike access at each trailhead before riding."
      },
      {
        question: "Is there an entrance fee?",
        answer: "Yes. Patapsco Valley State Park charges a day-use service charge per vehicle. Maryland State Park annual passes are accepted."
      },
      {
        question: "Where do I find current e-bike trail closures?",
        answer: "Check trailhead posts, DNR bulletin boards, and the Maryland DNR Bike and E-bike Regulation FAQ page. Contact the park office if signage is unclear."
      }
    ],
    highlights: [
      "16,000-acre river valley park with seven developed areas",
      "Avalon Swinging Bridge and historic mill ruins",
      "Class 1 e-bikes on select DNR natural-surface trails",
      "McKeldin adaptive mountain-bike trail improvements",
      "Mixed terrain from riverside paths to technical singletrack"
    ],
    accessPoints: [
      {
        name: "Avalon Area",
        notes: "5970 Baltimore National Pike, Ellicott City. Popular river gorge access; fills early on weekends."
      },
      {
        name: "McKeldin Area",
        notes: "11601 Marriottsville Road, Marriottsville. Rugged forest trails; more remote."
      },
      {
        name: "Hollofield Area",
        notes: "8020 Baltimore National Pike. Scenic overlook and trail network access."
      }
    ],
    seasonalNotes: "Avoid wet singletrack during mud season (late winter–spring). Avalon crowds peak on summer weekends. Fall foliage mid-October; icy river rocks in winter.",
  },
  {
    id: "trail-md-northern-central",
    slug: "northern-central-trail",
    title: "Northern Central Trail",
    description: "DNR's 20-mile Torrey C. Brown crushed-stone rail-trail from Cockeysville to Pennsylvania—pedal-assist e-bikes permitted under Maryland DNR trail policy.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "maryland",
    location: {
      name: "Baltimore County",
      coordinates: {
        lat: 39.481,
        lng: -76.631
      }
    },
    stats: {
      distanceMiles: 20,
      difficulty: "easy",
      surface: [
        "crushed stone"
      ],
      estimatedTimeMinutes: 100
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1",
        "class2",
        "class3"
      ],
      notes: "E-bikes permitted on the NCR Trail under Maryland e-bike law.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "rail-trail"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "riding-ebikes-in-maryland"
    ],
    images: [trailCoverImages["northern-central-trail"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "The Northern Central Trail—officially the Torrey C. Brown Rail Trail since 2018— is a 20-mile crushed-stone rail-trail managed by Maryland Department of Natural Resources through Baltimore County. It follows the former Northern Central Railway from Ashland near Cockeysville north to the Pennsylvania state line, continuing into York County as the Heritage Rail Trail County Park.",
          "The surface is compacted limestone dust, firm enough for hybrid and touring bikes in dry weather but softer after heavy rain. The corridor passes through historic communities including Phoenix, Monkton, White Hall, and Freeland, with long wooded cuts, stream crossings, and occasional farm views.",
          "The trail is a Rail-Trail Hall of Fame inductee and part of the proposed Grand History Trail linking Washington, Baltimore, and York. It serves roughly 400,000 users annually—expect equestrians on permitted sections, hikers, and touring cyclists in addition to local riders."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "The Torrey C. Brown Rail Trail was one of the first Maryland state trails to allow e-bikes. DNR permits Class 1 and Class 3 pedal-assist e-bikes on the trail under its e-bike regulation framework. Both classes require the rider to pedal for motor assistance; Class 3 bikes assist up to 28 mph on roads but riders must obey trail speed limits in practice.",
          "Class 2 throttle-assist e-bikes are not permitted on the Torrey C. Brown Trail except when the device qualifies as an adaptive bicycle for a rider with a disability, per DNR's distinction between pedal-assist and throttle-dominant devices. This aligns with DNR's emphasis on pedal-assist access on state rail-trails.",
          "Maryland Transportation Article § 21-1205.2 treats compliant e-bikes as bicycles on most paths, but DNR land managers can designate restrictions. On the NCR, yield to horses—slow or stop when passing equestrians and avoid sudden motor engagement near horses. Helmets required for riders under 16."
        ],
        listItems: [
          "Allowed: Class 1 and Class 3 pedal-assist e-bikes per DNR policy.",
          "Restricted: Class 2 throttle e-bikes except adaptive mobility devices.",
          "Surface: crushed stone—750-watt state maximum applies; use reasonable trail speeds.",
          "Source: dnr.maryland.gov Bike and E-bike Regulation FAQ; Maryland § 21-1205.2."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights Along the Trail",
        paragraphs: [
          "The restored Monkton train station serves as a popular trailhead with a café nearby on weekends. The Blue Mount Station area and White Hall offer rural scenery and parking. Crossing into Pennsylvania connects to York's Heritage Rail Trail for a 44-mile combined corridor.",
          "Fall foliage along the Gunpowder River tributaries and spring wildflowers in cuttings make this trail a scenic alternative to paved urban paths. The gentle 1–2% grade northbound suits long-distance e-bike touring with conservative assist."
        ],
        listItems: [
          "Monkton Station trailhead and café stop",
          "20-mile Maryland corridor through Baltimore County countryside",
          "Connection to Pennsylvania Heritage Rail Trail at the state line",
          "Rail-Trail Hall of Fame route with equestrian sharing on sections",
          "Part of the proposed Grand History Trail network"
        ]
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Primary trailheads include Ashland (Paper Mill Road area near Cockeysville), Phoenix, Monkton, White Hall, and Freeland. Monkton fills quickly on autumn weekends; Freeland and northern lots offer more space.",
          "A Maryland State Park day-use fee may apply at certain trailheads—verify current fee stations and annual pass acceptance on DNR's website."
        ],
        listItems: [
          "Ashland Trailhead—southern end near Cockeysville.",
          "Monkton Station—central access with amenities.",
          "White Hall and Freeland—northern Baltimore County access.",
          "Pennsylvania state line—connection to Heritage Rail Trail."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips",
        paragraphs: [
          "Wider tires (38 mm+) improve comfort on limestone dust. After rain, avoid riding through deep soft spots that rut the tread. When passing horses, stop and ask riders whether to proceed or wait—they may spook at silent e-bike approaches.",
          "An out-and-back from Monkton to the state line and return is roughly 30 miles—a solid e-bike workout. Water is limited on trail; stock up in Monkton or White Hall.",
          "Class 2 riders should choose the B&A Trail or Indian Head Rail Trail instead unless using an adaptive device.",
          "The Gunpowder Falls State Park boundary lies near the southern trailhead—some riders combine a NCR ride with short road connectors to Loch Raven Reservoir viewpoints. Railroad history interpretive signs at Monkton explain the 1972 Tropical Storm Agnes damage that ended freight service on the Northern Central line.",
          "If you continue into Pennsylvania, York County maintains the Heritage Rail Trail with compatible crushed-stone tread. Carry identification and note that trail rangers in both states enforce dawn-to-dusk access and alcohol prohibitions on the corridor.",
          "DNR renamed the trail for Secretary Torrey C. Brown in 2018 to honor his role opening Maryland's first rail-trail in 1984. The corridor remains one of the busiest e-bike-friendly crushed-stone routes in the Baltimore metro area."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "The trail is open year-round, but spring thaws soften the surface. Summer shade keeps the corridor cooler than open paved trails. Peak leaf season in October draws heavy parking demand at Monkton.",
          "Winter riding is popular when the stone surface freezes hard; fresh snow may make the trail impassable for skinny tires."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "The B&A Trail (paved, Anne Arundel County) and Jones Falls Trail offer complementary surfaces near Baltimore. The Western Maryland Rail Trail allows Class 1 e-bikes on a paved parallel corridor near the C&O Canal.",
          "DNR and the Rails-to-Trails Conservancy publish maps for the Torrey C. Brown and Heritage Rail Trail connection."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on the Northern Central (Torrey C. Brown) Trail?",
        answer: "Yes. DNR permits Class 1 and Class 3 pedal-assist e-bikes on the Torrey C. Brown Rail Trail. Class 2 throttle e-bikes are not permitted except as adaptive mobility devices."
      },
      {
        question: "What is the trail surface?",
        answer: "Compacted crushed limestone—a firm rail-trail tread in dry weather that can soften after heavy rain."
      },
      {
        question: "Can I ride into Pennsylvania?",
        answer: "Yes. The trail continues as York County's Heritage Rail Trail at the state line. Verify Pennsylvania local rules if continuing far into York."
      },
      {
        question: "Are horses allowed on the trail?",
        answer: "Equestrians use permitted sections of the corridor. Cyclists and e-bike riders must yield and exercise caution when passing horses."
      },
      {
        question: "Is the trail the same as the Torrey C. Brown Rail Trail?",
        answer: "Yes. Maryland renamed the Northern Central Trail in honor of former DNR Secretary Torrey C. Brown in 2018."
      }
    ],
    highlights: [
      "20-mile crushed-stone rail-trail through Baltimore County",
      "Class 1 and Class 3 pedal-assist e-bikes allowed by DNR",
      "Monkton Station trailhead and rural scenery",
      "Connection to Pennsylvania Heritage Rail Trail",
      "Rail-Trail Hall of Fame inductee"
    ],
    accessPoints: [
      {
        name: "Monkton Station",
        notes: "Central trailhead with parking; popular weekend access."
      },
      {
        name: "Ashland Trailhead",
        notes: "Southern end near Cockeysville and Paper Mill Road."
      },
      {
        name: "Freeland / State Line",
        notes: "Northern access toward the Pennsylvania border."
      }
    ],
    seasonalNotes: "Open year-round; spring mud softens the limestone tread. Peak foliage weekends fill Monkton parking. Winter riding best when surface is frozen hard.",
  },
  {
    id: "trail-md-indian-head",
    slug: "indian-head-rail-trail",
    title: "Indian Head Rail Trail",
    description: "Flat 13-mile paved Charles County rail-trail through Mattawoman Creek forests—from White Plains to Indian Head with minimal road crossings.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "maryland",
    location: {
      name: "Charles County",
      coordinates: {
        lat: 38.597,
        lng: -77.162
      }
    },
    stats: {
      distanceMiles: 13,
      difficulty: "easy",
      surface: [
        "paved"
      ],
      estimatedTimeMinutes: 65
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1",
        "class2",
        "class3"
      ],
      notes: "All classes of road-legal Maryland e-bikes are permitted.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "paved",
      "family-friendly"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "riding-ebikes-in-maryland"
    ],
    images: [trailCoverImages["indian-head-rail-trail"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "The Indian Head Rail Trail (IHRT) is a 13-mile paved trail crossing Charles County from Theodore Green Boulevard in White Plains to the Town of Indian Head on the Potomac River. Charles County Recreation, Parks, and Tourism maintains the corridor, which was donated through the National Park Service Federal Lands to Parks Program and built on a 1918 railroad supplying the Navy's Indian Head Powder Factory.",
          "The trail is elevated on a former rail bed above the Mattawoman Creek stream valley, passing through mature forest, wetlands, and occasional farmland with minimal road crossings. The surface is asphalt with gentle grades—one of the flattest long paved trails in Southern Maryland.",
          "The IHRT attracts cyclists, hikers, birders, and nature enthusiasts seeking a quiet ride through largely undeveloped landscapes. Portable restrooms are placed at several points along the corridor; Mattingly Park in Indian Head offers a permanent ADA restroom."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "Charles County park rules prohibit motorized vehicles on the trail except electric wheelchairs for mobility-impaired users. However, Maryland state law defines compliant electric bicycles as bicycles—not motor vehicles—for purposes of trail access on public bicycle paths under Transportation Article § 21-1205.2.",
          "In practice, Class 1, Class 2, and Class 3 e-bikes meeting Maryland § 11-117.1 equipment and labeling requirements are treated as bicycles on shared-use paths unless Charles County posts a specific prohibition. The county has not published a class ban for the IHRT, and regional trail guides document Class 1 and Class 2 use on the corridor.",
          "Ride courteously: the trail is popular with birders and families. Maintain reasonable speeds, announce passes, and respect dawn-to-dusk hours. Helmets are required for riders under 16 under Maryland law."
        ],
        listItems: [
          "State law: Class 1, 2, and 3 e-bikes treated as bicycles on bicycle paths unless locally prohibited.",
          "County rule: motorized vehicles banned except electric wheelchairs—statutory e-bikes are not motor vehicles under MD law.",
          "Hours: dawn to dusk; no night riding.",
          "Source: Charles County facility rules; Maryland § 21-1205.2 and § 11-117.1."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights Along the Trail",
        paragraphs: [
          "The Mattawoman Creek valley supports significant biodiversity—herons, beaver, and forest interior birds are commonly reported by the Maryland Birders Guide. The elevated rail bed provides canopy views rare in flat Southern Maryland.",
          "Indian Head offers Potomac River access at Mattingly Avenue and Slavin's Dock, with views of the creek mouth. The western forest segments feel remote despite proximity to Route 301."
        ],
        listItems: [
          "13 miles of paved rail-trail through Mattawoman Creek forests",
          "Minimal road crossings on an elevated rail bed",
          "Birding and wildlife viewing opportunities",
          "Indian Head Potomac River access at Mattingly Park",
          "Flat profile ideal for beginner and adaptive cyclists"
        ]
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Primary parking is at 10390 Theodore Green Boulevard in White Plains, with weekend overflow at the Charles County Health Department lot near Route 301. Indian Head access is available near Indian Head Elementary School and Mattingly Avenue, though downtown Indian Head has limited dedicated trail parking.",
          "Mattingly Park provides ADA-accessible restrooms and creek views—a good turnaround point for an eastern out-and-back from White Plains."
        ],
        listItems: [
          "Theodore Green Boulevard Trailhead—10390 Theodore Green Blvd, White Plains.",
          "Health Department overflow—weekends only near Route 301 intersection.",
          "Indian Head Elementary School area—western trail access.",
          "Mattingly Park—Indian Head; restrooms and Mattawoman Creek views."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips",
        paragraphs: [
          "A full out-and-back from White Plains to Indian Head covers 26 miles—confirm your battery range before starting. There are few services along the trail; pack snacks and water.",
          "Weekend mornings bring birding groups and families; use a bell and slow near portable restroom areas and bench clusters. The trail is wheelchair-accessible throughout—give non-motorized adaptive users extra space.",
          "Summer humidity and mosquitoes peak near wetlands; ride early for comfort.",
          "The trail's Federal Lands to Parks origin means much of the corridor remains undeveloped buffer—respect private property boundaries at farm crossings. Charles County periodically hosts community rides and nature programs starting from the Theodore Green trailhead; check the parks calendar if you prefer quieter weekdays.",
          "Battery range is rarely an issue on this flat corridor, but the remote forest sections between access points can exceed five miles without services. A basic tool kit and spare tube are worthwhile even on paved trails because glass and thorns appear near road crossings.",
          "The Navy's Indian Head facility remains an active installation south of town—stay on the public trail corridor and respect any temporary security-related detours posted by the county."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "Spring migration season attracts birders—expect stops and photography along the route. Fall is peak foliage in the creek valley. Winter riding is pleasant on mild days when the asphalt is clear.",
          "After heavy rain, low spots near wetland crossings may hold water across the path—proceed slowly to protect your e-bike's bottom bracket and motor."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "The WB&A Rail Trail in Prince George's County and the Mount Vernon Trail across the Potomac in Virginia offer additional paved riding. Charles County's Three Notch Trail is another rail-trail project expanding Southern Maryland connectivity.",
          "Explore Charles County tourism and the Maryland Birders Guide publish IHRT maps and access details."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on the Indian Head Rail Trail?",
        answer: "Yes. E-bikes meeting Maryland statutory definitions are treated as bicycles on public paths under § 21-1205.2. Charles County prohibits motorized vehicles but not state-defined electric bicycles."
      },
      {
        question: "What e-bike classes are permitted?",
        answer: "Class 1, Class 2, and Class 3 e-bikes complying with Maryland equipment rules are generally permitted unless the county posts otherwise."
      },
      {
        question: "How long is the trail?",
        answer: "The IHRT is 13 miles one way from White Plains to Indian Head on paved asphalt."
      },
      {
        question: "Where should I park?",
        answer: "The main trailhead is at 10390 Theodore Green Boulevard in White Plains. Weekend overflow parking is available at the Charles County Health Department near Route 301."
      },
      {
        question: "What are the trail hours?",
        answer: "The trail is open dawn to dusk. Being on the trail after dark is prohibited."
      }
    ],
    highlights: [
      "13-mile paved trail through Mattawoman Creek valley forests",
      "Flat rail-trail profile from White Plains to Indian Head",
      "E-bikes permitted under Maryland bicycle path law",
      "Birding and wildlife viewing along elevated corridor",
      "Mattingly Park Potomac and creek access at the west end"
    ],
    accessPoints: [
      {
        name: "Theodore Green Boulevard Trailhead",
        notes: "10390 Theodore Green Blvd, White Plains. Primary parking and southern access."
      },
      {
        name: "Mattingly Park",
        notes: "Indian Head western end; ADA restrooms and Mattawoman Creek views."
      },
      {
        name: "Indian Head Elementary School Area",
        notes: "Neighborhood access to the western trail segment."
      }
    ],
    seasonalNotes: "Spring bird migration brings extra foot traffic. Summer humidity and mosquitoes peak near wetlands—ride early. Dawn-to-dusk access year-round.",
  },
  {
    id: "trail-md-assateague",
    slug: "assateague-island-trails",
    title: "Assateague Island Trails",
    description: "Coastal NPS riding on Bayberry Drive's paved bike path in Maryland—e-bikes allowed where bicycles are; nature trails and beaches remain off limits.",
    ...EDITORIAL_DEFAULTS,
    updatedAt: "2026-06-18",
    jurisdiction: "maryland",
    location: {
      name: "Assateague Island",
      coordinates: {
        lat: 38.089,
        lng: -75.207
      }
    },
    stats: {
      distanceMiles: 4,
      difficulty: "easy",
      surface: [
        "paved",
        "sand"
      ],
      estimatedTimeMinutes: 30
    },
    ebikePolicy: {
      allowed: true,
      classesAllowed: [
        "class1"
      ],
      notes: "E-bike access limited to designated routes; wildlife management areas may restrict motorized bicycles.",
      lastVerified: "2026-06-18"
    },
    tags: [
      "coastal",
      "national-seashore"
    ],
    relatedGuideSlugs: [
      "ebike-classes-explained",
      "mid-atlantic-trail-etiquette",
      "riding-ebikes-in-maryland"
    ],
    images: [trailCoverImages["assateague-island-trails"]],
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "Assateague Island National Seashore spans a barrier island on Maryland's Atlantic coast, famous for wild horses, surf fishing, and coastal marshes. Bicycling in the Maryland district is concentrated on paved park roads and the designated bike path paralleling Bayberry Drive—not on the sandy nature loops described in park brochures.",
          "Cyclists reach the island via the Verrazano Bridge from the mainland, with a paved bike-pedestrian path crossing the bridge and continuing along Bayberry Drive through roughly four miles of island habitat. The park also lists Virginia district trails (Wildlife Loop, Woodland Trail, etc.), but this article focuses on Maryland district access where the Seashore's 2026 Superintendent's Compendium governs.",
          "Terrain is flat and exposed—expect wind, sun, and seasonal insects. The paved path is family-friendly, but it is not a rail-trail; it functions as a parallel route where bicycles are required to use the bike path instead of the motor roadway when the path is available."
        ]
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "Assateague Island National Seashore's Superintendent's Compendium allows e-bikes wherever traditional bicycles are allowed, and prohibits them wherever bicycles are prohibited. In the Maryland district, bicycle use is permitted only on paved public roadways and alongside those roadways on paved designated bicycle paths—when a bike path exists along Bayberry Drive, cyclists may not ride on the adjacent motor roadway.",
          "Bicycles and e-bikes are prohibited on boardwalks, pedestrian nature trails, and beaches. That means the Wildlife Loop, Woodland Trail, Swan Cove Trail, and similar foot paths are off limits to e-bikes even though they appear on park trail maps for hikers. E-bikes must have operable pedals and a motor under 750 watts per NPS definition.",
          "Using the electric motor to propel an e-bike without pedaling is prohibited except where public motor vehicle use is allowed—effectively requiring pedaling on the bike path. Maryland state law is adopted in the compendium for violations. Class 1 and Class 2 e-bikes clearly fit the NPS definition; Class 3 may be restricted on paths under Maryland § 21-1205.2—default to Class 1 or Class 2 on the Bayberry bike path."
        ],
        listItems: [
          "Allowed: paved Bayberry Drive bike path and designated paved routes where bicycles are permitted.",
          "Prohibited: nature trails, boardwalks, beaches, and unpaved service roads unless posted open to bikes.",
          "Pedaling required when using motor assist except where motor vehicles may drive.",
          "Source: NPS Assateague Island Superintendent's Compendium § 4.30(i)(1); nps.gov/asis."
        ]
      },
      {
        id: "highlights",
        heading: "Highlights Along the Route",
        paragraphs: [
          "Wild horse viewing from the paved corridor is a signature Assateague experience—maintain safe distance and never feed horses. Coastal marsh views along Bayberry Drive offer birding opportunities for egrets, osprey, and seasonal shorebirds.",
          "The visitor center near the Maryland district entrance provides orientation, and cyclists can combine a ride with beach access at designated parking areas on foot. Assateague Outfitters rents conventional bikes seasonally if you are visiting without your e-bike."
        ],
        listItems: [
          "Wild horse viewing from paved park routes",
          "Coastal marsh and barrier-island scenery",
          "Verrazano Bridge bike-pedestrian crossing access",
          "Connection to ocean beach areas via designated parking",
          "Flat paved riding suitable for casual e-bike outings"
        ]
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Park at the Verrazano visitor area on the mainland or at Assateague Island lots after crossing the bridge. A hiker-cyclist lot on the southwest side of the bridge offers access for non-motorized visitors.",
          "Entrance fees apply per vehicle or America the Beautiful pass. Summer weekends fill early—arrive before 9 a.m. or visit shoulder season for easier parking."
        ],
        listItems: [
          "Verrazano Bridge mainland side—visitor center and bridge crossing.",
          "Bayberry Drive paved bike path—primary Maryland district riding corridor.",
          "Assateague Island visitor parking—access to beaches on foot after locking bikes.",
          "Bicycle-pedestrian lot southwest of the bridge."
        ]
      },
      {
        id: "riding-tips",
        heading: "Riding Tips",
        paragraphs: [
          "Salt air and sand accelerate corrosion—rinse your e-bike after coastal rides and check connector points monthly. Strong crosswinds on the bridge and open causeway sections can push lightweight e-bikes; drop assist and grip firmly.",
          "Do not ride e-bikes on nature trails even if they look tempting—the compendium prohibition protects wildlife and pedestrians in confined boardwalk spaces. Lock your bike at racks and walk to beaches.",
          "Bug spray is essential June through September. Afternoon thunderstorms build quickly over the marsh.",
          "Park speed limits on Bayberry Drive were revised in recent compendium updates—observe posted limits for both safety and resource protection near horse herds. Rental bikes from Assateague Outfitters are conventional pedal bikes; e-bike visitors should bring their own compliant equipment."
        ]
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "Peak season Memorial Day through Labor Day brings heavy traffic and horsefly season. Spring and fall offer milder weather and fewer crowds. Some OSV (over-sand vehicle) zones and beach access rules change seasonally—check NPS alerts.",
          "Winter riding is solitude-rich but cold and windy; visitor services reduce hours. Hurricane closures can affect bridge access—monitor NPS condition updates."
        ]
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "Mainland Worcester County roads connect to Ocean City and other coastal routes, but on-road riding requires sharing with traffic. The Indian Head Rail Trail and Northeast Branch Trail are better dedicated-path options if you prefer forest corridors over coastal park roads.",
          "NPS Assateague Island publishes trail maps distinguishing bike-legal paved routes from foot-only nature trails—review before your visit."
        ]
      }
    ],
    faq: [
      {
        question: "Are e-bikes allowed on Assateague Island?",
        answer: "Yes, on routes where traditional bicycles are allowed—primarily the paved Bayberry Drive bike path in the Maryland district. E-bikes are prohibited on nature trails, boardwalks, and beaches."
      },
      {
        question: "Can I ride an e-bike on the Wildlife Loop?",
        answer: "No. Bicycles and e-bikes are prohibited on Assateague's nature trails including the Wildlife Loop, Woodland Trail, and similar foot paths under the Superintendent's Compendium."
      },
      {
        question: "Do I need to pedal my e-bike on Assateague?",
        answer: "Yes. NPS policy prohibits using the electric motor without pedaling except where public motor vehicles may drive. Pedal while using assist on the bike path."
      },
      {
        question: "What e-bike classes are recommended?",
        answer: "Class 1 and Class 2 e-bikes under 750 watts fit NPS and Maryland path rules. Class 3 may be restricted on bicycle paths under Maryland § 21-1205.2."
      },
      {
        question: "Is there an entrance fee?",
        answer: "Yes. Assateague Island National Seashore charges an entrance fee per vehicle or accepts America the Beautiful federal passes."
      },
      {
        question: "Can I see wild horses from the bike path?",
        answer: "Yes. Horses frequently graze near park roads and the bike path. Keep at least 40 feet of distance and never feed or approach horses."
      }
    ],
    highlights: [
      "Paved Bayberry Drive bike path through Maryland coastal habitat",
      "E-bikes allowed where bicycles are allowed under NPS policy",
      "Wild horse viewing from designated paved routes",
      "Nature trails and beaches explicitly closed to bicycles and e-bikes",
      "Barrier-island riding via the Verrazano Bridge crossing"
    ],
    accessPoints: [
      {
        name: "Verrazano Bridge Mainland Side",
        notes: "Visitor center, bridge bike crossing, and mainland parking."
      },
      {
        name: "Bayberry Drive Bike Path",
        notes: "Primary Maryland district e-bike corridor parallel to park road."
      },
      {
        name: "Bicycle-Pedestrian Lot",
        notes: "Southwest of the bridge; non-motorized visitor access."
      }
    ],
    seasonalNotes: "Summer brings peak crowds, horseflies, and afternoon storms. Spring and fall are milder. Hurricane and coastal storm closures possible. Nature trails remain bike-prohibited year-round.",
  },
];
