import type { Guide } from "@/types/guide";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const midAtlanticTrailEtiquette: Guide = {
  ...EDITORIAL_DEFAULTS,
  id: "guide-trail-etiquette",
  title: "E-Bike Trail Etiquette in the Mid-Atlantic",
  category: "riding-skills",
  description: "E-bike trail etiquette for Virginia, Maryland, and DC shared paths: speed, passing, yielding, and battery safety on crowded routes.",
  slug: "mid-atlantic-trail-etiquette",
  readingTimeMinutes: 6,
  sections: [
    {
      id: "shared-path-mindset",
      heading: "Shared-Use Paths Require a Different Mindset Than Roads",
      paragraphs: [
        "Mid-Atlantic rail-trails and riverfront paths— the W&OD, Mount Vernon Trail, Capital Crescent, C&O Canal towpath near Georgetown, and the Anacostia Riverwalk—mix commuters, families, dog walkers, tourists, and weekend athletes on the same narrow pavement. Legal access is only the first hurdle; how you ride determines whether e-bikes stay welcome.",
        "State law may allow your e-bike class on a path while the land manager adds speed limits, passing rules, or throttle restrictions. George Washington Memorial Parkway, operated by the National Park Service, allows e-bikes where traditional bicycles are allowed but caps bike speed at 15 mph on designated trails and prohibits using the motor without pedaling except where motor vehicles may drive.",
        "Etiquette is risk management: slower speeds and predictable behavior reduce conflict, support trail-access advocacy, and keep rides pleasant for everyone—including you when you are on foot.",
      ],
    },
    {
      id: "know-before-you-go",
      heading: "Know the Posted Rules Before You Roll",
      paragraphs: [
        "Trail rules stack in layers. Virginia § 46.2-904.1(F) defaults to e-bike access on shared-use paths but lets localities ban Class 1 or Class 2 after a hearing and Class 3 without one. Maryland § 21-1205.2 restricts Class 3 on many bicycle paths and lets agencies regulate all classes on natural-surface trails designated nonmotorized.",
        "Federal land adds another layer. NPS compendiums for GWMP adopt state law but impose trail-specific limits—15 mph speed limits, stay-right rules, and throttle-without-pedaling bans on the Mount Vernon Trail. NOVA Parks allows e-bikes where traditional bicycles are allowed on the W&OD under Virginia law and asks riders to follow the same regulations as other visitors.",
        "Before a group ride or vacation rental, open the managing agency's website, search eBikeQuest for the trail, and photograph posted signs at the trailhead. Policies on e-bike classes, hours, and segments closed to bikes change more often than state statutes.",
      ],
    },
    {
      id: "speed-and-assist",
      heading: "Manage Speed and Assist Level on Crowded Trails",
      paragraphs: [
        "Your e-bike may assist to 20 or 28 mph, but that is not your trail speed. On busy segments— Shirlington crossing on the W&OD, Old Town Alexandria connectors, or weekend mornings on the Mount Vernon Trail—drop to Eco or Tour mode and aim to match surrounding foot and bike traffic.",
        "Accelerate gently from stops. Throttle-equipped Class 2 bikes can surprise pedestrians if you launch silently from a bench or crosswalk; start with pedaling even when throttle use is legal on the road. On NPS trails where motor-only propulsion is banned, pedaling is both courtesy and compliance.",
        "Slow early for blind curves, underpasses, and bridge pinch points common along the Potomac and Anacostia corridors. You can always pass again when sight lines open.",
      ],
    },
    {
      id: "passing-and-yielding",
      heading: "Pass With Audible Warning and Extra Space",
      paragraphs: [
        "NPS trail guidance for GWMP requires cyclists to stay right, move left only to pass, and give ample audible warning. That means a clear bell ring or a calm voice—\"On your left\"—well before you arrive, not a startled shout from six inches back.",
        "Pass single-file users with at least an arm's length of space. If the path is too narrow for a safe pass, slow to walking speed and wait for a wider section. Never pass on blind corners or when oncoming traffic occupies the left side.",
        "When faster road cyclists or e-bike commuters approach from behind, hold a steady line and avoid wandering across the centerline. If you are the faster rider, patience beats risky passes around double-wide groups.",
      ],
      listItems: [
        "Yield to pedestrians and equestrians where equestrians are permitted.",
        "When stopped, stand off the pavement so through traffic is not blocked.",
        "At trail crossings, obey signals and dismount if signage requires it.",
        "Downhill sections still have speed limits—momentum is not an excuse to blow past families.",
      ],
    },
    {
      id: "pedestrians-dogs-and-kids",
      heading: "Extra Care Around Pedestrians, Dogs, and Children",
      paragraphs: [
        "Families and off-leash-adjacent dog traffic peak on Mid-Atlantic paths between late morning and dusk on weekends. Children and dogs change direction unpredictably. Reduce assist, keep both hands ready, and assume anyone ahead may stop without warning.",
        "When passing a dog, give wide berth and slow further—the motor can trigger chase behavior even when you are legal. Announce yourself early so the handler can shorten the leash.",
        "If a section feels too congested for safe e-bike travel— Cherry Blossom season near the Tidal Basin, holiday crowds on regional connectors—walk the bike or choose a less busy alternate route. One impatient pass can fuel a trail ban campaign.",
      ],
    },
    {
      id: "federal-and-regional-trails",
      heading: "Etiquette on NPS and NOVA Parks Trails",
      paragraphs: [
        "On George Washington Memorial Parkway trails, e-bikes follow bicycle rules but may not use throttle-only propulsion except where cars may go. Bicycles and e-bikes are prohibited on several natural-surface trails in Great Falls Park and on parkways themselves—check the GWMP compendium before detouring off the Mount Vernon Trail.",
        "NOVA Parks encourages e-bike riders on the W&OD to stay where traditional bicycles belong, respect hours, and yield to pedestrians and equestrians. Virginia law limits NOVA Parks from adopting rules that conflict with state e-bike statutes (§ 15.2-5704), but reckless operation can still draw police response from the county you are in.",
        "The C&O Canal National Historical Park allows e-bikes on the towpath where bicycles are permitted under NPS policy, with local segment restrictions. Pedaling is expected; pack patience for narrow, busy sections near Georgetown and Great Falls.",
      ],
    },
    {
      id: "battery-and-mechanical-safety",
      heading: "Battery Safety and Trailside Mechanical Courtesy",
      paragraphs: [
        "Lithium-ion batteries are safe when used as designed, but damaged packs, aftermarket chargers, and hot-vehicle storage increase fire risk. Charge with the manufacturer charger, inspect contacts after crashes, and never block a trail while troubleshooting a battery error.",
        "If you stop for a flat or dropped chain, move the bike fully off the path. E-bikes are heavier than analog bikes; ask before accepting help lifting someone else's bike, and warn helpers about motor weight at the rear wheel.",
        "Pack a bell, front light, and spare tube even on short urban segments—Mid-Atlantic weather shifts quickly and tunnel sections on the W&OD and MVT run dark at dusk.",
      ],
    },
    {
      id: "group-rides-and-advocacy",
      heading: "Group Rides, Events, and Being a Good Ambassador",
      paragraphs: [
        "Group e-bike rides should ride single file or no more than two abreast only when traffic is unimpeded—Virginia § 46.2-905 and Maryland § 21-1205 mirror traditional bike rules on roadways, and courtesy extends to trails. Large weekend pelotons on the Mount Vernon Trail create friction; split into smaller groups or ride during off-peak hours.",
        "GWMP limits organized events on the Mount Vernon Trail by season and participant count. Do not show up with a club of throttle-heavy e-bikes assuming open access.",
        "You represent every e-bike rider when you are on a shared path. Courteous passing, moderate speed, and compliance with class and throttle rules protect access for riders who depend on e-bikes for commuting, cargo, and mobility.",
      ],
    },
  ],
  faq: [
    {
      question: "What speed should I ride on Mid-Atlantic shared-use trails?",
      answer: "Follow posted limits first—GWMP caps bikes at 15 mph on designated trails. When no limit is posted, many riders aim for 12–15 mph around people and slower when passing. Legal maximum assist speed (20 or 28 mph) is not a safe trail speed in crowds.",
    },
    {
      question: "Can I use the throttle on the Mount Vernon Trail?",
      answer: "No. NPS policy for George Washington Memorial Parkway prohibits using the electric motor to move an e-bike without pedaling except where public motor vehicle use is allowed. Pedal while using assist on the trail.",
    },
    {
      question: "Do I have to yield to pedestrians on Virginia rail-trails?",
      answer: "Yes. E-bikes have the same duties as bicycles under Virginia § 46.2-904.1(A). NOVA Parks explicitly expects W&OD riders to yield to pedestrians and equestrians. Slow and pass only when safe.",
    },
    {
      question: "Are e-bikes allowed on natural-surface trails in Maryland?",
      answer: "Maryland § 21-1205.2(a)(2)(iii) allows agencies to regulate any e-bike class on nonmotorized natural-surface trails. Assume dirt singletrack is off limits unless the park explicitly permits e-bikes.",
    },
    {
      question: "What should I do if another trail user yells about e-bikes?",
      answer: "Stay calm, slow down, and confirm you are on a permitted segment for your bike class. If you are compliant, a friendly explanation of class and trail rules helps; if not, dismount or leave the restricted section. Report harassment to park staff only if behavior becomes unsafe.",
    },
    {
      question: "Can I ride two abreast on the W&OD Trail?",
      answer: "When the path is crowded, ride single file. Virginia allows two abreast on roadways only when traffic is not impeded (§ 46.2-905). On busy shared paths, single file is the practical standard even when not explicitly signed.",
    },
  ],
  relatedGuides: [
    "ebike-classes-explained",
    "riding-ebikes-in-virginia",
    "riding-ebikes-in-maryland",
  ],
};
