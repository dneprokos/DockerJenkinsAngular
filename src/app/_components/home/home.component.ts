import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dockerText: string = `Docker is a set of coupled software-as-a-service and platform-as-a-service products that 
  use operating-system-level virtualization to develop and deliver software in packages called containers.
  The software that hosts the containers is called Docker Engine. It was first started in 2013 and is developed by Docker, Inc. 
  The service has both free and premium tiers. Containers are isolated from one another and bundle their own software, libraries 
  and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single 
  operating-system kernel and are thus more lightweight than virtual machines. Containers are created from images that specify their 
  precise contents. Images are often created by combining and modifying standard images downloaded from public repositories. 
  Docker is developed primarily for Linux, where it uses the resource isolation features of the Linux kernel such as cgroups and 
  kernel namespaces, and a union-capable file system such as OverlayFS and others[28] to allow independent containers to run within 
  a single Linux instance, avoiding the overhead of starting and maintaining virtual machines (VMs).[29] The Linux kernel's support 
  for namespaces mostly[30] isolates an application's view of the operating environment, including process trees, network, user IDs 
  and mounted file systems, while the kernel's cgroups provide resource limiting for memory and CPU.[31] Since version 0.9, 
  Docker includes the libcontainer library as its own way to directly use virtualization facilities provided by the Linux kernel, 
  in addition to using abstracted virtualization interfaces via libvirt, LXC and systemd-nspawn.`

  jenkinsText: string = `Jenkins is an open source automation server written in Java. Jenkins helps to automate the non-human part 
  of the software development process, with continuous integration and facilitating technical aspects of continuous delivery. 
  It is a server-based system that runs in servlet containers such as Apache Tomcat.
    \n\It supports version control tools, including AccuRev, CVS, Subversion, Git, Mercurial, Perforce, TD/OMS, ClearCase and RTC, 
  and can execute Apache Ant, Apache Maven and sbt based projects as well as arbitrary shell scripts and Windows batch commands. 
  The creator of Jenkins is Kohsuke Kawaguchi. Released under the MIT License, Jenkins is free software. Builds can be triggered by 
  various means, for example by commit in a version control system, by scheduling via a cron-like mechanism and by requesting a 
  specific build URL. It can also be triggered after the other builds in the queue have completed. Jenkins functionality can be extended 
  with plugins.

  The Jenkins project was originally named Hudson, and was renamed after a dispute with Oracle, which had forked the project and 
  claimed rights to the project name. The Oracle fork, Hudson, continued to be developed for a time before being donated to the Eclipse Foundation. 
  Oracle's Hudson is no longer maintained and was announced as obsolete in February 2017.`


}
