export type JournalCategorySlug =
  | "animals"
  | "everyday-science"
  | "history"
  | "internet-culture"
  | "language"
  | "psychology"
  | "technology"
  | "weird-facts";

export type JournalPlaygroundLink = {
  label: string;
  href: string;
};

export type JournalSourceLink = {
  label: string;
  href: string;
};

export type JournalEntry = {
  slug: string;
  title: string;
  listingTitle?: string;
  featuredImage?: string;
  excerpt: string;
  category: string;
  categorySlug: JournalCategorySlug;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  series?: string;
  seoTitle?: string;
  metaDescription?: string;
  content: string[];
  relatedExperience: string;
  relatedExperienceLabel: string;
  relatedPlaygrounds?: JournalPlaygroundLink[];
  sources?: JournalSourceLink[];
  tags: string[];
  relatedSlugs?: string[];
  continuationCtaLabel?: string;
  continuationCtaHref?: string;
};

export type JournalCategory = {
  slug: JournalCategorySlug;
  label: string;
  description: string;
};

export const journalCategories: JournalCategory[] = [
  {
    slug: "technology",
    label: "Technology",
    description: "Small inventions and interface habits with bigger stories behind them.",
  },
  {
    slug: "psychology",
    label: "Psychology",
    description: "The attention tricks and mind habits that make ordinary moments feel strange.",
  },
  {
    slug: "animals",
    label: "Animals",
    description: "Tiny behaviors from the animal world that turn out to be wonderfully specific.",
  },
  {
    slug: "language",
    label: "Language",
    description: "Words, abbreviations, and phrases with backstories that refuse to stay simple.",
  },
  {
    slug: "history",
    label: "History",
    description: "Old habits, outdated ideas, and the strange reasons they stuck around.",
  },
  {
    slug: "everyday-science",
    label: "Everyday Science",
    description: "Familiar things with the kind of physics and biology that reward a second look.",
  },
  {
    slug: "internet-culture",
    label: "Internet Culture",
    description: "Shared web rituals, old codes, and digital habits the internet made famous.",
  },
  {
    slug: "weird-facts",
    label: "Weird Facts",
    description: "Curious truths that feel a little too strange to be ordinary.",
  },
];

