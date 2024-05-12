declare namespace MusicKit {
  /**
   * This object provides access to a player instance, and through the player instance, access to control playback.
   */
  interface MusicKitInstance {
    /**
     * An instance of the MusicKit API.
     */
    api: API;
    /**
     * The bit rate for the media player.
     */
    bitrate: PlaybackBitrate;
    /**
     * The duration of the nowPlayingItem, in seconds.
     */
    readonly currentPlaybackDuration: number;
    /**
     * Progress percentage between 0 and 1 indicating the current play head position for the nowPlayingItem.
     * Useful for showing a playback progress bar UI, for instance.
     */
    readonly currentPlaybackProgress: number;
    /**
     * The current position of the play head for the nowPlayingItem, in seconds.
     */
    readonly currentPlaybackTime: number;
    /**
     * The current remaining playback time for the nowPlayingItem, in seconds.
     */
    readonly currentPlaybackTimeRemaining: number;
    /**
     * This is set to true after the user successfully signs in and authorizes the application via the authorize() method,
     * or upon configuring the MusicKit instance if the user had previously authorized your application.
     */
    readonly isAuthorized: boolean;
    /**
     * Indicates whether the player is in the playing state.
     */
    readonly isPlaying: boolean;
    /**
     * This is the MediaItem that is currently playing from the Queue.
     */
    readonly nowPlayingItem: MediaItem | undefined;
    /**
     * The index of the nowPlayingItem in the current playback Queue.
     */
    readonly nowPlayingItemIndex: number;
    /**
     * The speed of playback, which is set directly on the HTMLMediaElement as the HTMLMediaElement.playbackRate property.
     * The default rate is 1.0, but this can be set to a value higher or lower to control the speed of playback.
     * Different browsers will have different upper and lower bounds for this value.
     */
    playbackRate: number;
    /**
     * The current playback state of the media player.
     */
    readonly playbackStates: PlaybackStates;
    /**
     * When a user with a valid Apple Music subscription authorizes your app,
     * MusicKit will allow full playback of content from the Apple Music catalog.
     * If the app does not have user authorization, then playback is restricted to non-DRM preview assets,
     * which are snippets of the full media.
     *
     * You can set this property to true to restrict MusicKit to playing only the preview assets,
     * even when full playback is available. Setting this to false will not force full playback,
     * but will instead return to the default behavior of determining what asset to play
     * based on the user’s authorization and Apple Music Subscription status.
     */
    previewOnly: boolean;
    /**
     * The current playback queue of the music player.
     */
    readonly queue: Queue;
    /**
     * Indicates whether the current playback queue is empty.
     */
    queueIsEmpty: boolean;
    /**
     * Set this to an Enum value from MusicKit.PlayerRepeatMode to control the repeat behavior during playback.
     */
    repeatMode: PlayerRepeatMode;
    /**
     * While playing a MediaItem, seekSeconds will be an Object with properties BACK and FORWARD,
     * which represent the number of seconds that the play head will be moved backwards or
     * forwards when calling seekBackward or seekForward, respectively.
     */
    seekSeconds: SeekSeconds | undefined;
    /**
     * Set this to an Enum value from MusicKit.PlayerShuffleMode to control the shuffle behavior during playback.
     *
     * Setting this property will not change the nowPlayingItem.
     * If there is a nowPlayingItem when setting shuffleMode it will always be the first item in the shuffled queue.
     */
    shuffleMode: PlayerShuffleMode;
    /**
     * Deprecated: This property is deprecated, use shuffleMode instead.
     */
    shuffle: boolean;
    /**
     * This is the id of the authorized user’s storefront, if applicable. It defaults to 'us'.
     */
    readonly storefrontCountryCode: string;
    /**
     * This is the id of the configured storefront for the instance of MusicKit.
     * It can be set explicitly when calling MusicKit.configure(), or after configuration by calling changeUserStorefront.
     * It will default to the storefrontCountryCode.
     */
    readonly storefrontId: string;
    /**
     * If creating a custom video player, you can set this property to a DOM Element of type HTMLVideoElement,
     * which is the element type of a <video> tag.
     * MusicKit will then use that element for video playback, for instance Music Videos.
     */
    videoContainerElement: HTMLVideoElement | undefined;
    /**
     * The volume of audio playback, which is set directly on the HTMLMediaElement as the HTMLMediaElement.volume property.
     * This value ranges between 0, which would be muting the audio, and 1, which would be the loudest possible.
     */
    volume: number;

    /**
     * Listen to an Event on the MusicKit Instance.
     *
     * @param name The event to start listening to.
     * @param callback The function that is called when an event is published.
     * @param options If true, will automatically remove the event listener after it has fired once.
     * When false, callback will continue to be called each time the event is published until
     * removeEventListener() is called with the appropriate arguments.
     */
    addEventListener(
      name: string,
      callback: () => any,
      options?: boolean
    ): void;

    /**
     * Returns a Promise that resolves with a string representing the user.
     * If authorization fails or is canceled by the user, the resolved value is undefined.
     */
    authorize(): Promise<string | void>;

    /**
     * Begins playing the MediaItem at the specified index in the queue immediately.
     *
     * @param index The index position of the MediaItem in the queue to begin playing.
     */
    changeToMediaAtIndex(index: number): Promise<void>;

    /**
     * Begins playing a specific MediaItem in the queue immediately.
     *
     * @param descriptor The descriptor can be a MediaItem instance or the id of a specific item in the queue.
     */
    changeToMediaItem(descriptor: MediaItem | string): Promise<void>;

    /**
     * Changes the user storefront.
     *
     * @param storefrontId The id of the storefront to change to.
     */
    changeUserStorefront(storefrontId: string): Promise<void>;

    /**
     * Clears the queue of MediaItems. Does not stop playback or clear the nowPlayingItem.
     */
    clearQueue(): Promise<Queue>;

    /**
     * Cross-browser method to close a full-screen element, when applicable.
     */
    exitFullscreen(): Promise<void>;

    /**
     * Sets the volume to 0, storing the previous value for use with unmute() later, if necessary.
     */
    mute(): void;

    /**
     * Pauses playback of the nowPlayingItem.
     */
    pause(): void;

    /**
     * Initiates playback of the nowPlayingItem.
     */
    play(): void;

    /**
     * Inserts the MediaItem(s) defined by QueueOptions at the position indicated in the current queue.
     *
     * @param position The index position in the queue to insert the new MediaItem(s) at.
     * Position 0 is the first item in the queue.
     * @param options The option used to set the playback queue.
     */
    playAt(position: Number, options: QueueOptions): Promise<Queue | void>;

    /**
     * Inserts the MediaItem(s) defined by QueueOptions after the last MediaItem in the current queue.
     *
     * @param options The option used to set the playback queue.
     */
    playLater(options: QueueOptions): Promise<Queue | void>;

    /**
     * Inserts the MediaItem(s) defined by QueueOptions immediately after the nowPlayingItem in the current queue.
     *
     * @param options The option used to set the playback queue.
     * @param clear Optionally clear out the remaining queue items.
     */
    playNext(options: QueueOptions, clear?: boolean): Promise<Queue | void>;

    /**
     * Remove an event listener previously configured on the MusicKit Instance via addEventListener.
     *
     * @param name The event to stop listening to.
     * @param callback The exact function reference passed when originally calling addEventListener for the same event name.
     */
    removeEventListener(name: string, callback: () => any): void;

    /**
     * Cross-browser method to take an element full-screen, where supported. Useful for creating custom controller UI.
     *
     * @param element The DOM Node that you intend to make full-screen.
     */
    requestFullscreen(element: HTMLElement): Promise<void>;

    /**
     * Seeks the current play head backwards by a predetermined number of a seconds.
     * The number of seconds can be determined for the current track by referencing seekSeconds.BACK.
     */
    seekBackward(): Promise<void>;

    /**
     * Seeks the current play head forward by a predetermined number of a seconds.
     * The number of seconds can be determined for the current track by referencing seekSeconds.FORWARD.
     */
    seekForward(): Promise<void>;

    /**
     * Sets the play head to a specified time within the nowPlayingItem.
     *
     * @param time The time, in seconds, to move the play head to for the nowPlayingItem.
     */
    seekToTime(time: number): Promise<void>;

    /**
     * Sets the current playback Queue to an Apple Music catalog resource or list of songs.
     *
     * @param options The option used to set the playback queue.
     */
    setQueue(options: QueueOptions): Promise<Queue | void>;

    /**
     * Starts playback of the next item in the playback queue.
     */
    skipToNextItem(): Promise<void>;

    /**
     * Starts playback of the previous item in the playback queue.
     */
    skipToPreviousItem(): Promise<void>;

    /**
     * Stops the currently playing item.
     */
    stop(): Promise<void>;

    /**
     * Unauthorizes the user from using your application. It will invalidate the Music User Token.
     */
    unauthorize(): Promise<void>;

    /**
     * Unmute playback volume, resetting it to the value it was at before muting.
     */
    unmute(): Promise<void>;
  }

  /**
   * While playing a MediaItem, seekSeconds will be an Object with properties BACK and FORWARD,
   * which represent the number of seconds that the play head will be moved.
   */
  interface SeekSeconds {
    /**
     * The number of seconds that the play head will be moved backwards when calling seekBackward.
     */
    BACK: number;
    /**
     * The number of seconds that the play head will be moved forwards when calling seekForward.
     */
    FORWARD: number;
  }
}
