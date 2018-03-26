import React from "react";
import Button from "../components/button";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Link from "../components/link"
import Shapes from "../components/shapes";

export default ({ data }) => {
  const heroCta = (
    <div>
      <p className="text-2xl">Our next meetup is April 11, 2018</p>
      <Button
        href="https://www.meetup.com/pei-designers/"
        external={true}
        style="shadow"
        className="mt-4 mb-4"
      >
        Sign up for updates
      </Button>
      <p className="text-sm">
        <Link href="http://www.google.com/calendar/event?location=Atlantic+Technology+Centre+-+90+University+Avenue+-+Charlottetown%2C+PE%2C+CA&action=TEMPLATE&sprop=name%3AP.E.I+Designers&sprop=website%3Ahttps%3A%2F%2Fwww.meetup.com%2Fpei-designers%2Fevents%2F249067407&details=For+full+details%2C+including+the+address%2C+and+to+RSVP+see%3A+https%3A%2F%2Fwww.meetup.com%2Fpei-designers%2Fevents%2F249067407%0A%0AFor+the+first+official+meetup+on+human-centered+design%2C+we+have+a+keynote+speaker+covering+the+basic...&text=Introduction+to+Human-centered+Design&dates=20180424T220000Z%2F20180425T000000Z" external={true}>or add it to your calendar</Link>
      </p>
    </div>
  );

  return (
    <div>
      <Shapes className="max-w-2xl" />
      <Hero
        className="relative"
        siteMetadata={data.siteMetadata}
        headline="Where designers of all kinds collide."
        textline="PEI Design is the #1 location for learning, growing, and
              networking for designers."
        cta={heroCta}
      />
      <div className="bg-purple pt-16 pr-4 pb-16 pl-4 relative text-white w-100">
        <div className="sm:flex sm:flex-row m-auto max-w-2xl">
          <div className="sm:w-1/2">
            <h2>💬 Join the conversation on Slack</h2>
            <p>Discuss design, find jobs, and meet new people.</p>
            <Button
              className="mt-4 sm:mb-4 mb-16"
              style="inverted"
              color="white"
            >
              Join today
            </Button>
          </div>
          <div className="sm:w-1/2">
            <h2>💌 Get the latest in our newsletter</h2>
            <p>Subscribe to our monthly newsletter for local and worldwide news on all aspects of design!</p>
            <Button className="mt-4 mb-4" style="inverted" color="white">
              Register now
            </Button>
          </div>
        </div>
      </div>
      <Footer siteMetadata={data.siteMetadata} />
    </div>
  );
};

export const query = graphql`
  query metaData {
    site {
      siteMetadata {
        title
        description
        siteURL
        menu
      }
    }
  }
`;