export const journalEntries: JournalEntry[] = [
{
  "slug": "went-online-for-one-thing",
  "title": "I Went Online for One Thing and Came Back With 37 Tabs, a New Personality, and No Memory of Why I Opened My Phone",
  "listingTitle": "I Opened My Phone for One Thing. The Internet Had Other Plans.",
  "featuredImage": "/images/phone-tabs-axi.svg",
  "excerpt": "Ever opened your phone for one quick task and emerged 40 minutes later knowing everything except what you came to do? Welcome to the internet.",
  "category": "Internet Culture",
  "categorySlug": "internet-culture",
  "publishedAt": "2026-10-25",
  "updatedAt": "2026-10-25",
  "readingTime": "8 min read",
  "seoTitle": "I Opened My Phone for One Thing. The Internet Had Other Plans. | TrendParlour",
  "metaDescription": "Ever opened your phone for one quick task and emerged 40 minutes later knowing everything except what you came to do? Welcome to the internet.",
  "content": [
    "There was a time when a person could sit quietly for five minutes without needing external stimulation. They could stare out of a window. Watch a bird. Contemplate the meaning of life. Perhaps even finish a thought.",
    "Those people are gone.",
    "Today, if the Wi-Fi disappears for eleven seconds, we begin examining our lives like detectives in a crime documentary. Who are we? What are we doing here? Why is the router blinking like that? Is this how civilisation ends?",
    "Welcome to the modern internet, where a quick check of the weather can become a documentary about deep-sea creatures, three online purchases, and a sudden belief that you should learn Italian. You came for one thing. You left with 37 tabs, a new personality, and absolutely no memory of the original mission.",
    "## The Innocent Beginning",
    "Every internet adventure begins with a noble intention. You need to check the weather, reply to a message, or find out whether the supermarket is open. Maybe you are looking up the name of an actor who appeared in a film you watched three years ago. Simple tasks. Ordinary tasks. Tasks that should require the intellectual resources of a moderately alert goldfish.",
    "You unlock your phone with the focus of a surgeon. You open the browser. You type two words. Then an alert appears. Someone has sent you a video. It is apparently urgent. The thumbnail contains a dog wearing sunglasses, and the caption says, “I cannot believe this happened.” You are a responsible person, but you are not made of stone. You watch the video.",
    "The dog is not wearing sunglasses. It is wearing tiny goggles, which somehow makes the situation more compelling. The comments are funnier than the video. One comment leads to a profile. The profile leads to another video. Somewhere, the weather app is quietly wondering whether you are alive.",
    "## The Algorithm Knows You Better Than Your Family Does",
    "The internet has a remarkable talent for discovering what interests you. You pause on one clip about houseplants and suddenly every plant on Earth is being presented for your consideration. A fern appears. A cactus appears. A person explains why your peace lily is disappointed in you. You did not know plants could communicate disappointment. You now suspect yours has been keeping a diary.",
    "The algorithm notices that you watched a video about a tiny home in the woods. Within minutes, it has assembled an alternative life for you. You will live in a cabin, make sourdough, wear linen, and become the sort of person who says “the land is teaching me patience” while holding a mug the size of a flowerpot. In real life, you killed a basil plant while it was still in the supermarket bag.",
    "The algorithm does not judge. It simply remembers. You linger on a productivity video and it decides you are a productivity enthusiast. You watch one clip about budgeting and it sends you seventeen ways to save money, including a method that requires buying six storage containers and a label maker. It has no idea who you are, technically. Yet it knows you are likely to watch “Things You Didn’t Know You Needed” while avoiding the one thing you actually need to do.",
    "## The Group Chat Is a Social Experiment That Escaped the Laboratory",
    "No online journey is complete without a group chat. It can be a place of love, friendship, logistics, and the occasional blurry photograph that nobody can identify. It can also become a 186-message investigation into whether a person in the background of a video is someone’s cousin.",
    "One friend sends a meme. Another replies with seven crying emojis. A third asks what everyone is doing on Saturday. Nobody answers the question, but four people send more memes. By lunchtime, somebody has changed the group name to something that sounds like a failed government department. If you reply immediately, you appear available. If you reply three days later, you appear mysterious, busy, or possibly deceased.",
    "Voice notes introduce another layer of complexity. “Quick voice note” can mean twelve seconds or a full audio series with a beginning, middle, and unresolved emotional subplot. You press play expecting a simple update. Two minutes later, you know the speaker’s entire journey to the bus stop, the history of a disagreement from 2019, and the name of a person you have never met but now strongly dislike.",
    "And yet, you keep checking. The group chat is exhausting, confusing, and often the only place where a photo of burnt toast can receive the attention it deserves.",
    "## The Mysterious Disappearance of Five Minutes",
    "Time behaves strangely online. In the physical world, five minutes is enough to boil a kettle or stand in front of the fridge deciding whether cheese counts as a meal. Online, five minutes is a portal.",
    "You watch one short video. It is thirty seconds long. The next one is twenty seconds. The next is somehow about a man who has spent eleven years building a miniature railway in his garden. You do not care about miniature railways. You now care deeply about this man’s railway.",
    "Then you look up and discover that forty minutes have passed. The kettle is cold. Your food is still in the microwave. Your phone is warm enough to qualify as a minor household appliance. Your brain has retained a vague impression of a dancing parrot, an argument about pasta, and a person restoring a rusty knife. The details are gone. The time is gone. The knife, presumably, is now beautiful.",
    "## We Have Developed the Attention Span of a Microwave",
    "The internet has trained us to expect something interesting every few seconds. A pause feels suspicious. A loading circle feels personal. A long paragraph can trigger the same response as a fire alarm in a library. We read a headline, skim the first sentence, jump to the comments, and then confidently explain the story to someone else. We have absorbed the emotional atmosphere of the information without necessarily meeting the information itself.",
    "This is why you can watch a forty-minute video at double speed but struggle to listen to a friend explain their day without checking whether your phone has received a message that says “hey”. It has not. It has received a promotional notification about socks.",
    "We are surrounded by systems designed to make the next thing feel more urgent than the current thing. Every app wants a slice of our attention, and every slice arrives with confetti, a vibration, or a red number in a circle. Waiting for a bus? Phone. Standing in a queue? Phone. Walking from one room to another? Phone. We have reached the point where we would rather watch a stranger make lunch than experience the tiny miracle of being alive in a queue.",
    "Perhaps the solution is to put the phone down. But first, let us search for the best way to put a phone down. There are probably twelve videos about it.",
    "## Online Shopping: Because Apparently We Need More Things",
    "Shopping online begins with a practical need. You require a charger. You search for a charger. The internet offers chargers, cable organisers, a desk mat, a lamp shaped like a mushroom, and a device that claims to improve your posture by making sitting down feel like a competitive sport.",
    "You add the charger to your basket. Then you remember delivery is free if you spend a little more. Suddenly, you are the finance director of a company whose strategy is avoiding a £2.99 delivery fee by spending £24.99 on things you did not know existed.",
    "The basket becomes a museum of possible futures. There is the version of you who journals every morning, the version who makes perfect coffee, and the version who owns matching glass containers and never loses a lid. They all live in your basket, waiting for checkout to turn them into reality. Then the parcel arrives, and you place the item somewhere so safe you will never see it again until you move house.",
    "If the internet has ever made you question your attention span, your spending habits, or whether you have a personality outside the memes you share, meet the “My Life Is a Meme” mug. It is perfect for morning coffee, late-night scrolling, and pretending you have your life together during online meetings. You can [check out the “My Life Is a Meme” mug on Redbubble](https://www.redbubble.com/i/mug/My-life-is-a-meme-by-TMMDI/101670463/7yqg).",
    "It is a mug, not a complete life plan. But it can hold coffee while you reconsider the life plan, and that is a start.",
    "## The Internet Has Made Everyone an Expert",
    "A person watches one video about nutrition and becomes a nutrition consultant. Someone reads a thread about investing and begins speaking in charts. Another watches a documentary about ancient history and is suddenly prepared to challenge every museum in Europe. The confidence is impressive. The evidence is occasionally hiding behind a curtain.",
    "The internet is genuinely wonderful for learning. It can help you repair a tap, understand a complicated topic, learn a language, or discover that the noise your washing machine makes is not the sound of a small aircraft attempting take-off. But the same search bar that brings you a university lecture can bring you a stranger explaining that all historical events were secretly caused by a missing sandwich.",
    "The challenge is not finding information. It is figuring out which information deserves your trust. If a post makes you instantly furious, instantly superior, or instantly certain that everyone else is an idiot, pause before sharing it. Certainty is not proof. A dramatic thumbnail is not a qualification. And “I did my own research” is not a bibliography.",
    "You can be curious without pretending to know everything. In fact, curiosity works better when you leave a little room for “I might be wrong”. The internet has enough loud certainty already. It could use a few more people who are willing to check.",
    "## So Why Do We Keep Coming Back?",
    "Because the internet is not only a machine for stealing time. It is also where people find friends, learn astonishing things, laugh at the same ridiculous animal, discover communities, and feel less alone in a very large world. A stranger’s joke can rescue a difficult afternoon. A free tutorial can teach you a skill that changes your career. A niche interest can lead you to thousands of people who are equally delighted by it.",
    "The problem is not that the internet is all bad. The problem is that the good stuff sits beside endless noise, and the noise has learned how to shout in neon.",
    "We do not need to abandon the internet and move into a cabin with our sourdough starter. We could begin with smaller acts of rebellion. Open the app with a purpose. Turn off a few notifications. Leave a group chat unread until you have the energy for it. Put the phone across the room while you eat. Remember that a video can wait, even if its caption insists it cannot.",
    "And when you do fall down a rabbit hole, make it a good one. Learn why the moon looks larger near the horizon. Find out how octopuses taste with their arms. Discover a weird corner of history. Laugh at something so silly you have to send it to three friends immediately. Curiosity is a lovely thing. It just deserves to be the driver sometimes, instead of a passenger tied to the roof of an algorithm-powered bus.",
    "## A Final Experiment",
    "The next time you pick up your phone, say out loud what you intend to do. “I am checking the weather.” “I am replying to my sister.” “I am looking up whether the shop is open.” Then do that thing. Close the app. Put the phone down. Enjoy the quiet victory of a mission completed.",
    "If you get distracted, do not panic. You are human. The internet is designed by people who have studied how humans behave, and some of them have budgets larger than small countries. You were never going to win every round. But you can choose what happens next: return to your original task, or deliberately explore something interesting instead of drifting into it by accident.",
    "If you have a spare moment after that, come over to TrendParlour and tap [Surprise Me](/surprise). We cannot promise you will leave with fewer tabs, but we can promise a fresh little detour with a purpose.",
    "Now, if you will excuse me, I need to check the weather. I have opened seventeen tabs and accidentally learned how to make cheese."
  ],
  "relatedExperience": "/surprise",
  "relatedExperienceLabel": "Try Surprise Me",
  "relatedPlaygrounds": [
    {
      "label": "Surprise Me",
      "href": "/surprise"
    },
    {
      "label": "Make me laugh",
      "href": "/laugh"
    },
    {
      "label": "Let me play",
      "href": "/play"
    }
  ],
  "tags": [
    "internet culture",
    "attention span",
    "social media",
    "online shopping",
    "memes",
    "digital habits",
    "humour"
  ],
  "relatedSlugs": [
    "why-did-the-internet-invent-the-404-error",
    "why-is-ok-such-a-strange-word"
  ],
  "continuationCtaLabel": "Surprise me with something else →",
  "continuationCtaHref": "/surprise"
},
  {
    slug: "why-is-a-computer-mouse-called-a-mouse",
    title: "Why is a computer mouse called a mouse?",
    excerpt:
      "A pointing device got a mammal name because the shape, cord, and feel were easier to remember than its circuitry.",
    category: "Technology",
    categorySlug: "technology",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-05",
    readingTime: "4 min read",
    content: [
      "The original mouse was a small, hand-sized pointing device built in the 1960s, and one of its early prototypes had a cable trailing out the back like a tail.",
      "That gave people an easy visual hook. Instead of a dry technical label, they got a word that felt familiar, compact, and slightly mischievous.",
      "The name stuck because it described the thing you could see at a glance: a little object that sat on the desk and scurried the cursor around the screen.",
    ],
    relatedExperience: "/challenge",
    relatedExperienceLabel: "Test your reflexes",
    relatedPlaygrounds: [
      { label: "Test your reflexes", href: "/challenge" },
      { label: "Play a mini game", href: "/play" },
    ],
    tags: ["technology", "design", "history"],
    relatedSlugs: ["why-did-the-internet-invent-the-404-error", "why-is-ok-such-a-strange-word"],
  },
  {
    slug: "why-does-your-brain-notice-your-name-in-a-noisy-room",
    title: "Why does your brain notice your name in a noisy room?",
    excerpt:
      "Your attention is not a single spotlight. It is a filter that keeps checking for personally important signals.",
    category: "Psychology",
    categorySlug: "psychology",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-06",
    readingTime: "5 min read",
    content: [
      "The effect is often called the cocktail party effect. Even when a room is loud, your brain keeps a background watch for cues that matter to you.",
      "Your own name is one of those cues. It is familiar, meaningful, and linked to you so strongly that it can break through the noise.",
      "That does not mean your brain is listening to everything equally. It means some information gets priority before the rest of the room reaches full awareness.",
    ],
    relatedExperience: "/challenge",
    relatedExperienceLabel: "Test your reflexes",
    relatedPlaygrounds: [
      { label: "Test your reflexes", href: "/challenge" },
      { label: "Play a mini game", href: "/play" },
    ],
    tags: ["psychology", "attention", "perception"],
    relatedSlugs: ["why-is-ok-such-a-strange-word", "why-did-the-internet-invent-the-404-error"],
  },
  {
    slug: "why-do-cats-purr",
    title: "Why do cats purr?",
    excerpt:
      "A purr is a tiny engine of vibration: comforting, communicative, and still a little mysterious.",
    category: "Animals",
    categorySlug: "animals",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-06",
    readingTime: "3 min read",
    content: [
      "Cats purr while resting, but also in other situations, so the sound is not just a single mood in audio form.",
      "The vibration appears to come from muscles around the larynx and airflow through the voice box, though researchers still debate every detail of the mechanism.",
      "What is clear is that purring can be part of comfort, communication, and perhaps self-soothing. A cat is doing more than making a cute noise.",
    ],
    relatedExperience: "/surprise",
    relatedExperienceLabel: "Open a surprise discovery",
    relatedPlaygrounds: [
      { label: "Open a surprise discovery", href: "/surprise" },
      { label: "See something weird", href: "/weird" },
    ],
    tags: ["animals", "behavior", "sound"],
    relatedSlugs: ["why-does-ice-float-in-water", "why-do-bananas-curve"],
  },
  {
    slug: "why-is-ok-such-a-strange-word",
    title: "Why is OK such a strange word?",
    excerpt:
      "Two letters became one of the most useful words in the language, and its history is delightfully messy.",
    category: "Language",
    categorySlug: "language",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-06",
    readingTime: "4 min read",
    content: [
      "OK took off in 19th-century American newspaper humor, where playful abbreviations and deliberate misspellings were common currency.",
      "It later got a push from political campaigning, which helped turn a joke into a durable everyday word.",
      "The result is a tiny linguistic oddity that works as an answer, a pause, a reassurance, and sometimes a shrug.",
    ],
    relatedExperience: "/would-you-rather",
    relatedExperienceLabel: "Try a would-you-rather dilemma",
    relatedPlaygrounds: [
      { label: "Try a would-you-rather dilemma", href: "/would-you-rather" },
      { label: "Make me laugh", href: "/laugh" },
    ],
    tags: ["language", "etymology", "internet"],
    relatedSlugs: ["why-is-a-computer-mouse-called-a-mouse", "why-did-the-internet-invent-the-404-error"],
  },
  {
    slug: "why-did-people-use-leeches-in-medicine",
    title: "Why did people use leeches in medicine?",
    excerpt:
      "Leeches were not a random medical quirk. They made sense inside an older theory of how the body stayed balanced.",
    category: "History",
    categorySlug: "history",
    publishedAt: "2026-08-05",
    updatedAt: "2026-08-06",
    readingTime: "4 min read",
    content: [
      "For centuries, many doctors worked with the idea that illness came from imbalanced humors. Within that framework, bloodletting seemed reasonable rather than bizarre.",
      "Leeches were useful because they could remove blood in a controlled way, and their saliva contains compounds that prevent clotting. That made them practical long before modern medicine had better options.",
      "Today, leeches still have a small place in some reconstructive procedures. That makes them one of history’s strangest medical tools to survive into the present.",
    ],
    relatedExperience: "/weird",
    relatedExperienceLabel: "See something weird",
    relatedPlaygrounds: [
      { label: "See something weird", href: "/weird" },
      { label: "Open a surprise discovery", href: "/surprise" },
    ],
    tags: ["history", "medicine", "science"],
    relatedSlugs: ["why-is-ok-such-a-strange-word", "why-did-the-internet-invent-the-404-error"],
  },
  {
    slug: "why-does-ice-float-in-water",
    title: "Why does ice float in water?",
    excerpt:
      "Water breaks a common rule when it freezes, and that odd behavior helps shape life on Earth.",
    category: "Everyday Science",
    categorySlug: "everyday-science",
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-07",
    readingTime: "4 min read",
    content: [
      "Most liquids become denser as they cool, but water is unusual. When it freezes, hydrogen bonds arrange the molecules into an open crystal structure.",
      "That open structure makes ice less dense than liquid water, which is why it floats instead of sinking.",
      "Floating ice insulates the water below it, helping ponds and lakes stay livable for fish and other creatures during winter.",
    ],
    relatedExperience: "/surprise",
    relatedExperienceLabel: "Open a surprise discovery",
    relatedPlaygrounds: [
      { label: "Open a surprise discovery", href: "/surprise" },
      { label: "See something weird", href: "/weird" },
    ],
    tags: ["science", "water", "physics"],
    relatedSlugs: ["why-do-bananas-curve", "why-do-cats-purr"],
  },
  {
    slug: "why-did-the-internet-invent-the-404-error",
    title: "Why did the internet invent the 404 error?",
    excerpt:
      "A missing page needed a small, universal way to say so, and 404 became the web’s polite shrug.",
    category: "Internet Culture",
    categorySlug: "internet-culture",
    publishedAt: "2026-08-07",
    updatedAt: "2026-08-08",
    readingTime: "4 min read",
    content: [
      "404 is an HTTP status code for a page that could not be found. The server is there, but the requested address is not.",
      "The exact origin story is less mythic than people sometimes expect, but the code became part of the web’s shared vocabulary because it was short, consistent, and easy to standardize.",
      "That is the internet in miniature: a tiny signal that quietly tells millions of people the same thing at the same time.",
    ],
    relatedExperience: "/play",
    relatedExperienceLabel: "Play a mini game",
    relatedPlaygrounds: [
      { label: "Play a mini game", href: "/play" },
      { label: "Try a would-you-rather dilemma", href: "/would-you-rather" },
    ],
    tags: ["internet", "web", "design"],
    relatedSlugs: ["why-is-a-computer-mouse-called-a-mouse", "why-is-ok-such-a-strange-word"],
  },
  {
    slug: "why-do-bananas-curve",
    title: "Why do bananas curve?",
    excerpt:
      "The banana’s shape comes from growth, gravity, and a plant’s quiet attempt to keep reaching upward.",
    category: "Weird Facts",
    categorySlug: "weird-facts",
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-09",
    readingTime: "4 min read",
    content: [
      "Bananas do not begin life as a finished crescent. As the fruit develops, it hangs downward from the bunch while also growing toward light.",
      "That changing orientation creates a gentle tug-of-war between gravity and growth, which helps shape the final curve.",
      "The result looks almost designed, but it is really the product of a plant following a very ordinary set of rules in an unusual combination.",
    ],
    relatedExperience: "/weird",
    relatedExperienceLabel: "See something weird",
    relatedPlaygrounds: [
      { label: "See something weird", href: "/weird" },
      { label: "Open a surprise discovery", href: "/surprise" },
    ],
    tags: ["weird facts", "plants", "science"],
    relatedSlugs: ["why-does-ice-float-in-water", "why-do-cats-purr"],
  },
  {
    slug: "bone-collector-caterpillar",
    title: "The Bone Collector: The Caterpillar That Wears Dead Bodies",
    excerpt:
      "Meet Hawaii's bizarre bone collector caterpillar: a carnivorous caterpillar that lives in spider webs, wears dead insects and even eats its own kind.",
    category: "Nature / Weird",
    categorySlug: "weird-facts",
    publishedAt: "2026-08-10",
    updatedAt: "2026-08-10",
    readingTime: "4-5 min read",
    series: "Nature Has Lost the Plot",
    seoTitle: "The Bone Collector Caterpillar That Wears Dead Bodies | TrendParlour",
    metaDescription:
      "Meet Hawaii's bizarre bone collector caterpillar: a carnivorous caterpillar that lives in spider webs, wears dead insects and even eats its own kind.",
    content: [
      "Forget butterflies.",
      "Somewhere in the forests of Hawaii, there is a caterpillar that lives inside a spider's web, steals the spider's leftovers, wears dead insects on its back, and eats other caterpillars.",
      "And somehow, scientists think it's **kind of adorable.**",
      "Meet the **bone collector caterpillar**.",
      "Yes. That is its actual nickname.",
      "## This Is Not The Very Hungry Caterpillar",
      "In April 2025, researchers from the University of Hawaiʻi at Mānoa revealed one of the strangest creatures ever documented.",
      "They found it in the Waiʻanae mountains on Oʻahu, living inside spider webs.",
      "At first, they weren't even sure they were looking at a caterpillar.",
      "It looked more like a tiny moving sack of rubbish.",
      "Then the sack moved.",
      "Inside was a caterpillar.",
      "And on top of the caterpillar?",
      "**Dead insects.**",
      "Fly wings. Ant heads. Beetle parts. Weevil heads. Earwig remains. Even pieces of dead spiders.",
      "It had basically turned itself into a walking corpse collection.",
      "Nature had invented a goth handbag.",
      "## It Lives In A Spider's Web",
      "This is where things get ridiculous.",
      "Most caterpillars eat plants. Leaves, flowers, stems, the usual green buffet.",
      "The bone collector decided that was boring.",
      "Instead, it lives inside spider webs and eats insects that the spider has already caught.",
      "Think about that for a second.",
      "The caterpillar has moved into the spider's house.",
      "The spider's house is a giant trap designed to catch and kill things like caterpillars.",
      "And the caterpillar is sitting there eating the spider's leftovers.",
      "It's essentially living inside a lion's kitchen and ordering takeaway.",
      "Researchers believe this works because the caterpillar isn't behaving like prey.",
      "By covering itself with insect remains and shed material from the web, it appears to disguise its presence as nothing more interesting than discarded spider debris.",
      "In other words:",
      "**It evolved to look like garbage.**",
      "And somehow, that is brilliant.",
      "## But Why Wear Corpses?",
      "The bone collector belongs to the Hawaiian moth genus *Hyposmocoma*, whose caterpillars are famous for building portable silk cases.",
      "Other species decorate their cases with things like wood, algae, or shells.",
      "The bone collector looked at the family tradition and apparently decided:",
      "**\"What if we used dead bugs?\"**",
      "Researchers observed the caterpillars selecting pieces of insects and attaching them to their silk cases.",
      "And they weren't just randomly grabbing whatever was nearby.",
      "They appeared to choose specific pieces and adjust them to fit.",
      "Give one a collection of ordinary materials and insect remains, and it will repeatedly choose the dead insects.",
      "It's not decorating.",
      "It's curating.",
      "The caterpillar isn't carrying luggage.",
      "**It's carrying trophies.**",
      "## And Yes, It Eats Its Own Kind",
      "Here's where the story gets even darker.",
      "Researchers placed two bone collector caterpillars together.",
      "The larger one attacked and ate the smaller one.",
      "So much for community spirit.",
      "This may help explain why researchers typically find only one bone collector living in a spider web.",
      "There is no shared apartment.",
      "No caterpillar flatmate situation.",
      "Just one tiny corpse-wearing predator enjoying an all-you-can-eat buffet.",
      "And if another bone collector moves in?",
      "The buffet gets a new item.",
      "## It's Older Than Oʻahu",
      "Here's the part that makes this creature even more fascinating.",
      "Genetic evidence suggests the bone collector's lineage separated from other *Hyposmocoma* moths at least **six million years ago**.",
      "That's older than the modern island of Oʻahu.",
      "Its ancestors likely lived on older Hawaiian islands that have since eroded and disappeared beneath the Pacific.",
      "Over millions of years, their descendants moved through the Hawaiian archipelago and evolved into increasingly specialised creatures.",
      "The bone collector found one particularly bizarre niche:",
      "**live in spider webs, steal spider food, and wear dead insects.**",
      "Evolution really does have an imagination problem.",
      "Except this time, the problem is that it has too much imagination.",
      "## And There Are Barely Any Left",
      "Despite surviving for millions of years, the bone collector is now extremely rare.",
      "After more than two decades of field surveys, researchers documented only **62 individuals**.",
      "The species survives in a tiny area of forest, roughly 15 square kilometres.",
      "And it faces threats from invasive species, feral pigs, and habitat loss.",
      "Which means this bizarre little creature may disappear before most of the world even knows it exists.",
      "That's the strange tragedy of evolution.",
      "A creature can survive for millions of years, develop one of the most absurd survival strategies imaginable, and still be defeated by a habitat disappearing underneath it.",
      "## Nature Didn't Get The Memo",
      "We tend to imagine evolution as a process that produces elegant things.",
      "Wings.",
      "Camouflage.",
      "Sharp claws.",
      "Speed.",
      "The bone collector went in another direction.",
      "It became a caterpillar that:",
      "- lives inside spider webs",
      "- steals the spider's food",
      "- wears dead insects",
      "- disguises itself as rubbish",
      "- hunts other caterpillars",
      "- and occasionally eats its own kind",
      "And somehow...",
      "**it works.**",
      "That's what makes the bone collector so fascinating.",
      "It isn't a monster.",
      "It isn't a failed experiment.",
      "It is an extraordinarily specialised survivor.",
      "Millions of years of evolution looked at a tiny Hawaiian forest and arrived at this:",
      "**\"Let's make a caterpillar that wears corpses.\"**",
      "And nobody can argue with the results.",
      "So the next time you see an ordinary caterpillar quietly chewing on a leaf, spare it a little respect.",
      "Because somewhere in Hawaii, its much stranger cousin is crawling through a spider's web wearing a weevil's head on its back.",
      "And honestly?",
      "**We have absolutely no idea what evolution is going to come up with next.** 🐛💀",
    ],
    relatedExperience: "/surprise",
    relatedExperienceLabel: "Open a surprise discovery",
    relatedPlaygrounds: [
      { label: "Open a surprise discovery", href: "/surprise" },
      { label: "Browse the Curiosity Journal", href: "/journal" },
    ],
    sources: [
      {
        label: "University of Hawaiʻi at Mānoa reporting on the bone collector caterpillar discovery (2025).",
        href: "https://manoa.hawaii.edu/news/article.php?aId=14155",
      },
      {
        label: "Science (2025): research describing the bone collector caterpillar and its web-dwelling behavior.",
        href: "https://www.science.org/doi/10.1126/science.adu2201",
      },
    ],
    tags: [
      "bone collector caterpillar",
      "bone collector caterpillar Hawaii",
      "caterpillar that wears dead bodies",
      "caterpillar that wears dead insects",
      "carnivorous caterpillar",
      "Hyposmocoma",
      "strange animals",
      "bizarre caterpillars",
      "nature has lost the plot",
    ],
    relatedSlugs: ["why-do-cats-purr", "why-do-bananas-curve"],
    continuationCtaLabel: "Still curious? Explore another strange discovery in the Curiosity Journal →",
    continuationCtaHref: "/journal",
  },
];

export function getJournalCategoryBySlug(slug: string) {
  return journalCategories.find((category) => category.slug === slug);
}

export function getJournalEntryBySlug(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}

export function getJournalEntriesByCategory(categorySlug?: string | null) {
  if (!categorySlug) {
    return journalEntries;
  }

  return journalEntries.filter((entry) => entry.categorySlug === categorySlug);
}

export function getRelatedEntries(slug: string) {
  const entry = getJournalEntryBySlug(slug);
  if (!entry) {
    return [];
  }

  const related = entry.relatedSlugs
    ? entry.relatedSlugs
        .map((relatedSlug) => getJournalEntryBySlug(relatedSlug))
        .filter((item): item is JournalEntry => Boolean(item))
    : [];

  return related.slice(0, 2);
}
