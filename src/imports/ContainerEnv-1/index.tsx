import svgPaths from "./svg-ydwdvgekvs";

function SignalHigh() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="signal-high">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="signal-high">
          <path d={svgPaths.pe944a80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Wifi() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="wifi">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="wifi">
          <path d={svgPaths.p1e105500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[18px] relative shrink-0 w-[22px]" data-name="battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
        <g id="battery">
          <path d={svgPaths.p1e262100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="status-icons">
      <SignalHigh />
      <Wifi />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="status-bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[14px] px-[32px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[15px] text-black whitespace-nowrap">9:41</p>
          <StatusIcons />
        </div>
      </div>
    </div>
  );
}

function TimerCircle() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="timer-circle">
      <div aria-hidden className="absolute border-3 border-[#8da4e2] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Geist_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap">1:40</p>
    </div>
  );
}

function TimerWrapper() {
  return (
    <div className="bg-[#fdfbf7] content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[72px]" data-name="timer-wrapper">
      <TimerCircle />
    </div>
  );
}

function TopBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="top-bar">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pt-[20px] px-[24px] relative size-full">
          <TimerWrapper />
        </div>
      </div>
    </div>
  );
}

function CanvasArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full" data-name="canvas-area">
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#b8b3ac] text-[18px] whitespace-nowrap">start drawing...</p>
    </div>
  );
}

function XCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="x-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_45_190)" id="x-circle">
          <path d={svgPaths.p30250f00} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_45_190">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CloseWrapper() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="close-wrapper">
      <XCircle />
    </div>
  );
}

function PromptContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="prompt-content">
      <p className="font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#8da4e2] text-[12px] tracking-[1px] uppercase whitespace-nowrap">Prompt</p>
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#1a1a1a] text-[24px] w-[min-content]">HEADPHONE</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#b8b3ac] text-[13px] w-[min-content]">Draw this in your own style</p>
    </div>
  );
}

function CardFooter() {
  return (
    <div className="content-stretch flex items-start pt-[12px] relative shrink-0 w-full" data-name="card-footer">
      <div aria-hidden className="absolute border-[#e0ddd5] border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8da4e2] text-[12px] whitespace-nowrap">View inspo</p>
    </div>
  );
}

function PromptCard() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#fdfbf7] content-stretch drop-shadow-[-8px_0px_12px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[24px] right-0 rounded-bl-[32px] rounded-tl-[32px] top-1/2 w-[200px]" data-name="prompt-card">
      <CloseWrapper />
      <PromptContent />
      <CardFooter />
    </div>
  );
}

function ColorPicker() {
  return (
    <div className="h-[56px] relative shrink-0 w-[112px]" data-name="color-picker">
      <div className="absolute inset-[-14.29%_-10.71%_-28.57%_-10.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 80">
          <g filter="url(#filter0_d_45_173)" id="color-picker">
            <rect fill="var(--fill-0, #FDFBF7)" height="56" rx="20" shapeRendering="crispEdges" width="112" x="12" y="8" />
            <circle cx="32" cy="36" fill="var(--fill-0, #1A1A1A)" id="Ellipse" r="4" />
            <g filter="url(#filter1_i_45_173)" id="active-color">
              <rect fill="var(--fill-0, #8DA4E2)" height="32" rx="12" width="32" x="48" y="20" />
              <g id="Ellipse_2" />
            </g>
            <circle cx="100" cy="36" fill="var(--fill-0, #8DA4E2)" id="Ellipse_3" opacity="0.4" r="8" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="80" id="filter0_d_45_173" width="136" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_45_173" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_45_173" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="33" id="filter1_i_45_173" width="32" x="48" y="20">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.101961 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_45_173" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Undo() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="undo-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="undo-2">
          <path d={svgPaths.p350cd700} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function UndoBtn() {
  return (
    <div className="bg-[#fdfbf7] content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="undo-btn">
      <Undo />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="trash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="trash">
          <path d={svgPaths.p2d931600} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TrashBtn() {
  return (
    <div className="bg-[#fdfbf7] content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="trash-btn">
      <Trash />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="actions">
      <UndoBtn />
      <TrashBtn />
    </div>
  );
}

function BottomControls() {
  return (
    <div className="relative shrink-0 w-full" data-name="bottom-controls">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pb-[40px] px-[24px] relative size-full">
          <ColorPicker />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[8px] relative shrink-0 w-full" data-name="home-indicator">
      <div className="bg-[#1a1a1a] h-[4px] opacity-20 relative rounded-[2px] shrink-0 w-[120px]" data-name="Rectangle" />
    </div>
  );
}

function PhoneFrame() {
  return (
    <div className="bg-[#eeebe3] content-stretch flex flex-col h-[874px] items-start overflow-clip relative rounded-[40px] shrink-0 w-[402px]" data-name="phone-frame">
      <StatusBar />
      <TopBar />
      <CanvasArea />
      <PromptCard />
      <BottomControls />
      <HomeIndicator />
    </div>
  );
}

export default function ContainerEnv() {
  return (
    <div className="bg-[#333] content-stretch flex flex-col items-start p-[40px] relative size-full" data-name="container-env">
      <PhoneFrame />
    </div>
  );
}