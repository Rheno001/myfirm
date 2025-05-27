import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="sticky top-0 z-50 bg-slate-900 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-serif font-semibold text-white">My Court</div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-red-400 transition-colors duration-300 font-serif">Home</Link>
              <Link to="/about" className="text-white hover:text-red-400 transition-colors duration-300 font-serif">About</Link>
              <Link to="/make-claim" className="text-white hover:text-red-400 transition-colors duration-300 font-serif">Make a Claim</Link>
              <Link to="/defend-claim" className="text-white hover:text-red-400 transition-colors duration-300 font-serif">Defend a Claim</Link>
              <Link to="/volunteer" className="text-white hover:text-red-400 transition-colors duration-300 font-serif">Volunteer</Link>
              <Link to="/report-problem" className="text-white hover:text-red-400 transition-colors duration-300 font-serif">Report Problem</Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="relative bg-gradient-to-r from-slate-900 to-slate-800 py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Welcome to My Court</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-serif">Your Trusted Online Dispute Resolution Platform</p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-16">
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 text-center mb-12">About My Court</h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto text-center font-serif leading-relaxed">
            My Court is an online dispute resolution platform established on consensual jurisdiction, dedicated to providing fair and efficient resolution of commercial disputes in Nigeria.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 text-center mb-12">Our Objectives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Efficient Dispute Resolution</h3>
              <p className="text-slate-700 font-serif">Facilitate fair resolution of commercial disputes by an impartial umpire without delay or expense.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">Accessible Justice</h3>
              <p className="text-slate-700 font-serif">Make dispute resolution more accessible to the semi-formal sector of the Nigerian economy.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 text-center mb-12">Why Choose My Court?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">Nationwide Enforcement</h3>
              <p className="text-slate-700 font-serif">Our decisions are enforceable by Courts all over Nigeria.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">Expert Panelists</h3>
              <p className="text-slate-700 font-serif">Cases are decided by panelists of high moral character and recognized competence.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">Easy to Use</h3>
              <p className="text-slate-700 font-serif">Simple and intuitive platform designed for accessibility.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">Ready to Resolve Your Dispute?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/make-claim" className="inline-block px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-serif rounded-lg transition-colors duration-300 text-lg">
              Make a Claim
            </Link>
            <Link to="/defend-claim" className="inline-block px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-serif rounded-lg transition-colors duration-300 text-lg">
              Defend a Claim
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8 text-center">
        <p className="font-serif">© {new Date().getFullYear()} My Court - Online Dispute Resolution Platform</p>
      </footer>
    </div>
  );
};

export default Home;