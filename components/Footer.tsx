export default function Footer() {
  return (
    <footer className="bg-[#0A0F1F] border-t border-gray-800 mt-20">
      
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-gray-400">
        
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            InvaluaBless Media Group
          </h3>
          <p className="text-sm">
            Digital • Media • Innovation
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white mb-3">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white mb-3">Contact</h4>
          <p className="text-sm">info@invaluablessmediagroup.com</p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm pb-6">
        © {new Date().getFullYear()} InvaluaBless Media Group. All rights reserved.
      </div>

    </footer>
  );
}