import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import {
  Banner,
  Album,
  Divider,
  About,
  LatestSharedPosts,
  ContactForm,
  ALBUM_SECTION_SANITY_ID,
  ABOUT_SECTION_SANITY_ID,
} from "../components/press-page-sections";

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
];

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
];

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
];

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const IndexPage = ({ data }) => {
  const [aboutSectionProps] = data.allSanitySection.nodes.filter(
    (node) => node._id === ABOUT_SECTION_SANITY_ID
  );
  const [albumSectionProps] = data.allSanitySection.nodes.filter(
    (node) => node._id === ALBUM_SECTION_SANITY_ID
  );

  return (
    <>
      <Banner />
      <Layout>
        <div className="page-section page-section-album">
          <Album description={albumSectionProps._rawDescription} />
        </div>
        <Divider />
        <div className="page-section flex-container flex-main-center">
          <About description={aboutSectionProps._rawDescription} />
        </div>
        <Divider />
        <div className="page-section">
          <LatestSharedPosts />
        </div>
        <Divider />
        <div className="page-section">
          <ContactForm />
        </div>
      </Layout>
    </>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;

export const query = graphql`
  query AlbumContentQuery {
    allSanitySection {
      nodes {
        name
        _id
        _rawDescription
      }
    }
  }
`;
