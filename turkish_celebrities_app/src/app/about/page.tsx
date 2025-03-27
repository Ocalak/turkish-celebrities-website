import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-4xl w-full">
        <div className="mb-8">
          <Link href="/" className="text-blue-500 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">About This Project</h1>
        
        <div className="prose lg:prose-xl">
          <h2>Purpose</h2>
          <p>
            This website aims to document and track Turkish celebrities and influencers who have publicly 
            supported the Turkish government led by President Recep Tayyip Erdoğan, particularly in contrast 
            to those who support protesters or opposition movements.
          </p>
          
          <h2>Methodology</h2>
          <p>
            The information presented on this website is collected from various public sources, including:
          </p>
          <ul>
            <li>Social media posts on Twitter and Instagram</li>
            <li>Public statements in interviews and press conferences</li>
            <li>Appearances at government-sponsored events</li>
            <li>Campaign endorsements and political rallies</li>
          </ul>
          <p>
            We strive to present factual information based on documented evidence of support for the 
            government. This website does not make judgments about the political views of the celebrities 
            featured, but rather aims to provide transparency about public figures who have aligned 
            themselves with the current administration.
          </p>
          
          <h2>Current Political Context</h2>
          <p>
            Turkey has experienced significant political polarization in recent years, with tensions 
            heightened following events such as the arrest of Istanbul Mayor Ekrem Imamoglu in March 2025. 
            This arrest sparked protests across the country, with citizens divided in their support for 
            the government versus the opposition.
          </p>
          <p>
            In this context, celebrities and public figures often play an influential role in shaping 
            public opinion. Their support for either the government or opposition can have significant 
            impact on their followers and the broader public discourse.
          </p>
          
          <h2>Disclaimer</h2>
          <p>
            This website is for informational purposes only. The inclusion of a celebrity on this site 
            does not imply any judgment about their character or the validity of their political views. 
            We aim to present factual information about public statements and actions, and we welcome 
            corrections if any information is found to be inaccurate.
          </p>
          
          <h2>Contact</h2>
          <p>
            If you have information about celebrities that should be included on this site, or if you 
            believe any information presented here is inaccurate, please contact us at 
            <a href="mailto:info@turkishcelebrities.example.com" className="text-blue-500 hover:underline ml-1">
              info@turkishcelebrities.example.com
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}
