import React from 'react';

export default async function AdminPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#0F1010] text-[#F4F1E8] px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h1 className="font-serif text-3xl font-bold text-[#C9A45C]">Admin Dashboard</h1>
          <p className="text-sm text-[#94948D]">Minora Mining Experts &mdash; Content Management System</p>
        </div>
        <div className="rounded-lg border border-[#303331] bg-[#171918] p-6 space-y-4">
          <h2 className="font-semibold text-lg text-[#F4F1E8]">Launch Readiness</h2>
          <div className="text-sm text-[#94948D]">Status: NOT_READY</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2"><span className="text-[#34D399]">&#10003;</span> Official email configured</div>
            <div className="flex items-center gap-2"><span className="text-[#34D399]">&#10003;</span> Official telephone configured</div>
            <div className="flex items-center gap-2"><span className="text-[#34D399]">&#10003;</span> WhatsApp trade desk configured</div>
            <div className="flex items-center gap-2"><span className="text-[#34D399]">&#10003;</span> Facebook and Instagram linked</div>
            <div className="flex items-center gap-2"><span className="text-[#34D399]">&#10003;</span> Official brand logo integrated</div>
            <div className="flex items-center gap-2"><span className="text-[#C9A45C]">&#9888;</span> Mining license: pending verification</div>
            <div className="flex items-center gap-2"><span className="text-[#C9A45C]">&#9888;</span> Export permit: pending verification</div>
            <div className="flex items-center gap-2"><span className="text-[#C9A45C]">&#9888;</span> Assay certification: pending verification</div>
            <div className="flex items-center gap-2"><span className="text-[#C9A45C]">&#9888;</span> Leadership profiles: pending verification</div>
            <div className="flex items-center gap-2"><span className="text-[#C9A45C]">&#9888;</span> Office addresses: pending verification</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-[#303331] bg-[#171918] p-6 space-y-3">
            <h3 className="font-semibold text-[#F4F1E8]">Contact Configuration</h3>
            <div className="text-sm space-y-1 text-[#C8C5BC]">
              <div>Email: info@minoraminingexperts.com</div>
              <div>Phone: +1 202 930 7553</div>
              <div>WhatsApp: Verified</div>
            </div>
          </div>
          <div className="rounded-lg border border-[#303331] bg-[#171918] p-6 space-y-3">
            <h3 className="font-semibold text-[#F4F1E8]">Social Channels</h3>
            <div className="text-sm space-y-1 text-[#C8C5BC]">
              <div>Facebook: Configured</div>
              <div>Instagram: Configured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}