---
layout: post
title: "How to Decide — Avaya Edition"
description: "Reflections on technology decision-making in enterprise communications — from TDM to cloud contact centers."
tags: contact-center avaya amazon-connect decision-making
date: 2022-02-01
originally_published: https://www.cloudhesive.com/blog-posts/how-to-decide-avaya-edition/
---

I'm about a third of the way through "How to Decide" by Annie Duke, about a week after Avaya's second Chapter 11 filing and wondering about the decisions that led them to that fate, as well decisions that brought their investors, partners, customers and vendors to them in the first place, and how they must be feeling now, or will be feeling as they (customers in particular) find Avaya may no longer be able to fulfill their needs. I'm not going to use hindsight bias to beat up on the decisions made of the past by others but will look at my own process of deciding to utilize Avaya and how that process may relate to others'. As a side note, in my Enterprise Connect 2022 observations I noted the lack of any Avaya presence, compared to the last in-person Enterprise Connect (2019) that I attended, in which Avaya was front and center.

## My First Experience with Avaya

My first hands-on experience with Avaya hardware started with a decision, or more of a statement, "Time to replace the Nortel Option 11c", that led to a series of decisions. The Option 11 served us well in our corporate needs, with our Contact Center needs being fulfilled by a platform that was the opposite of the Option 11 (Telephony@Work, which was purchased by Siebel and then by Oracle only to meet a different fate).

We directionally knew that we would eventually utilize Avaya throughout our organization, for both needs, however, I felt it prudent to perform some level of due diligence in gathering requirements and evaluating two approaches on three hardware platforms with three vendors (Nortel — Upgrade, Avaya — Greenfield, Cisco — Greenfield). The way I saw it — there were preferences, payouts, and probabilities in selecting any one of the three, so utilized a tool in the vendor management toolbox, the RFP, or Request for Proposal.

Whether it was my immaturity in experience in the use of the tool, or simply the ineffectiveness of the tool at the time, I found that I had a lot of information from vendors of all three (and a lot of attention from those vendors as well, as they looked at the bigger picture — the contact center), I simply was not armed to algorithmically make a decision, so played favorites and went with Avaya. It was the safe decision ("No one got fired for buying AT&T") and in the data I collected felt the platform would integrate well and grow with our organization.

After Nortel's challenges came to light (ironically, some of their assets ending up with Avaya) and Cisco's (in my opinion) watering down of their communications story, it became evident that Avaya was not only the safe decision, but the best decision for us — at the time.

## The TDM to IP Transition

This time, for what it's worth was effectively the start of the move of corporate communications platforms from TDM to IP and with the newness of IP telephony, particularly those comfortable with TDM like myself, came a fear of the unknown or loss of control. The most common topic in these conversations being around how I can ensure quality (e.g. QoS) of my communications in a shared network. This concern was so common that Avaya sent out specialists to evaluate our network and validate it could support IP Telephony and general arguments over which is better spanned the industry — Netheads vs Bellheads ([Wired, 1996](https://www.wired.com/1996/10/atm-3/)) is a great example of this.

I eventually warmed up a few years later, deploying and supporting Internet based VoIP deployments to end users, and an entire career later I find the use cases have remained the same but the technology to deliver it has vastly changed — I and my team are now responsible for a browser based platform that uses WebRTC to deliver rich media to its users — no dedicated hardware, no TDM connectivity, no SIP connectivity except what is required to bridge to the PSTN, and can't help but wonder if I was too conservative in my own technology decision making processes, at least in that part of my career.

As it happens, I also skipped out on the first generation of commodity enterprise virtualization and pivoted straight into hyperscale cloud, in what I call my second (and present) career.

## Enter Amazon Connect

Thinking I left the communications world behind when I moved to build and operate cloud offerings of enterprise software in 2012, I found myself pulled back in in 2017 with AWS' introduction of Amazon Connect. Given I had worked with public cloud for a few years, the wonder of near instant provisioning was lost on me (even going so far as to take it for granted) but the amazement I still had was the fact that in that near instant provisioning I could have a fully functioning Contact Center platform. It also helped fulfill an itch I had yet to scratch — prove that a communication platform is suited, or even best suited to run on the public cloud.

While Amazon Connect continues to grow in capabilities and adoption, we also saw an opportunity to address our customers' feedback by introducing a SaaS platform of our own, using Amazon Connect as the engine, but bringing a level of customization that previously required development. Our initial approach in this space was in our SaaS offering Centricity, last year, we added to the portfolio Dextr, then finally this year (a week before Avaya's announcement) rebranded to ConnectPath.

## The Economics

With ConnectPath our customers get the same functionality that I (or rather my company at the time) spent on Avaya at a significant economic advantage — the telecom I paid monthly on Avaya likely equates to the total cost our users pay for ConnectPath and Amazon Connect, so imagine getting those capabilities without any capital (or leasing) outlay! For my simple corporate communications needs, there was immediate value, but for contact centers — including those starting out who don't know what their volume might look like, or for those that have significant seasonal peaks and valleys, the value is even more obvious.

Understanding there is no one size fits approach — e.g. a small contact center might need to get up and running quickly with basic functionalities where larger organizations may be migrating from legacy platforms, such as Avaya — we also offer a consultative approach to understanding your desired outcome, proving the value of the technology and supporting you throughout your journey.

## Conclusion

My hope is that I reach an audience of existing Avaya users, who may even have utilized similar decision-making approaches as myself to experience how the world of enterprise communications has evolved. While there was likely comfort, consistency and even mandates from boards or vendors the tradeoff was a disjoined approach to solving for your enterprise communications needs. Those needs, pre-2017, I solved through gateways, Communications Manager, conferencing units, voicemail servers, cards, PRIs, handsets, and so on. Now I solve those needs with a single platform — ConnectPath, powered by Amazon Connect.

*— Patrick Hannah, CTO, CloudHesive*
