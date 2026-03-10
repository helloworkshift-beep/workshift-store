export default function Footer() {
  return (
    <footer className="border-t border-[#e6ebf1] bg-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="font-bold text-[#0a2540] text-sm">Workshift</span>
          <p className="text-xs text-[#8898aa] mt-1">© 2026 Workshift. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#8898aa]">
          <a href="/toolkits" className="hover:text-[#0a2540] transition-colors">Toolkits</a>
          <a href="/blog" className="hover:text-[#0a2540] transition-colors">Blog</a>
          <a href="/course" className="hover:text-[#0a2540] transition-colors">Course</a>
          <a href="/legal/imprint" className="hover:text-[#0a2540] transition-colors">Imprint</a>
          <a href="/legal/privacy" className="hover:text-[#0a2540] transition-colors">Privacy</a>
          <a href="/legal/terms" className="hover:text-[#0a2540] transition-colors">Terms</a>
          <a href="mailto:helloworkshift@gmail.com" className="hover:text-[#0a2540] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
