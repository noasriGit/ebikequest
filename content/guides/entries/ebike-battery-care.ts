import type { Guide } from "@/types/guide";
import { EDITORIAL_DEFAULTS } from "../../_shared/defaults";

export const ebikeBatteryCare: Guide = {
  ...EDITORIAL_DEFAULTS,
  id: "guide-battery-care",
  title: "E-Bike Battery Care and Storage",
  category: "maintenance",
  description: "Charging, storage, and winter care tips to extend lithium e-bike battery life through humid Mid-Atlantic summers and cold winters.",
  slug: "ebike-battery-care",
  readingTimeMinutes: 11,
  sections: [
    {
      id: "overview",
      heading: "Why battery care matters on Mid-Atlantic rides",
      paragraphs: [
        "Your e-bike battery is the most expensive component you will replace over the life of the bike, and how you charge, store, and ride in Virginia, Maryland, and DC conditions has a direct effect on its lifespan. Mid-Atlantic riders face a distinctive mix of humid summers, freeze-thaw winters, and hilly terrain that drains packs faster than flat, dry climates.",
        "Most modern e-bikes use lithium-ion cells similar to those in laptops and electric cars. These cells degrade gradually through calendar aging and cycle wear. You cannot stop degradation entirely, but consistent habits—keeping charge levels moderate, avoiding heat stress, and storing batteries indoors—can add years of useful range before capacity noticeably drops.",
        "This guide focuses on practical owner habits, not manufacturer-specific firmware. Always cross-check your owner's manual for voltage limits, charger compatibility, and warranty conditions before changing how you charge or store your battery.",
      ],
    },
    {
      id: "charging-basics",
      heading: "Daily charging best practices",
      paragraphs: [
        "Charge after rides rather than leaving the battery empty for days. Deep discharge stresses lithium cells and can trigger protective shutdown modes that require dealer intervention on some systems. For daily commuters, plugging in when you get home and unplugging once full—or better, once the pack reaches roughly 80–90%—is a solid routine.",
        "Use only the charger supplied by your bike's manufacturer or an approved replacement matched to your battery's voltage and amp-hour rating. Mismatched chargers are a common cause of premature cell failure and, in rare cases, thermal events. Avoid cheap universal chargers unless the seller can confirm exact compatibility with your BMS (battery management system).",
        "Unplug the charger when charging completes, especially if you charge in a garage or shed where temperatures swing widely. Leaving a fully charged pack connected to a trickle charger at high ambient heat accelerates calendar aging even when you are not riding.",
      ],
      listItems: [
        "Charge at room temperature when possible; move the battery indoors if the bike lives outside.",
        "Avoid charging immediately after a hot ride; let the pack cool for 30–60 minutes first.",
        "Inspect charge ports and contacts for corrosion, especially if you ride wet rail-trails or salted winter roads.",
        "Never charge a battery that is swollen, cracked, or smells unusual—contact your shop or manufacturer.",
      ],
    },
    {
      id: "charge-levels",
      heading: "Optimal charge levels for storage and range",
      paragraphs: [
        "Lithium-ion batteries last longest when kept between roughly 20% and 80% state of charge during storage. Storing at 100% for weeks—common when riders 'top off' before a trip that keeps getting postponed—places cells under higher voltage stress and speeds capacity loss.",
        "If you will not ride for more than two weeks, aim for about 50–60% charge before storing the battery indoors. Many display systems show a percentage; if yours does not, a short ride after a partial charge or a timed top-up from a low level works well enough for most owners.",
        "For everyday riding, charging to full before a long weekend on the Great Allegheny Passage or New River Trail is reasonable. Just avoid leaving the pack at 100% in a hot car or sunny garage for days afterward.",
      ],
    },
    {
      id: "temperature",
      heading: "Temperature: summer humidity and winter cold",
      paragraphs: [
        "Heat is the silent killer of e-bike batteries. Parking a bike with an integrated battery in direct sun on a 95°F Arlington afternoon, then expecting full range on the Mount Vernon Trail, often leads to disappointment as the BMS derates output to protect cells. Remove removable batteries and store them in climate-controlled space when you can.",
        "Cold weather reduces available capacity temporarily. A battery that delivers 40 miles in April may show 25–30 miles in January on the W&OD or Northern Central Trail—not because it is failing, but because chemical reactions slow in low temperatures. Warm the battery indoors before riding when possible, and expect to use a lower assist level to preserve range.",
        "Never charge a frozen or near-freezing battery. If your pack feels ice-cold after garage storage, bring it inside until it reaches room temperature. Charging while cells are cold can cause lithium plating and permanent damage.",
      ],
    },
    {
      id: "storage",
      heading: "Long-term storage between seasons",
      paragraphs: [
        "Mid-Atlantic riders who pause commuting in winter or store a touring bike between multi-day trips should treat storage as active maintenance, not abandonment. Clean and dry the battery contacts, charge to roughly 50–60%, and check the level every 4–6 weeks. Self-discharge is slow but real; a pack that drains to zero over a winter may not recover cleanly.",
        "Store batteries off the concrete floor in a dry area—on a shelf or wood surface is fine. Humidity in coastal Virginia and Maryland basements can corrode terminals over time. A breathable cover or the original battery bag helps keep dust off connectors.",
        "If your bike uses a removable battery, take it inside even when the frame stays in the garage. Integrated batteries benefit from occasional wake-up rides or a mid-storage partial charge check.",
      ],
    },
    {
      id: "range-planning",
      heading: "Range planning on hilly Mid-Atlantic routes",
      paragraphs: [
        "Advertised range figures assume moderate assist, flat terrain, and a lightweight rider. Real Mid-Atlantic rides—climbing out of the Potomac gorge, grinding crushed limestone on High Bridge Trail, or fighting headwinds on open rail-trails—often deliver 60–70% of the brochure number.",
        "Plan charging stops for multi-day tours. Towns along the New River Trail and GAP corridor increasingly welcome cyclists, but dedicated public e-bike charging is still sparse. Carry your charger and ask permission at lodgings, libraries, or cafés rather than assuming outdoor outlets are available or safe.",
        "Lower assist levels, steady cadence, and proper tire pressure materially extend range. Save turbo mode for short climbs; use eco or tour modes on flat crushed-stone segments where momentum carries you.",
      ],
    },
    {
      id: "maintenance",
      heading: "Cleaning, transport, and physical care",
      paragraphs: [
        "Wash bikes gently; do not power-wash battery housings or submerged connection points. Use a damp cloth around the pack, dry contacts afterward, and keep charging ports covered when riding wet conditions on trails like the Capital Crescent or C&O Towpath.",
        "When transporting on a car rack, remove the battery when possible to reduce weight and theft risk. Heat from exhaust or trunk storage on long drives can elevate pack temperature; indoor removal is best for road trips to Shenandoah or Assateague.",
        "Loose mounts vibrate batteries against frame interfaces, wearing plastics and wiring. Check strap bolts and slide-rail locks monthly if you ride rough mixed-surface parks such as Powhatan or Patapsco.",
      ],
    },
    {
      id: "replacement",
      heading: "When to service or replace a battery",
      paragraphs: [
        "All batteries lose capacity over time. If your daily commute assist level no longer completes its usual loop without an extra charge, or range drops more than 20–25% in similar conditions versus last season, the pack may be aging normally—or a cell group may need diagnosis.",
        "Authorized dealers can often read error logs and perform BMS checks. Third-party rebuild services exist but may void warranties or use cells of uncertain quality. For most owners, a manufacturer replacement or dealer-sourced pack is the safer long-term choice.",
        "Recycle spent lithium-ion packs through municipal hazardous-waste programs or bike shops that participate in battery recycling. Do not discard batteries in household trash—Mid-Atlantic counties increasingly offer drop-off sites, and fire risk from damaged cells is real.",
      ],
    },
  ],
  faq: [
    {
      question: "Should I charge my e-bike battery after every ride?",
      answer: "For daily use, yes—topping up after rides keeps the pack out of deep discharge. If you ride short distances, you do not need to charge to 100% every time; partial top-ups between 30% and 80% are gentler on cell chemistry.",
    },
    {
      question: "Can I leave my charger plugged in overnight?",
      answer: "Quality chargers stop at full charge, but it is still better to unplug once complete—especially in warm rooms or garages. Overnight charging in a cool, dry indoor space is common and generally acceptable if you use the manufacturer charger.",
    },
    {
      question: "How do I store an e-bike battery over a Virginia or Maryland winter?",
      answer: "Charge to about 50–60%, store indoors in a dry area away from freezing temperatures, and check the charge every month or two. Avoid storing at 100% or near 0% for long periods.",
    },
    {
      question: "Why does my range drop so much in cold weather?",
      answer: "Low temperatures temporarily reduce lithium-ion efficiency. Range usually rebounds in spring. If range stays low in warm weather, the battery may be aging or need service.",
    },
    {
      question: "Is it safe to charge in my basement or garage?",
      answer: "Charge on a hard, non-flammable surface away from clutter, ideally where you can notice unusual heat or smell. Avoid charging unattended in extreme heat or directly next to fuel cans and solvents. Many owners charge in garages but bring removable batteries indoors in summer.",
    },
    {
      question: "How long should an e-bike battery last?",
      answer: "Many packs deliver 500–1,000 full-equivalent charge cycles before capacity drops noticeably, often translating to three to five years of regular Mid-Atlantic riding. Heat, full-charge storage, and daily deep discharges shorten that window.",
    },
  ],
  relatedGuides: [
    "buying-your-first-ebike",
    "mid-atlantic-trail-etiquette",
  ],
};
