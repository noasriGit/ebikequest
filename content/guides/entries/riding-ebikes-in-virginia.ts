import type { Guide } from "@/types/guide";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const ridingEbikesInVirginia: Guide = {
  ...EDITORIAL_DEFAULTS,
  id: "guide-va-local",
  title: "Riding E-Bikes in Virginia: Local Tips",
  category: "local-riding",
  description: "Virginia rail-trails, state parks, and urban paths: where each e-bike class is allowed and how to verify rules before you ride.",
  slug: "riding-ebikes-in-virginia",
  readingTimeMinutes: 12,
  sections: [
    {
      id: "state-law-basics",
      heading: "Virginia law: three classes, one framework",
      paragraphs: [
        "Virginia recognizes Class 1, Class 2, and Class 3 electric power-assisted bicycles under state code, generally treating them as bicycles when motors stay at or below 750 watts and meet class speed limits. No driver's license or registration is required for properly classified e-bikes, though Class 3 operators must be at least 14 and helmets are mandatory for riders under 14.",
        "On public roads and most bike lanes, all three classes are typically permitted where traditional bicycles may ride. The complexity begins when you leave the road network: trail managers, state agencies, and federal landowners can impose tighter rules than state statute suggests at first glance.",
        "Always confirm your bike's class from the manufacturer label before assuming access on a specific trail. Misclassified high-power bikes and throttle-only imports may not qualify as e-bikes under Virginia law and can be treated as motor vehicles.",
      ],
    },
    {
      id: "northern-virginia-trails",
      heading: "Northern Virginia rail-trails and river paths",
      paragraphs: [
        "The Washington & Old Dominion Trail is the region's backbone for e-bike recreation and commuting, running roughly 45 miles from Shirlington toward Purcellville on paved surface. Under NOVA Parks management and Virginia law, e-bikes meeting statutory definitions—including Class 3 on many segments—have become a common sight, but posted rules and crowded weekend conditions still require courteous speeds and passing etiquette.",
        "The Mount Vernon Trail along the Potomac is managed with National Park Service involvement and local coordination. Class 1 and Class 2 e-bikes are generally permitted on the paved trail, but policies can shift with NPS compendium updates and congestion management. Verify current signage before assuming Class 3 access.",
        "Urban connectors in Alexandria, Arlington, and Fairfax increasingly include shared-use paths where local ordinances may restrict sidewalk riding even when state law allows e-bikes on streets. Dismount zones near Metro stations and waterfront promenades are common—watch for posted instructions.",
      ],
      listItems: [
        "W&OD Trail: paved rail-trail; popular with all classes meeting Virginia definitions—confirm NOVA Parks updates before long tours.",
        "Mount Vernon Trail: scenic Potomac route; Class 1 and 2 typically allowed—check NPS and local postings for changes.",
        "Capital Beltway crossings and highway bridges: often legal but stressful; less experienced e-bike riders should plan calmer alternate routes.",
      ],
    },
    {
      id: "state-parks",
      heading: "Virginia State Parks policy",
      paragraphs: [
        "Virginia Department of Conservation and Recreation (DCR) allows Class 1 and Class 2 e-bikes on bicycle paths and trails designated for traditional bicycle use within Virginia State Parks. Class 3 e-bikes are not permitted on those park trails under current DCR guidance, even though Class 3 may be legal on some roads outside the park.",
        "That distinction matters at destinations like Powhatan State Park and First Landing State Park, where mixed-surface and boardwalk segments may have additional restrictions beyond the statewide policy. Narrow natural-surface loops, wildlife viewing paths, and pedestrian-priority boardwalks may prohibit all bikes, including Class 1 e-bikes.",
        "Before visiting, read the specific park's trail map and call the park office if signage is unclear. Policies evolve as visitation grows, and construction or habitat closures can temporarily reroute cyclists onto roads where different rules apply.",
      ],
    },
    {
      id: "southwest-and-rail-trails",
      heading: "Southwest Virginia rail-trails",
      paragraphs: [
        "High Bridge Trail State Park near Farmville offers more than 30 miles of crushed-stone and paved riding, including the iconic trestle. E-bikes meeting Virginia statutory definitions—including Class 3—are permitted, making it a favorite for riders who want long, relatively flat days without heavy car support.",
        "New River Trail State Park stretches roughly 57 miles of crushed limestone along the New River in southwestern Virginia. It is one of the state's premier e-bike-friendly destinations for touring, with towns spaced for food and lodging—but services are sparse, so plan battery range conservatively.",
        "Developing corridors such as the Shenandoah Valley Rail Trail allow e-bikes on completed paved segments under Virginia law, but segment-by-segment openings mean a route that was open last year may still be under construction. Check local trail authority websites before planning a destination ride.",
      ],
    },
    {
      id: "richmond-and-urban-parks",
      heading: "Richmond and urban park systems",
      paragraphs: [
        "James River Park— including the Belle Isle area—illustrates how city park systems layer local rules atop state law. Some paved and mixed segments allow Class 1 e-bikes while natural-surface singletrack and sensitive riverfront paths may restrict throttle-equipped bikes or prohibit e-bikes entirely.",
        "Richmond's growing urban trail network connects neighborhoods and the riverfront, but bridge crossings, festival closures, and maintenance detours are frequent. City of Richmond ordinances govern sidewalk riding; e-bikes are often discouraged or prohibited on crowded pedestrian sidewalks even when street riding is legal.",
        "When riding urban parks, default to Class 1 behavior: pedal visibly, use lower assist near pedestrians, and yield at all blind corners under the pedestrian bridges.",
      ],
    },
    {
      id: "federal-lands",
      heading: "Federal lands within Virginia",
      paragraphs: [
        "Large portions of Virginia include National Park Service, U.S. Forest Service, and Army Corps lands where federal superintendents set e-bike rules independently of Virginia's permissive road statutes. Shenandoah National Park, George Washington and Jefferson National Forests, and NPS units along the Potomac require per-unit verification.",
        "NPS policy allows superintendents to permit e-bikes on trails open to traditional bicycles, but each park publishes allowed classes in its compendium. Wilderness areas remain closed to all bicycles. Do not assume Virginia's Class 3 road legality extends into federal trail networks.",
        "The George Washington Memorial Parkway and associated trails are a frequent source of confusion because multiple jurisdictions manage adjacent segments. Read posted rules at each trailhead.",
      ],
    },
    {
      id: "local-ordinances",
      heading: "Local ordinances and campus rules",
      paragraphs: [
        "Virginia grants localities authority to regulate bicycle and e-bike use on sidewalks, certain paths, and municipal parks after public process. Virginia Beach, Charlottesville, Roanoke, and Northern Virginia counties each layer local nuance—especially around resort districts, downtown pedestrian zones, and university campuses.",
        "College towns may restrict e-bikes on campus paths even when adjacent town streets allow them. Private property—shopping centers, HOAs, apartment complexes—can prohibit e-bikes regardless of state classification.",
        "When in doubt, choose streets with bike lanes over sidewalks, and search the locality's municipal code or bike program page for 'electric power-assisted bicycle' definitions.",
      ],
    },
    {
      id: "practical-tips",
      heading: "Practical tips before you roll",
      paragraphs: [
        "Build a pre-ride checklist: confirm trail e-bike policy online, charge to your planned range with a Mid-Atlantic buffer for hills and headwinds, pack a lock and repair kit, and note whether your return route includes any Class 3 prohibitions if you ride a speed pedelec.",
        "Weekend congestion on the W&OD and Mount Vernon Trail rewards early starts and lower assist modes near families. Audible passing cues and slowing before crosswalks reduce conflict and keep access open for the e-bike community.",
        "Link state law pages, park PDFs, and eBikeQuest trail entries for your chosen route—but treat posted signage at the trailhead as the final word when it conflicts with older online summaries.",
      ],
    },
  ],
  faq: [
    {
      question: "Are Class 3 e-bikes legal in Virginia?",
      answer: "Yes on most public roads and many shared paths, but Class 3 riders must be at least 14. Class 3 is prohibited on Virginia State Park bicycle trails and may be restricted by local paths or federal land managers. Always verify the specific route.",
    },
    {
      question: "Can I ride my e-bike on the W&OD Trail?",
      answer: "Yes. E-bikes that meet Virginia's statutory definition—including Class 3 on many segments—are permitted on the W&OD under NOVA Parks policy, subject to posted updates. Ride courteously on crowded sections.",
    },
    {
      question: "Are e-bikes allowed in Virginia State Parks?",
      answer: "Class 1 and Class 2 e-bikes are allowed on trails designated for traditional bicycles. Class 3 is not permitted on those park trails. Individual parks may further restrict certain paths—check DCR guidance and local signage.",
    },
    {
      question: "Do I need a helmet on an e-bike in Virginia?",
      answer: "Riders under 14 must wear helmets. Older riders are not universally required by state law, but helmets are strongly recommended, and some local trails or events may impose their own requirements.",
    },
    {
      question: "Can I ride on sidewalks in Virginia cities?",
      answer: "It depends on the locality. Many cities restrict or ban e-bikes on sidewalks, especially in downtown and pedestrian-heavy districts. Prefer bike lanes and shared-use paths where available.",
    },
    {
      question: "Is the New River Trail good for e-bike touring?",
      answer: "Yes. It is one of Virginia's most e-bike-friendly long-distance routes, with crushed-stone surface and permitted classes including Class 3 under state definitions. Plan charging and services carefully—towns are spaced and amenities vary.",
    },
    {
      question: "What if online maps say e-bikes are OK but a sign says no?",
      answer: "Obey posted signage and contact the land manager. Trail policies change, and construction or seasonal closures can override older listings. The most restrictive applicable rule governs.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "ebike-regulations-overview",
    "mid-atlantic-trail-etiquette",
  ],
  jurisdictions: [
    "virginia",
  ],
};
