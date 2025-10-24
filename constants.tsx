import React from 'react';

// TYPES AND ENUMS
export enum Language {
  EN = 'EN',
  DE = 'DE',
}

export enum Page {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  ABOUT = 'ABOUT',
  BLOG = 'BLOG',
  BLOG_POST = 'BLOG_POST',
  CONTACT = 'CONTACT',
  IMPRESSUM = 'IMPRESSUM',
}

export interface Service {
  id: string; // Used for anchor links
  title: string;
  description: string; // Short description for cards
  longDescription: string; // Detailed description for the services page
  icon: React.ReactNode;
  subServices: string[];
}

export interface BlogPost {
  id:string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  content: React.ReactNode;
}

interface Content {
  nav: {
    [key in Page]?: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    ctaButton: string;
    servicesTitle: string;
    servicesSubtitle: string;
    aboutTitle: string;
    aboutText: React.ReactNode;
  };
  services: {
    title: string;
    subtitle: string;
    items: Omit<Service, 'icon'>[];
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  blog: {
    title: string;
    subtitle: string;
    back_button: string;
    posts: Omit<BlogPost, 'id' | 'imageUrl'>[];
  };
  contactPage: {
    title: string;
    subtitle: string;
    email: string;
  };
  impressum: {
    title: string;
    content: string;
  };
  footer: {
    tagline: string;
    legal: string;
  };
}

// ICONS
const SyringeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.415a.375.375 0 01.53 0l.415.415V15a.75.75 0 01-1.5 0V7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5l.415-.415a.375.375 0 01.53 0l.415.415V15a.75.75 0 01-1.5 0V7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75v1.5a.75.75 0 00.75.75h13.5a.75.75 0 00.75-.75v-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75v-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75v-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H16.5a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H7.5A2.25 2.25 0 015.25 18V6A2.25 2.25 0 017.5 3.75z" />
    </svg>
);

const StethoscopeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75v1.5a3.75 3.75 0 003.75 3.75h.75m-4.5-5.25v.01M12 3v.01M12 21v.01M12 12a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5v-1.5zM12 3.75a.75.75 0 01.75-.75h.75a3.75 3.75 0 013.75 3.75v.75m-4.5 12.75a.75.75 0 00.75.75h.75a3.75 3.75 0 003.75-3.75v-.75" />
    </svg>
);

const MicrochipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5v15a2.25 2.25 0 002.25 2.25h12a2.25 2.25 0 002.25-2.25v-15A2.25 2.25 0 0018 2.25h-12A2.25 2.25 0 003.75 4.5zM9.75 9.75v4.5m4.5-4.5v4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18h7.5" />
    </svg>
);

const ClipboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.871 14.887c-2.148-2.47-2.34-5.922-.464-8.732a8.25 8.25 0 0113.187-3.951 8.25 8.25 0 013.951 13.187c-2.81 1.876-6.262 1.678-8.732-.464m-4.942-8.04a5.25 5.25 0 11-7.424 7.424 5.25 5.25 0 017.424-7.424zm-2.828 2.828a.75.75 0 011.06 0l2.122 2.121a.75.75 0 11-1.061 1.06l-2.121-2.12a.75.75 0 010-1.061z" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);


