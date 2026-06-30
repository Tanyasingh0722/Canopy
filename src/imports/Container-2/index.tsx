import svgPaths from "./svg-0k5p0ivoke";

function Paragraph() {
  return (
    <div className="h-[12px] relative shrink-0 w-[97.281px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Victor_Mono:Regular',sans-serif] font-normal leading-[12px] left-0 text-[#0b5d34] text-[8px] top-[0.5px] tracking-[1.28px] uppercase whitespace-nowrap">{`what's stirring?`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check">
          <path d={svgPaths.p2a580400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxSelected() {
  return (
    <div className="bg-[#0b5d34] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox-selected">
      <div aria-hidden className="absolute border border-[#0b5d34] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Check />
    </div>
  );
}

function EmotionIcon() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="EmotionIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="EmotionIcon">
          <path d={svgPaths.p202b3b80} id="Vector" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeWidth="0.875" />
          <path d={svgPaths.p15be5a20} id="Vector_2" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeWidth="0.875" />
          <path d={svgPaths.p9128380} id="Vector_3" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <EmotionIcon />
      <p className="[word-break:break-word] font-['Victor_Mono:SemiBold',sans-serif] font-semibold leading-[12px] relative shrink-0 text-[#0b5d34] text-[10px] tracking-[0.225px] whitespace-nowrap">Stressed</p>
    </div>
  );
}

function RowStressed() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Row - Stressed">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative size-full">
          <CheckboxSelected />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check">
          <path d={svgPaths.p2a580400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxSelected1() {
  return (
    <div className="bg-[#5b8fd4] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox-selected">
      <div aria-hidden className="absolute border border-[#5b8fd4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Check1 />
    </div>
  );
}

function EmotionIcon1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="EmotionIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_184_470)" id="EmotionIcon">
          <path d="M7.5 1.25V3.75" id="Vector" stroke="var(--stroke-0, #5B8FD4)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M7.5 11.25V13.75" id="Vector_2" stroke="var(--stroke-0, #5B8FD4)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M1.25 7.5H3.75" id="Vector_3" stroke="var(--stroke-0, #5B8FD4)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M11.25 7.5H13.75" id="Vector_4" stroke="var(--stroke-0, #5B8FD4)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M3.0625 3.0625L4.875 4.875" id="Vector_5" stroke="var(--stroke-0, #5B8FD4)" strokeLinecap="round" strokeWidth="0.875" />
          <path d={svgPaths.p1a893400} id="Vector_6" stroke="var(--stroke-0, #5B8FD4)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M11.9375 3.0625L10.125 4.875" id="Vector_7" stroke="var(--stroke-0, #5B8FD4)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M4.875 10.125L3.0625 11.9375" id="Vector_8" stroke="var(--stroke-0, #5B8FD4)" strokeLinecap="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_184_470">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <EmotionIcon1 />
      <p className="[word-break:break-word] font-['Victor_Mono:SemiBold',sans-serif] font-semibold leading-[12px] relative shrink-0 text-[#5b8fd4] text-[10px] tracking-[0.225px] whitespace-nowrap">FOMO</p>
    </div>
  );
}

function RowFomo() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Row - FOMO">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative size-full">
          <CheckboxSelected1 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function EmotionIcon2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="EmotionIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="EmotionIcon">
          <path d={svgPaths.p1539c900} id="Vector" stroke="var(--stroke-0, #D4708A)" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p11b58580} id="Vector_2" opacity="0.6" stroke="var(--stroke-0, #D4708A)" strokeLinejoin="round" strokeWidth="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <EmotionIcon2 />
      <p className="[word-break:break-word] font-['Victor_Mono:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6b6058] text-[10px] tracking-[0.225px] whitespace-nowrap">Craving</p>
    </div>
  );
}

function RowCraving() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Row - Craving">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative size-full">
          <Checkbox />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function EmotionIcon3() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="EmotionIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="EmotionIcon">
          <path d="M1.875 5H13.125" id="Vector" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M1.875 8.125H13.125" id="Vector_2" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M1.875 11.25H8.75" id="Vector_3" stroke="var(--stroke-0, #D97706)" strokeLinecap="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <EmotionIcon3 />
      <p className="[word-break:break-word] font-['Victor_Mono:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6b6058] text-[10px] tracking-[0.225px] whitespace-nowrap">Bored</p>
    </div>
  );
}

function RowBored() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Row - Bored">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative size-full">
          <Checkbox1 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function EmotionIcon4() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="EmotionIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="EmotionIcon">
          <path d={svgPaths.p2eaec080} id="Vector" stroke="var(--stroke-0, #E07B39)" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <EmotionIcon4 />
      <p className="[word-break:break-word] font-['Victor_Mono:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6b6058] text-[10px] tracking-[0.225px] whitespace-nowrap">Excited</p>
    </div>
  );
}

function RowExcited() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Row - Excited">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative size-full">
          <Checkbox2 />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[18px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function EmotionIcon5() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="EmotionIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="EmotionIcon">
          <path d={svgPaths.p6195900} id="Vector" stroke="var(--stroke-0, #5A9469)" strokeWidth="0.875" />
          <path d={svgPaths.p38628fc0} id="Vector_2" stroke="var(--stroke-0, #5A9469)" strokeLinecap="round" strokeWidth="0.6125" />
          <path d={svgPaths.p29587d00} fill="var(--fill-0, #5A9469)" id="Vector_3" />
          <path d="M7.5 7.5L9.375 5.625" id="Vector_4" stroke="var(--stroke-0, #5A9469)" strokeLinecap="round" strokeWidth="0.7" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <EmotionIcon5 />
      <p className="[word-break:break-word] font-['Victor_Mono:Medium',sans-serif] font-medium leading-[12px] relative shrink-0 text-[#6b6058] text-[10px] tracking-[0.225px] whitespace-nowrap">Intentional</p>
    </div>
  );
}

function RowIntentional() {
  return (
    <div className="justify-self-stretch relative self-stretch shrink-0" data-name="Row - Intentional">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative size-full">
          <Checkbox3 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Checklist() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Checklist">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative size-full">
        <RowStressed />
        <RowFomo />
        <RowCraving />
        <RowBored />
        <RowExcited />
        <RowIntentional />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[17px] pt-[16px] relative size-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(11,93,52,0.15)] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Checklist />
    </div>
  );
}