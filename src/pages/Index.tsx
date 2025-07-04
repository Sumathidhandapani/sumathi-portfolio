import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDown, Mail, Linkedin, Download, ExternalLink, Calendar, MapPin } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const handleViewWork = () => {
    // Scroll to the experience section to show work history
    scrollToSection('experience');
  };
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/821d9859-e0a2-4771-a5d0-ccd668407b51.png';
    link.download = 'Sumathi_D_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const skills = {
    "Digital Marketing Tools": ["Google Ads", "Analytics", "Search Console", "Keyword Planner", "Meta Ads Manager", "Canva", "Gravity Write", "ChatGPT", "Google Tag Manager"],
    "Core Skills": ["SEO", "Content Marketing", "SMM", "Email Marketing", "GMB Optimization"],
    "Technical Tools": ["HTML", "CSS", "WordPress", "GitHub"],
    "Additional": ["Typing (Speed & Accuracy)"]
  };
  const experiences = [{
    title: "Digital Marketing Intern",
    company: "ByZero Technologies",
    period: "Feb 2025 – Jun 2025",
    description: "At ByZero Technologies, I gained hands-on experience in core areas of digital marketing, contributing to both real client work and demo-based learning.",
    details: [
      {
        category: "Search Engine Optimization (SEO)",
        items: [
          "Off-Page SEO (Client Projects): Created backlinks to improve search engine rankings through social bookmarking, blog submissions, guest posting, and article submissions",
          "On-Page SEO (Demo Website): Performed keyword research using Google Keyword Planner, wrote optimized meta titles and descriptions, added internal and external links for site structure and relevance, used image alt tags for better accessibility and SEO performance"
        ]
      },
      {
        category: "Google Ads & Social Media Marketing",
        items: [
          "Designed and managed demo campaigns to understand targeting, bidding, and performance analysis",
          "Practiced campaign structure setup, ad copywriting, and creative design",
          "Demo Campaigns Created"
        ]
      }
    ],
    location: "Remote"
  }, {
    title: "Web Development Intern",
    company: "Corizo",
    period: "Aug 2024 – Oct 2024",
    description: "During this internship, I worked on both individual and team-based web development projects that enhanced my practical skills in front-end and full-stack development.",
    details: [
      {
        category: "Minor Project – CRUD Application",
        items: [
          "Independently built a Create, Read, Update, Delete (CRUD) web application",
          "Gained experience in backend operations, form handling, and database integration"
        ]
      },
      {
        category: "Major Project – E-commerce Website (Team Project)",
        items: [
          "Contributed as a front-end developer",
          "Responsible for developing the cart page functionality, including item add/remove logic and total cost calculation"
        ]
      }
    ],
    location: "Remote"
  }, {
    title: "Digital Marketing Intern",
    company: "Shanthils Databot",
    period: "June 2023 – July 2023",
    description: "Learned the basics of SEO and digital marketing by writing blogs and supporting content efforts for the website.",
    location: "Remote"
  }];
  const projects = [{
    title: "CRUD Web App",
    description: "Simple application using HTML/CSS/JS with local storage functionality",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"]
  }, {
    title: "E-commerce Cart Page",
    description: "Developed cart functionality as part of a collaborative team project",
    tech: ["HTML", "CSS", "JavaScript", "Team Collaboration"]
  }, {
    title: "SEO Optimization (Demo Site)",
    description: "Complete on-page SEO setup and optimization strategy",
    tech: ["SEO", "WordPress", "Analytics", "Keyword Research"]
  }, {
    title: "Google Ads Campaigns",
    description: "Planned and executed demo campaigns using keyword strategy and persuasive ad content to drive targeted results.",
    tech: ["Google Ads", "Keyword Research", "Copywriting", "Campaign Management"]
  }, {
    title: "Client SEO Off-Page",
    description: "Comprehensive backlink strategy with article, blog, and guest post submissions",
    tech: ["Link Building", "Content Marketing", "Outreach", "SEO"]
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sumathi D
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className={`capitalize transition-colors duration-300 ${activeSection === item ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-300 hover:text-purple-400'}`}>
                  {item}
                </button>)}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="/lovable-uploads/a2092875-bd60-4b57-ba8c-bc403795f273.png" alt="Sumathi D - Digital Marketing Professional" className="w-full h-full object-cover object-center" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
          
          {/* Intro Text */}
          <div className="text-center md:text-left">
            <h1 className="font-bold text-white mb-6 animate-fade-in">
              <span className="text-4xl md:text-5xl">Hello! I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sumathi</span></span>
              <br />
              <span className="text-lg md:text-xl">— welcome to my digital space.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in delay-300">Aspiring Digital Marketer with a passion for growing brands online.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in delay-500">
              <Button onClick={handleViewWork} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg">
                View My Work
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-purple-400 hover:text-purple-300 transition-colors">
            <ArrowDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">I'm Sumathi, a recent graduate in Computer Science and Engineering from J.K.K. Nattraja College of Engineering and Technology. My journey into digital marketing began with a genuine curiosity about how brands grow and connect with people online.</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">During my internships at ByZero Technologies, Shanthils Databot, and Corizo, I gained hands-on experience in SEO (on-page and off-page), Google Ads, social media marketing, email marketing, and Google Business Profile optimization. These experiences helped me understand the real impact of digital strategies on business growth.</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">I'm creative, detail-oriented, and always eager to learn. My goal is to help businesses grow through smart, engaging, and effective digital marketing strategies.</p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Education</h3>
              <p className="text-gray-300">B.E - Computer Science and Engineering</p>
              <p className="text-gray-400">J.K.K. Nattraja College of Engineering and Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => <Card key={category} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-purple-400 text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map(skill => <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-purple-400 text-lg font-medium">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  {exp.details && (
                    <div className="space-y-4">
                      {exp.details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          <h4 className="text-purple-300 font-semibold mb-2">{detail.category}</h4>
                          <ul className="space-y-2 ml-4">
                            {detail.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed list-disc">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => <Badge key={tech} variant="outline" className="border-purple-400/50 text-purple-300">
                        {tech}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Send me a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your Name" className="bg-slate-700/50 border-purple-500/20 text-white placeholder-gray-400" />
                <Input placeholder="Your Email" type="email" className="bg-slate-700/50 border-purple-500/20 text-white placeholder-gray-400" />
                <Textarea placeholder="Your Message" rows={4} className="bg-slate-700/50 border-purple-500/20 text-white placeholder-gray-400" />
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:sumathidhandapani72@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    <Mail className="text-purple-400" size={20} />
                    <span>sumathidhandapani72@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-purple-400 text-xl">📱</span>
                    <span>9361177822</span>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/sumathi-d-097113235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    <Linkedin className="text-purple-400" size={20} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
              
              <Button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Sumathi D. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a 
              href="mailto:sumathidhandapani72@gmail.com"
              className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sumathi-d-097113235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
