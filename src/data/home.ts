//src/data/home.ts
import {
  BookOpen,
  Cross,
  Flame,
  HandHeart,
  Music,
  Sparkles,
  Users,
  Baby,
  Landmark,
} from "lucide-react";

import sanctuary from "@/assets/sanctuary.jpg";
import choir from "@/assets/choir.jpg";
import youth from "@/assets/youth.jpg";
import children from "@/assets/children.jpg";
import outreach from "@/assets/outreach.jpg";
import baptism from "@/assets/baptism.jpg";

export const serviceTimes = [
  { day: "Sunday", name: "First Service", time: "7:30 AM" },
  { day: "Sunday", name: "Main Service", time: "10:30 AM" },
  { day: "Sunday", name: "Youth Service", time: "12:30 PM" },
];

export const beliefs = [
  {
    icon: Cross,
    title: "Christ Alone",
    text: "Salvation is found in Jesus Christ, crucified and risen for all.",
  },
  {
    icon: BookOpen,
    title: "The Word",
    text: "Scripture is God's inspired truth and the foundation of our life.",
  },
  {
    icon: Flame,
    title: "Holy Spirit",
    text: "We live and serve empowered by the Spirit of God.",
  },
  {
    icon: Users,
    title: "Fellowship",
    text: "We grow together as one welcoming family in Christ.",
  },
  {
    icon: HandHeart,
    title: "Service",
    text: "Faith expressed through love, compassion and outreach.",
  },
  {
    icon: Sparkles,
    title: "Revival",
    text: "We pray for renewal in our city, our nation and the world.",
  },
];

export const ministryCards = [
  {
    title: "Youth Ministry",
    text: "Teens and young adults growing bold in faith.",
    image: youth,
    icon: Flame,
  },
  {
    title: "Children Ministry",
    text: "Safe, joyful discipleship for our little ones.",
    image: children,
    icon: Baby,
  },
  {
    title: "Choir & Worship",
    text: "Leading the congregation into God's presence.",
    image: choir,
    icon: Music,
  },
  {
    title: "Evangelism",
    text: "Taking the Gospel to homes, streets and nations.",
    image: outreach,
    icon: Landmark,
  },
];

export const ministryList = [
  "Women's Ministry",
  "Men's Ministry",
  "Prayer Ministry",
  "Bible Study",
];

export const events = [
  {
    date: "AUG 09",
    title: "Annual Revival Conference",
    detail: "Three nights of worship, teaching and prayer.",
    place: "Main Sanctuary · 5:00 PM",
  },
  {
    date: "AUG 23",
    title: "Youth Fire Night",
    detail: "Worship, testimonies and fellowship for ages 13–30.",
    place: "Youth Hall · 6:00 PM",
  },
  {
    date: "SEP 06",
    title: "Community Open Air Crusade",
    detail: "Gospel outreach and free medical camp.",
    place: "Town Grounds · 9:00 AM",
  },
  {
    date: "SEP 20",
    title: "Church Building Project Harvest",
    detail: "Celebrating what God is building among us.",
    place: "Main Sanctuary · 10:30 AM",
  },
];

export const sermons = [
  {
    title: "Welcome Home: The Father's Heart",
    date: "20 July 2026",
    series: "Latest",
    image: sanctuary,
  },
  {
    title: "Faith That Moves Mountains",
    date: "13 July 2026",
    series: "Popular",
    image: choir,
  },
  {
    title: "Living Water for Dry Seasons",
    date: "6 July 2026",
    series: "Series",
    image: baptism,
  },
];

export const gallery = [
  { src: choir, alt: "Church choir worshipping", span: "row-span-2" },
  { src: youth, alt: "Youth fellowship outdoors", span: "" },
  { src: baptism, alt: "Baptism service by the river", span: "" },
  { src: outreach, alt: "Community outreach food distribution", span: "row-span-2" },
  { src: children, alt: "Children's ministry class", span: "" },
  { src: sanctuary, alt: "Church sanctuary interior", span: "" },
];

export const testimonials = [
  {
    name: "Grace W.",
    role: "Member since 2019",
    quote:
      "I walked in as a stranger and left as family. G.R.E.C. gave me a place to heal and grow.",
  },
  {
    name: "Peter O.",
    role: "Youth leader",
    quote:
      "The youth ministry shaped my faith and my future. Here I learned to serve with purpose.",
  },
  {
    name: "Mercy A.",
    role: "Women's fellowship",
    quote: "Every Sunday I leave encouraged. The teaching is sound and the love is genuine.",
  },
];
