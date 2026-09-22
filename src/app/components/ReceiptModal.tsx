import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Trash2, Share, X } from "lucide-react";
import { Flower } from "../types";
import { VoicePlayer } from "./Garden";

const TEAL = "#1C2E2A";
const GREEN = "#4DAA57";
const RED = "#D94539";
const HEAD = "'Passion One', sans-serif";
const BODY = "'Slabo 13px', serif";
const RULE = "#b6b5b1";

interface ReceiptModalProps {
  selectedFlower: Flower;
  onClose: () => void;
  onDelete: (id: string) => void;
}

export function ReceiptModal({
  selectedFlower,
  onClose,
  onDelete,
}: ReceiptModalProps) {
  const zigzagClip = useMemo(() => {
    const pts: string[] = ["0% 0%", "100% 0%"];
    const TEETH = 34;
    for (let i = TEETH; i >= 0; i--) {
      const xPct = ((i / TEETH) * 100).toFixed(2);
      const yVal = i % 2 === 0 ? "100%" : "calc(100% - 6px)";
      pts.push(`${xPct}% ${yVal}`);
    }
    return `polygon(${pts.join(", ")})`;
  }, []);

  const dateObj = new Date(selectedFlower.date);
  const dateStr = dateObj
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
    .toUpperCase();
    
  const timeStr = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const isBloomed = selectedFlower.state === "bloomed";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[101] overflow-y-auto flex flex-col items-center no-scrollbar"
      style={{
        paddingTop: "64px", // To give space above the receipt
        paddingBottom: "48px",
        pointerEvents: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        background: "rgba(0,0,0,0.58)",
        backdropFilter: "blur(8px)",
        fontFamily: BODY,
      }}
    >
      {/* RECEIPT WRAPPER */}
      <div
        className="relative w-full max-w-[420px] shrink-0 px-4"
      >
        <div 
          className="relative w-full rounded-t-md overflow-hidden flex flex-col"
          style={{
            filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.32))",
          }}
        >
          {/* PRINTER HEAD (fixed at top of the paper block) */}
          <div
            className="w-full h-[64px] shrink-0 flex items-center justify-between px-5 relative z-50"
            style={{
              background: "#182622",
            }}
          >
            <div className="flex-1" />
            <div className="flex items-center gap-2 flex-1 justify-center">
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: GREEN }} />
              <p
                style={{
                  fontFamily: HEAD,
                  color: "#FAFAFA",
                  fontSize: 16,
                  letterSpacing: "3px",
                  opacity: 0.9,
                }}
              >
                CANOPY PRINTER
              </p>
            </div>
            <div className="flex-1 flex justify-end">
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* TICKET PAPER */}
          <motion.div
            key={`receipt-${selectedFlower.id}`}
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative w-full flex flex-col"
            style={{
              background: "#F9F8F5",
              clipPath: zigzagClip,
              paddingBottom: "24px",
              minHeight: "400px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CONTENT INSIDE PAPER */}
            <div className="pt-10 px-8 pb-4">
              
              {/* Optional Drawing */}
              {selectedFlower.drawing && (
                <div className="flex justify-center mb-10">
                  <img
                    src={selectedFlower.drawing}
                    alt="flower drawing"
                    style={{
                      maxHeight: 140,
                      objectFit: "contain",
                      filter: isBloomed
                        ? "drop-shadow(0px 6px 18px rgba(77,170,87,0.25))"
                        : "grayscale(1) brightness(0.65) drop-shadow(0px 6px 16px rgba(32,70,84,0.15))",
                    }}
                  />
                </div>
              )}

              {/* CURRENT STATE & STAMP */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(28,46,42,0.45)",
                      letterSpacing: "0.15em",
                      marginBottom: 4,
                    }}
                  >
                    CURRENT STATE
                  </p>
                  <p
                    style={{
                      fontFamily: HEAD,
                      fontSize: 40,
                      color: TEAL,
                      lineHeight: 1,
                    }}
                  >
                    {selectedFlower.emotion?.name || "Unknown"}
                  </p>
                </div>
                <div
                  style={{
                    transform: isBloomed ? "rotate(-6deg)" : "rotate(6deg)",
                    border: `2px solid ${isBloomed ? GREEN : RED}`,
                    color: isBloomed ? GREEN : RED,
                    padding: "6px 14px",
                    borderRadius: "4px",
                    fontFamily: HEAD,
                    fontSize: 20,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    opacity: 0.85,
                    marginTop: 8,
                  }}
                >
                  {isBloomed ? "APPROVED" : "REJECTED"}
                </div>
              </div>

              <div style={{ borderBottom: `1.5px dashed ${RULE}`, margin: "24px 0", opacity: 0.6 }} />

              {/* Date & Time */}
              <div className="flex justify-between items-center mb-6">
                <p
                  style={{
                    fontFamily: HEAD,
                    fontSize: 16,
                    color: TEAL,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {dateStr}
                </p>
                <p
                  style={{
                    fontFamily: BODY,
                    fontSize: 14,
                    color: "rgba(28,46,42,0.5)",
                  }}
                >
                  {timeStr}
                </p>
              </div>

              {/* Subject */}
              {(selectedFlower.itemName || selectedFlower.whoFor) && (
                <div className="mb-6">
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(28,46,42,0.45)",
                      letterSpacing: "0.15em",
                      marginBottom: 8,
                    }}
                  >
                    SUBJECT
                  </p>
                  <p style={{ fontFamily: BODY, fontSize: 18, color: TEAL }}>
                    {[selectedFlower.itemName, selectedFlower.whoFor]
                      .filter(Boolean)
                      .join(" / ")}
                  </p>
                </div>
              )}

              {/* Itemized Details (Journal) */}
              {selectedFlower.journal && (
                <div className="mb-6">
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(28,46,42,0.45)",
                      letterSpacing: "0.15em",
                      marginBottom: 8,
                    }}
                  >
                    ITEMIZED DETAILS
                  </p>
                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: 17,
                      color: TEAL,
                      lineHeight: 1.5,
                    }}
                  >
                    {selectedFlower.journal}
                  </p>
                </div>
              )}

              {/* Item Images */}
              {selectedFlower.photos && selectedFlower.photos.length > 0 && (
                <div className="mb-6">
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(28,46,42,0.45)",
                      letterSpacing: "0.15em",
                      marginBottom: 8,
                    }}
                  >
                    ITEM IMAGE
                  </p>
                  <div className="flex gap-3">
                    {selectedFlower.photos.map((src, i) => (
                      <div
                        key={i}
                        className="bg-white border p-1"
                        style={{ borderColor: "rgba(0,0,0,0.1)" }}
                      >
                        <img
                          src={src}
                          alt=""
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Voice Note */}
              {selectedFlower.voiceNote && (
                <div className="mb-6">
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(28,46,42,0.45)",
                      letterSpacing: "0.15em",
                      marginBottom: 8,
                    }}
                  >
                    VOICE NOTE
                  </p>
                  <VoicePlayer src={selectedFlower.voiceNote} />
                </div>
              )}

              <div style={{ borderBottom: `1.5px dashed ${RULE}`, margin: "24px 0", opacity: 0.6 }} />

              {/* TOTAL AMOUNT */}
              {selectedFlower.amount > 0 && (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <p
                      style={{
                        fontSize: 11,
                        color: "rgba(28,46,42,0.45)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      TOTAL AMOUNT
                    </p>
                    <p style={{ fontFamily: HEAD, fontSize: 36, color: TEAL }}>
                      ₹{selectedFlower.amount.toFixed(2)}
                    </p>
                  </div>
                  <div style={{ borderBottom: `1.5px dashed ${RULE}`, margin: "24px 0", opacity: 0.6 }} />
                </>
              )}

              {/* Barcode and Branding */}
              <div className="flex flex-col items-center mt-10 mb-8">
                <div
                  className="flex gap-[3px] mb-6 h-[50px] w-full justify-center opacity-70"
                >
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: Math.random() > 0.6 ? 2.5 : 1.5,
                        background: TEAL,
                        opacity: Math.random() > 0.2 ? 0.9 : 0.3,
                      }}
                    />
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: HEAD,
                    fontStyle: "italic",
                    fontSize: 16,
                    color: "rgba(28,46,42,0.6)",
                    marginBottom: 10,
                  }}
                >
                  Thank you for checking in with yourself.
                </p>
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "rgba(28,46,42,0.45)",
                  }}
                >
                  CANOPY · PAUSE BEFORE YOU PURCHASE
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4 justify-between mt-8 mb-4">
                <button
                  onClick={() => onDelete(selectedFlower.id)}
                  className="w-[52px] h-[52px] shrink-0 flex items-center justify-center rounded-[12px] transition-transform active:scale-95"
                  style={{
                    border: `1.5px solid ${RULE}`,
                    color: "rgba(28,46,42,0.5)",
                  }}
                >
                  <Trash2 className="w-[20px] h-[20px]" />
                </button>

                <button
                  onClick={() => {
                    if (selectedFlower.drawing) {
                      const link = document.createElement("a");
                      link.href = selectedFlower.drawing;
                      link.download = `flower-${selectedFlower.id}.png`;
                      link.click();
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-3 rounded-[12px] transition-transform active:scale-95"
                  style={{
                    border: `1.5px solid ${RULE}`,
                    color: TEAL,
                    fontFamily: HEAD,
                    fontSize: 16,
                    letterSpacing: "0.08em",
                  }}
                >
                  <Share className="w-[18px] h-[18px]" /> SAVE TICKET
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 flex items-center justify-center gap-2 rounded-[12px] transition-transform active:scale-95"
                  style={{
                    background: TEAL,
                    color: "#FAFAFA",
                    fontFamily: HEAD,
                    fontSize: 16,
                    letterSpacing: "0.08em",
                  }}
                >
                  DISCARD
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
