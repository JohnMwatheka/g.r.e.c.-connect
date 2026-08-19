/* eslint-disable prettier/prettier */
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

// New gallery images
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";
import img10 from "@/assets/10.jpg";
import img11 from "@/assets/11.jpg";
import img12 from "@/assets/12.jpg";

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

// Original 6 images (Slide 1)
export const gallerySlide1 = [
  { src: choir, alt: "Church choir worshipping", span: "row-span-2" },
  { src: youth, alt: "Youth fellowship outdoors", span: "" },
  { src: baptism, alt: "Baptism service by the river", span: "" },
  { src: outreach, alt: "Community outreach food distribution", span: "row-span-2" },
  { src: children, alt: "Children's ministry class", span: "" },
  { src: img5, alt: "Church sanctuary interior", span: "" },
];

// New images 1–6 (Slide 2)
export const gallerySlide2 = [
  { src: img1, alt: "Church moment 1", span: "row-span-2" },
  { src: img2, alt: "Church moment 2", span: "" },
  { src: img3, alt: "Church moment 3", span: "" },
  { src: img4, alt: "Church moment 4", span: "row-span-2" },
  { src: img5, alt: "Church moment 5", span: "" },
  { src: img6, alt: "Church moment 6", span: "" },
];

// New images 7–12 (Slide 3)
export const gallerySlide3 = [
  { src: img7, alt: "Church moment 7", span: "row-span-2" },
  { src: img8, alt: "Church moment 8", span: "" },
  { src: img9, alt: "Church moment 9", span: "" },
  { src: img10, alt: "Church moment 10", span: "row-span-2" },
  { src: img11, alt: "Church moment 11", span: "" },
  { src: img12, alt: "Church moment 12", span: "" },
];

// Keep a flat list for the mobile carousel
export const gallery = [
  ...gallerySlide1,
  ...gallerySlide2,
  ...gallerySlide3,
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
