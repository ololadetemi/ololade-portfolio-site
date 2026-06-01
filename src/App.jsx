import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, BookOpen, Brain, ChevronLeft,
  Download, ExternalLink, Layers, Mail, Menu,
  Sparkles, Workflow, X, Monitor,
} from "lucide-react";

// ── LIVE LINKS ────────────────────────────────────────────────────────────────
const LINKS = {
  portfolio:   "https://ololade-design-portfolio.netlify.app/",
  linkedin:    "https://www.linkedin.com/in/ololade-abiodun-191623276/",
  email:       "mailto:ololadetoluwalase@gmail.com",
  cv:          "https://docs.google.com/document/d/1C1byOPLWgRxbRFM5JkTdIqaVvLkNxKh6/edit?usp=sharing&ouid=109567966233933734008&rtpof=true&sd=true",
  moodle:      "https://learn4greatness.moodlecloud.com",
  articulate:  "https://share.articulate.com/OgFsvjPOfBwLhijn8bYrt",
};

// ── STYLE TOKENS ──────────────────────────────────────────────────────────────
const S = {
  accent:"var(--accent)",accentLight:"var(--accent-light)",accentMid:"var(--accent-mid)",
  terra:"var(--terra)",terraDark:"var(--terra-dark)",terraLight:"var(--terra-light)",
  terraBorder:"var(--terra-border)",paper:"var(--paper)",border:"var(--border)",
  ink:"var(--ink)",ink2:"var(--ink-2)",ink3:"var(--ink-3)",white:"#ffffff",
  serif:"var(--serif)",sans:"var(--sans)",
  forest:"#1C3D1A",
};

const NAV_ITEMS=[
  {label:"Home",hash:"#/"},
  {label:"About",hash:"#/about"},
  {label:"Case Studies",hash:"#/case-studies"},
  {label:"eLearning",hash:"#/elearning"},
  {label:"Contact",hash:"#/contact"},
];

