import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use("*", logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-c26a1590/health", (c) => {
  return c.json({ status: "ok" });
});

// Flowers
app.get("/make-server-c26a1590/flowers", async (c) => {
  try {
    const flowers = (await kv.get("user_flowers")) || [];
    return c.json({ flowers });
  } catch (e: any) {
    return c.json({ error: e.message }, 500);
  }
});

app.post("/make-server-c26a1590/flowers", async (c) => {
  try {
    const body = await c.req.json();
    await kv.set("user_flowers", body.flowers);
    return c.json({ success: true });
  } catch (e: any) {
    return c.json({ error: e.message }, 500);
  }
});
// Urge Logs — Save
app.post("/make-server-c26a1590/urges", async (c) => {
  try {
    const body = await c.req.json();
    const { uid, entry } = body;
    const key = `urge:${uid}:${entry.created_at}`;
    await kv.set(key, entry);
    return c.json({ success: true, key });
  } catch (e: any) {
    return c.json({ error: e.message }, 500);
  }
});

// Urge Logs — Get all for this device
app.get("/make-server-c26a1590/urges/:uid", async (c) => {
  try {
    const uid = c.req.param("uid");
    const entries = await kv.getByPrefix(`urge:${uid}:`);
    return c.json({ entries });
  } catch (e: any) {
    return c.json({ error: e.message }, 500);
  }
});

// Urge Logs — Update outcome (resist or buy)
app.post("/make-server-c26a1590/urges/outcome", async (c) => {
  try {
    const body = await c.req.json();
    const {
      key,
      outcome,
      upcycle_note,
      amount_saved,
      amount_spent,
    } = body;
    const existing = await kv.get(key);
    await kv.set(key, {
      ...existing,
      outcome,
      upcycle_note,
      amount_saved,
      amount_spent,
    });
    return c.json({ success: true });
  } catch (e: any) {
    return c.json({ error: e.message }, 500);
  }
});
Deno.serve(app.fetch);