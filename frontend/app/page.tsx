"use client"

import Image from "next/image"
import Link from "next/link"
import { Brain, MessageSquare, Menu, X } from "lucide-react"
import { useState,useEffect  } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // for scroll 
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  // for scroll 
  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white">
 <header className={`sticky top-0 z-50 w-full border-b border-gray-800 transition-colors duration-300 ${
            isScrolled ? "bg-[#121625]" : "bg-transparent"
          }`}>
        <div className="container mx-auto flex items-center justify-between py-6 px-4">
          <Link href={"/"} className="flex items-center gap-2">
          <Image
                  src="/images/smartbot-logo.png"
                  alt="AI Brain"
                  width={100}
                  height={100}
                  className=""
                  style={{height:"30px", width:"auto"}}
                />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="hover:text-[#0cd3c9] transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-[#0cd3c9] transition-colors">
              Pricing
            </Link>
            <Link href="#support" className="hover:text-[#0cd3c9] transition-colors">
              Support
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="bg-[#0cd3c9] hover:bg-[#0ab3aa] text-[#1a1f2e] font-medium px-4 py-2 rounded-full transition-colors hidden md:block">
              Sign Up
            </button>
            <button
              className="text-white md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>
      <div className="top-section-wrap">
      {/* Header */}
     

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1a1f2e] pt-20 px-4 md:hidden">
          <nav className="flex flex-col items-center gap-8 text-lg">
            <Link
              href="#features"
              className="hover:text-[#0cd3c9] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="hover:text-[#0cd3c9] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#support"
              className="hover:text-[#0cd3c9] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            <button className="bg-[#0cd3c9] hover:bg-[#0ab3aa] text-[#1a1f2e] font-medium px-6 py-2 rounded-full transition-colors w-full max-w-xs mt-4">
              Sign Up
            </button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto grid md:grid-cols-2 gap-8 py-10 px-4 ">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0cd3c9] leading-tight mb-4">
            Talk to Your Personal AI Assistant Anytime
          </h1>
          <p className="text-gray-300 mb-8">
            SmartBot AI delivers real-time answers, personalized support, and seamless conversations – powered by
            advanced AI.
          </p>
          <div className="flex gap-4">
            
            <Link href={"/dashboard"} className="border border-[#0cd3c9] text-[#ffffff] hover:bg-[#0cd3c9]/10 font-medium px-6 py-2 rounded-full transition-colors">
            Chat Now
            </Link>
            <Link href={"/dashboard"} className="border border-[#0cd3c9] text-[#ffffff] hover:bg-[#0cd3c9]/10 font-medium px-6 py-2 rounded-full transition-colors">
            Try Demo
            </Link>
           
          </div>
        </div>
        <div className="hero-graphic-main-wrapper">
                <Image
                  src="/images/hero-graphic-main.png"
                  alt="AI Brain"
                  width={100}
                  height={100}
                  className="hero-graphic-main"
                />
              </div>
      </section>
      </div>
      {/* Features Section */}
      <section id="features" className="py-20 bg-[#1B2633]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Instant Content Generation with AI</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Experience smarter conversations with our AI Smartbot from answering questions to assisting tasks, it's
            fast, intuitive, and always ready to help.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-[#29333F] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#0cd3c9] rounded-full flex items-center justify-center mb-6">
              <Image
                  src="/images/quality-ai-content.png"
                  alt="AI Brain"
                  width={100}
                  height={100}
                  className="content-gen-icon h-10 w-9"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0cd3c9]">Quality AI Content</h3>
              <p className="text-gray-300">
                SmartBot AI delivers precise, impactful content, streamlining your workflow and enhancing productivity
                with every interaction.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-[#29333F] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#0cd3c9] rounded-full flex items-center justify-center mb-6">
              <Image
                  src="/images/ai-powered-writing.png"
                  alt="AI Brain"
                  width={100}
                  height={100}
                  className="content-gen-icon h-10 w-9"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0cd3c9]">AI-Powered Writing</h3>
              <p className="text-gray-300">
                SmartBot AI revolutionizes your writing process, delivering high-quality, tailored content quickly and
                effortlessly, boost your writing productivity and expression with advanced AI tools.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-[#29333F] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#0cd3c9] rounded-full flex items-center justify-center mb-6">
              <Image
                  src="/images/writing-assistant.png"
                  alt="AI Brain"
                  width={60}
                  height={60}
                  className="content-gen-icon h-10 w-9"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0cd3c9]">Your Writing Assistant</h3>
              <p className="text-gray-300">
                SmartBot AI is your reliable writing assistant, crafting clear, compelling content and improving
                efficiency with every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#0cd3c9]/30"></div>
          <div className="absolute top-1/4 right-0 w-60 h-60 rounded-full bg-[#0cd3c9]/20"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#0cd3c9]/20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Unlock the Power of SmartBot AI</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Select a SmartBot AI plan that fits your goals, whether you're just starting or need advanced features for
            your business.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="pricing-card-gradient pricing-card-1 rounded-2xl overflow-hidden">
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-4xl font-bold text-center text-white mb-2">$19</h3>
                <p className="text-center text-white font-medium mb-6">Basic Plan</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Access to essential AI tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">10 AI-generated responses per day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Basic content customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Email support</span>
                  </li>
                </ul>
                <button style={{border:"1px solid #00F1DE"}} className="bg-transparent text-white font-medium py-2 px-6 rounded-full hover:bg-white/90 transition-colors w-full">
                  Purchase
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="overflow-hidden pricing-card-2 pricing-card-gradient rounded-2xl shadow-xl transform scale-100 md:scale-105">
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-4xl font-bold text-center text-white mb-2">$79</h3>
                <p className="text-center text-white font-medium mb-6">Premium Plan</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Everything in the Pro Plan, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Unlimited AI-generated responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Premium content optimization tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Dedicated customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Exclusive updates and features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">API access for custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Custom usage limits based on needs</span>
                  </li>
                </ul>
                <button style={{border:"1px solid #00F1DE"}} className="bg-transparent text-white font-medium py-2 px-6 rounded-full hover:bg-white/90 transition-colors w-full">
                  Purchase
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card-gradient pricing-card-3 rounded-2xl overflow-hidden">
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-4xl font-bold text-center text-white mb-2">$39</h3>
                <p className="text-center text-white font-medium mb-6">Pro Plan</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Everything in the Basic Plan, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">50 AI-generated responses per day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Advanced content customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Priority email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-white/20 p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">Dedicated feature requests</span>
                  </li>
                </ul>
                <button style={{border:"1px solid #00F1DE"}} className="bg-transparent text-white font-medium py-2 px-6 rounded-full hover:bg-white/90 transition-colors w-full">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     
      <footer className="bg-[#1B2633] text-white pt-8 border-t border-[#405d7f] px-5">
      <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left: Logo and Brand */}
        <div className="flex items-center space-x-2">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
                  src="/images/smartbot-logo.png"
                  alt="AI Brain"
                  width={100}
                  height={100}
                  className=""
                  style={{height:"30px", width:"auto"}}
                />
          </Link>
        </div>

        {/* Center: Navigation */}
        {/* <nav className="flex flex-wrap justify-center space-x-6 text-sm font-medium">
          <Link href="#" className="hover:text-purple-300">
            Product
          </Link>
          <Link href="#" className="hover:text-purple-300">
            Features
          </Link>
          <Link href="#" className="hover:text-purple-300">
            Pricing
          </Link>
          <Link href="#" className="hover:text-purple-300">
            Support
          </Link>
        </nav> */}

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-purple-300 social-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
<path d="M15.1764 1.87686C14.6197 2.12428 14.0321 2.27892 13.4135 2.37171C14.0321 2.00057 14.5269 1.41294 14.7434 0.701602C14.1558 1.04181 13.5063 1.28923 12.795 1.44387C12.2383 0.856241 11.4341 0.485107 10.5682 0.485107C8.89806 0.485107 7.53724 1.84593 7.53724 3.51603C7.53724 3.76346 7.56817 3.97995 7.63002 4.19645C5.12487 4.07274 2.86714 2.86655 1.35167 1.01088C1.10425 1.4748 0.949611 1.96964 0.949611 2.52634C0.949611 3.57789 1.47538 4.50573 2.31044 5.06243C1.81559 5.0315 1.35167 4.90779 0.918683 4.69129V4.72222C0.918683 6.20676 1.97023 7.44387 3.36198 7.72222C3.11456 7.78408 2.83621 7.815 2.55786 7.815C2.37229 7.815 2.1558 7.78408 1.97023 7.75315C2.37229 8.95933 3.48569 9.85624 4.81559 9.85624C3.76404 10.6604 2.46507 11.1552 1.04239 11.1552C0.794972 11.1552 0.547549 11.1552 0.331055 11.1243C1.69188 11.9903 3.2692 12.4851 5.00116 12.4851C10.5991 12.4851 13.6609 7.84593 13.6609 3.82531C13.6609 3.7016 13.6609 3.54696 13.6609 3.42325C14.2486 3.02119 14.7744 2.49542 15.1764 1.87686Z" fill="white"/>
</svg>
          </Link>
          <Link href="#" className="hover:text-purple-300 social-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
<path d="M2.0725 12.1289V6.65515H0.230469V4.52191H2.0725V2.94871C2.0725 1.12303 3.18757 0.128906 4.81621 0.128906C5.59634 0.128906 6.26683 0.186989 6.46222 0.21295V2.1209L5.33268 2.12141C4.44693 2.12141 4.27543 2.5423 4.27543 3.15993V4.52191H6.38785L6.1128 6.65515H4.27543V12.1289H2.0725Z" fill="white"/>
</svg>
          </Link>
          <Link href="#" className="hover:text-purple-300 social-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
<path d="M6.6169 1.30765C8.21883 1.30765 8.40853 1.31365 9.04136 1.34251C9.42185 1.34717 9.79872 1.41703 10.1556 1.54907C10.4144 1.64888 10.6494 1.80177 10.8456 1.99791C11.0417 2.19404 11.1946 2.42907 11.2944 2.68787C11.4264 3.04475 11.4963 3.42162 11.501 3.80211C11.5295 4.43493 11.5358 4.62464 11.5358 6.22656C11.5358 7.82849 11.5298 8.01819 11.501 8.65102C11.4963 9.03151 11.4264 9.40838 11.2944 9.76525C11.1946 10.0241 11.0417 10.2591 10.8456 10.4552C10.6494 10.6514 10.4144 10.8042 10.1556 10.9041C9.79872 11.0361 9.42185 11.106 9.04136 11.1106C8.40882 11.1392 8.21911 11.1455 6.6169 11.1455C5.01469 11.1455 4.82499 11.1395 4.19245 11.1106C3.81196 11.106 3.43509 11.0361 3.07821 10.9041C2.81941 10.8042 2.58438 10.6514 2.38825 10.4552C2.19211 10.2591 2.03922 10.0241 1.93941 9.76525C1.80737 9.40838 1.7375 9.03151 1.73285 8.65102C1.70428 8.01819 1.69799 7.82849 1.69799 6.22656C1.69799 4.62464 1.70399 4.43493 1.73285 3.80211C1.7375 3.42162 1.80737 3.04475 1.93941 2.68787C2.03922 2.42907 2.19211 2.19404 2.38825 1.99791C2.58438 1.80177 2.81941 1.64888 3.07821 1.54907C3.43509 1.41703 3.81196 1.34717 4.19245 1.34251C4.82527 1.31394 5.01498 1.30765 6.6169 1.30765V1.30765ZM6.6169 0.226562C4.98841 0.226562 4.78328 0.233419 4.14331 0.262561C3.64534 0.272465 3.15267 0.36675 2.68623 0.541405C2.28611 0.692159 1.92369 0.928405 1.62428 1.23366C1.31875 1.53318 1.08231 1.8958 0.931458 2.29618C0.756804 2.76261 0.662519 3.25529 0.652614 3.75325C0.624044 4.39265 0.617188 4.59778 0.617188 6.22628C0.617188 7.85477 0.624044 8.0599 0.653186 8.69987C0.66309 9.19784 0.757375 9.69051 0.93203 10.1569C1.08271 10.5573 1.31896 10.9199 1.62428 11.2195C1.92386 11.5248 2.28647 11.761 2.6868 11.9117C3.15324 12.0864 3.64591 12.1807 4.14388 12.1906C4.78385 12.2191 4.98812 12.2266 6.61747 12.2266C8.24683 12.2266 8.4511 12.2197 9.09107 12.1906C9.58903 12.1807 10.0817 12.0864 10.5481 11.9117C10.9466 11.7573 11.3084 11.5214 11.6104 11.2191C11.9125 10.9169 12.1482 10.5549 12.3023 10.1564C12.477 9.68994 12.5713 9.19726 12.5812 8.6993C12.6098 8.0599 12.6166 7.85477 12.6166 6.22628C12.6166 4.59778 12.6098 4.39265 12.5806 3.75268C12.5707 3.25472 12.4764 2.76204 12.3018 2.29561C12.1511 1.89528 11.9148 1.53266 11.6095 1.23309C11.3099 0.927764 10.9473 0.691514 10.547 0.540833C10.0806 0.366179 9.58789 0.271894 9.08993 0.261989C8.45053 0.233419 8.2454 0.226562 6.6169 0.226562Z" fill="white"/>
<path d="M6.61811 3.14648C6.00874 3.14648 5.41306 3.32718 4.9064 3.66573C4.39973 4.00427 4.00483 4.48546 3.77164 5.04843C3.53844 5.61141 3.47743 6.2309 3.59631 6.82855C3.71519 7.42621 4.00863 7.97519 4.43951 8.40607C4.8704 8.83696 5.41938 9.1304 6.01703 9.24928C6.61469 9.36816 7.23417 9.30714 7.79715 9.07395C8.36013 8.84076 8.84132 8.44586 9.17986 7.93919C9.51841 7.43252 9.6991 6.83684 9.6991 6.22748C9.6991 5.41035 9.3745 4.62669 8.7967 4.04889C8.2189 3.47109 7.43524 3.14648 6.61811 3.14648ZM6.61811 8.22739C6.22256 8.22739 5.8359 8.11009 5.50702 7.89034C5.17814 7.67059 4.9218 7.35825 4.77044 6.99281C4.61907 6.62738 4.57946 6.22526 4.65663 5.83732C4.7338 5.44938 4.92427 5.09303 5.20396 4.81333C5.48365 4.53364 5.84 4.34317 6.22794 4.266C6.61589 4.18884 7.018 4.22844 7.38344 4.37981C7.74887 4.53118 8.06121 4.78751 8.28097 5.11639C8.50072 5.44528 8.61801 5.83194 8.61801 6.22748C8.61801 6.75789 8.40731 7.26657 8.03225 7.64163C7.6572 8.01668 7.14852 8.22739 6.61811 8.22739V8.22739Z" fill="white"/>
<path d="M9.82055 3.74413C10.2182 3.74413 10.5405 3.42179 10.5405 3.02416C10.5405 2.62654 10.2182 2.3042 9.82055 2.3042C9.42293 2.3042 9.10059 2.62654 9.10059 3.02416C9.10059 3.42179 9.42293 3.74413 9.82055 3.74413Z" fill="white"/>
</svg>
          </Link>
          <Link href="#" className="hover:text-purple-300 social-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.66882 0.226562C3.26109 0.226562 0.519531 2.96812 0.519531 6.37585C0.519531 9.09179 2.28745 11.3978 4.72154 12.2177C5.02901 12.2689 5.1315 12.0896 5.1315 11.9102C5.1315 11.7565 5.1315 11.3721 5.1315 10.8597C3.41482 11.244 3.05611 10.0398 3.05611 10.0398C2.77427 9.32239 2.36432 9.14303 2.36432 9.14303C1.80063 8.7587 2.41556 8.7587 2.41556 8.7587C3.03049 8.80995 3.36358 9.39925 3.36358 9.39925C3.90164 10.3473 4.79841 10.0654 5.15712 9.91169C5.20836 9.50174 5.3621 9.24552 5.54145 9.09179C4.18348 8.93806 2.74865 8.39999 2.74865 6.04276C2.74865 5.37659 2.97925 4.81291 3.3892 4.40295C3.33795 4.24922 3.10736 3.63429 3.44044 2.76314C3.44044 2.76314 3.95288 2.60941 5.1315 3.40369C5.61832 3.27558 6.15638 3.19872 6.66882 3.19872C7.18126 3.19872 7.71932 3.27558 8.20614 3.40369C9.38476 2.60941 9.8972 2.76314 9.8972 2.76314C10.2303 3.60867 10.0253 4.2236 9.94844 4.40295C10.3328 4.83853 10.589 5.37659 10.589 6.04276C10.589 8.39999 9.15416 8.91243 7.77057 9.06617C8.00116 9.24552 8.18052 9.62985 8.18052 10.1935C8.18052 11.0134 8.18052 11.6796 8.18052 11.8846C8.18052 12.0383 8.28301 12.2433 8.61609 12.1921C11.0502 11.3978 12.8181 9.09179 12.8181 6.37585C12.8181 2.96812 10.0766 0.226562 6.66882 0.226562Z" fill="white"/>
</svg>
          </Link>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-sm text-white py-4">
        © Copyright 2022, All Rights Reserved by Webwiz
      </div>
    </footer>
    </div>
  )
}