---
title: "Let's go to PegaWorld"
date: "2026-06-08"
tags:
  - "PegaWorld"
  - "AWS"
  - "Cloud Technology"
  - "Generative AI"
  - "Agentic Vision"
  - "Pega"
  - "Technology Evolution"
  - "Contact Center Technology"
  - "SaaS"
  - "Keynote"
description: "Revisiting PegaWorld after a decade, the author reflects on the evolution of Pega and AWS technologies, highlighting the transformative impact of cloud vision and Generative AI, and shares insights on the Agentic vision presented at the event."
---

PegaWorld

In March, if you asked me if I would ever go to PegaWorld again, or touch Pega again, probably the answer would be no and very slim. Why? Not for lack of opportunity or capability, I just didn't keep up with how much had changed in the 12 years I'd been there.

In March 2017, if you asked me if I'd ever touch Contact Center technology again, I would have said maybe running it on EC2. Then AWS launched Connect.

I left the world of Contact Centers to get comfortable. I thought I knew it all at the time. I ended up at Pega, tasked with operationalizing their flagship product on AWS, evolving their SaaS offering to something production-ready. I knew nothing about Pega or AWS. I knew platforms, operations, and security, though, and figured out the rest.

Unfortunately, it wasn't until CloudHesive that I saw the true value of AWS, but fortunately, having lived that, I had plenty of proof for customers who wanted to behave the same way (like running a fleet of load balancer appliances on AWS).

So how did I end up at PegaWorld? Well, building out technology partnerships comes with the job.

I'd looked at Pega last year, and was thrilled to see the cloud vision was fully realized AND Generative (not Agentic) AI was being embraced to take the old DCO process and turn it into a production-ready application.

It was cool my badge said Alumni - my first and last PegaWorld being 12ish years ago in National Harbor, where I got to staff the PegaCloud booth (there is more than one now!), but also see and hear Alan in action (I really only had one other chance to interact with him, where I was effectively pitching why a third-party piece of software was more effective at monitoring cloud infrastructure than AES LOL).

This week, I got to see the Agentic vision up close, and as tired as we are of hearing about it, that's what I'm going to tell you about, as I finally get to my point. I loved how Alan ended his portion of the keynote with "build for change." Unfortunately, I did not get a chance to ask him to sign the copy I had, or let my son challenge him to a game of chess, but maybe next time I'm in Boston?

So here's what I actually learned, and why "build for change" landed differently this time than it did twelve years ago:

Everyone is talking about agentic AI right now, and yes, it dominated PW26. But Pega's framing stood out from the noise. Their headline was "No Prompts. No Token Costs." which sounds like marketing until you understand what they mean.

Most AI platforms hand you an LLM and say good luck. You write the prompts, manage the costs, and hope the agent doesn't hallucinate its way through a compliance decision. Pega's bet is different: agents constrained by your existing rules, your compliance requirements, your business logic. They call it "Predictable AI," and in regulated industries such as banking, insurance, and healthcare predictability is worth more than raw capability.

They frame it as three things:

Reimagine: Blueprint, their AI-generated application design tool, does in hours what DCO took weeks to produceBuild: AI-assisted development that understands your regulatory context and legacy systemsRun: Governed, auditable agents that operate within your existing workflows, not as black boxes doing whatever they want

My read? Pega wants to be the governance and orchestration layer that makes enterprise AI safe enough to actually ship to production. That's a meaningfully different pitch than "here's a better chatbot," and also moves them deeper into the stack. My thoughts on the how? Processes are decomposed into subagents now, not monolithic flows, and everything connects to anything via MCP (MCP is not a catch-all replacement to traditional API based approaches, but conceptually this should place human and non-human agents on equal footing).

When I was at Pega, the relationship with AWS was "we host on AWS." What I saw at PW26 is something different: Pega integrating with AWS through Amazon Connect, native MCP integration with Bedrock likely underpinning the AI layer, and Pega now available on the AWS Marketplace (which has real commercial teeth - customers can draw down against their PPA, sellers get consumption credit). As an AWS partner, we can also help our customers offset their migration costs through MAP! This isn't a hosting conversation anymore.

The breakout session, Pega + AWS on Amazon Connect, answered all of my questions. The joint vision is clean: AI handles routine intake and self-service, human agents handle complex, high-value interactions, with full context preserved across every handoff. The channel is Connect, Pega is the human agent UI and owns the business process/business rules covering all four pillars: trusted AI orchestration, unified agent desktop, end-to-end resolution coordination, and service journeys. This deploys in days, not months.

MetLife co-presented their AI adoption story, and they opened with a cartoon: "What do we want? AI! When do we want it? Right now! AI to do what? We don't know! What about risks? We'll figure it out!" It landed because it's true. The tension they described, the pace of change vs. risk and compliance vs. efficiency and cost, with cultural shift sitting at the center, is the actual conversation happening in every boardroom right now. Pega's whole "Predictable AI" pitch is a direct answer to that cartoon.

We also resurfaced two older Pega concepts that are more relevant today than they've ever been.Pay for performance is still the right commercial framing for contact center but so many are hesitant to dive into it. Build your business case around AHT, FCR, cost per contact. It maps to outcomes, it aligns everyone, and it's a natural fit for a Pega + Connect deployment.

Blueprint vs. DCO traceability is a real challenge. Blueprint generates applications fast, genuinely faster than DCO ever could. But that speed creates a governance gap. Requirements can become decoupled from delivery artifacts if you're not deliberate about it. The speed is real; so is the problem if you don't plan for it going in.

The clearest message from the week: customers, particularly in regulated industries, specifically in contact center, need partners who bring domain expertise to the deployment, not just integration capability. The Pega + Connect story is live and native.

The tokenomics conversation (yes, that's a term now - managing and controlling AI token costs at enterprise scale) is one that partners who understand the cost architecture of agentic can lead rather than follow.

I came back to this space because the convergence of Pega's capabilities + governance model and AWS Connect's reach created something that genuinely didn't exist the last time I was paying attention. Twelve years is a long time. Build for change, indeed.
