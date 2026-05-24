---
layout: post
title: "Touch the Cloud"
description: "Exploring the physical side of AWS — from trans-oceanic cables to satellites, outposts, and IoT devices."
tags: aws infrastructure hardware iot
date: 2022-09-15
originally_published: https://www.cloudhesive.com/blog-posts/touch-the-cloud/
---

Let's talk about the physical side of AWS. So often we talk about Cloud, Cloud Providers, Cloud Services and take it for granted all the physical technology that AWS has developed. Let's take a tour and see what's at the edge!

## AWS to the Edge

### Trans-Oceanic Cables

What we are looking at is data flowing across AWS regions via a single operational and administrative domain. All of this is owned and controlled by AWS. To ensure speed and quality of service, multiple parallel 100 gigabit links are used crossing the world's oceans. A single link cut will not impact operations.

Cable types used in inter-region connectivity:
- **SL17 Lightweight**: Buried in the ocean, used where there are minimal risks to a link-cut
- **SL17 SPA**: Protects against light abrasion — also known as 'Fishbite' protection
- **SL17 Light Wire Armor**: Protects against harsher abrasion — such as fishing and anchors
- **SL17 Double Armor-HS**: Higher grade of protection guarding against greater hazards

These undersea cables run through repeaters, which supply electrical power 3 miles under the sea and are supposed to last 20 years. In the event of a link cut due to a fishing trawler accident, the voltage is doubled on the non-cut cable while the link is serviced. Seawater is used as a 'third cable', keeping the link operational while the damaged link is repaired. This equates to no loss of service for the AWS region.

### Custom MACSEC Switch

AWS uses custom network switches to encrypt traffic leaving Amazon buildings. All customer data is secure and isolated from other AWS customers. MACSec is an IEEE Standard that ensures confidentiality, integrity and authenticity of your data. This can be used in Direct Connect connections from your corporate data center to AWS. For more information, see [MAC Security — AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/MACsec.html).

### AWS Direct Connect

AWS allows customers, via Direct Connect, to create private, physical connections to AWS Points of Presence globally, which provide a direct path between AWS and customer facilities where consistent, dedicated connectivity may be preferred over Internet based connectivity.

### AWS Private 5G

Moving from the sea to the Air, AWS Private 5G allows site-wide deployment of wireless networks based on the 5G standard, in areas not otherwise covered by a mobile network operator and/or in environments in which WiFi is not feasible (such as large equipment and container yards). The service includes the radios, software, SIM cards and supporting infrastructure. All you need to provide is power (even PoE works!), Internet, spectrum and a certified professional installer.

### Amazon Project Kuiper

