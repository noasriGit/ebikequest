import fs from "node:fs";

function countSectionWords(sections) {
  let total = 0;
  for (const section of sections) {
    for (const p of section.paragraphs) {
      total += p.split(/\s+/).filter(Boolean).length;
    }
    if (section.listItems) {
      for (const item of section.listItems) {
        total += item.split(/\s+/).filter(Boolean).length;
      }
    }
  }
  return total;
}

const relatedGuideSlugs = ["ebike-classes-explained", "mid-atlantic-trail-etiquette"];

const trails = [
  {
    slug: "washington-and-old-dominion-trail",
    description:
      "Ride 45 paved miles through Northern Virginia on the W&OD rail-trail—e-bikes welcome under NOVA Parks policy with a 20 mph powered-speed cap on the path.",
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "The Washington and Old Dominion Trail—almost always called the W&OD—is one of the Mid-Atlantic's flagship rail-trails and a backbone of Northern Virginia's bike network. NOVA Parks maintains roughly 45 miles of paved multi-use path from Shirlington in Arlington County west to Purcellville in Loudoun County, following the former Washington and Old Dominion Railroad corridor through Falls Church, Vienna, Reston, Herndon, Sterling, Leesburg, and a string of smaller communities.",
          "The trail surface is asphalt, generally about 10 feet wide, with half-mile markers, interpretive signs, and frequent road crossings as it moves from dense suburban corridors to rolling Piedmont farmland. A parallel 32-mile crushed-stone bridle path serves equestrians and off-road cyclists; the paved main trail is where most road and e-bike riders spend their time.",
          "Elevation trends gently downhill from west to east, with Clarke's Gap near Leesburg marking one of the higher points. Most of the route reads as easy cruising, though western segments toward Purcellville add modest rolling hills. The W&OD connects to regional networks including the Custis Trail, Bluemont Junction Trail, and Four Mile Run Trail near Arlington, making it a natural choice for commuters, century-training loops, and family outings alike.",
        ],
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "E-bikes are permitted on the W&OD Trail. NOVA Parks publishes explicit guidance on electric conveyances, and Friends of the W&OD Trail confirms that e-bikes and other approved e-devices may use the trail wherever traditional bicycles are allowed.",
          "NOVA Parks defines an e-bike as a wheeled vehicle with operable pedals and an electric motor whose top powered speed is 20 mph—the same 20 mph cap referenced in Virginia Code for several micromobility devices. The authority states that devices capable of exceeding 20 mph under motor power must be limited to 20 mph while on the trail. Riders should treat that as an operational ceiling regardless of whether the bike is labeled Class 1, Class 2, or Class 3.",
          "Virginia Code § 46.2-904.1 generally allows electric power-assisted bicycles wherever bicycles may ride on shared-use paths, subject to local or agency prohibitions. NOVA Parks notes that, as a matter of state law, it cannot adopt rules that conflict with Commonwealth statutes on these devices; enforcement of reckless operation falls to local police. Gas-powered vehicles, dirt bikes, ATVs, and motorcycle-style throttle bikes are not permitted.",
        ],
        listItems: [
          "Allowed: pedal-assist and throttle-assist e-bikes that meet Virginia's statutory definition, operated at no more than 20 mph under motor power on the trail.",
          "Prohibited: gas-powered motor vehicles, unlicensed mopeds, and devices that cannot meet the 20 mph operational limit while on the path.",
          "Courtesy expectations: yield to pedestrians and equestrians; obey posted hours (generally 5 a.m.–9 p.m. east of Herndon, dusk west of Herndon).",
          "Official source: NOVA Parks, Use of Electric Conveyances on W&OD Trail (novaparks.com).",
        ],
      },
      {
        id: "highlights",
        heading: "Trail Highlights",
        paragraphs: [
          "The W&OD rewards repeat visits because each jurisdiction along the corridor feels distinct. Near Shirlington and East Falls Church, the trail hums with Metro connections and rush-hour bike traffic. Through Vienna and Reston, park-like buffers and creek crossings break up the suburban grid. Farther west, Leesburg's historic downtown and Purcellville's depot district offer natural turnaround points with coffee, breweries, and bike shops.",
          "Historic railroad infrastructure dots the route: restored depots, cabooses, and signage explaining the line that once hauled freight and passengers toward the Blue Ridge. NOVA Parks' headquarters and a popular rest stop in Ashburn make a convenient meeting point for group rides.",
        ],
        listItems: [
          "45 miles of continuous paved rail-trail—among the longest urban-suburban paths in the eastern United States.",
          "Connections to Custis, Bluemont Junction, and Four Mile Run trails for longer loop options.",
          "Half-mile markers and multiple town centers for flexible out-and-back or shuttle rides.",
          "Parallel 32-mile equestrian trail for gravel-oriented detours on mountain bikes.",
          "Year-round community use with more than two million visits annually.",
        ],
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "One of the W&OD's strengths is the number of entry points. NOVA Parks lists parking and access across Arlington, Fairfax, and Loudoun counties; you rarely need to ride the full 45 miles to enjoy the trail.",
          "Shirlington access sits along South Four Mile Run Drive with on-street parking—convenient for Alexandria and Arlington riders but not ideal for overnight vehicle storage. Purcellville's eastern lot at Loudoun Valley High School offers weekend parking during the school year; Purcellville West on Hatcher Street provides a gravel lot closer to the western terminus. Between those endpoints, lots and street access in Vienna, Reston, Herndon, Sterling, Ashburn, and Leesburg let you tailor distance to fitness and schedule.",
          "For e-bike riders planning shuttle rides, the W&OD's mile markers simplify logistics: pick two parking areas with a known mile difference, ride one direction, and arrange a pickup. Capital Bikeshare and Metro do not serve the full length, but East Falls Church and other Orange and Silver Line stations sit within a short ride of eastern segments.",
        ],
      },
      {
        id: "riding-tips",
        heading: "Riding Tips for E-Bikers",
        paragraphs: [
          "The W&OD is legal for e-bikes, but crowded segments demand restraint. Weekday rush hours around Shirlington, the Rosslyn approach paths, and town centers can feel as congested as any urban bike lane. Drop to a lower assist mode early, announce passes with a bell or voice, and resist using throttle-only acceleration where pedestrians queue at crossings.",
          "Road crossings are frequent and vary in visibility. Some have actuated signals or dedicated crossing phases; others require a full stop and careful creep. E-bike torque makes it easy to jump into cross traffic—treat every driveway and side street as a potential conflict.",
          "Bring lights for tunnels and underpasses, especially on late-afternoon return legs. The western trail beyond Herndon follows dusk closing rules rather than the fixed 9 p.m. cutoff used closer to Arlington. Carry water in summer; shade gaps widen in Loudoun's open farmland.",
        ],
        listItems: [
          "Cap motor-assisted speed at 20 mph on the trail per NOVA Parks guidance.",
          "Use Eco or Tour assist in congested zones; save higher assist for open western rollers.",
          "Hybrid or endurance tires suit the paved surface; gravel bridle path needs wider rubber.",
          "Check novaparks.com for construction alerts—the Sterling Boulevard overpass project runs through 2028.",
        ],
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "The W&OD operates year-round, but each season reshapes the experience. Spring brings cherry blossoms and heavy weekend use; summer heat and thunderstorms push many riders to dawn or dusk slots. Fall color along creek valleys makes October prime for photography rides. Winter ice and leaf-covered pavement under bridges create slick patches—e-bike riders should reduce assist and avoid hard braking on shaded segments.",
          "NOVA Parks posts active alerts for tree work, trail closures south of Edison Street in Arlington, and Dominion Energy maintenance between Sterling and Ashburn. Verify conditions before committing to a one-way shuttle ride in winter or during storm cleanup.",
        ],
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "Eastern connections include the Mount Vernon Trail via Alexandria and Potomac bridges, though NPS rules differ from NOVA Parks. The Custis Trail links toward Rosslyn and the I-66 corridor. West of Purcellville, road routes reach the Virginia countryside and, with planning, the Winchester area.",
          "For policy context, read eBikeQuest guides on e-bike classes and Mid-Atlantic trail etiquette. Virginia's statewide defaults under § 46.2-904.1 apply on the W&OD, but the 20 mph operational cap and local police enforcement make courteous riding essential to preserving access.",
        ],
      },
    ],
    faq: [
      {
        question: "Are Class 3 e-bikes allowed on the W&OD Trail?",
        answer:
          "Virginia law generally permits Class 3 e-bikes on shared-use paths unless a locality or agency prohibits them. NOVA Parks does not publish a separate Class 3 ban but requires all e-bikes to operate at no more than 20 mph under motor power on the trail. Practically, that means limiting assist on a Class 3 bike regardless of its 28 mph road capability.",
      },
      {
        question: "Can I use the throttle on my Class 2 e-bike?",
        answer:
          "Virginia and NOVA Parks allow qualifying Class 2 e-bikes on the W&OD. Use throttle assist responsibly near pedestrians, and keep total motor-assisted speed at or below 20 mph on the path.",
      },
      {
        question: "Where can I park for a one-way e-bike ride?",
        answer:
          "Popular shuttle pairs include Shirlington to Vienna, Reston to Leesburg, and Farmville-adjacent options are not on the W&OD—instead try Sterling to Purcellville. NOVA Parks lists official lots at Shirlington, Purcellville, and multiple Fairfax and Loudoun locations on its W&OD park page.",
      },
      {
        question: "What hours is the W&OD open?",
        answer:
          "From Shirlington to Herndon, the trail is generally open 5 a.m. to 9 p.m. West of Herndon, hours follow dusk closing. Check NOVA Parks for seasonal adjustments.",
      },
      {
        question: "Is the parallel horse trail open to e-bikes?",
        answer:
          "NOVA Parks directs electric conveyance users to areas where traditional bicycles are allowed. The paved main trail is the appropriate surface for e-bikes. The adjacent crushed-stone bridle path is primarily for equestrians and mountain bikers—confirm current signage before riding there.",
      },
    ],
    highlights: [
      "45-mile paved rail-trail from Shirlington to Purcellville",
      "E-bikes permitted with 20 mph powered-speed limit per NOVA Parks",
      "Connections to Custis, Bluemont Junction, and Four Mile Run trails",
      "Historic depots and mile markers across Northern Virginia",
      "Multiple parking lots for flexible out-and-back or shuttle rides",
    ],
    accessPoints: [
      { name: "Shirlington", notes: "South Four Mile Run Drive access; on-street parking; eastern terminus near I-395." },
      { name: "Vienna / Reston / Herndon", notes: "Multiple neighborhood lots and park connectors along the Fairfax corridor." },
      { name: "Ashburn", notes: "NOVA Parks headquarters and popular rest stop mid-trail." },
      { name: "Leesburg", notes: "Downtown access with dining and shops; good turnaround for moderate rides." },
      { name: "Purcellville West", notes: "Gravel lot on Hatcher Street near the western terminus." },
    ],
    seasonalNotes:
      "Open year-round; fixed 5 a.m.–9 p.m. hours east of Herndon and dusk closing west of Herndon. Expect heavy weekend use spring through fall, leaf-slick bridges in autumn, and occasional ice under overpasses in winter. Check NOVA Parks alerts for construction and tree work.",
    relatedGuideSlugs,
  },
  {
    slug: "mount-vernon-trail",
    description:
      "Scenic 18-mile Potomac riverfront trail from Mount Vernon to Roosevelt Island—Class 1 and 2 e-bikes allowed with NPS pedal-assist and 15 mph rules.",
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "The Mount Vernon Trail is an 18-mile paved multi-use path along the Virginia side of the Potomac River, managed by the National Park Service as part of George Washington Memorial Parkway. It stretches from George Washington's Mount Vernon estate north through Alexandria, Belle Haven, Old Town connectors, Reagan National Airport viewpoints, and Arlington waterfront parks to Theodore Roosevelt Island near Key Bridge.",
          "Built in the 1970s on NPS land paralleling the parkway, the trail is flat to gently rolling with frequent curves, bridge segments, and scenic overlooks. It is one of the busiest shared-use paths in the country—NPS reports up to 80,000 visits per month—mixing tourists, commuters, runners, and recreational cyclists.",
          "Surface quality is generally good asphalt, but narrow sections, blind curves, and weekend crowding near Old Town Alexandria and Gravelly Point demand attentive riding. The trail links to the Potomac Heritage Trail, regional bridges into Washington, DC, and local Alexandria bike lanes.",
        ],
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "The National Park Service authorizes e-bikes on the Mount Vernon Trail wherever traditional bicycles are allowed. NPS defines an e-bike as a two- or three-wheeled cycle with fully operable pedals and an electric motor of less than 750 watts (1 horsepower). E-bikes are prohibited where traditional bicycles are prohibited.",
          "Critical NPS restriction: except where public motor-vehicle use is allowed, using the electric motor to propel an e-bike without pedaling is prohibited. That effectively bans throttle-only riding on the trail—even for Class 2 bikes—while pedal-assist operation remains permitted. This rule appears in the GWMP Record of Determination for e-bikes and the park planning documentation.",
          "The GWMP Superintendent's Compendium adopts Virginia state law for bicycle and e-bike operation and adds trail-specific limits: a 15 mph speed limit on designated trails including the Mount Vernon Trail, stay-right travel, single-file riding when congested, and audible warnings before passing. Class 1 and Class 2 e-bikes that meet the NPS definition and Virginia statute fit comfortably within these rules when ridden with pedaling and speed discipline.",
        ],
        listItems: [
          "Allowed: e-bikes meeting the NPS 750-watt, operable-pedal definition where bicycles are permitted.",
          "Prohibited: motor-only propulsion on the trail; riding where bikes are banned; exceeding the 15 mph trail speed limit.",
          "Required conduct: pass on the left with bell or voice; yield to slower users; leash pets to six feet.",
          "Official sources: NPS GWMP e-bike Record of Determination; Superintendent's Compendium; Mount Vernon Trail mile 0 safety page.",
        ],
      },
      {
        id: "highlights",
        heading: "Trail Highlights",
        paragraphs: [
          "River views dominate the experience: Mount Vernon's wooded approaches, Dyke Marsh boardwalks, Old Town Alexandria's waterfront, the airport plane-spotting stretch, and Georgetown's Key Bridge backdrop each offer distinct scenery. Interpretive signage and memorial sites along GWMP add historical context.",
          "The trail functions as both recreation and transportation. Commuters connect Alexandria and Arlington job centers; tourists link Mount Vernon to DC monuments via bridge connections. Plan turnaround points at Belle Haven, Old Town, Gravelly Point, or Roosevelt Island based on crowd tolerance.",
        ],
        listItems: [
          "18 miles of Potomac riverfront pavement from Mount Vernon to Roosevelt Island",
          "Views of DC monuments, Reagan National Airport, and Dyke Marsh",
          "Connections to Potomac Heritage Trail and DC bridge crossings",
          "Historic Mount Vernon estate at the southern terminus",
          "Flat, accessible riding suitable for endurance e-bike touring at modest assist",
        ],
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Parking is available at most major trail destinations except Lady Bird Johnson Park and the Navy and Marine Memorial, per NPS trail brochures. Mount Vernon Circle provides southern access with estate parking (fees may apply for estate visitors). Belle Haven, Alexandria waterfront lots, and Reagan National area connectors serve mid-trail entry.",
          "Northern access includes Theodore Roosevelt Island and nearby Rosslyn or Georgetown bridge approaches—parking is limited and competitive on weekends. Metro stations within riding distance include King Street–Old Town, Braddock Road, and Rosslyn, making combined transit-and-e-bike days feasible from the District or Alexandria.",
          "E-bike riders should avoid leaving batteries or accessories visible in parked cars at popular riverfront lots. Arrive early on spring and fall weekends when Gravelly Point and Old Town fills quickly.",
        ],
      },
      {
        id: "riding-tips",
        heading: "Riding Tips for E-Bikers",
        paragraphs: [
          "Treat the Mount Vernon Trail as a social path, not a time trial. Your e-bike may assist to 20 mph under Virginia law, but NPS caps trail speed at 15 mph—and courteous riders go slower in crowds. Pedal continuously when using assist to comply with the no-throttle-without-pedaling rule.",
          "Blind curves under parkway overpasses and narrow boardwalk approaches require early slowing. Runners with headphones and wandering tourists near Mount Vernon are common; announce passes well in advance.",
          "Wind off the Potomac can drain batteries on northbound return legs. Carry a front light for tunnel-like underpasses and plan charging if you extend into DC via bridge connections.",
        ],
        listItems: [
          "Pedal whenever the motor is engaged—do not rely on throttle-only travel.",
          "Stay at or below 15 mph on the trail regardless of assist capability.",
          "Pass on the left only when sight lines are clear; leave two bike lengths before merging right.",
          "Dismount or walk through the most congested waterfront pinch points on busy weekends.",
        ],
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "The trail is open year-round, but summer heat, humidity, and afternoon thunderstorms are common. Cherry blossom season and fall foliage weekends produce peak congestion. Winter ice on shaded boardwalks and bridge decks can persist for days—consider postponing e-bike trips after hard freezes.",
          "Special events near the airport, Mount Vernon, and national holidays increase parking pressure. NPS may post temporary closures for maintenance on bridges and boardwalks; check nps.gov/gwmp before long shuttle rides.",
        ],
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "Potomac Heritage Trail segments branch from GWMP nodes for mixed-surface exploration. Across the river, DC trails follow different rules—DC's 20 mph motorized-bicycle definition does not use the three-class framework. The W&OD Trail connects via Alexandria and Arlington on-road routes with distinct NOVA Parks e-bike guidance.",
          "Review eBikeQuest's Mid-Atlantic trail etiquette guide for passing and speed practices that help e-bikes remain welcome on crowded NPS paths.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I use throttle-only mode on my Class 2 e-bike?",
        answer:
          "No. NPS prohibits using the electric motor to move an e-bike without pedaling on GWMP trails except where public motor vehicles may drive. Operate Class 2 bikes in pedal-assist mode on the Mount Vernon Trail.",
      },
      {
        question: "What is the speed limit on the Mount Vernon Trail?",
        answer:
          "NPS enforces a 15 mph speed limit on designated trails including the Mount Vernon Trail. That applies to e-bikes and conventional bicycles alike.",
      },
      {
        question: "Are Class 3 e-bikes allowed?",
        answer:
          "NPS permits e-bikes meeting its definition where bicycles are allowed, and GWMP adopts Virginia law. However, the 15 mph trail limit and throttle-without-pedaling ban mean Class 3 capability above 15 mph must not be used on the path. Many riders on this trail use Class 1 or Class 2 bikes.",
      },
      {
        question: "Where does the trail start and end?",
        answer:
          "The trail runs roughly 18 miles from Mount Vernon in Fairfax County to Theodore Roosevelt Island near Rosslyn and Key Bridge. Mile 0 markers and NPS place pages document major access nodes.",
      },
      {
        question: "Can I ride from the Mount Vernon Trail into Washington, DC?",
        answer:
          "Bridge connections near Roosevelt Island and the 14th Street corridor link to DC, but rules change by jurisdiction. Verify DC DDOT guidance and NPS regulations for each segment before crossing the Potomac.",
      },
    ],
    highlights: [
      "18-mile NPS riverfront trail from Mount Vernon to Roosevelt Island",
      "E-bikes allowed with mandatory pedaling and 15 mph trail limit",
      "Potomac views, Dyke Marsh, Old Town Alexandria, and airport scenery",
      "Links to Potomac Heritage Trail and DC bridge crossings",
      "One of the busiest multi-use paths in the Mid-Atlantic",
    ],
    accessPoints: [
      { name: "Mount Vernon", notes: "Southern terminus at George Washington's estate; paid estate parking may apply." },
      { name: "Belle Haven / Alexandria waterfront", notes: "Mid-trail river access with multiple parking areas." },
      { name: "Gravelly Point", notes: "Popular plane-spotting segment; crowded on weekends." },
      { name: "Theodore Roosevelt Island", notes: "Northern terminus area near Rosslyn and Key Bridge." },
    ],
    seasonalNotes:
      "Busy year-round with peak crowds spring through fall and on holidays. Summer heat and storms, winter ice on shaded bridges, and event-related parking limits affect planning. Confirm nps.gov/gwmp for closures.",
    relatedGuideSlugs,
  },
  {
    slug: "powhatan-state-park-trails",
    description:
      "James River state park trails mix forest and river views—Class 1 and 2 e-bikes permitted only on bike-designated multi-use paths per Virginia DCR rules.",
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "Powhatan State Park protects roughly 1,565 acres along the James River west of Richmond, offering a network of forest trails through mixed hardwoods, river bluffs, and former farmland. Unlike Virginia's long rail-trails, this is a traditional state-park trail system with separate routes for hiking, biking, and equestrian use marked by color blazes.",
          "The park's trail guide lists more than a dozen named routes totaling well over 10 miles, with difficulty ranging from easy to moderate. Biking is permitted on trails explicitly designated for bicycles—typically shared hiking-biking-equestrian corridors such as Big Woods, Coyote Run, Entry, Pine, and Turkey trails—not on hiking-only paths like River Trail or Gold Dust Trail.",
          "Surfaces are natural tread: dirt, roots, modest climbs, and occasional muddy sections after rain. The setting feels remote despite proximity to Richmond, with James River access, canoe launches, campground loops, and equestrian facilities spreading use across the property.",
        ],
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "Virginia State Parks regulate e-bikes through Department of Conservation and Recreation policy and the Virginia Administrative Code. DCR's published e-bike handout states that Class 1 and Class 2 electric power-assisted bicycles are allowed on any bicycle path or trail designated for bicycle use. Class 3 e-bikes are not authorized on Virginia State Parks trails under 4VAC5-30-276.",
          "Administrative code requires bicycles and e-bikes to stay on designated bicycle paths only—you may not ride on hiking-only trails or in undesignated areas. At Powhatan, check the trail guide legend: routes marked with a B allow biking; hiking-only trails prohibit all bikes including e-bikes.",
          "E-bikes must meet Virginia's statutory definition: operable pedals, rider seat, and motor input no more than 750 watts with assist ceasing at 20 mph for Class 1 and Class 2. The park may close trails during wet conditions to prevent resource damage; e-bike torque can accelerate erosion on soft tread—honor closure signs.",
        ],
        listItems: [
          "Allowed: Class 1 and Class 2 e-bikes on trails designated for bicycle use (see park trail map).",
          "Prohibited: Class 3 e-bikes; riding on hiking-only trails; off-trail or closed segments.",
          "Yield order: horses and hikers have priority on shared multi-use corridors.",
          "Official sources: dcr.virginia.gov state parks e-bike PDF; 4VAC5-30-276; Powhatan trail guide.",
        ],
      },
      {
        id: "highlights",
        heading: "Trail Highlights",
        paragraphs: [
          "Powhatan rewards riders seeking forest immersion rather than rail-trail mileage. Big Woods and Coyote Run offer longer combined loops through mature timber. Entry Trail connects the contact station to deeper network nodes. Pine and Turkey trails add variety for intermediate mountain-bike-style outings on permitted corridors.",
          "River access points, the Kanawha Canal aqueduct historic feature, and bluff overlooks provide natural rest stops. Campground Trail links overnight visitors to the wider system without requiring a separate drive.",
        ],
        listItems: [
          "James River frontage with canoe launches and riffle views",
          "Color-blazed multi-use trails shared with hikers and equestrians",
          "Historic Kanawha Canal aqueduct and cemetery interpretive sites",
          "Campground and cabin access for multi-day riding bases",
          "Quiet Piedmont forest riding within an hour of Richmond",
        ],
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "The park entrance and contact station sit at 4616 Powhatan State Park Road, Powhatan, VA 23139. Main parking near the office and contact station serves Entry Trail and several loop options. Equestrian trailer parking is available at designated areas for riders combining horse and bike visits.",
          "Download DCR's Avenza map or trail guide PDF before arriving—cell service can be spotty. The contact station staff can confirm which bike-legal trails are open after rain. Day-use fees apply; Virginia State Parks annual passes reduce repeat-visit cost.",
        ],
      },
      {
        id: "riding-tips",
        heading: "Riding Tips for E-Bikers",
        paragraphs: [
          "Bring a Class 1 or Class 2 mountain e-bike with moderate tire volume. Natural surfaces and roots favor controlled assist over high torque launches. Announce passes to hikers and slow for horses—e-bike silence surprises equestrians.",
          "Avoid riding after heavy rain; Powhatan closes or discourages use on saturated trails. Throttle-equipped Class 2 bikes should use pedal-assist on climbs to minimize trail wear and conflict.",
          "Battery range matters on loop planning: the full bike-legal network can exceed a casual afternoon when combined with exploratory dead ends. Carry repair kits; the park is not an urban bike-shop corridor.",
          "Day-use fees support trail maintenance—stop at the contact station for current maps and any equestrian events that may increase horse traffic on Coyote Run or Pine trails.",
        ],
        listItems: [
          "Use only trails marked for biking on the official map.",
          "Lower assist on shared corridors and when passing horses.",
          "Check trail status at the contact station after wet weather.",
          "Helmet and gloves recommended on rooty Piedmont tread.",
        ],
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "Spring and fall offer the firmest tread and comfortable temperatures. Summer humidity and insects peak along river corridors. Winter rides are possible on frozen mornings but mud after thaw remains a closure trigger.",
          "Hunting seasons and park programs occasionally affect parking or peripheral areas—verify the park event calendar. Campground trails may see extra foot traffic on holiday weekends.",
        ],
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "Richmond's James River Park System lies downstream with different e-bike rules on natural-surface trails. The Virginia Capital Trail offers paved James River corridor riding east of Richmond where e-bike access follows separate management.",
          "Consult eBikeQuest's Virginia riding guide and e-bike classes explainer for statewide context on Class 1 and Class 2 state-park access.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I ride my e-bike on every trail in Powhatan State Park?",
        answer:
          "No. Bikes and e-bikes are limited to trails designated for bicycle use. Hiking-only trails such as River Trail and Gold Dust Trail prohibit cycling. Check the trail guide B designation before riding.",
      },
      {
        question: "Are Class 3 e-bikes allowed?",
        answer:
          "No. Virginia State Parks administrative code limits authorized e-bikes to Class 1 and Class 2 on designated bicycle paths.",
      },
      {
        question: "Do equestrians have priority?",
        answer:
          "Yes. On shared multi-use trails, yield to horses and hikers. Slow and announce your presence when approaching equestrians from behind.",
      },
      {
        question: "Is there an entrance fee?",
        answer:
          "Powhatan State Park charges a daily parking fee unless you hold a Virginia State Parks annual pass. Fees support trail maintenance and staffing at the contact station.",
      },
      {
        question: "What e-bike type works best here?",
        answer:
          "A Class 1 or Class 2 hardtail or trail-style e-MTB with moderate tires suits the natural surfaces better than a road-oriented e-bike.",
      },
    ],
    highlights: [
      "James River bluff and forest trails west of Richmond",
      "Class 1 and Class 2 e-bikes on bike-designated trails only",
      "Multi-use corridors including Big Woods, Coyote Run, Pine, and Turkey",
      "Historic Kanawha Canal aqueduct within the park",
      "Campground and river access for multi-day visits",
    ],
    accessPoints: [
      { name: "Main contact station", notes: "4616 Powhatan State Park Road; primary parking and Entry Trail access." },
      { name: "Campground area", notes: "Campground Trail connects overnight visitors to bike-legal loops." },
      { name: "Equestrian trailer parking", notes: "Designated horse-trailer lots near multi-use trailheads." },
    ],
    seasonalNotes:
      "Best riding spring and fall; avoid bike-legal trails after heavy rain when closures protect tread. Summer brings heat and insects near the river. Verify trail status at the contact station during wet periods.",
    relatedGuideSlugs,
  },
  {
    slug: "high-bridge-trail",
    description:
      "31 miles of crushed limestone rail-trail capped by a 125-foot-high trestle—Class 1 and 2 e-bikes allowed on Virginia's iconic High Bridge Trail State Park.",
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "High Bridge Trail State Park is a 31-mile linear rail-trail through southside Virginia's Cumberland, Nottoway, and Prince Edward counties, connecting towns including Farmville, Rice, Prospect, Pamplin, and Burkeville. The park is the trail: a wide, nearly level crushed-limestone corridor on a former Norfolk Southern line between Lynchburg and Petersburg.",
          "The centerpiece is High Bridge itself—a 2,400-foot-long trestle rising 125 feet above the Appomattox River, among the longest recreational bridges in the United States and listed on the National Register of Historic Places. Most riders target Farmville-to-bridge out-and-backs of 9 to 18 miles, but the full 31 miles suits endurance e-bike touring.",
          "Surface is finely crushed limestone suited to hybrids and mountain bikes; road tires are workable but less comfortable. The corridor is tree-lined for long stretches, opening to farmland and river floodplain views at the bridge. Restrooms appear at intervals, but drinking water is scarce outside downtown Farmville—plan hydration carefully.",
        ],
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "Virginia State Parks allow Class 1 and Class 2 electric power-assisted bicycles on trails and paths designated for traditional bicycle use. High Bridge Trail is a designated bicycle corridor for its entire length, and DCR's rail-trail etiquette guidance explicitly welcomes e-bike riders who follow speed and yielding practices.",
          "Virginia Administrative Code 4VAC5-30-276 limits authorized e-bikes in state parks to Class 1 and Class 2 devices. Class 3 e-bikes are prohibited regardless of Virginia's broader statutory defaults on shared-use paths. Bikes and e-bikes must remain on the trail tread—not on adjacent unauthorized paths.",
          "Horses share the trail; DCR publishes a yield hierarchy of horses first, then pedestrians, then cyclists and e-bikers. Rail-trail etiquette posts recommend matching speed to conditions, signaling passes, and avoiding sudden acceleration near walkers and equestrians.",
        ],
        listItems: [
          "Allowed: Class 1 and Class 2 e-bikes on the full 31-mile trail.",
          "Prohibited: Class 3 e-bikes; off-trail riding; unauthorized motor vehicles.",
          "Yield: slow and announce passes; horses have right of way.",
          "Official sources: dcr.virginia.gov e-bike PDF; 4VAC5-30-276; High Bridge Trail State Park page.",
        ],
      },
      {
        id: "highlights",
        heading: "Trail Highlights",
        paragraphs: [
          "High Bridge delivers the payoff most riders remember: half-mile aerial views over the Appomattox River and surrounding Piedmont. Observation areas along the deck allow photos without blocking through traffic.",
          "Farmville's downtown crosses the trail with restaurants, the Outdoor Adventure Store bike rental, and easy access to a 4.5-mile ride to the bridge. Historic Civil War context surrounds the corridor—the bridge and rail line played roles in the Appomattox Campaign.",
        ],
        listItems: [
          "125-foot-high, 2,400-foot-long High Bridge trestle",
          "31 miles of crushed-limestone rail-trail with gentle grades",
          "National Recreation Trail and National Register historic designation",
          "Farmville downtown dining and bike rental one block from the trail",
          "Restrooms at intervals; mile markers from the bridge hub",
        ],
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Farmville is the most popular access hub. River Road parking (555 River Road) sits about a mile west of High Bridge; trailers are not allowed in that lot. Main Street and municipal lots downtown put you on the trail near milepost 4.5 with services nearby.",
          "High Bridge Trail Station lot off Camp Paradise Road in Rice provides eastern bridge access. Additional trailheads serve Prospect, Pamplin, and Burkeville for shuttle-oriented long rides. Mile markers radiate from High Bridge as mile 0, simplifying distance planning for e-bike range calculations.",
        ],
      },
      {
        id: "riding-tips",
        heading: "Riding Tips for E-Bikers",
        paragraphs: [
          "Limestone dust is easy riding but soft after rain—reduce tire pressure slightly and avoid abrupt braking on descents from bridge approaches. Class 2 throttle use is legal in state parks, but pedal-assist passing feels safer around walkers unaware of silent bikes.",
          "Carry two water bottles or a hydration pack; e-bike assist increases distance faster than water availability. Farmville is the reliable refill point on typical bridge rides.",
          "Battery planning: a Farmville-to-Rice-and-back exceeds 30 miles—well within many e-bike ranges on Eco mode but worth monitoring on older batteries. Shuttle services and multiple parking lots enable shorter segments.",
          "Group rides should stagger passes on the bridge deck—stop only in designated observation areas so through traffic keeps moving.",
          "Day-use parking fees apply at Farmville-area lots; arrive early on autumn weekends when leaf-peepers share the corridor.",
        ],
        listItems: [
          "Hybrid or gravel tires balance speed and comfort on limestone.",
          "Pack extra water; limited fountains on the corridor.",
          "Use bell or voice before passing on bridge deck pinch points.",
          "Check DCR for trail closures during bridge maintenance or storms.",
        ],
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "Spring through fall is peak season; summer shade on much of the corridor helps but humidity is heavy. Winter rides are quiet and beautiful but daylight is short. Heavy rain can soften limestone and flood low sections near the river—confirm trail status before driving from Richmond or Lynchburg.",
          "Farmville events and holiday weekends increase downtown trail traffic. Bridge wind can be noticeable on cold days—layer accordingly for stop-and-photo time on the deck.",
        ],
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "Appomattox Court House National Historical Park and Sailor's Creek battlefield sites lie within driving distance for history-themed touring. Other Virginia rail-trails—including the New River Trail—offer multi-day itinerary extensions for e-bike travelers.",
          "DCR's statewide Class 1 and Class 2 policy applies consistently; read eBikeQuest guides on trail etiquette for shared equestrian corridors.",
        ],
      },
    ],
    faq: [
      {
        question: "Are Class 3 e-bikes allowed on High Bridge Trail?",
        answer:
          "No. Virginia State Parks administrative code restricts e-bikes to Class 1 and Class 2 on designated bicycle paths, including High Bridge Trail.",
      },
      {
        question: "How far is it from Farmville to High Bridge?",
        answer:
          "About 4.5 miles one way from downtown Farmville to the bridge—roughly 9 miles round trip, a popular half-day e-bike outing.",
      },
      {
        question: "Is drinking water available on the trail?",
        answer:
          "Very limited. Restrooms appear at intervals, but plan to fill bottles in Farmville or at trailheads before long rides.",
      },
      {
        question: "Can horses and e-bikes share the trail?",
        answer:
          "Yes. Horses are permitted. Cyclists and e-bikers must yield, slow, and announce passes per DCR rail-trail etiquette.",
      },
      {
        question: "What surface should I expect?",
        answer:
          "Finely crushed limestone, wide and generally flat—ideal for hybrids, gravel bikes, and mountain e-bikes.",
      },
    ],
    highlights: [
      "Iconic 125-foot-high High Bridge over the Appomattox River",
      "31-mile crushed-limestone rail-trail through Farmville and beyond",
      "Class 1 and Class 2 e-bikes permitted park-wide",
      "National Recreation Trail with Civil War railroad history",
      "Farmville downtown access, dining, and bike rental",
    ],
    accessPoints: [
      { name: "Farmville River Road", notes: "555 River Road lot; about one mile from High Bridge; no trailers." },
      { name: "Farmville downtown", notes: "Main Street crossing near milepost 4.5; shops and rentals." },
      { name: "High Bridge Trail Station (Rice)", notes: "Camp Paradise Road access at the eastern bridge approach." },
      { name: "Prospect / Pamplin / Burkeville", notes: "Western and eastern terminus-area trailheads for long shuttles." },
    ],
    seasonalNotes:
      "Peak use March through November. Limestone softens after heavy rain; verify park status before long rides. Limited daylight in winter; carry layers for wind on the bridge deck.",
    relatedGuideSlugs,
  },
  {
    slug: "new-river-trail-state-park",
    description:
      "57 miles of crushed-stone rail-trail along the New River in southwest Virginia—Class 1 and 2 e-bikes welcome; Class 3 prohibited in state parks.",
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "New River Trail State Park is one of Virginia's premier long-distance rail-trails: roughly 57 miles of crushed-stone path paralleling the scenic New River and Chestnut Creek through Carroll, Grayson, Pulaski, and Wythe counties, the city of Galax, and towns including Fries and Pulaski. The gentle railroad grade makes it a bucket-list tour for cyclists and e-bikers willing to commit a day or a weekend.",
          "The trail follows an abandoned rail corridor with trestles, tunnels, river overlooks, and small-town trailheads. Foster Falls serves as a central hub with camping, the Inn at Foster Falls, boat-and-bike livery rentals—including e-bikes on some schedules—and access to side adventures. A separate Hoover Mountain Biking Area offers natural-surface loops for conventional mountain bikes off the main rail grade.",
          "Surfaces are crushed stone similar to High Bridge Trail—hybrid and gravel setups work well. The New River's north-flowing gorge setting provides cooler summer riding than Piedmont trails, with fishing, tubing, and paddling opportunities at numerous access points.",
          "Trail towns embrace cyclists—Galax's musical heritage and Fries' restored depot make natural rest stops with small groceries and repair supplies on limited schedules.",
        ],
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "Virginia DCR allows Class 1 and Class 2 e-bikes on bicycle-designated trails throughout New River Trail State Park. The Foster Falls livery rents e-bikes alongside conventional bikes, signaling park management's acceptance of compliant devices on the main corridor.",
          "Class 3 e-bikes are prohibited under 4VAC5-30-276, which governs all Virginia State Parks bicycle paths. Hoover Mountain Biking Area trails are managed for traditional mountain biking; confirm current bike and e-bike rules for that side system before assuming access—natural-surface loops may differ from the main rail-trail.",
          "Horses use the main trail except where posted otherwise; yield hierarchy matches other DCR rail-trails. E-bike riders should pass slowly with audible warnings, especially near anglers and campers stepping onto the tread from river access points.",
        ],
        listItems: [
          "Allowed: Class 1 and Class 2 e-bikes on the 57-mile rail-trail corridor.",
          "Prohibited: Class 3 e-bikes on state park bicycle paths.",
          "Rentals: Foster Falls livery offers e-bike rental when seasonal schedules allow—call ahead.",
          "Official sources: dcr.virginia.gov e-bike PDF; New River Trail State Park; 4VAC5-30-276.",
        ],
      },
      {
        id: "highlights",
        heading: "Trail Highlights",
        paragraphs: [
          "Long trestles over the New River, the Fries town segment, Galax access, and Chestnut Creek views rank among the most photographed stretches. The trail's railroad heritage includes depots and interpretive markers explaining coal and timber history.",
          "Foster Falls combines lodging, primitive camping, livery shuttles, and river recreation—ideal for multi-day e-bike tours without sag vehicles. Pulaski and Cliffview trailheads support western and eastern shuttle logistics.",
        ],
        listItems: [
          "57-mile New River rail-trail through four counties and Galax",
          "River trestles, tunnels, and small-town trailheads",
          "Foster Falls hub with camping, inn lodging, and e-bike rentals",
          "Hoover Mountain Biking Area side trails for conventional MTB",
          "Boat-and-bike shuttle services during livery season",
        ],
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Major trailheads include Foster Falls, Galax/Cliffview, Pulaski/Draper, Fries, Austinville/Ivanhoe, and Allisonia. The park spans a large region—confirm which segment you are targeting before driving; GPS coordinates vary by more than an hour's drive between endpoints.",
          "Foster Falls livery provides bike and e-bike rentals plus shuttle services on seasonal schedules (typically April through October with daily summer operation). Shuttles enable one-way downstream pedaling with upstream vehicle return—popular for canoeing combinations as well.",
        ],
      },
      {
        id: "riding-tips",
        heading: "Riding Tips for E-Bikers",
        paragraphs: [
          "Plan range conservatively: 57 miles exceeds most single-charge tours. Use Eco assist, carry a charger for overnight stops at Foster Falls or Galax lodging, or arrange shuttles for 20–30 mile segments.",
          "Morning fog and shade along the river can leave stone damp—allow extra braking distance. Wildlife crossings and anglers near the tread are common; slow through towns where children access the path.",
          "If renting a park e-bike, confirm battery level and return time penalties—livery late fees apply per 15-minute intervals on busy summer days.",
          "Galax and Fries trailheads make good endpoints for two-day tours with overnight stays in locally owned lodging near the music heritage towns.",
          "Trestle approaches can be windy and exposed—pack a light jacket even on warm afternoons when stopping for river photos.",
          "Cell service is spotty in gorge sections—download offline maps before leaving Foster Falls or Galax.",
        ],
        listItems: [
          "Segment the trail into 15–25 mile days unless carrying spare batteries.",
          "Book livery shuttles in advance for holiday weekends.",
          "Gravel tires or hybrids handle crushed stone best.",
          "Yield to horses; announce passes near river access crowds.",
        ],
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "Livery operations peak Memorial Day through Labor Day with weekend shoulder seasons in April and October. Winter riding is possible but trailheads may have reduced services and early dusk.",
          "Spring high water affects river access but rarely closes the elevated rail grade; still verify park alerts after major floods. Fall foliage along the New River gorge is spectacular and busy—book lodging early in Galax and Foster Falls.",
        ],
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "The Virginia Creeper Trail near Damascus—managed separately—offers another iconic southwest Virginia ride with its own e-bike policies. Blue Ridge Parkway connections require road routes from Galax or Fries.",
          "Pair this ride with eBikeQuest's Virginia local riding guide for statewide Class 1 and Class 2 state-park context.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I rent an e-bike at New River Trail State Park?",
        answer:
          "Yes. The Foster Falls Boat and Bike Livery lists e-bike rentals on seasonal schedules—call 276-699-1034 for current availability, rates, and shuttle pairings.",
      },
      {
        question: "Are Class 3 e-bikes allowed?",
        answer:
          "No. Virginia State Parks limit e-bikes to Class 1 and Class 2 on designated bicycle paths, including the New River Trail corridor.",
      },
      {
        question: "How long does it take to ride the full 57 miles?",
        answer:
          "Most riders spread it over two or three days. E-bike assist reduces pedaling effort but plan for 5–8 hours of riding time if attempting the full length in one day, plus charging stops.",
      },
      {
        question: "Are horses allowed on the trail?",
        answer:
          "Yes on most of the main corridor. Cyclists and e-bikers must yield to equestrians per DCR etiquette guidance.",
      },
      {
        question: "Is the Hoover Mountain Biking Area open to e-bikes?",
        answer:
          "Hoover is a separate natural-surface system with different management. Confirm current bike and e-bike rules with park staff before riding there—do not assume the rail-trail policy applies.",
      },
    ],
    highlights: [
      "57-mile New River rail-trail through southwest Virginia",
      "Class 1 and Class 2 e-bikes on the main corridor",
      "Foster Falls rentals, camping, and inn lodging",
      "River trestles, tunnels, and Galax/Fries trailheads",
      "Seasonal boat-and-bike livery shuttles",
    ],
    accessPoints: [
      { name: "Foster Falls", notes: "Central hub with livery, camping, inn, and river access." },
      { name: "Galax / Cliffview", notes: "Western trailhead with parking for long western segments." },
      { name: "Pulaski / Draper", notes: "Eastern access toward the Pulaski area." },
      { name: "Fries", notes: "Town trailhead on the Chestnut Creek segment." },
    ],
    seasonalNotes:
      "Livery and rentals run roughly April–October with daily summer service. Fall foliage peaks draw crowds; winter offers solitude with limited services. Check flood-related alerts after major river events.",
    relatedGuideSlugs,
  },
  {
    slug: "james-river-park-belle-isle",
    description:
      "Richmond riverfront singletrack and skills features on Belle Isle—verify e-bike rules; JRPS prohibits motorized vehicles on natural-surface trails.",
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "The James River Park System (JRPS) Belle Isle area sits in the heart of Richmond's riverfront—a free, city-managed park open dawn to dusk with pedestrian suspension-bridge access to Belle Isle, riverside boulders, quarry pools, and a well-known mountain bike skills loop. Trails range from beginner-friendly gravel to rocky singletrack on the island and connecting mainland segments.",
          "Belle Isle's bike offerings include the Skills Park—built features for progressive practice—and broader JRPS mountain bike routes linked to Buttermilk, North Bank, and Reedy Creek networks across the river system. Distances are modest compared to rail-trails, but technical terrain and high weekday-after-work traffic define the experience.",
          "Surfaces are natural tread: rock slabs, roots, narrow corridors, and shared pedestrian use on many paths. This is urban adventure riding, not a dedicated e-bike touring corridor.",
        ],
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "James River Park trail rules published by Friends of James River Park state plainly: no motorized vehicles on trails. The Belle Isle Skills Area rules specify non-motorized bicycles only. Richmond's broader park rules restrict motor vehicles on hike/bike paths except mobility devices for people with disabilities.",
          "Virginia Code treats qualifying electric power-assisted bicycles as bicycles—not motor vehicles—for statewide road and path defaults under § 46.2-904.1. That statutory classification can differ from how a local land manager interprets a 'no motorized vehicles' trail rule. JRPS does not publish a separate e-bike policy clarifying the distinction.",
          "Conservative guidance: assume natural-surface JRPS trails—including Belle Isle—are intended for non-motorized mountain bikes unless Richmond Parks and Recreation confirms otherwise in writing. Paved connectors and city streets surrounding the park follow Virginia e-bike statutes. When in doubt, contact Richmond Parks at the non-emergency line listed on jamesriverpark.org before riding a Class 1 or Class 2 e-MTB on singletrack.",
        ],
        listItems: [
          "JRPS trail rules: no motorized vehicles; skills area requires non-motorized bicycles.",
          "Virginia statute: e-bikes meeting § 46.2-100 are legally bicycles, not motor vehicles—local interpretation may still restrict trail use.",
          "Recommended: verify current policy with Richmond Parks before riding e-bikes on Belle Isle singletrack.",
          "Official sources: jamesriverpark.org park rules; Richmond MORE skills area rules; Virginia Code § 46.2-904.1.",
        ],
      },
      {
        id: "highlights",
        heading: "Trail Highlights",
        paragraphs: [
          "Belle Isle's industrial ruins, quarry swimming holes, and panoramic river views draw hikers and picnickers alongside riders. The Skills Park delivers tabletop jumps, berms, and progressive lines for riders building confidence.",
          "Connected JRPS networks on Buttermilk and North Bank offer longer loops with challenging roots and rock gardens—iconic Richmond riding that appears in regional trail apps and weekly group rides.",
        ],
        listItems: [
          "Pedestrian bridge access to Belle Isle in downtown Richmond",
          "Skills Park with progressive mountain bike features",
          "River boulders, quarry pools, and skyline views",
          "Gateway to Buttermilk, North Bank, and Reedy Creek MTB routes",
          "Free public access dawn to dusk",
        ],
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Access Belle Isle via the pedestrian bridge from Tredegar Street and the riverfront parking areas near the American Civil War Museum and Texas Beach trailheads. Parking fills quickly on sunny weekends; arrive early or use bike-and-e-bike approach via city streets and the Capital Trail connector network.",
          "GPS emergency tags (red and brown location markers) throughout JRPS help responders locate incidents—note tag numbers if calling the park non-emergency line at (804) 646-5100.",
        ],
      },
      {
        id: "riding-tips",
        heading: "Riding Tips for E-Bikers",
        paragraphs: [
          "If you have confirmed e-bike access for a specific JRPS segment, use Class 1 pedal-assist with minimal torque on shared paths. Yield to hikers and climbers per JRPS rules: bikes yield to pedestrians; descenders yield to climbers on narrow singletrack.",
          "Do not ride closed trails after rain—Richmond MORE and park volunteers close sections to prevent erosion. E-bike weight increases trail damage when surfaces are wet.",
          "For legal, low-conflict riverfront riding, many Richmond e-bike owners prefer the paved Virginia Capital Trail east of the city where management explicitly welcomes Class 1 and Class 2 devices on the dedicated path.",
          "Richmond MORE volunteer trail crews maintain Belle Isle features—respect closure tape and never modify jumps or berms.",
          "The suspension bridge to Belle Isle is shared with pedestrians—walk the bike when crowds queue on sunny afternoons.",
        ],
        listItems: [
          "Call Richmond Parks before assuming e-bike access on Belle Isle singletrack.",
          "Avoid throttle-heavy riding near swimmers and boulder-hopping pedestrians.",
          "Walk bikes through crowded bridge and picnic areas on busy days.",
          "Respect dawn-to-dusk hours and river-level safety closures.",
        ],
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "Summer afternoons bring peak river users; trails feel more like a festival than a backcountry ride. Spring and fall weekdays offer the calmest bike conditions. JRPS requires life jackets when the James River is at or above 5 feet—high water closes some access routes.",
          "After heavy storms, volunteers close damaged trails; check Richmond MORE or Friends of James River Park social channels before heading out.",
        ],
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "The Virginia Capital Trail provides 52 paved miles from Richmond toward Williamsburg with e-bike-friendly management distinct from JRPS natural surfaces. Pocahontas State Park south of the city offers designated bike trails under Virginia DCR Class 1 and Class 2 rules.",
          "Read eBikeQuest guides on Virginia e-bike classes and trail etiquette before mixing urban JRPS visits with Capital Trail touring.",
        ],
      },
    ],
    faq: [
      {
        question: "Are e-bikes allowed on Belle Isle trails?",
        answer:
          "JRPS trail rules prohibit motorized vehicles, and the skills area requires non-motorized bicycles. Virginia law classifies qualifying e-bikes as bicycles, but the park has not published a clear e-bike exception. Contact Richmond Parks for current guidance before riding singletrack.",
      },
      {
        question: "Where can I legally ride an e-bike near Richmond?",
        answer:
          "Virginia Capital Trail and many city streets follow statewide e-bike rules. Virginia State Parks with designated bike trails allow Class 1 and Class 2 e-bikes. JRPS natural surfaces require verification.",
      },
      {
        question: "Can I use a Class 2 throttle on Belle Isle?",
        answer:
          "If riding is permitted at all, throttle use would conflict with non-motorized trail intent and pedestrian-heavy corridors. Default to Class 1 pedal-assist off-road or choose paved alternatives.",
      },
      {
        question: "Is there parking at Belle Isle?",
        answer:
          "Riverfront lots near Tredegar and Texas Beach fill quickly on weekends. Consider riding from city neighborhoods or the Capital Trail network.",
      },
      {
        question: "What are park hours?",
        answer:
          "James River Park System is open daily from dawn to dusk unless otherwise posted.",
      },
    ],
    highlights: [
      "Urban riverfront riding on Belle Isle in downtown Richmond",
      "Skills Park and connections to classic JRPS MTB trails",
      "JRPS rules prohibit motorized vehicles—confirm e-bike policy first",
      "Pedestrian bridge access and river boulder scenery",
      "Capital Trail nearby for confirmed Class 1 and Class 2 riding",
    ],
    accessPoints: [
      { name: "Tredegar / riverfront", notes: "Pedestrian bridge to Belle Isle; popular weekend parking." },
      { name: "Texas Beach trailhead", notes: "Mainland access to North Bank and connector routes." },
      { name: "Reedy Creek area", notes: "Southern JRPS access for longer MTB loops." },
    ],
    seasonalNotes:
      "Peak river use May through September; high-water closures at 5 feet on the James. Avoid riding wet singletrack after storms. Dawn-to-dusk access only.",
    relatedGuideSlugs,
  },
  {
    slug: "shenandoah-valley-rail-trail",
    description:
      "Planned 49-mile Shenandoah Valley rail corridor from Broadway to Front Royal—project in development; check VDOT for status before planning e-bike trips.",
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "The Shenandoah Valley Rail Trail is a proposed 48–49 mile multi-use corridor along an inactive Norfolk Southern line from Broadway in Rockingham County north to Front Royal in Warren County, passing through Timberville, Mount Jackson, Edinburg, Woodstock, Toms Brook, and Strasburg. Advocates envision a wide, gentle rail-trail paralleling the North Fork Shenandoah River and Massanutten Mountain—similar in scale to Virginia's High Bridge and New River trails.",
          "As of mid-2026, the corridor is not open for public biking. Virginia's Department of Transportation completed early feasibility and rail-with-trail assessment phases comparing a traditional rail-to-trail conversion against a parallel rail-with-trail alternative that could preserve future rail service. The General Assembly allocated up to $35 million for land acquisition, planning, and site development, but construction has not begun on a continuous public trail.",
          "eBikeQuest lists this corridor because it is among Virginia's highest-priority trail projects and a likely future e-bike destination. Until segments open, use this page for planning context—not turn-by-turn riding directions.",
        ],
      },
      {
        id: "ebike-access",
        heading: "Expected E-Bike Access When the Trail Opens",
        paragraphs: [
          "No finalized e-bike rules exist because the trail is not yet built. When Virginia DCR or a successor manager operates the corridor as a state trail or park, precedent strongly suggests Class 1 and Class 2 e-bikes on the finished path while Class 3 remains excluded on state park bicycle paths under 4VAC5-30-276.",
          "If the project lands under VDOT or local jurisdiction instead of DCR, Virginia's default under § 46.2-904.1 would allow e-bikes wherever bicycles are permitted on shared-use paths unless the managing agency prohibits specific classes. NOVA Parks' permissive approach on the W&OD shows how regional authorities can differ from DCR's Class 1/2 cap.",
          "Monitor VDOT's Shenandoah Valley Rail with Trail assessment, the Shenandoah Rail Trail Partnership (shenandoahrailtrail.org), and eventual posted signage. Policies will be confirmed only when a managing agency opens a built segment.",
        ],
        listItems: [
          "Current status: corridor closed—no legal public trail riding on the rail line.",
          "Likely future policy if DCR-managed: Class 1 and Class 2 allowed; Class 3 prohibited per state parks code.",
          "Possible alternative: shared-use path rules under § 46.2-904.1 if VDOT or towns operate segments.",
          "Official sources: vdot.virginia.gov Shenandoah Valley rail projects; DCR e-bike PDF; shenandoahrailtrail.org.",
        ],
      },
      {
        id: "highlights",
        heading: "Anticipated Trail Highlights",
        paragraphs: [
          "When built, the trail would link nine valley towns, schools, and historic Civil War landscapes across nearly 50 miles of flat terrain rare in Virginia's mountain country. Economic development studies cite tourism, commuter connectivity, and outdoor recreation as core benefits.",
          "River views toward Massanutten, farmland buffers, and downtown connections in Woodstock and Strasburg appear repeatedly in partnership renderings. Bridge and culvert rehabilitation across 19 bridges and 27 culverts dominates project engineering discussions.",
        ],
        listItems: [
          "Proposed 49-mile Broadway-to-Front Royal corridor",
          "Nine town connections along the North Fork Shenandoah River",
          "Flat rail grade suited to family and adaptive cycling",
          "State-funded planning with $35 million General Assembly allocation",
          "Competing rail-with-trail vs rail-to-trail configurations under study",
        ],
      },
      {
        id: "access-parking",
        heading: "Future Access Considerations",
        paragraphs: [
          "Feasibility studies identify potential trailheads near town centers, road crossings, and park-and-ride lots along U.S. 11 and local roads. Final parking locations await design and land acquisition.",
          "Until opening, do not trespass on active or inactive rail property. Community meetings in Timberville, Front Royal, and Woodstock offer public input channels documented in VDOT Phase 2 appendices.",
        ],
      },
      {
        id: "riding-tips",
        heading: "Planning Tips for Future E-Bike Riders",
        paragraphs: [
          "If you visit the valley today, ride established routes such as the Shenandoah County gravel roads popular with gravel cyclists, George Washington National Forest trails where e-bikes are restricted on natural surfaces, or town paths with posted rules. Do not preview the corridor on railroad ties.",
          "When segments open, expect e-bike etiquette similar to other Virginia rail-trails: moderate assist near pedestrians, bells for passing, and compliance with whichever agency publishes the final class policy.",
          "Consider a Class 1 or Class 2 endurance or gravel e-bike for the likely crushed-stone or paved surface—matching what DCR uses on High Bridge and New River trails.",
          "Valley towns already host gravel fondos and riverfront parks that preview the social riding culture a completed rail-trail would amplify.",
          "Subscribe to VDOT project alerts so you know when the first legal segment opens and which agency will publish enforceable e-bike class rules.",
          "Phase 3 public meetings along the corridor are the best place to ask how e-bike classes will be regulated once a manager is assigned.",
          "Until then, trespassing on rail property is unsafe and illegal regardless of e-bike type.",
        ],
      },
      {
        id: "seasonal",
        heading: "Seasonal and Project Timeline Notes",
        paragraphs: [
          "Construction timing depends on corridor purchase, rail-with-trail vs rail-to-trail decisions, and Norfolk Southern negotiations reported into 2026. VDOT Phase 3 assessment findings and public meetings continue to shape state action.",
          "Once open, the valley's four-season climate will mirror other Shenandoah riding: spectacular fall color, humid summers, and occasional snow closures in winter storms.",
        ],
      },
      {
        id: "nearby",
        heading: "Ride Today While the Project Advances",
        paragraphs: [
          "Skyline Drive and Shenandoah National Park roads allow bicycles but restrict e-bikes on natural-surface park trails. Massanutten Resort area paths and town greenways near Harrisonburg offer shorter legal rides with their own posted rules.",
          "Follow eBikeQuest Virginia law summaries and the Mid-Atlantic etiquette guide so you are ready when the Shenandoah Valley Rail Trail opens with published e-bike class rules.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I ride the Shenandoah Valley Rail Trail today?",
        answer:
          "No. The corridor remains an inactive rail line under study and negotiation. There is no continuous public trail open for bicycling as of 2026.",
      },
      {
        question: "Will e-bikes be allowed when the trail opens?",
        answer:
          "Final rules are unsettled. If Virginia State Parks manages the trail, expect Class 1 and Class 2 authorization consistent with 4VAC5-30-276. Other managers could adopt broader § 46.2-904.1 defaults.",
      },
      {
        question: "Where can I follow project updates?",
        answer:
          "Check VDOT's Shenandoah Valley Rail with Trail assessment page, shenandoahrailtrail.org, and the Shenandoah Valley Bike Coalition for public meeting announcements.",
      },
      {
        question: "How long will the trail be?",
        answer:
          "Planning documents describe roughly 48–49 miles from Broadway to Front Royal through Rockingham, Shenandoah, and Warren counties.",
      },
      {
        question: "What is rail-with-trail?",
        answer:
          "Rail-with-trail would build a path alongside a restored rail line rather than removing tracks entirely. VDOT's assessment compares costs and feasibility of that model against a traditional rail-to-trail conversion.",
      },
    ],
    highlights: [
      "Proposed 49-mile valley corridor Broadway to Front Royal",
      "Not yet open—project in VDOT assessment and land negotiations",
      "Future e-bike rules likely to follow Virginia State Parks or path defaults",
      "Nine towns and North Fork Shenandoah River scenery planned",
      "$35 million state allocation for acquisition and development",
    ],
    accessPoints: [
      { name: "Broadway (planned)", notes: "Proposed southern terminus in Rockingham County— not open for trail use." },
      { name: "Woodstock (planned)", notes: "Mid-corridor town identified in feasibility studies." },
      { name: "Front Royal (planned)", notes: "Proposed northern terminus in Warren County." },
    ],
    seasonalNotes:
      "Trail not open. Monitor VDOT and Shenandoah Rail Trail Partnership for construction timelines. When built, expect peak use spring through fall in the Shenandoah Valley climate.",
    relatedGuideSlugs,
  },
  {
    slug: "first-landing-state-park-trails",
    description:
      "Coastal Virginia Beach state park with 20 miles of forest trails—Class 1 and 2 e-bikes limited to Cape Henry and Live Oak bike-designated routes.",
    sections: [
      {
        id: "route-overview",
        heading: "Route Overview",
        paragraphs: [
          "First Landing State Park preserves coastal forest, bald cypress swamps, lagoons, and 1.5 miles of Chesapeake Bay beachfront at the mouth of the Chesapeake Bay in Virginia Beach—where English settlers first landed in 1607. More than 20 miles of trails weave through maritime woods, with most routes designated hiking-only.",
          "Bicycles—and therefore qualifying e-bikes—are restricted to two named trails: Cape Henry Trail and Live Oak Trail, per the park's official trail guide and website. Other popular paths such as the Bald Cypress Trail, Osmanthus Trail, and boardwalk segments are hiking-only and prohibit bikes to protect sensitive wetlands and high pedestrian volumes.",
          "Surfaces on bike-legal routes are generally firm park roads and crushed paths through forest; boardwalks on hiking trails are off limits to wheels. The park is Virginia's most visited state park, so expect steady foot traffic even on weekdays in summer.",
          "Trail Center staff can confirm whether Live Oak or Cape Henry has temporary maintenance closures after coastal storms.",
        ],
      },
      {
        id: "ebike-access",
        heading: "E-Bike Access and Rules",
        paragraphs: [
          "Virginia DCR allows Class 1 and Class 2 e-bikes on bicycle paths or trails designated for bicycle use. First Landing further narrows bicycle access to Cape Henry Trail and Live Oak Trail only—e-bikes must follow the same restriction. Class 3 e-bikes are prohibited in Virginia State Parks under 4VAC5-30-276.",
          "The park website notes that while motorized vehicles are not permitted on trails, electric wheelchairs and mobility scooters meeting the federal wheelchair definition may use trails. That exception does not extend to recreational e-bikes on hiking boardwalks.",
          "Stay on designated bike routes, yield to hikers at crossings, and obey trail safety signs. Riding on Bald Cypress or other hiking boardwalks risks fines, resource damage, and conflict with birders and families.",
        ],
        listItems: [
          "Allowed: Class 1 and Class 2 e-bikes on Cape Henry Trail and Live Oak Trail only.",
          "Prohibited: Class 3 e-bikes; bicycles on all other park trails and boardwalks.",
          "Mobility devices: ADA-compliant electric wheelchairs exempt from the bicycle restriction.",
          "Official sources: dcr.virginia.gov First Landing; trail guide PDF; e-bike policy PDF; 4VAC5-30-276.",
        ],
      },
      {
        id: "highlights",
        heading: "Trail Highlights",
        paragraphs: [
          "Cape Henry Trail runs roughly six miles as the park's primary bike-legal corridor, passing trail centers and connecting to broader forest loops on foot nearby. Live Oak Trail adds a shorter bike-permitted option through maritime forest.",
          "Hikers on adjacent trails enjoy cypress swamps, lagoon overlooks, and interpretive self-guided tours—but e-bike riders should plan beach time separately via designated beach access rather than riding sand unless local rules allow dismounted walking.",
        ],
        listItems: [
          "Cape Henry Trail—main bike-legal corridor about six miles long",
          "Live Oak Trail—secondary bicycle route through coastal forest",
          "1.5 miles of Chesapeake Bay beach separate from bike trails",
          "Bald cypress swamps and maritime forest ecosystems",
          "Virginia Beach's most visited state park—expect crowds in summer",
        ],
      },
      {
        id: "access-parking",
        heading: "Access and Parking",
        paragraphs: [
          "Enter at 2500 Shore Drive, Virginia Beach, VA 23451. Multiple parking areas serve the Trail Center, beach access, and campground. Summer fills early—arrive before 9 a.m. on holiday weekends or use Virginia State Parks reservation systems for camping stays that include bike-friendly campground loops on foot.",
          "The Trail Center offers maps, self-guided tour booklets for hiking trails, and staff who can confirm current bike-legal routes and any temporary closures after storms.",
        ],
      },
      {
        id: "riding-tips",
        heading: "Riding Tips for E-Bikers",
        paragraphs: [
          "Cape Henry and Live Oak are relatively tame compared to mountain trails—city-oriented e-bikes and hybrids work fine. Keep assist low near trail centers where hikers cross bike routes.",
          "Sand, salt air, and humidity accelerate corrosion; rinse drivetrains after coastal rides and store batteries indoors. Summer afternoon thunderstorms pop quickly—monitor radar.",
          "Combine a morning e-bike loop on Cape Henry with an afternoon beach visit on foot to experience the park without violating hiking-only boardwalk rules.",
          "Park interpreters lead seasonal walks on hiking-only trails—join on foot after securing your bike at the Trail Center racks.",
          "Live Oak Trail offers a shorter alternative when Cape Henry is busy with summer camp groups and interpretive programs.",
        ],
        listItems: [
          "Ride only Cape Henry and Live Oak—verify map before starting.",
          "Dismount where bike routes cross busy trail centers.",
          "Rinse bike and charge battery indoors due to coastal humidity.",
          "Book camping early if pairing overnight stays with riding.",
        ],
      },
      {
        id: "seasonal",
        heading: "Seasonal Notes",
        paragraphs: [
          "Summer tourism peaks June through August with heat, humidity, and crowded parking. Spring migration season draws birders on hiking trails—stay off those routes with any bicycle. Hurricane season can close beach and forest trails; check DCR alerts after named storms.",
          "Winter offers quiet riding on bike-legal paths but shorter daylight. Nor'easters deposit sand and debris on connectors near the bay.",
          "Campground guests can rack bikes at sites and pedal Cape Henry loops without moving a car during peak parking season.",
          "Bug spray matters on humid summer evenings when mosquitos thrive in cypress swamps near bike route crossings.",
        ],
      },
      {
        id: "nearby",
        heading: "Nearby Trails and Resources",
        paragraphs: [
          "Virginia Beach's boardwalk and resort district restrict bicycles and e-bikes in tourist zones seasonally—do not assume beachfront riding is legal. Back Bay National Wildlife Refuge and False Cape State Park have separate, mostly hiking-oriented policies south of the resort area.",
          "Review eBikeQuest Mid-Atlantic etiquette and e-bike class guides before coastal visits where pedestrians dominate.",
        ],
      },
    ],
    faq: [
      {
        question: "Which trails allow e-bikes at First Landing?",
        answer:
          "Only Cape Henry Trail and Live Oak Trail allow bicycles. Class 1 and Class 2 e-bikes permitted there must follow the same restriction. All other park trails and boardwalks are hiking-only.",
      },
      {
        question: "Can I ride on the Bald Cypress boardwalk?",
        answer:
          "No. Bikes and e-bikes are prohibited on hiking trails including Bald Cypress. The boardwalk is for foot traffic only.",
      },
      {
        question: "Are Class 3 e-bikes allowed?",
        answer:
          "No. Virginia State Parks administrative code limits e-bikes to Class 1 and Class 2 on designated bicycle paths.",
      },
      {
        question: "Is there an entrance fee?",
        answer:
          "First Landing charges a daily parking fee unless you hold a Virginia State Parks annual pass. As Virginia's busiest park, expect queues on summer mornings.",
      },
      {
        question: "Can I ride my e-bike on the beach?",
        answer:
          "Beach riding rules vary seasonally in Virginia Beach tourist areas. First Landing beach access is primarily for walking and swimming—confirm current ordinances before riding sand anywhere in the resort district.",
      },
    ],
    highlights: [
      "Cape Henry and Live Oak trails only for bikes and e-bikes",
      "Class 1 and Class 2 permitted; Class 3 prohibited in state parks",
      "Coastal forest, cypress swamps, and Chesapeake Bay beach",
      "Six-mile Cape Henry Trail as the main ride",
      "Trail Center maps and Virginia Beach location",
    ],
    accessPoints: [
      { name: "Trail Center", notes: "2500 Shore Drive; maps and bike-legal route information." },
      { name: "Cape Henry Trail north lot", notes: "Common starting point for the six-mile bike corridor." },
      { name: "Campground access", notes: "Overnight visitors can reach Live Oak and Cape Henry connectors." },
    ],
    seasonalNotes:
      "Summer crowds and afternoon storms; spring birding season on hiking-only trails. Hurricane closures possible fall season. Winter riding is quiet with limited daylight.",
    relatedGuideSlugs,
  },
];

for (const trail of trails) {
  const len = trail.description.length;
  if (len < 120 || len > 160) {
    console.error(`Description length ${len} for ${trail.slug}`);
    process.exit(1);
  }
  const words = countSectionWords(trail.sections);
  if (trail.sections.length < 6) {
    console.error(`Too few sections for ${trail.slug}`);
    process.exit(1);
  }
  if (words < 800) {
    console.error(`Word count ${words} for ${trail.slug}`);
    process.exit(1);
  }
  console.log(`${trail.slug}: ${words} words, desc ${len} chars`);
}

fs.writeFileSync(
  "content/_draft-trails-virginia.json",
  JSON.stringify(trails, null, 2) + "\n",
);
console.log("Wrote content/_draft-trails-virginia.json");
