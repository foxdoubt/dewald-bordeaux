import * as React from "react";
import "./press-page-sections.css";
import AlbumArtwork from "../images/dewald-bordeaux-self-titled-album-cover.jpg";
export const Banner = () => <div className="banner"></div>;

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
