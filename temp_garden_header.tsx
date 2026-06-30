// ── Recent Days Strip ─────────────────────────────────────────────
function RecentDaysStrip({
  selectedDate,
  onSelectDate,
  flowersByDate,
}: {
  selectedDate: Date;
  onSelectDate: (d: Date) => void;
  flowersByDate: Map<string, number>;
}) {
  const today = new Date();
  
  // Generate last 14 days + today
  const days = Array.from({ length: 15 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (14 - i));
    return d;
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to the end (today) on mount
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

  return (
    <div className="flex flex-col" style={{ paddingTop: 6 }}>
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto px-4 pb-2 gap-3" 
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInline={{__html: \`::-webkit-scrollbar { display: none; }\`}} />
        {days.map((date, i) => {
          const isToday    = sameDay(date, today);
          const isSelected = sameDay(date, selectedDate);
          const k          = dateKey(date);
          const hasDot     = (flowersByDate.get(k) ?? 0) > 0;

          return (
            <button
              key={i}
              onClick={() => onSelectDate(date)}
              className="flex flex-col items-center rounded-xl flex-shrink-0 transition-transform active:scale-95"
              style={{
                padding: "8px 10px",
                background: isSelected ? TEAL : isToday ? "rgba(107,191,78,0.12)" : "transparent",
                border: isToday && !isSelected ? \`1px solid rgba(107,191,78,0.3)\` : "1px solid transparent",
                minWidth: 44,
                gap: 4,
              }}
            >
              <span style={{
                fontSize: 9, fontFamily: SANS, letterSpacing: "0.05em", textTransform: "uppercase",
                color: isSelected ? "rgba(252,252,252,0.65)" : "rgba(11,93,52,0.45)",
              }}>
                {date.toLocaleDateString("en-US", { weekday: "short" })}
              </span>
              <span style={{
                fontSize: 18, lineHeight: 1, fontFamily: SERIF,
                color: isSelected ? "#FCFCFC" : isToday ? TEAL : "rgba(11,93,52,0.7)",
              }}>
                {date.getDate()}
              </span>
              <div style={{
                width: 5, height: 5, borderRadius: "50%",
                background: hasDot ? (isSelected ? "rgba(202,255,166,0.9)" : GREEN) : "transparent",
              }} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────
interface HeaderProps {
  selectedDate: Date;
  onSelectDate: (d: Date) => void;
  flowersByDate: Map<string, number>;
  daySaved: number;
  daySpent: number;
  isToday: boolean;
}

function GardenHeader({
  selectedDate,
  onSelectDate,
  flowersByDate,
  daySaved,
  daySpent,
  isToday,
}: HeaderProps) {
  const shortDate = selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const dateLabel = isToday ? "today" : shortDate;

  return (
    <div className="flex-shrink-0 pt-8">
      <div className="flex items-end justify-between px-5 mb-2">
        <div className="flex items-baseline gap-3">
          <AnimatePresence mode="wait">
            <motion.h1
              key={dateLabel}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              style={{ fontFamily: SERIF, fontSize: 32, color: TEAL, fontWeight: 400, lineHeight: 1 }}
            >
              {dateLabel}
            </motion.h1>
          </AnimatePresence>
          {isToday && (
            <span style={{ fontFamily: SANS, fontSize: 11, color: "rgba(11,93,52,0.45)", letterSpacing: "0.08em" }}>
              {shortDate}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 pb-1">
          <div className="flex flex-col items-end">
            <AnimatePresence mode="wait">
              <motion.p
                key={\`saved-\${daySaved}\`}
                initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ fontFamily: SERIF, fontSize: 18, color: GREEN, lineHeight: 1 }}
              >
                \${daySaved.toFixed(0)}
              </motion.p>
            </AnimatePresence>
            <p style={{ fontSize: 9, color: "rgba(11,93,52,0.45)", letterSpacing: "0.07em", textTransform: "uppercase", marginTop: 2 }}>saved</p>
          </div>
          <div style={{ width: 1, height: 24, background: "rgba(11,93,52,0.15)" }} />
          <div className="flex flex-col items-end">
            <AnimatePresence mode="wait">
              <motion.p
                key={\`spent-\${daySpent}\`}
                initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ fontFamily: SERIF, fontSize: 18, color: daySpent > 0 ? "rgba(180,50,30,0.75)" : "rgba(11,93,52,0.3)", lineHeight: 1 }}
              >
                \${daySpent.toFixed(0)}
              </motion.p>
            </AnimatePresence>
            <p style={{ fontSize: 9, color: daySpent > 0 ? "rgba(180,50,30,0.45)" : "rgba(11,93,52,0.35)", letterSpacing: "0.07em", textTransform: "uppercase", marginTop: 2 }}>spent</p>
          </div>
        </div>
      </div>

      <RecentDaysStrip
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
        flowersByDate={flowersByDate}
      />
      <div style={{ height: 1, background: "rgba(11,93,52,0.08)", marginTop: 4 }} />
    </div>
  );
}