import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ServicePageHero from "@/components/sections/ServicePageHero";
import CTA from "@/components/sections/CTA";
import { SITE_URL } from "@/lib/utils";
import { breadcrumbSchema } from "@/lib/schema";

interface RelatedItem {
  label: string;
  href: string;
  type: "service" | "post";
}

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
  related: RelatedItem[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "moving-house-checklist",
    title: "The Ultimate Moving House Checklist for Warrington Residents",
    description: "Moving house in Warrington? Our comprehensive checklist covers everything from 8 weeks before your move to the big day itself.",
    category: "Moving Tips",
    date: "2024-12-01",
    readTime: "8 min read",
    related: [
      { label: "House Removals Warrington", href: "/house-removals", type: "service" },
      { label: "Man & Van Warrington", href: "/man-and-van", type: "service" },
      { label: "Furniture Removals", href: "/furniture-removals", type: "service" },
      { label: "How Much Do Removals Cost?", href: "/blog/how-much-do-removals-cost", type: "post" },
      { label: "Expert Packing Tips", href: "/blog/packing-tips-house-move", type: "post" },
      { label: "Removals Warrington", href: "/warrington-removals", type: "service" },
    ],
    content: `
      <h2>8 Weeks Before Moving Day</h2>
      <ul>
        <li>Get <a href="/house-removals" class="text-brand-600 hover:underline font-medium">removal quotes from at least 3 companies</a> — including JMC Removals. Booking early secures your date and often saves money.</li>
        <li>Book your chosen <a href="/warrington-removals" class="text-brand-600 hover:underline font-medium">removal company in Warrington</a> early (especially for weekend or month-end moves)</li>
        <li>Begin decluttering — sell, donate or dispose of items you no longer need. Our <a href="/house-clearance" class="text-brand-600 hover:underline font-medium">house clearance service</a> can help remove unwanted items before the move.</li>
        <li>Notify your solicitor of your intended moving date</li>
        <li>Start collecting <a href="/blog/packing-tips-house-move" class="text-brand-600 hover:underline font-medium">packing materials</a> — boxes, tape, bubble wrap</li>
      </ul>

      <h2>4 Weeks Before Moving Day</h2>
      <ul>
        <li>Confirm your moving date with JMC Removals</li>
        <li>Start packing non-essential items — read our <a href="/blog/packing-tips-house-move" class="text-brand-600 hover:underline font-medium">expert packing tips</a> to protect your belongings</li>
        <li>Notify utility companies (gas, electricity, water, broadband) of your move</li>
        <li>Redirect your post via Royal Mail</li>
        <li>Notify your bank, employer, HMRC, DVLA and GP of your new address</li>
        <li>Arrange childcare or pet care for moving day</li>
        <li>If you have <a href="/furniture-removals" class="text-brand-600 hover:underline font-medium">large or specialist furniture</a> — pianos, antiques, wardrobes — let your removal company know in advance</li>
      </ul>

      <h2>2 Weeks Before Moving Day</h2>
      <ul>
        <li>Pack most of your belongings, leaving only daily essentials</li>
        <li>Label every box clearly with contents and destination room</li>
        <li>Defrost the freezer</li>
        <li>Return borrowed items and collect items on loan</li>
        <li>Confirm all booking details with JMC Removals</li>
        <li>If you have items currently in storage, arrange <a href="/storage-collection" class="text-brand-600 hover:underline font-medium">storage collection and delivery</a> for moving day</li>
      </ul>

      <h2>The Day Before</h2>
      <ul>
        <li>Pack a "first night" box with essentials — kettle, tea, toiletries, chargers, bedding</li>
        <li>Dismantle beds and flat-pack furniture (JMC Removals can assist with this)</li>
        <li>Ensure all items are packed and ready for loading</li>
        <li>Confirm access details with JMC Removals</li>
      </ul>

      <h2>Moving Day</h2>
      <ul>
        <li>Be ready when the removal team arrives</li>
        <li>Direct the team to items requiring special care</li>
        <li>Do a final sweep of every room, cupboard, loft and garage</li>
        <li>Take meter readings at both properties</li>
        <li>Hand over keys to your old property</li>
        <li>Collect keys to your new home</li>
      </ul>

      <p>For smaller moves or single-item transport, our <a href="/man-and-van" class="text-brand-600 hover:underline font-medium">man and van service</a> may be a more cost-effective option. Wondering about costs? See our guide on <a href="/blog/how-much-do-removals-cost" class="text-brand-600 hover:underline font-medium">how much house removals cost in Warrington</a>.</p>
    `,
  },
  {
    slug: "how-much-do-removals-cost",
    title: "How Much Do House Removals Cost in Warrington? (2025 Guide)",
    description: "Wondering what removals cost in Warrington? We break down the factors that affect removal prices and give realistic price ranges for different property sizes.",
    category: "Costs & Pricing",
    date: "2024-11-20",
    readTime: "6 min read",
    related: [
      { label: "House Removals Warrington", href: "/house-removals", type: "service" },
      { label: "Man & Van Warrington", href: "/man-and-van", type: "service" },
      { label: "House Clearance Warrington", href: "/house-clearance", type: "service" },
      { label: "Moving House Checklist", href: "/blog/moving-house-checklist", type: "post" },
      { label: "Man & Van vs Removal Company", href: "/blog/man-and-van-vs-removal-company", type: "post" },
      { label: "Removals Warrington", href: "/warrington-removals", type: "service" },
    ],
    content: `
      <h2>House Removal Costs in Warrington — An Overview</h2>
      <p><a href="/house-removals" class="text-brand-600 hover:underline font-medium">House removal costs in Warrington</a> vary significantly depending on a number of factors. Understanding what affects the price helps you budget more accurately and ensures you're comparing like-for-like when getting quotes from removal companies.</p>

      <h2>Factors That Affect Removal Costs</h2>
      <ul>
        <li><strong>Property size</strong> — the number of bedrooms and amount of furniture</li>
        <li><strong>Distance</strong> — local moves within Warrington cost less than long-distance moves</li>
        <li><strong>Day of the week</strong> — Fridays and weekends are more expensive</li>
        <li><strong>Additional services</strong> — packing, dismantling, <a href="/storage-collection" class="text-brand-600 hover:underline font-medium">storage collection</a></li>
        <li><strong>Access</strong> — narrow roads, stairs, limited parking</li>
        <li><strong>Specialist items</strong> — pianos, antiques, safes. See our <a href="/furniture-removals" class="text-brand-600 hover:underline font-medium">furniture removals service</a> for specialist handling.</li>
      </ul>

      <h2>Typical Removal Costs in Warrington (2025)</h2>
      <ul>
        <li><strong>1-bedroom flat:</strong> £250 – £450</li>
        <li><strong>2-bedroom house:</strong> £350 – £600</li>
        <li><strong>3-bedroom house:</strong> £500 – £850</li>
        <li><strong>4-bedroom house:</strong> £700 – £1,200</li>
        <li><strong>5+ bedroom house:</strong> £1,000 – £2,000+</li>
      </ul>

      <h2>Man & Van Rates in Warrington</h2>
      <p>For smaller moves, our <a href="/man-and-van" class="text-brand-600 hover:underline font-medium">man and van service in Warrington</a> is available from £60–£80 per hour. Half-day and full-day rates are also available, making it ideal for studio flats, student moves or single-item transport.</p>
      <p>Not sure whether a man and van or full removal company is right for you? Read our guide: <a href="/blog/man-and-van-vs-removal-company" class="text-brand-600 hover:underline font-medium">Man & Van vs Removal Company — which should you choose?</a></p>

      <h2>House Clearance Costs</h2>
      <p>If you need a <a href="/house-clearance" class="text-brand-600 hover:underline font-medium">house clearance in Warrington</a> before or after your move, prices start from around £250 for a partial clearance and £400+ for a full property clearance. We always provide a free, no-obligation quote before starting any work.</p>

      <h2>How to Save on Removal Costs</h2>
      <ul>
        <li>Book a mid-week removal (Tuesday to Thursday)</li>
        <li>Avoid month-end moves when demand is highest</li>
        <li>Pack yourself rather than using a packing service — see our <a href="/blog/packing-tips-house-move" class="text-brand-600 hover:underline font-medium">expert packing tips</a></li>
        <li>Declutter before your move to reduce the volume of items</li>
        <li>Get multiple quotes — JMC Removals always provides free, no-obligation quotes</li>
      </ul>

      <p>Ready to get an accurate quote for your <a href="/warrington-removals" class="text-brand-600 hover:underline font-medium">removal in Warrington</a>? Contact JMC Removals today — we respond within 2 hours and all quotes are completely free.</p>
    `,
  },
  {
    slug: "packing-tips-house-move",
    title: "10 Expert Packing Tips to Protect Your Belongings During a Move",
    description: "Packing properly is the key to a successful house move. Our removal experts share their top packing tips to keep your belongings safe in transit.",
    category: "Moving Tips",
    date: "2024-11-05",
    readTime: "7 min read",
    related: [
      { label: "House Removals Warrington", href: "/house-removals", type: "service" },
      { label: "Furniture Removals", href: "/furniture-removals", type: "service" },
      { label: "Storage Collection", href: "/storage-collection", type: "service" },
      { label: "Moving House Checklist", href: "/blog/moving-house-checklist", type: "post" },
      { label: "How Much Do Removals Cost?", href: "/blog/how-much-do-removals-cost", type: "post" },
      { label: "Removals Warrington", href: "/warrington-removals", type: "service" },
    ],
    content: `
      <h2>Why Packing Matters</h2>
      <p>The way you pack your belongings has a direct impact on how safely they arrive at your new home. At JMC Removals, our <a href="/house-removals" class="text-brand-600 hover:underline font-medium">professional house removal team</a> sees the results of good and bad packing every day. Here are our top tips for packing your home like a pro.</p>

      <h2>1. Start Early and Pack Room by Room</h2>
      <p>Begin packing at least three to four weeks before your move. Work one room at a time and label every box with both the contents and the destination room. This makes unloading at your new home far more efficient. See our full <a href="/blog/moving-house-checklist" class="text-brand-600 hover:underline font-medium">moving house checklist</a> for a week-by-week timeline.</p>

      <h2>2. Use the Right Boxes</h2>
      <p>Heavy items like books should go in small boxes. Large boxes should be reserved for lighter items like bedding and pillows. Using quality double-walled boxes significantly reduces the risk of boxes splitting during loading.</p>

      <h2>3. Wrap Fragile Items Individually</h2>
      <p>Every fragile item — glasses, crockery, ornaments — should be individually wrapped in packing paper or bubble wrap before being placed in a box. Never leave air gaps; fill spaces with crumpled paper to prevent movement. Our <a href="/furniture-removals" class="text-brand-600 hover:underline font-medium">furniture removals service</a> includes specialist wrapping for antiques, mirrors and glass-fronted furniture.</p>

      <h2>4. Protect Furniture Properly</h2>
      <p>Sofas, mattresses and wardrobes should be wrapped in furniture blankets or stretch wrap before being moved. JMC Removals provides these materials as standard on all <a href="/house-removals" class="text-brand-600 hover:underline font-medium">house removals</a>. Never allow bare furniture to make contact with other items in the van.</p>

      <h2>5. Dismantle What You Can</h2>
      <p>Flat-pack furniture, bed frames and large wardrobes should be dismantled before moving day where possible. Keep all screws, bolts and fittings in labelled zip-lock bags taped to the relevant piece of furniture. Our team can assist with dismantling and reassembly.</p>

      <h2>6. Pack an Essentials Box</h2>
      <p>Pack a clearly labelled "open first" box containing everything you'll need on your first night — kettle, mugs, tea bags, phone charger, toiletries, a change of clothes and bedding. This box should travel in the car with you, not in the removal van.</p>

      <h2>7. Don't Overfill Boxes</h2>
      <p>A box that's too heavy risks splitting and injuring the people carrying it. As a rule, a filled box should be liftable by one person. If you can't lift it easily, repack it.</p>

      <h2>8. Clearly Label Everything</h2>
      <p>Write the destination room on at least two sides of every box. Include a brief description of contents for fragile boxes. Use coloured tape to colour-code rooms — this makes directing a removal team much faster on moving day.</p>

      <h2>9. Take Special Care with Electronics</h2>
      <p>Original boxes are ideal for electronics. If you don't have these, wrap screens in anti-static bubble wrap and pack cables in labelled bags. Remove batteries from remote controls and children's toys. Televisions should never be laid flat — always transported upright.</p>

      <h2>10. Consider Professional Packing</h2>
      <p>If you're short on time or have high-value items, our professional packing service takes the stress away entirely. We pack every item correctly and efficiently, using the right materials for each category of belongings. This is particularly recommended when moving valuable or fragile items like antiques — see our <a href="/furniture-removals" class="text-brand-600 hover:underline font-medium">furniture removals</a> page for specialist item handling.</p>

      <p>If you're also planning to put belongings into storage after your move, read our guide on <a href="/storage-collection" class="text-brand-600 hover:underline font-medium">storage collection and delivery</a> to understand how the process works. And for a complete picture of what to expect on moving day, see our <a href="/blog/moving-house-checklist" class="text-brand-600 hover:underline font-medium">ultimate moving house checklist</a>.</p>

      <p>Need a <a href="/warrington-removals" class="text-brand-600 hover:underline font-medium">professional removal company in Warrington</a> to take care of packing and moving for you? JMC Removals offers a complete service — from packing materials to final unloading. Get a free quote today.</p>
    `,
  },
  {
    slug: "man-and-van-vs-removal-company",
    title: "Man & Van vs. Removal Company: Which Should You Choose?",
    description: "Not sure whether to book a man and van or a full removal company? We explain the differences, costs and when each option makes the most sense.",
    category: "Advice",
    date: "2024-10-18",
    readTime: "5 min read",
    related: [
      { label: "Man & Van Warrington", href: "/man-and-van", type: "service" },
      { label: "House Removals Warrington", href: "/house-removals", type: "service" },
      { label: "Furniture Removals", href: "/furniture-removals", type: "service" },
      { label: "How Much Do Removals Cost?", href: "/blog/how-much-do-removals-cost", type: "post" },
      { label: "Moving House Checklist", href: "/blog/moving-house-checklist", type: "post" },
      { label: "Removals Warrington", href: "/warrington-removals", type: "service" },
    ],
    content: `
      <h2>What's the Difference?</h2>
      <p>The terms are often used interchangeably, but there are meaningful differences between a <a href="/man-and-van" class="text-brand-600 hover:underline font-medium">man and van service</a> and a full <a href="/house-removals" class="text-brand-600 hover:underline font-medium">house removal company</a>. Understanding which suits your situation can save you time and money.</p>

      <h2>What is a Man & Van Service?</h2>
      <p>A man and van typically involves one or two people and a smaller transit van. It's designed for:</p>
      <ul>
        <li>Studio flats and small one-bedroom properties</li>
        <li>Student moves</li>
        <li>Single-item or small furniture moves</li>
        <li>Office equipment and small business relocations</li>
        <li>Short-notice moves where flexibility is key</li>
      </ul>
      <p>Our <a href="/man-and-van" class="text-brand-600 hover:underline font-medium">man and van service in Warrington</a> is priced by the hour and is ideal when you don't need a full removal crew.</p>

      <h2>What is a Full Removal Company?</h2>
      <p>A full <a href="/house-removals" class="text-brand-600 hover:underline font-medium">house removal service</a> involves a dedicated crew (typically 2–4 people), a Luton or larger van, and a comprehensive service that includes:</p>
      <ul>
        <li>Loading all furniture and boxes</li>
        <li>Furniture protection — blankets and stretch wrap</li>
        <li>Dismantling and reassembling furniture</li>
        <li>Safe transport and unloading into specific rooms</li>
        <li>Optional packing and unpacking service</li>
      </ul>

      <h2>When to Choose Man & Van</h2>
      <ul>
        <li>You're moving a 1-bedroom property or smaller</li>
        <li>You only need to move a few items of <a href="/furniture-removals" class="text-brand-600 hover:underline font-medium">furniture</a></li>
        <li>Your move is within a short distance</li>
        <li>You've already done most of the packing and loading prep</li>
        <li>You're on a tighter budget</li>
      </ul>

      <h2>When to Choose a Full Removal Company</h2>
      <ul>
        <li>You're moving a 2-bedroom property or larger</li>
        <li>You have large, heavy or specialist items</li>
        <li>You want furniture protection and dismantling included</li>
        <li>Your move involves a long distance</li>
        <li>You want a fully managed, stress-free service</li>
      </ul>

      <h2>Cost Comparison</h2>
      <p>Man and van services typically cost £60–£100 per hour. A full house removal for a 2-bedroom home starts from around £350 in Warrington. For a detailed price breakdown, read our guide on <a href="/blog/how-much-do-removals-cost" class="text-brand-600 hover:underline font-medium">how much removals cost in Warrington</a>.</p>

      <h2>JMC Removals — Both Services Available</h2>
      <p>Whether you need a <a href="/man-and-van" class="text-brand-600 hover:underline font-medium">man and van in Warrington</a> or a full <a href="/house-removals" class="text-brand-600 hover:underline font-medium">house removal service</a>, JMC Removals can help. As a family-owned removal company in <a href="/warrington-removals" class="text-brand-600 hover:underline font-medium">Warrington</a>, we'll always recommend the most appropriate and cost-effective option for your situation. Get a free, no-obligation quote today.</p>
    `,
  },
  {
    slug: "house-clearance-guide",
    title: "House Clearance Guide: What to Expect and How to Prepare",
    description: "Facing a house clearance in Warrington? Our guide explains what's involved, how to prepare and what happens to your items afterwards.",
    category: "House Clearance",
    date: "2024-10-01",
    readTime: "6 min read",
    related: [
      { label: "House Clearance Warrington", href: "/house-clearance", type: "service" },
      { label: "Furniture Removals", href: "/furniture-removals", type: "service" },
      { label: "House Removals Warrington", href: "/house-removals", type: "service" },
      { label: "Moving House Checklist", href: "/blog/moving-house-checklist", type: "post" },
      { label: "How Much Do Removals Cost?", href: "/blog/how-much-do-removals-cost", type: "post" },
      { label: "Removals Warrington", href: "/warrington-removals", type: "service" },
    ],
    content: `
      <h2>What is a House Clearance?</h2>
      <p>A <a href="/house-clearance" class="text-brand-600 hover:underline font-medium">house clearance</a> involves the removal of all or selected contents from a property. This might be the entire contents of a family home, specific rooms or areas such as a garage or loft, or the clearance of a property following a bereavement.</p>

      <h2>Types of House Clearance</h2>
      <ul>
        <li><strong>Full house clearance</strong> — complete removal of all contents from an entire property</li>
        <li><strong>Partial clearance</strong> — removing selected rooms or categories of items</li>
        <li><strong>Probate clearance</strong> — a sensitive clearance following a bereavement, often managed alongside solicitors</li>
        <li><strong>Landlord clearance</strong> — clearing a rental property between tenancies</li>
        <li><strong>Pre-move clearance</strong> — decluttering before a <a href="/house-removals" class="text-brand-600 hover:underline font-medium">house removal</a></li>
        <li><strong>Garage and loft clearance</strong> — targeted clearance of storage areas</li>
      </ul>

      <h2>How to Prepare for a House Clearance</h2>
      <p>Before the clearance team arrives, it helps to:</p>
      <ul>
        <li>Identify any items you want to keep — separate these clearly before the team arrives</li>
        <li>Check drawers and storage for valuables, important documents and sentimental items</li>
        <li>Decide whether you'd like any items valued before disposal</li>
        <li>Ensure the property is accessible — unlocked and safe to enter</li>
        <li>Let the team know about any access difficulties (stairs, narrow doorways, no parking)</li>
      </ul>

      <h2>What Happens to the Items?</h2>
      <p>At JMC Removals, we take an environmentally responsible approach to everything we remove. Usable <a href="/furniture-removals" class="text-brand-600 hover:underline font-medium">furniture</a>, household items, clothing and appliances are donated to local charities where possible. Items suitable for recycling are taken to licensed recycling facilities. Only genuinely unusable waste goes to landfill — and we provide waste transfer documentation if required.</p>

      <h2>How Much Does a House Clearance Cost?</h2>
      <p>House clearance costs in Warrington depend on the size of the property and the volume of items. Prices start from around £250 for a partial clearance. For a full 3-bedroom property, expect to pay £400–£800. Read our full guide on <a href="/blog/how-much-do-removals-cost" class="text-brand-600 hover:underline font-medium">removal and clearance costs in Warrington</a> for more detail.</p>

      <h2>Probate Clearances — A Sensitive Approach</h2>
      <p>Our team at JMC Removals has extensive experience with probate clearances following bereavements. We understand that this is an emotional and sensitive time, and we approach every probate clearance with care, discretion and professionalism. We can liaise directly with solicitors and executors if required.</p>

      <h2>Combining Clearance with a House Removal</h2>
      <p>Many customers combine a <a href="/house-clearance" class="text-brand-600 hover:underline font-medium">house clearance</a> with a <a href="/house-removals" class="text-brand-600 hover:underline font-medium">full house removal</a> — clearing unwanted items first, then moving the remaining belongings. JMC Removals can manage both services, making the process straightforward for you.</p>

      <p>If you need a <a href="/warrington-removals" class="text-brand-600 hover:underline font-medium">professional clearance company in Warrington</a>, contact JMC Removals for a free, no-obligation quote. We respond promptly and can often accommodate same-day or next-day clearances.</p>
    `,
  },
  {
    slug: "moving-with-children-tips",
    title: "Moving House with Children: Tips for a Stress-Free Family Move",
    description: "Moving house with kids can be challenging. Our tips help you prepare your children for the move and keep stress levels low for the whole family.",
    category: "Moving Tips",
    date: "2024-09-15",
    readTime: "5 min read",
    related: [
      { label: "House Removals Warrington", href: "/house-removals", type: "service" },
      { label: "Man & Van Warrington", href: "/man-and-van", type: "service" },
      { label: "Moving House Checklist", href: "/blog/moving-house-checklist", type: "post" },
      { label: "Expert Packing Tips", href: "/blog/packing-tips-house-move", type: "post" },
      { label: "Removals Warrington", href: "/warrington-removals", type: "service" },
      { label: "Get a Free Quote", href: "/contact", type: "service" },
    ],
    content: `
      <h2>Why Moving with Children Needs Extra Planning</h2>
      <p>Moving house is consistently listed as one of life's most stressful events — and adding children into the mix increases that pressure significantly. Children thrive on routine and familiarity, so a move can feel unsettling at any age. The good news is that with the right preparation, a <a href="/house-removals" class="text-brand-600 hover:underline font-medium">family house move</a> can be a positive and even exciting experience.</p>

      <h2>Tell Them Early — and Honestly</h2>
      <p>Children cope better when they feel informed. As soon as your move is confirmed, tell your children what's happening. Use age-appropriate language: "We're moving to a new house — you'll have a new bedroom and we'll decorate it however you like." Avoid springing surprises, and answer their questions honestly.</p>

      <h2>Involve Them in the Process</h2>
      <p>Children feel more in control when they're involved. Give them tasks appropriate to their age:</p>
      <ul>
        <li>Younger children: let them pack their own toy box</li>
        <li>Older children: help them label their boxes or create a checklist — see our <a href="/blog/moving-house-checklist" class="text-brand-600 hover:underline font-medium">full moving house checklist</a></li>
        <li>Teenagers: involve them in decisions about their new bedroom</li>
      </ul>

      <h2>Pack Their Essentials Separately</h2>
      <p>Each child should have their own clearly labelled bag or box of essentials — favourite toy, comfort item, change of clothes and anything they'll need on the first night. Read our <a href="/blog/packing-tips-house-move" class="text-brand-600 hover:underline font-medium">expert packing tips</a> for help organising the rest of the home.</p>

      <h2>Arrange Childcare for Moving Day</h2>
      <p>Moving day is hectic. Young children underfoot can slow down the removal team and create safety risks. If possible, arrange for children to stay with family or friends while the <a href="/warrington-removals" class="text-brand-600 hover:underline font-medium">removal team in Warrington</a> does the loading and unloading. Older children can often help but should understand the ground rules: stay clear of the van, don't run on the ramps, and stay away from heavy items.</p>

      <h2>Set Up Their Room First</h2>
      <p>When you arrive at your new home, prioritise getting the children's rooms set up first. Having a familiar, comfortable space gives children a safe base from which to explore the rest of the new house. Unpack their favourite items and comfort objects early in the unpacking process.</p>

      <h2>Maintain Routines</h2>
      <p>As much as possible, maintain your children's normal routines — mealtimes, bedtimes and activities. Routines provide security during periods of change. Even if the new house is unfamiliar, a consistent bedtime routine signals to children that things are still normal.</p>

      <h2>Let Them Say Goodbye</h2>
      <p>Give children the chance to say goodbye to their old home and to friends. A small leaving party, a goodbye walk around the old neighbourhood, or letting them take a photo of their old bedroom can help with the emotional transition.</p>

      <h2>Plan Your Move with JMC Removals</h2>
      <p>Choosing the right removal company makes family moves much smoother. Our <a href="/house-removals" class="text-brand-600 hover:underline font-medium">professional house removal team</a> is experienced in family moves and understands the need for efficiency and care. For smaller families or shorter moves, our <a href="/man-and-van" class="text-brand-600 hover:underline font-medium">man and van service</a> may be all you need.</p>

      <p>Get a free, no-obligation quote from JMC Removals — <a href="/warrington-removals" class="text-brand-600 hover:underline font-medium">Warrington's trusted family removal company</a>. We're here 7 days a week and respond quickly to all enquiries.</p>
    `,
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | JMC Removals Blog`,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "JMC Removals" },
    publisher: {
      "@type": "Organization",
      name: "JMC Removals",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    url: `${SITE_URL}/blog/${post.slug}`,
  };

  const relatedServices = post.related.filter((r) => r.type === "service");
  const relatedPosts = post.related.filter((r) => r.type === "post");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: post.title, url: `${SITE_URL}/blog/${post.slug}` }])) }} />

      <ServicePageHero
        badge={post.category}
        title={post.title.split(" ").slice(0, 6).join(" ") + " "}
        titleHighlight={post.title.split(" ").slice(6).join(" ")}
        description={post.description}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title.substring(0, 30) + "...", href: `/blog/${post.slug}` }]}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Main article */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
                <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {post.category}
                </span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </time>
                <span>{post.readTime}</span>
              </div>

              <article className="prose-content" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-4">Related Reading</h3>
                  <ul className="space-y-2">
                    {relatedPosts.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 hover:underline transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Book Your Move?</h3>
                <p className="text-sm text-gray-600 mb-5">
                  JMC Removals provides professional house removals across Warrington and the North West. Get your free, no-obligation quote today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
                  <a href="tel:+447438447286" className="btn-secondary">+44 7438 447286</a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Related services */}
              {relatedServices.length > 0 && (
                <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Our Services</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="flex items-center gap-2 text-sm text-brand-700 hover:underline transition-colors font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* All blog posts */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-3">More Moving Guides</h3>
                <ul className="space-y-2">
                  {blogPosts.filter((p) => p.slug !== post.slug).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="text-sm text-gray-600 hover:text-brand-600 hover:underline transition-colors leading-snug block">
                        {p.title.substring(0, 45)}{p.title.length > 45 ? "…" : ""}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/blog" className="text-xs text-brand-600 hover:underline mt-3 block font-medium">
                  View all guides →
                </Link>
              </div>

              {/* CTA card */}
              <div className="rounded-2xl border border-gray-100 bg-white p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Free Removal Quote</h3>
                <p className="text-xs text-gray-600 mb-3">Get a no-obligation quote from Warrington's trusted removal company.</p>
                <a href="tel:+447438447286" className="btn-primary w-full justify-center text-sm mb-2">+44 7438 447286</a>
                <Link href="/contact" className="btn-secondary w-full justify-center text-xs">Online Quote Form</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
