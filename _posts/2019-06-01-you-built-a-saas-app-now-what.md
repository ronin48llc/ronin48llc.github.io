---
layout: post
title: "You Built a SaaS App, Now What?"
description: "After launching your SaaS app — architecture, monitoring, automation, deployment, feature flags, identity, and billing."
tags: aws saas operations architecture devops
date: 2019-06-01
originally_published: https://www.cloudhesive.com/blog-posts/you-built-a-saas-app-now-what/
---

Now that you've launched your SaaS App, your focus has likely shifted, and will continue to do so — from growth of customers, retention of customers and continuing to address your customer's and the market's needs, not to mention operating your App from a security, compliance, performance/reliability perspective and ensuring economic alignment to your application's cost model. The floodgates have opened and with a concise, prioritized plan of action prior to launch, the later set of challenges are more naturally addressed.

The difference between a natural approach to operating your workload and a challenged approach can be distilled down to three major pieces: **architecture**, **monitoring** and **automation**.

## Architecture

Architecturally, selecting the appropriate Amazon Web Service (AWS) services and understanding their trade offs provides for your operational foundation. For example, a fixed configuration leveraging all EC2 instances might have more operational overhead from a monitoring, management and automation perspective — for example, patching of the operating system, handling a crashed service or deploying a release of your application.

## Monitoring

Architecture directly drives monitoring as well — selection of a natively integrated service that emits metrics, logs, events and traces leveraging CloudWatch and X-Ray lessens operational blind spots and technical debt often involved in the operational integration of services which do not provide a cloud-aligned means of emitting operational information. An example of this might be a virtual appliance on EC2 that only emits data via SNMP or Syslog, requiring additional services (and creating additional points of failure by way of operational blind spots).

## Automation

Architecture, as described above, drives automation. Automation, ultimately, reduces the need for human intervention in repeat activities. This might be:

- Responding to an **unanticipated event** — what information can we collect ahead of the event
- Responding to an **anticipated event** — what steps can be taken automatically if a service fails, can we restart it automatically?
- Responding to a **time-based event** — e.g. do we have obligations that require the periodic execution of an activity, such as patching a machine against known vulnerabilities, something that can readily be achieved by cycling an Autoscaled group of instances leveraging a patched Amazon Machine Image (AMI)

## Resilience

Each of these is important to ensuring the perceived reliability of your application — if there is a failure of a service and no one notices, or if there is a failure of a service and someone needs to respond, or even if there is a failure of a service and you've created automation to handle the response, the customer has likely been impacted to some degree, unless you've taken steps to ensure your services are resilient by distributing across multiple EC2 instances and/or Availability Zones (Fargate, Lambda, etc.).

This approach also ensures that as you make changes to the infrastructure hosting the application (patching, as described above), that impact to end users is minimized as well.

## Deployment

Much like the above applies to the operation of a workload, it also applies to the deployment process utilized when promoting a new release to production. There are numerous approaches and services that can be leveraged, but the key outcome should be:

- The ability to deploy a release to production with minimal manual steps involved
- Some degree of pre-deployment testing (leaning towards automated testing)
- A method to deploy, identify issues and roll back if needed, by way of Canary, Blue/Green or Linear deployments, versioned releases and application layer monitoring

Having the Architecture, Monitoring and Automation in place regarding your application deployment pipeline allows you to perform more frequent deployments, allowing features (and fixes) to be made available to your consumers at a more rapid pace as well as statistically lessening the risk of the deployment (e.g. if you average a 10% defect rate in your deployments a deployment that occurs weekly with 10 items might have 1 item fail, a deployment that occurs quarterly might have 12 items fail).

Again, with the appropriate architecture selected for your deployment pipeline, automation in place to eliminate manual and error prone steps involved in the deployment and sufficient monitoring to detect the increase in errors, response time or decrease in customer engagement, you have the building blocks to begin to deploy more frequently, providing the potential for higher customer satisfaction while lowering risk.

## Feature Flags

