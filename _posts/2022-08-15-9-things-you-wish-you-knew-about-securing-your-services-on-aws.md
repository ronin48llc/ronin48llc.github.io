---
layout: post
title: "9 Things You Wish You Knew About Securing Your Services on AWS"
description: "A practical guide to securing your AWS footprint — from security groups to user permissions."
tags: aws security cloud
date: 2022-08-15
originally_published: https://www.cloudhesive.com/blog-posts/9-things-you-wish-you-knew-about-securing-your-services-on-aws/
---

## Introduction

Picture this: You've been called into your bosses' office.

Boss: There have been too many high-profile hacks, smacks, and attacks! I need you to secure our AWS footprint ASAP! You have till end of day.

You: You got it boss!

Where do you begin? In our practice we've seen scenarios like this play out again and again. Today we'd like to have 5-10 minutes of your time, and in exchange, you will be armed with the information to solve this problem! In the rush to get solutions built, products online, and deadlines met, there are oftentimes key things missed. Let's review them now so you can check them off your list and secure your AWS Fortress! Ready? Let's go.

## The Shared Responsibility Model

As an overview, let's talk briefly about the shared responsibility model. This will help you both in planning your approach and in talking to stakeholders, yourself, or a [rubber duck](https://en.m.wikipedia.org/wiki/Rubber_duck_debugging).

You, as the customer are responsible for security 'in' the cloud. AWS, as the provider, is responsible for security 'of' the cloud.

## What do customers often miss?

The first thing to look for are Security Groups — here let's look at Ingress Security Groups, Egress Security Groups out to the Internet, and Security Groups to/from other Services (AWS and On Premises).

## Ingress Security Groups

What are your security groups allowing IN to your AWS account? Of course, there is the obvious — such as checking for 0.0.0.0/0 to your EC2 instances. You *could* click on every EC2 security group from your EC2 page… and then remember to do it for every region… did you check them all? This can easily become an overwhelming task in and of itself in some large accounts. Instead of that headache — save yourself and leverage AWS Trusted Advisor! Trusted Advisor will automatically check your security groups for unrestricted access, with all the details in the findings screen — including source, destination and hyperlinked security group — allowing for a quick fix.

In Short, Ingress Security Group Grants are your absolute first line of defense, as it's likely the first place an attacker will look for vulnerabilities in your environment's configuration.

## Egress Security Groups

Just as important as unrestricted access, you want to check on which security groups are allowing egress access to the Internet. Are all of these necessary? Audit it, create a report and share it with the stakeholders, aim to reduce your attack surface as much as possible.

The following AWS CLI commands will guide you to get an output of all EC2 security groups: [AWS Documentation](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-security-groups.html)

Luckily for us, there's no more need to fuss with setting up the CLI locally, setting regions and parameters in your local config. [AWS CloudShell](https://aws.amazon.com/cloudshell/) is here to save the day (and your time!). This great new addition allows you to access a Linux terminal in a browser with one click — includes the AWS CLI tools pre-installed.

Egress Security Groups are your last line of defense, from a network traffic protection perspective. Attackers, once they have access to an environment or system may leverage overly permissive Security Groups for data exfiltration purposes (e.g. stealing your data), or for introducing additional malicious software, configurations or scripts in your environment (potentially from seemingly innocuous sources — like GitHub). Not being overly permissive with your Egress Security Groups (which may be outright exclusion of 0.0.0.0/0 destinations, leveraging AWS Network Firewall or a third party virtual appliance to filter this data), pays in dividends once an environment has been compromised.

## Security Groups to/from other Services

For these checks you want to have a good grasp of where traffic is being allowed. You can download the entire output of the describe-security-groups command and parse it manually. You can also filter it via CLI parameters for specific ports in either direction. Know what your security groups are allowing to and from other services and importantly — to any on-premises systems.

Service to Service Security Group management is important to prevent lateral movement from host to host or environment to environment. For example you may have a public web application that is compromised — once the attacker has access to the server or servers that web application is running on, the attacker will likely attempt to find other, adjacent hosts and having a "zero trust" model from host to host, implemented via Security Groups, will help thwart these attempts.

## Lifecycle Management of Security Groups

