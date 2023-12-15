import * as React from "react";
import "./press-page-sections.css";
import AlbumArtwork from "../images/dewald-bordeaux-self-titled-album-cover.jpg";
export const Banner = () => <div className="banner"></div>;

export const Divider = () => <div className="divider"></div>;

const SoundCloudButton = () => {
  return (
    <div className="soundcloud-button-container">
      <div className="soundcloud-button">
        <a
          href="https://soundcloud.com/dewaldbordeaux/sets/dewaldbordeaux/s-1Z5FfCKwhG8?si=c932ac2ee0a54246a2779d0b81a1beeb&amp;utm_campaign=social_sharing&amp;utm_medium=text&amp;utm_source=clipboard"
          class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element"
          target="_blank"
          data-initialized="true"
        >
          Preview on Soundcloud
        </a>
      </div>
    </div>
  );
};

export const Album = () => {
  return (
    <div className="album-container">
      <div className="album-description-container">
        <div className="album-description">
          <div className="album-description-title">
            <h3>Debut Album</h3>
          </div>
          <div className="album-description-text">
            If we pay attention, the loneliest days offer plenty of lighter
            notes. Within the depths of love, one can still feel profoundly
            broken. DeWald/Bordeaux’s debut self-titled album takes up the messy
            contradictions of emotional life with a palette of acoustic
            instruments, driving and dreamy indie rock and lush cinematic
            arrangements. Each song is a unique tangle of darkness and light,
            reminding us that it’s okay to feel connected and isolated in the
            same breath — that there’s beauty and grace within the tumult of the
            sensitive soul.
          </div>
        </div>
        <SoundCloudButton />
      </div>

      <div className="album-image-container">
        <img alt="Debut album artwork" src={AlbumArtwork} />
      </div>
    </div>
  );
};

export const About = () => (
  <div>
    <h3 className="text-align-center">About</h3>
    <div>
      <p className="about-text">
        Formed in 2019, DeWald/Bordeaux is a collaboration between producer,
        songwriter and composer Chris Bordeaux and singer-songwriter Daniel
        DeWald. The two first played music together back in the early aughts on
        Eastern Long Island where they grew up. In the intervening years,
        Bordeaux went on to tour the US and Europe with indie rock bands The
        Isles, Rahim (Frenchkiss Records) and Golden Suits (Yep Roc Records) and
        has scored multiple feature films, including Obvious Child and Landline.
        DeWald wrote and released music under the name Hayride Casualties and
        co-wrote with Darwin Deez (Lucky Number Music).
      </p>
      <p className="about-text">
        With complementary strengths and varied musical ideals, the duo’s
        mission statement is to make beautiful and timeless music worthy of the
        singer-songwriters of decades past who elevated the form. Their
        literary, self-aware and heartfelt approach will please the
        unsentimental, scrutinizing indie music listener and rewards multiple
        listens. In Dewald/Bordeaux, lovers of late 1960s/early 1970s
        singer-songwriters may hear vintage elements ranging from Graham
        Parsons, Emmit Rhodes, The Zombies, Paul McCartney and Gordon Lightfoot,
        along with more recent throwbacks like Elliott Smith and Mazzy Star.{" "}
      </p>
      <p className="about-text">
        Post release of their debut album, the duo is building a live show
        presentation and considering performance dates and venues, while
        Bordeaux collaborates with emerging artists in Brooklyn, NY, and DeWald
        explores his second love of painting.
      </p>
    </div>
  </div>
);

export const LatestSharedPosts = () => (
  <div className="text-align-center">
    <h3>Latest Shared Posts</h3>
    <div className="instagram-handles">
      <span>@chris_bordeaux2</span> and <span>@foxdoubt_</span>
    </div>
  </div>
);