// TEXT CONTENT
export const TEXTS: { [key in Language]: Content } = {
  [Language.EN]: {
    nav: {
      [Page.HOME]: 'Home',
      [Page.SERVICES]: 'Services',
      [Page.ABOUT]: 'About Us',
      [Page.BLOG]: 'Blog',
      [Page.CONTACT]: 'Contact',
      [Page.IMPRESSUM]: 'Legal',
    },
    home: {
      heroTitle: 'Compassionate Vet Care, at Your Doorstep.',
      heroSubtitle: 'Professional, stress-free veterinary services for your beloved pets in the comfort of your own home.',
      ctaButton: 'Book an Appointment',
      servicesTitle: 'Our Services',
      servicesSubtitle: 'We offer a wide range of mobile veterinary services to keep your pet healthy and happy.',
      aboutTitle: 'Meet UrbanVet',
      aboutText: (
        <>
          Founded on the belief that pet care should be personal and convenient, UrbanVet brings the clinic to you. Our experienced team is dedicated to providing the highest standard of care without the stress of travel for you or your pet. We serve the greater Berlin area, combining modern medicine with a compassionate touch.
        </>
      ),
    },
    services: {
        title: "Our Mobile Vet Services",
        subtitle: "Comprehensive care for your pet's needs, delivered with convenience and compassion. Click a category below to learn more.",
        items: [
            { 
                id: 'general-medicine',
                title: "General & Specialized Diagnostics", 
                description: "Comprehensive examinations and advanced diagnostics to assess your pet's health.",
                longDescription: 'We provide thorough clinical examinations and utilize advanced diagnostic tools to get a complete picture of your pet’s health, from routine check-ups to complex lameness evaluations.',
                subServices: [
                    'Comprehensive clinical examination', 'Orthopedic examination & lameness diagnostics', 'Neurological assessment', 'Dermatological examination', 'Geriatric health checks', 'Allergy diagnostics and therapy', 'Blood tests (hematological & biochemical)', 'Fecal examinations (rapid tests, external laboratory diagnostics)', 'Urological diagnostic (urine tests)', 'Biopsies and sample collection (skin, fine-needle aspiration, lab submission)',
                ]
            },
            { 
                id: 'preventive-medicine',
                title: "Preventive Medicine & Prophylaxis", 
                description: "Vaccinations, parasite control, and wellness programs to prevent illness.",
                longDescription: 'Prevention is the cornerstone of a long and healthy life. We offer tailored vaccination schedules, comprehensive parasite control, and advice for safe travel with your pet.',
                subServices: [
                    'Vaccinations and general health screenings', 'Senior wellness programs', 'Treatment and prevention of endo- and ectoparasites', 'Consultation on flea/tick prevention', 'Worming and deworming protocols', 'Travel medicine and international health certificates',
                ]
            },
            { 
                id: 'internal-medicine',
                title: "Internal Medicine & Special Diseases", 
                description: "Management of complex conditions like diabetes, kidney disease, and more.",
                longDescription: 'Our team is experienced in diagnosing and managing a wide range of chronic and complex internal diseases, providing ongoing care and support in your home.',
                subServices: [
                    'Gastrointestinal diseases (diarrhea, vomiting, pancreatitis)', 'Endocrinology (Diabetes, Thyroid & Adrenal diseases)', 'Nephrology (Chronic kidney disease, acute kidney failure)', 'Urology (cystitis, urinary stones, incontinence)', 'Blood pressure measurement and proteinuria screening', 'Geriatrics (senior health programs, pain management)', 'Hematology & sample collection for laboratory submission',
                ]
            },
            { 
                id: 'general-vet',
                title: "General Veterinary Services", 
                description: "Wound care, health certificates, and compassionate in-home euthanasia.",
                longDescription: 'Beyond diagnostics and prevention, we offer essential services including wound management, official documentation, and providing a peaceful end-of-life transition at home.',
                subServices: [
                    'Wound care and emergency management', 'In-house pharmacy in accordance with Veterinary Pharmacy Regulations (TÄHAV)', 'Issuing of health certificates and EU pet passports', 'Travel consultation', 'Euthanasia and palliative care at home upon request',
                ]
            },
            { 
                id: 'preventive-consultations',
                title: "Preventive Medicine & Consultations", 
                description: "Expert advice on nutrition, weight management, and parasite prevention.",
                longDescription: 'We believe in empowering pet owners with knowledge. Our consultations cover everything from diet to behavior, helping you make the best decisions for your companion.',
                subServices: [
                    'Parasite prevention (fleas, ticks, worms, travel-related diseases)', 'Nutritional counselling (puppies, seniors, specific diets, BARF)', 'Behavioural consultation – certified dog trainer (USP)', 'Weight management programs', 'Senior pet check-ups', 'Vaccination & medication reminders',
                ]
            },
            { 
                id: 'behaviour-nutrition',
                title: "Behaviour & Nutrition", 
                description: "Consultations for behavioral issues and customized nutritional plans.",
                longDescription: 'A healthy pet is happy in both body and mind. We offer integrated behavioral therapy and specialized nutritional advice to address the root causes of many common issues.',
                subServices: [
                    'Behavioural medicine consultations (anxiety, aggression, stress)', 'Cat behaviour training and environmental enrichment', 'Nutritional advice for all life stages (puppies, seniors)', 'Diet plans for specific diseases (e.g., kidney, allergies)', 'Guidance on raw feeding (BARF diets)', 'Integrated behavioural therapy',
                ]
            },
        ]
    },
    about: {
      title: 'About UrbanVet',
      p1: 'UrbanVet was founded by Dr. Anja Schmidt, a veterinarian with over 15 years of experience in small animal medicine. After working in busy city clinics, she saw a growing need for a more personalized and less stressful approach to pet healthcare.',
      p2: 'The traditional clinic environment can be a source of anxiety for many pets and their owners. The travel, the waiting room, and the unfamiliar smells and sounds can make a necessary visit a difficult experience. UrbanVet was created to eliminate these stressors.',
      p3: 'Our mission is simple: to provide top-quality, compassionate veterinary care in the place your pet feels safest – their home. We use state-of-the-art mobile equipment and are committed to building lasting relationships with our clients and their furry family members.',
    },
    blog: {
      title: 'UrbanVet Blog',
      subtitle: 'Tips and insights from our vets to help you care for your city pets.',
      back_button: 'Back to Blog',
      posts: [
        { 
            title: '5 Tips for a Healthy City Cat', 
            date: 'October 26, 2023', 
            summary: 'Living in an apartment doesn\'t mean your cat can\'t have a rich and healthy life. Here are five essential tips...',
            content: (
                <>
                    <p>City living presents unique challenges and opportunities for our feline friends. While they may not have wide-open fields to roam, you can create a stimulating and healthy environment for them indoors. Here are our top five tips:</p>
                    <h3 className="font-bold mt-4 mb-2">1. Vertical Space is Key</h3>
                    <p>Cats are natural climbers. In a smaller space, think vertically! Cat trees, wall shelves, and window perches provide exercise, a sense of security, and an interesting view of the world outside. This helps prevent boredom and related behavioral issues.</p>
                    <h3 className="font-bold mt-4 mb-2">2. Interactive Playtime</h3>
                    <p>Dedicate at least two 15-minute sessions of interactive play each day. Use toys like feather wands or laser pointers (be sure to end on a physical toy they can "catch") to mimic hunting. This satisfies their predatory instincts and keeps them physically active.</p>
                    <h3 className="font-bold mt-4 mb-2">3. Mind the Diet</h3>
                    <p>Indoor cats are more prone to obesity. It's crucial to measure their food and not rely on free-feeding. Consult with us to determine the right caloric intake for your cat's age, weight, and activity level. A balanced diet is fundamental to preventing many common health problems.</p>
                    <h3 className="font-bold mt-4 mb-2">4. Litter Box Hygiene</h3>
                    <p>The rule of thumb is one litter box per cat, plus one extra. They should be placed in quiet, low-traffic areas. Scoop them daily and do a full clean-out weekly. A clean litter box is essential for preventing urinary issues and ensuring your cat feels comfortable.</p>
                    <h3 className="font-bold mt-4 mb-2">5. Regular Vet Check-ups</h3>
                    <p>Even if your cat never goes outside, regular wellness exams are vital. We can catch potential health issues early, keep them up-to-date on necessary vaccinations, and provide preventative care that ensures they live a long, happy life by your side. With our mobile service, we make this stress-free for you both!</p>
                </>
            )
        },
        { 
            title: 'Preparing Your Dog for a Trip on the U-Bahn', 
            date: 'October 15, 2023', 
            summary: 'Public transport can be stressful for dogs. We break down how to make your next U-Bahn ride a positive experience.',
            content: (
                <>
                    <p>Using Berlin's U-Bahn is a convenient way to get around, but for a dog, it can be an overwhelming experience of strange noises, crowds, and movements. Proper preparation can turn a stressful trip into a calm journey for you and your furry companion.</p>
                    <h3 className="font-bold mt-4 mb-2">1. Start with Short, Positive Trips</h3>
                    <p>Don't make their first U-Bahn ride a long one during rush hour. Start by just visiting the station. Reward them with treats for calm behavior. Then, take a one-stop trip during off-peak hours. Gradually increase the duration as they get more comfortable.</p>
                    <h3 className="font-bold mt-4 mb-2">2. Muzzle Training</h3>
                    <p>In Berlin, dogs on public transport are required to be leashed and wear a muzzle (unless they are small enough to be in a carrier). Introduce the muzzle at home in a positive way. Let them sniff it, give them a treat. Put a treat inside it. Slowly work up to fastening it for short periods. It should be a comfortable, non-threatening piece of equipment.</p>
                    <h3 className="font-bold mt-4 mb-2">3. Find a Quiet Spot</h3>
                    <p>When you get on the train, try to find a corner or a seat where your dog can sit or lie down without being in the main flow of traffic. This gives them a sense of security and keeps their tail and paws from being stepped on. Sitting between your legs can also be a comforting spot for them.</p>
                    <h3 className="font-bold mt-4 mb-2">4. Bring High-Value Treats</h3>
                    <p>Keep your dog's focus on you, not the chaos around them. Bring extra-tasty treats that you only use for special situations like the U-Bahn. Reward them for sitting calmly, ignoring loud noises, or looking at you.</p>
                    <h3 className="font-bold mt-4 mb-2">5. Stay Calm Yourself</h3>
                    <p>Dogs are masters at reading our emotions. If you are anxious, your dog will be too. Project a calm, confident attitude. Speak to them in a reassuring voice and show them that there's nothing to be afraid of. Your confidence will be their confidence.</p>
                </>
            )
        },
        { 
            title: 'Seasonal Allergies in Pets: What to Look For', 
            date: 'September 28, 2023', 
            summary: 'Just like humans, pets can suffer from seasonal allergies. Learn to recognize the signs and how you can provide relief.',
            content: (
                 <>
                    <p>As the seasons change in Berlin, pollen from trees, grasses, and weeds can cause discomfort for our pets, not just us. Unlike humans who typically get watery eyes and sneeze, pet allergies often manifest as skin issues.</p>
                    <h3 className="font-bold mt-4 mb-2">Common Signs of Seasonal Allergies in Pets:</h3>
                    <ul>
                        <li className="ml-4 list-disc"><strong>Excessive Itching and Scratching:</strong> This is the most common sign. Your pet might be scratching, licking, or chewing at their skin, paws, or ears.</li>
                        <li className="ml-4 list-disc"><strong>Red, Inflamed Skin:</strong> Check their belly, paws, and ears for redness and irritation. They may develop "hot spots" – areas of acute, moist dermatitis.</li>
                        <li className="ml-4 list-disc"><strong>Chronic Ear Infections:</strong> Allergies are a common underlying cause of recurrent ear infections. You may notice head shaking, scratching at the ears, or a bad odor.</li>
                        <li className="ml-4 list-disc"><strong>Watery Eyes and Runny Nose:</strong> While less common than in humans, some pets will show these signs.</li>
                        <li className="ml-4 list-disc"><strong>Paw Licking/Chewing:</strong> Allergenic pollen can accumulate on your pet's paws, making them a prime target for itching.</li>
                    </ul>
                    <h3 className="font-bold mt-4 mb-2">How We Can Help</h3>
                    <p>If you suspect your pet has allergies, it's important to get a proper diagnosis. We can help identify the cause and create a management plan. This might include:</p>
                    <ul>
                        <li className="ml-4 list-disc"><strong>Medications:</strong> To control itching and inflammation.</li>
                        <li className="ml-4 list-disc"><strong>Dietary Changes:</strong> Sometimes, a specific diet can help support skin health.</li>
                        <li className="ml-4 list-disc"><strong>Topical Treatments:</strong> Medicated shampoos or wipes can provide relief.</li>
                        <li className="ml-4 list-disc"><strong>Allergy Testing:</strong> To pinpoint the specific allergens causing the reaction.</li>
                    </ul>
                    <p>Don't let your pet suffer in silence. A home visit allows us to assess them in their own environment and provide the relief they need.</p>
                </>
            )
        },
        {
          title: 'Choosing the Right Diet for Your Urban Pet',
          date: 'November 5, 2023',
          summary: 'Nutrition is the cornerstone of health. Navigating the world of pet food can be confusing. We guide you through the basics.',
          content: (
            <>
              <p>Walking into a pet store can be overwhelming. With endless options from kibble to raw diets, how do you choose what's best for your companion? The right nutrition is fundamental to your pet's health, energy levels, and longevity.</p>
              <h3 className="font-bold mt-4 mb-2">1. Understand the Basics: AAFCO</h3>
              <p>Look for a statement on the packaging that says the food is "complete and balanced" and meets the nutritional levels established by the AAFCO (Association of American Feed Control Officials) Pet Food Nutrient Profiles. This ensures the food contains the minimum required amounts of essential nutrients.</p>
              <h3 className="font-bold mt-4 mb-2">2. Consider Life Stage</h3>
              <p>A puppy or kitten has very different nutritional needs than a senior pet. Puppies need more calories and specific nutrients for growth, while seniors may need fewer calories and joint support. Always feed a diet that is appropriate for your pet's life stage.</p>
              <h3 className="font-bold mt-4 mb-2">3. Kibble, Wet, or Raw?</h3>
              <p><strong>Dry Food (Kibble):</strong> Convenient, cost-effective, and can have dental benefits. However, it's low in moisture, which can be a concern for cats who are prone to urinary issues.</p>
              <p><strong>Wet Food:</strong> Excellent for hydration and often more palatable for picky eaters. It can be more expensive and needs to be refrigerated after opening.</p>
              <p><strong>Raw Diets (BARF):</strong> Proponents claim benefits like shinier coats and healthier skin. However, these diets carry a risk of bacterial contamination (for both pets and humans) and can be nutritionally unbalanced if not prepared correctly. Consultation is essential before starting a raw diet.</p>
              <h3 className="font-bold mt-4 mb-2">4. When in Doubt, Ask Us!</h3>
              <p>Every pet is an individual. Factors like breed, activity level, and medical conditions all influence their dietary needs. We can provide a personalized nutritional consultation during a home visit to help you make the best choice for your furry family member.</p>
            </>
          )
        },
        {
          title: 'Senior Pet Care: Keeping Your Older Companion Comfortable',
          date: 'November 12, 2023',
          summary: 'Our pets are living longer than ever. Learn how to adapt your care to ensure their golden years are happy and comfortable.',
          content: (
            <>
              <p>Thanks to advances in veterinary care, our beloved pets are living longer lives. But with age comes changes. Adjusting your care routine can make a huge difference in the quality of life for your senior dog or cat.</p>
              <h3 className="font-bold mt-4 mb-2">1. Semi-Annual Wellness Exams</h3>
              <p>We recommend increasing vet visits to twice a year for senior pets (generally over 7-8 years old). This allows us to catch age-related issues like arthritis, kidney disease, or dental problems early. Regular blood work is a key part of these check-ups.</p>
              <h3 className="font-bold mt-4 mb-2">2. Adjust the Environment</h3>
              <p>Arthritis is common in older pets. Consider adding ramps for cars or beds, providing orthopedic bedding, and using non-slip rugs on hard floors. For cats, make sure litter boxes have low entry points and their favorite sleeping spots are easily accessible.</p>
              <h3 className="font-bold mt-4 mb-2">3. Monitor Diet and Weight</h3>
              <p>A senior pet's metabolism slows down. They may need a diet with fewer calories to prevent obesity, which puts extra strain on their joints. Some senior diets also include supplements like glucosamine for joint health. Also, be mindful of their hydration, especially in cats.</p>
              <h3 className="font-bold mt-4 mb-2">4. Don't Stop Playing</h3>
              <p>Exercise is still important, but it needs to be modified. Swap long, strenuous runs for shorter, more frequent walks. For cats, gentle play with a soft wand toy can keep their minds and bodies active without overdoing it.</p>
              <h3 className="font-bold mt-4 mb-2">5. Watch for Cognitive Changes</h3>
              <p>Just like people, pets can experience cognitive dysfunction (dementia). Signs can include disorientation, changes in sleep patterns, or forgetting commands. There are strategies and supplements that can help manage these changes. If you notice any of these signs, it's time for a consultation.</p>
            </>
          )
        }
      ]
    },
    contactPage: {
        title: 'Get in Touch',
        subtitle: 'Ready to schedule a visit or have a question? Contact us!',
        email: 'contact@urbanvet.de',
    },
    impressum: {
      title: 'Impressum / Privacy Policy',
      content: `
        <h3 class="font-semibold text-lg mb-2">Information according to § 5 TMG</h3>
        <p>UrbanVet GmbH<br>Musterstraße 1<br>10115 Berlin</p>
        <h3 class="font-semibold text-lg mt-4 mb-2">Represented by:</h3>
        <p>Dr. Anja Schmidt</p>
        <h3 class="font-semibold text-lg mt-4 mb-2">Contact:</h3>
        <p>Telephone: +49 174 3995177<br>Email: contact@urbanvet.de</p>
        <h3 class="font-semibold text-lg mt-4 mb-2">Register entry:</h3>
        <p>Entry in the Handelsregister.<br>Registering court: Amtsgericht Charlottenburg<br>Registration number: HRB 123456 B</p>
        <h3 class="font-semibold text-lg mt-4 mb-2">VAT ID:</h3>
        <p>VAT identification number according to §27a Value Added Tax Act:<br>DE123456789</p>
        <h2 class="font-bold text-xl mt-8 mb-4">Privacy Policy</h2>
        <p>Your privacy is important to us. It is UrbanVet's policy to respect your privacy regarding any information we may collect from you across our website. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. This website is static and does not collect personal data through cookies or analytics.</p>
      `
    },
    footer: {
      tagline: 'Modern vet care, delivered.',
      legal: 'Impressum & Privacy',
    }
  },
  [Language.DE]: {
    nav: {
      [Page.HOME]: 'Startseite',
      [Page.SERVICES]: 'Leistungen',
      [Page.ABOUT]: 'Über Uns',
      [Page.BLOG]: 'Blog',
      [Page.CONTACT]: 'Kontakt',
      [Page.IMPRESSUM]: 'Impressum',
    },
    home: {
      heroTitle: 'Mitfühlende Tiermedizin, direkt vor Ihrer Haustür.',
      heroSubtitle: 'Professionelle, stressfreie tierärztliche Versorgung für Ihre geliebten Haustiere im Komfort Ihres Zuhauses.',
      ctaButton: 'Termin vereinbaren',
      servicesTitle: 'Unsere Leistungen',
      servicesSubtitle: 'Wir bieten eine breite Palette mobiler tierärztlicher Dienste, um Ihr Haustier gesund und glücklich zu halten.',
      aboutTitle: 'Lernen Sie UrbanVet kennen',
      aboutText: (
        <>
          Gegründet aus der Überzeugung, dass Tierpflege persönlich und bequem sein sollte, bringt UrbanVet die Klinik zu Ihnen. Unser erfahrenes Team widmet sich der Bereitstellung höchster Versorgungsstandards ohne den Reisestress für Sie oder Ihr Haustier. Wir bedienen den Großraum Berlin und verbinden moderne Medizin mit einer mitfühlenden Note.
        </>
      ),
    },
     services: {
        title: "Unsere Mobilen Tierarzt-Leistungen",
        subtitle: "Umfassende Versorgung für die Bedürfnisse Ihres Haustieres, mit Komfort und Mitgefühl. Klicken Sie auf eine Kategorie, um mehr zu erfahren.",
        items: [
            { 
                id: 'general-medicine',
                title: "Allgemeinmedizin & Spezialdiagnostik", 
                description: "Umfassende Untersuchungen und moderne Diagnostik zur Beurteilung der Gesundheit Ihres Haustieres.",
                longDescription: 'Wir bieten gründliche klinische Untersuchungen und nutzen fortschrittliche diagnostische Instrumente, um ein vollständiges Bild der Gesundheit Ihres Haustieres zu erhalten.',
                subServices: [
                    'Umfassende klinische Untersuchung', 'Orthopädische Untersuchung & Lahmheitsdiagnostik', 'Neurologische Beurteilung', 'Dermatologische Untersuchung', 'Geriatrische Gesundheitschecks', 'Allergiediagnostik und -therapie', 'Blutuntersuchungen (hämatologisch & biochemisch)', 'Kotuntersuchungen (Schnelltests, externe Labordiagnostik)', 'Urologische Diagnostik (Urintests)', 'Biopsien und Probenentnahme (Haut, Feinnadelaspiration, Laborversand)',
                ]
            },
            { 
                id: 'preventive-medicine',
                title: "Präventivmedizin & Prophylaxe", 
                description: "Impfungen, Parasitenkontrolle und Vorsorgeprogramme zur Vorbeugung von Krankheiten.",
                longDescription: 'Vorsorge ist der Grundstein für ein langes und gesundes Leben. Wir bieten maßgeschneiderte Impfpläne, umfassende Parasitenkontrolle und Beratung für sicheres Reisen.',
                subServices: [
                    'Impfungen und allgemeine Gesundheitsvorsorge', 'Wellness-Programme für Senioren', 'Behandlung und Prävention von Endo- und Ektoparasiten', 'Beratung zur Floh-/Zeckenprävention', 'Entwurmungsprotokolle', 'Reisemedizin und internationale Gesundheitszeugnisse',
                ]
            },
            { 
                id: 'internal-medicine',
                title: "Innere Medizin & Spezialkrankheiten", 
                description: "Management komplexer Erkrankungen wie Diabetes, Nierenerkrankungen und mehr.",
                longDescription: 'Unser Team ist erfahren in der Diagnose und Behandlung einer Vielzahl chronischer und komplexer innerer Erkrankungen und bietet kontinuierliche Betreuung bei Ihnen zu Hause.',
                subServices: [
                    'Magen-Darm-Erkrankungen (Durchfall, Erbrechen, Pankreatitis)', 'Endokrinologie (Diabetes, Schilddrüsen- & Nebennierenerkrankungen)', 'Nephrologie (Chronische Nierenerkrankung, akutes Nierenversagen)', 'Urologie (Zystitis, Harnsteine, Inkontinenz)', 'Blutdruckmessung und Proteinurie-Screening', 'Geriatrie (Gesundheitsprogramme für Senioren, Schmerzmanagement)', 'Hämatologie & Probenentnahme für Laborversand',
                ]
            },
            { 
                id: 'general-vet',
                title: "Allgemeine Tierärztliche Leistungen", 
                description: "Wundversorgung, Gesundheitszeugnisse und einfühlsame Sterbebegleitung zu Hause.",
                longDescription: 'Über Diagnostik und Prävention hinaus bieten wir wesentliche Dienstleistungen wie Wundmanagement, offizielle Dokumentationen und eine friedliche Sterbebegleitung zu Hause.',
                subServices: [
                    'Wundversorgung und Notfallmanagement', 'Hausapotheke gemäß der Tierärztlichen Hausapothekenverordnung (TÄHAV)', 'Ausstellung von Gesundheitszeugnissen und EU-Heimtierausweisen', 'Reiseberatung', 'Euthanasie und Palliativpflege zu Hause auf Anfrage',
                ]
            },
            { 
                id: 'preventive-consultations',
                title: "Vorsorgemedizin & Beratungen", 
                description: "Expertenrat zu Ernährung, Gewichtsmanagement und Parasitenprävention.",
                longDescription: 'Wir glauben daran, Tierhalter mit Wissen zu stärken. Unsere Beratungen decken alles von der Ernährung bis zum Verhalten ab und helfen Ihnen, die besten Entscheidungen zu treffen.',
                subServices: [
                    'Parasitenprävention (Flöhe, Zecken, Würmer, Reisekrankheiten)', 'Ernährungsberatung (Welpen, Senioren, spezielle Diäten, BARF)', 'Verhaltensberatung – zertifizierte Hundetrainerin (USP)', 'Gewichtsmanagement-Programme', 'Vorsorgeuntersuchungen für ältere Tiere', 'Impf- & Medikamentenerinnerungen',
                ]
            },
            { 
                id: 'behaviour-nutrition',
                title: "Verhalten & Ernährung", 
                description: "Beratungen bei Verhaltensproblemen und maßgeschneiderte Ernährungspläne.",
                longDescription: 'Ein gesundes Haustier ist sowohl körperlich als auch geistig glücklich. Wir bieten integrierte Verhaltenstherapie und spezielle Ernährungsberatung an.',
                subServices: [
                    'Verhaltensmedizinische Beratungen (Angst, Aggression, Stress)', 'Katzenverhaltenstraining und Umgebungsanreicherung', 'Ernährungsberatung für alle Lebensphasen (Welpen, Senioren)', 'Diätpläne für bestimmte Krankheiten (z.B. Nieren, Allergien)', 'Anleitung zur Rohfütterung (BARF-Diäten)', 'Integrierte Verhaltenstherapie',
                ]
            },
        ]
    },
    about: {
      title: 'Über UrbanVet',
      p1: 'UrbanVet wurde von Dr. Anja Schmidt gegründet, einer Tierärztin mit über 15 Jahren Erfahrung in der Kleintiermedizin. Nach ihrer Arbeit in belebten Stadtkliniken erkannte sie den wachsenden Bedarf an einem persönlicheren und stressfreieren Ansatz in der Tiergesundheitspflege.',
      p2: 'Das traditionelle Klinik-Umfeld kann für viele Haustiere und ihre Besitzer eine Quelle der Angst sein. Die Anreise, das Wartezimmer und die ungewohnten Gerüche und Geräusche können einen notwendigen Besuch zu einer schwierigen Erfahrung machen. UrbanVet wurde geschaffen, um diese Stressfaktoren zu beseitigen.',
      p3: 'Unsere Mission ist einfach: Wir bieten hochwertige, mitfühlende tierärztliche Versorgung an dem Ort, an dem sich Ihr Haustier am sichersten fühlt – seinem Zuhause. Wir verwenden modernste mobile Ausrüstung und engagieren uns für den Aufbau dauerhafter Beziehungen zu unseren Kunden und ihren pelzigen Familienmitgliedern.',
    },
    blog: {
      title: 'UrbanVet Blog',
      subtitle: 'Tipps und Einblicke von unseren Tierärzten, um Ihnen bei der Pflege Ihrer Stadttiere zu helfen.',
      back_button: 'Zurück zum Blog',
      posts: [
        { 
            title: '5 Tipps für eine gesunde Stadtkatze', 
            date: '26. Oktober 2023', 
            summary: 'In einer Wohnung zu leben bedeutet nicht, dass Ihre Katze kein reiches und gesundes Leben führen kann. Hier sind fünf wichtige Tipps...',
            content: (
                <>
                    <p>Das Stadtleben stellt einzigartige Herausforderungen und Chancen für unsere felinen Freunde dar. Auch wenn sie keine weiten Felder zum Herumstreifen haben, können Sie ihnen drinnen eine anregende und gesunde Umgebung schaffen. Hier sind unsere fünf Top-Tipps:</p>
                    <h3 className="font-bold mt-4 mb-2">1. Vertikaler Raum ist entscheidend</h3>
                    <p>Katzen sind natürliche Kletterer. Denken Sie in kleineren Räumen vertikal! Kratzbäume, Wandregale und Fensterplätze bieten Bewegung, ein Gefühl der Sicherheit und einen interessanten Blick auf die Welt draußen. Dies hilft, Langeweile und damit verbundene Verhaltensprobleme zu vermeiden.</p>
                    <h3 className="font-bold mt-4 mb-2">2. Interaktive Spielzeit</h3>
                    <p>Widmen Sie täglich mindestens zwei 15-minütige interaktive Spielsitzungen. Verwenden Sie Spielzeug wie Federwedel oder Laserpointer (achten Sie darauf, mit einem physischen Spielzeug zu enden, das sie "fangen" können), um die Jagd nachzuahmen. Dies befriedigt ihre Raubtierinstinkte und hält sie körperlich aktiv.</p>
                    <h3 className="font-bold mt-4 mb-2">3. Achten Sie auf die Ernährung</h3>
                    <p>Wohnungskatzen neigen eher zu Fettleibigkeit. Es ist entscheidend, ihr Futter abzumessen und sich nicht auf freie Fütterung zu verlassen. Sprechen Sie mit uns, um die richtige Kalorienaufnahme für das Alter, Gewicht und Aktivitätsniveau Ihrer Katze zu bestimmen. Eine ausgewogene Ernährung ist grundlegend, um viele häufige Gesundheitsprobleme zu vermeiden.</p>
                    <h3 className="font-bold mt-4 mb-2">4. Hygiene der Katzentoilette</h3>
                    <p>Die Faustregel lautet: eine Katzentoilette pro Katze plus eine zusätzliche. Sie sollten an ruhigen, verkehrsarmen Orten aufgestellt werden. Schaufeln Sie sie täglich aus und führen Sie wöchentlich eine vollständige Reinigung durch. Eine saubere Katzentoilette ist unerlässlich, um Harnwegsproblemen vorzubeugen und sicherzustellen, dass sich Ihre Katze wohlfühlt.</p>
                    <h3 className="font-bold mt-4 mb-2">5. Regelmäßige Tierarztbesuche</h3>
                    <p>Auch wenn Ihre Katze nie nach draußen geht, sind regelmäßige Gesundheitsuntersuchungen unerlässlich. Wir können potenzielle Gesundheitsprobleme frühzeitig erkennen, sie mit den notwendigen Impfungen auf dem Laufenden halten und vorbeugende Pflege leisten, die sicherstellt, dass sie ein langes, glückliches Leben an Ihrer Seite führt. Mit unserem mobilen Service machen wir dies für Sie beide stressfrei!</p>
                </>
            )
        },
        { 
            title: 'Bereiten Sie Ihren Hund auf eine Fahrt mit der U-Bahn vor', 
            date: '15. Oktober 2023', 
            summary: 'Öffentliche Verkehrsmittel können für Hunde stressig sein. Wir erklären, wie Ihre nächste U-Bahn-Fahrt zu einer positiven Erfahrung wird.',
            content: (
                 <>
                    <p>Die Nutzung der Berliner U-Bahn ist eine bequeme Art, sich fortzubewegen, aber für einen Hund kann es eine überwältigende Erfahrung mit fremden Geräuschen, Menschenmengen und Bewegungen sein. Eine richtige Vorbereitung kann eine stressige Reise in eine ruhige Fahrt für Sie und Ihren pelzigen Begleiter verwandeln.</p>
                    <h3 className="font-bold mt-4 mb-2">1. Beginnen Sie mit kurzen, positiven Fahrten</h3>
                    <p>Machen Sie ihre erste U-Bahn-Fahrt nicht zu einer langen während der Stoßzeiten. Beginnen Sie damit, nur den Bahnhof zu besuchen. Belohnen Sie sie mit Leckerlis für ruhiges Verhalten. Machen Sie dann eine Fahrt von einer Station außerhalb der Hauptverkehrszeiten. Erhöhen Sie allmählich die Dauer, wenn sie sich wohler fühlen.</p>
                    <h3 className="font-bold mt-4 mb-2">2. Maulkorb-Training</h3>
                    <p>In Berlin müssen Hunde in öffentlichen Verkehrsmitteln angeleint sein und einen Maulkorb tragen (es sei denn, sie sind klein genug, um in einer Transportbox zu sein). Führen Sie den Maulkorb zu Hause auf positive Weise ein. Lassen Sie sie daran schnüffeln, geben Sie ihnen ein Leckerli. Legen Sie ein Leckerli hinein. Arbeiten Sie sich langsam dahin vor, ihn für kurze Zeit zu befestigen. Er sollte ein bequemes, nicht bedrohliches Ausrüstungsstück sein.</p>
                    <h3 className="font-bold mt-4 mb-2">3. Finden Sie einen ruhigen Platz</h3>
                    <p>Wenn Sie in den Zug einsteigen, versuchen Sie, eine Ecke oder einen Sitzplatz zu finden, wo Ihr Hund sitzen oder liegen kann, ohne im Hauptstrom des Verkehrs zu sein. Dies gibt ihm ein Gefühl der Sicherheit und verhindert, dass auf seinen Schwanz oder seine Pfoten getreten wird. Zwischen Ihren Beinen zu sitzen kann auch ein beruhigender Ort für ihn sein.</p>
                    <h3 className="font-bold mt-4 mb-2">4. Bringen Sie hochwertige Leckerlis mit</h3>
                    <p>Halten Sie die Konzentration Ihres Hundes auf Sie gerichtet, nicht auf das Chaos um ihn herum. Bringen Sie besonders schmackhafte Leckerlis mit, die Sie nur für besondere Situationen wie die U-Bahn verwenden. Belohnen Sie ihn für ruhiges Sitzen, das Ignorieren lauter Geräusche oder wenn er Sie ansieht.</p>
                    <h3 className="font-bold mt-4 mb-2">5. Bleiben Sie selbst ruhig</h3>
                    <p>Hunde sind Meister darin, unsere Emotionen zu lesen. Wenn Sie ängstlich sind, wird Ihr Hund es auch sein. Strahlen Sie eine ruhige, selbstbewusste Haltung aus. Sprechen Sie mit ihm in einer beruhigenden Stimme und zeigen Sie ihm, dass es nichts zu befürchten gibt. Ihr Selbstvertrauen wird sein Selbstvertrauen sein.</p>
                </>
            )
        },
        { 
            title: 'Saisonale Allergien bei Haustieren: Worauf Sie achten sollten', 
            date: '28. September 2023', 
            summary: 'Genau wie Menschen können auch Haustiere unter saisonalen Allergien leiden. Lernen Sie die Anzeichen zu erkennen und wie Sie Linderung verschaffen können.',
            content: (
                <>
                    <p>Wenn sich die Jahreszeiten in Berlin ändern, können Pollen von Bäumen, Gräsern und Unkräutern nicht nur uns, sondern auch unseren Haustieren Unbehagen bereiten. Im Gegensatz zu Menschen, die typischerweise tränende Augen bekommen und niesen, äußern sich Haustierallergien oft in Hautproblemen.</p>
                    <h3 className="font-bold mt-4 mb-2">Häufige Anzeichen für saisonale Allergien bei Haustieren:</h3>
                    <ul>
                        <li className="ml-4 list-disc"><strong>Übermäßiges Jucken und Kratzen:</strong> Dies ist das häufigste Anzeichen. Ihr Haustier kratzt, leckt oder kaut möglicherweise an Haut, Pfoten oder Ohren.</li>
                        <li className="ml-4 list-disc"><strong>Rote, entzündete Haut:</strong> Überprüfen Sie Bauch, Pfoten und Ohren auf Rötungen und Reizungen. Es können sich "Hot Spots" entwickeln – Bereiche akuter, feuchter Dermatitis.</li>
                        <li className="ml-4 list-disc"><strong>Chronische Ohrenentzündungen:</strong> Allergien sind eine häufige Ursache für wiederkehrende Ohrenentzündungen. Sie bemerken vielleicht Kopfschütteln, Kratzen an den Ohren oder einen schlechten Geruch.</li>
                        <li className="ml-4 list-disc"><strong>Tränende Augen und laufende Nase:</strong> Obwohl seltener als bei Menschen, zeigen einige Haustiere diese Anzeichen.</li>
                        <li className="ml-4 list-disc"><strong>Pfotenlecken/-kauen:</strong> Allergene Pollen können sich auf den Pfoten Ihres Haustieres ansammeln, was sie zu einem Hauptziel für Juckreiz macht.</li>
                    </ul>
                    <h3 className="font-bold mt-4 mb-2">Wie wir helfen können</h3>
                    <p>Wenn Sie vermuten, dass Ihr Haustier Allergien hat, ist es wichtig, eine richtige Diagnose zu erhalten. Wir können helfen, die Ursache zu identifizieren und einen Managementplan zu erstellen. Dieser könnte beinhalten:</p>
                    <ul>
                        <li className="ml-4 list-disc"><strong>Medikamente:</strong> Zur Kontrolle von Juckreiz und Entzündungen.</li>
                        <li className="ml-4 list-disc"><strong>Ernährungsumstellungen:</strong> Manchmal kann eine spezielle Diät die Hautgesundheit unterstützen.</li>
                        <li className="ml-4 list-disc"><strong>Topische Behandlungen:</strong> Medizinische Shampoos oder Tücher können Linderung verschaffen.</li>
                        <li className="ml-4 list-disc"><strong>Allergietests:</strong> Um die spezifischen Allergene zu bestimmen, die die Reaktion verursachen.</li>
                    </ul>
                    <p>Lassen Sie Ihr Haustier nicht im Stillen leiden. Ein Hausbesuch ermöglicht es uns, es in seiner eigenen Umgebung zu beurteilen und die benötigte Linderung zu verschaffen.</p>
                </>
            )
        },
        {
          title: 'Die richtige Ernährung für Ihr Stadttier wählen',
          date: '5. November 2023',
          summary: 'Ernährung ist der Grundstein der Gesundheit. Die Welt des Tierfutters zu navigieren kann verwirrend sein. Wir führen Sie durch die Grundlagen.',
          content: (
            <>
              <p>Ein Tiergeschäft zu betreten kann überwältigend sein. Bei endlosen Optionen von Trockenfutter bis zu Rohkost, wie wählen Sie das Beste für Ihren Begleiter? Die richtige Ernährung ist grundlegend für die Gesundheit, das Energieniveau und die Langlebigkeit Ihres Haustiers.</p>
              <h3 className="font-bold mt-4 mb-2">1. Die Grundlagen verstehen: AAFCO</h3>
              <p>Suchen Sie auf der Verpackung nach einer Angabe, dass das Futter "vollständig und ausgewogen" ist und den Nährstoffgehalten der AAFCO (Association of American Feed Control Officials) Pet Food Nutrient Profiles entspricht. Dies stellt sicher, dass das Futter die mindestens erforderlichen Mengen an essentiellen Nährstoffen enthält.</p>
              <h3 className="font-bold mt-4 mb-2">2. Berücksichtigen Sie die Lebensphase</h3>
              <p>Ein Welpe oder Kätzchen hat ganz andere Ernährungsbedürfnisse als ein älteres Tier. Welpen benötigen mehr Kalorien und spezifische Nährstoffe für das Wachstum, während Senioren möglicherweise weniger Kalorien und Gelenkunterstützung benötigen. Füttern Sie immer eine Diät, die für die Lebensphase Ihres Haustiers geeignet ist.</p>
              <h3 className="font-bold mt-4 mb-2">3. Trocken, Nass oder Roh?</h3>
              <p><strong>Trockenfutter (Kibble):</strong> Bequem, kostengünstig und kann zahnmedizinische Vorteile haben. Es hat jedoch einen geringen Feuchtigkeitsgehalt, was bei Katzen, die zu Harnwegsproblemen neigen, ein Problem sein kann.</p>
              <p><strong>Nassfutter:</strong> Hervorragend für die Flüssigkeitszufuhr und oft schmackhafter für wählerische Esser. Es kann teurer sein und muss nach dem Öffnen gekühlt werden.</p>
              <p><strong>Rohkost (BARF):</strong> Befürworter behaupten Vorteile wie glänzenderes Fell und gesündere Haut. Diese Diäten bergen jedoch ein Risiko der bakteriellen Kontamination (für Haustiere und Menschen) und können ernährungsphysiologisch unausgewogen sein, wenn sie nicht korrekt zubereitet werden. Eine Beratung ist vor Beginn einer Rohkost-Diät unerlässlich.</p>
              <h3 className="font-bold mt-4 mb-2">4. Im Zweifelsfall, fragen Sie uns!</h3>
              <p>Jedes Haustier ist ein Individuum. Faktoren wie Rasse, Aktivitätsniveau und medizinische Zustände beeinflussen alle ihre Ernährungsbedürfnisse. Wir können bei einem Hausbesuch eine persönliche Ernährungsberatung anbieten, um Ihnen zu helfen, die beste Wahl für Ihr pelziges Familienmitglied zu treffen.</p>
            </>
          )
        },
        {
          title: 'Senioren-Tierpflege: So bleibt Ihr älterer Begleiter fit',
          date: '12. November 2023',
          summary: 'Unsere Haustiere leben länger als je zuvor. Erfahren Sie, wie Sie ihre Pflege anpassen können, um sicherzustellen, dass ihre goldenen Jahre glücklich und bequem sind.',
          content: (
            <>
              <p>Dank der Fortschritte in der Tiermedizin leben unsere geliebten Haustiere länger. Aber mit dem Alter kommen Veränderungen. Die Anpassung Ihrer Pflegeroutine kann einen großen Unterschied in der Lebensqualität Ihres älteren Hundes oder Ihrer älteren Katze machen.</p>
              <h3 className="font-bold mt-4 mb-2">1. Halbjährliche Gesundheitschecks</h3>
              <p>Wir empfehlen, die Tierarztbesuche für ältere Haustiere (in der Regel über 7-8 Jahre alt) auf zweimal jährlich zu erhöhen. Dies ermöglicht es uns, altersbedingte Probleme wie Arthritis, Nierenerkrankungen oder Zahnprobleme frühzeitig zu erkennen. Regelmäßige Blutuntersuchungen sind ein wichtiger Teil dieser Kontrollen.</p>
              <h3 className="font-bold mt-4 mb-2">2. Passen Sie die Umgebung an</h3>
              <p>Arthritis ist bei älteren Haustieren häufig. Erwägen Sie, Rampen für Autos oder Betten hinzuzufügen, orthopädische Betten bereitzustellen und rutschfeste Teppiche auf harten Böden zu verwenden. Stellen Sie bei Katzen sicher, dass die Katzentoiletten niedrige Einstiege haben und ihre Lieblingsschlafplätze leicht zugänglich sind.</p>
              <h3 className="font-bold mt-4 mb-2">3. Überwachen Sie Ernährung und Gewicht</h3>
              <p>Der Stoffwechsel eines älteren Haustieres verlangsamt sich. Sie benötigen möglicherweise eine Diät mit weniger Kalorien, um Fettleibigkeit zu vermeiden, die ihre Gelenke zusätzlich belastet. Einige Senioren-Diäten enthalten auch Ergänzungsmittel wie Glucosamin für die Gelenkgesundheit. Achten Sie auch auf ihre Flüssigkeitsaufnahme, besonders bei Katzen.</p>
              <h3 className="font-bold mt-4 mb-2">4. Hören Sie nicht auf zu spielen</h3>
              <p>Bewegung ist immer noch wichtig, muss aber angepasst werden. Tauschen Sie lange, anstrengende Läufe gegen kürzere, häufigere Spaziergänge aus. Bei Katzen kann sanftes Spielen mit einem weichen Wedelspielzeug ihren Geist und Körper aktiv halten, ohne sie zu überfordern.</p>
              <h3 className="font-bold mt-4 mb-2">5. Achten Sie auf kognitive Veränderungen</h3>
              <p>Genau wie Menschen können Haustiere kognitive Dysfunktionen (Demenz) erfahren. Anzeichen können Desorientierung, Veränderungen im Schlafmuster oder das Vergessen von Befehlen sein. Es gibt Strategien und Ergänzungsmittel, die helfen können, diese Veränderungen zu bewältigen. Wenn Sie eines dieser Anzeichen bemerken, ist es Zeit für eine Beratung.</p>
            </>
          )
        }
      ]
    },
    contactPage: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Möchten Sie einen Besuch vereinbaren oder haben Sie eine Frage? Kontaktieren Sie uns!',
        email: 'kontakt@urbanvet.de',
    },
    impressum: {
      title: 'Impressum / Datenschutz',
      content: `
        <h3 class="font-semibold text-lg mb-2">Angaben gemäß § 5 TMG</h3>
        <p>UrbanVet GmbH<br>Musterstraße 1<br>10115 Berlin</p>
        <h3 class="font-semibold text-lg mt-4 mb-2">Vertreten durch:</h3>
        <p>Dr. Anja Schmidt</p>
        <h3 class="font-semibold text-lg mt-4 mb-2">Kontakt:</h3>
        <p>Telefon: +49 174 3995177<br>E-Mail: kontakt@urbanvet.de</p>
        <h3 class="font-semibold text-lg mt-4 mb-2">Registereintrag:</h3>
        <p>Eintragung im Handelsregister.<br>Registergericht: Amtsgericht Charlottenburg<br>Registernummer: HRB 123456 B</p>
        <h3 class="font-semibold text-lg mt-4 mb-2">Umsatzsteuer-ID:</h3>
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br>DE123456789</p>
        <h2 class="font-bold text-xl mt-8 mb-4">Datenschutzerklärung</h2>
        <p>Ihre Privatsphäre ist uns wichtig. Es ist die Richtlinie von UrbanVet, Ihre Privatsphäre in Bezug auf alle Informationen zu respektieren, die wir möglicherweise von Ihnen auf unserer Website sammeln. Wir fragen nur dann nach persönlichen Informationen, wenn wir sie wirklich benötigen, um Ihnen einen Service zu bieten. Wir erheben sie auf faire und rechtmäßige Weise, mit Ihrem Wissen und Ihrer Zustimmung. Wir teilen Ihnen auch mit, warum wir sie sammeln und wie sie verwendet werden. Diese Website ist statisch und sammelt keine personenbezogenen Daten durch Cookies oder Analysen.</p>
      `
    },
    footer: {
      tagline: 'Moderne Tiermedizin, geliefert.',
      legal: 'Impressum & Datenschutz',
    }
  }
};

