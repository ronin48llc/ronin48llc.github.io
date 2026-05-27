---
layout: post
title: "Hybrid Compute Services for Your SaaS App"
description: "How to evolve your SaaS application's compute architecture on AWS — from EC2 to containers and serverless."
tags: aws saas serverless containers lambda
date: 2020-01-15
originally_published: https://www.cloudhesive.com/blog-posts/hybrid-compute-services-for-your-saas-app/
---

Your app is under a continual state of change as you iteratively add features and functionality based on your insights in the market you serve or direct feedback from your customers. It's also possible that its architecture has evolved overtime — perhaps it started as a small project built on Spring framework and has grown beyond that.

Amazon Web Services (AWS), as we know, offers a variety of compute services and in the selection of a compute service to fit your needs, you may often find it portrayed as pick the best one for your needs, rather than, pick the best for a given use case (the later approach being often utilized for data persistence tiers where you may select a combination of data persistence solutions for your given application's needs such as an in-memory database for disk latency sensitive applications versus a traditional RDBMS database for transactional data).

## Compute Service Categories

Compute services are generally categorized in 1 of 3 ways:

- **Server** — with bare metal and virtual variants, running in an AWS region or at the edge (a definition that continues to be expanded on)
- **Container** — which may ultimately be leveraging a server-based host running a Docker daemon and orchestrated through Elastic Container Service (ECS), Elastic Kubernetes Service (EKS) or a "Serverless" variant such as Fargate, offering similar capability without the need to manage a server behind it
- **Code** — executed in an environment such as Lambda (Region and edge based deployments much like Server based compute), offering an entirely new way to deploy and serve API, event or time based requests

So while your stack might have started out rather simplistic from the perspective of its infrastructure architecture, you're now finding yourself in a position where, needing to reduce time and effort spent on the infrastructure management aspects of your application or needing to leverage new AWS services to provide for functionality in your app, you're looking to expand your compute options. To do so, it helps to lay down some groundwork first.

## First Progression: Automate

The first natural progression, if your software stack supports it and isn't already doing so, is expansion beyond using hand-configured EC2 instances for your compute (and other tiers) and automating your build/deploy pipeline (again if you aren't already doing so). Both can be accomplished by leveraging CodeStar (for your build pipeline) and either Elastic Beanstalk or ECS for your compute platform and moving the supporting services, not part of your core application to Managed Services offered by AWS, such as Application Load Balancer (ALB) or Relational Database Service (RDS). Leveraging these three sets of services you've eliminated much of the manual activities (or highly customized/highly coupled scripting) associated with deploying and running your platform.

## Next Progression: Serverless

The next natural progression we often encounter and the initial driver towards serverless is either:

- A **hybrid microservices model** where new functionality is delivered by way of API Gateway and Lambda functions rather than a Java container
- **Movement of schedule based activities** outside of the primary Java container serving API requests, delivered by way of EventBridge and Lambda
- Supporting an **event based approach** where asynchronous requests (such as those that do not have a direct effect on the user interface) are delivered by way of a Simple Queue Service (SQS) or EventBridge based solution, ultimately handled by Lambda

Abstraction of this from the user interface is relatively easy if you're already using a framework such as React or Angular and from a request routing perspective, CloudFront can be leveraged alongside ALB and API Gateway to eliminate challenges with Cross Domain access.

## Observability

An added advantage of utilizing ALB and API Gateway is their integration with the AWS X-Ray Service, which provides distributed application tracing capabilities with minimal up-front setup (these services append an X-Ray header to web requests requiring only your application to be instrumented alongside the X-Ray agent, which is included in Elastic Beanstalk by default). Further each component of your application can be instrumented leveraging CloudWatch Metrics and Logs, allowing for the creation of a comprehensive dashboard and corresponding alarms to measure application health from user experience and back.

## Release Management

Your application's release process can be further expanded to support the management of serverless applications leveraging AWS Serverless Application Model (SAM) to manage Lambda functions and associate configurations/code (separately maintained) and related AWS services, providing a streamlined approach to deploying releases to your applications operating environment.

## Data Persistence

From a data persistence perspective, your serverless components can access the same components as your core application components, either directly (through APIs, component specific connection strings or the core application API itself). As a general best practice, however, data persistence tiers should be accessed directly by the service that owns that persistence tier, providing access to other services via API.

## Conclusion

Regardless of where you are in your customer's adoption of your application, your organization size or your application's complexity, if you have an application tier still leveraging EC2 based compute resources, you stand to benefit from the adoption of Container or Serverless based compute services from a cost, scale, operational ease and integration perspective.

*— Patrick Hannah, CTO, CloudHesive*
