"use client";

export default function Pay() {
  const upiId = "poojyagupta116@okicici";
  const payeeName = "Eazy Tutors";
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl p-8 rounded-2xl text-center max-w-sm w-full">
        <h1 className="text-3xl font-semibold mb-4">Pay via UPI</h1>
        <p className="text-gray-600 mb-6">
          Tap the UPI ID below to open your UPI app.
        </p>

        {/* Clickable UPI link */}
        <a href={upiLink} className="text-blue-600 text-xl underline break-all">
          {upiId}
        </a>

        <p className="text-xs text-gray-500 mt-6">
          You will enter the amount manually in your UPI app.
        </p>
      </div>
    </div>
  );
}