// ── CASE STUDY DATA ───────────────────────────────────────────────────────────
const caseStudies=[
  {slug:"ai-literacy",title:"AI Literacy & Digital Skills Curriculum",eyebrow:"Featured Case Study",
    summary:"Designed a 4-day facilitator-led orientation program for 5,000+ beginner learners — covering AI, product management, software development, data analysis, and cybersecurity. Every session scripted for consistent delivery at scale.",
    icon:Brain,color:"navy",tag:"AI Literacy · Digital Skills · Women Techsters Launchpad",
    heroNote:"A 4-day facilitator-led orientation program designed to bring thousands of beginner learners — most with zero prior digital experience — into the world of technology for the first time.",
    challenge:"A large-scale women-in-tech initiative needed a cohesive orientation curriculum for participants with no prior exposure to digital tools or AI. The existing content was fragmented, inconsistently delivered across facilitators, and lacked a clear learning arc that could hold up across multiple cohorts.",
    stats:[{num:"5,000+",label:"Learners reached"},{num:"4 days",label:"Program duration"},{num:"5 tracks",label:"Tech career paths"},{num:"83%",label:"Program impact rate"}],
    objectives:["Build foundational understanding of digital technology and AI","Foster responsible, ethical engagement with AI tools","Introduce five tech career pathways and help learners self-identify a fit","Develop learner confidence through hands-on AI tool practice","Equip facilitators with scripted, consistent delivery resources"],
    approach:["ADDIE-informed design: analysis → objectives → content → assessment → evaluation","Bloom's Taxonomy alignment — each session moved from Remembering → Understanding → Applying","Scaffolded 4-day arc: digital literacy → product thinking → software dev → data & security","Active learning: every session included at least two structured activities","Contextualised content: examples drawn from learners' everyday Nigerian digital lives"],
    metrics:["Baseline and end-line survey instruments measuring knowledge and confidence gains","In-session trivia and comprehension checks per session","Career reflection activities tracking learner pathway interest","Program-level impact rate measured at 83% across cohorts"],
    contribution:["Conducted learner and needs analysis for the full program","Designed complete 4-day facilitator guide with scripted speaker notes","Built accompanying PowerPoint deck with session-by-session delivery structure","Developed all in-session activities, icebreakers, quizzes, and reflection prompts","Designed daily learner challenges and career pathway frameworks"],
    subStudies:[
      {title:"Day 1 — Inside the Digital World",audience:"AI Literacy & Generative AI",description:"Introduces learners to digital technology, how AI works in everyday life, and gives them hands-on practice with a generative AI tool — many for the first time.",
        topics:["What is digital technology and how does it work?","Devices, internet, and applications — the core infrastructure","Types of AI: recommendation, recognition, predictive, and generative","Strengths and limitations of AI — why human judgment still matters","Women in the digital economy: careers and opportunities in tech"],
        activities:["Icebreaker: mapping technology in learners' daily routines","Match-tech-to-use-case activity (AI, IoT, AR/VR, Blockchain)","Live AI demonstration: using Claude to ask questions, summarise, and explain","Career reflection: identifying 1–2 tech roles of interest"],
        assessment:["5-question trivia quiz on digital literacy and AI concepts","Daily challenge: create an account on an AI tool and try three prompts","Career reflection prompt: 'I'm interested in ___ because ___'"]},
      {title:"Days 2–4 — Product, Code, Data & Security",audience:"Technical Tracks",description:"Builds on Day 1 with sessions on product thinking, software development fundamentals, data analysis, and cybersecurity — each grounded in real tools and live demonstrations.",
        topics:["Day 2: How digital products are planned — product vs. project management, PRDs, UX vs. UI","Day 3: How software products are built — frontend vs. backend, HTML/CSS, GitHub","Day 4: Understanding data — data types, data analyst roles","Day 4: Protecting systems — phishing, malware, ransomware, and digital safety habits","AI integration across all days: Claude, Canva AI, and GitHub Copilot used as learning tools"],
        activities:["Day 2: Use Canva AI to generate an app idea; create a PRD using Claude AI","Day 3: Live coding demo in CodePen/Replit","Day 4: Google Sheets data sorting and trend-spotting activity","Day 4: Google phishing quiz — interactive cybersecurity simulation"],
        assessment:["Daily challenge tasks tied to each session's hands-on activity","Group discussions and chat-based participation","Final Q&A and open reflection at end of each day"]},
    ]},
  {slug:"career-impact",title:"Career Pathway Quiz & Program Impact Framework",eyebrow:"Monitoring, Evaluation & Learner Experience Design",
    summary:"Built a learner-facing career discovery quiz and a full M&E system — baseline surveys, end-line instruments, and the programme's first quantitative impact report. Contributed to an 83% success rate.",
    icon:Workflow,color:"terra",tag:"Monitoring & Evaluation · Career Design · Women Techsters Bootcamp",
    heroNote:"A dual project combining learner-facing career design with rigorous program measurement — giving both participants and the organisation what they needed: direction and evidence.",
    challenge:"A scaling tech education programme for women lacked two critical things: a structured way for learners to identify the right tech career path, and a rigorous mechanism to measure whether the programme was producing real change.",
    stats:[{num:"83%",label:"Program impact rate"},{num:"2",label:"Survey instruments"},{num:"5+",label:"Career tracks mapped"},{num:"Live",label:"Quiz deployed"}],
    objectives:["Help learners identify a suitable tech career track before program start","Design a quiz instrument accessible to complete beginners","Create matched baseline and end-line survey instruments for pre/post measurement","Produce a quantitative impact report for stakeholder and funder communication"],
    approach:["Career track competency mapping — interest signals and aptitude indicators per track","Branching quiz logic design — routing learners to personalised recommendations","Pre/post measurement model with matched question wording across instruments","Balanced instrument design capturing both knowledge gains and affective outcomes"],
    metrics:["83% measured program impact success rate across cohorts","Career quiz deployed as a permanent feature of program onboarding","Two validated survey instruments (baseline and end-line) operational","First quantitative impact report produced for stakeholder communication"],
    contribution:["Mapped competencies and interest signals to five distinct tech career pathways","Designed branching quiz logic producing actionable, personalised outputs","Developed baseline survey instrument capturing entry-point knowledge and confidence","Developed end-line survey with matched wording for direct pre/post comparison","Produced the programme's first quantitative impact report"],
    subStudies:[
      {title:"Career Pathway Quiz",audience:"Beginner tech learners at program entry",description:"A learner-facing quiz routing participants to one of five tech career tracks — designed to be accessible without any prior tech knowledge.",
        topics:["Career track mapping: Design, Development, Data, Product, and Cybersecurity","Interest-based question framing — everyday scenarios, not technical jargon","Branching logic design for differentiated output","Actionable recommendations tied directly to available programme tracks"],
        activities:["Quiz piloting with sample learner groups before deployment","Facilitator briefing on how to debrief quiz results with learners","Integration into programme onboarding flow"],
        assessment:["Track recommendation accuracy reviewed against learner-reported satisfaction","Post-quiz reflection: 'Does this feel right for me?'"]},
      {title:"M&E Framework & Impact Measurement",audience:"Programme team and organisational stakeholders",description:"A structured M&E system using matched pre/post instruments to measure learner knowledge gains, confidence shifts, and career intention.",
        topics:["Baseline survey design: entry-point knowledge, confidence, and career aspirations","End-line survey design: matched questions for direct pre/post comparison","Affective outcome measurement: belonging in tech, confidence, and intention","Data analysis and visualisation for stakeholder reporting"],
        activities:["Survey instrument drafting, review, and piloting","LMS administration for survey distribution and collection","Data cleaning, analysis, and synthesis into programme impact narrative"],
        assessment:["83% programme impact rate validated across cohorts","Report reviewed and approved for external stakeholder communication"]},
    ]},
  {slug:"technical-curriculum",title:"Cloud & Web Development Curriculum Design",eyebrow:"Technical Curriculum & Instructor-Led Training",
    summary:"Designed and delivered beginner-to-intermediate curricula for AWS cloud fundamentals and frontend web development — hands-on labs, project-based learning, full LMS setup.",
    icon:Layers,color:"slate",tag:"Cloud Computing · Web Development · Instructor-led Training",
    heroNote:"Two technical curricula built from scratch and delivered live — one for AWS cloud fundamentals, one for frontend web development — both designed to make dense technical content genuinely accessible to beginners without losing rigour.",
    challenge:"Two organisations needed structured technical curricula for subjects learners typically find intimidating. In both cases: make technically dense content accessible to beginners without oversimplifying it, and design for applied skill — not just content recall.",
    stats:[{num:"2",label:"Full curricula built"},{num:"AWS",label:"Certification-aligned"},{num:"HTML/CSS/JS",label:"Web dev curriculum"},{num:"SCORM",label:"LMS deployed"}],
    objectives:["Build foundational understanding of AWS cloud services and architecture","Develop working knowledge of HTML, CSS, and JavaScript","Prioritise applied skill over passive content consumption","Create LMS infrastructure for content delivery and progress tracking"],
    approach:["Learner analysis at project start — defining audience starting knowledge and constraints","Project-based learning model: learners built a single running project that grew in complexity","Lab-first AWS design: every conceptual module paired with a hands-on AWS Console activity","Formative-heavy assessment: frequent low-stakes quizzes to surface misconceptions early"],
    metrics:["Learners progressed from zero to deployable web pages","AWS curriculum aligned to Solutions Architect Associate certification path","LMS fully configured with quizzes, assignments, and progress tracking","Learner portfolios produced from project-based work"],
    contribution:["Designed AWS curriculum from foundational cloud concepts through to solutions architecture","Built and delivered the full HTML, CSS, and JavaScript curriculum end-to-end","Configured Google Classroom LMS with assignments, quizzes, and rubrics","Delivered live virtual classes with real-time troubleshooting and personalised feedback"],
    subStudies:[
      {title:"AWS Cloud Fundamentals Curriculum",audience:"Beginner to intermediate learners — cloud computing",description:"A structured curriculum covering foundational AWS concepts through to solutions architecture — every conceptual module anchored by a hands-on AWS Console activity.",
        topics:["Cloud computing fundamentals: what the cloud is and why it matters","Core AWS services: compute (EC2), storage (S3), networking (VPC)","Identity and access management (IAM) — security foundations","Solutions architecture principles: scalability, reliability, cost optimisation"],
        activities:["AWS Console lab: launch and configure an EC2 instance","Storage activity: create and manage an S3 bucket","Architecture challenge: design a simple cost-effective infrastructure","Group case study: review a cloud architecture and identify failure risks"],
        assessment:["End-of-module quizzes tied to AWS exam-style questions","Lab submission: screenshot evidence of completed console tasks","Architecture design task with written justification"]},
      {title:"Frontend Web Development Curriculum",audience:"Beginner learners — HTML, CSS, JavaScript",description:"A project-based curriculum where learners built a single web page from scratch across the programme — producing a shareable, deployed portfolio artefact at the end.",
        topics:["HTML: document structure, semantic elements, and accessibility basics","CSS: layout, typography, colour, flexbox, and responsive design","JavaScript: variables, functions, DOM manipulation, and event handling","Deployment: publishing a working webpage to the open web"],
        activities:["Build Week 1: HTML skeleton of a personal portfolio page","Build Week 2: Style the page with CSS including responsive layout","Build Week 3: Add JavaScript interactivity","Final submission: deployed, shareable portfolio webpage"],
        assessment:["Weekly code review with written facilitator feedback","Peer review activity: evaluate a classmate's layout","Final project: deployed webpage assessed against a published rubric"]},
    ]},
  {slug:"civil-servant-ai",title:"Digitalise Nigeria: Civil Servant AI & Digital Literacy Programme",eyebrow:"Curriculum Design · Facilitator Enablement · Government Sector",
    summary:"Designed a 2-day facilitator-led AI and digital literacy programme for non-technical civil servants — covering digital workplace navigation, online safety, and responsible AI use in a public sector context.",
    icon:BookOpen,color:"forest",tag:"Curriculum Design · Facilitator Enablement · Government Sector",
    heroNote:"A programme built for a learner nobody usually designs for: the experienced civil servant who is deeply competent in their role but has never had structured support to engage confidently with digital tools.",
    challenge:"The civil service is undergoing rapid digital transformation, but formal digital skills support for non-technical officers has not kept pace. Many civil servants navigate government platforms and are expected to engage with AI tools — without ever receiving training for any of it.",
    stats:[{num:"2 days",label:"Program duration"},{num:"6+",label:"Activities per day"},{num:"3",label:"Evaluation touchpoints"},{num:"Gov't",label:"Sector context"}],
    objectives:["Build foundational confidence with digital tools in a government workplace context","Establish safe, practical digital habits specific to civil service work and data","Develop grounded AI literacy — understanding what AI is, where it appears in government, and how to use it responsibly","Equip facilitators to deliver consistently across ministries without requiring technical expertise"],
    approach:["Context-first design: all examples drawn from the Nigerian civil service environment","ADDIE-informed structure with confidence-before-complexity sequencing: digital foundations (Day 1) before AI literacy (Day 2)","Active learning throughout: no segment runs longer than 15 minutes without learner interaction","Facilitator-proofing: every session scripted with full delivery notes and common misconception flags"],
    metrics:["2-day programme with 6+ embedded formative assessments per day","3-touchpoint evaluation model: immediate reaction, 30-day follow-up, optional manager observation","Facilitator guide validated for delivery by non-technical facilitators","Programme designed to accommodate virtual, low-connectivity, and mixed-seniority adaptations"],
    contribution:["Conducted learner and context analysis for the Nigerian civil service environment","Designed the full 2-day programme arc, session structure, and learning objectives","Wrote the complete facilitator guide with scripted delivery notes and facilitation tips","Designed all 8 learner activities including card sorts, platform navigation, phishing identification, and AI verification practice","Developed the 3-touchpoint evaluation framework and all assessment instruments"],
    subStudies:[
      {title:"Module 1 — Digital Foundations",audience:"Day 1 · All civil servants · Non-technical",description:"Builds the digital confidence and practical habits civil servants need to navigate government platforms, communicate professionally, and stay safe online — before any AI content is introduced.",
        topics:["The Nigerian government's digital shift: IPPIS, GIFMIS, NEMIS","The digital workplace framework: Device → Internet → Platform → You","Hands-on government platform navigation: log in, locate, download, save","Digital safety: phishing identification, password hygiene, work data policies","Professional digital communication: email structure and document naming conventions"],
        activities:["My Digital Day icebreaker: participants map existing technology use","Platform navigation task: guided step-by-step navigation of a government portal","Spot the Phish card activity: participants identify phishing indicators","Email drafting with peer review","File naming workshop using a standard government convention"],
        assessment:["Opening word-check (emotional baseline and psychological safety)","Platform navigation observation","Spot the Phish card debrief","Closing word-check (measures emotional shift before Day 2)"]},
      {title:"Module 2 — AI Literacy for Civil Servants",audience:"Day 2 · All civil servants · Non-technical",description:"Develops grounded, practical AI literacy — what AI actually is, where it appears in Nigerian government, how to use an AI tool for work tasks, and how to verify AI output before acting on it officially.",
        topics:["AI demystified: pattern recognition, training data, and why AI is confident but not always correct","AI in Nigerian government: NIN biometric matching, FIRS tax tools, Microsoft 365 AI features","Policy and accountability: what civil servants remain responsible for regardless of AI involvement","Responsible prompting: how to ask an AI tool to draft, summarise, and research","The verification habit: the SIFT framework adapted for government use"],
        activities:["AI Myths & Reality card sort: 12 statements sorted into MYTH/REALITY","Live AI demonstration: facilitator models prompting and critical evaluation","Three guided AI tasks: drafting a memo, summarising a policy extract, researching a government topic","Verification practice: three AI-generated paragraphs with embedded errors","Action plan commitment card with peer-accountability mechanism"],
        assessment:["AI Myths card sort (surfaces beliefs and misconceptions before instruction)","Guided AI practice observation","Verification practice sheet","Programme close sentence stem: 'Before this programme I thought ___, and now I think ___'"]},
    ]},
];

