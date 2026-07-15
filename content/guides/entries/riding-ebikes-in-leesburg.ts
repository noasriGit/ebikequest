import type { Guide } from "@/types/guide";
import { withReviewDate } from "@/config/authors";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const ridingEbikesInLeesburg: Guide = {
  ...EDITORIAL_DEFAULTS,
  publishedAt: "2026-07-15",
  updatedAt: "2026-07-15",
  reviewedBy: withReviewDate("2026-07-15"),
  id: "guide-leesburg-local",
  title: "Riding E-Bikes in Leesburg, VA",
  category: "local-riding",
  description:
    "Leesburg e-bike guide: W&OD Trail access, western Loudoun riding, parking, Virginia class rules, and turnaround tips for Loudoun County.",
  slug: "riding-ebikes-in-leesburg",
  readingTimeMinutes: 10,
  jurisdictions: ["virginia"],
  sections: [
    {
      id: "overview",
      heading: "Overview: Leesburg's e-bike riding context",
      paragraphs: [
        "Leesburg sits on the Washington & Old Dominion Trail roughly 30 miles west of Shirlington—a natural turnaround town for western NOVA rides and a trailhead community for Loudoun County e-bike tourism. Virginia's three-class framework applies, with NOVA Parks governing the W&OD with a 20 mph powered-speed cap.",
        "Leesburg offers historic downtown dining, breweries, and bike shops within blocks of the trail. Western segments toward Purcellville continue through rolling Piedmont terrain with dusk closing rules west of Herndon that affect late return legs.",
        "Leesburg is a western turnaround town and trailhead—not a metro hub guide. For W&OD corridor detail, see /trails/virginia/washington-and-old-dominion-trail; for trail rankings, see /guides/best-ebike-trails-in-northern-virginia and /guides/best-long-distance-ebike-trails-va-md-dc.",
        "Fall charity rides often stage in Leesburg with heavy W&OD traffic on October Saturdays. Clarke's Gap west of town is a modest climb that can drain battery reserves on return legs—plan assist levels accordingly.",
        "Purcellville, roughly 15 miles west, marks the western terminus with depot-area services—a common half-day shuttle pairing with downtown Leesburg parking.",
        "Western Loudoun open farmland means longer gaps between water stops than eastern NOVA segments—carry extra bottles on summer rides toward Purcellville.",
      ],
    },
    {
      id: "best-places",
      heading: "Best places to ride nearby",
      paragraphs: [
        "The W&OD through Leesburg provides paved miles east toward Sterling and Ashburn or west toward Purcellville. Clarke's Gap near Leesburg marks one of the trail's higher elevation points—modest rollers rather than steep climbs.",
        "Purcellville, roughly 15 miles west, offers the western terminus with depot-area services. Shuttle rides between Leesburg and Purcellville are popular half-day options.",
        "Road routes beyond the trail into Loudoun wine country and countryside require on-road Virginia rules—Class 3 bikes excel on roads but may not suit unpaved farm lanes.",
      ],
    },
    {
      id: "beginner-routes",
      heading: "Beginner-friendly routes",
      paragraphs: [
        "Leesburg to Purcellville westbound covers flat-to-gentle terrain with open sight lines—good for beginners comfortable with 15-mile one-way distances or shorter out-and-backs from downtown.",
        "Eastbound toward Ashburn passes NOVA Parks headquarters—a popular rest stop with water and restrooms for family rides.",
        "Eastern W&OD segments near Vienna see heavier crowds; Leesburg offers a quieter western alternative for learning trail passing skills.",
      ],
    },
    {
      id: "commuting",
      heading: "Commuting considerations",
      paragraphs: [
        "Leesburg-to-employer commutes on the full W&OD exceed 30 miles one way to Arlington—feasible for dedicated e-bike commuters with charging at work but demanding on battery range.",
        "Shorter commutes within Loudoun use the trail between neighborhoods and Lansdowne, Ashburn, and Sterling employment centers.",
        "Dusk closing rules west of Herndon affect evening return timing—verify NOVA Parks seasonal hours before committing to a one-way ride from Leesburg to the eastern metro.",
      ],
    },
    {
      id: "class-rules",
      heading: "E-bike class and local rule notes",
      paragraphs: [
        "All compliant Virginia e-bike classes may use the W&OD with NOVA Parks' 20 mph operational cap. Class 3 is permitted on the trail but must respect the speed limit on the path.",
        "Loudoun County roads allow Class 3 at road speed limits where bicycles may travel. Helmets are mandatory for all Class 3 riders and passengers statewide.",
        "Virginia law summary: /laws/virginia. Trail class details: /guides/are-class-3-ebikes-allowed-on-trails.",
      ],
    },
    {
      id: "parking-access",
      heading: "Parking and access tips",
      paragraphs: [
        "Downtown Leesburg offers street parking near trail crossings—weekend demand increases during events and farmers markets.",
        "Purcellville West lot on Hatcher Street supports western terminus shuttle rides paired with Leesburg parking.",
        "NOVA Parks lists official lots along the corridor—consult the W&OD park page before planning one-way rides.",
      ],
    },
    {
      id: "before-riding",
      heading: "What to check before riding",
      paragraphs: [
        "Check NOVA Parks alerts for tree work and construction between Sterling and Purcellville. Dominion Energy maintenance can close segments temporarily.",
        "Carry water in summer—shade gaps widen in western Loudoun open farmland. Battery range planning matters for Leesburg-to-Shirlington distances.",
        "Long-distance roundup: /guides/best-long-distance-ebike-trails-va-md-dc.",
      ],
    },
    {
      id: "related",
      heading: "Related trails, laws, and guides",
      paragraphs: [
        "/laws/virginia. W&OD detail: /trails/virginia/washington-and-old-dominion-trail. NOVA guide: /guides/riding-ebikes-in-northern-virginia.",
        "Trail comparison: /guides/best-ebike-trails-in-northern-virginia.",
      ],
    },
    {
      id: "equipment",
      heading: "Equipment for western Loudoun e-bike rides",
      paragraphs: [
        "Western W&OD segments expose you to open wind and longer distances between water stops. Carry two bottles on summer rides toward Purcellville and consider a range buffer if you plan to return eastbound into a headwind.",
        "Leesburg bike shops can handle common repairs, but weekend wait times grow during fall charity rides. Learn to fix a flat tubeless or carry a spare tube compatible with your wheel size before attempting solo long rides.",
        "Cell service is generally reliable along the W&OD corridor, but inform someone of your shuttle plan if you park at Purcellville and ride one-way toward Leesburg or beyond.",
      ],
    },
    {
      id: "downtown",
      heading: "Downtown Leesburg and trail access",
      paragraphs: [
        "Historic downtown Leesburg sits a short ride from the W&OD corridor. Brick sidewalks and weekend market traffic make downtown better for walking your bike than riding—even when street connectors are legal for e-bikes.",
        "Coffee shops, breweries, and bike retailers cluster near the trail crossing, making Leesburg a natural lunch stop on western W&OD tours from the eastern metro.",
        "Loudoun County fair events and downtown festivals sometimes close street connectors to the trail. Check county event calendars before planning a Leesburg turnaround ride on holiday weekends.",
      ],
    },
    {
      id: "western-riding",
      heading: "Riding west toward Purcellville",
      paragraphs: [
        "The segment from Leesburg to Purcellville rolls through open Piedmont farmland with wider sight lines than eastern Fairfax segments. Wind matters more here—plan battery range with headwind margins on westbound legs.",
        "Dusk closing rules west of Herndon affect evening returns from Purcellville. If you shuttle one-way from Purcellville eastbound, you face fixed 9 p.m. limits only after you pass Herndon eastbound—verify seasonal NOVA Parks hours before planning night rides.",
        "Purcellville's western terminus offers a quieter alternative turnaround than Leesburg when eastern metro crowds push you west for space on autumn weekends.",
      ],
    },
    {
      id: "traffic-safety",
      heading: "Road crossings and rural connectors",
      paragraphs: [
        "Western W&OD road crossings increase in frequency toward Purcellville. Farm equipment and commuter traffic share narrow country approaches—use lights and bright clothing even on daylight rides.",
        "Leesburg Pike and Route 15 intersections near the trail require full stops. Drivers turning right on red often miss cyclists entering from trail exit ramps.",
        "Loudoun County continues building road bike lanes parallel to the trail in places, but gaps remain. Plan on-road segments separately from trail rules when GPS routes you onto highways without shoulders.",
      ],
    },
    {
      id: "local-resources",
      heading: "Where to verify Loudoun and W&OD updates",
      paragraphs: [
        "NOVA Parks is the authoritative source for W&OD hours, closures, and e-bike policy west of Arlington. Loudoun County tourism pages supplement trailhead parking notes but do not override park rules.",
        "Town of Leesburg event calendars list downtown closures that affect street connectors to the trail. Farmers markets and parades can block your planned lunch stop without closing the trail itself.",
        "Law summary: /laws/virginia. Long-distance context: /guides/best-long-distance-ebike-trails-va-md-dc.",
        "Purcellville area wineries and event venues sometimes overflow parking onto trail-adjacent roads on autumn weekends. Expect extra vehicle traffic near western trailheads even when the path itself is open.",
      ],
    },
  ],
  faq: [
    {
      question: "Are e-bikes allowed on the W&OD in Leesburg?",
      answer:
        "Yes. NOVA Parks permits e-bikes on the W&OD with motor-assisted speed capped at 20 mph. Leesburg is a popular midpoint and turnaround town.",
    },
    {
      question: "How far is Leesburg from Shirlington on the W&OD?",
      answer:
        "Roughly 30 miles of paved trail separate Shirlington and Leesburg— a long day ride or shuttle trip for most e-bike riders.",
    },
    {
      question: "Is Leesburg a good e-bike destination for tourists?",
      answer:
        "Yes. Historic downtown, trail-access dining, and connections toward Purcellville make Leesburg a natural western hub for W&OD rides without DC-area crowds.",
    },
    {
      question: "Can I ride Class 3 e-bikes in Leesburg?",
      answer:
        "Yes on roads and the W&OD with the 20 mph trail cap. Helmets are required for all Class 3 operators and passengers in Virginia.",
    },
    {
      question: "Where can I park for a W&OD ride in Leesburg?",
      answer:
        "Downtown street parking near trail crossings and NOVA Parks-listed lots along the corridor. Purcellville West lot supports western shuttle rides.",
    },
  ],
  relatedGuides: [
    "riding-ebikes-in-northern-virginia",
    "riding-ebikes-in-virginia",
    "best-ebike-trails-in-northern-virginia",
    "best-long-distance-ebike-trails-va-md-dc",
    "ebike-classes-explained",
    "mid-atlantic-trail-etiquette",
  ],
  relatedTrails: ["washington-and-old-dominion-trail"],
};
