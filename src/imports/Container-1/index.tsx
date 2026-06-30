import svgPaths from "./svg-bn934pb3bw";
import imgContainer from "./cbba9115fb590daa573bfb2aaaad974c0e3c5db0.png";

function Container1() {
  return <div className="absolute left-[250px] rounded-[140px] size-[280px] top-[-70px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Victor_Mono:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#0b5d34] text-[8px] tracking-[1.6px] uppercase whitespace-nowrap">pause — breathe — record</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[35px] relative shrink-0 w-[287.156px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Special_Elite:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1a2420] text-[26px] tracking-[-0.39px] whitespace-nowrap">
          <span className="leading-[28.6px]">{`What are you `}</span>
          <span className="leading-[28.6px] text-[#5b8fd4]">wanting?</span>
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[287.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Heading />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(60,50,40,0.07)] content-stretch flex items-center justify-center p-px relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0" data-name="Button (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[4px] relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 pb-[16px] pt-[24px] px-[24px] top-0 w-[460px]" data-name="Container">
      <Container3 />
      <ButtonMargin />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[312px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Victor_Mono:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#0b5d34] text-[8px] tracking-[1.28px] uppercase whitespace-nowrap">i want to buy</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute content-stretch flex flex-col h-[26px] items-start justify-center left-0 overflow-clip top-px w-[312px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['Special_Elite:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(26,36,32,0.5)] w-full">new headphones…</p>
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TextInput />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[100px] relative size-full">
        <Paragraph1 />
        <InlineContent />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p12a85900} id="Vector" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04167" />
          <path d={svgPaths.p380a7500} id="Vector_2" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04167" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Victor_Mono:Medium',sans-serif] font-medium leading-[10.5px] left-[25.5px] text-[#0b5d34] text-[7px] text-center top-[-0.5px] whitespace-nowrap">Upload image</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(60,50,40,0.06)] left-[332px] min-w-[80px] rounded-[14px] top-[16px] w-[80px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center min-w-[inherit] px-[13px] py-[7px] relative size-full">
        <Icon1 />
        <Text />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(11,93,52,0.15)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[13px] pt-[16px] relative size-full">
        <Container6 />
        <Button1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Victor_Mono:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#0b5d34] text-[8px] tracking-[1.28px] uppercase whitespace-nowrap">it costs</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[10.539px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Special_Elite:Regular',sans-serif] leading-[30px] left-0 not-italic text-[#0b5d34] text-[20px] top-0 whitespace-nowrap">$</p>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30px] items-start justify-center left-[14.54px] overflow-clip top-0 w-[397.461px]" data-name="Number Input">
      <p className="[word-break:break-word] font-['Special_Elite:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(26,36,32,0.5)] w-full">0</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <NumberInput />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(11,93,52,0.15)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[13px] pt-[16px] relative size-full">
        <Paragraph2 />
        <ContainerMargin />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[97.281px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Victor_Mono:Regular',sans-serif] font-normal leading-[12px] left-0 text-[#0b5d34] text-[8px] top-[0.5px] tracking-[1.28px] uppercase whitespace-nowrap">{`what's stirring?`}</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[103.68px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Victor_Mono:Regular',sans-serif] font-normal leading-[13.5px] left-0 text-[#5b8fd4] text-[9px] top-[-0.5px] tracking-[0.36px] whitespace-nowrap">tense, overwhelmed</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function EmotionIcon() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="EmotionIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="EmotionIcon">
          <path d={svgPaths.p202b3b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.875" />
          <path d={svgPaths.p15be5a20} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.875" />
          <path d={svgPaths.p9128380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[37.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Victor_Mono:Medium',sans-serif] font-medium leading-[7.5px] left-[19px] text-[7.5px] text-[rgba(255,255,255,0.92)] text-center top-[-0.5px] tracking-[0.225px] whitespace-nowrap">Stressed</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#5b8fd4] content-stretch drop-shadow-[0px_4px_8px_rgba(91,143,212,0.22)] flex gap-[8px] items-center left-0 px-[13px] py-[11px] rounded-[14px] top-0 w-[133.328px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#5b8fd4] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <EmotionIcon />
      <Text2 />
    </div>
  );
}

function EmotionIcon1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="EmotionIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_184_295)" id="EmotionIcon">
          <path d="M7.5 1.25V3.75" id="Vector" stroke="var(--stroke-0, #C0463A)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M7.5 11.25V13.75" id="Vector_2" stroke="var(--stroke-0, #C0463A)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M1.25 7.5H3.75" id="Vector_3" stroke="var(--stroke-0, #C0463A)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M11.25 7.5H13.75" id="Vector_4" stroke="var(--stroke-0, #C0463A)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M3.0625 3.0625L4.875 4.875" id="Vector_5" stroke="var(--stroke-0, #C0463A)" strokeLinecap="round" strokeWidth="0.875" />
          <path d={svgPaths.p1a893400} id="Vector_6" stroke="var(--stroke-0, #C0463A)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M11.9375 3.0625L10.125 4.875" id="Vector_7" stroke="var(--stroke-0, #C0463A)" strokeLinecap="round" strokeWidth="0.875" />
          <path d="M4.875 10.125L3.0625 11.9375" id="Vector_8" stroke="var(--stroke-0, #C0463A)" strokeLinecap="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_184_295">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[18.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Victor_Mono:Medium',sans-serif] font-medium leading-[7.5px] left-[9.5px] text-[#6b6058] text-[7.5px] text-center top-[-0.5px] tracking-[0.225px] whitespace-nowrap">FOMO</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex gap-[8px] items-center left-[139.33px] px-[13px] py-[11px] rounded-[14px] top-0 w-[133.336px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <EmotionIcon1 />
      <Text3 />
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

function Text4() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[33.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Victor_Mono:Medium',sans-serif] font-medium leading-[7.5px] left-[17.5px] text-[#6b6058] text-[7.5px] text-center top-[-0.5px] tracking-[0.225px] whitespace-nowrap">Craving</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex gap-[8px] items-center left-[278.66px] px-[13px] py-[11px] rounded-[14px] top-0 w-[133.328px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <EmotionIcon2 />
      <Text4 />
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

function Text5() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[23.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Victor_Mono:Medium',sans-serif] font-medium leading-[7.5px] left-[12px] text-[#6b6058] text-[7.5px] text-center top-[-0.5px] tracking-[0.225px] whitespace-nowrap">Bored</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex gap-[8px] items-center left-0 px-[13px] py-[11px] rounded-[14px] top-[43px] w-[133.328px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <EmotionIcon3 />
      <Text5 />
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

function Text6() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[33.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Victor_Mono:Medium',sans-serif] font-medium leading-[7.5px] left-[17.5px] text-[#6b6058] text-[7.5px] text-center top-[-0.5px] tracking-[0.225px] whitespace-nowrap">Excited</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex gap-[8px] items-center left-[139.33px] px-[13px] py-[11px] rounded-[14px] top-[43px] w-[133.336px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <EmotionIcon4 />
      <Text6 />
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

function Text7() {
  return (
    <div className="h-[7.5px] relative shrink-0 w-[51.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Victor_Mono:Medium',sans-serif] font-medium leading-[7.5px] left-[26px] text-[#6b6058] text-[7.5px] text-center top-[-0.5px] tracking-[0.225px] whitespace-nowrap">Intentional</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex gap-[8px] items-center left-[278.66px] px-[13px] py-[11px] rounded-[14px] top-[43px] w-[133.328px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <EmotionIcon5 />
      <Text7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(11,93,52,0.15)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] relative size-full">
        <Container10 />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Victor_Mono:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#0b5d34] text-[8px] tracking-[1.28px] uppercase whitespace-nowrap">buying for</p>
      </div>
    </div>
  );
}

function ForIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ForIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ForIcon">
          <path d={svgPaths.pe034900} id="Vector" stroke="var(--stroke-0, #FCFCFC)" strokeWidth="1.2" />
          <path d={svgPaths.p2b850098} id="Vector_2" stroke="var(--stroke-0, #FCFCFC)" strokeLinecap="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-[29.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Victor_Mono:Medium',sans-serif] font-medium leading-[11.25px] left-[15px] text-[7.5px] text-[rgba(240,237,232,0.85)] text-center top-[-1px] tracking-[0.45px] uppercase whitespace-nowrap">myself</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#1a2420] content-stretch flex flex-col gap-[8px] items-center left-0 px-px py-[15px] rounded-[14px] top-0 w-[132px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#1a2420] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ForIcon />
      <Text8 />
    </div>
  );
}

function ForIcon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ForIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ForIcon">
          <path d={svgPaths.p22de8600} id="Vector" stroke="var(--stroke-0, #0B5D34)" strokeWidth="1.125" />
          <path d={svgPaths.p1dd1200} id="Vector_2" opacity="0.6" stroke="var(--stroke-0, #0B5D34)" strokeWidth="1.125" />
          <path d={svgPaths.pd727890} id="Vector_3" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeWidth="1.125" />
          <path d={svgPaths.p76bb780} id="Vector_4" opacity="0.6" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-[59.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Victor_Mono:Medium',sans-serif] font-medium leading-[11.25px] left-[30.5px] text-[#6b6058] text-[7.5px] text-center top-[-1px] tracking-[0.45px] uppercase whitespace-nowrap">someone else</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col gap-[8px] items-center left-[140px] px-px py-[15px] rounded-[14px] top-0 w-[132px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ForIcon1 />
      <Text9 />
    </div>
  );
}

function ForIcon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ForIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ForIcon">
          <path d={svgPaths.p3077bf80} id="Vector" stroke="var(--stroke-0, #0B5D34)" strokeWidth="1.2" />
          <path d="M9 5.25V9L11.625 11.625" id="Vector_2" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M12 3H15V6" id="Vector_3" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
          <path d="M11.25 3.75L15 3" id="Vector_4" stroke="var(--stroke-0, #0B5D34)" strokeLinecap="round" strokeWidth="1.05" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-[44.555px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Victor_Mono:Medium',sans-serif] font-medium leading-[11.25px] left-[22.5px] text-[#6b6058] text-[7.5px] text-center top-[-1px] tracking-[0.45px] uppercase whitespace-nowrap">future me</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col gap-[8px] items-center left-[280px] px-px py-[15px] rounded-[14px] top-0 w-[132px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(11,93,52,0.15)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ForIcon2 />
      <Text10 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[67.25px] relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(11,93,52,0.15)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] relative size-full">
        <Paragraph5 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[22px] relative shrink-0 w-[412px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Victor_Mono:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#0b5d34] text-[8px] tracking-[1.28px] uppercase whitespace-nowrap">{`what's on your mind?`}</p>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-0 overflow-clip top-0 w-[412px]" data-name="Text Area">
      <p className="[word-break:break-word] font-['Victor_Mono:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[12px] text-[rgba(26,36,32,0.5)] w-full">write freely here…</p>
    </div>
  );
}

function InlineContent1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TextArea />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[16px] relative size-full">
        <Paragraph6 />
        <InlineContent1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[537px] items-start left-0 overflow-clip px-[24px] top-[87px] w-[460px]" data-name="Container">
      <Container5 />
      <Container7 />
      <Container9 />
      <Container12 />
      <Container14 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15px] relative shrink-0 w-[45.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Victor_Mono:Medium',sans-serif] font-medium leading-[15px] left-[23px] text-[#fcfcfc] text-[10px] text-center top-[-0.5px] tracking-[1.6px] uppercase whitespace-nowrap">log it</p>
      </div>
    </div>
  );
}

function Container16() {
  return <div className="bg-[#5b8fd4] relative rounded-[5px] shadow-[0px_0px_12px_0px_#5b8fd4] shrink-0 size-[10px]" data-name="Container" />;
}

function Button11() {
  return (
    <div className="bg-[rgba(26,36,32,0.4)] opacity-35 relative rounded-[20px] shrink-0 w-[412px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
        <Text11 />
        <Container16 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-px pb-[28px] pt-[16px] px-[24px] top-[624px]" data-name="Container">
      <Button11 />
    </div>
  );
}

function VariantLedger() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[714px] mix-blend-multiply relative shrink-0 w-full" data-name="VariantLedger">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
        <Container2 />
        <Container4 />
        <Container15 />
      </div>
    </div>
  );
}

function LogUrgeModalVariations() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-end overflow-clip" data-name="LogUrgeModalVariations">
      <VariantLedger />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgContainer} />
      </div>
      <LogUrgeModalVariations />
    </div>
  );
}