// ── eLEARNING COURSES ─────────────────────────────────────────────────────────
const eLearningCourses=[
  {title:"Designing for the Adult Learner",badge:"Live on Moodle LMS",badgeColor:"live",
    desc:"A SCORM-compliant eLearning course covering the principles of andragogy, adult learning theory, and practical instructional design fundamentals — built in Articulate Rise 360 and deployed on a live Moodle LMS instance.",
    tags:["Articulate Rise 360","SCORM","Moodle LMS","Andragogy","Knowledge checks"],
    link:LINKS.moodle,linkLabel:"View live course →",disabled:false},
  {title:"AI in the Workplace: Using It Ethically and Productively",badge:"Preview available",badgeColor:"preview",
    desc:"A 2-module scenario-based eLearning course for general office staff — following three characters through the ethical risks and productive possibilities of AI in the workplace. Built in Articulate Rise 360 with AI voiceover and interactive knowledge checks.",
    tags:["Articulate Rise 360","Scenario-based","AI voiceover","AI Ethics","2 modules"],
    link:LINKS.articulate,linkLabel:"Preview course →",disabled:false},
];

// ── ROUTING ───────────────────────────────────────────────────────────────────
function getHash(){return window.location.hash||"#/";}
function useHashRoute(){
  const[hash,setHash]=useState(getHash());
  useEffect(()=>{const f=()=>setHash(getHash());window.addEventListener("hashchange",f);return()=>window.removeEventListener("hashchange",f);},[]);
  return hash;
}

