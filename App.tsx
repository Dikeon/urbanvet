import React, { useState, useEffect } from 'react';
import { Page, Language, TEXTS, ALL_SERVICES, ALL_POSTS, NAV_LINKS, UKFlagIcon, DEFlagIcon, Service, BlogPost } from './constants.tsx';
import FullLogo from './components/FullLogo.tsx';
import SmallLogo from './components/SmallLogo.tsx';
import { LogoLineDivider } from './components/Dividers.tsx';

// HELPER COMPONENTS

const SectionDivider = () => (
  <div className="w-full">
    <LogoLineDivider className="w-full h-[50px] text-red-300" />
  </div>
);

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-gray-50 rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl h-full cursor-pointer">
    <div className="flex justify-center items-center mb-4">{service.icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
  </div>
);

const BlogPostCard: React.FC<{ post: BlogPost, onClick: () => void }> = ({ post, onClick }) => (
  <div onClick={onClick} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group border cursor-pointer">
    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-sm text-gray-500 mb-1">{post.date}</p>
      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-red-700 transition-colors">{post.title}</h3>
      <p className="text-gray-700">{post.summary}</p>
    </div>
  </div>
);

// PAGE COMPONENTS

const HomePage: React.FC<{ content: any, onNavigate: (page: Page, anchor?: string) => void, services: Service[], language: Language }> = ({ content, onNavigate, services, language }) => (
  <div>
    {/* Hero Section */}
    <section className="text-center py-20 lg:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <FullLogo className="w-3/4 max-w-lg h-auto text-red-700 mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{content.home.heroTitle}</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{content.home.heroSubtitle}</p>
        <button onClick={() => onNavigate(Page.CONTACT)} className="bg-red-700 text-white font-bold py-3 px-8 rounded-full hover:bg-red-800 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
          {content.home.ctaButton}
        </button>
      </div>
    </section>

    <SectionDivider />

    {/* Services Preview */}
    <section id="services" className="py-16 lg:py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-2 text-gray-900">{content.home.servicesTitle}</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">{content.home.servicesSubtitle}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} onClick={() => onNavigate(Page.SERVICES, service.id)}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <SectionDivider />

    {/* About Preview */}
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{content.home.aboutTitle}</h2>
            <div className="prose prose-lg text-gray-700 mx-auto">
                {content.home.aboutText}
            </div>
            <button onClick={() => onNavigate(Page.ABOUT)} className="mt-8 text-red-700 font-semibold hover:underline">
              {language === Language.DE ? 'Mehr über uns erfahren &rarr;' : 'Learn More About Us &rarr;'}
            </button>
        </div>
    </section>
  </div>
);

