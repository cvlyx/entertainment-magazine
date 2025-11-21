export function BreakingNews() {
  const news = [
    "Malawian artist Eli Njuchi nominated for MTV Africa Music Awards",
    'New film "Lilongwe Nights" premieres at Toronto Film Festival',
    "Tay Grin announces collaboration with Nigerian superstar Burna Boy",
  ]

  return (
    <div className="border-y border-primary bg-primary/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="shrink-0 text-sm font-bold uppercase tracking-wider text-primary">Breaking</div>
          <div className="flex animate-marquee gap-8">
            {news.map((item, i) => (
              <span key={i} className="shrink-0 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