// ── SHARED UI ─────────────────────────────────────────────────────────────────
function SectionTag({children,light=false}){
  return(<div style={{display:"inline-flex",alignItems:"center",gap:".4rem",background:light?"rgba(255,255,255,.15)":S.white,border:`1px solid ${light?"rgba(255,255,255,.3)":S.border}`,borderRadius:"999px",padding:".3rem .9rem",fontSize:".72rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:light?"rgba(255,255,255,.85)":S.ink3}}><Sparkles size={12}/>{children}</div>);
}
function BulletItem({text}){return(<div style={{background:"#F8F9FB",borderRadius:10,padding:".7rem 1rem",fontSize:".875rem",color:S.ink2,lineHeight:1.65,marginBottom:".45rem"}}>{text}</div>);}
function Card({children,style={}}){return(<div style={{background:S.white,border:`1px solid ${S.border}`,borderRadius:20,padding:"1.75rem",boxShadow:"0 4px 24px rgba(27,58,107,.05)",...style}}>{children}</div>);}
function AccentCard({children,style={}}){return(<div style={{background:S.accent,borderRadius:20,padding:"1.75rem",color:S.white,...style}}>{children}</div>);}

const thumbBg={navy:"var(--accent)",terra:"var(--terra-dark)",slate:"#2D2D2D",forest:"#1C3D1A"};

// ── SHELL ─────────────────────────────────────────────────────────────────────
function Shell({children}){
  const[open,setOpen]=useState(false);
  return(
    <div style={{minHeight:"100vh",background:S.paper}}>
      <nav style={{position:"sticky",top:0,zIndex:100,background:"rgba(250,250,247,.94)",backdropFilter:"blur(12px)",borderBottom:`1px solid ${S.border}`,padding:"0 2rem"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
          <a href="#/" style={{fontFamily:S.serif,fontSize:"1.1rem",color:S.accent,textDecoration:"none"}}>Ololade Abiodun</a>
          <ul style={{display:"flex",gap:"2rem",listStyle:"none",margin:0,padding:0}} className="hidden md:flex">
            {NAV_ITEMS.map(n=><li key={n.label}><a href={n.hash} style={{fontSize:".875rem",fontWeight:500,color:S.ink2,textDecoration:"none"}}>{n.label}</a></li>)}
          </ul>
          <div style={{display:"flex",gap:"1rem",alignItems:"center"}}>
            <a href={LINKS.cv} target="_blank" rel="noreferrer" style={{fontSize:".8rem",fontWeight:600,color:S.white,background:S.accent,padding:".4rem 1rem",borderRadius:"999px",textDecoration:"none"}}>Download CV</a>
            <button onClick={()=>setOpen(v=>!v)} style={{display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",border:`1px solid ${S.border}`,borderRadius:"50%",width:36,height:36,cursor:"pointer"}} className="flex md:hidden" aria-label="Toggle menu">
              {open?<X size={18}/>:<Menu size={18}/>}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open&&<motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} style={{borderTop:`1px solid ${S.border}`,background:S.paper}} className="md:hidden">
            <div style={{maxWidth:1100,margin:"0 auto",padding:"0 1.5rem"}}>
              {NAV_ITEMS.map(n=><a key={n.label} href={n.hash} onClick={()=>setOpen(false)} style={{display:"block",padding:".85rem 0",fontSize:".9rem",color:S.ink2}}>{n.label}</a>)}
            </div>
          </motion.div>}
        </AnimatePresence>
      </nav>
      <main>{children}</main>
      <footer style={{borderTop:`1px solid ${S.border}`,padding:"1.5rem 2rem",textAlign:"center",fontSize:".8rem",color:S.ink3}}>
        <p>© {new Date().getFullYear()} Ololade Abiodun · Instructional Designer · Lagos, Nigeria</p>
      </footer>
    </div>
  );
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
function HomePage(){
  return(<>
    <section style={{maxWidth:1100,margin:"0 auto",padding:"6rem 2rem 4rem"}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center"}} className="grid-cols-1 lg:grid-cols-2">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.55}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:".5rem",background:S.terraLight,color:S.terra,fontSize:".75rem",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",padding:".35rem .9rem",borderRadius:"999px",border:`1px solid ${S.terraBorder}`,marginBottom:"1.5rem"}}>✦ Available for global opportunities</div>
          <h1 style={{fontFamily:S.serif,fontSize:"clamp(2.5rem,4vw,3.7rem)",lineHeight:1.08,letterSpacing:"-.02em",color:S.ink,margin:"0 0 1.2rem"}}>
            Learning design<br/>grounded in<br/><em style={{color:S.accent,fontStyle:"italic"}}>real practice.</em>
          </h1>
          <p style={{fontSize:"1.02rem",color:S.ink2,lineHeight:1.75,maxWidth:480,margin:"0 0 2rem"}}>Instructional Designer and Curriculum Developer with 4+ years building tech education programs that have reached thousands of learners — combining strong pedagogical foundations with a technical background, and using AI as a tool, not a shortcut.</p>
          <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
            <a href="#/case-studies" style={{display:"inline-flex",alignItems:"center",gap:".5rem",background:S.accent,color:S.white,fontWeight:600,fontSize:".88rem",padding:".7rem 1.5rem",borderRadius:"999px",textDecoration:"none"}}>View my work <ArrowRight size={16}/></a>
            <a href="#/about" style={{display:"inline-flex",alignItems:"center",gap:".5rem",border:`1.5px solid ${S.accent}`,color:S.accent,fontWeight:500,fontSize:".88rem",padding:".7rem 1.5rem",borderRadius:"999px",textDecoration:"none",background:"transparent"}}>About me</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{delay:.1,duration:.6}} className="hidden lg:block">
          <Card>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1rem"}}>
              {[{num:"4+",label:"Years designing",bg:S.accentLight,clr:S.accent},{num:"83%",label:"Program impact rate",bg:S.terraLight,clr:S.terra},{num:"5,000+",label:"Learners reached",bg:S.paper,clr:S.accent},{num:"2",label:"Published courses",bg:S.paper,clr:S.terra}].map(({num,label,bg,clr})=>(
                <div key={label} style={{background:bg,borderRadius:12,padding:"1.1rem",textAlign:"center",border:bg===S.paper?`1px solid ${S.border}`:"none"}}>
                  <span style={{fontFamily:S.serif,fontSize:"1.9rem",color:clr,display:"block",lineHeight:1}}>{num}</span>
                  <span style={{fontSize:".7rem",color:S.ink3,fontWeight:500,textTransform:"uppercase",letterSpacing:".06em",marginTop:".3rem",display:"block"}}>{label}</span>
                </div>
              ))}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:".4rem"}}>
              {["ADDIE","Articulate Rise 360","Moodle LMS","Curriculum Design","M&E Frameworks"].map(t=>(
                <span key={t} style={{fontSize:".72rem",fontWeight:500,padding:".25rem .75rem",borderRadius:"999px",background:S.paper,border:`1px solid ${S.border}`,color:S.ink2}}>{t}</span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
    <hr style={{border:"none",borderTop:`1px solid ${S.border}`,margin:0}}/>
    <section style={{maxWidth:1100,margin:"0 auto",padding:"4rem 2rem"}}>
      <div style={{display:"grid",gridTemplateColumns:".8fr 1.2fr",gap:"2rem"}} className="grid-cols-1 lg:grid-cols-[.8fr_1.2fr]">
        <AccentCard>
          <SectionTag light>What I do</SectionTag>
          <h2 style={{fontFamily:S.serif,fontSize:"1.9rem",lineHeight:1.15,color:S.white,margin:"1rem 0 0"}}>Learning design with structure, curiosity, and impact.</h2>
        </AccentCard>
        <Card>
          <p style={{fontSize:"1rem",color:S.ink2,lineHeight:1.8,margin:"0 0 1.5rem"}}>I'm an instructional designer with a strong technical foundation, building curriculum frameworks and learning systems for technology-driven programs. My work sits at the intersection of learning design, technical systems, and facilitator enablement.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:".75rem",marginBottom:"1.5rem"}}>
            {["AI-enhanced curriculum design","Instructional design and learning strategy","Assessment and evaluation frameworks","EdTech and learning systems thinking"].map(t=>(
              <div key={t} style={{background:"#F8F9FB",borderRadius:10,padding:".75rem 1rem",fontSize:".85rem",color:S.ink2}}>{t}</div>
            ))}
          </div>
          <a href="#/about" style={{display:"inline-flex",alignItems:"center",gap:".4rem",fontSize:".88rem",fontWeight:500,color:S.accent}}>More about me <ArrowRight size={15}/></a>
        </Card>
      </div>
    </section>
    <hr style={{border:"none",borderTop:`1px solid ${S.border}`,margin:0}}/>
    <section style={{maxWidth:1100,margin:"0 auto",padding:"4rem 2rem"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"2.5rem",flexWrap:"wrap",gap:"1rem"}}>
        <div><SectionTag>Selected Work</SectionTag><h2 style={{fontFamily:S.serif,fontSize:"clamp(1.9rem,3vw,2.6rem)",lineHeight:1.1,letterSpacing:"-.02em",color:S.ink,margin:".8rem 0 0"}}>Featured case studies</h2></div>
        <a href="#/case-studies" style={{display:"inline-flex",alignItems:"center",gap:".4rem",fontSize:".88rem",fontWeight:500,color:S.accent}}>See all <ArrowRight size={15}/></a>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"1.25rem"}}>
        {caseStudies.map((cs,i)=>{const Icon=cs.icon;return(
          <motion.a key={cs.slug} href={`#/case-studies/${cs.slug}`} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.07,duration:.4}}
            style={{display:"block",background:S.white,border:`1px solid ${S.border}`,borderRadius:20,padding:"1.5rem",textDecoration:"none",transition:"transform .2s, box-shadow .2s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(27,58,107,.1)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
            <div style={{width:48,height:48,borderRadius:12,background:S.accentLight,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.2rem"}}><Icon size={22} color={S.accent}/></div>
            <p style={{fontSize:".7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:".12em",color:S.ink3,margin:"0 0 .4rem"}}>{cs.eyebrow}</p>
            <h3 style={{fontFamily:S.serif,fontSize:"1.2rem",color:S.ink,margin:"0 0 .6rem",lineHeight:1.2}}>{cs.title}</h3>
            <p style={{fontSize:".875rem",color:S.ink2,lineHeight:1.65,margin:"0 0 1.2rem"}}>{cs.summary}</p>
            <span style={{display:"inline-flex",alignItems:"center",gap:".35rem",fontSize:".85rem",fontWeight:500,color:S.accent}}>View project <ArrowRight size={14}/></span>
          </motion.a>
        );})}
      </div>
    </section>
    <hr style={{border:"none",borderTop:`1px solid ${S.border}`,margin:0}}/>
    {/* eLearning preview on home */}
    <section style={{maxWidth:1100,margin:"0 auto",padding:"4rem 2rem"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"}}>
        <div><SectionTag>Published eLearning</SectionTag><h2 style={{fontFamily:S.serif,fontSize:"clamp(1.9rem,3vw,2.6rem)",lineHeight:1.1,color:S.ink,margin:".8rem 0 0"}}>Live courses</h2></div>
        <a href="#/elearning" style={{display:"inline-flex",alignItems:"center",gap:".4rem",fontSize:".88rem",fontWeight:500,color:S.accent}}>View all <ArrowRight size={15}/></a>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.25rem"}} className="grid-cols-1 md:grid-cols-2">
        {eLearningCourses.map(c=>(
          <Card key={c.title} style={{padding:"1.5rem"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:".4rem",fontSize:".7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:".08em",padding:".25rem .75rem",borderRadius:"999px",marginBottom:"1rem",
              background:c.badgeColor==="live"?"#ECFDF3":"var(--terra-light)",
              color:c.badgeColor==="live"?"#027A48":"var(--terra)",
              border:`1px solid ${c.badgeColor==="live"?"#A9EFC5":"var(--terra-border)"}`}}>
              {c.badgeColor==="live"?"✓ ":""}{c.badge}
            </div>
            <h3 style={{fontFamily:S.serif,fontSize:"1.15rem",color:S.ink,margin:"0 0 .5rem",lineHeight:1.2}}>{c.title}</h3>
            <p style={{fontSize:".875rem",color:S.ink2,lineHeight:1.65,margin:"0 0 1rem"}}>{c.desc}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:".4rem",marginBottom:"1rem"}}>
              {c.tags.map(t=><span key={t} style={{fontSize:".72rem",fontWeight:500,padding:".25rem .75rem",borderRadius:"999px",background:S.paper,border:`1px solid ${S.border}`,color:S.ink2}}>{t}</span>)}
            </div>
            <a href={c.link} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:".4rem",fontSize:".85rem",fontWeight:600,color:S.accent,border:`1.5px solid ${S.accent}`,padding:".45rem 1rem",borderRadius:"999px",textDecoration:"none"}}>
              {c.linkLabel} <ExternalLink size={13}/>
            </a>
          </Card>
        ))}
      </div>
    </section>
    <hr style={{border:"none",borderTop:`1px solid ${S.border}`,margin:0}}/>
    <section style={{maxWidth:1100,margin:"0 auto",padding:"4rem 2rem"}}>
      <Card style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"1.5rem"}}>
        <div><SectionTag>Contact</SectionTag><h2 style={{fontFamily:S.serif,fontSize:"clamp(1.6rem,2.5vw,2rem)",lineHeight:1.2,color:S.ink,margin:".8rem 0 0",maxWidth:500}}>Let's build learning experiences that work in real-world environments.</h2></div>
        <a href="#/contact" style={{display:"inline-flex",alignItems:"center",gap:".5rem",background:S.accent,color:S.white,fontWeight:600,fontSize:".88rem",padding:".7rem 1.5rem",borderRadius:"999px",textDecoration:"none"}}>Contact me <ArrowRight size={16}/></a>
      </Card>
    </section>
  </>);
}

// ── ABOUT PAGE ────────────────────────────────────────────────────────────────
function AboutPage(){
  return(
    <section style={{maxWidth:1100,margin:"0 auto",padding:"4rem 2rem"}}>
      <SectionTag>About</SectionTag>
      <h1 style={{fontFamily:S.serif,fontSize:"clamp(2rem,3.5vw,2.8rem)",lineHeight:1.1,color:S.ink,margin:".8rem 0 2rem"}}>The designer behind the work</h1>
      <div style={{display:"grid",gridTemplateColumns:"1.1fr .9fr",gap:"2.5rem"}} className="grid-cols-1 lg:grid-cols-[1.1fr_.9fr]">
        <Card>
          <div style={{fontSize:"1rem",color:S.ink2,lineHeight:1.85}}>
            {["I'm an Instructional Designer based in Lagos, Nigeria, with a background that sits at the intersection of education and technology. Before moving into learning design full-time, I trained as a backend engineer — which means I don't just design tech curricula, I understand what I'm teaching.",
              "I design learning programs for large-scale tech education initiatives — building everything from multi-day facilitator guides and career pathway tools to LMS systems and assessment frameworks from scratch. I've built and published eLearning courses in Articulate Rise 360, deploying SCORM-compliant content to a live Moodle LMS.",
              "My design philosophy is simple: learners remember what they experience, not what they're told. Every decision I make — from learning objective framing to activity sequencing — is grounded in that principle.",
              "I use AI as a practical tool in my design process, the same way I'd use any other — deliberately, critically, and never as a substitute for sound instructional thinking.",
              "I'm actively seeking global instructional design roles, particularly in EdTech, NGOs, or international development, where I can bring evidence-based design to programs that scale.",
            ].map((p,i)=><p key={i} style={{margin:"0 0 1rem"}}>{p}</p>)}
          </div>
          <a href={LINKS.cv} target="_blank" rel="noreferrer" style={{marginTop:"1.2rem",display:"inline-flex",alignItems:"center",gap:".5rem",background:S.accent,color:S.white,fontWeight:600,fontSize:".88rem",padding:".7rem 1.4rem",borderRadius:"999px",textDecoration:"none"}}>
            <Download size={15}/> Download Resume
          </a>
        </Card>
        <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          <AccentCard>
            <h3 style={{fontFamily:S.serif,fontSize:"1.2rem",color:S.white,margin:"0 0 1rem"}}>Core focus areas</h3>
            {["Future-ready curriculum design","Technical learning programs","Facilitator enablement","Assessment and evaluation strategy","Responsible AI integration in education"].map(t=>(
              <div key={t} style={{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.12)",borderRadius:10,padding:".7rem 1rem",fontSize:".85rem",color:"rgba(255,255,255,.9)",marginBottom:".5rem"}}>{t}</div>
            ))}
          </AccentCard>
          <Card>
            <h3 style={{fontFamily:S.serif,fontSize:"1.2rem",color:S.ink,margin:"0 0 1rem"}}>Education & certifications</h3>
            {["PGD Computer Science · Lead City University (2025)","Diploma in Backend Engineering · AltSchool Africa","AI Fluency · Anthropic","Fundamentals of Prompt Engineering · AWS Skill Builder","The Essentials of Educating Adults · Alison","Instructional Objectives in 21st Century Education · Alison"].map(t=>(
              <div key={t} style={{background:"#F8F9FB",borderRadius:10,padding:".7rem 1rem",fontSize:".85rem",color:S.ink2,marginBottom:".5rem"}}>{t}</div>
            ))}
          </Card>
          <Card>
            <h3 style={{fontFamily:S.serif,fontSize:"1.2rem",color:S.ink,margin:"0 0 1rem"}}>Open to</h3>
            {["Remote & international roles","EdTech companies and learning platforms","NGOs and international development","Corporate L&D — technical programs"].map(t=>(
              <div key={t} style={{background:"#F8F9FB",borderRadius:10,padding:".7rem 1rem",fontSize:".85rem",color:S.ink2,marginBottom:".5rem"}}>{t}</div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
}

// ── CASE STUDIES LIST ─────────────────────────────────────────────────────────
function CaseStudiesPage(){
  return(
    <section style={{maxWidth:1100,margin:"0 auto",padding:"4rem 2rem"}}>
      <SectionTag>Portfolio</SectionTag>
      <h1 style={{fontFamily:S.serif,fontSize:"clamp(2rem,3.5vw,2.8rem)",lineHeight:1.1,color:S.ink,margin:".8rem 0 1rem"}}>Case studies</h1>
      <p style={{fontSize:"1rem",color:S.ink2,lineHeight:1.75,maxWidth:560,margin:"0 0 2.5rem"}}>End-to-end instructional design projects — from needs analysis and curriculum architecture to facilitator enablement, delivery, and impact measurement.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"1.25rem"}}>
        {caseStudies.map(cs=>{const Icon=cs.icon;return(
          <a key={cs.slug} href={`#/case-studies/${cs.slug}`}
            style={{display:"block",background:S.white,border:`1px solid ${S.border}`,borderRadius:20,padding:"1.5rem",textDecoration:"none",transition:"transform .2s, box-shadow .2s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 12px 40px rgba(27,58,107,.1)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
            <div style={{width:48,height:48,borderRadius:12,background:S.accentLight,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.2rem"}}><Icon size={22} color={S.accent}/></div>
            <p style={{fontSize:".7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:".12em",color:S.ink3,margin:"0 0 .4rem"}}>{cs.eyebrow}</p>
            <h2 style={{fontFamily:S.serif,fontSize:"1.2rem",color:S.ink,margin:"0 0 .6rem",lineHeight:1.2}}>{cs.title}</h2>
            <p style={{fontSize:".875rem",color:S.ink2,lineHeight:1.65,margin:"0 0 1.2rem"}}>{cs.summary}</p>
            <span style={{display:"inline-flex",alignItems:"center",gap:".35rem",fontSize:".85rem",fontWeight:500,color:S.accent}}>Open project <ArrowRight size={14}/></span>
          </a>
        );})}
      </div>
    </section>
  );
}

// ── eLEARNING PAGE ────────────────────────────────────────────────────────────
function ELearningPage(){
  return(
    <section style={{maxWidth:1100,margin:"0 auto",padding:"4rem 2rem"}}>
      <SectionTag>Published eLearning</SectionTag>
      <h1 style={{fontFamily:S.serif,fontSize:"clamp(2rem,3.5vw,2.8rem)",lineHeight:1.1,color:S.ink,margin:".8rem 0 1rem"}}>Live courses</h1>
      <p style={{fontSize:"1rem",color:S.ink2,lineHeight:1.75,maxWidth:580,margin:"0 0 2.5rem"}}>Courses designed, built, and published end-to-end — from instructional design and content development through to SCORM publishing and LMS deployment.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem",marginBottom:"3rem"}} className="grid-cols-1 md:grid-cols-2">
        {eLearningCourses.map(c=>(
          <Card key={c.title} style={{padding:"2rem"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:".4rem",fontSize:".7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:".08em",padding:".3rem .85rem",borderRadius:"999px",marginBottom:"1.2rem",
              background:c.badgeColor==="live"?"#ECFDF3":"var(--terra-light)",
              color:c.badgeColor==="live"?"#027A48":"var(--terra)",
              border:`1px solid ${c.badgeColor==="live"?"#A9EFC5":"var(--terra-border)"}`}}>
              {c.badgeColor==="live"?"✓ Live on Moodle LMS":"▶ Preview available"}
            </div>
            <h2 style={{fontFamily:S.serif,fontSize:"1.3rem",color:S.ink,margin:"0 0 .7rem",lineHeight:1.2}}>{c.title}</h2>
            <p style={{fontSize:".9rem",color:S.ink2,lineHeight:1.7,margin:"0 0 1.2rem"}}>{c.desc}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:".4rem",marginBottom:"1.4rem"}}>
              {c.tags.map(t=><span key={t} style={{fontSize:".72rem",fontWeight:500,padding:".25rem .75rem",borderRadius:"999px",background:S.paper,border:`1px solid ${S.border}`,color:S.ink2}}>{t}</span>)}
            </div>
            <a href={c.link} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:".5rem",background:S.accent,color:S.white,fontWeight:600,fontSize:".88rem",padding:".7rem 1.4rem",borderRadius:"999px",textDecoration:"none"}}>
              {c.linkLabel} <ExternalLink size={15}/>
            </a>
          </Card>
        ))}
      </div>
      {/* Design notes */}
      <div style={{background:S.accentLight,borderRadius:20,padding:"2rem"}}>
        <h3 style={{fontFamily:S.serif,fontSize:"1.3rem",color:S.accent,margin:"0 0 1rem"}}>About these courses</h3>
        <p style={{fontSize:".95rem",color:S.ink2,lineHeight:1.75,margin:"0 0 .8rem"}}>Both courses were designed, built, and published end-to-end — from needs analysis and learning objective mapping through to content development, interactive block design, SCORM export, and LMS deployment on a live Moodle instance.</p>
        <p style={{fontSize:".95rem",color:S.ink2,lineHeight:1.75}}>They demonstrate the full instructional design and eLearning development workflow: storyboarding → Articulate Rise 360 build → AI voiceover integration → SCORM publish → Moodle LMS deployment → learner-facing course with knowledge checks and completion tracking.</p>
      </div>
    </section>
  );
}

// ── CASE STUDY DETAIL ─────────────────────────────────────────────────────────
function CaseStudyDetailPage({study}){
  const bg=thumbBg[study.color]||S.accent;
  return(
    <section style={{maxWidth:1100,margin:"0 auto",padding:"3rem 2rem"}}>
      <a href="#/case-studies" style={{display:"inline-flex",alignItems:"center",gap:".35rem",fontSize:".875rem",color:S.accent,marginBottom:"1.5rem"}}>
        <ChevronLeft size={16}/> Back to case studies
      </a>
      <div style={{background:bg,borderRadius:24,padding:"3rem",color:S.white,marginBottom:"1.5rem"}}>
        <p style={{fontSize:".7rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"rgba(255,255,255,.7)",margin:"0 0 .5rem"}}>{study.eyebrow}</p>
        <h1 style={{fontFamily:S.serif,fontSize:"clamp(1.8rem,3.5vw,2.6rem)",lineHeight:1.1,margin:".4rem 0 .8rem"}}>{study.title}</h1>
        <p style={{fontSize:".95rem",color:"rgba(255,255,255,.82)",lineHeight:1.65,maxWidth:600,margin:"0 0 2rem"}}>{study.heroNote}</p>
        <div style={{display:"flex",gap:"2rem",flexWrap:"wrap"}}>
          {study.stats.map(s=><div key={s.label}><span style={{fontFamily:S.serif,fontSize:"1.7rem",color:S.white,display:"block"}}>{s.num}</span><span style={{fontSize:".68rem",color:"rgba(255,255,255,.65)",textTransform:"uppercase",letterSpacing:".07em"}}>{s.label}</span></div>)}
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.25rem",marginBottom:"1.25rem"}}>
        <Card><h2 style={{fontFamily:S.serif,fontSize:"1.15rem",color:S.accent,borderBottom:`2px solid ${S.accentLight}`,paddingBottom:".4rem",margin:"0 0 .8rem"}}>The Challenge</h2><p style={{fontSize:".9rem",color:S.ink2,lineHeight:1.75,margin:0}}>{study.challenge}</p></Card>
        <Card><h2 style={{fontFamily:S.serif,fontSize:"1.15rem",color:S.accent,borderBottom:`2px solid ${S.accentLight}`,paddingBottom:".4rem",margin:"0 0 .8rem"}}>Learning Objectives</h2>{study.objectives.map(t=><BulletItem key={t} text={t}/>)}</Card>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.25rem",marginBottom:"1.25rem"}}>
        <Card><h2 style={{fontFamily:S.serif,fontSize:"1.15rem",color:S.accent,borderBottom:`2px solid ${S.accentLight}`,paddingBottom:".4rem",margin:"0 0 .8rem"}}>Design Approach</h2>{study.approach.map(t=><BulletItem key={t} text={t}/>)}</Card>
        <Card><h2 style={{fontFamily:S.serif,fontSize:"1.15rem",color:S.accent,borderBottom:`2px solid ${S.accentLight}`,paddingBottom:".4rem",margin:"0 0 .8rem"}}>Evaluation & Metrics</h2>{study.metrics.map(t=><BulletItem key={t} text={t}/>)}</Card>
      </div>
      <div style={{background:S.accent,borderRadius:20,padding:"2rem",marginBottom:"1.25rem"}}>
        <h2 style={{fontFamily:S.serif,fontSize:"1.15rem",color:S.white,margin:"0 0 1rem"}}>Role & Contribution</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:".6rem"}}>
          {study.contribution.map(t=><div key={t} style={{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.12)",borderRadius:10,padding:".7rem .9rem",fontSize:".85rem",color:"rgba(255,255,255,.9)",lineHeight:1.55}}>{t}</div>)}
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.25rem"}}>
        {study.subStudies.map(sub=>(
          <Card key={sub.title} style={{padding:"1.5rem"}}>
            <h3 style={{fontFamily:S.serif,fontSize:"1.1rem",color:S.ink,margin:"0 0 .2rem"}}>{sub.title}</h3>
            <p style={{fontSize:".7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:".08em",color:S.terra,margin:"0 0 .6rem"}}>{sub.audience}</p>
            <p style={{fontSize:".875rem",color:S.ink2,lineHeight:1.65,margin:"0 0 1.1rem"}}>{sub.description}</p>
            {[{label:"Key topics",items:sub.topics},{label:"Learning activities",items:sub.activities},{label:"Assessment",items:sub.assessment}].map(({label,items})=>(
              <div key={label} style={{marginBottom:"1rem"}}>
                <p style={{fontSize:".68rem",fontWeight:700,textTransform:"uppercase",letterSpacing:".1em",color:S.ink3,margin:"0 0 .4rem"}}>{label}</p>
                {items.map(t=><BulletItem key={t} text={t}/>)}
              </div>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
}

// ── CONTACT PAGE ──────────────────────────────────────────────────────────────
function ContactPage(){
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[msg,setMsg]=useState("");
  const[sent,setSent]=useState(false);
  const send=()=>{
    if(!name||!msg)return alert("Please fill in your name and message.");
    const sub=encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body=encodeURIComponent(`Hi Ololade,\n\n${msg}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href=`mailto:ololadetoluwalase@gmail.com?subject=${sub}&body=${body}`;
    setSent(true);
  };
  const inp={width:"100%",padding:".8rem 1rem",borderRadius:10,border:"1px solid rgba(255,255,255,.25)",background:"rgba(255,255,255,.12)",color:S.white,fontFamily:S.sans,fontSize:".9rem",outline:"none",marginBottom:".75rem"};
  return(
    <section style={{maxWidth:900,margin:"0 auto",padding:"4rem 2rem"}}>
      <SectionTag>Contact</SectionTag>
      <h1 style={{fontFamily:S.serif,fontSize:"clamp(2rem,3.5vw,2.8rem)",lineHeight:1.1,color:S.ink,margin:".8rem 0 1rem"}}>Let's work together</h1>
      <p style={{fontSize:"1rem",color:S.ink2,lineHeight:1.75,maxWidth:520,margin:"0 0 2.5rem"}}>I'm open to remote roles, contract work, and curriculum design projects globally. I usually respond within 48 hours.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"}} className="grid-cols-1 md:grid-cols-2">
        <Card>
          <h2 style={{fontFamily:S.serif,fontSize:"1.3rem",color:S.ink,margin:"0 0 1.2rem"}}>Get in touch</h2>
          {[{icon:<Mail size={18}/>,text:"ololadetoluwalase@gmail.com",href:LINKS.email,ext:false},
            {icon:<ExternalLink size={18}/>,text:"LinkedIn Profile",href:LINKS.linkedin,ext:true},
            {icon:<Download size={18}/>,text:"Download Resume",href:LINKS.cv,dl:true},
            {icon:<Monitor size={18}/>,text:"View Moodle Course",href:LINKS.moodle,ext:true},
          ].map(({icon,text,href,ext,dl})=>(
            <a key={text} href={href} {...(dl?{download:true}:ext?{target:"_blank",rel:"noreferrer"}:{})}
              style={{display:"flex",alignItems:"center",gap:".75rem",background:"#F8F9FB",borderRadius:10,padding:".9rem 1rem",marginBottom:".6rem",color:S.ink2,textDecoration:"none",fontSize:".88rem"}}>
              {icon}{text}
            </a>
          ))}
        </Card>
        <div style={{background:S.accent,borderRadius:20,padding:"1.75rem"}}>
          <h2 style={{fontFamily:S.serif,fontSize:"1.3rem",color:S.white,margin:"0 0 1.2rem"}}>Send a message</h2>
          <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} style={inp}/>
          <input placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} style={inp}/>
          <textarea placeholder="Tell me about the role or project..." value={msg} onChange={e=>setMsg(e.target.value)} style={{...inp,minHeight:110,resize:"vertical",marginBottom:"1rem"}}/>
          <button onClick={send} style={{width:"100%",padding:".85rem",borderRadius:"999px",background:S.white,color:S.accent,fontWeight:700,fontSize:".9rem",border:"none",cursor:"pointer",fontFamily:S.sans}}>Send message →</button>
          {sent&&<p style={{marginTop:".8rem",fontSize:".85rem",color:"rgba(255,255,255,.9)",textAlign:"center"}}>✓ Your email client should open with the message ready.</p>}
        </div>
      </div>
    </section>
  );
}

// ── ROUTER ────────────────────────────────────────────────────────────────────
export default function App(){
  const hash=useHashRoute();
  const page=useMemo(()=>{
    if(hash==="#/"||hash==="#")return <HomePage/>;
    if(hash==="#/about")return <AboutPage/>;
    if(hash==="#/case-studies")return <CaseStudiesPage/>;
    if(hash==="#/elearning")return <ELearningPage/>;
    if(hash==="#/contact")return <ContactPage/>;
    const match=hash.match(/^#\/case-studies\/([a-z0-9-]+)/);
    if(match){
      const study=caseStudies.find(s=>s.slug===match[1]);
      if(!study)return <CaseStudiesPage/>;
      return <CaseStudyDetailPage study={study}/>;
    }
    return <HomePage/>;
  },[hash]);
  return <Shell>{page}</Shell>;
}
