---
title: "Streamlining Workflows with a MIDI Controller: Efficient Multitasking"
date: "2026-05-15"
tags:
  - "MIDI Controller"
  - "Kiro"
  - "Claude"
  - "VSCode"
  - "Quick"
  - "Workflows"
  - "Multitasking"
  - "VSCode"
  - "Productivity"
  - "Local MCP Server"
  - "Pre-canned Responses"
  - "Notifications"
description: "Explore how integrating a MIDI controller with Kiro can streamline your multitasking workflow, ensuring you never miss a notification and can efficiently manage multiple tasks across platforms like VSCode, Claude, Kiro and Quick. Learn about setting up a local MCP server and pre-canned responses to enhance productivity without diving into more complex systems like OpenClaw."
---

Why not?

I normally have 3+ concurrent activities going on between **Claude**, **Claude Code in Visual Studio Code (VSCode)**,  **Kiro** and **Quick** In between waiting for them to finish, or moving to the next step, or asking me questions because I am vague in my requests, I do other things - typical multitasking. Good use of time, right? Then I forgot they are waiting.

**Interrupts and Notifications**

So what if we think about computers and interrupts? What if these tools become the interrupt to my background activities? Great, we can create a local **MCP server** (I know, a bad idea for most, but bear with me), use that with these tools, and pop a notification to my screen so I am 1) reminded that it's here 2) am aware it needs me 3) can give it one of a few obvious responses).

(Tools are tools in the traditional sense, not agent tools, and I am calling it 'it', not 'Barbie').

**Enhancing Efficiency with MIDI Controllers**

Neat, now that that works, why not pre-can some responses? I swear I have seen a 3-key USB-C attached device that does this. Well, I have a **MIDI controller**, which is even better because I lack musical talent.

By configuring my MIDI controller, I can streamline my workflow even further. When I get a popup (or the MIDI pad lights up for the specific tool), I can hit a button, switch focus to that tool, and likely tell it 'okay go ahead'.

**Balancing Innovation and Stability**

This is about as willing as I am to go in the world of **OpenClaw**, because the last thing I need is to end up with a wiped laptop. Of course, **Quick** has been interesting, but it is starting to show its **AWS**-ness (can't seem to add more than one Slack Workspace, though it claims it's possible, but also doesn't know where to go to raise a support case, besides the usual suspects, which are not appropriate for a consumer app).

**The Project**

I called it MPD-Vibe because it's an MPD218 controller and I'm vibe coding with it. Pretty creative, right? Unfortunately when I got this pandemic-era device I didn't envision using it for this purpose, so this model only has Red LEDs (other models have the full RGB spectrum).

I started in Claude as an experiment, got some help with Quick to explain to Claude how to setup an MCP server automatically, and tied it off in Kiro for an actual OSX installer and app. Claude also pretended not to know how to light an LED on the controller so google found me a nice GitHub Gist with sample python code (thanks! https://gist.github.com/peterc/7f618761f47b1669068ed4c93c9d0eb2).

Aside from that, some testing yielded various MCP behavioral differences between the tools, state management, blocking and timeout issues, but I think I have them all nailed.

**Conclusion**

By integrating a MIDI controller with the various flavors of Agentic apps and setting up a local MCP server, you can streamline your multitasking workflow, ensuring you never miss a notification and can efficiently manage multiple tasks across platforms. While diving into more complex systems like **OpenClaw** might seem tempting, balancing innovation with stability is key. With the right tools and setup, you can enhance productivity without unnecessary risks.