From the Air to the Sky, Amazon [Project Kuiper](https://www.aboutamazon.com/news/company-news/amazon-receives-fcc-approval-for-project-kuiper-satellite-constellation) will create a constellation of low earth orbit (LEO) satellites with the goal of providing low latency, high throughput Internet service to underserved communities of the world, connected via AWS operated Ground Stations.

### AWS Ground Station

Available independently from Project Kuiper, AWS Ground Stations can be used to retrieve data from satellites or send command and control signals to them, through pre-arranged timeslots on an on-demand or committed consumption based price. Ground stations are deployed globally and support LEO, NGSO, and MEO satellites operating at S and X Bands.

### AWS Local Zones

AWS Local Zones offer a subset of the AWS services and can be found in regional metropolitan areas, intended for low latency applications or applications with specific data residency requirements.

### AWS Wavelength

Like AWS Local Zones, AWS Wavelength Zones offer a subset of the AWS services co-located with popular 5G carriers, providing low latency, high throughput access to services from mobile devices connected to 5G networks.

### AWS Outposts

Probably one of the most direct forms of physical cloud are [AWS Outposts](https://aws.amazon.com/outposts/). At first glance, it's a physical server delivered to you, running AWS. This is the answer to several questions: What if the nearest public cloud servers are not near enough? When extremely high performance is needed (think single-digit millisecond latency) — Outposts can be used here. This has applications in Medical, Gaming, Manufacturing and Logistics, particularly Maritime. They are also very useful when dealing with strict data residency requirements.

Once you rack and stack AWS Outposts, the services are fully managed by AWS, giving you the same benefits of reducing operational overhead, including physical support. All the same tools and APIs you use with AWS Cloud you can use with AWS Outposts.

## AWS to the Consumer

### The AWS Snow Family

The [AWS Snow family](https://aws.amazon.com/snow/), consisting of the Snowcone, Snowball, and Snowmobile — devices used to facilitate small and large scale data transfer, along with providing compute on a number of these devices. Here at CloudHesive we used the SnowCone along with a running instance of the [AWS DataSync](https://aws.amazon.com/datasync/) agent to persistently synchronize data from logistics warehouses to AWS, providing just-in-time, catalog quality images of new inventory. Snowcone is so sturdy that AWS sent one [into orbit](https://aws.amazon.com/blogs/aws/how-we-sent-an-aws-snowcone-into-orbit/) on the International Space Station.

For larger workloads, AWS provides Snowball and Snowball Edge. The Edge device provides its own local compute and integrates with AWS Lambda and Amazon S3.

AWS Snowmobile provides the largest data transfer capability, in the exabyte range — which comes in a shipping container pulled by a very large truck.

### AWS DeepRacer

AWS DeepRacer is a very accessible entry point to get started with machine learning. AWS offers AI/ML scholarships and a DeepRacer league. Each year the professional league championships are held at re:Invent. You can get started [here](https://aws.amazon.com/deepracer/).

### AWS DeepComposer

Like DeepRacer, [AWS DeepComposer](https://aws.amazon.com/deepcomposer/) is another gateway for developers to start with machine learning. It is a creative and fun way to get started with a real musical keyboard. Generative melodies are constructed via your input blended with artificial intelligence.

### AWS DeepLens

[DeepLens](https://aws.amazon.com/deeplens/) is a wireless and programmable camera that can be used for image detection and deep learning. It integrates with SageMaker to create your own machine learning models, or you can use pretrained ones. It also runs Amazon IoT Greengrass, one of a few purpose built operating systems intended for IoT devices.

### AWS IoT Button & EduKit

The AWS IoT Button is a WiFi connected, embedded IoT device for developing basic AWS-based IoT applications. The AWS IoT EduKit builds on those concepts with a complete hardware platform including I/O, LEDs, Touchscreen, Haptic feedback, IMU, Temperature sensor, microphone/speaker on an ESP32 compatible CPU.

### Amazon Alexa

Amazon Alexa, introduced in 2014, combines the power of Cloud, Natural Language Understanding (NLU), and purpose-built hardware. Developers can build skills, host their backend on AWS (serverless!) and publish to a marketplace. A related engine, Lex, is available as a standalone AWS service that can power Contact Center platforms including Amazon Connect.

### Amazon Monitron

[Amazon Monitron](https://aws.amazon.com/monitron/) is used for industrial equipment monitoring via AWS. CloudHesive worked with Tidewater Block — a family-owned manufacturer and distributer of building and masonry products — to deploy Monitron. It uses sensors to capture vibration and temperature data from equipment, a gateway device to securely transfer data to AWS, and machine learning to analyze the data for abnormal machine patterns and predict failures before they happen.

### AWS Panorama

[AWS Panorama](https://aws.amazon.com/panorama/) does for Computer Vision what Alexa does for Natural Language Understanding, and comes in two flavors — a dedicated appliance capable of taking video stream data from IP cameras or an embedded device produced by third party partners. It leverages machine learning on AWS to perform high speed local predictions in milliseconds.

### AWS Elemental Appliances

In 2015 AWS acquired Elemental Technologies, which produced software for video encoding, decoding, transcoding, and pixel processing. This software, traditionally bundled with hardware, was made available via cloud service models but appliances are still available for studio or other settings where local processing is preferred.

## Conclusion

While AWS provides truly hyperscaled public cloud services, its building blocks, connectivity and over a dozen services have a physical component involved — many that truly allow you to reach out and touch the cloud.

*— Jorge Rodriguez, Senior Lead Cloud Engineer, CloudHesive and Patrick Hannah, CTO, CloudHesive*