Understanding that in our scenario your environment is already live, VPC Flow Logs will play at least two roles in your quest. The first role is allowing you to identify, historically, where traffic is coming from, and where traffic is going to. This allows you to validate the need for a given security group's grant. The second role is allowing you to identify, historically, where traffic is coming from, and where traffic is going to. Yes, that's a repeat. In the second role's scenario, having this understanding will support your objectives from the perspective of incident response.

While VPC Flow Logs may show you the history of traffic flows in the environment, services such as Cloud Trail and Config let you understand the history of changes to the Security Groups in the environment — which let you proactively detect unauthorized changes being made (another sign of an attempted or successful attack) or even changes made by your own organization's employees and contractors counter to any standards your organization may have set.

Finally, from a preventative perspective, leveraging CloudFormation and well scoped IAM Policies can help you further implement your organizations standards for Security Groups — if a user has no permission to make the change, or the change is vended through code, you reduce your reliance on humans to follow directions.

## Security of the Environment

When looking at the security of your environment, what should be front of mind is managing the introduction of changes to the environment through strong governance and change control. Now you have access to a suite of services — AWS Config, AWS CloudFormation as well as services like Amazon CodeGuru and AWS CodeCommit, which allow you to securely commit your source code (and configuration) artifacts, validate the security of those artifacts and deploy those artifacts without manual, human involved processes.

As you mature the security of the environment and adopt a "hands off" or "lights out" approach to introducing changes to the environment and monitoring the environment, you may also consider how the lifecycle of the infrastructure of the environment is managed. Your environment's code may run directly on a virtual machine (EC2 Instance), may be containerized or may run as a serverless function in Lambda. As you further abstract your code from the metal that code runs on, you will find your options to shed some of your responsibility in the shared responsibility model are increased.

Of course, not every application is suited for Lambda so it's important to be pragmatic in your decisions, however, assuming you cannot utilize Lambda, containers, particularly ones running on ECS Fargate are a next best step. Ultimately, if you find yourself needing to run your application on EC2, utilizing Autoscaling instance configurations (even as an instance of 1) has the added benefit of "return to home" — if something goes awry kill the instance and let it rebuild from a known good source.

## Security of supporting servers (Shared services, such as Active Directory)

In complex environments, you likely have supporting servers or servers that support a shared function (such as Active Directory). Adequately protecting your shared services is critical, as those services tend to have a broader reach across your environment, may run common software and be a target of lateral movement upon initial compromise of the environment.

[AWS Patch Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html) provides a suitable approach for in-place patching of these instances, protecting from known vulnerabilities.

## Security of other network-accessible resources (Web Servers)

A common attack vector is publicly available web resources — web sites, web servers, web applications, particularly ones that run common libraries. A recent example of this is the commonly exploited Log4J vulnerabilities in which innumerable commercial applications were built utilizing that library.

An approach has been proposed (referred to as a software bill of materials) as a way to understand the software and libraries that go into commercially published software, but the challenge extends to even the software your organization builds and operates.

## User Permissions (Non-Local Admin, Local Admin, Global Admin)

When looking at user permissions, you want to ask yourself these questions:

- What access do users have to the execution environment? (AWS Control Plane, EC2, Workspaces)
- How do they get access to the execution environment? (API, Network, Local User, Federated User, etc.)
- How are those users permissioned? (All users are privileged users? Appropriate use of role based access?)
- How is their access to data and changes to systems audited? (Even "Read Only" may have negative impact when it comes to data exfiltration!)

When answering these questions you want to look at IAM, AWS Config, AWS SSO, and Trusted Advisor to investigate and remediate.

## Access of the environment (PKI Cert, PKI PIV, Network, MFA)

- How are you logging into AWS? How are you logging into the execution environment?
- How are you validating the user/system accessing the environment?

Do you have MFA enabled on the Root Account? AWS Trusted Advisor will let you know in its security summary screen!

## The rest of the AWS Account

In this article we focused on the execution environment, namely an execution environment that may be fixed in configuration and virtual machine compute based, however, as your organization proceeds down a path to serverless, each of the services supporting that application may have their own characteristics in support of Security — each service's documentation site will carry a section around exactly that.

## Conclusion

In conclusion, there is no singular stream of work or approach you can take in securing your AWS Environment, nor is it an act that you do once. The best way to start is to start small, and start with the simple, and commonly overlooked items, establish a baseline, measure the impact of that work and proceed from there.

*— Jorge Rodriguez, Senior Lead Cloud Engineer, CloudHesive and Patrick Hannah, CTO, CloudHesive*
