
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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    "Digital Marketing Tools": ["Google Ads", "Analytics", "Search Console", "Keyword Planner", "Meta Ads Manager", "Canva"],
    "Core Skills": ["SEO", "Content Marketing", "SMM", "Email Marketing", "GMB Optimization"],
    "Technical Tools": ["HTML", "CSS", "WordPress", "GitHub"],
    "Additional": ["Typing (Speed & Accuracy)"]
  };

  const experiences = [
    {
      title: "Digital Marketing Intern",
      company: "ByZero Technologies",
      period: "Feb 2025 – Jun 2025",
      description: "Off-page SEO for client sites, On-page SEO for demo website, Google Ads & SMM campaign structure and execution",
      location: "Remote"
    },
    {
      title: "Web Development Intern",
      company: "Corizo",
      period: "Aug 2024 – Oct 2024",
      description: "CRUD web app and E-commerce cart page development",
      location: "Remote"
    },
    {
      title: "Digital Marketing Intern",
      company: "Shanthila Databot",
      period: "Jun 2023 – Jul 2023",
      description: "Blog writing and SEO fundamentals",
      location: "Remote"
    }
  ];

  const projects = [
    {
      title: "CRUD Web App",
      description: "Simple application using HTML/CSS/JS with local storage functionality",
      tech: ["HTML", "CSS", "JavaScript", "Local Storage"]
    },
    {
      title: "E-commerce Cart Page",
      description: "Developed cart functionality as part of a collaborative team project",
      tech: ["HTML", "CSS", "JavaScript", "Team Collaboration"]
    },
    {
      title: "SEO Optimization (Demo Site)",
      description: "Complete on-page SEO setup and optimization strategy",
      tech: ["SEO", "WordPress", "Analytics", "Keyword Research"]
    },
    {
      title: "Google Ads Campaigns",
      description: "Demo advertising campaigns with keyword targeting and creative copywriting",
      tech: ["Google Ads", "Keyword Research", "Copywriting", "Campaign Management"]
    },
    {
      title: "Client SEO Off-Page",
      description: "Comprehensive backlink strategy with article, blog, and guest post submissions",
      tech: ["Link Building", "Content Marketing", "Outreach", "SEO"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sumathi D
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === item
                      ? 'text-purple-400 border-b-2 border-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item}
                </button>
              ))}
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
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-lg font-medium">
                  Profile Photo
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
          
          {/* Intro Text */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sumathi</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in delay-300">
              A passionate digital marketing enthusiast with hands-on experience in SEO, Google Ads, and content creation. 
              I help brands connect with audiences through strategic digital campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in delay-500">
              <Button onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg">
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
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sumathi is a recent graduate in Computer Science and Engineering from J.K.K. Nattraja College of Engineering and Technology (Class of 2025). 
              Her journey into digital marketing began with curiosity about how online brands grow and engage.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Through internships at ByZero Technologies, Shanthila Databot, and Corizo, she gained hands-on experience in SEO, Ads, and content strategies. 
              Creative, detail-oriented, and always learning, Sumathi aims to help businesses grow through smart digital strategy.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Education</h3>
                <p className="text-gray-300">Computer Science and Engineering</p>
                <p className="text-gray-400">J.K.K. Nattraja College of Engineering and Technology</p>
                <p className="text-gray-400">Class of 2025</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Key Strengths</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• SEO (on-page/off-page)</li>
                  <li>• Google Ads campaigns</li>
                  <li>• Social media marketing</li>
                  <li>• Email marketing</li>
                  <li>• Google Business Profile optimization</li>
                </ul>
              </div>
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
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-purple-400 text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
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
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
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
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    {project.title}
                    <ExternalLink size={16} className="text-purple-400" />
                  </CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-400/50 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="text-purple-400" size={20} />
                    <span>sumathidhandapani72@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-purple-400 text-xl">📱</span>
                    <span>9361177822</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Linkedin className="text-purple-400" size={20} />
                    <span>LinkedIn Profile</span>
                  </div>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center gap-2">
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
            <Mail className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors" size={24} />
            <Linkedin className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors" size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
