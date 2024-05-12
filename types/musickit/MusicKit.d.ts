/**
 * Use the MusicKit namespace to configure MusicKit JS and to access app
 * instances, control music playback, and fetch data from the Apple Music API.
 */
declare namespace MusicKit {
  /**
   * A configuration for an app.
   */
  interface App {
    /**
     * The name of your application.
     */
    name?: string | undefined;
    /**
     * Current build number or version of your app.
     */
    build?: string | undefined;
    /**
     * A URL to the image used to represent your application.
     */
    icon?: string | undefined;
  }

  /**
   * A dictionary of configuration options for the MusicKit instance.
   */
  interface MusicKitConfiguration {
    /**
     * The developer token to identify yourself as a trusted developer and
     * member of the Apple Developer Program.
     */
    developerToken?: string | undefined;
    /**
     * The version of your app.
     */
    app?: App | undefined;
    /**
     * The playback bit rate of the music player.
     */
    bitrate?: PlaybackBitrate | undefined;
    /**
     * The current storefront for this MusicKit configuration.
     */
    storefrontId?: string | undefined;
  }

  /**
   * An object that represents artwork.
   */
  interface Artwork {
    /**
     * The average background color of the image.
     */
    bgColor: string;
    /**
     * The maximum height available for the image.
     */
    height: number;
    /**
     * The maximum width available for the image.
     */
    width: number;
    /**
     * The primary text color used if the background color gets displayed.
     */
    textColor1: string;
    /**
     * The secondary text color used if the background color gets displayed.
     */
    textColor2: string;
    /**
     * The tertiary text color used if the background color gets displayed.
     */
    textColor3: string;
    /**
     * The final post-tertiary text color used if the background color gets displayed.
     */
    textColor4: string;
    /**
     * The URL to request the image asset. {w}x{h}must precede image filename,
     * as placeholders for the width and height values as described above. For example, {w}x{h}bb.jpeg).
     */
    url: string;
  }

  enum PlaybackBitrate {
    HIGH = 256,
    STANDARD = 64,
  }

  enum PlaybackStates {
    none = 0,
    loading = 1,
    playing = 2,
    paused = 3,
    stopped = 4,
    ended = 5,
    seeking = 6,
    waiting = 7,
    stalled = 8,
    completed = 9,
  }

  enum PlayerRepeatMode {
    all = 0,
    none = 1,
    one = 2,
  }

  enum PlayerShuffleMode {
    off = 0,
    songs = 1,
  }

  /**
   * Configure a MusicKit instance.
   */
  function configure(config: MusicKitConfiguration): Promise<MusicKitInstance>;

  /**
   * Access the configured MusicKit Instance singleton.
   */
  function getInstance(): MusicKitInstance;

  /**
   * Returns a URL that can be used as the source for an image or picture tag, etc.
   *
   * @param artwork An artwork resource object.
   * @param width The desired artwork width.
   * @param height The desired artwork height.
   */
  function formatArtworkURL(
    artwork: object,
    width: number,
    height: number
  ): string;
}
