---
layout: post
title: "New! Inspector Next"
description: "A deep dive into the redesigned Amazon Inspector — easier enablement, continuous scanning, Organizations support, and container image scanning."
tags: aws security amazon-inspector vulnerability-management
date: 2021-11-30
originally_published: https://www.cloudhesive.com/blog-posts/amazon-inspector
---

## New! Inspector Next

Amazon Inspector, launched at AWS re:Invent in 2015, is "an automated security assessment service that helps improve the security and compliance of applications deployed on AWS." With the introduction of Inspector Next, the following capabilities have been added:

- Easy to Enable (literally two clicks)
- AWS Organizations (Multi-Account) Support
- Continuous Vulnerability and Network Reachability Scanning
- Utilizes SSM Agent (no longer requires a standalone agent)
- Findings are Scored
- Findings can be Suppressed
- Remediated Findings are Automatically Closed
- Dashboard has been Redesigned
- In addition to EC2 Scanning, ECR Stored Container Images can be Scanned
- Available in All Commercial, GovCloud and China Regions

Let's explore each of these capabilities!

## Easy to Enable (literally two clicks)

Individual accounts can enable the service by clicking Enable, optionally selecting EC2 or ECR container scanning options. As soon as it's enabled, any instance with a recent SSM Agent version, and a properly configured IAM Role, starts to automatically scan.

"Unmanaged Instances" which do not have a running SSM Agent or a properly configured IAM Role are visually depicted to identify coverage gaps, and an event is emitted to EventBridge as well.

Compared to the previous version, which relied on tags to specify in-scope instances, all instances are in-scope by default.

## AWS Organizations (Multi-Account) Support

Similar to GuardDuty, Inspector Next supports the automatic enablement of scanning for new member accounts that are part of an Organization. Additionally, individual account status is clearly depicted.

Both of these capabilities further support the identification of coverage gaps — by ensuring new accounts are enabled by default (and subsequently instances and ECR container scanning enabled automatically) and accounts in which the feature is disabled are easily identified.

Compared to the previous version, in which individual accounts configured and emitted events, configuration and events can now be centrally administered and emitted.

## Continuous Vulnerability and Network Reachability Scanning

Rather than relying on schedule-based scanning, scanning of instance and container vulnerability, and instance network reachability is continuous, avoiding potential gaps in which a vulnerability or a configuration resulting in broad network reachability exists between scan intervals.

## Utilizes SSM Agent (no longer requires a standalone agent)

The previous version of Inspector required a separate agent to be installed, which was installed either manually, bootstrapping, included in an image, or deployed via SSM, by the Inspector service. This version utilizes the SSM Agent, reducing the overall impact on system resources.

## Findings are Scored

In addition to providing the NVD/CVSS or Vendor Score, Inspector provides its own score, based on the NVD/CVSS or Vendor Score, adjusted for the Compute Environment. For example, if the Compute Environment is not Internet Accessible, the Score may be Reduced.

In the previous version of Inspector, only the NVD/CVSS or Vendor Score was displayed.

## Findings can be Suppressed

Findings can be suppressed using similar rule notation as GuardDuty to suppress findings that may not be relevant to your organization. For example, suppressing findings with an Inspector score less than or equal to 5.

In the previous version, findings could not be suppressed.

## Remediated Findings are Automatically Closed

Remediated findings are automatically closed when they are no longer detected. An example of this would be updating a vulnerable library or removing an excessively permissive Security Group grant.

In the previous version, findings did not have a status.

## Dashboard has been Redesigned

With the simplification of Inspector Next's configuration (elimination of assessment targets, templates and schedules), and the addition of the new features described above, the dashboard has been redesigned.

## ECR Stored Container Images can be Scanned

ECR Stored Container Images can be scanned, with findings included in the same Dashboard and emitted to EventBridge.

Previously, Inspector did not support Container Scanning.

## Available in All Commercial, GovCloud and China Regions

Finally, Inspector is available in All Commercial, GovCloud and China Regions whereas previously Inspector was available in most regions and GovCloud, with some exceptions.

## Conclusion

Inspector Next offers significant advantages over the previous version of Inspector, eliminating complex configurations, adopting an opt-in by default approach to scanning and eliminating potential gaps in workload and image scanning.

We are looking forward to leveraging it within our organization, along with SecurityHub and EventBridge based integrations to automate common vulnerability identification, triaging, mitigation/remediation and reporting activities.

*— Patrick Hannah, CTO, CloudHesive*
