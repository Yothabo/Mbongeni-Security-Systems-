import React, { useState, useEffect } from 'react';
import styles from './NewsSection.module.css';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

const NewsSection: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingDemoData, setUsingDemoData] = useState(false);

  useEffect(() => {
    const fetchSecurityNews = async () => {
      try {
        setLoading(true);
        setUsingDemoData(false);
        
        // Using GNews API with broader security terms
        const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
        
        if (!apiKey || apiKey === 'your_api_key_here' || apiKey === 'demo') {
          throw new Error('No valid API key - using demo content');
        }

        const response = await fetch(
          `https://gnews.io/api/v4/search?q=security%20OR%20cybersecurity%20OR%20surveillance&lang=en&max=2&apikey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          throw new Error('No articles found in API response');
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Using industry security updates');
        setUsingDemoData(true);
        // Fallback to demo data
        setArticles(getDemoArticles());
      } finally {
        setLoading(false);
      }
    };

    fetchSecurityNews();
  }, []);

  const getDemoArticles = (): NewsArticle[] => [
    {
      title: "Global Cybersecurity Threats Drive Demand for Advanced Protection Systems",
      description: "Rising cyber attacks and physical security breaches are accelerating adoption of integrated security solutions worldwide, with businesses investing in comprehensive protection.",
      url: "#broken-link", // Broken link for demo content
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
      publishedAt: new Date().toISOString(),
      source: { name: "Global Security Review" }
    },
    {
      title: "AI and Machine Learning Revolutionize Security Monitoring Worldwide",
      description: "Advanced AI algorithms are transforming surveillance systems, reducing false alarms by 70% and improving threat detection accuracy across global security networks.",
      url: "#broken-link", // Broken link for demo content
      image: "https://images.unsplash.com/photo-1589656384667-54c6f4c8e4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: { name: "Security Technology International" }
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleReadMore = (e: React.MouseEvent, url: string, usingDemo: boolean) => {
    if (usingDemo || url === '#broken-link') {
      e.preventDefault();
      // Optionally show a message or do nothing
      console.log('This is demo content - no external link available');
    }
    // For real API content, the link will work normally
  };

  if (loading) {
    return (
      <section className={styles.news} id="news">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Global Security Updates</h2>
          <p className={styles.sectionSubtitle}>
            Latest developments in security technology, cybersecurity, and global protection trends.
          </p>
          <div className={styles.newsGrid}>
            {[1, 2].map((item) => (
              <div key={item} className={styles.newsCard}>
                <div className={styles.imageSkeleton}></div>
                <div className={styles.contentSkeleton}>
                  <div className={styles.titleSkeleton}></div>
                  <div className={styles.descSkeleton}></div>
                  <div className={styles.metaSkeleton}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.news} id="news">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Global Security Updates</h2>
        <p className={styles.sectionSubtitle}>
          Latest developments in security technology, cybersecurity, and global protection trends.
        </p>

        {error && (
          <div className={styles.errorMessage}>
            <p>{error}</p>
          </div>
        )}

        <div className={styles.newsGrid}>
          {articles.map((article, index) => (
            <article key={index} className={styles.newsCard}>
              <div className={styles.imageContainer}>
                <img
                  src={article.image}
                  alt={article.title}
                  className={styles.newsImage}
                  onError={(e) => {
                    // Fallback to a reliable security image
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80';
                  }}
                />
              </div>
              <div className={styles.newsContent}>
                <h3 className={styles.newsTitle}>{article.title}</h3>
                <p className={styles.newsDescription}>{article.description}</p>
                <div className={styles.newsMeta}>
                  <span className={styles.newsSource}>{article.source.name}</span>
                  <span className={styles.newsDate}>{formatDate(article.publishedAt)}</span>
                </div>
                <a 
                  href={article.url} 
                  className={styles.readMore}
                  target={usingDemoData ? "_self" : "_blank"}
                  rel={usingDemoData ? "" : "noopener noreferrer"}
                  onClick={(e) => handleReadMore(e, article.url, usingDemoData)}
                >
                  {usingDemoData ? "Industry Update" : "Read More →"}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.newsFooter}>
          <p>Stay informed about global security technology advancements and cybersecurity trends</p>
          {usingDemoData && (
            <p style={{fontSize: '0.8rem', color: '#666', marginTop: '0.5rem'}}>
              To see real-time security news, add a valid GNews API key
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
