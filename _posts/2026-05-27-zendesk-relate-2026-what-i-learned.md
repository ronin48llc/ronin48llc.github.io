---
title: "Zendesk Relate 2026 - What I learned"
date: "2026-05-27"
tags:
  - "Zendesk Relate 2026"
  - "Zendesk"
  - "Relate"
  - "Zendesk Relate"
  - "AWS"
  - "Amazon"
  - "Amazon Connect"
  - "Connect"
  - "CCP"
  - "SDK"
description: "What I learned at Zendesk Relate 2026"
---

As I promised, I'm sharing some of my notes from Zendesk Relate 2026 in Denver, CO. The event, which was aptly titled "A Mile High, A Mile Ahead", had, unsuprisingly the prevalent theme of Agentic AI. Signage throughout the venue literally read "Hard launch agentic AI" and various flavors of that.

One of the key things I hoped to leave with was the ability to articulate the value of Local Measure joining the Zendesk team. For context: Local Measure built Engage for Amazon Connect - a full CCaaS layer on top of Connect - and their acquisition brings that native channel depth directly into the Zendesk ecosystem. With Zendesk Contact Center, the impact is evident.

Some of the key takeaways for me were around the current market landscape for Amazon Connect in the Contact Center. These included:

1. "Overlays are dying": The overlay model isn't the future. What's an overlay? A custom CCP built on the Amazon Connect Streams SDK - essentially a feature-extended agent softphone that sits on top of the connect CCP (figuratively). These made a lot of sense pre-Amazon Connect Agent Workspaces, especially for customers without a CRM that natively embedded the Amazon Connect CCP and needed added functionality. It's also clear that AWS has not prioritized feature parity between the Streams SDK and Agent Workspace. CRM tie-ins make this even more evident - Zendesk's native Amazon Connect integration and Salesforce's ever-evolving CTI adapter, SCV and CCaaS flavors  both demonstrate that the embedded CRM experience is where the market is heading, not custom-built agent desktops. This makes the overlay a situation where custom overlays are chasing a moving target, and the ROI case is getting harder to make.
2. AHT is going up, not down. This makes sense: bots are handling the easy stuff, so human agents are left with the harder, more complex calls. The metric looks worse on paper, but the workload composition has shifted. An agent's average handle time climbing from 4 minutes to 7 minutes isn't necessarily a problem - it might mean your containment rate jumped 40% and what's left is genuinely hard. The challenge is that most contact center leadership is still reading AHT as a performance signal without that context.
3. Non-human-agent reporting is a gap. Specifically, trying to apply traditional call center metrics - AHT, ASA, FCR - to bot interactions doesn't really work. A bot that "handles" a call in 45 seconds and transfers isn't the same as a bot that fully resolves. First Contact Resolution, in particular, loses meaning when the "contact" is split across an IVA and a human. The industry doesn't have a good answer for this yet.
4. Queue management remains a pain point. This isn't exclusive to Amazon Connect, but it's compounded by Connect's expanding routing capabilities - specifically Proficiencies and Pick Lists. Proficiency-based routing lets you score agents on skills and route accordingly, which is powerful, but adds real configuration complexity when layering on top of queues, routing profiles and giving agents the ability to pick contacts out of the queue. The more granular your routing logic, the harder it is to predict queue behavior at scale and the easier it is to accidentally implement inefficiencies and create the opportunity for abuse.
5. QA'ing automation is an emerging need. As bots handle more volume, evaluating bot behavior becomes just as critical as evaluating agent behavior - arguably more so, given scale. This sounds like a reporting gap, but it extends beyond that. It's about building rubrics for IVA interactions: Was the right intent recognized? Was the resolution path appropriate? Was the handoff clean? Most QA tooling wasn't built for this, and most QA teams aren't trained for it either.
6. Post go-live support is underserved - real opportunity here. Going live on a CRM is a different problem than going live on a channel that supports real-time communications. A CRM without a live channel integrated has human latency baked in - agents are switching tabs, copying notes, managing context manually. When you integrate the channel, that latency disappears and every inefficiency it was masking suddenly becomes visible. Customers often interpret this as the integration creating problems when it's actually just exposing them. That gap in expectation management and post-launch optimization is largely unaddressed in the market.
7. Front-end for Connect admin - this circles back to the overlay concept. Do you recreate the Amazon Connect experience, or do you improve it? Increasingly, the answer has to be "improve it", otherwise you are in a race you will never win. This requires opinionated decisions about what "better" looks like for a given customer segment, which is harder than it sounds.
8. Knowledge quality drives IVR/IVA retention rates. A referenced customer showed 80–90% containment tied directly to the quality of their knowledge base. Not the sophistication of the bot, not the model - the knowledge. This is an underrated point: you can deploy a best-in-class IVA and still get 40% containment if the underlying content is stale, incomplete, or inconsistently structured. This is what I'm calling the iron triangle of IVA (more to come on that).
9. Marketplace-style onboarding for Connect is strongly desired. The ask was simple: give me the same click-through, guided experience to get up and running on Connect that I get when signing up for Zendesk. Right now, Connect sign-up often means navigating a new AWS account, IAM, and a handful of service dependencies before you've even touched the product. That friction is real and it's a barrier - especially for customers coming from simpler CCaaS backgrounds.

So the big question, in the world of Amazon Connect is: What's AWS going to address? How does this resonate with customers? Whose going to dominate ecosystem by solving for these?

Finally, it was great seeing some old AWS friends, finally getting to meet some of the Local Measure stars, and unfortunately missing a presentation featuring a very old customer.