As you increase your release rate, you might begin to encounter new challenges — how to selectively make a certain feature or function available to a select group of users or tenants. Often referred to as feature flags, they provide the advantage of abstracting the customer's users from the application's capabilities and provide a means to measure the response to a change in the application, whether it be cosmetic (e.g. a new UI) or functional (e.g. change in behavior, new capability).

With feature flags, select or percentage of users can be given access to a feature, and surveyed (proactively, reactively) and feedback measured — e.g. was the change/new feature well received? Did it work as expected?

This further reduces application change initiated risk by allowing you the ability to selectively roll out the change or, in the case of adverse results identified via your sample population, roll back the change by disabling the feature.

There are a number of third party libraries that allow the easy introduction of feature flags into your application, such as Optimizely, LaunchDarkly, etc.

## User Engagement

Alongside feature flags, you also need a way to measure user engagement — this goes above and beyond monitoring the infrastructure and application metrics, logs, events and traces. You'll want to be able to measure user engagement — which pages are most often used, which features on those pages are most often used. AWS provides a few mechanisms to support this: both Pinpoint and Amplify support browser event-based capture and analytics.

With metrics, logs, events, traces and user engagement accounted for, you'll want to establish baselines — what are normal examples of activity on the platform? What are abnormal? These will let you identify when something has gone wrong — either as an unplanned event (service failure, application defect) or a planned event (deployment introducing a new issue) and allow you to respond appropriately.

This doesn't exclude the use of custom metrics to ensure your infrastructure and application is aligned to your business needs. This can be as simple as revenue, subscribers, or even marketing campaigns. All allow you to understand how the use of your app from an infrastructure and application perspective ties back to how it's benefitting your business and how your business activities are driving users to it.

## Separation of Concerns

On the topic of releases, it's important to keep your application code separate from your data persistence tier schemas, infrastructure automation, and application configuration while at the same time not tying any of these to a given environment — for example you should be able to deploy the current running Production code and Production configuration in an environment that's not Production.

## Identity Management

Next in line after Feature Flags is having a strong identity management framework. Cognito provides the ability to integrate with a number of third party Authentication and Authorization providers, including SAML as well as its own identity store. Which providers you integrate with is likely directly driven by the persona of your users — enterprise users more likely than not require and support SAML, versus consumer based users more likely to use Facebook (for Social type apps) or Amazon (for Service type apps).

In addition to integration with commonly leveraged identity providers, the onboarding of a customer and their customers should be met with as least resistance as possible. Again, based on the persona, the workflow may be entirely self-service, without a defined administrator (consumer based users) or the workflow may require the definition of a customer administrator first, who has the ability to define who in their organization may access the app alongside further role based access controls.

Persona will also drive other needs — such as how granular those access controls are and what they can control, but persona will also drive the need to account or audit access to the service, including changes the administrator makes — all common capabilities an enterprise will be checking against when considering your app for their use.

## Billing and Entitlement

The final item we will explore is billing and entitlement. Persona will play a big part here as well — and not necessarily consumer versus enterprise. If you are building an App that provides a service to organizations also leveraging AWS, the AWS Marketplace may be a natural first step. If you are building an App that provides services strictly to consumers, leveraging a third party payment provider might make sense.

Regardless of how you bill the customer, you must also determine how you will entitle the customer — do you charge per feature? Charge x dollars for y features, or provide tiers of features? Do you align those features to the potential size of the organization? Do you offer a free tier? Do you explicitly state what you provide at the highest tier? Or simply direct the prospect to engage with you via other means (e.g. call or E-Mail for more info). How do your tiers directly tie to your costs?

In most cases, the free, small, medium, large, enterprise categorization of tiers apply. Which of those tiers provide UI based access versus which of those tiers provide API access? What limits do you enforce around the use of either at each of those tiers? Are those limits soft or hard? If soft, what's the process for increasing (e.g. is it a request or additional cost), if it's hard is it intended to protect the stability of the platform?

## Conclusion

Establishment of these fundamentals might not have an immediate impact to application feature/functionality but the up front investment (which amounts to hours, not days) will be realized after the first development cycle once you've gone live.

*— Patrick Hannah, CTO, CloudHesive*
