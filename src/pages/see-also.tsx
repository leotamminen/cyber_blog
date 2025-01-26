import "../styles/globals.css";

export default function SeeAlso() {
  return (
    <div className="general-container general-container-pt-lg general-container-pb">
      <h1 className="general-title general-title-shadow">
        Recommended Resources
      </h1>
      <p className="general-text max-w-2xl">
        Explore essential tools, guides, and resources to enhance your knowledge
        and skills in cybersecurity. (Contains external links.)
      </p>
      <p className="general-text mt max-w-3xl">
        For a comprehensive overview of cybersecurity principles, visit{" "}
        <a
          href="https://www.cybersecurity.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="general-link"
        >
          Cybersecurity.gov
        </a>
        , where you&apos;ll find valuable resources to get started.
      </p>

      <div className="grid-layout">
        <div className="card">
          <h2 className="card-title">Cybersecurity Tools</h2>
          <p className="card-text">
            Discover tools for vulnerability scanning, network monitoring, and
            incident response.
          </p>
          <a
            href="https://owasp.org"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Visit OWASP Tools
          </a>
        </div>
        <div className="card">
          <h2 className="card-title">Threat Intelligence</h2>
          <p className="card-text">
            Stay updated with the latest threats and trends in cybersecurity.
          </p>
          <a
            href="https://threatintelligence.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Explore Threat Intelligence
          </a>
        </div>
        <div className="card">
          <h2 className="card-title">Online Courses</h2>
          <p className="card-text">
            Learn cybersecurity fundamentals and advanced techniques from
            trusted platforms.
          </p>
          <a
            href="https://www.coursera.org/browse/computer-science/cybersecurity"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Browse Cybersecurity Courses
          </a>
        </div>
        <div className="card">
          <h2 className="card-title">Industry Standards</h2>
          <p className="card-text">
            Familiarize yourself with key standards like ISO 27001 and NIST
            guidelines.
          </p>
          <a
            href="https://www.iso.org/isoiec-27001-information-security.html"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Learn About ISO 27001
          </a>
        </div>
      </div>
    </div>
  );
}
