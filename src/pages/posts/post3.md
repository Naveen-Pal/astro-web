---
layout: ../../layouts/MarkdownPostLayout.astro
title: BAS portal admin page unauthorised access
author: Naveen Pal
description: "gaining access to admin panel is easy"
image:
    url: "https://docs.astro.build/assets/arc.webp"
    alt: "Thumbnail of Astro arcs."
pubDate: 2023-11-28
tags: ["hacking", "bas", "bug bounty"]
---

<!-- I have hacked the admin page of BAS portal
here are some information -->

One day scanning the network of IITGN sites I found out the admin portal of BAS (which is located at http://bas.iitgn.ac.in:81 ) which is also not secure and easy to break. It has default credentials which are username = "smart" , password = "smart". It allows anyone in the IITGN-SSO network to get admin access to the BAS portal. Which also allows them to add, modify, delete users.

I found this issue during testing of bas portal. I firstly scan all the ports of 10.0.137.172 (which is IP of BAS portal) , I found a service open at port 81

81/tcp   open  hosts2-ns

I opened this port on my firefox and found an admin login portal of Smart Office Online portal. I searched google for the default credentials of it and from there I got smart:smart as user:password. This is how I found this issue.

Later on this vulnerability got fixed and they removed the service from the 81 port.

What I got after reporting this vulnerbility is not just a "Thank You" reply but the motivation to always keep trying, learning, hunting bugs and reporting more bugs. The feeling of reporting first bug was so amazing.
Below is the admin page of BAS that I had access to.

<img src="/post/bas-admin-page.png" width="700"/>

This was just the beginning. I started finding new bugs on different IITGN sites.

Bye,<br>
Happy Hacking