const serviceIcons = [StethoscopeIcon, SyringeIcon, MicrochipIcon, ClipboardIcon, HeartIcon, BrainIcon];

// DATA
export const ALL_SERVICES: { [key in Language]: Service[] } = {
  [Language.EN]: TEXTS.EN.services.items.map((s, i) => ({
    ...s,
    icon: serviceIcons[i](),
  })),
  [Language.DE]: TEXTS.DE.services.items.map((s, i) => ({
    ...s,
    icon: serviceIcons[i](),
  })),
};

export const ALL_POSTS: { [key in Language]: BlogPost[] } = {
  [Language.EN]: TEXTS.EN.blog.posts.map((p, i) => ({
    ...p,
    id: `post-en-${i}`,
    imageUrl: `https://picsum.photos/seed/post${i}/1200/800`,
  })),
  [Language.DE]: TEXTS.DE.blog.posts.map((p, i) => ({
    ...p,
    id: `post-de-${i}`,
    imageUrl: `https://picsum.photos/seed/post${i}/1200/800`,
  })),
};

export const NAV_LINKS = [
    { page: Page.HOME },
    { page: Page.SERVICES },
    { page: Page.ABOUT },
    { page: Page.BLOG },
];

// ICONS
export const UKFlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-8 h-auto">
    <clipPath id="s"><path d="M0 0v30h60V0z"/></clipPath>
    <clipPath id="t"><path d="M30 15h30v15zv15h-30zH0z"/></clipPath>
    <g clipPath="url(#s)">
      <path d="M0 0v30h60V0z" fill="#012169"/>
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
      <path d="M0 0l60 30m0-30L0 30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

export const DEFlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-8 h-auto">
    <path d="M0 0h5v3H0z"/>
    <path d="M0 1h5v2H0z" fill="#D00"/>
    <path d="M0 2h5v1H0z" fill="#FFCE00"/>
  </svg>
);