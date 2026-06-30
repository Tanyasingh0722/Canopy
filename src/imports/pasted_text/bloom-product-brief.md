Product Brief — Config Makeathon 2025

Bloom
grows from restraint.
A mindfulness tool that turns the impulse to buy into a grounding ritual — and every resisted urge into something beautiful.

Figma Make
Behavioral Design
Mindfulness App
Fintech Adjunct
The Problem

Modern fintech has anesthetized the cost of spending.
Digital payments don't just lower friction — they actively suppress the brain's natural loss-aversion circuits. Physical cash activates the anterior insula, triggering a felt sense of cost. One-click checkout bypasses it entirely, leaving the nucleus accumbens to run unchecked through a decision window of under 20 seconds.

The result is a generation of high-functioning, stressed adults using micro-purchases as mood regulation — and existing tools like Snoop or Emma only show them the damage after the dopamine has already crashed.

"By the time the prefrontal cortex registers a decision, the transaction is already complete."

19s
Average online decision window before purchase
52%
Higher impulse buying rate among millennials
30–50%
Craving reduction from affect labeling alone
The Concept

Restrain. Draw. Watch it grow.
Bloom intercepts the impulse loop before the transaction completes. The core interaction is a 60-second freehand drawing ritual — a grounding exercise backed by somatic and DBT research — that re-engages the prefrontal cortex by anchoring the user in tactile sensation rather than visual desire.

Every time a user resists an impulse purchase, a flower petal is added to their personal garden. Every time they act on one, a flower wilts. The garden is a living record of their relationship with money — a long-term motivator built from accumulated small wins.

Core mechanic
The 60-second drawing canvas
Freehand flower drawing with realistic physics and haptic-style feedback. Eyes-closed mode available — shifts attention from visual triggers to proprioceptive sensation.

Reward layer
The Bloom Pot
The "saved" amount is instantly moved to a locked fund (via bank API). Turns "not buying" into an active win with real, tangible consequence.

Reflection prompt
Identity challenge
"Are you buying this for who you actually are, or for an idealized version of yourself?" Surfaces the rationalization blind spot at the moment of highest activation.

Accountability loop
The Upcycle
When a purchase goes through, the flower wilts. Recovery requires answering: "What emotional need did this serve?" — compost that fertilizes future growth.

Who it's for

The Impulse Seeker
A high-stress professional, typically 25–38, who uses micro-purchases as mood regulation. Not reckless — thoughtful, self-aware, genuinely trying to be better. Existing tools have failed them because they arrive too late, after the cortisol crash and the guilt.

🌸
Anya, 29
UX Designer, hybrid role, perpetually in checkout
She thinks
"I've had a hard day. I deserve this."
She feels
Cortisol-driven anxiety → dopamine spike → crash
She says
"It's just a small treat for my future self."
She does
One-click checkout, biometric confirmation, regret
Her pain
Financial guilt and the clutter-cortisol spiral
What she wants
To feel in control without feeling punished
The moment Bloom catches
1
Trigger
High-stress meeting spikes cortisol. A targeted ad fires a dopamine hit in the VTA. Anya is already at checkout without consciously deciding to be there.

2
Anticipation
Dopamine peaks in the nucleus accumbens. The "buying" already feels good — before anything has been purchased. The 19-second window is closing.

3
Bloom intercepts
Via mobile share extension, Bloom opens before the final tap. Anya labels her state — "Cool Blue" (stress) — and begins drawing. 60 seconds, haptic feedback, eyes closed.

4
Prefrontal recovery
System 2 re-engages. Anya declines. The saved amount moves to her Bloom Pot. A petal appears in her garden. The restraint is visible, tangible, and rewarded.

Build approach

Built entirely in Figma Make
Bloom is a Makeathon prototype, so the full product is scoped to demonstrate the core loop: the drawing canvas, the garden visualization, and the reflection prompt. Below is the intended component architecture for the Make build.

Drawing canvas
Freehand SVG path input with physics-influenced stroke width. Bloom shape emerges from user's own gesture — each session draws one petal.
Emotion labeling prompt
Color-coded affect palette (Cool Blue = stress, Warm Orange = excitement, etc.) — reduces cognitive load while naming the state.
The garden
A persistent visual record — flowers in various states of bloom or wilt. Each session adds to or changes the garden state. The long-arc motivator.
Upcycle flow
Post-purchase reflection prompt, non-punitive. Produces a "compost" data point that informs future identity prompts — compassionate accountability over toxic shame.
Open questions & risks

What we're still testing
!
The friction paradox
If the "log this item" on-ramp takes more than 5 seconds, we miss the 19-second window and become the thing we're trying to prevent. The share extension flow has to be near-instant.

?
Drawing as chore vs. ritual
Users may perceive the eyes-closed drawing as irritating rather than grounding — especially first-time. Onboarding framing and haptic quality are critical to the first impression.

?
Toxic shame risk from the wilt mechanic
If the withering flower feels punitive rather than compassionate, it may cause users to disengage entirely rather than re-engage with the Upcycle. Tone and animation need to stay soft.

→
Bloom Pot feasibility in Makeathon scope
Real-time bank API integration is a post-Makeathon feature. In the prototype, the "saved" amount is simulated — the core loop still works, and this is clearly scoped for future build.

Next steps

Three things to prove before June 18
1
The 5-second intercept. Validate that the mobile share extension flow can open Bloom and present the drawing canvas fast enough to catch the user inside the decision window.

2
Drawing vs. breathing A/B. Compare tactile freehand drawing against a guided breathing animation for craving reduction. Both are grounded in the same neuroscience — which lands better as a first interaction?

3
Garden as long-term motivator. Prototype the garden state with 5–7 sessions of data. Does the accumulation feel meaningful, or does it read as gamification? The difference is in the visual language of the flowers.

Bloom
