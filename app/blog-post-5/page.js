"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PreFooter from "@/components/ui/PreFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function BlogPostFive() {
  const [blog5Content, setBlog5Content] = useState(null);

  useEffect(() => {
    const query = `*[_type == "blog5"][0]`;

    Promise.all([
      client.fetch(query),
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]).then(([data]) => {
      setBlog5Content(data);
    });
  }, []);

  if (!blog5Content) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Image src="/footer.gif" alt="vase" width={100} height={100} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen">
      <Navbar />
      <section className="mt-[51px] lg:mt-[150px] mb-[40px] lg:mb-[96px] flex flex-col justify-center items-center px-[44px]">
        <h1 className="heading-1">{blog5Content.title}</h1>
        <h2 className="heading-2 mt-1 lg:mt-[24px] mb-[24px] lg:mb-[48px]">
          {blog5Content.subtitle}
        </h2>
        <p className="body-small">{blog5Content.author}</p>
      </section>
      <section className="px-[44px]">
        <Image src="/blog-man-1.png" alt="flowers" width={692} height={490} />
      </section>
      <section className="px-[44px] mt-[40px] lg:mt-[96px] mb-[80px] lg:mb-[64px] flex flex-col justify-center items-center lg:max-w-[700px]">
        <div className="flex flex-col justify-center items-center">
          <div>
            <p className="body-text">{blog5Content.section1Paragraph}</p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog5Content.section1Paragraph1}
            </p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog5Content.section1Paragraph2}
            </p>
            <p className="body-text">
              <span className="ml-4"></span>
              {blog5Content.section1Paragraph3}
            </p>
          </div>
          <h1 className="heading-1 my-[24px] lg:my-[48px]">
            {blog5Content.section2Heading}
          </h1>
          <div>
            <p className="body-text">{blog5Content.section2Paragraph}</p>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">01. THE S.T.O.P. SKILL</h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  {`When those anxious thoughts start racing, STOP is your pause
                  button – a powerful skill developed by psychologist Dr. Marsha
                  Linehan. As the creator of Dialectical Behavioral Therapy
                  (DBT), Linehan designed this technique specifically for
                  moments when emotions threaten to overwhelm us:`}
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  i.
                </p>
                <p className="body-text">
                  {`S: Stop. Just pause. Notice that you're caught in a thought
                  spiral. Recognize this familiar pattern.`}
                </p>
              </div>
              <div className="body-text flex ml-18">
                <p className="body-text mx-2">•</p>
                <p className="body-text mb-[24px]">
                   
                  {`Example: When you notice thoughts like "They haven't
                  responded to my message, they must be upset with me," mentally
                  say "Stop" to yourself to create space between your initial
                  thought and the automatic spiral.`}
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  ii.
                </p>
                <p className="body-text">
                  T: Take a step back. Create some mental distance. Step away
                  from the spiral rather than getting pulled deeper into it.
                </p>
              </div>
              <div className="body-text flex ml-18">
                <p className="body-text mx-2">•</p>
                <p className="body-text mb-[24px]">
                  {`Example: Imagine yourself physically stepping back from your
                  thoughts, like you're watching them on a movie screen instead
                  of being inside the movie. Say to yourself, "I notice I'm
                  having anxious thoughts about the slow response."`}
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  iii.
                </p>
                <p className="body-text">
                  {`O: Observe. Notice what's happening in your body right now.
                  Heart racing? Stomach tight? What thoughts are looping? No
                  judging, just noticing.`}
                </p>
              </div>
              <div className="body-text flex ml-18">
                <p className="body-text mx-2">•</p>
                <p className="body-text mb-[24px]">
                  {`Example: Place a hand on your chest and simply observe any
                  physical sensations: "My shoulders are tense, my breathing is
                  shallow, and I keep thinking they're ignoring me on purpose."
                  Just name what's there without trying to change it yet.`}
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  iv.
                </p>
                <p className="body-text">
                  {`P: Proceed mindfully. Now choose what to do based on what's
                  actually happening, not what your anxiety is telling you about
                  the situation.`}
                </p>
              </div>
              <div className="body-text flex ml-18">
                <p className="body-text mx-2">•</p>
                <p className="body-text mb-[24px]">
                  {`Example: Ask yourself, "What do I need right now?" Perhaps
                  it's giving them more time to respond, distracting yourself
                  with another activity, or reaching out to someone else for
                  support rather than sending a worried follow-up message.`}
                </p>
              </div>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">02. Check The Facts</h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  {`When your brain insists "they probably hate me," get curious
                  first using this core DBT emotion regulation skill:`}
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  i.
                </p>
                <p className="body-text">
                  What concrete evidence do I actually have for this thought?
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  ii.
                </p>
                <p className="body-text">
                  What facts suggest this interpretation might not be accurate?
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  iii.
                </p>
                <p className="body-text">
                  How reliable is my thinking right now? Am I in an anxious
                  state that might be clouding my judgment?
                </p>
              </div>
              <div className="body-text flex ml-18">
                <p className="body-text mx-2">•</p>
                <p className="body-text mb-[24px]">
                  {`Example: When a colleague walks by without saying hello,
                  before assuming they're upset with you, check the facts: Have
                  they greeted you consistently before? Did they seem distracted
                  or in a hurry? Have they said anything recently to indicate a
                  problem?`}
                </p>
              </div>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">03. The 5-5-5 Grounding Exercise</h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  When anxiety has you time-traveling into potential future
                  disasters, activating your senses can bring you back to the
                  present moment: 
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  i.
                </p>
                <p className="body-text">
                  See 5 things around you. Take note of their colors, shapes,
                  and how light hits them.
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  ii.
                </p>
                <p className="body-text">
                  Feel 5 sensations outside of your body. Your feet pressing
                  into the floor. The texture of your shirt. Air on your skin.
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  iii.
                </p>
                <p className="body-text">
                  Hear 5 sounds in your space. The hum of electronics. Traffic
                  outside. Your own breathing.
                </p>
              </div>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2 text-left">
                {`04. The "Would I Say This to a Friend?" Check`}
              </h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  {`Your inner critic can be brutal in ways you'd never be to
                  someone you care about. This self-compassion technique,
                  highlighted in Dr. Kristin Neff’s research, helps you treat
                  yourself with the same kindness you’d show others. When those
                  harsh thoughts come, pause and ask: "Would I ever say this to
                  my best friend?" If not, what would you say instead? Try
                  offering that same kindness to yourself.`}
                </p>
              </div>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  {`When you think, "I'm so awkward — everyone noticed I said the
                  wrong thing”, ask yourself if you'd say that to a friend who
                  made the same small conversational mistake. You'd likely say
                  something like, "I doubt anyone even noticed, and even if they
                  did, everyone misspeaks sometimes. It doesn't define who you
                  are." Try directing that same compassionate response toward
                  yourself.`}
                </p>
              </div>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2">05. “Name It to Tame It”</h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  {`Based on the term coined by Dr. Daniel Siegel, there's power
                  in simple naming. Instead of being swept away by "they're
                  judging me," try saying: "I notice I'm having the thought that
                  they're judging me" or “the narrative that I am telling myself
                  is they are judging me”. This tiny shift creates breathing
                  room between you and the anxious thought — it's just a thought
                  passing through, not the whole truth of who you are.`}
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  i.
                </p>
                <p className="body-text">
                  {`Example: If you find yourself obsessing, "I ruined that
                  presentation completely," try saying, "My mind is telling me
                  the story that I ruined the presentation." Notice how this
                  creates distance between you and the thought, making it feel
                  less overwhelming and absolute.`}
                </p>
              </div>
            </div>
            <div className="my-[24px] flex flex-col justify-center items-start">
              <h2 className="heading-2 text-left">
                06. Give The Most Generous Assumption
              </h2>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  {`When anxiety interprets situations in the most threatening way
                  possible, deliberately choose the most generous interpretation
                  instead. As researcher Brené Brown explains, generosity means
                  extending "the most generous interpretation possible to the
                  intentions, words, and actions of others" (Brown, 2015). This
                  practice isn't about naive optimism — it's about recognizing
                  that our anxious minds often automatically jump to the least
                  generous interpretation, when there are usually many other
                  explanations that are equally or more likely. By deliberately
                  considering alternative, more generous possibilities, you
                  balance your perspective.`}
                </p>
              </div>
              <div className="body-text flex">
                <p className="body-text mx-2">•</p>
                <p className="body-text">
                  {`The key to success is making this a consistent practice. Each
                  time you catch yourself assuming the worst, pause and ask:
                  "What would be the most generous way to interpret this
                  situation?" Over time, your brain gets better at generating
                  these alternatives automatically.`}
                </p>
              </div>
              <div className="body-text flex ml-12">
                <p className="body-text mx-2 w-4 flex justify-end items-start">
                  i.
                </p>
                <p className="body-text">
                  {`Example: If someone seems distracted during your conversation,
                  rather than assuming "They're bored by me," try "They might
                  have something stressful happening that has nothing to do with
                  me." If a text goes unanswered, instead of "They're ignoring
                  me," consider "Their phone might be on silent" or "They're
                  probably busy and will respond when they can."`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="heading-1 my-[24px] lg:my-[48px]">
          {blog5Content.section3Heading}
        </h1>
        <div>
          <p className="body-text">{blog5Content.section3Paragraph}</p>
          <div className="body-text flex mt-[24px]">
            <p className="body-text mx-2">•</p>
            <p className="body-text">
              {`Daily mindfulness moments: Even just 5 minutes of noticing your
              breath helps you catch spirals earlier. It's like training your
              brain to recognize when it's being hijacked.`}
            </p>
          </div>
          <div className="body-text flex">
            <p className="body-text mx-2">•</p>
            <p className="body-text">
              {`Self-compassion rituals: Maybe it's a hand on your heart when
              you're stressed, or phrases you repeat when anxiety hits. Small
              reminders that you deserve kindness, especially when things feel
              hard.`}
            </p>
          </div>
          <div className="body-text flex">
            <p className="body-text mx-2">•</p>
            <p className="body-text">
              {`Gradual exposure: Avoiding feared situations feels safer but
              actually feeds anxiety. Gently wading into mild discomfort (with
              support) teaches your nervous system you can handle more than you
              think.`}
            </p>
          </div>
          <div className="body-text flex mb-[24px]">
            <p className="body-text mx-2">•</p>
            <p className="body-text">
              Professional support: A therapist skilled in CBT, DBT, or ACT can
              be like a personal trainer for your mind, helping you build
              customized skills for your specific thought patterns.
            </p>
          </div>
          <p className="body-text">{blog5Content.section3Paragraph1}</p>
          <p className="body-text">
            <span className="ml-4"></span>
            {blog5Content.section3Paragraph2}
          </p>
        </div>
      </section>
      <section className="mb-[80px] lg:mb-[156px] px-[44px] flex flex-col justify-center items-center lg:max-w-[700px]">
        <h1 className="heading-1 mb-[37px] max-w-[200px]">
          {blog5Content.referenceHeading}
        </h1>
        <hr className="mb-[24px]" />
        {blog5Content.listItems &&
          blog5Content.listItems.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-start items-start w-full">
                <p className="body-small !text-left">{item}</p>
              </div>
              {index < blog5Content.listItems.length - 1 && (
                <hr className="my-[15px] lg:my-[24px]" />
              )}
            </div>
          ))}
        <hr className="mt-[24px]" />
        <h2 className="heading-2 mt-[80px] lg:mt-[96px] mb-[24px] lg:mb-[48px] lg:max-w-[400px]">
          {blog5Content.referenceSubheading}
        </h2>
        <button className="button-main" href="#">
          {blog5Content.referenceButton}
        </button>
      </section>
      <PreFooter />
      <Footer />
    </div>
  );
}
