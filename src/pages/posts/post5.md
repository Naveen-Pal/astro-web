---
layout: ../../layouts/MarkdownPostLayout.astro
title: Computer labs of IITGN is vulnerable to remote access!!
author: Naveen Pal
description: "How I Discovered a Remote Access Vulnerability in IITGN's Computer Lab"
image:
    url: "https://docs.astro.build/assets/arc.webp"
    alt: "Thumbnail of Astro arcs."
pubDate: 2024-12-03
tags: ["hacking", "bas", "bug bounty","remote access"]
---

One day sitting in the computer lab. I found Nomachine is installed in their system googling about NoMachine (yes, most powerfull hacking skill is Googling :). I find out NoMachine is used for remote desktop and runs on port 4000 with nx protocol.

Now I know what to do I install Nomachine in my laptop and put the IP of lab computer and try to connect it. 
<br>
<BlogImage 
  src="/post/clab-set.png" 
  alt="Computer lab setup" 
  caption="A screenshot of the computer lab setup" 
  width="80%" 
/>
<img src="/post/clab-set.png" width="500"/>
<br>
It was asking for username and password. I simple give it the default credentials of student and gain access.
<!-- ![alt text](image.png) -->

<br>
<img src="/post/clab-login.png" width="500"/>
<br>
Fortunately It connected successfully and I was able to do everything on the lab computer remotely but I don't have admin level previleges althrough we can use their high resources at the comfort of hostel. What do you mean we can also cheat using this during lab exam, This was my first thought but professor shutdowns the connections during lab exams.
<br>
<img src="/post/clab-access.png" width="500"/>
<br>
There was also another vulnerability by which anyone can get access to systems files and directories through [SMB](https://www.upguard.com/blog/smb-port). 
Credites to [ChandrabhanPatel](https://github.com/cpatel321)
<br>for finding this Remote file inclusion vulnerability.
<br>
[hello](https://google.com).
<br>
<img src="/post/clab-smb.png" width="500"/>
<br>
Unfortunately or fortunately after reporting this issue it was resolved by the ISTF. 

<br>
<br>
Happy Hacking :)