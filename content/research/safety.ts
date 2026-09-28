export const safetyPage = {
  title: "E-Bike Safety and Classification",
  description:
    "How e-bike class, assisted speed, and local rules change where a bike can be ridden before you choose a model.",
  sections: [
    {
      id: "class-before-brand",
      heading: "Class comes before the brand",
      paragraphs: [
        "An e-bike purchase fails when the bike is legal on paper and unusable on the routes you actually ride. Assisted speed, throttle, and motor power decide which statute applies. The statute decides the path, the helmet rule, and sometimes whether the bike is an e-bike at all.",
        "eBikeQuest treats classification as a research step, not a marketing label. A model page states a class only when a cited source supports it — a manufacturer specification, a required class label, or a statute that defines the cutoff. If those sources disagree, the page says the class is not determined.",
      ],
    },
    {
      id: "three-class",
      heading: "The three-class framework",
      paragraphs: [
        "Many U.S. states, including Virginia and Maryland, use a three-class electric bicycle definition. The shared outline is below. It is a reading aid. The statute and the land manager still control.",
      ],
    },
    {
      id: "where-it-breaks",
      heading: "Where that framework does not travel",
      paragraphs: [
        "Washington DC does not sort e-bikes into Class 1, 2, and 3. District law uses a motorized-bicycle definition with its own speed cap. A bike sold as Class 3 in Virginia can fall outside that definition once it crosses into the District.",
        "Federal land is a second break. National Park Service and other federal managers can restrict e-bikes even where the surrounding state allows them. A statewide “allowed where bicycles are allowed” sentence does not answer a trailhead sign.",
        "Bikes that exceed the wattage or assisted-speed limits in a statute may not be e-bikes under that law. They can be treated as mopeds or motor vehicles, with license, registration, or insurance consequences. eBikeQuest will label that case as out of class when a source supports it, and as unclassified when it does not.",
      ],
    },
    {
      id: "what-we-publish",
      heading: "What a model page is allowed to claim",
      paragraphs: [
        "A published model profile separates three kinds of statement. Specifications quote a cited source. Class is either determined from those sources or explicitly left open. Hands-on testing is false unless eBikeQuest has ridden or measured the bike. A spec sheet is not a test.",
        "We do not publish scraped prices, star ratings, review counts, or copied customer comments. Retailer links, including Amazon when a direct product URL exists, are labeled and use a normal outbound link. They are not a rating and they are not a review.",
      ],
      listItems: [
        "Official or regulatory source for each factual spec we rely on",
        "Class left blank or marked unclassified when the source does not settle it",
        "Safety notices quoted from a recall, manual, or regulator when we have one",
        "Hands-on tested only after a real ride or measurement",
      ],
    },
    {
      id: "read-next",
      heading: "Read the rule, then the route",
      paragraphs: [
        "The class explainers and jurisdiction pages already on eBikeQuest are the detailed record. Use them before treating any shopping filter as an access promise.",
      ],
    },
  ],
  furtherReading: [
    { href: "/guides/ebike-classes-explained", label: "E-bike classes explained" },
    { href: "/guides/are-class-3-ebikes-allowed-on-trails", label: "Are Class 3 e-bikes allowed on trails?" },
    { href: "/guides/ebike-regulations-overview", label: "E-bike regulations overview" },
    { href: "/guides/buying-your-first-ebike", label: "Buying your first e-bike" },
    { href: "/laws", label: "E-bike laws" },
    { href: "/trails", label: "Trail directory" },
    { href: "/editorial-standards", label: "Editorial standards" },
  ],
} as const;