const ServicesPage: React.FC<{ content: any, services: Service[] }> = ({ content, services }) => (
    <div className="py-16 lg:py-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">{content.title}</h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">{content.subtitle}</p>
        
        <div className="space-y-8">
          {services.map((service: Service, index: number) => (
            <React.Fragment key={service.id}>
              <section id={service.id} className="bg-white p-8 rounded-lg shadow-lg scroll-mt-24 border">
                <div className="flex flex-col sm:flex-row items-start sm:space-x-6">
                    <div className="flex-shrink-0 mb-4 sm:mb-0">{service.icon}</div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                        <p className="text-lg text-gray-600 mb-8 prose max-w-none">{service.longDescription}</p>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 mt-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {service.subServices.map((item, subIndex) => (
                            <li key={subIndex} className="flex items-start">
                                <svg className="w-6 h-6 text-red-700 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700 text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </section>
              {index < services.length - 1 && <SectionDivider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
);

const AboutPage: React.FC<{ content: any }> = ({ content }) => (
  <div className="py-16 lg:py-24 min-h-screen bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">{content.about.title}</h1>
      <SectionDivider />
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1">
          <img src="vet_portrait.jpg" alt="Dr. Anja Schmidt" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
        </div>
        <div className="md:col-span-2">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>{content.about.p1}</p>
            <p>{content.about.p2}</p>
            <p>{content.about.p3}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BlogPage: React.FC<{ content: any, posts: BlogPost[], onViewPost: (post: BlogPost) => void }> = ({ content, posts, onViewPost }) => (
  <div className="py-16 lg:py-24 min-h-screen bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">{content.blog.title}</h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">{content.blog.subtitle}</p>
      <SectionDivider />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: BlogPost) => <BlogPostCard key={post.id} post={post} onClick={() => onViewPost(post)} />)}
      </div>
    </div>
  </div>
);

const BlogPostPage: React.FC<{ post: BlogPost, onBack: () => void, backButtonText: string }> = ({ post, onBack, backButtonText }) => (
  <div className="py-16 lg:py-24 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-4">
      <button onClick={onBack} className="text-red-700 font-semibold hover:underline mb-8">
        &larr; {backButtonText}
      </button>
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
      <p className="text-lg text-gray-500 mb-8">{post.date}</p>
      <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />
      <div className="prose prose-lg max-w-none text-gray-700">
        {post.content}
      </div>
    </div>
  </div>
);

const ContactPage: React.FC<{ content: any }> = ({ content }) => (
  <div className="py-16 lg:py-24 min-h-screen bg-white flex items-center justify-center">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{content.contactPage.title}</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{content.contactPage.subtitle}</p>
      <SectionDivider />
      <div className="my-8">
        <a href="tel:+491743995177">
            <img src="phone_number.png" alt="Contact phone number" className="max-w-md w-full mx-auto h-auto cursor-pointer transform hover:scale-105 transition-transform"/>
        </a>
      </div>
      <p className="text-lg text-gray-600 mb-4">Or send us an email:</p>
      <a href={`mailto:${content.contactPage.email}`} className="inline-block bg-red-700 text-white font-bold py-3 px-8 rounded-full hover:bg-red-800 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
        {content.contactPage.email}
      </a>
    </div>
  </div>
);

const ImpressumPage: React.FC<{ content: any }> = ({ content }) => (
  <div className="py-16 lg:py-24 min-h-screen bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">{content.impressum.title}</h1>
      <SectionDivider />
      <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: content.impressum.content }} />
    </div>
  </div>
);

// MAIN APP COMPONENT
export default function App() {
  const [language, setLanguage] = useState<Language>(Language.DE);
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [targetAnchor, setTargetAnchor] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const content = TEXTS[language];
  const allServices = ALL_SERVICES[language];
  const allPosts = ALL_POSTS[language];

  const handleNavigate = (page: Page, anchor?: string) => {
    setCurrentPage(page);
    setTargetAnchor(anchor || null);
    if (!anchor) {
        window.scrollTo(0, 0);
    }
  };
  
  const handleViewPost = (post: BlogPost) => {
    setCurrentPost(post);
    setCurrentPage(Page.BLOG_POST);
    window.scrollTo(0, 0);
  };
  
  const handleMobileNav = (page: Page, anchor?: string) => {
    handleNavigate(page, anchor);
    setIsMenuOpen(false);
  };


  useEffect(() => {
    // Handle scrolling to anchor links on the services page
    if (currentPage === Page.SERVICES && targetAnchor) {
        const element = document.getElementById(targetAnchor);
        if (element) {
            const headerOffset = 80; // Corresponds to h-20 of the header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
            setTargetAnchor(null); // Reset anchor after scrolling
        }
    }
  }, [currentPage, targetAnchor]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage content={content} onNavigate={handleNavigate} services={allServices} language={language} />;
      case Page.SERVICES:
        return <ServicesPage content={content.services} services={allServices} />;
      case Page.ABOUT:
        return <AboutPage content={content} />;
      case Page.BLOG:
        return <BlogPage content={content} posts={allPosts} onViewPost={handleViewPost} />;
      case Page.BLOG_POST:
        return currentPost ? <BlogPostPage post={currentPost} onBack={() => handleNavigate(Page.BLOG)} backButtonText={content.blog.back_button} /> : <BlogPage content={content} posts={allPosts} onViewPost={handleViewPost} />;
      case Page.CONTACT:
        return <ContactPage content={content} />;
      case Page.IMPRESSUM:
        return <ImpressumPage content={content} />;
      default:
        return <HomePage content={content} onNavigate={handleNavigate} services={allServices} language={language} />;
    }
  };
  
    useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }, [language]);


  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 h-20 flex items-center">
        <nav className="container mx-auto px-4 flex justify-between items-center w-full">
            {/* --- DESKTOP NAV --- */}
            <div className="hidden md:flex w-full items-center">
                <div className="flex-1 flex justify-start">
                    <div className="cursor-pointer" onClick={() => handleNavigate(Page.HOME)}>
                        <SmallLogo className="h-16 w-auto text-red-700"/>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <button 
                        onClick={() => handleNavigate(Page.CONTACT)}
                        className="bg-red-700 text-white font-bold py-2 px-6 rounded-full hover:bg-red-800 transition-colors text-lg shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                        {content.nav[Page.CONTACT]}
                    </button>
                </div>
                <div className="flex-1 flex justify-end items-center space-x-4">
                    {NAV_LINKS.map(link => (
                      <button 
                        key={link.page} 
                        onClick={() => handleNavigate(link.page)}
                        className={`text-lg font-semibold transition-colors px-2 ${currentPage === link.page ? 'text-red-700' : 'text-gray-600 hover:text-red-700'}`}
                      >
                        {content.nav[link.page]}
                      </button>
                    ))}
                    <div className="flex items-center space-x-2 pl-4">
                        <button onClick={() => setLanguage(Language.EN)} className={`p-1 rounded-full ${language === Language.EN ? 'bg-red-100' : ''}`}><UKFlagIcon /></button>
                        <button onClick={() => setLanguage(Language.DE)} className={`p-1 rounded-full ${language === Language.DE ? 'bg-red-100' : ''}`}><DEFlagIcon /></button>
                    </div>
                </div>
            </div>

            {/* --- MOBILE NAV --- */}
            <div className="md:hidden w-full flex items-center justify-between">
                <div className="flex-1 flex justify-start">
                    <div className="cursor-pointer" onClick={() => handleNavigate(Page.HOME)}>
                        <SmallLogo className="h-16 w-auto text-red-700"/>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <button 
                        onClick={() => handleNavigate(Page.CONTACT)}
                        className="bg-red-700 text-white font-bold py-2 px-5 rounded-full hover:bg-red-800 transition-colors text-base shadow-md"
                    >
                        {content.nav[Page.CONTACT]}
                    </button>
                </div>
                <div className="flex-1 flex justify-end">
                    <button onClick={() => setIsMenuOpen(true)} className="text-gray-700">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-700">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
              </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
              {NAV_LINKS.map(link => (
                <button 
                  key={`mobile-${link.page}`}
                  onClick={() => handleMobileNav(link.page)}
                  className={`text-3xl font-bold transition-colors ${currentPage === link.page ? 'text-red-700' : 'text-gray-700 hover:text-red-700'}`}
                >
                  {content.nav[link.page]}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-8">
                  <button onClick={() => {setLanguage(Language.EN); setIsMenuOpen(false);}} className={`p-2 rounded-full ${language === Language.EN ? 'bg-red-100' : ''}`}><UKFlagIcon /></button>
                  <button onClick={() => {setLanguage(Language.DE); setIsMenuOpen(false);}} className={`p-2 rounded-full ${language === Language.DE ? 'bg-red-100' : ''}`}><DEFlagIcon /></button>
              </div>
          </div>
      </div>
      
      <main className="pt-20">
        {renderPage()}
      </main>
      
      <footer className="bg-red-700 text-white">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
                <h4 className="font-bold text-lg">UrbanVet</h4>
                <p className="text-red-200">{content.footer.tagline}</p>
            </div>
            <div className="mb-4 md:mb-0">
                 <button onClick={() => handleNavigate(Page.IMPRESSUM)} className="font-semibold transition-colors hover:text-red-200">
                    {content.footer.legal}
                </button>
            </div>
            <p className="text-sm text-red-200">&copy; {new Date().getFullYear()} UrbanVet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}