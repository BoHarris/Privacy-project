import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SignUp from "@/components/Signup";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SignUp />
      <div class="main-content">
        <section class="intro">
          <h1>Welcome to Our Privacy Education Hub</h1>
          <p>
            At our Privacy Education Hub, we are dedicated to empowering
            individuals and organizations with the knowledge and tools they need
            to protect their personal information and maintain their privacy
            online. Our mission is to create a safer digital environment for
            everyone.
          </p>
        </section>

        <section class="features">
          <h2>What We Offer</h2>
          <ul>
            <li>
              <strong>Educational Resources:</strong> Access a wide range of
              articles, tutorials, and guides on privacy best practices.
            </li>
            <li>
              <strong>Interactive Tools:</strong> Utilize our interactive tools
              to assess your privacy settings and improve your online security.
            </li>
            <li>
              <strong>Expert Insights:</strong> Stay informed with the latest
              news and insights from privacy experts and industry leaders.
            </li>
            <li>
              <strong>Community Support:</strong> Join our community forums to
              share experiences, ask questions, and get support from fellow
              privacy-conscious individuals.
            </li>
          </ul>
        </section>

        <section class="call-to-action">
          <h2>Get Started</h2>
          <p>
            Ready to take control of your privacy? Explore our resources, use
            our tools, and join our community today. Together, we can make the
            internet a safer place for everyone.
          </p>
          <a href="#" class="cta-button">
            Learn More
          </a>
        </section>
      </div>
      <Footer />
    </main>
  );
}
