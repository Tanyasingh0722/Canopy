import re

with open('/workspaces/default/code/src/app/components/Garden.tsx', 'r') as f:
    content = f.read()

# Replace WeekStrip and WeekPickerModal and GardenHeader
with open('/temp_garden_header.tsx', 'r') as f:
    new_header = f.read()

# Using regex to find the start of WeekPickerModal to end of GardenHeader
start_idx = content.find('// ── Week picker modal ─────────────────────────────────────────────')
end_idx = content.find('// ── Inline audio player ───────────────────────────────────────────')

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_header + '\n\n' + content[end_idx:]
else:
    print("Could not find start or end index")

# Also update the Garden function
def replace_garden_fn(c):
    c = c.replace("""  const [weekIndex,     setWeekIndex]     = useState(() => getCurrentWeekIndex());
  const [showPicker,    setShowPicker]    = useState(false);
  const maxWeekIndex = getCurrentWeekIndex() + 1;""", "")
    c = c.replace("""  function handleWeekChange(newIndex: number) {
    const clamped = Math.max(0, Math.min(newIndex, maxWeekIndex));
    setWeekIndex(clamped);
    const days = getWeekDays(clamped);
    const today = new Date();
    const todayInWeek = days.find(d => sameDay(d, today));
    setActiveDate(todayInWeek || days[0]);
  }""", "")
    c = c.replace("""        {/* ── Header ── */}
        <GardenHeader
          weekIndex={weekIndex}
          maxWeekIndex={maxWeekIndex}
          selectedDate={activeDate}
          onSelectDate={setActiveDate}
          onWeekChange={handleWeekChange}
          onOpenWeekPicker={() => setShowPicker(true)}
          flowersByDate={flowersByDate}
          daySaved={daySaved}
          daySpent={daySpent}
          isToday={isToday}
        />""", """        {/* ── Header ── */}
        <GardenHeader
          selectedDate={activeDate}
          onSelectDate={setActiveDate}
          flowersByDate={flowersByDate}
          daySaved={daySaved}
          daySpent={daySpent}
          isToday={isToday}
        />""")
    c = c.replace("""        {/* ── Week picker modal ── */}
        <WeekPickerModal
          isOpen={showPicker}
          onClose={() => setShowPicker(false)}
          totalWeeks={maxWeekIndex + 1}
          selectedWeekIndex={weekIndex}
          onSelectWeek={handleWeekChange}
          flowersByDate={flowersByDate}
        />""", "")
    return c

content = replace_garden_fn(content)

# add sound effect stuff to GardenFlower
sound_code = """
  // Sound on mount
  useEffect(() => {
    // slight pop sound and vibrate
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.05);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
    
    // Bush sound effect (noise)
    const bufferSize = ctx.sampleRate * 0.2; // 200ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    // Noise filter
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = 1000;
    
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.1, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    
    noise.start();

    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  }, []);
"""

content = content.replace("  const shadowH    = Math.round(shadowW * 0.1);", "  const shadowH    = Math.round(shadowW * 0.1);\n" + sound_code)

# Add "Share" button and Lucide import
if "Share," not in content:
    content = content.replace("import {", "import { Share, Download, ", 1)

share_btn = """
                      <button onClick={() => {
                        if (selectedFlower.drawing) {
                           const link = document.createElement('a');
                           link.href = selectedFlower.drawing;
                           link.download = 'flower-drawing.png';
                           link.click();
                        }
                      }} className="w-12 flex items-center justify-center rounded-2xl"
                        style={{ background: `${hex}25`, color: TEAL }}>
                        <Share className="w-5 h-5" />
                      </button>
                      <button onClick={() => setSelectedFlower(null)} className="flex-1 py-3.5 rounded-2xl"
"""
content = content.replace("""                      <button onClick={() => setSelectedFlower(null)} className="flex-1 py-3.5 rounded-2xl\"""", share_btn)

with open('/workspaces/default/code/src/app/components/Garden.tsx', 'w') as f:
    f.write(content)
print("Done")
