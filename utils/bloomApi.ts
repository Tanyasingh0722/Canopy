const BASE = "/make-server-c26a1590";

function getUID(): string {
  let uid = localStorage.getItem("bloom_uid");
  if (!uid) {
    uid = crypto.randomUUID();
    localStorage.setItem("bloom_uid", uid);
  }
  return uid;
}

export async function saveUrgeLog(entry: {
  item_name: string;
  item_price: number;
  emotion_tag: string;
  drawing_data: string;
}) {
  const uid = getUID();
  const full = { ...entry, outcome: null, created_at: new Date().toISOString() };
  const res = await fetch(`${BASE}/urges`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid, entry: full }),
  });
  const data = await res.json();
  // store the key so the plant screen can update outcome
  if (data.key) localStorage.setItem("currentUrgeKey", data.key);
  return data;
}

export async function updateOutcome(outcome: "resisted" | "purchased", extras?: {
  upcycle_note?: string;
  amount_saved?: number;
  amount_spent?: number;
}) {
  const key = localStorage.getItem("currentUrgeKey");
  if (!key) return;
  await fetch(`${BASE}/urges/outcome`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key, outcome, ...extras }),
  });
}

export async function getAllUrges() {
  const uid = getUID();
  const res = await fetch(`${BASE}/urges/${uid}`);
  const data = await res.json();
  return data.entries ?? [];
}