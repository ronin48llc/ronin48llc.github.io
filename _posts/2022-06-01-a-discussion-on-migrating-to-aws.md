---
layout: post
title: "A Discussion on Migrating to AWS"
description: "A comprehensive guide to AWS migration — from assessment through execution and ongoing optimization."
tags: aws cloud-migration map well-architected
date: 2022-06-01
originally_published: https://www.cloudhesive.com/blog-posts/a-discussion-on-migrating-to-aws/
---

I'm occasionally asked general questions about migrating to AWS, so I thought I'd put together a blog to describe the processes and resources involved in not just migrating a workload to AWS, but also establishing a presence on AWS that can provide success and sustained growth as your needs evolve.

## AWS Migration Acceleration Program (MAP)

As a starting point, AWS has a program called the Migration Acceleration Program, or [MAP](https://aws.amazon.com/migration-acceleration-program/), which provides prescriptive guidance, broken out into three phases (Assess, Mobilize, Migrate and Modernize) intended to help organizations prepare, plan, and successfully execute a workload migration while also driving an adoption of AWS that provides value to the business.

### Phase 1: Assess

The first phase of the MAP is intended to assess an organization's current state to not only be successful in the migration of one or more of these workloads but to assess their organizational readiness to support and evolve these workloads long term. AWS makes available a tool, Migration Readiness Assessment, or [MRA](https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-readiness/welcome.html), to help organize these efforts.

### Phase 2: Mobilize

Building on the efforts of the assess phase, the mobilize phase puts into place the supporting capabilities that workload migration efforts will rely on, which includes both organizational enablement as well as technical solutions such as Control Tower (which provides a "Landing Zone" for workloads to operate in).

### Phase 3: Migrate and Modernize

Previously evaluated workloads are migrated to the Landing Zone using the previously defined process. A key point here is that migrate also includes modernize. A workload's initial position post migration may be, for example, rehosted, however, as workloads and capabilities on AWS evolve, it may not be its final state as that workload can be replatformed when conditions are favorable to do so.

## End-to-End Migration Process

A summary of the end-to-end migration process from blank-slate to continuous improvement:

- Identify current state of organization, supporting infrastructure and workloads including definition of goals, timeframes, budgets, and success measures via the Migration Readiness Assessment
- Create initial technical and enablement plans
- Execute on technical plan by establishing a Landing Zone via Control Tower, including considerations for Enterprise Integration (e.g. Network, LDAP, PKI, IAM, SAML, Security, Operations, Architecture)
- Execute on enablement plans
- Begin workload evaluation process:
  - Inventory (automatic or manual)
  - Dependency Mapping/Resource Scheduling
  - SME Interviews
  - Current State (Configured versus Actual) and Proposed State with corresponding budget
  - Migration approach or the [7 Rs Migration Strategy](https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/iterating-7-rs-migration-strategy-selection.html)
  - Data Volume versus Data throughput
- Perform test migration of workload with pre-staged data
- Validate test migration results
- Remediation/mitigation of findings from test migration
- Perform actual migration

## Tools and Automation

Tools can be categorized in three main areas:

**Discovery, Inventory, Dependency Mapping**
- CloudChomp (typically agent-less)
- Datadog (typically agent based)
- New Relic (typically agent based)
- Flexera/RISC (supports both agent and agentless approaches)
- Cloudamize (typically agent based)
- Application Discovery Service (AWS)

**Planning/Orchestration**
- Migration Evaluator — formerly TSO Logic, now AWS
- Migration Hub — AWS (orchestrates related AWS services as well as third party services)

**Migration**
- Application Migration Service (MGN) — formerly CloudEndure, now AWS
- Server Migration Service
- Database Migration Service
- VMWare Cloud

## Data Migration Considerations

Key questions to drive your data migration approach:

- How much data needs migrated?
- How much time is available to migrate said data?
- What is that data's rate of change?
- How much, if any, downtime can be afforded for the migration of this workload?
- What is the realistic sustainable throughput?

These considerations will drive the data migration approach — whether it's entirely over the wire or pre-seeded leveraging one of AWS Snow Family Devices.

Data transfer services include:
- Snow Family
- DataSync
- Transfer for S3
- Accelerated Endpoints for S3
- Storage Gateway

## Disaster Recovery and Lifecycle Management

AWS [Well Architected](https://aws.amazon.com/architecture/well-architected/) provides excellent guidance on evaluating workloads and providing recommendations in addressing the findings of those evaluations across 6 pillars, including reliability.

From a disaster recovery perspective, the main drivers are RTO and RPO — how much time is acceptable for recovery from a failure and how much data loss is acceptable.

Key considerations:
- **AZ vs. Region**: A default stance may be "replicate everything to another region" but that means a new region, VPC, connectivity, dependent services, etc. AZ simplifies things with some added risk. For multi-region, Ohio has advantages over California or Oregon for US East Coast workloads in terms of data egress cost and latency.
- **Two modes of failure**: Lack of service availability and actual data loss. Snapshot, Snapshot Retention, Snapshot versioning should be the minimum for all in-scope server storage.
- **Native replication**: Databases each have their own style of replication which offer advantages over general data replication solutions.
- **Testing**: Disaster recovery and business continuity is not a set-it-and-forget-it situation — this needs to be periodically tested.

## Conclusion

Migration of a workload, especially the first one, is benefitted through up-front, long term planning, which includes technical and organizational planning, and consideration for the evolution of workloads and AWS services.

*— Patrick Hannah*
