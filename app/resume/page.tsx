import { Download, FileText } from "lucide-react";

export default function Page() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
      <div className="mb-10 flex flex-col justify-between gap-7 border-b border-[#17221b]/15 pb-8 sm:flex-row sm:items-end">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#d45532]">
            Experience & education
          </p>
          <h1 className="font-display text-6xl tracking-[-0.06em] sm:text-8xl">
            Resume<span className="text-[#d45532]">.</span>
          </h1>
        </div>
        <a
          href="/Emrys_CV.pdf"
          download="Emrys_CV.pdf"
          className="inline-flex w-fit items-center gap-3 rounded-full bg-[#d45532] px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#bd4527] hover:shadow-lg"
        >
          <Download size={17} strokeWidth={2} />
          Download PDF
        </a>
      </div>

      <div className="overflow-hidden border border-[#17221b]/15 bg-[#d9ddc8] p-2 shadow-[0_25px_70px_rgba(23,34,27,0.12)] sm:p-4">
        <object
          data="/Emrys_CV.pdf"
          type="application/pdf"
          className="h-[72vh] min-h-[620px] w-full bg-white"
          aria-label="Emrys Cruz Viera resume PDF"
        >
          <div className="flex h-[620px] flex-col items-center justify-center bg-white p-8 text-center">
            <FileText size={42} strokeWidth={1.2} />
            <p className="font-display mt-5 text-3xl">Your resume is ready to download.</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#17221b]/55">
              Your browser cannot display the PDF preview. Use the download button above to open it.
            </p>
          </div>
        </object>
      </div>
      <p className="mt-5 text-center text-xs font-medium text-[#17221b]/45">
        Replace <strong>public/Emrys_CV.pdf</strong> with your final resume to update this page.
      </p>
    </section>
  );
}
